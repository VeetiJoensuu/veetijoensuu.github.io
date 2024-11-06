import React from 'react';

const AboutMe: React.FC = () => {
  const fetchEmail = async () => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyT7Y5MIYINXjm1_Am2Gt6tlrwkhrI8aFex_PMIwYYhExP2Bi4jBcTe1DaRgZbBwbqmqA/exec');
      const data = await response.json();
      navigator.clipboard.writeText(data.email);
      alert('Email copied to clipboard!');
    } catch (error) {
      console.error('Error fetching email:', error);
    }
  };

  return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>
        My GitHub: <a href="https://github.com/VeetiJoensuu" target="_blank" rel="noopener noreferrer">VeetiJoensuu</a>
      </p>
      <p>
        My email: <button onClick={fetchEmail}>Copy to clipboard</button>
      </p>
    </div>
  );  
};

export default AboutMe;