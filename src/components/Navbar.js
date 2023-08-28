import React from 'react';
import './navbar.css';
import myresume from 'C:/Users/HP/Downloads/Tehreem.pdf';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


export default function Navbarcomp() {
  return (
    <BrowserRouter>
    <div className='navbar'>
      <ul>
        <li><button style={{ fontSize: "20px", marginTop:"-10px"}} type="button" className="btn btn-success px-3 py-2"><a style={{color:"white", textDecoration: "none"}} className="button" href={myresume}>
      Download Resume
    </a></button></li>
    <li><a style={{color:"yellow", textDecoration: "none"}} href="/">Home</a></li>
  <Link style={{textDecoration: "none",
    color: "yellow"}} to='#about'><li>About</li></Link>
        <Link style={{textDecoration: "none",
    color: "yellow"}} to='#skill'><li>Skills</li></Link>
        <Link style={{textDecoration: "none",
    color: "yellow"}} to='#project'><li>Projects</li></Link>
      </ul>
    </div>
    </BrowserRouter>
  )
}
