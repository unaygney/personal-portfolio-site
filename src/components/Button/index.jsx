import React from 'react'

function Button({children ,...props }) {
  return (
 <button {...props} className='w-8 h-8 ' >
{children}
 </button>
  )
}

export default Button
