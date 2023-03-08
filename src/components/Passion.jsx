import React from 'react'
import "./Passion.css"
import Frontend from "../img/data.png"
import Drawing from "../img/drawing.png"
import GraphicDesigner from "../img/graphic-designer.png"

function Passion() {


  return (
    <section className="section-passion"> 
        <a name="passion"/>
        <div className="topic">
            <p className="light-topic">
                Additional
            </p>
            <p className="bold-topic">
                Passions
            </p>
        </div>
        <div className="passion-box">
            <div className="passion-box1">
                <img className="passion-img" src={Frontend} alt="" />
                <h2 className="passion">Front-End Developer</h2>
                <p className="skill">(้HTML, CSS)</p>
            </div>
            <div className="passion-box2">
                <img className="passion-img" src={GraphicDesigner} alt="" />
                <h2 className="passion">Graphic Design</h2>
                <p className="skill">(Adobe illustrator, Adobe photoshop, <br/> Adobe After Effects)</p>
            </div>
            <div className="passion-box3">
                <img className="passion-img" src={Drawing} alt="" />
                <h2 className="passion">Drawing</h2>
                <p className="skill">(Procreate, 2D Animation)</p>
            </div>
        </div>
        
    </section>

  )
}

export default Passion