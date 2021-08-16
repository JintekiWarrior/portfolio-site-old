import React from 'react'
import './Links.scss'

// Component will display a link with some text.
const Links = (props) => {
  return (
    <div id="links-container">
      <a id="link-text" href={props.link}>{props.linkText}</a>
      <p id="text">{props.text}</p>
    </div>
  )
}

export default Links
