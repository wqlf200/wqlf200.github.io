import React, { useEffect } from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project 1 - Pinterest Portfolio',
      year: '2024',
      featured: true,
      description: 'A custom visual discovery engine built with high-performance filtering. Designed for extreme readability and minimal latent data overhead. Focus on grid dynamics and brutalist spacing.',
      tags: ['#REACT', '#TAILWIND', '#API'],
      link: 'https://www.pinterest.com/'
    },
    {
      id: 2,
      title: 'Project 2 - Woshipm Articles',
      year: '2024',
      featured: true,
      description: 'A robust CMS interface focusing on multi-layered typography and hierarchical content mapping. Integrated dark-mode logic and typography scales optimized for long-form technical reading.',
      tags: ['#REACT', '#CMS', '#MARKDOWN'],
      features: ['DYNAMIC_LAYOUT_ENGINE', 'MARKDOWN_RENDERER_PRO', 'AUTO_SAVE_BUFFER'],
      link: 'https://www.woshipm.com/ai/6405196.html'
    },
    {
      id: 3,
      title: 'ARCHIVE_INDEX_04',
      description: 'Legacy data visualizations mapping real-time API traffic. Minimalist scatter plots and line nodes.',
      status: 'DEPLOYED_STABLE',
      progress: 75
    },
    {
      id: 4,
      title: 'WIDGET_REDACT',
      description: 'Experimental UI patterns for high-security environments.',
      link: '#'
    },
    {
      id: 5,
      title: 'VECTOR_SPACE',
      description: 'Exploration of geometric SVG animations in React environments.'
    },
    {
      id: 6,
      title: 'CLASSIFIED_01',
      description: 'Content restricted. Security clearance required for project inspection.',
      classified: true
    }
  ]

  useEffect(() => {
    // 打字机效果
    const typingElement = document.querySelector('.typing-effect')
    if (typingElement) {
      const text = 'fetch_portfolio --all'
      const textArr = text.split('')
      let index = 0

      const type = () => {
        if (index < textArr.length) {
          typingElement.innerHTML = textArr.slice(0, index + 1).join('') + '<span class="cursor-blink">|</span>'
          index++
          setTimeout(type, 80 + Math.random() * 100)
        } else {
          typingElement.innerHTML = text + '<span class="cursor-blink">_</span>'
        }
      }

      setTimeout(type, 500)
    }

    // 微交互：点击效果
    document.querySelectorAll('.project-card').forEach(el => {
      el.addEventListener('mousedown', () => {
        el.style.transform = 'translate(1px, 1px) skewX(1deg)'
        setTimeout(() => { el.style.transform = '' }, 100)
      })
    })
  }, [])

  return (
    <div className="projects">
      <main className="projects-main">
        {/* Terminal Header */}
        <section className="projects-header">
          <div className="terminal-prompt">
            <span className="prompt-user">user@terminal:~$</span>
            <span className="typing-effect mono-label"></span>
          </div>
          <h1 className="projects-title neon-text-glow crt-flicker">
            SELECTED_WORKS_V1
          </h1>
          <p className="projects-description mono-label">
            A repository of digital prototypes, visual explorations, and front-end architectures 
            developed with mathematical precision and aesthetic aggression.
          </p>
        </section>

        {/* Projects Bento Grid */}
        <div className="projects-grid">
          {/* Featured Project 1 */}
          {projects.slice(0, 1).map(project => (
            <div key={project.id} className="project-card featured-card crt-flicker">
              <div className="project-badges">
                <span className="badge badge-featured">FEATURED</span>
                <span className="badge badge-year">{project.year}</span>
              </div>
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <div className="project-placeholder">
                  <span className="placeholder-text mono-label">PLACEHOLDER_VISUAL_01.EXE</span>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="mono-label project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link btn-neon-hover">
                  VIEW_CASE_STUDY →
                </a>
              </div>
            </div>
          ))}

          {/* Side Cards */}
          <div className="project-card side-card">
            <div>
              <h3 className="side-card-title">{projects[2].title}</h3>
              <div className="side-card-icon">
                <span className="icon-placeholder">⊞</span>
              </div>
              <p className="mono-label side-card-description">
                {projects[2].description}
              </p>
            </div>
            <div className="progress-section">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${projects[2].progress}%` }}></div>
              </div>
              <span className="mono-label status-text">{projects[2].status}</span>
            </div>
          </div>

          <div className="project-card small-card">
            <h3 className="small-card-title">{projects[3].title}</h3>
            <div className="small-card-lines">
              <div className="line"></div>
              <div className="line line-80"></div>
              <div className="line line-90"></div>
              <div className="line line-40 line-pulse"></div>
            </div>
            <p className="small-card-description">{projects[3].description}</p>
            <a href={projects[3].link} className="small-card-link">
              RUN_PROTOTYPE &gt;
            </a>
          </div>

          {/* Featured Project 2 */}
          <div className="project-card featured-card-2 crt-flicker">
            <div className="project-header-2">
              <div>
                <h2 className="project-title-2">{projects[1].title}</h2>
                <span className="mono-label project-subtitle">EDITORIAL_SYSTEM_OS</span>
              </div>
              <span className="project-icon">📄</span>
            </div>
            <div className="project-content-grid">
              <div className="stats-card">
                <div className="stats-bar"></div>
                <span className="mono-label stats-label">MODULE_COMPLEXITY</span>
                <span className="stats-value">98.2%</span>
              </div>
              <div>
                <p className="project-description-2">{projects[1].description}</p>
                <ul className="feature-list">
                  {projects[1].features.map((feature, i) => (
                    <li key={i} className="mono-label">
                      <span className="feature-marker">&gt;</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a href={projects[1].link} target="_blank" rel="noopener noreferrer" className="action-btn btn-neon-hover mono-label">
                    LIVE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Small Cards */}
          <div className="project-card mini-card">
            <div className="mono-label mini-label">FRAG_331.CSS</div>
            <h3 className="mini-title">{projects[4].title}</h3>
            <p className="mini-description">{projects[4].description}</p>
            <div className="mini-footer">
              <span className="mini-icon">⌘</span>
              <span className="mono-label mini-status">NODE_ENV: DEV</span>
            </div>
          </div>

          <div className="project-card mini-card classified">
            <div className="classified-indicator">
              <span className="classified-dot"></span>
              <span className="mono-label classified-label">SYSTEM_REDACTED</span>
            </div>
            <h3 className="classified-title">{projects[5].title}</h3>
            <p className="classified-description">{projects[5].description}</p>
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <div className="mono-label pagination-info">SHOWING 06 OF 18 ARTIFACTS</div>
          <div className="pagination-buttons">
            <button className="pagination-btn pagination-btn-disabled" disabled>
              &lt; PREV
            </button>
            <button className="pagination-btn pagination-btn-active btn-neon-hover">
              NEXT &gt;
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Projects
