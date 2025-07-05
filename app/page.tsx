"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { LampContainer } from "@/components/ui/lamp"
import { Spotlight } from "@/components/ui/spotlight"
import { WobbleCard } from "@/components/ui/wobble-card"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { FloatingNav } from "@/components/ui/floating-navbar"
import {
  Menu,
  X,
  Clipboard,
  Settings,
  Gauge,
  BarChart3,
  Puzzle,
  Zap,
  FileText,
  Code2,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Home,
  User,
  Briefcase,
  Phone,
} from "lucide-react"

export default function BustedAI() {
  const [showIntro, setShowIntro] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentCase, setCurrentCase] = useState(0)

  const processRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const casesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".scroll-animate")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [showIntro])

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Process",
      link: "#process",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Cases",
      link: "#cases",
      icon: <BarChart3 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Phone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  const processSteps = [
    {
      icon: Clipboard,
      title: "Submit Text",
      description: "Paste or upload your content in seconds.",
    },
    {
      icon: Settings,
      title: "Run Analysis",
      description: "Our AI-powered engine parses writing style & patterns.",
    },
    {
      icon: Gauge,
      title: "Get Score",
      description: "Receive an instant 'Human vs. AI' confidence score.",
    },
    {
      icon: BarChart3,
      title: "Review Insights",
      description: "Detailed breakdown of flagged sentences & metrics.",
    },
    {
      icon: Puzzle,
      title: "Integrate Everywhere",
      description: "API, plugin, or dashboard—embed detection into your workflow.",
    },
  ]

  const services = [
    {
      icon: Zap,
      title: "Real-time API Detection",
      description: "RESTful endpoints for on-the-fly content checks.",
      stat: "<100 ms response time",
    },
    {
      icon: FileText,
      title: "Bulk Document Scans",
      description: "Upload entire documents and receive batch reports.",
      stat: "Up to 10k words",
    },
    {
      icon: Code2,
      title: "Plugin & SDK Support",
      description: "Integrate with LMS, CMS, or custom apps.",
      stat: "5+ platforms supported",
    },
  ]

  const cases = [
    {
      title: "2025 Academic Integrity",
      description: "How universities reduced AI-writing incidents by 80%.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "2025 Publishing Trust",
      description: "Major publisher cut editing time by 30%.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "2025 Corporate Compliance",
      description: "Fortune 500 legal review accelerated 2×.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const plans = [
    {
      name: "Basic",
      price: "$0.40/min",
      features: ["Up to 5k words/month", "Email support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$0.30/min",
      features: ["Up to 50k words/month", "Priority email + chat support"],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      features: ["Unlimited words", "Dedicated account manager"],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const teamMembers = [
    {
      title: "Alex Chen",
      role: "CEO & Co-Founder",
      description:
        "Former ML engineer at Google with 8+ years in AI detection systems. PhD in Computer Science from Stanford.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      description:
        "Ex-OpenAI researcher specializing in language models. Published 15+ papers on AI text generation and detection.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  if (showIntro) {
    return (
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          BUSTED.ai
        </motion.h1>
      </LampContainer>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <FloatingNav navItems={navItems} />

      {/* Static Navbar for larger screens */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white tracking-wider">BUSTED.ai</div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#process" className="hover:text-gray-300 transition-colors">
                Process
              </a>
              <a href="#services" className="hover:text-gray-300 transition-colors">
                Services
              </a>
              <a href="#cases" className="hover:text-gray-300 transition-colors">
                Cases
              </a>
              <a href="#plans" className="hover:text-gray-300 transition-colors">
                Plans
              </a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">
                Contact
              </a>
              <Button className="bg-white hover:bg-gray-200 text-black font-semibold">Notify Me</Button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-2 space-y-2">
              <a href="#process" className="block py-2 hover:text-gray-300">
                Process
              </a>
              <a href="#services" className="block py-2 hover:text-gray-300">
                Services
              </a>
              <a href="#cases" className="block py-2 hover:text-gray-300">
                Cases
              </a>
              <a href="#plans" className="block py-2 hover:text-gray-300">
                Plans
              </a>
              <a href="#contact" className="block py-2 hover:text-gray-300">
                Contact
              </a>
              <Button className="w-full mt-2 bg-white hover:bg-gray-200 text-black">Notify Me</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Spotlight */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">Launching Soon</Badge>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
          >
            Enterprise-grade Detection of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              AI-Generated Content
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            👋 BUSTED.ai empowers publishers, educators, and platforms to instantly spot AI-written text.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white hover:bg-gray-200 text-black font-semibold text-lg px-8 py-4">
              Join the Waitlist
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" ref={processRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It <span className="text-gray-300">Works</span>
          </h2>
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-300 font-semibold">Step {index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-lg">{step.description}</p>
                </div>
                <div className="w-64 h-32 bg-gradient-to-br from-white/5 to-gray-500/10 rounded-lg border border-white/20"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Wobble Cards */}
      <section id="services" ref={servicesRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-gray-300">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <WobbleCard key={index} containerClassName="col-span-1 min-h-[300px] bg-pink-800" className="">
                <div className="max-w-xs">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-left text-base/6 text-neutral-200">{service.description}</p>
                  <Badge className="mt-4 bg-white/20 text-white border-white/30">{service.stat}</Badge>
                </div>
              </WobbleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meet Our <span className="text-gray-300">Team</span>
          </h2>
          <HoverEffect items={teamMembers} />
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" ref={casesRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Success <span className="text-gray-300">Cases</span>
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCase * 100}%)` }}
              >
                {cases.map((case_, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-black/50 border-gray-600">
                      <CardHeader>
                        <div className="aspect-video bg-gradient-to-br from-white/5 to-gray-500/10 rounded-lg mb-4"></div>
                        <CardTitle className="text-white text-2xl">{case_.title}</CardTitle>
                        <CardDescription className="text-gray-400 text-lg">{case_.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setCurrentCase(Math.max(0, currentCase - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              disabled={currentCase === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentCase(Math.min(cases.length - 1, currentCase + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              disabled={currentCase === cases.length - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Choose Your <span className="text-gray-300">Plan</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`relative bg-black/50 border-gray-600 ${plan.popular ? "border-white scale-105" : ""}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black">Popular</Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-gray-300">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-white hover:bg-gray-200 text-black"
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In <span className="text-gray-300">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white" />
                  <div>
                    <div className="font-semibold">BUSTED.ai HQ</div>
                    <div className="text-gray-400">123 Data Way, San Francisco, CA</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white" />
                  <div className="text-gray-400">hello@busted.ai</div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <Input
                  placeholder="Company"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Message"
                  rows={4}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Button className="w-full bg-white hover:bg-gray-200 text-black font-semibold">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0 tracking-wider">BUSTED.ai</div>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
