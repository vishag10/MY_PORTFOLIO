
import "../App.css"
import React from "react";
import profile from "../assets/img/vishak.png";
import profile1 from "../assets/img/vishaknobg.png";
import BlurText from './blur';
import { useEffect } from "react";
import {Link as ScrollLink} from "react-scroll";
const SkillBar = ({ skill, percentage, imgSrc }) => (
  <div className="skill-bar">
    <div className="skill-header">
      <div className="skill-info">
        <img 
          src={imgSrc} 
          alt={`${skill} icon`} 
          className="skill-icon"
        />
        <span className="skill-name">{skill}</span>
      </div>
      <span className="skill-percentage">{percentage}%</span>
    </div>
    <div className="progress-bar-bg">
      <div 
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

function Home() {

  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".about");
      const aboutPhoto = document.querySelector(".about_photo");
      const aboutTitle = document.querySelector(".about_deatils h2");

      if (aboutSection) {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
          aboutPhoto.classList.add("show");
          aboutTitle.classList.add("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { skill: "HTML5", percentage: 95, imgSrc: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { skill: "CSS3", percentage: 90, imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817" },
    { skill: "JavaScript", percentage: 85, imgSrc: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { skill: "React", percentage: 80, imgSrc: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { skill: "MongoDB", percentage: 75, imgSrc: "https://www.svgrepo.com/show/331488/mongodb.svg" },
    { skill: "Express.js", percentage: 80, imgSrc: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
    { skill: "Node.js", percentage: 85, imgSrc: "https://www.svgrepo.com/show/303360/nodejs-logo.svg" }
  ];

  return (
    <>
      <nav className="nav bd-grid">
        <div className='logo_name'>
          <a href="\" className="nav__logo">Vishak</a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><ScrollLink to="home" smooth={true} duration={500} className="nav__link active-link">Home</ScrollLink></li>
            <li className="nav__item"><ScrollLink to="about" smooth={true} duration={500} offset={-70} className="nav__link">About</ScrollLink></li>
            <li className="nav__item"><ScrollLink to="skills" smooth={true} duration={500} offset={-70} className="nav__link">Skills</ScrollLink></li>
            <li className="nav__item"><ScrollLink to="work" smooth={true} duration={500} offset={-70} className="nav__link">Work</ScrollLink></li>
            <li className="nav__item"><ScrollLink to="contact" smooth={true} duration={500} offset={-70}  className="nav__link">Contact</ScrollLink></li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="menu"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></i>
        </div>
      </nav>
      <div className="home" id='home'>
        <div className="htitle">
          <div className="home_deatils">
            <h1>HI, <br /> I'm  <label className='vishak'>Vishak</label></h1>

            <BlurText
              text="MERN-Stack Developer"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="developer"
            />
          </div>
        </div>
        <div className="hphoto">
          <div className="himg">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
      <div className="about" id='about'>
         <div className="about_head">
          <h1>About Me</h1>
         </div>
         <div className="about_photo">
            <div className="aphoto">
              <img src={profile1} alt="" />
            </div>

         </div>
         <div className="about_deatils">
                <div className="about_d">
                <h2>I'm Vishakchandran VP</h2>
                <p>
                 A passionate MERN Stack Developer skilled in React.js, Node.js,<br /> Express.js, and MongoDB. With hands-on experience
                  from a six-month <br /> internship and multiple projects, I build responsive, user-friendly <br />web applications. Proficient in Git, AWS, and  Netlify,<br /> I thrive on problem-solving and continuous learning.
                </p>
                </div>
         </div>
      </div>
      <div className="skills" id="skills">
        <div className="skills_head">
        <h1>Skills</h1>
        </div>
        <div className="skills_deatils">
        <h2 className="skills-title">Professional Skills</h2>
      <p className="skills-description">
      Proficient in MERN Stack development with hands-on experience in building dynamic web applications, RESTful APIs, and database management.
       Skilled in React.js for frontend, Node.js and Express.js for backend, and MongoDB for efficient data handling.
      </p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillBar
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
            imgSrc={skill.imgSrc}
          />
        ))}
      </div>
        </div>
       
      </div>
      <div className="work" id="work">
        <div className="work_head">
          <h1>Work</h1>
        </div>
        <div className="work_container">
          <div className="work_item1">
          <img src={profile1} alt="" />
          </div>
          <div className="work_item1">
          <img src={profile1} alt="" />
          </div>
          <div className="work_item1">
          <img src={profile1} alt="" />
          </div>
          <div className="work_item1">
          <img src={profile1} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;