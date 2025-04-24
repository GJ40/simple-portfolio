import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let tempErrors = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) tempErrors[key] = 'This field is required';
        });
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            alert('Message sent!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                    />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full p-3 border rounded-md"
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                    <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
                        Send Message
                    </button>
                </form>

                <div className="mt-10 text-center space-y-2 w-full">
                    <p className="text-lg font-semibold text-center">Connect with me</p>
                    <div className="flex flex-row justify-center gap-6 text-6xl text-gray-700 dark:text-gray-300 w-full">
                        <a href="mailto:your.email@example.com" aria-label="Email"><ion-icon name='mail'></ion-icon></a>
                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><ion-icon name="logo-github"></ion-icon></a>
                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
