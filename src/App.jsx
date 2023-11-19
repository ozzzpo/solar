import PlanetCanvas from "./components/PlanetCanvas";
import { Mercury } from "./components/Mercury";
import { Venus } from "./components/Venus";
import { Earth } from "./components/Earth";

import { Mars } from "./components/Mars";
import { Jupiter } from "./components/Jupiter";
import { Saturn } from "./components/Saturn";
import { Uranus } from "./components/Uranus";
import { Neptune } from "./components/Neptune";
import { Sun } from "./components/Sun";
import { useState } from "react";

export default function App() {
  const [choosedPlanet, setChoosedPlanet] = useState(null);

  function handleClick(event, name, camera, cameraControlsRef) {
    console.log(cameraControlsRef.current);
    if (event.detail == 2) {
      setChoosedPlanet((choosed) => (name === choosed ? null : name));
      console.log(choosedPlanet);
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">SOLAR</h1>
      </header>
      <div className="planets">
        <PlanetCanvas
          canvasWidth={"1000px"}
          canvasHeight={"1000px"}
          intensity={2}
          name={"sun"}
        >
          <Sun />
        </PlanetCanvas>

        <PlanetCanvas
          canvasWidth={"300px"}
          canvasHeight={"230px"}
          name={"mercury"}
          onClick={handleClick}
          choosed={choosedPlanet}
        >
          <Mercury />
        </PlanetCanvas>

        <PlanetCanvas
          canvasWidth={"500px"}
          canvasHeight={"300px"}
          name={"venus"}
          onClick={handleClick}
          choosed={choosedPlanet}
        >
          <Venus />
        </PlanetCanvas>

        <PlanetCanvas
          canvasWidth={"500px"}
          canvasHeight={"300px"}
          intensity={1}
          name={"earth"}
          onClick={handleClick}
          choosed={choosedPlanet}
        >
          <Earth />
        </PlanetCanvas>

        <PlanetCanvas
          canvasWidth={"500px"}
          canvasHeight={"300px"}
          name={"mars"}
          onClick={handleClick}
          choosed={choosedPlanet}
        >
          <Mars />
        </PlanetCanvas>

        <PlanetCanvas
          canvasWidth={"720px"}
          canvasHeight={"820px"}
          name={"jupiter"}
          onClick={handleClick}
          choosed={choosedPlanet}
        >
          <Jupiter />
        </PlanetCanvas>

        <PlanetCanvas
          canvasWidth={"759px"}
          canvasHeight={"700px"}
          name={"saturn"}
          onClick={handleClick}
          choosed={choosedPlanet}
        >
          <Saturn />
        </PlanetCanvas>

        <PlanetCanvas
          canvasWidth={"600px"}
          canvasHeight={"600px"}
          name={"uranus"}
          onClick={handleClick}
          choosed={choosedPlanet}
        >
          <Uranus />
        </PlanetCanvas>

        <PlanetCanvas
          canvasWidth={"500px"}
          canvasHeight={"500px"}
          name={"neptune"}
          onClick={handleClick}
          choosed={choosedPlanet}
        >
          <Neptune />
        </PlanetCanvas>
      </div>
      <div className="scroll-zone">
        <h3>
          Scroll here <br />
          <span>Double click on planet to see more...</span>
        </h3>
      </div>
    </div>
  );
}
