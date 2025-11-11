import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TypeAnimation } from 'react-type-animation';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/profilepicture.png'; // added

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" /> {/* changed to use local asset */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/buildwithpradeep" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pradeep-k-sah-6413698b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Pradeep K Sah</h1>

          <p className="role">
            <TypeAnimation
              sequence={[
                'Technical Product Builder', 2000,
                'Skilled in leveraging NLP, CV and RAG Solutions', 2000,
                '6+ years exp delivering seamless user experiences in B2B SaaS', 2000,
                'Past @VMock, @GlobalUniversity Systems, @Wizikey', 2000,
                'Scroll to read more', 2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/buildwithpradeep" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pradeep-k-sah-6413698b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;