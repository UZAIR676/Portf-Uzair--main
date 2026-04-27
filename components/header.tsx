"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl bg-background/30 border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold relative group">
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Portfolio</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 rounded-full transition-all ${
                activeSection === item.href.substring(1) ? "text-white" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              {item.name}
            </Link>
          ))}
            <Link href="https://www.canva.com/design/DAGh1nZdQjs/UbVoR23YEQX8X4gi1aImXg/view?utm_content=DAGh1nZdQjs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd6a6ae8493" target="_blank" rel="noopener noreferrer">
            <Button className="ml-4 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white border-0">
              Resume
            </Button>
            {/* ola  */}
            </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
        >
          <nav className="flex flex-col items-center space-y-6 text-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-4 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white border-0">
              Resume
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

