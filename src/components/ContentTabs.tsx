import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Lightbulb } from "lucide-react";

const ContentTabs = () => {
  return (
    <Card className="p-8 shadow-card border-border">
      <Tabs defaultValue="next-steps" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="next-steps" className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Next Steps
          </TabsTrigger>
          <TabsTrigger value="evidence" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Evidence
          </TabsTrigger>
          <TabsTrigger value="insights" className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="next-steps" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-medical-title mb-4">
              Recomendações Clínicas
            </h3>
            <div className="space-y-4">
              <RecommendationItem
                title="Classe A (5-6 pontos)"
                description="Paciente compensado. Considerar tratamento da causa subjacente. Avaliação regular a cada 6-12 meses."
                color="success"
              />
              <RecommendationItem
                title="Classe B (7-9 pontos)"
                description="Disfunção significativa. Candidato potencial a transplante hepático. Monitoramento frequente necessário."
                color="primary"
              />
              <RecommendationItem
                title="Classe C (10-15 pontos)"
                description="Descompensação grave. Priorizar avaliação para transplante hepático. Cuidados paliativos podem ser indicados."
                color="destructive"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="evidence" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-medical-title mb-4">
              Encephalopathy Grades (FDA)
            </h3>
            <div className="space-y-3">
              <EvidenceItem
                grade="Grade 0"
                description="Sem encefalopatia detectável. Função mental normal."
              />
              <EvidenceItem
                grade="Grade I"
                description="Alterações triviais na consciência, euforia ou ansiedade. Diminuição da atenção. Alteração do padrão de sono."
              />
              <EvidenceItem
                grade="Grade II"
                description="Letargia ou apatia. Desorientação mínima para tempo ou lugar. Mudança sutil na personalidade. Comportamento inadequado."
              />
              <EvidenceItem
                grade="Grade III"
                description="Sonolência a semi-estupor. Responsivo a estímulos. Confusão. Desorientação grosseira."
              />
              <EvidenceItem
                grade="Grade IV"
                description="Coma. Não responsivo a dor."
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-medical-title mb-4">
              Creator Insights
            </h3>
            <div className="space-y-4 text-medical-subtitle">
              <p className="leading-relaxed">
                O escore Child-Pugh foi desenvolvido originalmente em 1964 por Child e Turcotte, sendo modificado por Pugh em 1972. É amplamente utilizado para avaliar o prognóstico de pacientes com cirrose hepática.
              </p>
              <p className="leading-relaxed">
                A classificação ajuda a estratificar os pacientes quanto à gravidade da doença hepática e tem implicações importantes no planejamento terapêutico, incluindo a decisão sobre transplante hepático.
              </p>
              <Card className="p-4 bg-primary/5 border-primary/20">
                <p className="text-sm font-medium text-primary">
                  💡 Nota clínica: O escore MELD (Model for End-Stage Liver Disease) tem sido cada vez mais utilizado como complemento ao Child-Pugh, especialmente na avaliação para transplante hepático.
                </p>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

const RecommendationItem = ({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: "success" | "primary" | "destructive";
}) => {
  const colorClasses = {
    success: "border-l-success bg-success/5",
    primary: "border-l-primary bg-primary/5",
    destructive: "border-l-destructive bg-destructive/5",
  };

  return (
    <div className={`border-l-4 p-4 rounded-r-lg ${colorClasses[color]}`}>
      <h4 className="font-semibold text-medical-title mb-1">{title}</h4>
      <p className="text-sm text-medical-subtitle leading-relaxed">{description}</p>
    </div>
  );
};

const EvidenceItem = ({ grade, description }: { grade: string; description: string }) => {
  return (
    <div className="flex gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
      </div>
      <div>
        <p className="font-semibold text-medical-title text-sm">{grade}</p>
        <p className="text-sm text-medical-subtitle leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ContentTabs;
