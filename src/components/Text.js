import React from 'react';
import './text.css';
import mail from './mail.png';
import phonecall from './phone-call.png';

export default function Text() {
  return (
    <div className='text'>
      <p>Hello, My name is</p><hr />
      <h1>Tehreem Zahid</h1>
      <h3>Front-End Developer</h3>
      <div className="mail">
      <img className='img' src={mail} alt="error" height={33} width={33}></img>
      <p className='p'>mstehreem123@yahoo.com</p>
      </div>
      <div className="mail" style={{marginTop:"20px"}}>
      <img className='img' src={phonecall} alt="error" height={30} width={30}></img>
      <p className='p' style={{display:"block"}}>03442098169</p>
      </div>
    </div>
  )
}
