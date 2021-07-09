import Category from '../components/Category/Category'
import Drawer from '../components/Drawer/Drawer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <main className="relative flex-grow min-h-screen">
        <div className="overlay overly-menu" role="button"></div>
      {/* <Drawer /> */}
        <Header />
        <Hero />
        <Products />
        <Category />
      </main>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
