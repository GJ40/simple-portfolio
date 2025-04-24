import React from 'react';

const About = () => {
    return (
        <section id="about" className="max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg leading-relaxed text-justify">
                I am a passionate software developer with a strong foundation in computer science. I completed my education at [University], where I majored in Computer Science and Engineering. My interests include building interactive web applications and exploring new technologies. I have experience in frontend frameworks like React and backend development with Node.js.
            </p>
            <ul className="list-disc mt-6 ml-6 my-2">
                <li><strong>Education:</strong> B.Tech in Computer Science</li>
                <li>
                    <strong>Experience:</strong>
                    <ul className='list-disc ml-6 my-2'>
                        <li className='my-2'>
                            Internship at [Comapany],
                            <pre>
                                MERN Stack Developer, Contributed to the development of BidNow: Real-Time Auction Experience, a MEAN stack web application.<br />
                                Implemented key frontend and backend features to enhance real-time bidding functionality and user experience.
                            </pre>
                        </li>
                        <li className='my-2'>
                            [Company] Intern,
                            <pre>
                                Learned the concepts of [Company] AI, Responsible AI and principles.<br />
                                Demostrated a high level of efficiency in applying the AI-driven application and cloud development.
                            </pre>
                        </li>
                    </ul>
                </li>
                <li><strong>Hobbies:</strong> Gaming, Music, Developing Apps</li>
            </ul>
        </section>
    );
};

export default About;