import Link from 'next/link'
import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'

const NAVIGATION_ITEMS = [
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
    icon: HiEnvelope
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
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* left sidebar for navigation/header*/}
        <section className="fixed w-72 flex flex-col h-screen">
          {
            NAVIGATION_ITEMS.map((item)=>(
              <Link
                className="bg-white/50 flex items-center justify-center space-x-2 rounded-3xl p-4"
                href={`/${item.title.toLocaleLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                <div>{item.title}</div>
              </Link>
            ))
          }
        </section>
        <main>Home Timeline</main>
        <section>Right Section</section>
      </div>
    </div>
  )
}

export default Home