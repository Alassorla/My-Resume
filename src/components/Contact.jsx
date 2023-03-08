import React from 'react'
import "./Contact.css"
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import imgBottom from "../img/BT.png"



function Contact() {
  return (
    <section className="section-contact">
        <div className="topic">
            <p className="light-topic">
                Contact
            </p>
            <p className="bold-topic">
                Me
            </p>
            
        </div>
        <div className="contact">
            <div className="contact-box">
                <p className="icon"><FaGithub /></p>
                <a href="https://github.com/Alassorla" target="_blank">Github</a>
            </div>
            <div className="contact-box">
                <p className="icon"><FaInstagram /></p>
                <a href="https://www.instagram.com/" target="_blank">Instagram</a>
            </div>
            <div className="contact-box">
                <p className="icon"><MdMailOutline /></p>
                <a href="" target="_blank">Email</a>
            </div>
            <div className="contact-box">
                <p className="icon"><BsTelephone /></p>
                <a href="" target="_blank">Tel</a>
            </div>
        </div>
            <div className="img-bottom">
                <img src={imgBottom} alt="imgBottom" />
            </div>
    </section>
  )
}

export default Contact