
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
          description="Number of major bugs increased up to 10%. The system has experienced a significant increase in critical issues over the past sprint, primarily in the authentication and data processing modules. All development teams have been alerted and a mitigation plan is being implemented. The rise is attributed to recent infrastructure changes and will be addressed in the upcoming release cycle."
        />
        
        <QualitySignal
          title="Test Strategy"
          value="No Test Strategy"
          status="warning"
          date="Apr 17"
          description="There is no Public Test Strategy found in scope of full assessment. The team needs to develop a comprehensive testing approach covering unit, integration, and end-to-end testing methodologies. This should include code coverage targets and test automation guidelines."
        />
        
        <QualitySignal
          title="AutoTests Coverage"
          value="30%"
          status="warning"
          date="Apr 17"
          description="The auto test coverage is lower than 30%. Current coverage is focused primarily on critical components but lacks comprehensive coverage across the application. Teams are working to increase test coverage with a target of reaching 70% by the end of Q2. Most test gaps are in UI components and non-critical backend services."
        />
        
        <QualitySignal
          title="Support Request Trend"
          value="10"
          status="success"
          date="Apr 17"
          trend="down"
          description="The number of support requests submitted per month less than 10. This represents a 40% reduction compared to the previous quarter, indicating improved product stability and user experience. The majority of remaining support requests are related to feature requests rather than bug reports."
        />
        
        <QualitySignal
          title="Security Vulnerabilities"
          value="5"
          status="warning"
          date="Apr 18"
          description="Five medium-severity security vulnerabilities were identified during the last security audit. These include: 1) Outdated dependencies with known CVEs in third-party libraries, 2) Potential SQL injection vulnerability in the reporting module, 3) Weak password policy enforcement, 4) Insufficient rate limiting on API endpoints, 5) Cross-site scripting vulnerability in the user profile page. The security team is working on fixes with estimated completion within two weeks."
        />
        
        <QualitySignal
          title="Deployment Frequency"
          value="Weekly"
          status="success"
          date="Apr 18"
          description="The team maintains a weekly deployment cadence, successfully releasing new features and bug fixes on schedule. Deployment automation has reduced deployment times by 35% and deployment-related incidents by over 50% compared to manual processes used previously."
        />
      </div>
    </div>
  );
};

export default Index;
