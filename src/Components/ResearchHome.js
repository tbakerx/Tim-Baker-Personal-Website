import React, { Component } from 'react';

class ResearchHome extends Component {
  componentDidMount() {
    // Load Tableau embedding script
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
    script.type = 'module';
    document.head.appendChild(script);
  }

  render() {
    if (this.props.data) {
      var publication = this.props.data.publication;
      var institute = this.props.data.institute;
    }

    return (
      <div className="research-home">
        {/* Top Banner - Institute and Publication */}
        {publication && institute && (
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <p style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '10px'}}>
                <i className="fa fa-check-circle" style={{marginRight: '10px'}}></i>
                PUBLISHED in {publication.journal} ({publication.year})
              </p>
              <p style={{fontSize: '16px'}}>
                <i className="fa fa-institution" style={{marginRight: '8px'}}></i>
                <a href={institute.website} target="_blank" rel="noopener noreferrer"
                   style={{color: '#ffd700', textDecoration: 'none', fontWeight: 'bold'}}>
                  {institute.name} ({institute.abbreviation})
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px'}}>
          {/* Title Section */}
          <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <h1 style={{
              fontSize: '42px',
              fontWeight: 'bold',
              color: '#2c3e50',
              marginBottom: '20px',
              lineHeight: '1.3'
            }}>
              Identifying Research Hotspots and Trends in Psoriasis Literature: Autotuned Topic Modeling with Agent
            </h1>

            {publication && (
              <div style={{
                background: '#f8f9fa',
                padding: '15px 25px',
                borderRadius: '8px',
                display: 'inline-block',
                marginTop: '20px'
              }}>
                <p style={{fontSize: '14px', color: '#555', margin: 0}}>
                  <strong>Authors:</strong> {publication.authors}
                </p>
              </div>
            )}
          </div>

          {/* Importance Section */}
          <div style={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            padding: '40px',
            borderRadius: '15px',
            marginBottom: '50px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '32px',
              color: '#2c3e50',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              <i className="fa fa-star" style={{marginRight: '10px', color: '#667eea'}}></i>
              IMPORTANCE
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#34495e',
              textAlign: 'justify'
            }}>
              The comprehensive data on psoriasis research are numerous and complex, making it difficult to retrieve and classify manually. The ability to quickly mine literature based on various fine topics using deep learning natural language processing technology to assess research topics and trends in the field of Psoriasis disease will have a significant impact on doctors' research and patients' health education.
            </p>
          </div>

          {/* Interactive Visualization Section */}
          <div style={{marginBottom: '50px'}}>
            <h2 style={{
              fontSize: '32px',
              color: '#2c3e50',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              <i className="fa fa-bar-chart" style={{marginRight: '10px', color: '#667eea'}}></i>
              Interactive Neural Topic Model Visualization
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#34495e',
              textAlign: 'center',
              marginBottom: '30px',
              maxWidth: '900px',
              margin: '0 auto 30px'
            }}>
              The neural topic model based on deep learning and interactive web tools can effectively identify the research hotspots and trends in psoriasis literature, which can assist clinicians and patients in conveniently retrieving and comparing pertinent topics and research accomplishments of various years.
            </p>

            {/* Tableau Viz Embedding */}
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              marginTop: '30px'
            }}>
              <tableau-viz
                id="tableauViz"
                src="https://public.tableau.com/views/DistributionmapofPsoriasisResearchTopics/ARoutineTherapy_1"
                device="pc"
                toolbar="bottom"
                hide-tabs="false"
                width="100%"
                height="800px">
              </tableau-viz>
            </div>
          </div>

          {/* Institute Attribution Section */}
          {institute && (
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '40px',
              borderRadius: '15px',
              color: 'white',
              textAlign: 'center',
              marginTop: '50px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: 'white'
              }}>
                <i className="fa fa-institution" style={{marginRight: '10px'}}></i>
                Research Institute
              </h3>
              <p style={{fontSize: '22px', fontWeight: 'bold', marginBottom: '15px'}}>
                {institute.name}
              </p>
              <p style={{fontSize: '18px', marginBottom: '20px', opacity: '0.95'}}>
                Dedicated to advancing the intersection of medical philosophy and artificial intelligence
              </p>
              <a href={institute.website}
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   background: 'white',
                   color: '#667eea',
                   padding: '12px 30px',
                   borderRadius: '25px',
                   textDecoration: 'none',
                   fontWeight: 'bold',
                   fontSize: '16px',
                   transition: 'transform 0.3s ease',
                   boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                 }}
                 onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                 onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <i className="fa fa-globe" style={{marginRight: '8px'}}></i>
                Visit Institute Website
              </a>
            </div>
          )}

          {/* Publication Citation */}
          {publication && (
            <div style={{
              background: '#f8f9fa',
              padding: '30px',
              borderRadius: '10px',
              marginTop: '40px',
              borderLeft: '5px solid #667eea'
            }}>
              <h3 style={{
                fontSize: '20px',
                color: '#2c3e50',
                marginBottom: '15px'
              }}>
                <i className="fa fa-quote-left" style={{marginRight: '10px', color: '#667eea'}}></i>
                Citation
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#555',
                fontStyle: 'italic',
                lineHeight: '1.6'
              }}>
                {publication.citation}
              </p>
            </div>
          )}

          {/* Footer */}
          <div style={{
            textAlign: 'center',
            marginTop: '60px',
            paddingTop: '30px',
            borderTop: '2px solid #e0e0e0'
          }}>
            <p style={{fontSize: '14px', color: '#7f8c8d', marginBottom: '10px'}}>
              © 2025 Institute of Medical Philosophy and Future AI (IMPFAI)
            </p>
            <p style={{fontSize: '14px', color: '#7f8c8d'}}>
              Advancing Medical Research through Artificial Intelligence
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResearchHome;
