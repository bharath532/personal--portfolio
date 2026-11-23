import { motion, useReducedMotion } from 'framer-motion'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    name: 'Sastik Mobiles & Laptop Sales & Service Centre',
    description:
      'A full-stack web application for a mobile and laptop sales and service business.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: '#', // TODO: Replace with your GitHub repo URL
    liveUrl: '#', // TODO: Replace with your live demo URL
  },
  {
    id: 2,
    name: 'MERN E-Commerce Application',
    description:
      'A full-stack e-commerce application with product browsing, cart and authentication.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: '#', // TODO: Replace with your GitHub repo URL
    liveUrl: '#', // TODO: Replace with your live demo URL
  },
  {
    id: 3,
    name: 'Real-Time MERN Chat Application',
    description:
      'A real-time chat application with user authentication and instant messaging.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: '#', // TODO: Replace with your GitHub repo URL
    liveUrl: '#', // TODO: Replace with your live demo URL
  },
  {
    id: 4,
    name: 'Weather Application',
    description:
      'A responsive weather application that displays weather information using an API.',
    tech: ['React', 'JavaScript', 'REST API'],
    githubUrl: '#', // TODO: Replace with your GitHub repo URL
    liveUrl: '#', // TODO: Replace with your live demo URL
  },
  {
    id: 5,
    name: 'Billing Application',
    description:
      'A simple application for managing billing and invoice-related operations.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: '#', // TODO: Replace with your GitHub repo URL
    liveUrl: '#', // TODO: Replace with your live demo URL
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion()
  const container = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : containerVariants
  const item = shouldReduceMotion ? { hidden: {}, visible: {} } : itemVariants

  return (
    <motion.section
      className="projects"
      id="work"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={container}
    >
      <div className="container">
        <p className="section-eyebrow">Work</p>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={item}
            >
              <div className="project-card-header">
                <span className="project-number">
                  {String(project.id).padStart(2, '0')}
                </span>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  className="project-btn project-btn-github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="project-btn-icon"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="project-btn project-btn-live"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="project-btn-icon"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5Z" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
