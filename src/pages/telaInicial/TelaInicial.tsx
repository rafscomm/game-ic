import { useNavigate } from "react-router-dom";
import { LayoutBase } from "../../layout";
import { StartButton } from "./style";
export const TelaIncial: React.FC = () => {
  const navigate = useNavigate();

  return (
    <LayoutBase>
      <StartButton onClick={() => navigate("/levels")}></StartButton>
    </LayoutBase>
  );
};
