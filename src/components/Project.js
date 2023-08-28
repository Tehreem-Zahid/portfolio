import React from 'react'
import './project.css';
import Card from './Card';
import {data} from './cardData.js'

export default function Project() {
  return (
    <div className='container' id="project">
      <h3 className='h3'>Projects</h3><hr />
      <div className="contai">
      <Card pic={data[0].pic} name={data[0].name} TechnologyUsed={data[0].TechnologyUsed} description={data[0].description} button={data[0].button}/>
      <Card pic={data[1].pic} name={data[1].name} TechnologyUsed={data[1].TechnologyUsed} description={data[1].description} button={data[1].button}/>
      <Card pic={data[2].pic} name={data[2].name} TechnologyUsed={data[2].TechnologyUsed} description={data[2].description} button={data[2].button}/>

    </div>
    </div>
  )
}
