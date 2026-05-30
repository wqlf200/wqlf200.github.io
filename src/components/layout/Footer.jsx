import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright crt-flicker">
          © {currentYear} FIONA_TERMINAL_V1.0. ALL RIGHTS RESERVED.
        </div>
        
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            GITHUB
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            LINKEDIN
          </a>
          <a href="#" className="footer-link">
            SOURCE
          </a>
        </div>

        <div className="footer-status">
          UPTIME: 99.99%
        </div>
      </div>
    </footer>
  )
}

export default Footer
