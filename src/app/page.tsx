import LeftSidebar from "@/components/LeftSideBar"
import { BsDot, BsChat } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { IoStatsChart, IoShareOutline } from 'react-icons/io5'

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header*/}
        <LeftSidebar />
        <main className="ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <input 
                type="text" 
                className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none" 
                placeholder="What's happening?" 
              />
              <div className="w-full justify-between items-center flex">
                <div>

                </div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full bg-primary px-4 w-full py-2 text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {
              Array.from({length:5}).map((_,i)=>(
                <div 
                  key={i} 
                  className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4"
                >
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <div className="font-bold">Club of Coders</div>
                      <div>@clubofcoderscom</div>
                      <div>
                        <BsDot/>
                      </div>
                      <div>1 hour ago</div>
                    </div>
                    <div className="text-white text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias deserunt quod vero necessitatibus laboriosam provident mollitia, commodi voluptatum debitis recusandae quam architecto corrupti molestiae, accusantium quos possimus quibusdam voluptate?
                      Odit quaerat nam excepturi maxime, totam deleniti ratione, tempore error qui harum beatae quasi eaque rem exercitationem aperiam perspiciatis nisi.
                    </div>
                    <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl mt-2">
                      
                    </div>
                    <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                        <BsChat />
                      </div>
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                        <AiOutlineRetweet />
                      </div>
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                        <AiOutlineHeart />
                      </div>
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                        <IoStatsChart />
                      </div>
                      <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                        <IoShareOutline />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>

        {/*{<section>Right Section</section>*/}
      </div>
    </div>
  )
}

export default Home