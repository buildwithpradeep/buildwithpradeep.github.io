import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faServer, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

/* certification images — full certificate images (used in modal) */
import certPMP from "../assets/images/pmp.png";
import certPSM from "../assets/images/psm1.png";
import certAWS from "../assets/images/aws.png";
import certPowerBI from "../assets/images/powerbi.png";

/* badge images (small badges to display above label) 
   Replace these paths with your actual badge filenames if different */
import badgePMP from "../assets/images/pmpbadge.png";
import badgePSM from "../assets/images/psm1badge.png";
import badgeAWS from "../assets/images/awsbadge.png";
import badgePowerBI from "../assets/images/powerbibadge.png";

const labelsProduct = [
  "Product Strategy",
  "Agile / Scrum",
  "PRD & Roadmapping",
  "User Research",
  "Wireframing (Figma)",
  "A/B Testing",
  "Data-driven Decisioning",
  "Power BI",
  "Mixpanel",
  "JIRA",
  "Miro",
];

const labelsPlatform = [
  "Python",
  "Flask",
  "Docker",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Azure",
  "CI/CD",
  "API Integrations",
  "RBAC Systems",
  "GDPR Compliance",
];

const labelsAI = [
  "OpenAI API",
  "LangChain",
  "Hugging Face",
  "LLM Automation",
  "PyTorch",
  "Pandas",
  "Scikit-learn",
  "Power BI",
  "Streamlit",
  "Flask API",
];

function Expertise() {
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  // lock body scroll while modal is open
  useEffect(() => {
    if (modalSrc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalSrc]);

  const certs = [
    { id: "pmp", src: certPMP, badge: badgePMP, label: "Project Management Professional (PMP)®" },
    { id: "psm", src: certPSM, badge: badgePSM, label: "Scrum Master - Scrum Alliance" },
    { id: "aws", src: certAWS, badge: badgeAWS, label: "AWS Data Engineer I" },
    { id: "powerbi", src: certPowerBI, badge: badgePowerBI, label: "Microsoft Power BI Data Analyst" },
  ];

  const openModal = (src: string) => setModalSrc(src);
  const closeModal = () => setModalSrc(null);

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <p className="subtitle">
          Blending product strategy, data intelligence, and first principles thinking to deliver products that are loved by users.
        </p>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
            <div className="skill-body">
              <h3>Product Strategy & Delivery</h3>
              <p>
                Skilled at blending user empathy with data. I've previously built successful SaaS products across Education, Marketing, E-commerce space and delivered solutions used by thousands of people across North America, Europe, APAC, and Oceania.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Focus areas:</span>
                {labelsProduct.map((label, index) => (
                  <Chip key={index} className='chip' label={label} />
                ))}
              </div>
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <div className="skill-body">
              <h3>Data Pipelines and Automation</h3>
              <p>
                Experienced in designing scalable data pipelines and building business workflows that delight users. Bridging business vision with technical execution is my forte.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsPlatform.map((label, index) => (
                  <Chip key={index} className='chip' label={label} />
                ))}
              </div>
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faRobot} size="3x" />
            <div className="skill-body">
              <h3>AI/ML Solutions & Analytics </h3>
              <p>
                First hand experience building intelligent user experiences. Previously I've implemented NLP, CV and RAG solutions to deliver business value. Skilled in training RNN, CNN and Transformer based custom models for various use-cases. 
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tools & Frameworks:</span>
                {labelsAI.map((label, index) => (
                  <Chip key={index} className='chip' label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications section with badges + 'Show certificate' buttons */}
        <div className="certifications">
          <h2 className="cert-heading">Certifications</h2>
          

          <div className="cert-grid">
            {certs.map((c) => (
              <div className="cert-item" key={c.id}>
                {/* badge image displayed above label — wrapped for size control */}
                <div className="cert-badge-wrap">
                  <img src={c.badge} alt={`${c.label} badge`} className="cert-badge" />
                </div>

                <div className="cert-label">{c.label}</div>

                <button
                  className="cert-button"
                  onClick={() => openModal(c.src)}
                  aria-label={`Show ${c.label} certificate`}
                >
                  Show certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalSrc && (
        <div className="cert-modal" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="cert-modal-inner" onClick={(e) => e.stopPropagation()} tabIndex={-1}>
            <button className="cert-close" onClick={closeModal} aria-label="Close">×</button>
            <img src={modalSrc} alt="Certificate enlarged" className="cert-modal-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Expertise;