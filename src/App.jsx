import { motion } from "framer-motion";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Service'
import Projects from './components/Projects'
import ScrollProgress from "./components/ScrollProgress";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Map from "./components/Map";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
    </motion.div>
  )
}

export default App