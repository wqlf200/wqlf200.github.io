import React from 'react'
import './Button.css'

function Button({ children, variant = 'primary', onClick, ...props }) {
  return (
    <button 
      className={`button button-${variant}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
