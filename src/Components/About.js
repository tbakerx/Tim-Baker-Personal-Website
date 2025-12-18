import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var publication = this.props.data.publication;
      var institute = this.props.data.institute;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Psoriasis Research" />
         </div>
         <div className="nine columns main-col">
            <h2>About This Research</h2>

            <p>{bio}</p>

            {institute && (
              <div className="institute-attribution" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '25px',
                borderRadius: '10px',
                marginTop: '30px',
                marginBottom: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                color: 'white'
              }}>
                <h3 style={{color: 'white', marginBottom: '15px', fontSize: '24px'}}>
                  <i className="fa fa-institution"></i> Research Institute
                </h3>
                <p style={{fontSize: '18px', marginBottom: '10px', fontWeight: 'bold'}}>
                  {institute.name} ({institute.abbreviation})
                </p>
                <p style={{fontSize: '16px', marginBottom: '15px'}}>
                  <i className="fa fa-globe"></i> Visit: <a href={institute.website} target="_blank" rel="noopener noreferrer"
                    style={{color: '#ffd700', textDecoration: 'underline', fontWeight: 'bold'}}>
                    {institute.website}
                  </a>
                </p>
                <p style={{fontSize: '14px', fontStyle: 'italic', opacity: '0.9'}}>
                  This research is a proud achievement of {institute.abbreviation}, dedicated to advancing the intersection of medical philosophy and artificial intelligence.
                </p>
              </div>
            )}

            {publication && (
              <div className="publication-info" style={{
                background: '#f8f9fa',
                padding: '20px',
                borderLeft: '5px solid #667eea',
                marginTop: '20px',
                marginBottom: '20px',
                borderRadius: '5px'
              }}>
                <h3 style={{color: '#333', marginBottom: '15px'}}>
                  <i className="fa fa-file-text"></i> Published Research
                </h3>
                <p style={{fontSize: '16px', fontWeight: 'bold', color: '#667eea', marginBottom: '10px'}}>
                  {publication.title}
                </p>
                <p style={{fontSize: '14px', color: '#555', marginBottom: '5px'}}>
                  <strong>Authors:</strong> {publication.authors}
                </p>
                <p style={{fontSize: '14px', color: '#555', marginBottom: '5px'}}>
                  <strong>Journal:</strong> {publication.journal} ({publication.year})
                </p>
                <p style={{fontSize: '12px', color: '#666', fontStyle: 'italic', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #ddd'}}>
                  {publication.citation}
                </p>
              </div>
            )}

            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Information</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city}
                     {state && <span><br />{state}, {zip}</span>}
                   </span><br />
						   {phone && <span>{phone}<br /></span>}
                     <span><a href={`mailto:${email}`}>{email}</a></span>
					   </p>
               </div>
               {resumeDownload && (
                 <div className="columns download">
                    <p>
                       <a href={resumeDownload} className="button" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>Download Resume</a>
                    </p>
                 </div>
               )}
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
