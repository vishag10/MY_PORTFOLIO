import React from 'react';
import { Twitter, Instagram, Globe } from 'lucide-react';
import './App.css';
import { Facebook } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import profile from './assets/img/Adobe Express - file (2).png';
import profile2 from './assets/img/vishaknobg.png';
import project from "./assets/img/work1.png"



const PortfolioHero = () => {

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const autoScrollIntervalRef = useRef(null);
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const isAtEnd =
            scrollContainerRef.current.scrollLeft + scrollContainerRef.current.clientWidth >=
            scrollContainerRef.current.scrollWidth;

          if (isAtEnd) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scroll('right');
          }
        }
      }, 3000); 
    };

    const stopAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };

   
    startAutoScroll();

   
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('mouseenter', stopAutoScroll);
      container.addEventListener('mouseleave', startAutoScroll);
      container.addEventListener('touchstart', stopAutoScroll);
      container.addEventListener('touchend', startAutoScroll);
    }

    return () => {
      stopAutoScroll();
      if (container) {
        container.removeEventListener('mouseenter', stopAutoScroll);
        container.removeEventListener('mouseleave', startAutoScroll);
        container.removeEventListener('touchstart', stopAutoScroll);
        container.removeEventListener('touchend', startAutoScroll);
      }
    };
  }, []);

  const skills = [
    'Product Design',
    'Bootstrap',
    'UI Design',
    'Html5',
    'CSS',
    'MongoDB',
    'React',
    'NodeJS',
    'ExpressJS',
    'Front-End Development',
    'Javascript',
    'Tailwind'
  ];
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'weather',
      image: project,
      categories: ['github', 'code'],
      gradient: 'from-green-200/20 to-white/20'
    },
    {
      id: 2,
      title: 'weather',
      image: project,
      categories: ['github', 'code'],
      gradient: 'from-green-200/20 to-white/20'
    },
    {
      id: 3,
      title: 'weather',
      image: project,
      categories: ['github', 'code'],
      gradient: 'from-green-200/20 to-white/20'
    },
    {
      id: 4,
      title: 'weather',
      image: project,
      categories: ['github', 'code'],
      gradient: 'from-green-200/20 to-white/20'
    }
  ];
  return (
    <>
      <div className="min-h-screen bg-black text-white  ">
        {/* Navigation */}

        <nav className="flex justify-between items-center p-6 " >
          <div className="text-xl font-light">vishak</div>
          <div className="flex items-center gap-8">
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault(); 
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              projects
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault(); 
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              about
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault(); 
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
            <button className="bg-white/10 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/20 transition-colors">
              <span className="text-sm">Connect</span>
            </button>
          </div>
        </nav>

        {/* FRONT PAGE*/}
        <div className="flex flex-col items-center justify-center mt-32 text-center">
         
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-800">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-gray-400 text-sm">available for work</span>
          </div>

         
          <h1 className="text-5xl font-light mb-4">
             Im,<span className="font-serif italic bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Vishakchandran</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            MERN Stack Developer.
          </p>

          
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-black relative py-24">
        
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px),
                           linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* ABOUT */}
        <div className="max-w-6xl mx-auto px-6 relative" id='about'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            
            <div>
              <h2 className="text-4xl lg:text-5xl text-white mb-8">
                More about <span className="font-serif italic">myself</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Hi, I'm Vishakchandran vp, A passionate MERN Stack Developer skilled in React.js, Node.js,<br /> Express.js, and MongoDB. With hands-on experience
                from a six-month internship and multiple projects, I build responsive, user-friendly <br />web applications. Proficient in Git, AWS, and  Netlify,<br /> I thrive on problem-solving and continuous learning.
              </p>

              <a href="#contact"
              
              onClick={(e) => {
                e.preventDefault(); 
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}><button className="inline-flex items-center gap-2 bg-zinc-900 text-gray-300 px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors">
               <span>Contact Me</span>
                <span className="transform rotate-45">↗</span>
              </button></a> 
            </div>

           
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={profile2}
                  alt="Designer at work"
                  className="w-full object-cover"
                />

              
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Play size={24} className="text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
           {/* PROJECT */}
      <div className="w-full min-h-screen bg-black px-6 py-24" id='projects'>
       
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-wider mb-4">Projects</p>
          <h2 className="text-4xl lg:text-5xl text-white">
            My Latest <span className="font-serif italic">Projects</span>
          </h2>
        </div>

        
        <div className="max-w-7xl mx-auto relative">
          
          <button
            onClick={() => scroll('left')}
            className="absolute -left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10"
          >
            <ChevronRight size={32} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 scroll-smooth hide-scrollbar"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-[600px] group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
              >
               
                <div className="relative rounded-3xl overflow-hidden mb-4">
                 
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>

                 
                  <div className="absolute top-6 left-6 flex items-center gap-2 text-xl font-medium">
                    <div className="w-6 h-6 bg-black/10 rounded"></div>
                    {project.title}
                  </div>

                 
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between px-2">
                  <h3 className="text-white text-2xl">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.categories.map((category, index) => (
                      <span
                        key={index}
                        className="text-gray-400 text-sm px-3 py-1 rounded-full bg-white/5"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </div>

      {/* SKILL */}
      <div className="w-full bg-black px-6 py-24">
        
        <div className="text-center mb-16">
          <h2 className="text-gray-500 text-lg">
            <span className="inline-block mx-6 border-t border-gray-800 w-12"></span>
            Skills & Experience
            <span className="inline-block mx-6 border-t border-gray-800 w-12"></span>
          </h2>
        </div>

        
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-black/40 rounded-full text-gray-300 text-sm md:text-base hover:bg-black/60 transition-colors cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="w-full bg-black px-6 py-24" id='contact'>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 mb-4">
            <span className="inline-block mx-6 border-t border-gray-800 w-12"></span>
            Reach out anytime
            <span className="inline-block mx-6 border-t border-gray-800 w-12"></span>
          </p>

          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Let's Stay <span className="font-serif italic text-gray-500">Connected</span>
          </h2>

          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Got questions or want to collaborate? Feel free to reach out—I'm open to new projects or just a casual chat!
          </p>

          
          <button className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-colors mb-12">
            <span>Contact Me</span>
            <span className="transform rotate-45">↗</span>
          </button>

          
          <div className="flex justify-center items-center gap-8 mb-8">
            <a href="https://x.com/chandranvishag?s=21" className="text-gray-600 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <span className="text-gray-800">|</span>
            <a href="https://www.instagram.com/vi._shag?igsh=MTQ0cWZqaDlza2NpcA%3D%3D&utm_source=qr" className="text-gray-600 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            {/* <span className="text-gray-800">|</span>
            <a href="https://github.com/vishag10" className="text-gray-600 hover:text-white transition-colors">
              <Facebook size={24} />
            </a> */}
          </div>

          {/* Email */}
          <a
            href="mailto:adriancarter@support.com"
            className="text-gray-500 hover:text-white transition-colors"
          >
            vishagchandran10@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;