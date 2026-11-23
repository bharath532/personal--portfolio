import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { Braces } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'REST API', icon: Braces, color: '#4d4d4d' },
    ],
  },
  {
    title: 'Database',
    skills: [{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' }],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()
  const container = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : containerVariants
  const item = shouldReduceMotion ? { hidden: {}, visible: {} } : itemVariants

  return (
    <motion.section
      className="skills"
      id="skills"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={container}
    >
      <div className="container">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Technologies I Work With</h2>

        <div className="tech-wall">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="tech-category">
              <h3 className="tech-category-title">{category.title}</h3>
              <div className="tech-chips">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <motion.span
                      key={skill.name}
                      className="tech-chip"
                      data-skill={skill.name
                        .toLowerCase()
                        .replace(/[^a-z]/g, '')}
                      style={{ '--skill-color': skill.color }}
                      variants={item}
                    >
                      <Icon className="tech-chip-icon" />
                      <span className="tech-chip-name">{skill.name}</span>
                    </motion.span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
