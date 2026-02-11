'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award } from 'lucide-react'
import { resumeData } from '@/data/resume'

const timelineItems = [
  {
    type: 'education',
    icon: GraduationCap,
    title: resumeData.education.degree,
    organization: resumeData.education.institution,
    period: resumeData.education.period,
    description: `CGPA: ${resumeData.education.cgpa}`,
    color: 'from-blue-500 to-cyan-500'
  },
  ...resumeData.patents.map((patent, index) => ({
    type: 'achievement',
    icon: Award,
    title: patent.title,
    organization: 'Published Patent',
    period: patent.status,
    description: patent.description,
    color: 'from-purple-500 to-pink-500'
  }))
]

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
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
}

export default function TimelineSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
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
            <span className="gradient-text">Education & Achievements</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20"></div>

            {timelineItems.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center mb-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-effect rounded-xl p-6 hover:neon-border transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3 md:justify-end">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-sm text-muted-foreground">{item.period}</div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary font-medium mb-2">{item.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
