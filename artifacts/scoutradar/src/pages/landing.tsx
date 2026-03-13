import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/WaitlistForm";
import { 
  Radar, 
  Search, 
  BrainCircuit, 
  Zap, 
  Target, 
  FileText, 
  Download,
  Users,
  Timer,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// Make sections fade in smoothly
const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
      scrolled 
        ? "bg-background/80 backdrop-blur-lg border-white/10 py-3 shadow-lg" 
        : "bg-transparent border-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary/20 p-2 rounded-xl flex items-center justify-center border border-primary/30 box-glow">
              <Radar className="h-6 w-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">ScoutRadar</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">How it Works</a>
            <a href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="flex items-center">
            <a href="#cta" className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Waitlist */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium text-white/80">Chrome Extension for Recruiters</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1] text-white mb-6"
            >
              Find the best LinkedIn candidates in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">seconds.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed max-w-xl"
            >
              ScoutRadar uses AI to instantly scan search results, rank top talent based on your criteria, and generate personalized outreach.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <WaitlistForm size="large" />
              
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-white/60">
                  Join <span className="text-white">1,000+</span> recruiters already on board
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:ml-auto"
            style={{ perspective: "1000px" }}
          >
            <div className="relative z-10 glass-panel p-2 rounded-[2rem] transform-gpu hover:rotate-y-0 transition-transform duration-700 hover:scale-[1.02]">
              {/* Fallback to a gradient placeholder if image fails, but instructions specify standard img */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 rounded-[2rem]" />
              <img 
                src={`${import.meta.env.BASE_URL}product-hero.png`} 
                alt="ScoutRadar UI overlay on LinkedIn" 
                className="rounded-[1.5rem] w-full h-auto shadow-2xl relative z-20"
                onError={(e) => {
                  // Fallback if local asset is missing during dev
                  e.currentTarget.src = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </div>
            
            {/* Decorative elements around image */}
            <div className="absolute -top-6 -right-6 bg-secondary/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl z-30 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 p-1.5 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-white/60 font-medium">Top Match</p>
                  <p className="text-sm font-bold text-white">98% Fit Score</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { label: "Recruiters", value: "2,500+" },
    { label: "Candidates Scanned", value: "50,000+" },
    { label: "Faster Sourcing", value: "40%" },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-sm font-semibold text-white/50 uppercase tracking-widest mb-8">
            Trusted by recruiters worldwide
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col py-4 md:py-0">
                <span className="text-4xl font-display font-bold text-white mb-2">{stat.value}</span>
                <span className="text-white/60 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Scan LinkedIn Search Results",
      description: "Run your normal LinkedIn search. Click the ScoutRadar icon to capture all visible candidates instantly."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-accent" />,
      title: "AI Ranks the Best Candidates",
      description: "Our AI evaluates profiles against your job description and scores them, bubbling the absolute best to the top."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: "Reach Out Faster",
      description: "Generate hyper-personalized connection requests and messages based on candidate profile data."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">How it works</h2>
          <p className="text-lg text-white/60">A seamless workflow that lives right where you already source candidates.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
          
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className="relative z-10 text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-3xl glass-panel flex items-center justify-center mb-6 box-glow relative group cursor-pointer">
                <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                {step.icon}
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center border-4 border-background">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 leading-relaxed px-4">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: <Target />, title: "AI Candidate Ranking", desc: "Instantly score candidate fit based on your custom job criteria." },
    { icon: <Search />, title: "LinkedIn Search Scanner", desc: "Extract dozens of profiles from a search page in a single click." },
    { icon: <FileText />, title: "Candidate Summaries", desc: "Get a 3-bullet TL;DR of why a candidate is (or isn't) a match." },
    { icon: <Zap />, title: "Personalized Outreach Generator", desc: "Draft high-converting InMails using profile context." },
    { icon: <Users />, title: "Candidate Pipeline Tracking", desc: "Save and organize prospects into project-specific lists." },
    { icon: <Download />, title: "Export to ATS or CRM", desc: "Push candidate data to Greenhouse, Lever, and others instantly." },
  ];

  return (
    <section id="features" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Everything you need to source faster.</h2>
          <p className="text-lg text-white/60 max-w-2xl">Powerful features designed specifically to eliminate the manual busywork of technical recruiting.</p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-white/60 leading-relaxed">{feat.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight">Turn LinkedIn into a<br/>recruiting powerhouse.</h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="relative mx-auto rounded-[2rem] border border-white/20 bg-white/5 p-2 shadow-2xl backdrop-blur-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={`${import.meta.env.BASE_URL}product-ui.png`} 
              alt="ScoutRadar Full Interface" 
              className="rounded-[1.5rem] border border-white/10 w-full object-cover"
              onError={(e) => {
                // Fallback if local asset is missing during dev
                e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop";
              }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      title: "Save hours of sourcing time",
      desc: "Stop opening 50 tabs to read profiles. See exactly who matches your requirements instantly from the search page."
    },
    {
      title: "Find hidden talent faster",
      desc: "Our AI understands context, catching great candidates who might not have perfectly optimized LinkedIn profiles."
    },
    {
      title: "Improve response rates",
      desc: "Generic templates get ignored. Send hyper-personalized messages based on specific details from their profile."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{b.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Simple, transparent pricing</h2>
          <p className="text-lg text-white/60">Start for free, upgrade when you need more power.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Free */}
          <FadeIn delay={0.1}>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white/80 mb-2">Starter</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-white">$0</span>
                <span className="text-white/50">/ forever</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-5 h-5 text-primary" /> 20 scans per day</li>
                <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-5 h-5 text-primary" /> Basic AI ranking</li>
                <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-5 h-5 text-primary" /> 1 saved pipeline</li>
              </ul>
              <a href="#cta" className="block w-full py-3 px-4 rounded-xl border border-white/20 text-white text-center font-semibold hover:bg-white/5 transition-colors">
                Get Started
              </a>
            </div>
          </FadeIn>

          {/* Pro */}
          <FadeIn delay={0.2} className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary to-accent rounded-3xl blur-xl opacity-20"></div>
            <div className="relative p-8 rounded-3xl bg-secondary/80 backdrop-blur-xl border border-primary/50 shadow-2xl transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Pro Recruiter</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-white">$49</span>
                <span className="text-white/50">/ month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-primary" /> Unlimited scans</li>
                <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-primary" /> Advanced custom criteria</li>
                <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-primary" /> AI Outreach Generator</li>
                <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-primary" /> ATS/CRM Integrations</li>
              </ul>
              <a href="#cta" className="block w-full py-3 px-4 rounded-xl bg-primary text-white text-center font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all">
                Join Waitlist
              </a>
            </div>
          </FadeIn>

          {/* Team */}
          <FadeIn delay={0.3}>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white/80 mb-2">Agency / Team</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-white/50">/ seat / month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-5 h-5 text-primary" /> Everything in Pro</li>
                <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-5 h-5 text-primary" /> Shared pipelines</li>
                <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-5 h-5 text-primary" /> Team analytics</li>
                <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-5 h-5 text-primary" /> Centralized billing</li>
              </ul>
              <a href="#cta" className="block w-full py-3 px-4 rounded-xl border border-white/20 text-white text-center font-semibold hover:bg-white/5 transition-colors">
                Contact Sales
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center p-12 md:p-16 rounded-[3rem] glass-panel border-primary/20 box-glow bg-secondary/50">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Start finding better candidates today</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join the waitlist to get early access to ScoutRadar. Free to try. No credit card required.
          </p>
          <div className="flex justify-center">
            <WaitlistForm size="large" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Radar className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-xl text-white">ScoutRadar</span>
            </div>
            <p className="text-white/50 max-w-xs">
              The AI-powered Chrome extension that helps recruiters find and engage top talent on LinkedIn faster than ever before.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">How it works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} ScoutRadar. All rights reserved.</p>
          <div className="flex space-x-6 text-white/40">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <ProductPreview />
        <Benefits />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
