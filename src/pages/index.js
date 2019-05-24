import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

import pic01 from '../assets/images/me.jpg'
import Resume from '../assets/drei_resume.pdf';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Andrea Mendoza" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About</h2>
                </header>
                <p>To me, learning is as essential as eating your breakfast.</p>
                <p>
                  I am a developer with 2 years of industry experience. I have worked
                  with people in my local country and in the US. Currently, my current
                  focus is front-end web development. I also do development of web
                  APIs. My ultimate career goal is to become a full-stack developer or
                  a technical manager. I love creating things. I love writing. With
                  that, to exercise my technical and analytical abilities I entered
                  the world of software development.
                </p>
                <p>
                  The best thing about being in IT for me is seeing your finished
                  product being utilized by people and making lives for everyone
                  easier. Not to mention working together with smart and creative
                  individuals to achieve a common goal. It is a very fulfilling
                  feeling to achieve something together with teamwork.
                </p>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                  <h3><a 
                    href="https://stilldrei.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >stillDREI</a></h3>
                <p>Blog/journal to document experiences in IT and learnings.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>G***** (WIP - upcoming)</h3>
                <p>Upcoming project in development phase.</p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Skillset</h2>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-laptop"></span>
                <strong>Languages &amp; Scripts</strong><p>JavaScript | PHP | Python | Java | C# | HTML &amp; CSS | SASS &amp; SCSS </p>
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>Frameworks</strong><p> AngularJS &amp; Angular | VueJS | ReactJS | Python-Django | J2EE / Spring + Hibernate </p>
              </li>
              <li className="style3">
                <span className="icon fa-folder-o"></span>
                <strong>Software Packages</strong><p> SuiteCRM | SugarCRM </p>
              </li>
              <li className="style4">         
                <span className="icon fa-code-fork"></span>
                <strong>Tools</strong> GIT, BitBucket, GitLab, Github, Microsoft TFS
              </li>
            </ul>
            <p>
              Right now I am focusing on working with corporate companies. When I get
              the adequate skills to do collaboration work internationally, I will settle
              for remote work. I plan to attend tech conferences locally, meet new like-minded people from tech,
              acquire best practices and standards in the corporate companies I am currently in.
            </p>
            <footer className="major">
              <ul className="actions">
                <li><a className="button" href={Resume} target="_blank" rel="noopener noreferrer">Click here to view my resume.</a></li>
              </ul>
            </footer>
            </section>
        </div>

      </Layout>
    )
  }
}

export default Index
