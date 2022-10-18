import React from 'react'

const Image = ({ img, classes, alt }) => (
  <img src={`static/images/${img}.png`} className={classes} alt={alt}/>
)

export default Image