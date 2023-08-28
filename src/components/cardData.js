import React from 'react'
import pet from './pet.jpg';
import text from './text.jpg';
import bank from './bank-988164.png';
import pet3 from './pet3.png';
import Button from './Button';

export const data=[
    {
        id:1,
        pic: pet,
        name:"Pet Shop",
        TechnologyUsed:"React js, JavaScript, Html, CSS, Node JS, Express JS, MySQL",
        description:"It's an online shopping app for buying pets. It has seven ctegories of pets and is very user frienly.",
        button: <a href={pet3} target="_blank"><Button title="Show More"></Button></a>
    },
    {
        id:2,
        pic: text,
        name:"Text Utils",
        TechnologyUsed:"React js, JavaScript, Html, CSS",
        description:"This is a utilty used to manipulate your text in the way you want",
        button: <a href="https://reactmyapp12.herokuapp.com/" target="_blank"><Button title="Show More"></Button></a>

    },
    {
        id:3,
        pic: bank,
        name:"MM Bank",
        TechnologyUsed:"JavaScript, Html, Bootstrap, Php, MySQL",
        description:"It's a bank website that shows transfer of money between different customers",
        button: <a href="https://millionmartin.000webhostapp.com/home.php" target="_blank"><Button title="Show More"></Button></a>

    }
]