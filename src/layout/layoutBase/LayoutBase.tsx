import { Div, Tela } from "./style";

interface ILayoutBaseProps {
  children: React.ReactNode;
}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children }) => {
  return (
    <Div>
      <Tela>{children}</Tela>
    </Div>
  );
};
