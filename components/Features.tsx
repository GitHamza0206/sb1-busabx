import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, BarChart, Zap, Target } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Analysis',
    description: 'Our advanced AI algorithms analyze user behavior to provide deep insights into your landing page performance.',
    icon: Eye,
  },
  {
    name: 'Real-time Analytics',
    description: 'Get up-to-the-minute data on your landing page performance, allowing you to make quick, informed decisions.',
    icon: BarChart,
  },
  {
    name: 'Conversion Optimization',
    description: 'Receive actionable recommendations to improve your conversion rates and maximize your ROI.',
    icon: Zap,
  },
  {
    name: 'A/B Testing',
    description: 'Easily create and run A/B tests to optimize your landing pages for different audience segments.',
    icon: Target,
  },
];

const Features = () => {
  return (
    <div className="bg-background py-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
            Everything you need to optimize your landing pages
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
            LandingLens provides a comprehensive suite of tools to help you create, analyze, and optimize your landing pages for maximum conversion.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.name} className="border border-primary/20 hover:border-primary/50 transition-colors duration-200">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;