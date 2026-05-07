import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    number: "01",
    title: "Portfolio Website",
    category: "Frontend Development",
    tools: "React, TypeScript, Vite, CSS",
    type: "video",
  },

  {
    number: "02",
    title: "EduScope",
    category: "AI/ML Dashboard Project",
    tools: "React, TypeScript, AI/ML Analytics",
    image: "/images/project1.webp",
    type: "image",
  },

  {
    number: "03",
    title: "PCB Design Workshop",
    category: "Electronics Design",
    tools: "PCB Design, Circuit Design",
    image: "/images/project2.webp",
    type: "image",
  },

  {
    number: "04",
    title: "Clean Energy Presentation",
    category: "Research & Presentation",
    tools: "PowerPoint, Research, Sustainability",
    image: "/images/project3.webp",
    type: "image",
  },

  {
    number: "05",
    title: "Creative UI Designs",
    category: "UI/UX Design",
    tools: "Figma, Canva, Frontend Design",
    image: "/images/project4.webp",
    type: "image",
  },
];

const Work = () => {

  useGSAP(() => {

    let translateX: number = 0;

    function setTranslateX() {

      const box = document.getElementsByClassName("work-box");

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length -
        (rectLeft + parentWidth) +
        padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
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
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };

  }, []);

  return (
    <div className="work-section" id="work">

      <div className="work-container section-container">

        <h2>
          My <span>Projects</span>
        </h2>

        <div className="work-flex">

          {projects.map((project, index) => (

            <div className="work-box" key={index}>

              <div className="work-info">

                <div className="work-title">

                  <h3>{project.number}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>

                </div>

                <h4>Tools & Technologies</h4>

                <p>{project.tools}</p>

              </div>

              {project.type === "video" ? (

                <video
                  src="/videos/portfolio.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="work-video"
                ></video>

              ) : (

                <WorkImage
                  image={project.image!}
                  alt={project.title}
                />

              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Work;