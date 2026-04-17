import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const workItems = [
  {
    number: "01",
    title: "Identity & Access Management",
    category: "Okta | Entra ID | Active Directory",
    tools:
      "Okta IAM, Azure AD (Entra ID), Active Directory, SSO (SAML/OIDC), MFA, Conditional Access, User Provisioning",
    image: "/images/okta.webp",
  },
  {
    number: "02",
    title: "MSSP Client Management",
    category: "7+ Years US Client Experience",
    tools:
      "Multi-client support, Identity Security, Endpoint Protection, Authentication Troubleshooting, Remote Administration",
    image: "/images/security.webp",
  },
  {
    number: "03",
    title: "Endpoint Security & EDR",
    category: "SentinelOne | Cisco AMP",
    tools:
      "EDR Monitoring, Threat Detection, Incident Response, Endpoint Isolation, Security Alerts Investigation",
    image: "/images/security.webp",
  },
  {
    number: "04",
    title: "Microsoft 365 & Intune",
    category: "Cloud Identity & Device Management",
    tools:
      "Microsoft 365, Exchange Online, Intune, Device Compliance, Conditional Access, Endpoint Policies",
    image: "/images/m365.webp",
  },
  {
    number: "05",
    title: "IAM Training & Consulting",
    category: "Okta | SC-300 | Real-world Labs",
    tools:
      "Okta Training, SC-300 Preparation, IAM Labs, Identity Troubleshooting, Real-world Implementation Guidance",
    image: "/images/cloud.webp",
  },
  {
    number: "06",
    title: "Freelance IAM Consulting",
    category: "Fiverr | Upwork",
    tools:
      "Okta SSO Integration, MFA Setup, AD Integration, Identity Troubleshooting, Client Consulting (4.8 Rating)",
    image: "/images/azure.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();
    window.addEventListener("resize", setTranslateX);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      window.removeEventListener("resize", setTranslateX);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        
        {/* TITLE */}
        <h2>
          Enterprise <span>Experience</span>
        </h2>

        {/* INTRO */}
        <p style={{ maxWidth: "600px", marginBottom: "30px" }}>
          7+ years of experience working in MSSP environments with US-based
          clients, specializing in Identity & Access Management (IAM),
          endpoint security, and cloud identity solutions including Okta,
          Microsoft Entra ID, and Active Directory.
        </p>

        <div className="work-flex">
          {workItems.map((item) => (
            <div className="work-box" key={item.number}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{item.number}</h3>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>

                <h4>Tools & Expertise</h4>
                <p>{item.tools}</p>
              </div>

              <WorkImage image={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;