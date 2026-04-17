import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7"/>
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7"/>
            </svg>
          </div>

          {/* IAM IMPLEMENTATION */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6"/>
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6"/>
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>IAM IMPLEMENTATION</h3>

              <h4>Description</h4>
              <p>
                I design and implement secure Identity and Access Management (IAM)
                solutions using Okta, Microsoft Entra ID, and Active Directory.
                This includes Single Sign-On (SSO), Multi-Factor Authentication (MFA),
                and identity lifecycle management for enterprise environments.
              </p>

              <h5>Technologies</h5>
              <div className="what-content-flex">
                <div className="what-tags">Okta</div>
                <div className="what-tags">Microsoft Entra ID</div>
                <div className="what-tags">Active Directory</div>
                <div className="what-tags">SSO (SAML/OIDC)</div>
                <div className="what-tags">MFA</div>
                <div className="what-tags">Lifecycle Management</div>
                <div className="what-tags">Conditional Access</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* TRAINING & CONSULTING */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6"/>
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>TRAINING & CONSULTING</h3>

              <h4>Description</h4>
              <p>
                I provide hands-on training and consulting services in Identity
                and Access Management (IAM), helping students and professionals
                gain real-world experience. Training includes Okta, SC-300,
                Microsoft 365, Intune, and endpoint security concepts.
              </p>

              <h5>Focus Areas</h5>
              <div className="what-content-flex">
                <div className="what-tags">Okta Training</div>
                <div className="what-tags">SC-300</div>
                <div className="what-tags">Microsoft 365</div>
                <div className="what-tags">Intune</div>
                <div className="what-tags">Endpoint Security</div>
                <div className="what-tags">IAM Consulting</div>
                <div className="what-tags">Real-world Labs</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}