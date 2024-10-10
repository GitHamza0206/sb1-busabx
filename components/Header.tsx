"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              LandingLens
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Projects
            </Link>
            <Link href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Features
            </Link>
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ModeToggle />
            <Button variant="ghost" className="ml-8">
              Log in
            </Button>
            <Button className="ml-8">
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="text-2xl font-bold text-primary">
                    LandingLens
                  </Link>
                </div>
                <div className="-mr-2">
                  <Button
                    variant="ghost"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/projects" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Projects
                  </Link>
                  <Link href="#features" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Features
                  </Link>
                  <Link href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </Link>
                  <Link href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    About
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Button className="w-full">
                  Sign up
                </Button>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <Button variant="link" className="text-primary hover:text-primary-foreground">
                    Log in
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;