import { useState } from "react";
import { Div, DivOpt, DivQuest, Opt1, Question } from "./styles";

interface IPropsQuestionBox {
  questao: string;
  opt1?: string;
  opt2?: string;
  opt3?: string;
  opt4?: string;
  certo: string;
}

export const QuestionBox: React.FC<IPropsQuestionBox> = ({
  questao,
  opt1,
  opt2,
  opt3,
  opt4,
  certo,
}) => {
  const [correct, setCorrect] = useState(false);
  return (
    <Div>
      <DivQuest>
        <Question>{questao}</Question>
      </DivQuest>
      <DivOpt>
        <Opt1></Opt1>
      </DivOpt>
    </Div>
  );
};
