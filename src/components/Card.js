import React from 'react'
import {data} from './cardData.js'
import './card.css'
import Button from './Button.js'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Card(props) {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
      <div className="card1 border border-success rounded-5">
        
      <img data-aos="zoom-in-up" src={props.pic} alt="error" style={{width:"200px", height:"200px", marginLeft:"70px", marginTop:"20px"}} height={500} width={500} class="rounded-circle"></img>
    
        <div className="she">
        <h1 style={{textAlign:"center"}}>{props.name}</h1>
        <h3 className='h3'>Technology Used:</h3>
        <p className='p' style={{textAlign:"center", height:"60px"}}>{props.TechnologyUsed}</p>
        <h3 className='h3'>Description:</h3>
        <p className='p' style={{textAlign:"center", height:"60px"}}> {props.description}</p>
        <div style={{marginLeft:"85px"}} className="bot">
        {props.button}
        </div>
        </div>
        </div>
  )
}
