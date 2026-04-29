"use client"

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import e from "./Images/e.png";
import m from "./Images/m.png";
import vein from "./Images/vine.png";
import heart from "./Images/heart.png";
import quiz from './Images/quiz.png'
import rain from './Images/rain.png'
import Elbo from './Images/elcomparafor.png'
import carg from './Images/carmen.png'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and payment processing.",
    image: e,
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/UZAIR676/Ecommerce",
    category: "mern",
  },
  {
    title: "Movie App",
    description: "A full-stack movie application built with the MERN stack, featuring search, admin controls, and user interactions.",
    image: m,
    tags: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Express.js"],
    githubLink: "https://github.com/UZAIR676/MOVIE_APP",
    category: "mern",
  },
  {
    title: "Quiz App",
    description: "This React-based Quiz App provides an interactive platform for users to take quizzes. It features a dynamic UI, smooth navigation, and real-time score updates. Questions are fetched from an API, and user responses are validated instantly.🚀",
    image: quiz,
    tags: ["React", "Node.js", "Tailwind CSS", "css"],
    githubLink: "https://github.com/UZAIR676/QUIZ-APP",
    category: "mern",
  },
 {
  title: "ElComparador App",
  description: "ElComparador is a modern full-stack React-based web application designed to compare products efficiently with a clean UI and smooth user experience. It leverages a powerful MERN-inspired architecture to deliver fast performance, responsive design, and scalable component structure for future enhancements.",
  image: Elbo,
  tags: ["React", "Node.js", "Tailwind CSS", "CSS"],
  githubLink: "https://elcomparador.netlify.app/",
  category: "mern",
},
  {
    title: "Wine Quality Prediction",
    description: "Machine learning project predicting wine quality based on its chemical properties using Random Forest and SVM.",
    image: vein,
    tags: ["Python", "RandomForestClassifier", "Jupyter Notebook", "Machine Learning"],
    githubLink: "https://github.com/UZAIR676/-Wine-Quality-Prediction-ML",
    category: "datascience",
  },
  {
    title: "Heart Disease Prediction",
    description: "Machine learning pipeline predicting heart disease based on patient health data using feature engineering and ML models.",
    image: heart,
    tags: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis"],
    githubLink: "https://github.com/UZAIR676/Heart-Disease-Prediction-using-Machine-Learning-",
    category: "datascience",
  },
 {
  title: "Car Price Prediction",
  description: "ML web app that predicts used car prices from the Indian market using Random Forest Regressor with 92% accuracy. Features a full-stack setup with Flask REST API and React.js frontend with dark/light mode.",
  image: carg,
  tags: ["Python", "React.js", "Flask", "Random Forest", "Machine Learning", "Scikit-learn"],
  githubLink: "https://github.com/UZAIR676/car_prediction-",
  category: "datascience",
},
  {
    title: "Rain Prediction",
    description: "This project predicts rainfall using machine learning techniques, leveraging historical weather data. It involves data preprocessing, model training, and evaluation to provide accurate rainfall predictions",
    image: rain,
    tags: ["Python", "Jupyter Notebook", "Machine Learning", " RandomForestClassifier"],
    githubLink: "https://github.com/UZAIR676/Rainfall-Prediction-Using-Machine-Learning",
    category: "datascience",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("mern");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const filteredProjects = projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
      <motion.div style={{ y }} className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">
            Data Science & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">MERN STACK</span>
          </h2>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-card/30 backdrop-blur-sm border border-border/40">
            {["mern", "datascience"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-primary to-purple-500 text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter === "mern" ? "MERN Stack" : "Data Science"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden h-full backdrop-blur-sm bg-card/30 border-border/40 group">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-card/50 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
{/* <Button size="sm" asChild className="bg-gradient-to-r from-primary to-purple-500">
    <a
      href={project.demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <ExternalLink size={16} />
      Demo
    </a>
</Button>  */}

                  <Button size="sm" variant="secondary" asChild className="backdrop-blur-sm bg-white/10">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>  
          ))}
        </div>
       
      </motion.div>
      <div className="text-center mt-8">
                <h1 className="text-xl font-semibold text-indigo-500">More Projects will be Uploaded Soon</h1>
              </div>
    </section>
  );
}
