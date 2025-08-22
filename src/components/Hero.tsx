import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground mb-8">
            <Scale className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Founded & Operated by Lawyers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Last Generation
            <span className="block bg-gradient-to-r from-legal-gold to-accent bg-clip-text text-transparent leading-none pb-2">
              Legal
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-medium">
            An ultimatum for the legal industry.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI-powered legal document generation that delivers the precision of top-tier attorneys 
            at a fraction of the cost. Upload your documents and let our lawyer-trained AI draft your legal filings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" className="group">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              Schedule a Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Lightning Fast</h3>
              <p className="text-primary-foreground/70">Generate complex legal documents in minutes, not weeks</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-legal-gold/20 flex items-center justify-center mb-4">
                <Scale className="w-8 h-8 text-legal-gold" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Lawyer Precision</h3>
              <p className="text-primary-foreground/70">AI trained by experienced attorneys for accuracy</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Cost Effective</h3>
              <p className="text-primary-foreground/70">Save 90% on junior associate costs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;