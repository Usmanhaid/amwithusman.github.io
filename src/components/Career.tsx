import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Experience 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Support Engineer (MSSP)</h4>
                <h5>USA Clients (Managed Services)</h5>
              </div>
              <h3>2018 - Present</h3>
            </div>
            <p>
              Providing IT support and system administration for US-based clients
              in a Managed Service Provider (MSSP) environment. Managing Active
              Directory, Microsoft 365, endpoint security, and troubleshooting
              enterprise infrastructure issues.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance IT Consultant</h4>
                <h5>Fiverr & Upwork</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Delivering freelance IT services with a 4.8 rating on Fiverr.
              Helping clients with identity management, Microsoft 365 setup,
              and system troubleshooting. Successfully completed multiple
              projects with high client satisfaction.
            </p>
          </div>

          {/* Experience 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Identity & Security Specialist</h4>
                <h5>IAM | Okta | Entra ID</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Focused on Identity and Access Management (IAM), including Okta,
              Microsoft Entra ID, and security solutions. Working towards
              certifications like SC-300 and building expertise in SSO, MFA,
              and identity lifecycle management.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;