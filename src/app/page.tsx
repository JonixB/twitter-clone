import LeftSidebar from "@/components/LeftSideBar"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header*/}
        <LeftSidebar />
        <main className="ml-[275px] p-6 flex w-[600px] h-full min-h-screen flex-col border-l border-r border-gray-600">
          <h1 className="text-2xl font-bold">Home</h1>
        </main>
        
        {/*{<section>Right Section</section>*/}
      </div>
    </div>
  )
}

export default Home