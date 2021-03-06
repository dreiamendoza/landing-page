import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['about', 'projects', 'skillset', 'hobbies'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <p>About</p>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <p>Projects</p>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <p>Skillset</p>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
