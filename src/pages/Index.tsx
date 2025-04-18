
import { QualitySignal } from "@/components/QualitySignal";

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Quality Signals</h1>
        <p className="text-muted-foreground">
          Monitor and track key quality indicators
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <QualitySignal
          title="Number of Major Bugs"
          value="10%"
          status="critical"
          date="Apr 17"
          trend="up"
          description="Number of major bugs increased up to 10%"
        />
        
        <QualitySignal
          title="Test Strategy"
          value="No Test Strategy"
          status="warning"
          date="Apr 17"
          description="There is no Public Test Strategy found in scope of full assessment"
        />
        
        <QualitySignal
          title="AutoTests Coverage"
          value="30%"
          status="warning"
          date="Apr 17"
          description="The auto test coverage is lower than 30%"
        />
        
        <QualitySignal
          title="Support Request Trend"
          value="10"
          status="success"
          date="Apr 17"
          trend="down"
          description="The number of support requests submitted per month less than 10"
        />
        
        <QualitySignal
          title="Super Support Request Trend"
          value="10"
          status="success"
          date="Apr 18"
        />
      </div>
    </div>
  );
};

export default Index;
