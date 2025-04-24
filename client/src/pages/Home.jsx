import React from 'react';
import profilePic from '../assets/profile.jpg';
import Pdf from '../assets/resume.pdf';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <img src={profilePic} alt="Profile" className="w-40 h-40 rounded-full mb-6 shadow-lg" />
            <h1 className="text-4xl font-bold mb-2">Hi, I'm [Name]</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Full Stack Developer | MERN Stack | Lifelong Learner</p>
            <a href={Pdf} target="_blank" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                View Resume
            </a>
        </section>
    );
};

export default Home;