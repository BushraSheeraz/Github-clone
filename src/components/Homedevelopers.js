import React from 'react';

const Homedevelopers = () => {
    return (
        <section className="home-developers">
        <div className="home-head">
          <p>Community</p>
          <h3>Welcome home, developers</h3>
          <p>GitHub is home to the world’s largest community of developers and their projects...</p>
        </div>
        <div className="developers-images">
          <div>
            <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568220934/s_w2pkb0.png" className="developers-img"></img>
            <figcaption>
              <h6>Russell Keith-Magee</h6>
              <p>Russell Keith-Magee created BeeWare to fill a gap in his own process. Today, BeeWare is the go-to project for supporting Python on every platform.</p>
              <a href="#">Read more.</a>
            </figcaption>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568220922/kris_gipmnp.png" className="developers-img"></img>
            <figcaption>
              <h6>Kris Nova</h6>
              <p>Kris Nova quickly developed a passion for open source software. Now she gets to work on open source tooling at her day job, which includes maintaining Kubernetes Operations (kops).</p>
              <a href="#">Read more.</a>
            </figcaption>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568220923/japan_b2fa9t.png" className="developers-img"></img>
            <figcaption>
              <h6>SAP</h6>
              <p>In 2013, Evan You founded Vue, a Javascript framework funded by the community on Patreon. In 2016, Vue reached 2,000,000 downloads.</p>
              <a href="#">Read more.</a>
            </figcaption>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dbacvk3x1/image/upload/v1568220944/x_hzhcs5.png" className="developers-img"></img>
            <figcaption>
              <h6>Spotify</h6>
              <p>Jess Frazelle works on Kubernetes full-time. Previously she maintained Docker, a software containerization platform used by thousands of teams.</p>
              <a href="#">Read more.</a>
            </figcaption>
          </div>
        </div>
      </section>
    );
};

export default Homedevelopers;