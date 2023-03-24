import { getImageSize } from 'next/dist/server/image-optimizer'
import React from 'react'

export default function Rightbar() {
  const offers = [{
      name:"Cheap Bonus",
      description: "Claim a Free bet bonus here!",
  },
  {
      name: "Bad Bonus",
      description: "Claim bad bet here. ",
  },
  {
    name: "Mid Tear Bonus ",
    description: "15 points and 2 free spins ",
},
{
    name: "Incredible Winnings Bonus",
    description: "100 points 5 Free Spins  ",
}];
  
return (
    <div className='bg-[#126E51]'>
        <div className='text-center text-white font-semibold mb-10'>
           <h1>Offers</h1>
        </div> 
        <div className='space-y-10'>
            {offers.map((offer, i)) => {
                <div key={i} className="text-center mx-auto text-white border-2 rounded-xl p-10">
        <><p className='font-semibold text-xl'>{offer.name}</p>
        <p className=''>{offer.description}</p></>

        </div>
    ))&rbrace;
    </div>
    </div>


  

}
