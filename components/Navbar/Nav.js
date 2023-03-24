import {Button, Modal} from "@mantine/core";
import Create from "components/Modal/Create";
import Login from "components/Modal/Login";
import {useState} from "react"




const navigation = [
    {name:'Sports', href:'#'},
    {name: 'In-play', href:'#'},
];


export default function Example() {
    const[opened,setOpened] = useState(false);
  return (
      <header className='bg-[#126e51]'>
          <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'aria-label='Top'>
              <div className='flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none'>
                 <div className='flex items-center'>
                  <a href='#'>
                      <span className="sr-only">Your COmpany</span>
                      <img className='"h-10 w-auto' src='logotrans.png' atl='' />
                    </a>
                     <div className="ml-10 hidden space-x-8 lg:block">
                      {navigation.map((link))=(
                          <a key={link.name} href={link.href} className="text-base font-meduim text-white hover:text-indigo-50">
                              {link.name}
                      )){'}'};
                          </a>
                    </div>
              </div>
              </div>
              <div className='ml-10 space-x-4'>
                  <Button className='inline-block rounded-md border-transparent bg-white py-2 px-4 text-base font-medium text-black hover:bg-opacity-75'>
                       onClick{setOpenedCreate}
                       Create

                       </Button>
                  
                  <Button className='inline-block rounded-md border-transparent bg-white py-2 px-4 text-base font-medium text-black hover:bg-indigo-50'>
                    onClick={setOpened}                               
                  Login 
                  </Button>               

                  <div className="flex flex-wrap justify-center spax-x-6 py-4 lg:hidden">
                      {navigation.map((link))} =&gt; (
                          <a key={(link.name) 
                          href={link.href} 
                          className="text-base font-medium text-white hover:text-indigo-50">
    
                          </a>
                          {link.name}
                      ))
                  </div>

                </div>

            /**Imports Login and Create */
          </nav>
          <Modal opened={setOpened}
          onClose{() => setOpened (false)}
          title="Login"
          size={"xl"}
          >
              <Login />
          </Modal>

          

          <Modal opened={openedCreate}
          onClose{() => setOpened (false)}
          title="Login"
          size={"xl"}
          >
              <Create />
          </Modal>



      </header>
    )
}
