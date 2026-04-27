"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { MessageCircle } from "lucide-react";
import emailjs from 'emailjs-com'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create the email data with the form data
    const emailData = {
      to_name: 'Your Name',  // Set this to a fixed recipient name or leave it as is
      from_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    }

   
    emailjs.send(
      'service_5j5du3k',  
      'template_2l3c6ys',  
      emailData,          
      'jP0wAi_NHFf-No7kj'  
    )
    .then((response) => {
      console.log('Success:', response.text)
      alert("Thanks for your message! I'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    })
    .catch((error) => {
      console.log('Error:', error.text)
      alert("Oops! Something went wrong. Please try again.")
      setIsSubmitting(false)
    })
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">
            Get In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
          <p className="text-muted-foreground mt-6 text-center max-w-2xl">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden backdrop-blur-sm bg-card/30 border-border/40">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-card/50 border-border/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-card/50 border-border/40"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="bg-card/50 border-border/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={6}
                      required
                      className="bg-card/50 border-border/40"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-900/90"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              {[ 
                { 
                  icon: <Mail className="w-10 h-10 text-primary text-white" />, 
                  title: "Email", 
                  content: <span className=" hover:text-white">uzairranamuhammad7@gmail.com</span>, 
                  link: "mailto:uzairranamuhammad7@gmail.com", 
                },
                { 
                  icon: <MessageCircle className="w-10 h-10 text-green-500" />, 
                  title: "WhatsApp", 
                  content: <span className=" hover:text-green-600">+1(347) 724-1605 </span>,
                  link: "https://wa.me/13477241605", 
                },
                { 
                  icon: <Phone className="w-10 h-10 text-primary" />, 
                  title: "Phone", 
                  content: "+1(347) 724-1605", 
                  link: "tel:03010053877", 
                },
                { 
                  icon: <MapPin className="w-10 h-10 text-primary text-red-700" />, 
                  title: "Location", 
                  content: <span className="hover:text-red-600">  New York, USA </span>,
                  link: "#", 
                },
              ].map((item, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card/30 border-border/40 overflow-hidden">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">{item.icon}</div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.content}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
