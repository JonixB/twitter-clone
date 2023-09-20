import LeftSidebar from "@/components/LeftSideBar"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header*/}
        <LeftSidebar />
        <main className="ml-[275px] p-6 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
            <div className="flex flex-col">
              <div className="border-b-[0.5px]">
                <input type="text" placeholder="What's happening?"/>
              </div>
              <div></div>
            </div>
          </div>
        </main>
        
        {/*{<section>Right Section</section>*/}
      </div>
    </div>
  )
}

export default Home