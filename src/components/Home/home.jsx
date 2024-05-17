import React from 'react';
import "./home.css";
import CTA from "./CTA"
import Dagipic from "../../assets/dagi.jpg"

const Home=()=>{
  return (
    <header>
      <div className="container header_container">
       <div className='headertxt'>
         <h5 > Welcome I'm</h5>
          <h1>  <strong>Dagmawi</strong> Sisay</h1>
          <h4> A Graphics Designer: Brand and Logo Designer </h4>
          <p className="text-light">
          "Welcome to my creative world, where passion meets innovation. 
          Explore my diverse portfolio and experience the artistry in every detail.
           Let's collaborate and bring your ideas to life with a touch of visual magic."
          </p>
          <CTA />
       </div>
          <div>
             <img  className='mamePic' src={Dagipic} alt="profilePic" />
          </div>

      </div>

    </header>
  
  );
}
export default Home