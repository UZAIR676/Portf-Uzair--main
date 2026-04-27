import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Skills from "@/components/skills"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark">
      {/* <ParticleBackground /> */}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

