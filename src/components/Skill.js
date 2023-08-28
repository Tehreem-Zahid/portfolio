import React, { useEffect } from 'react'
import man from './man.png'
import Button from './Button'
import './skill.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Skill() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div className='container my-5' id="skill">
      <h3 className='h3'>Skills</h3><hr />
      <div className="pic">
        <div className="men"><img data-aos="fade-in" src={man} alt="" width={400} height={300}/></div>
        <div className="but">
          <div className='abc'>
          <Button title="HTML"></Button>
        <Button title="CSS"></Button>
        <Button title="JavaScript"></Button>
        <Button title="React JS"></Button>
        <Button title="C++"></Button>
          </div>
          <div className='abc'>
          
        <Button title="Node JS"></Button>
        <Button title="Express JS"></Button>
        <Button title="Bootstrap"></Button>
        <Button title="C#"></Button>
          </div>
        <div className='abc'>
        <Button title="Python"></Button>
        <Button title="Php"></Button>
        <Button title="Web Development"></Button>
        <Button title="Front-end Development"></Button>
        </div>
        </div>
      </div>
    </div>
  )
}
