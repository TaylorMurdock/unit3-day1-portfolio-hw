import React from "react";
import SkySense1 from "../screenshots/SkySense1.png";
import Cruxtrack1 from "../screenshots/CruxTrack1.png";
import CruxTrack2 from "../screenshots/CruxTrack2.png";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="ProjectCard" style={{ border: "3px solid black" }}>
        <h3>SkySense</h3>
        <p>
          Skysense is a weather app that allows users to access weather
          information for their desired location. Whether you want to check the
          current weather or plan ahead for the next few days or even weeks,
          Skysense has you covered. The app utilizes the Weather API provided by
          OpenWeatherMap to fetch accurate and up-to-date weather data.
        </p>
        <div>
          <a
            href="https://github.com/TaylorMurdock/wk5Project1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://skysense.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed Site
          </a>
        </div>
        <img src={SkySense1} alt="Screenshot of SkySense" />
      </div>

      <div className="ProjectCard" style={{ border: "3px solid black" }}>
        <h3>CruxTrack</h3>
        <p>
          CruxTrack is a web application designed to help rock climbers track
          and manage their climbing routes. With CruxTrack, climbers can create
          an account, log their climbing routes, and keep a record of their
          progress and achievements. The app provides a simple and intuitive
          interface for climbers to manage their routes effectively.
        </p>
        <div>
          <a
            href="https://github.com/TaylorMurdock/CruxTrack"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://cruxtrack.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed Site
          </a>
        </div>
        <img src={Cruxtrack1} alt="Screenshot 1 of CruxTrack" />
        <img src={CruxTrack2} alt="Screenshot 2 of CruxTrack" />
      </div>
    </div>
  );
};

export default Projects;
