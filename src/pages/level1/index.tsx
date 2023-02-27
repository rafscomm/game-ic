import { Marker, TileLayer, MapContainer, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Principal } from "../selectLevel/styles";
import { QuestionBox } from "../../components/questionsBox";
import { PinRed } from "./styles";

export const LevelOne = () => {
  const LeafIcon = L.Icon.extend({
    options: {},
  });
  return (
    <>
      <Principal>
        <QuestionBox
          questao="Tendo como referência o ponto azul, qual das marcações esta a mais leste dele?"
          certo="opt3"
        ></QuestionBox>
        <MapContainer
          center={[0, 0]}
          zoom={3}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[0, 0]}></Marker>
          <Circle center={[51, 51]} radius={400}></Circle>
        </MapContainer>
      </Principal>
    </>
  );
};
