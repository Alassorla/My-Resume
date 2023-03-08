import React from 'react'
import "./Banner.css"
import MyPic from "../img/01.jpg"

function Banner() {
  return (
    <section className="section-banner">
        <div className="container-text">
            <div className="greeting-text">
               <p>Hi !</p>
            </div>
            <div className="introduce">
               <h1> I'm Alassorla Fuchuen <br/> a Software Developer </h1> 
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate vitae provident tempora vero pariatur assumenda beatae incidunt dignissimos alias ipsam molestias sint laudantium adipisci repellendus, totam libero dolorum eveniet?</p>
            </div>
        </div>
        <div className="container-img">
            <img src={MyPic} alt=""/>
        </div>
    </section>
  )
}

export default Banner