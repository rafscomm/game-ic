import { Navigate, Route, Routes } from "react-router-dom";
import { LevelOne, TelaIncial } from "../pages";
import { LevelSelect } from "../pages/selectLevel";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"menu-principal"} />} />
      <Route path="menu-principal" element={<TelaIncial />} />
      <Route path="levels" element={<LevelSelect />} />
      <Route path="playing" element={<LevelOne />} />
    </Routes>
  );
};
