import LeftSidebar from "@/components/LeftSideBar"
import MainComponent from "@/components/MainComponent"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header*/}
        <LeftSidebar />
        <MainComponent />
        {/*{<section>Right Section</section>*/}
      </div>
    </div>
  )
}

export default Home