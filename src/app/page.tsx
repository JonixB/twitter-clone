import LeftSidebar from "@/components/LeftSideBar"
import MainComponent from "@/components/MainComponent"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />
        <section className="fixed flex flex-col space-y-4">

        </section>
      </div>
    </div>
  )
}

export default Home