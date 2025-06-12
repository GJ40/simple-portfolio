import React from 'react';
import projectImg1 from '../assets/react.svg';
import projectImg2 from '../assets/project2.png';

const projects = [
    {
        title: 'MEAN Stack CRUD Application',
        description: 'Developed a Full-Stack MERN project which showcase basic CRUD operations with database and responsive User Interface using ChakraUI.',
        image: projectImg1,
        repository: "",
        livelink: "",
    },
    {
        title: 'ML Project',
        description: 'Developed a ML app using streamlit.',
        image: projectImg2,
        repository: "",
        livelink: "",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
            <div className="grid sm:grid-cols-2 gap-10">
                {projects.map((project, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg">
                        {
                            project.livelink ? <iframe src={project.livelink} alt={project.title} className="w-full h-48 object-cover rounded" />
                                : <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
                        }
                        <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                        <a href={`${project.repository}`}><p className='text-xl mt-2 flex justify-center items-center space-x-4 p-2 m-2 hover:bg-gray-700 rounded'><ion-icon name="logo-github"></ion-icon><span className='ml-2'>GitHub Repo</span></p></a>
                        <a href={`${project.livelink}`}><p className='text-xl mt-2 flex justify-center items-center space-x-4 p-2 m-2 hover:bg-gray-700 rounded'><ion-icon name="link"></ion-icon><span className='ml-2'>Live Link</span></p></a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;