import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root')); // the html element with the id 'root' is the root of the DOM tree. It is located in a div tag in body. This element is not created by the user.
root.render(myFirstElement);