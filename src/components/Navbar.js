import React from 'react';


function Navbar() {
    return (
        <header className="App-header">
            <nav className="nav-bar">
                <i class="fab fa-github"></i>
                <ul>
                    <li>
                        <a>Why Github?</a>
                    </li>
                    <li>
                        <a>Enterprise</a>
                    </li>
                    <li>
                        <a>Explore</a>
                    </li>
                    <li>
                        <a>Marketplace</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                </ul>
            </nav>
            <div className="Search-bar">
                <input type="text" placeholder="Search Github"></input>
            </div>
        </header>
    )
}

export default Navbar;
