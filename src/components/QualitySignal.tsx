
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const isLongDescription = description && description.length > 60;
  const displayDescription = isLongDescription && !isExpanded 
    ? `${description.substring(0, 60)}...` 
    : description;

  const getStatusIcon = () => {
    switch (status) {
      case "critical":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    return trend === "up" ? (
      <TrendingUp className="h-3 w-3 text-green-500" />
    ) : (
      <TrendingDown className="h-3 w-3 text-destructive" />
    );
  };

  return (
    <>
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <HoverCard>
              <HoverCardTrigger asChild>
                <h3 className="text-sm font-medium text-muted-foreground truncate max-w-[180px] cursor-help">
                  {title}
                </h3>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p className="font-semibold">{title}</p>
              </HoverCardContent>
            </HoverCard>
            {getStatusIcon()}
          </div>
          
          <div className="flex items-baseline justify-between mb-2">
            <div className="flex items-baseline gap-1">
              <span className={cn(
                "text-xl font-bold",
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
            <div className="mt-1">
              <p className="text-xs text-muted-foreground leading-snug">{displayDescription}</p>
              
              {isLongDescription && (
                <div className="mt-1 flex justify-between items-center">
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    className="text-[10px] text-blue-500 hover:underline flex items-center"
                  >
                    {isExpanded ? (
                      <>Less <ChevronUp className="h-3 w-3 ml-0.5" /></>
                    ) : (
                      <>More <ChevronDown className="h-3 w-3 ml-0.5" /></>
                    )}
                  </button>
                  
                  <button 
                    onClick={() => setDialogOpen(true)}
                    className="text-[10px] text-blue-500 hover:underline"
                  >
                    Details
                  </button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {title}
              {getStatusIcon()}
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-between items-center py-2">
            <span className={cn(
              "text-2xl font-bold",
              status === "critical" && "text-destructive",
              status === "warning" && "text-yellow-500",
              status === "success" && "text-green-500"
            )}>
              {value}
            </span>
            <span className="text-sm text-muted-foreground">Updated: {date}</span>
          </div>
          <ScrollArea className="max-h-[300px] pr-4">
            {description && (
              <p className="text-sm">{description}</p>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};
