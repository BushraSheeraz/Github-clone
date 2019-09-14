import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
                <div>
                    <h3>GitHub</h3>
                </div>
                <div className="links">
                    <div>
                        <span>Product</span>
                        <a href="#">Features</a>
                        <a href="#">Security</a>
                        <a href="#">Enterprise</a>
                        <a href="#">Customer stories</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                    </div>
                    <div>
                        <span>Platform</span>
                        <a href="#">Developer API</a>
                        <a href="#">Partners</a>
                        <a href="#">Atom</a>
                        <a href="#">Electron</a>
                        <a href="#">GitHub Desktop</a>
                    </div>
                    <div>
                        <span>Support</span>
                        <a href="#">Help</a>
                        <a href="#">Community Forum</a>
                        <a href="#">Training</a>
                        <a href="#">Status</a>
                        <a href="#">Contact GitHub</a>
                    </div>
                    <div>
                        <span>Company</span>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                        <a href="#">Press</a>
                        <a href="#">Shop</a>
                    </div>
                </div>
            </footer>
            <div className="last">
                <p>© 2019 GitHub, Inc. <a href="#"> Terms</a> <a href="#">  Privacy</a></p>
                <div>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-github"></i>
                </div>
            </div>
        </>

    );
};

export default Footer;