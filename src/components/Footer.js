import React from 'react'
import './footer.css'
import github from './github.png';
import linked from './linked.png';
import fb from './fb.png';

export default function Footer() {
  return (
    <div className='footer'>
            <a href='https://github.com/Tehreem-Zahid' target="_blank"><img className='img rounded-circle' style={{marginLeft:"600px", marginTop:"10px"}} src={github} alt="error" height={40} width={40}></img></a>
            <a href='https://www.linkedin.com/in/tehreem-zahid-3a4948221/' target="_blank"><img className='rounded-circle' style={{marginLeft:"30px", marginTop:"10px"}} src={linked} alt="error" height={40} width={40}></img></a>
            <a href='https://www.facebook.com/tehreem.zahid.395/' target="_blank"><img className='img rounded-circle' style={{marginLeft:"23px", marginTop:"8px"}} src={fb} alt="error" height={47} width={47}></img></a>
    </div>
  )
}
