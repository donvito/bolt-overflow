import React from 'react';
import { Briefcase, Server } from 'lucide-react';

export default function RightSidebar() {
  return (
    <aside className="w-[300px] flex-shrink-0 hidden xl:block">
      <div className="sticky top-16 space-y-4">
        <div className="p-4 bg-[#fdf7e2] rounded-md">
          <h5 className="text-[13px] font-bold mb-2">Welcome to Bolt Overflow!</h5>
          <p className="text-[13px] mb-2">
            This is a collaboratively edited question and answer site for professional and enthusiast programmers.
          </p>
          <p className="text-[13px]">
            It's 100% free, no registration required.
          </p>
        </div>

        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 text-[#0074cc]">
              <Briefcase className="w-5 h-5" />
              <h5 className="font-bold">Looking for a job?</h5>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <h6 className="font-bold mb-1">Senior Backend Developer</h6>
              <p className="text-sm text-gray-600">Google • Remote</p>
              <p className="text-sm text-gray-600">$150k - $200k</p>
            </div>
            <div>
              <h6 className="font-bold mb-1">Frontend Engineer</h6>
              <p className="text-sm text-gray-600">Microsoft • Seattle, WA</p>
              <p className="text-sm text-gray-600">$130k - $180k</p>
            </div>
            <a href="/jobs" className="block text-sm text-[#0074cc] hover:text-[#0a95ff]">
              View all jobs →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 text-[#0074cc]">
              <Server className="w-5 h-5" />
              <h5 className="font-bold">Looking for hosting?</h5>
            </div>
          </div>
          <div className="p-4">
            <img
              src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60"
              alt="Server room"
              className="w-full h-32 object-cover rounded mb-3"
            />
            <h6 className="font-bold mb-2">DigitalOcean</h6>
            <p className="text-sm text-gray-600 mb-3">
              Get started with $200 in free credits and build your next app on the most developer-friendly cloud platform.
            </p>
            <button className="w-full px-4 py-2 text-sm text-white bg-[#0074cc] hover:bg-[#0a95ff] rounded">
              Try it free
            </button>
          </div>
        </div>

        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="p-3 bg-[#f8f9f9] border-b border-gray-200">
            <h5 className="text-[13px] font-bold">Custom Filters</h5>
          </div>
          <div className="p-3">
            <a href="#" className="text-[13px] text-[#0074cc] hover:text-[#0a95ff]">
              Create a custom filter
            </a>
          </div>
        </div>

        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="p-3 bg-[#f8f9f9] border-b border-gray-200">
            <h5 className="text-[13px] font-bold">Watched Tags</h5>
          </div>
          <div className="p-3">
            <a href="#" className="text-[13px] text-[#0074cc] hover:text-[#0a95ff]">
              Add a watched tag
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}