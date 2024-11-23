import React from 'react';
import { Search, Menu, Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <button className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <a href="/" className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-orange-500" />
              <span className="hidden md:block text-xl font-medium">bolt<span className="font-bold">overflow</span></span>
            </a>
            <nav className="hidden lg:flex items-center gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Questions</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Tags</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Users</a>
            </nav>
          </div>
          
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md">Log in</button>
            <button className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md">Sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
}