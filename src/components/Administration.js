import React from 'react';

const Security = () => {
    return (
        <>
            <section className="sec-8">
                <div>
                    <p>Security and administration</p>
                    <h1>Your business needs, met</h1>
                    <p>From flexible hosting to granular access controls, we’ve got your security requirements covered.</p>
                    <button>Learn how Github Enterprise works <i class="fas fa-arrow-right"></i></button>
                </div>
            </section>
            <section className="sec-9">
                <div>
                    <span>
                        <h4>Code security</h4>
                        <p>Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code.</p>
                    </span>
                    <span>
                        <h4>Access controlled</h4>
                        <p>Encourage teams to work together while limiting access to those who need it with granular permissions and authentication through SAML/SSO and LDAP.</p>
                    </span>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568218012/varify_rch2pw.png"></img>
                </div>
            </section>
            <section className="sec-10">
                <div className="head-para">
                    <div>
                        <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568218705/f_xaxt8z.png"></img>
                    </div>
                    <div>
                        <h5>Hosted where you need it</h5>
                        <p>Securely and reliably host your work on GitHub using GitHub Enterprise Cloud. Or deploy GitHub Enterprise Server in your own data centers or in a private cloud using Amazon Web Services, Azure, or Google Cloud Platform.</p>
                        <span><a href="#">Compare plans <i class="fas fa-arrow-right"></i></a></span>
                        <span><a href="#">Contact sales for more information <i class="fas fa-arrow-right"></i></a></span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Security;