import { MapPin, Mail, Phone } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { motion, useReducedMotion } from 'framer-motion'
import './Footer.css'

const CONTACT_ITEMS = [
  { icon: MapPin, label: 'Location', value: 'Erode, Tamil Nadu, India' },
  {
    icon: Mail,
    label: 'Email',
    value: 'bharath978930@gmail.com',
    href: 'mailto:bharath978930@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9789301648',
    href: 'tel:+919789301648',
  },
]

const SOCIAL_LINKS = [
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/bharath532' },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bharath9789',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Footer() {
  const shouldReduceMotion = useReducedMotion()
  const variants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : fadeUp

  return (
    <motion.footer
      className="footer"
      id="contact"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      variants={variants}
    >
      <div className="container">
        <div className="footer-cta">
          <p className="section-eyebrow">Let's Connect</p>
          <h2 className="footer-cta-title">Have an idea? Let's build it.</h2>
          <p className="footer-cta-text">
            I'm open to new projects, creative ideas and software development
            opportunities.
          </p>
        </div>

        <div className="footer-contact-grid">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="footer-contact-card">
                <Icon className="footer-contact-icon" aria-hidden="true" />
                <p className="footer-contact-label">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="footer-contact-link">
                    {item.value}
                  </a>
                ) : (
                  <p className="footer-contact-value">{item.value}</p>
                )}
              </div>
            )
          })}
        </div>

        <div className="footer-connect-row">
          <nav className="footer-socials" aria-label="Social links">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="footer-social-icon" aria-hidden="true" />
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2026 Bharath S</p>
          {/* <p className="footer-role">MERN Stack Developer</p> */}
        </div>
      </div>
    </motion.footer>
  )
}
