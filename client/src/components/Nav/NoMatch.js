import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const NoMatch = () => {
  return (
   
    <div className="center_wrapper centerW">
    <h1 className='fourOhFour'>  
      404!
      </h1>
     <div className='wrapper'>
      <div className="four_bottom-content-section-button" data-magellan data-threshold="0">
             <Link to ="/" href="#main-content-section"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg></Link>
      </div>
      </div>
    
  
      
    </div>
     
      
    
  );
};

export default NoMatch;