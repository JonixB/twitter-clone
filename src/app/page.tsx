import {BiHomeCircle} from 'react-icons/bi'

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    icon: BiHomeCircle
  }
]

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* left sidebar for navigation/header*/}
        <section className="fixed w-72 flex flex-col h-screen">

        </section>
        <main>Home Timeline</main>
        <section>Right Section</section>
      </div>
    </div>
  )
}

export default Home