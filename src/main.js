
import React from 'react';
import main from './main.png'; // Tell webpack this JS file uses this image
import "./main.css"
console.log(main);

function Main() {
  // Import result is the URL of your image
return <img className="main" src={main} alt='' />;
}

export default Main;