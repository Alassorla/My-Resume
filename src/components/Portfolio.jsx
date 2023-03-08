import React from 'react'
import "./Portfolio.css"

function Portfolio() {
  return (
    <section className="section-passion">
        <a name="portfolio"/>
        <div className="topic">
            <p className="light-topic">
                My
            </p>
            <p className="bold-topic">
                Portfolio
            </p>
        </div>
        <div className="passion-box">
            <div className="passion-box1">
                <img className="passion-img" src="" alt="" />
                <h2 className="passion">Front-End Developer</h2>
                <p className="skill">...</p>
            </div>
            <div className="passion-box2">
                <img className="passion-img" src="" alt="" />
                <h2 className="passion">Graphic Design</h2>
                <p className="skill">...</p>
            </div>
            <div className="passion-box3">
                <img className="passion-img" src="" alt="" />
                <h2 className="passion">Drawing</h2>
                <p className="skill">...</p>
            </div>
        </div>
    </section>
  )
}

export default Portfolio