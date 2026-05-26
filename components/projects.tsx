"use client"

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import e from "./Images/e.png";
import m from "./Images/m.png";
import vein from "./Images/vine.png";
import heart from "./Images/heart.png";
import rain from "./Images/rain.png";
import Elbo from "./Images/elcomparafor.png";
import carg from "./Images/carmen.png";
import quiz from './Images/quizapp.png'

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with product management, cart functionality, and payment processing.",
    image: e,
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/UZAIR676/Ecommerce",
    demoLink: "https://store-app-ten-rho.vercel.app/", // add your live URL here
    category: "mern",
    accent: "purple",
  },
  {
    title: "Movie App",
    description:
      "Full-stack MERN movie application featuring search, admin controls, and user interactions.",
    image: m,
    tags: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Express.js"],
    githubLink: "https://github.com/UZAIR676/MOVIE_APP",
    demoLink: "", // add your live URL here
    category: "mern",
    accent: "purple",
  },
  {
    title: "Quiz App",
    description:
      "Interactive React quiz platform with dynamic UI, real-time score updates, and questions fetched live from an API.",
    image: quiz,
    tags: ["React", "Node.js", "Tailwind CSS", "CSS"],
    githubLink: "https://github.com/UZAIR676/Quiz-App-",
    demoLink: "", // add your live URL here
    category: "mern",
    accent: "purple",
  },
  {
    title: "ElComparador",
    description:
      "Modern full-stack React app for product comparison with clean UI, responsive design, and scalable component architecture.",
    image: Elbo,
    tags: ["React", "Node.js", "Tailwind CSS", "CSS"],
    githubLink: "https://github.com/UZAIR676/Ecommerce",
    demoLink: "https://elcomparador.netlify.app/",
    category: "mern",
    accent: "purple",
  },
  {
    title: "Wine Quality Prediction",
    description:
      "ML project predicting wine quality from chemical properties using Random Forest and SVM classifiers.",
    image: vein,
    tags: ["Python", "Random Forest", "SVM", "Jupyter Notebook"],
    githubLink: "https://github.com/UZAIR676/-Wine-Quality-Prediction-ML",
    demoLink: "", // add your live URL here
    category: "datascience",
    accent: "teal",
  },
  {
    title: "Heart Disease Prediction",
    description:
      "Machine learning pipeline predicting heart disease from patient health data using feature engineering and multiple ML models.",
    image: heart,
    tags: ["Python", "Scikit-learn", "Jupyter Notebook", "Data Analysis"],
    githubLink: "https://github.com/UZAIR676/Heart-Disease-Prediction-using-Machine-Learning-",
    demoLink: "", // add your live URL here
    category: "datascience",
    accent: "teal",
  },
  {
    title: "Car Price Prediction",
    description:
      "ML web app predicting Indian used-car prices with 92% accuracy. Flask REST API backend, React.js frontend with dark/light mode.",
    image: carg,
    tags: ["Python", "React.js", "Flask", "Random Forest", "Scikit-learn"],
    githubLink: "https://github.com/UZAIR676/car_prediction-",
    demoLink: "", // add your live URL here
    category: "datascience",
    accent: "teal",
  },
  {
    title: "Rain Prediction",
    description:
      "Rainfall forecasting using machine learning on historical weather data — covers preprocessing, model training, and evaluation.",
    image: rain,
    tags: ["Python", "Random Forest", "Jupyter Notebook"],
    githubLink: "https://github.com/UZAIR676/Rainfall-Prediction-Using-Machine-Learning",
    demoLink: "", // add your live URL here
    category: "datascience",
    accent: "teal",
  },
];

const accentStyles = {
  purple: {
    tag: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    hoverBorder: "hover:border-violet-500/40",
    demoBtn:
      "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/20",
  },
  teal: {
    tag: "bg-teal-500/10 text-teal-300 border border-teal-500/20",
    hoverBorder: "hover:border-teal-500/40",
    demoBtn:
      "bg-teal-600 text-white hover:bg-teal-500 shadow-lg shadow-teal-500/20",
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -16, scale: 0.97, transition: { duration: 0.22 } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("mern");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const filteredProjects = projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(83,74,183,0.12) 0%, transparent 70%)",
        }}
      />

      <motion.div style={{ y }} className="container px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            Data Science &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400">
              MERN Stack
            </span>
          </h2>
        </motion.div>

        {/* Filter toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex gap-2 mb-12"
        >
          {[
            { id: "mern", label: "MERN Stack" },
            { id: "datascience", label: "Data Science" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 border ${
                activeFilter === id
                  ? id === "mern"
                    ? "bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-500/20"
                    : "bg-teal-600 text-white border-teal-600 shadow-lg shadow-teal-500/20"
                  : "bg-white/5 text-white/50 border-white/10 hover:text-white/80 hover:border-white/20"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project) => {
              const accent = accentStyles[project.accent];
              return (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className={`group rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden flex flex-col transition-colors duration-300 ${accent.hoverBorder}`}
                >
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-white/5">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${accent.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons row */}
                    <div className="flex items-center gap-3 flex-wrap">
                      {/* Code button — always shown */}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/60 border border-white/12 rounded-lg px-4 py-2 transition-all duration-200 hover:text-white hover:border-white/30 hover:bg-white/5"
                      >
                        <Github size={14} />
                        Code
                      </a>

                      {/* Demo button — only shown when demoLink is set */}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase rounded-lg px-4 py-2 transition-all duration-200 ${accent.demoBtn}`}
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 text-sm font-medium text-violet-400 tracking-widest uppercase"
        >
          — More projects coming soon —
        </motion.p>
      </motion.div>
    </section>
  );
}