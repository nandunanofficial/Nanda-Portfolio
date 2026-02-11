'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { resumeData } from '@/data/resume'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    }
  }
}

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    }
  })
} as const

export default function HeroSection() {
  const name = resumeData.personal.name.split('')

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-32">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name with letter-by-letter animation */}
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6">
            {name.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                className="inline-block gradient-text"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Software Engineering Student & ML Enthusiast
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{resumeData.personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{resumeData.personal.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{resumeData.personal.phone}</span>
            </div>
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="glass-effect hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass-effect hover:scale-105 transition-transform duration-300 neon-border"
              asChild
            >
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              className="glass-effect hover:scale-105 transition-transform duration-300"
              onClick={() => window.open(resumeData.personal.resume, '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
