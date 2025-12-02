import { useState } from "react";
import { Card } from "@/components/ui/card";
import ParameterSelector from "./ParameterSelector";
import ResultCard from "./ResultCard";
type Scores = {
  bilirubin: number;
  albumin: number;
  inr: number;
  ascites: number;
  encephalopathy: number;
};
const CalculatorCard = () => {
  const [scores, setScores] = useState<Scores>({
    bilirubin: 0,
    albumin: 0,
    inr: 0,
    ascites: 0,
    encephalopathy: 0
  });
  const updateScore = (field: keyof Scores, value: number) => {
    setScores(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const totalScore = Object.values(scores).reduce((sum, val) => sum + val, 0);
  const isComplete = Object.values(scores).every(val => val > 0);
  const getClassification = (score: number) => {
    if (score <= 6) return {
      class: "A",
      description: "Compensada"
    };
    if (score <= 9) return {
      class: "B",
      description: "Significativa"
    };
    return {
      class: "C",
      description: "Descompensada"
    };
  };
  return <Card className="p-8 shadow-card border-border">
      {/* Title */}
      

      {/* Parameters */}
      <div className="space-y-6 mb-8">
        <ParameterSelector title="Bilirrubina (Total)" options={[{
        label: "<2 mg/dL",
        value: 1
      }, {
        label: "2–3 mg/dL",
        value: 2
      }, {
        label: ">3 mg/dL",
        value: 3
      }]} selected={scores.bilirubin} onSelect={val => updateScore("bilirubin", val)} />

        <ParameterSelector title="Albumina Sérica" options={[{
        label: ">3.5 g/dL",
        value: 1
      }, {
        label: "2.8–3.5 g/dL",
        value: 2
      }, {
        label: "<2.8 g/dL",
        value: 3
      }]} selected={scores.albumin} onSelect={val => updateScore("albumin", val)} />

        <ParameterSelector title="INR (Tempo de Protrombina)" options={[{
        label: "<1.7",
        value: 1
      }, {
        label: "1.7–2.3",
        value: 2
      }, {
        label: ">2.3",
        value: 3
      }]} selected={scores.inr} onSelect={val => updateScore("inr", val)} />

        <ParameterSelector title="Ascite" options={[{
        label: "Ausente",
        value: 1
      }, {
        label: "Leve/Controlada",
        value: 2
      }, {
        label: "Moderada/Severa",
        value: 3
      }]} selected={scores.ascites} onSelect={val => updateScore("ascites", val)} />

        <ParameterSelector title="Encefalopatia Hepática" options={[{
        label: "Nenhuma",
        value: 1
      }, {
        label: "Grau I-II",
        value: 2
      }, {
        label: "Grau III-IV",
        value: 3
      }]} selected={scores.encephalopathy} onSelect={val => updateScore("encephalopathy", val)} />
      </div>

      {/* Result */}
      <ResultCard isComplete={isComplete} totalScore={totalScore} classification={getClassification(totalScore)} />
    </Card>;
};
export default CalculatorCard;