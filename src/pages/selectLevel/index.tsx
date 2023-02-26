import { useNavigate } from "react-router-dom";
import { CardMain, Cards, H1, H2, Principal, Tela } from "./styles";

export const LevelSelect: React.FC = () => {
  const route = useNavigate();
  return (
    <Principal>
      <Tela>
        <CardMain>
          <Cards onClick={() => route("/playing")}>
            <H1>LEVEL</H1>
            <H2>1</H2>
          </Cards>
          <Cards>
            <H1>LEVEL</H1>
            <H2>2</H2>
          </Cards>
          <Cards>
            <H1>LEVEL</H1>
            <H2>3</H2>
          </Cards>
        </CardMain>
      </Tela>
    </Principal>
  );
};
