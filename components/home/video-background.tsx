"use client";

import { useEffect, useState } from 'react';

export default function VideoBackground() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsCollapsed(true);
            } else {
                setIsCollapsed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative h-screen w-full">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="https://rodeocast.de/includes/Sequenz01.mp4" type="video/mp4" />
                Dein Browser unterstützt das Video-Tag nicht.
            </video>

            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-20 transition-all ${
                    isCollapsed ? 'bg-black/70 py-2' : 'bg-transparent py-6'
                }`}
            >
                <ul className="flex justify-end space-x-6 px-10 text-white">
                    <li>
                        <a href="#home" className="hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-gray-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
