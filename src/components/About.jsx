import { Download } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { motion, useReducedMotion } from 'framer-motion'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const ABOUT_FACTS = [
  { label: 'Education', value: 'MCA — Erode Arts and Science College' },
  { label: 'Core Stack', value: 'React, Node.js, Express, MongoDB, SQL' },
  { label: 'Focus', value: 'Full-Stack Web Apps & Japanese (JLPT)' },
  { label: 'Goal', value: 'Software Developer Opportunities in Japan' },
]

export default function About() {
  const shouldReduceMotion = useReducedMotion()
  const variants = shouldReduceMotion ? { hidden: {}, visible: {} } : fadeUp

  return (
    <motion.section
      className="about"
      id="about"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      variants={variants}
    >
      <div className="container about-grid">
        <div className="about-visual">
          <DotLottieReact src="./public/developer.lottie" loop autoplay />
        </div>

        <div className="about-content">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">A bit about me</h2>

          <p className="about-text">
            I'm Bharath S — an MCA student and MERN Stack Developer crafting
            fast, responsive web applications with React, Node.js, Express, and
            MongoDB. Currently preparing for software engineering opportunities
            in Japan alongside my Japanese (JLPT) studies.
          </p>

          <dl className="about-facts">
            {ABOUT_FACTS.map(({ label, value }) => (
              <div className="about-fact" key={label}>
                <dt className="about-fact-label">{label}</dt>
                <dd className="about-fact-value">{value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="./public/Bharath S.pdf"
            download
            className="button-primary about-resume-btn"
          >
            Download Resume
            <Download className="about-resume-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.section>
  )
}
