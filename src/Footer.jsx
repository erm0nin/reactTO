import React from 'react'

const Footer = ({length}) => {
  console.log(length);
  
  const year = new Date()
  return (
    <div className='Footer'>
      Footer
      <p className='total-items'>Total {length} {length <= 1 ? "item" : "items"} </p>
      <p className='year'>{year.getFullYear()}</p>
    </div>
  )
}

export default Footer
