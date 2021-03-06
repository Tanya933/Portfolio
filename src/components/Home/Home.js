import React from 'react';
//import React ,{useEffect}from 'react'
import './Home.css'
//import pp from '../../Image/pp.jpeg'
//import home from '../../Image/home.jpg';
//import Aos from 'aos';
import 'aos/dist/aos.css'
import AnimatedCursor from 'react-very-cool-cursor';
import ReactRotatingText from 'react-rotating-text';
//var ReactRotatingText = require('react-rotating-text');
function Home() {

    // useEffect(() =>{
    //     Aos.init({duration:10000});
    // }, []);
    return (
        <div className="home" id="home" >
             <ReactRotatingText items={['Hi I am Tanya', 'Hey you look Awesome', 'I understand binary Language']} />
            {/* <ReactRotatingText items={['first', 'second', 'third']} /> */}
            <AnimatedCursor
      innerSize={20}
      outerSize={20}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
    {/* <ReactRotatingText items={['Hi I am Tanya', 'Hey you look Awesome', 'I understand binary Language']} />
    <ReactRotatingText items={['first', 'second', 'third']} /> */}
            {/* <div data-aos="fade-down" className="para"> */}
         
       
    {/* <img  className="homeimage" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80" 
    alt="img"/> */}
        </div>
    )
}

export default Home
