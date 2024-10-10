import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              LandingLens
            </Link>
            <p className="text-muted-foreground">
              Optimizing landing pages with AI-powered insights since 2023.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      A/B Testing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Conversion Optimization
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      API Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-primary">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-muted-foreground xl:text-center">
            &copy; 2023 LandingLens, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;