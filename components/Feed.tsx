import { RefreshIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import Tweetbox from './TweetBox';
import { Tweet } from '../typings';
import TweetComponent from './Tweet';
import { fetchTweets } from '../utils/fetchTweets';
import toast from 'react-hot-toast';

interface Props {
  tweets: Tweet[];
}

function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);
  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...');
    const tweets = await fetchTweets();
    setTweets(tweets);
    toast.success('New Tweets Loaded!', {
      id: refreshToast
    });
  };
  return (
    <div className="col-span-7 lg:col-span-5 max-h-screen overflow-x-scroll scrollbar-hide border-x">
      <div className="flex justify-between items-center">
        <h1 className="p-5 pb-0 font-bold text-xl">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      {/* TweetBox */}
      <div>
        <Tweetbox setTweets={setTweets} />
      </div>

      {/* Feed */}
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
