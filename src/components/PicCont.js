import React from 'react'
import mypic from './teh.jpeg';
import './pic.css';

export default function PicCont() {
  return (
    <div className='round'>
      <img src={mypic} alt="error" height={500} width={500} class="rounded-circle"></img>
    </div>
  )
}
