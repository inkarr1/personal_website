import React from 'react'

const Icon = ({ icon, classes, alt }) => (
  <img src={`static/Icons/${icon}.webp`} className={classes} alt={alt} />
)

export default Icon