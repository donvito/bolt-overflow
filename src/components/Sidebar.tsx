import React from 'react';
import { Home, Globe, Users, Tags, Trophy, Info, Star } from 'lucide-react';

export default function Sidebar() {
  return (
    <nav className="w-[164px] flex-shrink-0 hidden lg:block">
      <div className="sticky top-16 py-4">
        <div className="space-y-0.5">
          <a href="/" className="flex items-center gap-1 px-2 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
            <Home className="w-4 h-4" />
            <span className="text-[13px]">Home</span>
          </a>
          <div className="pl-6 mt-4 mb-1">
            <span className="text-[11px] text-gray-600">PUBLIC</span>
          </div>
          <a href="/questions" className="flex items-center gap-1 px-2 py-1.5 text-gray-900 bg-gray-200 rounded-r-full border-r-4 border-orange-400">
            <Globe className="w-4 h-4" />
            <span className="text-[13px]">Questions</span>
          </a>
          <a href="/tags" className="flex items-center gap-1 px-2 py-1.5 pl-8 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
            <Tags className="w-4 h-4" />
            <span className="text-[13px]">Tags</span>
          </a>
          <a href="/users" className="flex items-center gap-1 px-2 py-1.5 pl-8 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
            <Users className="w-4 h-4" />
            <span className="text-[13px]">Users</span>
          </a>
        </div>
        
        <div className="mt-8">
          <div className="pl-6 mb-1">
            <span className="text-[11px] text-gray-600">COLLECTIVES</span>
          </div>
          <a href="/collectives" className="flex items-center gap-1 px-2 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
            <Star className="w-4 h-4" />
            <span className="text-[13px]">Explore Collectives</span>
          </a>
        </div>
        
        <div className="mt-8">
          <div className="pl-6 mb-1">
            <span className="text-[11px] text-gray-600">TEAMS</span>
          </div>
          <div className="px-2 py-1.5 text-[13px] text-gray-600">
            <p>Stack Overflow for Teams – Start collaborating and sharing organizational knowledge.</p>
            <img src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg" alt="Teams illustration" className="w-32 mx-auto my-2" />
            <button className="w-full px-2 py-1.5 text-[13px] text-white bg-[#0a95ff] hover:bg-[#0074cc] rounded-md">
              Create a free Team
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}