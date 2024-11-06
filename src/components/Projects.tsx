import React, { useState } from 'react';
import Modal from './Modal';

interface Project {
  title: string;
  description: string;
  screenshot: string;
  projectLink: string;
  githubLink: string;
  tags: string[];
}

const projectsData: Project[] = [
  {
    title: "github.io/weather_app",
    description: "Web page to check the weather around the world. Made with plain JavaScript.",
    screenshot: "projectimages/weather_app.png",
    projectLink: "https://veetijoensuu.github.io/weather_app",
    githubLink: "https://github.com/VeetiJoensuu/weather_app",
    tags: ["HTML/CSS", "JavaScript", "Live site"]
  },
  {
    title: "veetijoensuu.github.io",
    description: "My portfolio page (which you are on). Made with React.",
    screenshot: "projectimages/portfolio.png",
    projectLink: "https://veetijoensuu.github.io",
    githubLink: "https://github.com/VeetiJoensuu/veetijoensuu.github.io",
    tags: ["HTML/CSS", "React", "TypeScript", "Live site"]
  }
];

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleImageClick = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const allTags = [...new Set(projectsData.flatMap(project => project.tags))];

  const filteredProjects = selectedTags.length === 0 ? projectsData : projectsData.filter(project => 
    selectedTags.every(tag => project.tags.includes(tag))
  );

  return (
    <div>
      <h1>Projects</h1>
      <div>
        {allTags.map((tag, index) => (
          <label key={index} className="tag-checkbox">
            <input
              type="checkbox"
              value={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagClick(tag)}
            />
            {tag}
          </label>
        ))}
      </div>
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-tile">
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="project-screenshot"
              onClick={() => handleImageClick(project.screenshot)}
            />
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <h2 className="project-title">{project.title}</h2>
            </a>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} imageSrc={modalImage} />
    </div>
  );
};

export default Projects;