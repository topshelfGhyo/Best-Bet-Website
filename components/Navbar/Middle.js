import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants';
import React from 'react'
// eslint-disable-next-line react-hooks/rules-of-hooks
const [opened, setOpened] = useState(false);

const gameModes = [
    {
        title:"sports",
    },
    {
        title: "In-play",
    },
    {
        title: "Casino",
    },
    {
        title:"Poker",
    },
    {
        title:"Extra",
    }

];

export default function Middle() {
  return (
    <div className='bg-[#333333] flex border-t-2 border-gray-500'>
        <div className='flex gap-2 text-gray-500 text-sm ml-10'>
            games.map((modes) ={'>'} (
                <div>

                <div className='p-4 hover:text-white cursor-pointer'>
                    {mode.title} 
                </div>
            </div>
            ))

        <div className='flex-row-reverse'></div>

        </div>
        </div>
  );
}
