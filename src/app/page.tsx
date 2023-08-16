import Link from 'next/link'
import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsTwitter, BsEnvelope} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'

const NAVIGATION_ITEMS = [
  { title: "Twitter",
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }
]

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header*/}
        <section className="fixed w-[275px] flex flex-col items-stretch h-screen space-y-4 my-4">
          <div>
            {
              NAVIGATION_ITEMS.map((item)=>(
                <Link
                  className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-3xl py-2 px-6"
                  href={`/${item.title.toLocaleLowerCase()}`}
                  key={item.title}
                >
                  <div>
                    <item.icon />
                  </div>
                  {item.title !== "Twitter" && <div>{item.title}</div>}
                </Link>
              ))
            }
            <button className="rounded-full m-4 bg-primary py-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
            Tweet
            </button>
          </div>
        </section>
        {/*<main>Home Timeline</main>
        <section>Right Section</section>*/}
      </div>
    </div>
  )
}

export default Home