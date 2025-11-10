import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        {/* <a href="#" target="_blank" rel="noreferrer"><GitHubIcon/></a> */}
        <a href="https://www.linkedin.com/in/pradeep-k-sah/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Built by Pradeep Kumar on a sunny day in Jericho Beach, Kitsilano with 💜</p>
    </footer>
  );
}

export default Footer;