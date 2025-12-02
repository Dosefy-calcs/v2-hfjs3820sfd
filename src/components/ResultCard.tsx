import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type Classification = {
  class: string;
  description: string;
};

type ResultCardProps = {
  isComplete: boolean;
  totalScore: number;
  classification: Classification;
};

const ResultCard = ({ isComplete, totalScore, classification }: ResultCardProps) => {
  if (!isComplete) {
    return (
      <Card className="p-6 bg-muted/50 border-2 border-dashed border-border">
        <div className="flex items-center gap-3 text-muted-foreground">
          <AlertCircle className="w-5 h-5" />
          <div>
            <p className="font-semibold text-sm">RESULTADO</p>
            <p className="text-sm">Preencha os campos obrigatórios</p>
          </div>
        </div>
      </Card>
    );
  }

  const getColorClass = () => {
    if (totalScore <= 6) return "bg-success/10 border-success";
    if (totalScore <= 9) return "bg-primary/10 border-primary";
    return "bg-destructive/10 border-destructive";
  };

  const getTextColor = () => {
    if (totalScore <= 6) return "text-success";
    if (totalScore <= 9) return "text-primary";
    return "text-destructive";
  };

  return (
    <Card className={`p-6 border-2 shadow-elevated ${getColorClass()}`}>
      <div className="flex items-start gap-4">
        <CheckCircle2 className={`w-6 h-6 mt-1 ${getTextColor()}`} />
        <div className="flex-1">
          <p className="font-bold text-sm text-medical-subtitle mb-2">RESULTADO</p>
          <div className="space-y-2">
            <div className={`text-5xl font-bold ${getTextColor()}`}>
              {totalScore}
            </div>
            <div className="flex items-baseline gap-3">
              <span className={`text-3xl font-bold ${getTextColor()}`}>
                Classe {classification.class}
              </span>
              <span className="text-base text-medical-subtitle">
                {classification.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;
