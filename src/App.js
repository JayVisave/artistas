import React from 'react';
import logo from './logo.svg';
// import './App.css';
import ProfileDescription from './components/ProfileDescription';
import ProjectCollaborators from './components/ProjectCollaborators';
import Header from './components/Header';
import Footer from './components/Footer';
import ArtistasNav from './components/ArtistasNav';

function App() {
  return (
    
    <div className="App">
      {/* <Header/> */}
      <ArtistasNav/>
      <ProjectCollaborators/>
      {/* <ProfileDescription/> */}
       <Footer/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
