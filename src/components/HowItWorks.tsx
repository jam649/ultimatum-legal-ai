import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brain, FileText, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Securely upload your existing legal documents, contracts, or case files to our platform.",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our lawyer-trained AI analyzes your documents and understands the legal context and requirements.",
      step: "02"
    },
    {
      icon: FileText,
      title: "Generate Drafts",
      description: "AI creates precise legal documents including CFIUS filings, bid protests, and complex litigation papers.",
      step: "03"
    },
    {
      icon: Download,
      title: "Review & File",
      description: "Download professional-grade legal documents ready for filing or further attorney review.",
      step: "04"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, powerful workflow that transforms your legal document creation process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Specialized Legal Document Types
            </h3>
            <p className="text-muted-foreground">
              Our AI excels at complex, high-stakes legal documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "CFIUS Filings & National Security Reviews",
              "Government Bid Protests & Procurement",
              "Securities Compliance & Regulatory Filings",
              "Complex Litigation Documents",
              "Mergers & Acquisitions Paperwork",
              "International Trade Compliance"
            ].map((useCase, index) => (
              <div key={index} className="flex items-center p-4 bg-card rounded-lg border border-border/50">
                <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                <span className="text-foreground font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;