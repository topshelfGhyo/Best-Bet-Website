import React from "react"

import React from 'react'

export default function Featured() {
    const games= [
        {
            team1:"Real Madrid",
            team2:"Barcelona",
            odds1: "1.20",
            odds2: "1.64",
            odds3: "2.21",
        },
        {
            team1:"Portland",
            team2:"Orlando",
            odds1: "1.20",
            odds2: "1.10",
            odds3: "2.08"
        },
        {
            team1:"Spain",
            team2:"Dubai",
            odds1: "4.02",
            odds2: "3.58",
            odds3: "3.10"
        },
        {
            team1:"Japan",
            team2:"England",
            odds1: "1.80",
            odds2: "1.64",
            odds3: "2.40"
        },
        {
            team1:"Portugal",
            team2:"Argentina",
            odds1: "1.60",
            odds2: "2.10",
            odds3: "2.15"
        },
        {
            team1:"Cubs",
            team2:"Dodgers",
            odds1: "1.60",
            odds2: "2.60",
            odds3: "2.30"
        },

        {
            team1:"Braves",
            team2:"Phillies",
            odds1: "2.60",
            odds2: "2.10",
            odds3: "2.00"
        },

        {
            team1:"Notre Dame",
            team2:"Georgia Tech",
            odds1: "1.40",
            odds2: "3.10",
            odds3: "3.15"
        },

        {
            team1:"Atlanta United",
            team2:"Chicago Fire",
            odds1: "1.60",
            odds2: "2.10",
            odds3: "2.15"
        },
        {
            team1:"Oriels",
            team2:"Red Sox",
            odds1: ".95",
            odds2: "2.20",
            odds3: "2.67"
        },
        {
            team1:"Rockies",
            team2:"Cardinals",
            odds1: "1.25",
            odds2: "4.90",
            odds3: "5.15"
        },
        {
            team1:"Portugal",
            team2:"Argentina",
            odds1: "1.60",
            odds2: "2.10",
            odds3: "2.15"
        },
        {
            team1:"Liverpool",
            team2:"Man Utd",
            odds1: "2.23",
            odds2: "2.19",
            odds3: "3.10"
        },
        {
            team1:"Yankees",
            team2:"Blue Jays",
            odds1: "5.60",
            odds2: "3.10",
            odds3: "3.14"
        },
        {
            team1:"Athletics",
            team2:"Angels",
            odds1: "1.80",
            odds2: "2.90",
            odds3: "2.15"
        },





    ]
  return (
    <div className='bg-[#126E51]'>
      <div className='grid grid-cols-3'>
          {games.map((game)) =>(
              <div className="p-10">

              </div>
              <div className="text-white font-semibold text-md text-center">
                  {game.team1} - {game.team2}
              </div>
              <div className=" grid grid-cols-1 nd:grid-cols-1 lg:grid-cols-3 text-center text-white border-2 rounded-xl font font-semibold cursor-pointer">
                <div className="flex border-r-2 hover:bg-white rounded-1-md hover:text-black">
                    <p>1</p>
                    <p>{game.odds1}</p>
                    </div> 
                <div className="border-r-2 hover:bg-white hover:text-black">
                    <p>X</p>
                    <p>{games.odds2}</p>
                    </div>
                    <div className="border-r-2 hover:bg-white rounded-r-md hover:text-black">
                        <p>2</p>
                        <p>{game.odds3}</p>
                    </div>
                <div>{game.odds3}</div>
              </div>
        </div>

        )){"}"}
          
  );
{"}"}


<div className='grid grid-cols-3'>
            {games.map((game))} => {
                <div className='p-10'>
                    <div className='text-white font-semibold text-md text-center'>
                        {game.team1} - {game.team2}
                        </div>
            {"}"}
