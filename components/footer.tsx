"use client"

import { hover, motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter} from "lucide-react";
import { FaInstagram } from 'react-icons/fa'; 


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-primary/5 -z-10" />

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Rana Muhammad Uzair
            </h3>
            <p className="text-muted-foreground max-w-xs">
            A full-stack developer with a strong foundation in web development, currently expanding my expertise in Data Science and machine learning to create impactful digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
  {[
    { icon: <Github size={24} />, label: "GitHub", href: "https://github.com/UZAIR676", hoverColor: "hover:text-gray-400 hover:border-gray-400" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/in/uzair-rana-uzair/", hoverColor: "hover:text-blue-600 hover:border-blue-600" },
    { icon: <FaInstagram size={24} />, label: "Instagram", href: "https://www.instagram.com/ranauzair300/", hoverColor: "hover:text-pink-500 hover:border-pink-500" },
  ].map((social) => (
    <a
      key={social.label}
      href={social.href}
      className={`p-2 rounded-full bg-card/30 backdrop-blur-sm border border-border/40 text-muted-foreground transition-colors ${social.hoverColor}`}
      aria-label={social.label}
    >
      {social.icon}
    </a>
  ))}
</div>

          </motion.div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Rana Muhammad Uzair . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

