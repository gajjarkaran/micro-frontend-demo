import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>🔗 Quick Links</h4>
                    <ul>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#support">Support</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>📧 Contact</h4>
                    <ul>
                        <li>Email: info@microfrontend-demo.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Address: 123 Demo Street</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>🌐 Social</h4>
                    <div className="social-links">
                        <a href="#twitter" className="social-link">Twitter</a>
                        <a href="#linkedin" className="social-link">LinkedIn</a>
                        <a href="#github" className="social-link">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Micro Frontend Demo. Built with ❤️ using Module Federation.</p>
            </div>
        </footer>
    );
};

export default Footer; 