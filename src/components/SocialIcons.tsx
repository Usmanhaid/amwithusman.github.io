import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SiFiverr, SiUpwork } from "react-icons/si";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">

        {/* GitHub */}
        <span>
          <a href="https://github.com/Usmanhaid" target="_blank">
            <FaGithub />
          </a>
        </span>

        {/* LinkedIn */}
        <span>
          <a href="https://www.linkedin.com/in/usman-haider-30a54a157/" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>

        {/* Fiverr (IMPORTANT 💰) */}
        <span>
          <a href="https://www.fiverr.com/usmanbutt578?public_mode=true" target="_blank">
            <SiFiverr />
          </a>
        </span>

        {/* Upwork */}
        <span>
          <a href="https://www.upwork.com/freelancers/~014f79206f2c05a6f4?viewMode=1" target="_blank">
            <SiUpwork />
          </a>
        </span>

      </div>

      {/* Resume Button */}
      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;