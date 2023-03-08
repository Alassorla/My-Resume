import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
        <a name="about"/>
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <a href='#'>MY RESUME</a>
                </div>
                <ul className='menu'>
                    <li className='menu-link'>
                        <a href='#about'>ABOUT</a>
                    </li>
                    <li className='menu-link'>
                        <a href='#passion'>PASSIONS</a>
                    </li>
                    <li className='menu-link'>
                        <a href='#portfolio'>PORTFOLIO</a>
                    </li>
                    <button className='button-header' type="button">CONTACT ME</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header