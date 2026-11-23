import { motion, useReducedMotion } from 'framer-motion'
import './Hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const variants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : fadeUp

  return (
    <motion.section
      className="hero"
      id="home"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      variants={variants}
    >
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">MERN Stack Developer</p>
          <h1 className="hero-title">
            Building modern web experiences with the MERN stack.
          </h1>
          <p className="hero-subtitle">
            I build responsive, scalable and user-focused web applications using
            React, Node.js, Express and MongoDB.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button-primary">
              View My Work
            </a>
            <a href="#contact" className="button-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-code-window">
            <div className="hero-code-header">
              <span className="hero-code-dot" />
              <span className="hero-code-dot" />
              <span className="hero-code-dot" />
              <span className="hero-code-filename">server.js</span>
            </div>
            <pre className="hero-code">
              <code>
                <span className="tok-kw">const</span>{' '}
                <span className="tok-var">express</span>{' '}
                <span className="tok-punct">=</span>{' '}
                <span className="tok-fn">require</span>
                <span className="tok-punct">(</span>
                <span className="tok-str">'express'</span>
                <span className="tok-punct">)</span>
                {'\n'}
                <span className="tok-kw">const</span>{' '}
                <span className="tok-var">app</span>{' '}
                <span className="tok-punct">=</span>{' '}
                <span className="tok-var">express</span>
                <span className="tok-punct">()</span>
                {'\n'}
                {'\n'}
                <span className="tok-var">app</span>
                <span className="tok-punct">.</span>
                <span className="tok-fn">get</span>
                <span className="tok-punct">(</span>
                <span className="tok-str">'/'</span>
                <span className="tok-punct">,</span>{' '}
                <span className="tok-punct">(</span>
                <span className="tok-var">req</span>
                <span className="tok-punct">,</span>{' '}
                <span className="tok-var">res</span>
                <span className="tok-punct">)</span>{' '}
                <span className="tok-kw">=&gt;</span>{' '}
                <span className="tok-punct">{'{'}</span>
                {'\n'}
                {'  '}
                <span className="tok-var">res</span>
                <span className="tok-punct">.</span>
                <span className="tok-fn">json</span>
                <span className="tok-punct">({'{'}</span>
                <span className="tok-prop">message</span>
                <span className="tok-punct">:</span>{' '}
                <span className="tok-str">'Hello MERN'</span>
                <span className="tok-punct">{'})'}</span>
                {'\n'}
                <span className="tok-punct">{'}'})</span>
                {'\n'}
                {'\n'}
                <span className="tok-var">app</span>
                <span className="tok-punct">.</span>
                <span className="tok-fn">listen</span>
                <span className="tok-punct">(</span>
                <span className="tok-num">3000</span>
                <span className="tok-punct">)</span>
              </code>
            </pre>
          </div>

          <span className="hero-tech-pill hero-tech-pill--react">React</span>
          <span className="hero-tech-pill hero-tech-pill--node">Node.js</span>
          <span className="hero-tech-pill hero-tech-pill--mongo">MongoDB</span>
          <span className="hero-tech-pill hero-tech-pill--express">
            Express
          </span>
        </div>
      </div>
    </motion.section>
  )
}
