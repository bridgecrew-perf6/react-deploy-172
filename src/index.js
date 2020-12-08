// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


// ReactDOM.render('Kya Dikhana hai','Kaha dikhana hai', 'Callback Function');
const mynames = ["Davinci","Shakespeare","Monalisa"];
const greettext = ["Good Morning!","Good Afternoon!","Good Evening!"]
const todate = new Date().toLocaleDateString();
const todatehour = new Date().getHours();
const totime = new Date().toLocaleTimeString();
const cssStyle = {};
const image1 = "https://picsum.photos/300/250";
const image2 = "https://picsum.photos/300/300";
const image3 = "https://picsum.photos/300/350";

let greeting = "";

if (todatehour >=1 && todatehour < 12 ) {
    greeting = greettext[0];
    cssStyle.color = "Orange";
} else if (todatehour >= 12 && todatehour < 19) {
    greeting = greettext[1];
    cssStyle.color = "#bd38c5";
} else {
    greeting = greettext[2];
    cssStyle.color = "black";
}
ReactDOM.render(<React.Fragment> <h1 className = "heading">My React Apps</h1> 
                                 {/* <p> Some of the popular names in human history:</p>
                                 <ol>
                                     <li>{mynames[0]}</li>
                                     <li>{mynames[1]}</li>
                                     <li>{mynames[2]}</li>
                                 </ol> */}
{/* <p> Today's Date is: {todate}</p>
<p> Time is: {totime}</p> */}
<div className = "img_div">
    <img src = {image1} alt = "LoremIpsumImages" />
    <img src = {image2} alt = "LoremIpsumImages" />
    <img src = {image3} alt = "LoremIpsumImages" />
</div> 
<div className = "div_greet">
<h1> Hello Visitor, <span style = {cssStyle}> {greeting} </span> </h1>
</div>
                </React.Fragment> ,
document.getElementById('root'));