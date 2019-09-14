import React from 'react';

const Integration = () => {
    return (
        <>
            <section className="sec-11">
                <div>
                    <p>Integrations</p>
                    <h1>Build on GitHub</h1>
                    <p>Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.</p>
                    <button>Learn about integrations <i class="fas fa-arrow-right"></i></button>
                </div>
            </section>
            <section className="tools">
                <div>
                    <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568216008/slack_y10ywz.png"></img>
                    <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568216020/zenhub_megclb.png" className="down"></img>
                    <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568216020/travis_t64mjm.png"></img>
                    <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568215987/a_hy8lpg.png" className="down"></img>
                    <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568215987/b_e1mugo.png"></img>
                    <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568215999/g_epysnx.png" className="down"></img>
                    <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568216612/e_jdqlor.png"></img>
                </div>
                <div className="para-link">
                    <p>Sometimes, there’s more than one tool for the job. Why not try something new?</p>
                    <a href="#">Browse GitHub Marketplace <i class="fas fa-arrow-right"></i></a>
                </div>
            </section>
        </>
    );
};

export default Integration;