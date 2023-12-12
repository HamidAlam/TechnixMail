import React from 'react';
import './Mailagent.css';

const Mailagent = () => {
  const selectedOption = "Overview"; 
  return (<>
   <nav className="navbar">
        <div className="navbar-item">Overview</div>
        <div className="navbar-item">Domains</div>
        <div className="navbar-item">Set up</div>
        <div className="navbar-item">Processed Emails</div>
        <div className="navbar-item">Templates</div>
      </nav>
    <div className="page2">
     
      <img  className="img2" src="https://static.vecteezy.com/system/resources/previews/000/378/595/non_2x/template-vector-icon.jpg" 
      alt="Template" />
      <p id='pin'>No Templates yet. Add new templates to view them here.</p>
      <button className="but2">Add Templates</button>
    </div>
    </>
  );
};

export default Mailagent;