import React from 'react'

const _index = () => {
  return (
    <div>Hello World {process.env.HELLO ? process.env.HELLO : window.env.HELLO ? window.env.HELLO : "No env's working"} 
    <p>working.. Hurrayyyy....</p>
    </div>
  )
}

export default _index