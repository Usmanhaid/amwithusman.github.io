import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <p className="para">
          I am an Identity and Security Engineer with over 7 years of experience
          working with US-based clients in managed service provider (MSSP)
          environments. I specialize in Identity and Access Management (IAM),
          focusing on platforms like Okta, Microsoft Entra ID, and Active Directory.
        </p>

        <p className="para">
          I have hands-on experience implementing secure authentication systems
          including Single Sign-On (SSO), Multi-Factor Authentication (MFA),
          identity lifecycle management, and access control policies for real-world
          enterprise environments.
        </p>

        <p className="para">
          As a freelancer, I maintain a strong 4.8 rating on Fiverr and have
          successfully delivered multiple IAM and security-related projects within
          a short span of time, helping clients achieve secure and scalable identity
          solutions.
        </p>

        <p className="para">
          Alongside consulting, I provide hands-on training designed to help
          students and IT professionals build real-world IAM skills, covering Okta,
          SC-300, and modern cloud and endpoint security concepts.
        </p>
      </div>
    </div>
  );
};

export default About;