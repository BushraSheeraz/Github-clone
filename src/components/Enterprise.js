import React from 'react';

const Enterprise = () => {
    return (
        <section className="Get-started">
            <div className="sec-main">
                <div className="heading-para">
                    <h2>Get started with Github Enterprise</h2>
                    <p>Take collaboration to the next level with security and administrative features built for teams.</p>
                </div>
                <div className="btns">
                    <div className="btn-1">
                        <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568196565/cloud_xq7gfg.png"></img>
                        <h6>Enterprise Cloud</h6>
                        <p className="btn-para">Leave the Hosting to us.</p>
                        <button>Try cloud for free</button>
                    </div>
                    <div className="btn-1">
                        <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568196586/server_cqeehw.png"></img>
                        <h6>Enterprise Server</h6>
                        <p className="btn-para">Deploy to your envoironment.</p>
                        <button>Try Server for free</button>
                    </div>
                    <div className="btn-3">
                        <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568196586/talk_pkgyqt.png"></img>
                        <h6>Talk to us</h6>
                        <p className="btn-para">Want to use both?</p>
                        <button>Contact Sales --></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enterprise;