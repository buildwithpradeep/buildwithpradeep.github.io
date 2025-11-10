import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/Timeline.scss";

/* Replace these imports with the actual image paths you have in src/assets/images */
import pcGaloreLogo from "../assets/images/pcgalore.png";
import liberTechLogo from "../assets/images/libertech.png";
import gusLogo from "../assets/images/gus.png";
import wizikeyLogo from "../assets/images/wizikey.png";
import vmockLogo from "../assets/images/vmock.png";

/* Example screenshots (place in src/assets/images/screenshots/) */
import pc1 from "../assets/images/pcg1.png";
import pc2 from "../assets/images/vmock.png";
import liber1 from "../assets/images/vmock.png";
import gus1 from "../assets/images/gus1.png";
import wiz1 from "../assets/images/wizikey1.png";
import vmock1 from "../assets/images/vmock1.png";
import vmock2 from "../assets/images/vmock2.png";
import vmock3 from "../assets/images/vmock3.png";
import vmock4 from "../assets/images/vmock4.png";
import vmock5 from "../assets/images/vmock5.png";


type Experience = {
  id: string;
  company: string;
  title: string;
  date: string;
  location?: string;
  logo: string;
  companyUrl?: string;
  description: string;
  screenshots?: string[]; // thumbnail / full image paths
};

const EXPERIENCES: Experience[] = [
  {
    id: "pc",
    company: "PC Galore",
    title: "Product Consultant",
    date: "Jan 2025 – Present",
    location: "Vancouver, British Columbia",
    logo: pcGaloreLogo,
    companyUrl: "https://pcgalore.example.com",
    description:
      "PC Galore is a Vancouver-based business specializing in vintage computer equipments and electronics. At PC Galore, I overhauled and modernized the e‑commerce experience. Automated backend workflows and introduced subscription revenue streams for business. Helped business to expand vintage product offerings to movie and TV production houses and increase rental revenue",
    screenshots: [pc1],
  },
  {
    id: "liber",
    company: "LiberTech",
    title: "Product Management Intern (Analytics)",
    date: "Aug 2024 – Dec 2024",
    location: "Richmond, British Columbia",
    logo: liberTechLogo,
    companyUrl: "https://libertech.example.com",
    description:
      "LiberTech is technology-based startup company founded in Vancouver BC in 2018, focusing on delivering technologies that enable communities, industries and buildings to reduce their carbon footprint and further their sustainability, all while creating a proven economic benefit. LiberTech provides battery operation and management services and a cloud-based tool called BatteryMAP. At Libertech, I built analytical dashboards in PowerBI. Defined requirements and led system roll-out in new housing units.",
    screenshots: [],
  },
  {
    id: "gus",
    company: "GUS Education India",
    title: "Product Manager",
    date: "2021 – 2022",
    location: "Remote",
    logo: gusLogo,
    companyUrl: "https://www.globaluniversitysystems.com/",
    description:
      "Global University Systems (GUS) is a large, privately-owned international education group network including over 30 institutions, with more than 122,000 students from over 175 countries. Headquartered in Amsterdam. At GUS, I owned backlog and technical requirements for a multi‑feature SaaS product. I managed learning management solutions portfoliofor universities across UK, Europe and Canada.",
    screenshots: [gus1],
  },
  {
    id: "wiz",
    company: "Wizikey",
    title: "Product Manager",
    date: "Jun 2021 – Nov 2021",
    location: "Delhi NCR, India",
    logo: wizikeyLogo,
    companyUrl: "https://www.wizikey.com",
    description:
      "Wizikey saves time by bringing relevant brand mentions from news, blogs, podcasts and other mediums in one place. It provides insights to build better awareness. \n I led market research on early stage startups, synthesized their pain-points and led feature initiatives that improved product stickiness by 30%.",
    screenshots: [wiz1],
  },
  {
    id: "vmock",
    company: "VMock Inc",
    title: "Product Manager | Product Analyst | Business Analyst",
    date: "2016 – 2021",
    location: "Delhi NCR, India",
    logo: vmockLogo,
    companyUrl: "https://www.vmock.com",
    description:
      "VMock is a career acceleration and student readiness platform used by top universities including Harvard, Stanford, LBS, Oxford, MIT and many others. I worked at VMock for 5 years and built innovative Natural Language processing (NLP) and computer vision (CV) solutions while growing VMock portfolio of products including VMock Smart Resume, VMock Career Fit, VMock Aspire, VMock Elevator Pitch and VMock Smart Career Management Center to $6M+ annual recurring revenue.",
    screenshots: [vmock4,vmock5],
  },
];

export default function Timeline(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      containerRef.current?.classList.add("reduced-motion");
      return;
    }
    const rows = Array.from(document.querySelectorAll(".tl-row"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalVisible(false);
        setModalSrc(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openImage = (src: string) => {
    setModalSrc(src);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalSrc(null);
  };

  return (
    <section id="history" className="timeline-wrap" ref={containerRef}>
      <h2 className="tl-heading">Career History</h2>

      <div className="tl-list">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="tl-row" aria-labelledby={`tl-${exp.id}-title`}>
            <div className="tl-avatar">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tl-logo-link"
                  aria-label={exp.company}
                >
                  <img src={exp.logo} alt={`${exp.company} logo`} className="tl-logo-rect" />
                </a>
              ) : (
                <div className="tl-logo-wrap">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="tl-logo-rect" />
                </div>
              )}

              {/* date now sits beneath the logo */}
              <div className="tl-date-avatar" aria-hidden>
                {exp.date}
              </div>
            </div>

            <article className="tl-card" role="article" aria-labelledby={`tl-${exp.id}-title`}>
              <div className="tl-card-header">
                <h4 className="tl-company">{exp.company}</h4>
                {exp.location ? <span className="tl-location">{exp.location}</span> : null}
              </div>

              <h3 id={`tl-${exp.id}-title`} className="tl-title">{exp.title}</h3>

              <p className="tl-desc">{exp.description}</p>

              {exp.screenshots && exp.screenshots.length > 0 && (
                <div className="tl-thumbs" aria-hidden={false}>
                  {exp.screenshots.map((src, i) => (
                    <button
                      key={i}
                      className="thumb-btn"
                      onClick={() => openImage(src)}
                      aria-label={`Open screenshot ${i + 1} for ${exp.company}`}
                    >
                      <img src={src} alt={`${exp.company} screenshot ${i + 1}`} className="thumb-img" />
                    </button>
                  ))}
                </div>
              )}
            </article>
          </div>
        ))}
      </div>

      {modalVisible && modalSrc && (
        <div className="tl-modal" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="tl-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="tl-modal-close" onClick={closeModal} aria-label="Close">×</button>
            <img src={modalSrc} alt="Enlarged screenshot" className="tl-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
}