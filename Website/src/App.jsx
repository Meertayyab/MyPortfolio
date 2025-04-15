import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 3D animation for the background
  const Scene = () => (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
    </Canvas>
  );

  // Project data
  const projects = [
    {
      title: "Chat Application",
      description: "Real-time chat application with MERN stack and Socket.io",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubLink: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration",
      technologies: ["React", "Express", "MongoDB", "Stripe API"],
      githubLink: "#",
    },
    {
      title: "CRM Call Center System",
      description: "Customer relationship management for call centers",
      technologies: ["React", "Node.js", "MongoDB", "Twilio API"],
      githubLink: "#",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* 3D Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0 opacity-20">
        <Scene />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 font-bold text-xl"
            >
              Meer Tayyab
            </motion.div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["home", "about", "projects", "skills", "contact"].map(
                  (item) => (
                    <motion.button
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setActiveSection(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        activeSection === item
                          ? darkMode
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-gray-900"
                          : darkMode
                          ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </motion.button>
                  )
                )}
              </div>
            </div>

            <div className="flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                {darkMode ? "☀️" : "🌙"}
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/resume_meer_tayyab(2).pdf"
                download
                className={`ml-4 px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                <FiDownload className="mr-2" />
                Resume
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Home Section */}
        {activeSection === "home" && (
          <section className="py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl font-extrabold mb-6">
                Hi, I'm <span className="text-blue-500">Meer Tayyab</span>
              </h1>
              <h2 className="text-3xl font-semibold mb-8">
                MERN Stack Developer
              </h2>
              <p className="text-xl max-w-3xl mx-auto mb-10">
                Building modern web applications with React, Node.js, Express,
                and MongoDB. 1+ years of hands-on experience creating robust,
                scalable solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-lg text-lg font-semibold ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
                onClick={() => setActiveSection("projects")}
              >
                View My Work
              </motion.button>
            </motion.div>
          </section>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <section className="py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6">
                    I'm a passionate MERN stack developer with over 1 year of
                    experience building modern web applications. I specialize in
                    creating efficient, scalable solutions with clean,
                    maintainable code.
                  </p>
                  <p className="text-lg mb-6">
                    My journey in web development began with a fascination for
                    creating interactive user experiences. Since then, I've
                    worked on various projects including chat applications,
                    e-commerce platforms, and CRM systems.
                  </p>
                  <p className="text-lg">
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    mentoring aspiring developers.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div
                    className={`w-64 h-64 rounded-full overflow-hidden border-4 ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    {/* Replace with your actual image */}
                    <img
                      src="/4A0D41IMG_5510.JPG"
                      alt="Meer Tayyab"
                      className="w-full h-full object-cover"
                    />

                    <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                      <span className="text-2xl">Your Photo</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        )}
{/* Projects Section */}
{activeSection === "projects" && (
  <section className="py-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className={`rounded-lg overflow-hidden shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            {/* Dynamic Project Images */}
            <div className="h-48 overflow-hidden flex items-center justify-center relative">
              {project.title === "Chat Application" && (
                <img 
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Chat App"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {project.title === "E-Commerce Platform" && (
                <img 
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="E-Commerce"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {project.title === "CRM Call Center System" && (
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="CRM Dashboard"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {project.title === "Portfolio Website" && (
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Portfolio"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-xl font-medium drop-shadow-lg">
                  {project.title}
                </span>
              </div>
            </div>

            {/* Rest of your card content remains the same */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      darkMode ? "bg-gray-700 text-blue-400" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-4 py-2 rounded-md ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                View on GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
)}
        {/* Skills Section */}
        {activeSection === "skills" && (
          <section className="py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">
                My Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Technical Skills
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-4">
                        <SkillIcon
                          icon={<FaReact size={40} className="text-blue-500" />}
                          name="React"
                        />
                        <SkillIcon
                          icon={
                            <SiJavascript
                              size={40}
                              className="text-yellow-400"
                            />
                          }
                          name="JavaScript"
                        />
                        <SkillIcon
                          icon={
                            <div className="text-4xl font-bold text-blue-800">
                              TS
                            </div>
                          }
                          name="TypeScript"
                        />
                        <SkillIcon
                          icon={
                            <div className="w-10 h-10 bg-orange-500 flex items-center justify-center text-white font-bold">
                              HTML
                            </div>
                          }
                          name="HTML5"
                        />
                        <SkillIcon
                          icon={
                            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center text-white font-bold">
                              CSS
                            </div>
                          }
                          name="CSS3"
                        />
                        <SkillIcon
                          icon={
                            <div className="text-4xl font-bold text-purple-600">
                              UI
                            </div>
                          }
                          name="Tailwind"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-4">
                        <SkillIcon
                          icon={
                            <FaNodeJs size={40} className="text-green-500" />
                          }
                          name="Node.js"
                        />
                        <SkillIcon
                          icon={
                            <SiExpress size={40} className="text-gray-500" />
                          }
                          name="Express"
                        />
                        <SkillIcon
                          icon={
                            <div className="text-4xl font-bold text-gray-800">
                              API
                            </div>
                          }
                          name="REST API"
                        />
                        <SkillIcon
                          icon={
                            <div className="text-4xl font-bold text-blue-600">
                              S
                            </div>
                          }
                          name="Socket.io"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Database</h4>
                      <div className="flex flex-wrap gap-4">
                        <SkillIcon
                          icon={
                            <SiMongodb size={40} className="text-green-600" />
                          }
                          name="MongoDB"
                        />
                        <SkillIcon
                          icon={
                            <FaDatabase size={40} className="text-blue-600" />
                          }
                          name="SQL"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Professional Skills
                  </h3>
                  <div className="space-y-4">
                    <SkillBar
                      name="Problem Solving"
                      level={90}
                      darkMode={darkMode}
                    />
                    <SkillBar
                      name="Team Collaboration"
                      level={85}
                      darkMode={darkMode}
                    />
                    <SkillBar
                      name="Communication"
                      level={80}
                      darkMode={darkMode}
                    />
                    <SkillBar
                      name="Project Management"
                      level={75}
                      darkMode={darkMode}
                    />
                    <SkillBar
                      name="Agile Development"
                      level={80}
                      darkMode={darkMode}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-center">
                Get In Touch
              </h2>
              <div
                className={`rounded-lg p-8 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-1 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 rounded-md border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-1 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 rounded-md border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-1 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-2 rounded-md border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`w-full px-6 py-3 rounded-md text-lg font-semibold ${
                      darkMode
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white`}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer
        className={`py-8 ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        } relative z-10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                © {new Date().getFullYear()} Meer Tayyab. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Meertayyab"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/meer-tayyab-1870131a4/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:your.meertayyab71@gmail.com"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FiMail size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://profile.indeed.com/?hl=en_PK&co=PK&from=gnav-homepage"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center font-bold text-sm">
                  IN
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Skill Icon Component
const SkillIcon = ({ icon, name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center"
    >
      {icon}
      <span className="text-sm mt-1">{name}</span>
    </motion.div>
  );
};

// Skill Bar Component
const SkillBar = ({ name, level, darkMode }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span
          className={`text-sm font-medium ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {name}
        </span>
        <span
          className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          {level}%
        </span>
      </div>
      <div
        className={`w-full rounded-full h-2.5 ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className={`h-2.5 rounded-full ${
            darkMode ? "bg-blue-500" : "bg-blue-600"
          }`}
        ></motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
