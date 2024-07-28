import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../../../modules/landings/pages/Landing";

export const LandingPageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
