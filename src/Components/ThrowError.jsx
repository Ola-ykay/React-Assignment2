import React from 'react'

function ThrowError() {
    throw new Error("error")
  return (
    <div>
      <h2> Error</h2>
    </div>
  )
}

export default ThrowError