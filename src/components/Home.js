import React from "react";
import { username, city, image } from '../data/user'; // Corrected import statement

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
      <img src={image} alt="Owner" />
    </div>
  );
}

export default Home;

