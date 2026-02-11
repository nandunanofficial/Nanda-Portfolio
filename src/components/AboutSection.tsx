'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { resumeData } from '@/data/resume'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  return (
    <section className="py-32 relative">
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-6"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            <span className="gradient-text">About Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium">
              {resumeData.profile}
            </p>

            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold gradient-text">Education</h3>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">{resumeData.education.institution}</p>
                  <p className="text-foreground">{resumeData.education.degree}</p>
                  <p className="text-sm text-muted-foreground">{resumeData.education.period}</p>
                  <p className="text-sm font-medium text-primary">CGPA: {resumeData.education.cgpa}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold gradient-text">Key Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Software Development', 'Network Security', 'Web Development'].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
