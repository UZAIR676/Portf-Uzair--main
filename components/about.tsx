"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"

import peak from './peak.jpeg'



export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center mb-16"
        >
          <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">
            Who{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">I Am</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y, opacity }}
            className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 opacity-20 z-10" />
            <div className="absolute inset-0 backdrop-blur-sm z-0" />
            <Image
              src={peak}
              alt="Profile"
              layout="responsive"
              width={600}
              height={600}
              className="object-cover z-20 relative"
            />

            <div className="absolute top-4 -left-4 z-30">
              <div className="px-4 py-2 bg-card/80 backdrop-blur-md rounded-lg border border-border/40 shadow-xl">
                <p className="font-medium">2+ Years Experience</p>
              </div>
            </div>
            <div className="absolute bottom-4 -right-4 z-30">
              <div className="px-4 py-2 bg-card/80 backdrop-blur-md rounded-lg border border-border/40 shadow-xl">
                <p className="font-medium">MERN STACK</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Full Stack{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Developer & Aspiring Data Scientist
              </span>
            </h3>
            <p className="text-muted-foreground">
              I’m a passionate developer with 2+ years of experience building web applications using the MERN stack. I specialize in creating responsive, user-friendly interfaces with React and developing robust backend systems with Node.js. Currently, I’m expanding my expertise in Data Science, focusing on Machine Learning and Deep Learning.
</p>
<p className="text-muted-foreground">
  My journey in tech began at UET Taxila, and I’m now continuing my studies at LaGuardia Community College (CUNY) with the GPA of 3.2 .I’ve worked on multiple projects and websites, and I’m now focusing on growing my expertise in Data Science while continuing to build full-stack AI based applications.

</p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["JavaScript", "Python","TypeScript", "React", "Next.js", "Node.js"," Data Analyst", "Machine Learning",'Data preprocessing and wrangling',"TensorFlow","Mongodb", "Deep Learning"].map((skill) => (
                <Badge
                  key={skill}
                  className="px-3 py-1 bg-gradient-to-r from-primary/10 to-purple-500/10 text-foreground border-0"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white font-medium transition-transform hover:scale-105"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
