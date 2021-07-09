import Drawer from '../components/Drawer/Drawer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <main className="relative flex-grow min-h-screen">
        <div className="overlay overly-menu" role="button"></div>
      {/* <Drawer /> */}
        <Header />
        <Hero />
      </main>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
