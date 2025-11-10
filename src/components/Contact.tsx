import React from 'react';
import '../assets/styles/Contact.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  const SOCIALS = {
    linkedin: 'https://www.linkedin.com/in/your-username', // change
    twitter: 'https://twitter.com/your-username',           // change
    email: 'kr31.pradeep@gmail.com',
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          

          <div className="contact_socials" aria-label="Social links">
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon /> <span>LinkedIn</span>
            </a>
            <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon /> <span>Twitter</span>
            </a>
            <a href={`mailto:${SOCIALS.email}`} aria-label="Email">
              <EmailIcon /> <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;