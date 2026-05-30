import React, { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SplitText from '../components/SplitText'
import './Home.css'

function Home() {
  const handleAnimationComplete = useCallback(() => {
    console.log('All letters have animated!')
  }, [])

  useEffect(() => {
    // 文本闪烁交互效果
    const labels = document.querySelectorAll('.mono-label')
    labels.forEach(el => {
      el.addEventListener('mouseenter', () => {
        const originalText = el.innerText
        if (originalText.length < 2) return
        
        let iterations = 0
        const interval = setInterval(() => {
          el.innerText = el.innerText
            .split("")
            .map((letter, index) => {
              if(index < iterations) {
                return originalText[index]
              }
              const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@$"
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join("")
          
          if(iterations >= originalText.length) {
            clearInterval(interval)
            el.innerText = originalText
          }
          iterations += 1/2
        }, 30)
      })
    })
  }, [])

  return (
    <div className="home">
      <main className="home-main">
        {/* 英雄区域 */}
        <section className="hero-section">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-dot-pulse"></span>
            <span className="mono-label">SYSTEM_STATUS: ONLINE</span>
          </div>
          
          <SplitText
            text="Hello, you!"
            className="text-2xl font-semibold text-center"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />
          
          <p className="hero-description">
            A CREATIVE DEVELOPER & ARCHITECT SPECIALIZING IN HIGH-CONTRAST DIGITAL EXPERIENCES. 
            CURRENTLY OPERATING WITHIN THE INTERSECTION OF FUNCTIONAL BRUTALISM AND MODERN MINIMALISM.
          </p>
          
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary glitch-hover btn-neon-hover">
              <span>CONTACT ME</span>
              <span className="arrow">→</span>
            </Link>
            <a href="#" className="btn-secondary">
              <span>↓</span>
              <span>DOWNLOAD_CV.PDF</span>
            </a>
          </div>
        </section>

        {/* 装饰性元素 */}
        <div className="decorative-left">
          <p className="mono-label">LOC: 51.5074° N, 0.1278° W</p>
          <p className="mono-label">OS: TERMINAL_V1.0</p>
          <p className="mono-label">TZ: GMT+0</p>
        </div>
        <div className="decorative-right">
          <p className="mono-label">SCR_WIDTH: 1920PX</p>
          <p className="mono-label">LATENCY: 14MS</p>
          <p className="mono-label">MEM: 48.2GB_AVAIL</p>
        </div>
      </main>

      {/* Bento Grid 内容区域 */}
      <section className="bento-section">
        <div className="bento-grid">
          {/* 大型焦点区块 */}
          <div className="bento-card bento-large">
            <div className="bento-header">
              <h3>Core Expertise</h3>
              <span className="bento-icon">⌘</span>
            </div>
            <div className="expertise-grid">
              <div className="expertise-item">
                <p className="mono-label expertise-label">01 // VISUAL DESIGN</p>
                <p className="expertise-desc">Crafting aggressive, high-authority interfaces that demand user attention.</p>
              </div>
              <div className="expertise-item">
                <p className="mono-label expertise-label">02 // WEB_ENG</p>
                <p className="expertise-desc">Building performant, lightweight infrastructures using the latest stack protocols.</p>
              </div>
            </div>
          </div>

          {/* 作品列表区块 */}
          <div className="bento-card bento-works">
            <div className="mono-label bento-small-title">Selected Works</div>
            <div className="works-list">
              <div className="work-item">
                <span>NEON_PULSE</span>
                <span className="mono-label">2023</span>
              </div>
              <div className="work-item">
                <span>VOID_INTERFACE</span>
                <span className="mono-label">2023</span>
              </div>
              <div className="work-item">
                <span>CYBER_GRID</span>
                <span className="mono-label">2022</span>
              </div>
            </div>
            <button className="view-all-btn mono-label">VIEW ALL ARCHIVES</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
