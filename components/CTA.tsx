import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-white">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-50">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-primary-foreground hover:text-primary">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;