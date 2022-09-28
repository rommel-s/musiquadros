import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Playlist from "./pages/playlist";

function RoutesApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default RoutesApp;
