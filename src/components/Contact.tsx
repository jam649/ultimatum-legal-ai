import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Join the legal revolution. Get started with Last Generation Legal today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CTA Card */}
            <Card className="bg-primary-foreground/5 border-primary-foreground/20 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                  Start Your Free Trial
                </h3>
                <p className="text-primary-foreground/80 mb-8">
                  Experience the power of lawyer-trained AI. Upload your first document and see the difference.
                </p>
                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full group">
                    Begin Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                    Schedule a Demo
                  </Button>
                </div>
                <p className="text-sm text-primary-foreground/60 mt-4 text-center">
                  No credit card required • 14-day free trial
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-primary-foreground/80 mb-8">
                  Have questions? Our team of legal technology experts is here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">Email</p>
                    <p className="text-primary-foreground/80">contact@lastgenlegal.ai</p>
                  </div>
                </div>


                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">Office</p>
                    <p className="text-primary-foreground/80">Washington, D.C.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/60 text-sm">
                  Founded and operated by experienced attorneys who understand the legal industry's challenges and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;