import {
  FaChevronLeft,
  FaSpotify,
  FaAmazon,
  FaMusic,
  FaYoutube,
} from "react-icons/fa";
import "./index.css";

export default function App() {
  function handleInput(e) {
    if (e.target.value === "spotify") {
      window.open("https://open.spotify.com/");
    } else if (e.target.value === "yt-music") {
      window.open("https://music.youtube.com/");
    } else if (e.target.value === "amazon") {
      window.open("https://music.amazon.com/");
    } else if (e.target.value === "yt") {
      window.open("https://youtube.com/");
    }
  }

  return (
    <>
      <header className="app-header">
        <button id="previous">
          <FaChevronLeft size={25} color="#fff" />
        </button>
      </header>

      <div className="app">
        <div id="cover-container">
          <div id="cover"></div>
          <p id="playlist-name">Nome da playlist</p>
        </div>

        <div className="straming-options">
          <p>Gostaria de ouvir por onde?</p>
          <button value="spotify" onClick={(e) => handleInput(e, "value")}>
            <FaSpotify size={20} className="icon" />
            Spotify
          </button>
          <button value="yt-music" onClick={(e) => handleInput(e, "value")}>
            <FaMusic size={20} className="icon" />
            Youtube Music
          </button>
          <button value="amazon" onClick={(e) => handleInput(e, "value")}>
            <FaAmazon size={20} className="icon" />
            Amazon Music
          </button>
          <button value="yt" onClick={(e) => handleInput(e, "value")}>
            <FaYoutube size={20} className="icon" />
            Youtube
          </button>
        </div>
      </div>
    </>
  );
}
