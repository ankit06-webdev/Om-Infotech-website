import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import FeaturedProducts from '../components/FeaturedProducts'
import Services from '../components/Services'
import ContactUs from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <FeaturedProducts />
      <Services />
      <ContactUs />
      <Footer />
    </>
  )
}               

export default Home