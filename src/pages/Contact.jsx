import React, { useEffect } from 'react'
import './Contact.css'

function Contact() {
  const contactMethods = [
    {
      id: '01',
      label: 'WeChat',
      value: '1204833248',
      copyable: true
    },
    {
      id: '02',
      label: 'GitHub',
      value: 'wql200z@gmail.com',
      link: 'https://github.com'
    },
    {
      id: '03',
      label: 'Email',
      value: 'wql200z@gmail.com',
      link: 'mailto:wql200z@gmail.com'
    }
  ]

  useEffect(() => {
    // 鼠标移动发光追踪效果
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      
      const scanline = document.querySelector('.scanline-overlay')
      if (scanline) {
        scanline.style.opacity = 0.1 + (y * 0.1)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    // 标题文字闪烁效果
    const header = document.querySelector('.contact-title')
    if (header) {
      const originalHTML = header.innerHTML
      const textOnly = header.innerText.replace(/\s+/g, ' ')
      
      header.addEventListener('mouseenter', () => {
        const letters = "01#$%&X_<>[]"
        let iteration = 0
        const interval = setInterval(() => {
          header.innerText = textOnly
            .split("")
            .map((letter, index) => {
              if (index < iteration) return textOnly[index]
              return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("")
          
          if (iteration >= textOnly.length) {
            clearInterval(interval)
            header.innerHTML = originalHTML
          }
          iteration += 1/2
        }, 30)
      })
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="contact">
      <main className="contact-main">
        {/* 背景网格装饰 */}
        <div className="contact-grid-bg"></div>
        
        <section className="contact-content">
          {/* Left Column */}
          <div className="contact-left">
            <div className="contact-header">
              <span className="mono-label contact-location">SYSTEM_LOCATION: /CONTACT</span>
              <h1 className="contact-title neon-text-glow crt-flicker">
                Get In<br />Touch<span className="terminal-cursor"></span>
              </h1>
            </div>

            {/* Profile Placeholder with Scanning Effect */}
            <div className="profile-container">
              <div className="scanning-ring"></div>
              <div className="profile-circle">
                <span className="profile-icon">👤</span>
                <div className="profile-ring-1"></div>
                <div className="profile-ring-2"></div>
              </div>
              <div className="profile-tag">
                NO_IMAGE_FOUND
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-right">
            {/* Contact Methods List */}
            <div className="contact-list">
              {contactMethods.map((method) => (
                <div key={method.id} className="contact-item">
                  <div className="contact-item-header">
                    <span className="mono-label contact-number">{method.id}</span>
                    <span className="mono-label contact-label">{method.label}</span>
                  </div>
                  <div className="contact-item-value">
                    {method.link ? (
                      <a href={method.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                        <span className="contact-value">{method.value}</span>
                        <span className="contact-icon">↗</span>
                      </a>
                    ) : (
                      <>
                        <span className="contact-value">{method.value}</span>
                        {method.copyable && (
                          <button onClick={() => handleCopy(method.value)} className="copy-btn">
                            📋
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-accent-line"></div>
              <p className="form-description">
                &gt; Transmission ready. If you have a project in mind or just want to discuss the 
                future of digital interfaces, send a signal. My response time is usually within 
                24 standard cycles.
              </p>
              
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-field">
                  <label className="mono-label form-label">INPUT_NAME</label>
                  <input 
                    type="text" 
                    className="form-input neon-focus"
                    placeholder="WHO ARE YOU?"
                  />
                </div>
                
                <div className="form-field">
                  <label className="mono-label form-label">INPUT_MESSAGE</label>
                  <textarea 
                    className="form-textarea neon-focus"
                    rows="3"
                    placeholder="YOUR_SIGNAL_HERE..."
                  ></textarea>
                </div>
                
                <button type="submit" className="form-submit btn-neon-hover">
                  <span>TRANSMIT_SIGNAL</span>
                  <span className="submit-icon">→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact
