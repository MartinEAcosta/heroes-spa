import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage, DcPage } from "../pages";
import { Navbar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          
          <Route path="search" element={<DcPage />} />
          <Route path="hero" element={<DcPage />} />

          {/* Search, hero by id */}

          {/* En caso de entrar a una ruta no especificada va marvel */}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
