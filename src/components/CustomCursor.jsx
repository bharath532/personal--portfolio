import { useEffect, useRef } from 'react'
import './CustomCursor.css'

const HOVER_SELECTOR =
  'a, button, [role="button"], .project-card, [data-cursor="hover"]'

export default function CustomCursor() {
  const rootRef = useRef(null)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const dot = dotRef.current
    const ring = ringRef.current
    if (!root || !dot || !ring) return

    // Skip entirely on touch / hybrid devices without a precise hovering pointer.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    document.documentElement.classList.add('custom-cursor-active')

    let targetX = -100
    let targetY = -100
    let ringX = -100
    let ringY = -100
    let hasMoved = false
    let frame = 0

    const handlePointerMove = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return

      targetX = event.clientX
      targetY = event.clientY

      if (!hasMoved) {
        hasMoved = true
        ringX = targetX
        ringY = targetY
        root.classList.add('is-visible')
      }

      // Inner dot: instant, GPU-composited movement.
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`
    }

    const animate = () => {
      // Outer ring: eased trailing follow.
      ringX += (targetX - ringX) * 0.16
      ringY += (targetY - ringY) * 0.16
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    const handlePointerOver = (event) => {
      if (
        event.target instanceof Element &&
        event.target.closest(HOVER_SELECTOR)
      ) {
        root.classList.add('is-hovering')
      }
    }

    const handlePointerOut = (event) => {
      if (!(event.target instanceof Element)) return
      if (!event.target.closest(HOVER_SELECTOR)) return

      const next = event.relatedTarget
      if (!(next instanceof Element) || !next.closest(HOVER_SELECTOR)) {
        root.classList.remove('is-hovering')
      }
    }

    const hide = () => root.classList.remove('is-visible')
    const show = () => {
      if (hasMoved) root.classList.add('is-visible')
    }

    document.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerout', handlePointerOut)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)
    window.addEventListener('blur', hide)

    return () => {
      cancelAnimationFrame(frame)
      document.documentElement.classList.remove('custom-cursor-active')
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
      window.removeEventListener('blur', hide)
    }
  }, [])

  return (
    <div className="custom-cursor" ref={rootRef} aria-hidden="true">
      <span className="custom-cursor-ring" ref={ringRef}>
        <span className="custom-cursor-ring-shape" />
      </span>
      <span className="custom-cursor-dot" ref={dotRef} />
    </div>
  )
}
