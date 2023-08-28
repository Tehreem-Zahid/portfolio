import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import pet3 from './pet3.png';
import pet5 from './pet5.png';
import pet10 from './pet10.jpg';

export default function Crousel() {
  return (
    <div>
    <Carousel>
        <Carousel.Item>
            <img src={pet3} height="300px" width="350px" alt="Img1" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={pet5} height="300px" width="350px" alt="Img1" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={pet10} height="300px" width="350px" alt="Img1" />
        </Carousel.Item>

    </Carousel>
    </div>
  )
}
