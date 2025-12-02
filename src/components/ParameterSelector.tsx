import { Card } from "@/components/ui/card";

type Option = {
  label: string;
  value: number;
};

type ParameterSelectorProps = {
  title: string;
  options: Option[];
  selected: number;
  onSelect: (value: number) => void;
};

const ParameterSelector = ({
  title,
  options,
  selected,
  onSelect,
}: ParameterSelectorProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-medical-title">{title}</h3>
      <div className="grid grid-cols-3 gap-3">
        {options.map((option) => (
          <Card
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`
              p-4 cursor-pointer transition-all duration-200 border-2
              ${
                selected === option.value
                  ? "border-primary bg-primary/5 shadow-card"
                  : "border-border hover:border-primary/50 hover:shadow-soft"
              }
            `}
          >
            <div className="text-center">
              <div className="text-sm font-medium text-medical-title">
                {option.label}
              </div>
              <div className="text-xs text-primary font-semibold mt-1">
                +{option.value}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ParameterSelector;
