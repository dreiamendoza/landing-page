import React from 'react'


const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Get in touch</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>Cebu, Philippines</dd>
                <dt>Email</dt>
                <dd>andimendozait@gmail.com</dd>
            </dl>
            <ul className="icons">
                <li>
                    <a
                        href="https://www.twitter.com/stilldrei"
                        className="icon fa-twitter alt"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <span className="label">Twitter</span></a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/stilldrei"
                        className="icon fa-facebook alt"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="label">Facebook</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/still_drei"
                        className="icon fa-instagram alt"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="label">Instagram</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.github.com/stilldrei"
                        className="icon fa-github alt"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="label">GitHub</span>
                    </a>
                </li>
                <li>   
                    <a
                        href="http://linkedin.com/in/andrea-veronica-mendoza-5869b6139"
                        className="icon fa-linkedin alt"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <span className="label">Linkedin</span></a>
                </li>
                <li>
                    <a 
                        href="https://open.spotify.com/user/andimendozait?si=2vibpeZESTCLfy-45VfgIQ"
                        className="icon fa-spotify alt"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="label">Spotify</span>
                    </a>
                </li>
            </ul>
        </section>
        <p className="copyright">&copy; by Andrea Veronica Mendoza. Credits to <a href="https://github.com/codebushi/gatsby-starter-stellar">CodeBushi</a>.</p>
    </footer>
)

export default Footer
