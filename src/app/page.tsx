import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import TimelineSection from '@/components/TimelineSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ThreeBackground from '@/components/ThreeBackground'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <ThreeBackground />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  )
}
