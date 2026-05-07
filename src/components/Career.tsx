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

          <div className="career-info-box">

            <div className="career-info-in">

              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Personal Portfolio Projects</h5>
              </div>

              <h3>2026</h3>

            </div>

            <p>
              Developed responsive and modern portfolio websites
              using React, TypeScript, Vite, HTML, CSS and
              JavaScript with smooth animations and interactive UI.
            </p>

          </div>

          <div className="career-info-box">

            <div className="career-info-in">

              <div className="career-role">
                <h4>AI/ML Project Developer</h4>
                <h5>EduScope Project</h5>
              </div>

              <h3>2025</h3>

            </div>

            <p>
              Worked on EduScope, a student performance and
              dropout prediction project using AI/ML concepts,
              real-time analytics and dashboard visualization.
            </p>

          </div>

          <div className="career-info-box">

            <div className="career-info-in">

              <div className="career-role">
                <h4>ECE Student & Tech Enthusiast</h4>
                <h5>Sree Chaitanya College of Engineering</h5>
              </div>

              <h3>NOW</h3>

            </div>

            <p>
              Passionate Electronics and Communication Engineering
              student focused on frontend development, UI/UX,
              technical innovation, PCB workshop experience and
              modern web technologies.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Career;