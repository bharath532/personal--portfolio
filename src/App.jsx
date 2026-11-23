import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import './App.css'

const SCROLL_LOCK_MS = 800
const EDGE_TOLERANCE = 6

function useSectionWheelNavigation() {
  useEffect(() => {
    // Desktop only — touch devices keep their native scrolling.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const sections = Array.from(
      document.querySelectorAll('[data-scroll-section]'),
    )
    if (sections.length === 0) return

    let locked = false
    let unlockTimer = null

    const topOf = (element) =>
      element.getBoundingClientRect().top + window.scrollY

    // The section occupying the middle of the viewport.
    const activeIndex = () => {
      const marker = window.scrollY + window.innerHeight / 2
      let index = 0
      sections.forEach((section, i) => {
        if (topOf(section) <= marker) index = i
      })
      return index
    }

    const scrollToSection = (index) => {
      if (locked) return
      locked = true
      window.scrollTo({
        top: Math.max(0, topOf(sections[index])),
        behavior: 'smooth',
      })
      unlockTimer = window.setTimeout(() => {
        locked = false
      }, SCROLL_LOCK_MS)
    }

    const handleWheel = (event) => {
      // Let browser zoom through.
      if (event.ctrlKey || event.deltaY === 0) return

      // Ignore extra wheel events from a single flick / trackpad swipe.
      if (locked) {
        event.preventDefault()
        return
      }

      const index = activeIndex()
      const section = sections[index]
      const top = topOf(section)
      const bottom = top + section.offsetHeight
      const y = window.scrollY

      if (event.deltaY > 0) {
        // Still room left inside an over-long section: let it scroll naturally.
        if (bottom - window.innerHeight > y + EDGE_TOLERANCE) return
        if (index === sections.length - 1) return
        event.preventDefault()
        scrollToSection(index + 1)
      } else {
        // Not at the section's top edge yet: let it scroll naturally.
        if (y > top + EDGE_TOLERANCE) return
        if (index === 0) return
        event.preventDefault()
        scrollToSection(index - 1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (unlockTimer) window.clearTimeout(unlockTimer)
    }
  }, [])
}

function App() {
  useSectionWheelNavigation()

  return (
    <ThemeProvider>
      <div className="app">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
