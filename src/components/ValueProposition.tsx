import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Clock, Users, CheckCircle } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-24 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Last Generation Legal?
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your legal workflow with AI that understands the nuances of complex legal documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center border-border/50 hover:border-accent/50 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">90% Cost Savings</h3>
              <p className="text-muted-foreground">
                Replace expensive junior associate work with AI precision
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 hover:border-accent/50 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-legal-gold/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-legal-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Hours to Minutes</h3>
              <p className="text-muted-foreground">
                Generate complex filings in minutes instead of weeks
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 hover:border-accent/50 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Lawyer-Trained AI</h3>
              <p className="text-muted-foreground">
                Built by attorneys who understand legal complexity
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 hover:border-accent/50 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-legal-gold/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-legal-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Proven Accuracy</h3>
              <p className="text-muted-foreground">
                Consistent, reliable results you can trust
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-2xl p-12 border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$250k+</div>
              <p className="text-muted-foreground">Average annual savings per client</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-legal-gold mb-2">98%</div>
              <p className="text-muted-foreground">Document accuracy rate</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Available when you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;