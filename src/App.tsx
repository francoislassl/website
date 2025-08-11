import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header Section */}
            <header className="bg-white shadow-md p-4">
                <nav className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Website Builder</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#features" className="text-gray-600 hover:text-blue-600 transition duration-300">Features</a></li>
                        <li><a href="#pricing" className="text-gray-600 hover:text-blue-600 transition duration-300">Pricing</a></li>
                        <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <main className="flex-grow flex items-center justify-center bg-blue-50 p-6">
                <div className="text-center max-w-2xl">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Build Your Website Effortlessly</h2>
                    <p className="text-gray-600 mb-6">Create stunning websites without any coding. Fast, simple, and user-friendly.</p>
                    <a href="#features" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Get Started</a>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="p-6 bg-white">
                <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">Features</h3>
                <div className="container mx-auto grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-gray-200 rounded shadow hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Drag & Drop Builder</h4>
                        <p className="text-gray-600">Easily create your site with our intuitive drag and drop interface.</p>
                    </div>
                    <div className="p-4 bg-gray-200 rounded shadow hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Mobile Responsive</h4>
                        <p className="text-gray-600">Your site will look great on any device, automatically.</p>
                    </div>
                    <div className="p-4 bg-gray-200 rounded shadow hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Custom Domains</h4>
                        <p className="text-gray-600">Use your own domain to establish your brand.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="p-6 bg-blue-50">
                <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">Pricing Plans</h3>
                <div className="container mx-auto grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white rounded shadow text-center">
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Basic</h4>
                        <p className="text-gray-600 mb-4">$10/month</p>
                        <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Choose Plan</a>
                    </div>
                    <div className="p-4 bg-white rounded shadow text-center">
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Pro</h4>
                        <p className="text-gray-600 mb-4">$20/month</p>
                        <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Choose Plan</a>
                    </div>
                    <div className="p-4 bg-white rounded shadow text-center">
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h4>
                        <p className="text-gray-600 mb-4">$30/month</p>
                        <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Choose Plan</a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <footer id="contact" className="p-6 bg-white">
                <h3 className="text-3xl font-semibold text-center text-gray-800 mb-4">Get in Touch</h3>
                <form className="flex flex-col max-w-md mx-auto">
                    <input type="text" placeholder="Your Name" className="border p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                    <input type="email" placeholder="Your Email" className="border p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                    <textarea placeholder="Your Message" className="border p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
                    <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">Send Message</button>
                </form>
            </footer>

            {/* Footer */}
            <div className="bg-gray-800 text-white text-center py-4">
                <p>© 2023 Website Builder. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default LandingPage;