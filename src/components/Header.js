import React from 'react'

import logo from '../assets/images/dreilogo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Andrea Veronica Mendoza</h1>
        <p>Software Engineer - Front-end Developer </p>
    </header>
)

export default Header
