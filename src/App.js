import React from "react";
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";
import logo from './logo.svg';
// import './App.css';
import ProfileDescription from './Components/ProfileDescription';
import ProjectCollaborators from './Components/ProjectCollaborators';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ArtistasNav from './Components/ArtistasNav';

function App() {
  return (
    
    <div className="App">
      {/* <Header/> */}
      <ArtistasNav/>
      <ProjectCollaborators/>
      <UserProvider>
      <Application />
    </UserProvider>
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

// function App() {
//   return (
//     <UserProvider>
//       <Application />
//     </UserProvider>
);
 }
export default App;