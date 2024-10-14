import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, School, Code } from 'lucide-react';

const skills = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Three.js', icon: '/icons/threejs.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
];

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="text-xl mb-8">We are passionate about creating immersive 3D experiences on the web.</p>
      
      <h2 className="text-3xl font-bold mb-4">Our Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
      
      <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2021 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">3D Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Amazing 3D, Inc.</h4>
          <p>
            Creating stunning 3D websites and applications using React and Three.js
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Code />}
        >
          <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Web Solutions Co.</h4>
          <p>
            Developed responsive and interactive web applications using modern frontend technologies
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Graphics</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Technology</h4>
          <p>
            Studied advanced 3D modeling, animation, and web technologies
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default About;