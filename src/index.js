import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = (
// The HTML code must be wrapped in ONE top level element. 
// So if you like to write two paragraphs, you must put them inside a parent element, 
// like a div element.Alternatively, you can use a "fragment" to wrap multiple lines. 
// This will prevent unnecessarily adding extra nodes to the DOM.
// A fragment looks like an empty HTML tag: <></> 
<>    
    <h1>Hi, welcome to my sandbox!</h1>
    <div className="intro-text">
      I am a Software Engineer in the renewable energy sector. 
      Starting in 2023 I continue to be a Software Engineer in part-time 3 days/week.
      The rest of my time I can spend for my own projects or support your projects as a Freelancer.

      On tp-publicsandbox I want to try out the "WebDev-things" I learned and also link other projects I work on.
    </div>
    <img src="https://media.licdn.com/dms/image/C4E03AQHMV3LhLDcxRA/profile-displayphoto-shrink_800_800/0/1626428291928?e=2147483647&v=beta&t=d9_gewPgcY6lEr4P1umFjUIsc0IdriiR7jqNCz0THYs" alt="profile picture" className="profile-picture"/>
    <h2>My Projects</h2>
    <div className="project-preview">
      <a href="https://tp-ecommerce.vercel.app/">
        <button className="project-preview-button">Go there</button>
        <iframe src="https://tp-ecommerce.vercel.app/" width="400" height="400"></iframe>
      </a>
    </div>
</>
);

const root = ReactDOM.createRoot(document.getElementById('root')); // the html element with the id 'root' is the root of the DOM tree. It is located in a div tag in body. (check out public/index.html)
root.render(myFirstElement);


