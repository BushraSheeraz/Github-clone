import React from 'react';

const Signup = () => {
    return (
        <section className="about-sec">
            <div className="about">
                <h1>Built for developers</h1>
                <p>GitHub is a development platform inspired by the way you work. From <a href="#">open source</a> to <a href="#">business</a>, you can host and review code, manage projects, and build software alongside 40 million developers.</p>
                <button className="sign-btn">Sign up for Github</button>
            </div>
            <div className="login">
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text" className="login-inp"></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" className="login-inp"></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" className="login-inp"></input>
                    </div>
                    <p>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. <a href="#">Learn more</a>.</p>
                    <div className="signup">
                        <button>Sign up for Github</button>
                        <p>By clicking “Sign up for GitHub”, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Statement</a>. We’ll occasionally send you account related emails.</p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Signup;