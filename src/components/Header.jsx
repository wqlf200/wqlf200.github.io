import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT ME', path: '/about' },
    { name: 'WORKS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="header-container">
        <Link 
          to="/" 
          className="logo crt-flicker neon-text-glow"
        >
          FIONA
        </Link>
        
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="nav-mobile-btn">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  )
}

export default Header
