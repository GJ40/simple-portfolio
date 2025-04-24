// components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 dark:bg-gray-800 text-center p-4 mt-10">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;