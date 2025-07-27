import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-60',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
    // forward ref an important hook
  )
}

export default Button
