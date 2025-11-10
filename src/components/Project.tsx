import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/yvrhackathon1.png';
import mock08 from '../assets/images/uwbc1.png';
import mock09 from '../assets/images/iecbc1.png';
import mock10 from '../assets/images/prautomation1.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Portfolio</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://drive.google.com/file/d/1Ejpm8r3OWKzGnQdFBTI4fYCesPX3kLof/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="AI-Assisted PR Automation thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1Ejpm8r3OWKzGnQdFBTI4fYCesPX3kLof/view?usp=sharing" target="_blank" rel="noreferrer"><h2>AI‑Assisted PR Automation Platform</h2></a>
                <p>Developed an AI automation system that streamlines PR outreach and journalist engagement — message generation, journalist search, and campaign logging — reducing manual effort. Built with PHP, MySQL and Google Gemini API integrations.</p>
            </div>

            <div className="project">
                <a href="https://docs.google.com/presentation/d/1cqmkf9P56CSVoQEusX5-ig3mALDEI34jNcefM8bytBw/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="IECBC thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>IECBC — Immigrant Employment Council of B.C.</h2></a>
                <p>Built BI dashboards and automation pipelines using Flask, Python, MS Fabric and Power BI to streamline reporting and support operational decision-making across logistics and workforce planning initiatives.</p>
            </div>

            <div className="project">
                <a href="https://docs.google.com/presentation/d/1KppWWLk_QmlD9gPG8HsI0FCYZRZEHiPJCj0Pk4u5Gl8/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="United Way thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>United Way British Columbia</h2></a>
                <p>Developed deep neural networks to process real‑time inventory of sanitary supplies and a logistics model mapping demand and supply across BC. Optimized distribution across 20+ centers to enable timely deliveries.</p>
            </div>

            <div className="project">
                <a href="https://docs.google.com/presentation/d/1CCQ3ACGWrc8Vou3n9w4oPKunisuwdt4has-pukIhZ_Y/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="YVR thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/presentation/d/1CCQ3ACGWrc8Vou3n9w4oPKunisuwdt4has-pukIhZ_Y/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Vancouver International Airport</h2></a>
                <p>Implemented a real‑time custom computer vision pipeline on Raspberry Pi for passenger and baggage monitoring and cleanliness tracking, reducing manual overhead and improving operational efficiency.</p>
            </div>


        </div>
    </div>
    );
}

export default Project;