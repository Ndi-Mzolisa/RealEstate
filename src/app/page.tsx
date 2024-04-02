import AboutUs from "@/components/AboutUs"
import Faq from "@/components/Faq"
import FeaturedProperties from "@/components/FeaturedProperties"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProperties />
      <Services />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  )
}

export default Home