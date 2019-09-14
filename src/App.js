import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import './components-css/Navbar.css';
import Signup from './components/Signup';
import './components-css/Signup.css';
import Homedevelopers from './components/Homedevelopers.js';
import './components-css/Homedevelopers.css';
import Enterprise from './components/Enterprise';
import './components-css/Enterprise.css';
import Githubactions from './components/Githubactions';
import './components-css/Githubaction.css';
import Bussiness from './components/Bussiness';
import './components-css/Bussiness.css';
import Worktogether from './components/Worktogether';
import './components-css/Worktogether.css';
import Bettercode from './components/Bettercode';
import './components-css/Bettercode.css';
import Leadingcompanies from './components/Leadingcompanies';
import './components-css/Leadingcompanies.css';
import Administration from './components/Administration';
import './components-css/Administration.css';
import Integration from './components/Integration';
import './components-css/Integration.css';
import Footer from './components/Footer';
import './components-css/Footer.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Enterprise />
      <Githubactions />
      <Bussiness />
      <Worktogether />
      <Bettercode />
      <Leadingcompanies />
      <Administration />
      <Integration />
      <Homedevelopers />
      <Footer />
      
    </div>
  );
}

export default App;