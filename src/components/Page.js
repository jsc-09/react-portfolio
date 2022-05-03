import React from 'react'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

export default function Page(props) {

  if (props.currentPage.name === "portfolio") {
    return (
      <div>
        
        <Portfolio />
      </div>
    )
  } else if (props.currentPage.name === "about") {
    return (
      <div>
        
        <About />
      </div>
    )
  } else {
    return (
      <div>
        
        <Contact />
      </div>
    )
  }
}
