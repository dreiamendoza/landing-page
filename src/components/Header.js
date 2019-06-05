import React from 'react'

import logo from '../assets/images/dreilogo2.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Hi, I am Drei.</h1>
        <p>Software Engineer - Developer</p>
    </header>
)

export default Header
