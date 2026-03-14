import { useMutation, useQuery } from "@tanstack/react-query";

/**
 * Submits an email to the waitlist API.
 * Expects the backend at POST /api/waitlist.
 */
export function useJoinWaitlist() {
  return useMutation({
    mutationFn: async (email: string) => {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json().catch(() => ({}));
      
      if (!res.ok) {
        if (res.status === 409) {
          throw new Error("duplicate");
        }
        throw new Error(data.error || "Failed to join waitlist. Please try again.");
      }
      
      return data;
    },
  });
}

/**
 * Fetches the total count of users on the waitlist.
 */
export function useWaitlistCount() {
  return useQuery({
    queryKey: ["waitlist-count"],
    queryFn: async () => {
      const res = await fetch("/api/waitlist");
      if (!res.ok) throw new Error("Failed to fetch count");
      const data = await res.json();
      return data.count as number;
    },
    // We don't need to refetch this constantly on a landing page
    staleTime: 60000, 
  });
}
