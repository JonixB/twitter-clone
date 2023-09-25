import LeftSidebar from "@/components/LeftSideBar"
import MainComponent from "@/components/MainComponent"
import { BsSearch } from "react-icons/bs"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />
        <section className="w-[27%] sticky top-2 mt-2 flex flex-col items-stretch h-screen px-6">
          <div>
            <div className="relative w-full h-full group">
              <input
                id="searchBox"
                type="text"
                placeholder="Search Twitter"
                className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
              />
              <label htmlFor="searchBox"
                className="absolute top-0 l-0 h-full flex items-center justify-center p-4"
              >
                <BsSearch className="w-5 h-5" />
              </label>
            </div>
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  )
}

export default Home