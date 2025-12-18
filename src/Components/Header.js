import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var jobDescription = this.props.data.jobDescription;
      var employer = this.props.data.employer;
      var city = this.props.data.address.city;
      var publication = this.props.data.publication;
      var institute = this.props.data.institute;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        {publication && (
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '15px 20px',
            textAlign: 'center',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            position: 'relative',
            zIndex: 1000
          }}>
            <i className="fa fa-check-circle" style={{marginRight: '10px'}}></i>
            PUBLISHED in {publication.journal} ({publication.year})
            <span style={{margin: '0 15px'}}>|</span>
            <i className="fa fa-institution" style={{marginRight: '8px'}}></i>
            {institute && institute.abbreviation}
            <span style={{margin: '0 15px'}}>|</span>
            <a href={institute && institute.website} target="_blank" rel="noopener noreferrer"
               style={{color: '#ffd700', textDecoration: 'underline'}}>
              Visit Institute
            </a>
          </div>
        )}

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Research
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Resources
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Impact
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>
              <span>{occupation}</span>
              <br />
              {description}
              <span>{employer}</span>
              <br />
              We <span>{jobDescription}</span>.
            </h3>
            {publication && (
              <div style={{
                marginTop: '30px',
                padding: '20px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)'
              }}>
                <p style={{fontSize: '18px', marginBottom: '10px'}}>
                  <i className="fa fa-graduation-cap" style={{marginRight: '10px'}}></i>
                  <strong>Published Research:</strong>
                </p>
                <p style={{fontSize: '16px', fontStyle: 'italic'}}>
                  "{publication.title}"
                </p>
                <p style={{fontSize: '14px', marginTop: '10px'}}>
                  {publication.authors}
                </p>
              </div>
            )}
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
