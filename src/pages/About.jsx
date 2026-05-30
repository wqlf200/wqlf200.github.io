import React from 'react'
import './About.css'

function About() {
  const skills = [
    { name: 'UI_ENGINEERING', level: 95 },
    { name: 'DATA_VISUALIZATION', level: 88 },
    { name: 'SYSTEM_ARCH', level: 92 }
  ]

  const focuses = [
    { icon: '⌘', name: 'Shell Integration' },
    { icon: '⊞', name: 'Layout Logic' },
    { icon: '</>', name: 'Clean Syntax' },
    { icon: '◉', name: 'Real-time I/O' }
  ]

  return (
    <div className="about">
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-title neon-text-glow crt-flicker">
            PROTOCOL:<br />
            <span className="about-title-name">IDENT_FIONA</span>
          </h1>
          <div className="status-indicator">
            <div className="status-dot-active"></div>
            <p className="mono-label">System initialized // Status: Active</p>
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="about-content">
          {/* Left Column: Bio */}
          <div className="about-left">
            <div className="about-section">
              <h2 className="section-title neon-text-glow">01_Background</h2>
              <p className="about-text">
                I am a digital architect specializing in high-fidelity interfaces and technical visualization. 
                My approach merges the raw, structural integrity of brutalist architecture with the precision 
                of modern terminal environments.
              </p>
              <p className="about-text">
                Based in the intersection of design and development, I build systems that prioritize clarity, 
                performance, and aesthetic authority. Every pixel is a calculated coordinate; every interaction 
                is a functional protocol.
              </p>
            </div>

            <div className="about-section">
              <h2 className="section-title neon-text-glow">02_Philosophy</h2>
              <p className="about-text">
                I believe in the beauty of the grid. Design should not just look good; it should feel engineered. 
                By stripping away unnecessary ornamentation, I reveal the underlying logic of information architecture.
              </p>
              <ul className="philosophy-list">
                <li>
                  <span className="list-marker neon-text-glow">&gt;</span>
                  <span>Radical transparency in layout structure.</span>
                </li>
                <li>
                  <span className="list-marker neon-text-glow">&gt;</span>
                  <span>High-contrast visual hierarchy for maximum signal.</span>
                </li>
                <li>
                  <span className="list-marker neon-text-glow">&gt;</span>
                  <span>Minimalist aesthetic powered by technical flourish.</span>
                </li>
              </ul>
            </div>

            <div className="about-section">
              <button className="cv-button btn-neon-hover">
                Download_CV.pdf
              </button>
            </div>
          </div>

          {/* Right Column: Skills & Interests */}
          <div className="about-right">
            <div className="about-section">
              <h2 className="section-title neon-text-glow">03_Competencies</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-header">
                      <span className="mono-label">{skill.name}</span>
                      <span className="mono-label neon-text-glow">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar skill-bar-active" 
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-section">
              <h2 className="section-title neon-text-glow">04_Focus_Zones</h2>
              <div className="focus-grid">
                {focuses.map((focus, index) => (
                  <div key={index} className="focus-box">
                    <span className="focus-icon">{focus.icon}</span>
                    <span className="focus-label mono-label">{focus.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
