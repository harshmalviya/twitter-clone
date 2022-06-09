import { SearchIcon } from '@heroicons/react/outline';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import React from 'react';

function Widgets() {
  return (
    <div className="px-2 mt-2 hidden col-span-2 lg:inline">
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2 ">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent flex-1 focus:outline-none"
        />
      </div>
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="harshmalviya72"
          options={{ height: 1000 }}
          
        />
      </div>
    </div>
  );
}

export default Widgets;
