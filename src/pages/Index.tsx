import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-red-500 p-8">
      <h1 className="text-4xl font-bold text-white">Test Page</h1>
      <p className="text-white">If you can see this, React is working!</p>
      {/* Temporarily comment out complex components to test
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <Contact />
      */}
    </div>
  );
};

export default Index;