import Planet from "./Planet";
import PlanetCanvas from "./PlanetCanvas";

export default function Planets({}) {
  return (
    <div>
      <PlanetCanvas>
        <Planet></Planet>
      </PlanetCanvas>
    </div>
  );
}
