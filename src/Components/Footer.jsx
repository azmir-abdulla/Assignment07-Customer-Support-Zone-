import React from 'react';
import Container from './Container';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-8 py-12 ">
            <Container>
                <div className="grid md:grid-cols-5 gap-8">
                    <div>
                        <h3 className="text-white font-semibold mb-2">
                            CS — Ticket System
                        </h3>
                        <p className="text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Company</h4>
                        <ul className="space-y-1 text-sm">
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Saled</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Services</h4>
                        <ul className="space-y-1 text-sm">
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Information</h4>
                        <ul className="space-y-1 text-sm">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Social Links</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center gap-2">
                                <span className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-black">
                                    <i className="fa-brands fa-x-twitter text-lg"></i>
                                </span>
                                @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-black">
                                    <i className="fa-brands fa-linkedin-in text-lg"></i>
                                </span>
                                @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-black">
                                    <i className="fa-brands fa-facebook-f text-lg"></i>
                                </span>
                                @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-black">
                                    <i className="fa-regular fa-envelope text-lg"></i>
                                </span>
                                support@cs.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-left md:text-center text-gray-500 text-sm mt-8">
                    © 2025 CS — Ticket System. All rights reserved.
                </div>

            </Container>
        </footer>
    );
};

export default Footer;