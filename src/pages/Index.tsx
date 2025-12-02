import Header from "@/components/Header";
import CalculatorCard from "@/components/CalculatorCard";
import ContentTabs from "@/components/ContentTabs";
import { ArrowLeft } from "lucide-react";

const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <a href="https://www.dosefy.com.br/app/calculadoras" className="btn-voltar">
          <span className="btn-voltar__icon">
            <ArrowLeft className="w-5 h-5" />
          </span>
          Voltar
        </a>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Header />
      </div>

      {/* Main content - Two columns */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Calculator */}
          <CalculatorCard />

          {/* Right Column - Content Tabs */}
          <ContentTabs />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 mt-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Desenvolvido com precisão médica.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;