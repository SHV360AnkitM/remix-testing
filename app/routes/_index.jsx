import React from 'react'

const _index = () => {
  return (
    <div>Hello World
      {/* / {process.env.HELLO ? process.env.HELLO : "Not working"}  */}
    <p>working.. Hurrayyyy....</p>
    </div>
  )
}

export function loader() {
  console.log("process.env.HELLO", process.env.HELLO);
  return null
}



export default _index