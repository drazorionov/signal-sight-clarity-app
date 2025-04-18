
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, AlertTriangle, CheckCircle, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface QualitySignalProps {
  title: string;
  value: number | string;
  status: "critical" | "warning" | "success";
  date: string;
  trend?: "up" | "down";
  description?: string;
}

export const QualitySignal = ({
  title,
  value,
  status,
  date,
  trend,
  description
}: QualitySignalProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    return trend === "up" ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-destructive" />
    );
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {getStatusIcon()}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className={cn(
              "text-2xl font-bold",
              status === "critical" && "text-destructive",
              status === "warning" && "text-yellow-500",
              status === "success" && "text-green-500"
            )}>
              {value}
            </span>
            {getTrendIcon()}
          </div>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};
