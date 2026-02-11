'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Cpu, Wrench } from 'lucide-react'
import { resumeData } from '@/data/resume'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: resumeData.skills.languages,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: resumeData.skills.webDevelopment,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: resumeData.skills.databases,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'APIs & Concepts',
    icon: Cpu,
    skills: resumeData.skills.apis,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: resumeData.skills.tools,
    color: 'from-indigo-500 to-purple-500'
  }
]

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

const categoryVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
} as const

const skillVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const
    }
  }
} as const

export default function SkillsSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={categoryVariants}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            <span className="gradient-text">Technical Skills</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={categoryVariants}
                  className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        variants={skillVariants}
                        custom={skillIndex}
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 text-white text-sm border border-white/20 hover:scale-110 transition-transform`}
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
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
