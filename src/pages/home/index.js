import "./home.css";
import CoverContainer from "../../components/cover-container";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="app-header"></header>

      <p>Home</p>

      <div className="playlists-container">
        <Link to="../playlist">
          <CoverContainer />
        </Link>
      </div>
    </>
  );
}
