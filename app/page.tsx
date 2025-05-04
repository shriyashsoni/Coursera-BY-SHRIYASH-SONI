import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import CategorySlider from "@/components/category-slider"
import PartnerLogos from "@/components/partner-logos"
import PopularCourses from "@/components/popular-courses"
import ValueProps from "@/components/value-props"
import Testimonials from "@/components/testimonials"
import ForSegments from "@/components/for-segments"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategorySlider />
      <PartnerLogos />
      <ForSegments />
      <PopularCourses />
      <ValueProps />
      <Testimonials />
      <Footer />
    </main>
  )
}
