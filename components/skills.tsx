"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  const skillCategories = {
    frontend: [
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3/SASS", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 95, icon: "📜" },
      { name: "Vite", level: 85, icon: "🔷" },
      { name: "React", level: 90, icon: "⚛" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Tailwind CSS", level: 90, icon: "🌊" },
      { name: "Framer Motion", level: 80, icon: "🎭" },
    ],
    backend: [
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "SQL", level: 80, icon: "💾" },
        { name: "Flask", level: 70, icon: "🐍" },
        { name: "Node.js", level: 60, icon: "🟢" },
        { name: "Express", level: 80, icon: "🚂" },
        { name: "PostgreSQL", level: 45, icon: "🐘" },
        { name: "REST API", level: 75, icon: "🔄" },
        { name: "AWS", level: 55, icon: "☁" },
      
      
    ],
    tools: [
      { name: "Git/GitHub", level: 90, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "📝" },
      { name: "NPM/Yarn", level: 90, icon: "📦" },
      { name: "Postman", level: 85, icon: "📬" },
      { name: "Anaconda", level: 80, icon: "🐍" },
      { name: "Jupyter Notebook", level: 85, icon: "📓" },
      { name: "TensorFlow", level: 80, icon: "🤖" },
      { name: "SQL", level: 90, icon: "🗄️" },
      

    ],
   dataScience: [
  { name: "Machine Learning", level: 65, icon: "🤖" },
  { name: "Deep Learning", level: 35, icon: "🧠" },
  { name: "Python", level: 85, icon: "🐍" },
  { name: "Pandas", level: 75, icon: "📊" },
  { name: "NumPy", level: 70, icon: "🔢" },
  { name: "Scikit-learn", level: 65, icon: "🔬" },
  { name: "TensorFlow", level: 40, icon: "🤖" },
  { name: "Natural Language Processing", level: 45, icon: "🧠" },
  { name: "Data Visualization", level: 80, icon: "📈" },
  { name: "MLOps", level: 35, icon: "⚙️" },
  { name: "Model Deployment", level: 50, icon: "🚀" }
]
    
// kia hal ha sonio 
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 -z-10" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">My Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Skillset</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-4 w-full max-w-md bg-card/30 backdrop-blur-sm border border-border/40">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="dataScience">Data Science</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              
            </TabsList>
          </div>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="overflow-hidden backdrop-blur-sm bg-card/30 border-border/40 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl">{skill.icon}</div>
                          <div>
                            <h3 className="font-bold">{skill.name}</h3>
                          </div>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="h-2 rounded-full bg-gradient-to-r from-primary to-purple-500"
                          />
                        </div>
                        <div className="mt-2 text-right text-sm text-muted-foreground">{skill.level}%</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
