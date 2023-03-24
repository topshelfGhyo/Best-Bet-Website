import React from 'react'

export default function Sidebar() {
  /**icons will eventually be added */
    const games = [{
        name:"Tennis",
    
    },
        {name:"Football",
    },
        {name:"Basketball",
    },       
    {    name:"American Football",
    },   
    {   name:"Table Tennis",
    },   
    {   name:"Squash",
    },
    {    name:"E-sport",
    },
    {    name:"Volleyball",
    },
    {    name:"Running",
    },   
    {   name:"Badmiton",
    },
    {   name:"Track and Field",
    },
    {    name:"Golf",

    }]
  
  
    return (

    <div className='bg-[#126E51]'>
        <ScrollArea h={800}>

        <div>
    {games.map((game)) =>(
        <div>{game.name}</div>
    /**Expression container temporary fix for syntax config issues */
    )){'}'};

   </ScrollArea>
        </div>
    

    </div>
  );
}
