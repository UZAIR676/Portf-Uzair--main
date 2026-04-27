"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaInstagram } from 'react-icons/fa'; 

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* 3D Tilt Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        </div>
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-border/40 backdrop-blur-sm bg-card/30">
            <span className="text-sm font-medium">Full Stack Developer and Data Scientist</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Rana Muhammad Uzair</span>
          </h1>

          <div className="h-12 md:h-16">
            <TypeAnimation
              sequence={[
                "Building modern web apps",
                2000,
                "Creating user experiences",
                2000,
                "Analyzing data patterns",
                2000,
                "Building predictive models",
                2000,
                "Working with AI and ML algorithms",
                2000,
                "Transforming data into actionable insights",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground"
            />
          </div>

          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto mt-6">
          I transform ideas into exceptional digital experiences with clean code and modern design. I also leverage data science to provide insights and predictions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <Button
            size="lg"
            className="px-8 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white border-0 rounded-full"
          >
            <a href='#projects'>View Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 backdrop-blur-sm bg-white/5 border-white/10 rounded-full hover:bg-white/10"
          >
           <a href='#contact'> Contact Me</a> 
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-6 mt-9"
        >
          {[
  { 
    icon: <Github size={24} />, 
    label: "GitHub", 
    href: "https://github.com/UZAIR676",
    gradient: "from-gray-500 to-gray-700"
  },
  { 
    icon: <Linkedin size={24} />, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/uzair-rana-uzair/", 
    gradient: "from-blue-500 to-blue-700" 
  },
  { 
    icon: <FaInstagram size={24} />, 
    label: "Instagram", 
    href: "https://www.instagram.com/ranauzair300/",
    gradient: "from-pink-500 to-purple-500"
  },
].map((social) => (
  <a key={social.label} href={social.href} className="relative group" aria-label={social.label}>
    {/* Hover Glow Effect */}
    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.gradient} blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
    
    {/* Social Icon Container */}
    <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm border border-border/40 text-foreground/80 hover:text-white transition-colors">
      {social.icon}
    </div>
    
  </a>
))}

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-10"
        >
          <a
            href="#about"
            className="flex flex-col  items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-0">Scroll Down</span>
            <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

