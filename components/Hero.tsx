import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
          <span className="block">Optimize Your Landing Pages</span>
          <span className="block text-primary-foreground">with AI-Powered Insights</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          LandingLens helps you create high-converting landing pages by analyzing user behavior and providing actionable recommendations.
        </p>
        <div className="mt-10 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <Link href="/get-started">
              <Button size="lg" className="w-full sm:w-auto">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;