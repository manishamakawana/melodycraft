import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { DownloadMultipleAudio } from "./DownloadMultipleAudio";

function App() {
  const [songTitle, setSongTitle] = useState("");
  const [chooseanoption, setChooseanoption] = useState("");
  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");
  const [tempo, setTempo] = useState(50); // Default tempo
  const [lyrics, setLyrics] = useState(""); // New state for lyrics
  const [previewData, setPreviewData] = useState(null);
  
  const handleCreate = () => {
    // Set the preview data when the "Create" button is clicked
    setPreviewData({
      songTitle,
      chooseanoption,
      genre,
      mood,
      tempo,
      lyrics,
      image: genreImages[genre] || moodImages[mood] || "default.jpg", // Use a dummy image
      audio: "song.mp3", // Use a placeholder audio
    });
  };

  const handleLyricsGenerate = () => {
    // Sample lyrics generation logic (replace with dynamic generation if available)
    setLyrics("This is a sample of generated lyrics for your song!");
  };

  return (
    <div className="container">
      <NavBar/>
      <div className="separator"></div>
      <div className="content">
        <MusicGenerator
          songTitle={songTitle}
          setSongTitle={setSongTitle}
          setChooseanoption={setChooseanoption}
          setGenre={setGenre}
          setMood={setMood}
          tempo={tempo}
          setTempo={setTempo}
          lyrics={lyrics}
          setLyrics={setLyrics}
          handleLyricsGenerate={handleLyricsGenerate}
          handleCreate={handleCreate}
        />
        <MusicPreview previewData={previewData} />
      </div>
    </div>
  );
}

function NavBar() {
  return ( 
   <nav>
      <a href="#">
        <img
          src="https://i.ibb.co/zZT1L6T/MC-logo.png"
          alt="MC-logo"
          className="logo"
        />
      </a>
      <span className="nme">
        <strong>MelodyCraft</strong>
      </span>
      <ul class="nav nav-tabs">
      <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">MusicGenerator</a>
      </li>
      <li class="nav-item">
      <a>Resource</a>
      </li>
      <li class="nav-item">
      <a>About us</a>
      </li>
      <li class="nav-item">
      <a>Sing up</a>
      </li>
      </ul>
    </nav>
  );
}

function MusicGenerator({
  songTitle,
  setSongTitle,
  setChooseanoption,
  setGenre,
  setMood,
  tempo,
  setTempo,
  lyrics,
  setLyrics,
  handleLyricsGenerate,
  handleCreate,
}) {
  return (
    <div className="music-generator">
      <h2>Music Generator</h2>
      <label>Song Title</label>
      <input
        type="text"
        placeholder="Enter Song Title"
        className="transparent-input1"
        value={songTitle}
        onChange={(e) => setSongTitle(e.target.value)}
      />

       
      <label htmlFor="lyrics">Lyrics</label>
      <div>
      <textarea
        placeholder="Enter Lyrics or Generate..."
        className="transparent-input"
        value={lyrics}
        onChange={(e) => setLyrics(e.target.value)}
      ></textarea>
      </div>
      <button className="lyrics-btn" onClick={handleLyricsGenerate}>
        Generate Lyrics
      </button>

      <label>Choose an option:</label>
       <div className="sel">
        <div className="sel1">
       <p onClick={() => setChooseanoption("Vocal")}>Vocal</p></div>
       <div className="sel1"><p onClick={() => setChooseanoption("Instrument")}>Instrument</p></div>
       </div>


      <label>Genre</label>
      <div className="genre">
        <div className="genre-images">
          <div>
            <img
            src="hiphop.png"
            alt="Genre 1"
            className="genre-item img"
            onClick={() => setGenre("Hip Hop")}
          />
          <p className="genre-title">Hip Hop</p>
          </div>
          <div>
          <img
            src="trap.png"
            alt="Genre 2"
            className="genre-item img"
            onClick={() => setGenre("Trap")}
          />
          <p className="genre-title">Trap</p>
          </div>
          <div>
          <img
            src="drill.png"
            alt="Genre 3"
            className="genre-item img"
            onClick={() => setGenre("Drill")}
          />
           <p className="genre-title">Drill</p>
          </div>
          <div>
          <img
            src="r&b.png"
            alt="Genre 4"
            className="genre-item img"
            onClick={() => setGenre("R & B")}
          />
          <p className="genre-title">R&B</p>
          </div>
          <div>
          <img
            src="latin.png"
            alt="Genre 5"
            className="genre-item img"
            onClick={() => setGenre("Latin")}
          />
          <p className="genre-title">Latin</p>
          </div>
          <div>
          <img
            src="acoustic.png"
            alt="Genre 6"
            className="genre-item img"
            onClick={() => setGenre("Acoustic")}
          />
          <p className="genre-title">Acoustic</p>
          </div>
          <div>
          <img
            src="rock.png"
            alt="Genre 7"
            className="genre-item img"
            onClick={() => setGenre("Rock")}
          />
          <p className="genre-title">Rock</p>
          </div>
          <div>
          <img
            src="ambient.png"
            alt="Genre 8"
            className="genre-item img"
            onClick={() => setGenre("Ambient")}
          />
          <p className="genre-title">Ambient</p>
          </div>
          <div>
          <img
            src="beat.png"
            alt="Genre 9"
            className="genre-item img"
            onClick={() => setGenre("Beat")}
          />
          <p className="genre-title">Beat</p>
          </div>
          <div>
          <img
            src="drumbass.png"
            alt="Genre 10"
            className="genre-item img"
            onClick={() => setGenre("Drums n Bass")}
          />
          <p className="genre-title">Drums n Bass</p>
          </div>
          <div>
          <img
            src="electrodance.png"
            alt="Genre 11"
            className="genre-item img"
            onClick={() => setGenre("Electro & Dance")}
          />
          <p className="genre-title">Electro & Dance</p>
          </div>
          <div>
          <img
            src="funk.png"
            alt="Genre 12"
            className="genre-item img"
            onClick={() => setGenre("Funk")}
          />
          <p className="genre-title">Funk</p>
          </div>
          <div>
          <img
            src="house.png"
            alt="Genre 13"
            className="genre-item img"
            onClick={() => setGenre("House")}
          />
          <p className="genre-title">House</p>
          </div>
          <div>
          <img
            src="techno.png"
            alt="Genre 14"
            className="genre-item img"
            onClick={() => setGenre("Techno & Transe")}
          />
          <p className="genre-title">Techno & Transe</p>
          </div>
          <div>
          <img
            src="citypop.png"
            alt="Genre 15"
            className="genre-item img"
            onClick={() => setGenre("City Pop")}
          />
          <p className="genre-title">City Pop</p>
          </div>
          <div>
          <img
            src="pop.png"
            alt="Genre 16"
            className="genre-item img"
            onClick={() => setGenre("Pop")}
          />
          <p className="genre-title">Pop</p>
          </div>
          <div>
          <img
            src="lofi.png"
            alt="Genre 17"
            className="genre-item img"
            onClick={() => setGenre("Lofi-Hip Hop")}
          />
          <p className="genre-title">Lofi-Hip Hop</p>
          </div>
          <div>
          <img
            src="world.png"
            alt="Genre 18"
            className="genre-item img"
            onClick={() => setGenre("World")}
          />
          <p className="genre-title">World</p>
          </div>
          <div>
          <img
            src="classical.png"
            alt="Genre 19"
            className="genre-item img"
            onClick={() => setGenre("Classical")}
          />
          <p className="genre-title">Classical</p>
          </div>
          <div>
          <img
            src="country.png"
            alt="Genre 20"
            className="genre-item img"
            onClick={() => setGenre("Country")}
          />
          <p className="genre-title">Country</p>
          </div>
          <div>
          <img
            src="electronica.png"
            alt="Genre 21"
            className="genre-item img"
            onClick={() => setGenre("Electronica")}
          />
          <p className="genre-title">Electronica</p>
          </div>
          <div>
          <img
            src="tropical.png"
            alt="Genre 22"
            className="genre-item img"
            onClick={() => setGenre("Tropical")}
          />
          <p className="genre-title">Tropical</p>
          </div>
          <div>
          <img
            src="afrobeat.png"
            alt="Genre 23"
            className="genre-item img"
            onClick={() => setGenre("Afrobeats")}
          />
          <p className="genre-title">Afrobeats</p>
          </div>
          <div>
          <img
            src="dancehall.png"
            alt="Genre 24"
            className="genre-item img"
            onClick={() => setGenre("Dancehall")}
          />
          <p className="genre-title">Dancehall</p>
          </div>
          <div>
          <img
            src="reggae.png"
            alt="Genre 25"
            className="genre-item img"
            onClick={() => setGenre("Reggae")}
          />
          <p className="genre-title">Reggae</p>
          </div>
          <div>
          <img
            src="phonk.png"
            alt="Genre 26"
            className="genre-item img"
            onClick={() => setGenre("Phonk")}
          />
          <p className="genre-title">Phonk</p>
          </div>
        </div>
      </div>



      <label>Mood</label>
      <div className="mood">
        <div className="mood-images">
          <div>
          <img src="happy.png" alt="Mood 1" className="mood-item img" onClick={() => setMood("Happy")} />
          <p className="mood-title">Happy</p>
          </div>
          <div>
          <img src="sad.png" alt="Mood 2" className="mood-item img" onClick={() => setMood("Sad")} />
          <p className="mood-title">Sad</p>
          </div>
          <div>
          <img src="exited.png" alt="Mood 3" className="mood-item img" onClick={() => setMood("Exited")} />
          <p className="mood-title">Exited</p>
          </div>
          <div>
          <img src="glamorous.png" alt="Mood 4" className="mood-item img" onClick={() => setMood("Glamorous")} />
          <p className="mood-title">Glamorous</p>
          </div>
          <div>
          <img src="angry.png" alt="Mood 5" className="mood-item img" onClick={() => setMood("Angry")} />
          <p className="mood-title">Angry</p>
          </div>
          <div>
          <img src="scary.png" alt="Mood 6" className="mood-item img" onClick={() => setMood("Scary")} />
          <p className="mood-title">Scary</p>
          </div>
          <div>
          <img src="epic.png" alt="Mood 7" className="mood-item img" onClick={() => setMood("Epic")} />
          <p className="mood-title">Epic</p>
          </div>
          <div>
          <img src="dark.png" alt="Mood 8" className="mood-item img" onClick={() => setMood("Dark")} />
          <p className="mood-title">Dark</p>
          </div>
          <div>
          <img src="sentimental.png" alt="Mood 9" className="mood-item img" onClick={() => setMood("Sentimental")} />
          <p className="mood-title">Sentimental</p>
          </div>
          <div>
          <img src="hope.png" alt="Mood 10" className="mood-item img" onClick={() => setMood("Hopeful")} />
          <p className="mood-title">Hopeful</p>
          </div>
          <div>
          <img src="busy.png" alt="Mood 11" className="mood-item img" onClick={() => setMood("Busy")} />
          <p className="mood-title">Busy</p>
          </div>
          <div>
          <img src="romentic.png" alt="Mood 12" className="mood-item img" onClick={() => setMood("Romentic")} />
          <p className="mood-title">Romentic</p>
          </div>
          <div>
          <img src="funny.png" alt="Mood 13" className="mood-item img" onClick={() => setMood("Funny")} />
          <p className="mood-title">Funny</p>
          </div>
          <div>
          <img src="mysterious.png" alt="Mood 14" className="mood-item img" onClick={() => setMood("Mysterious")} />
          <p className="mood-title">Mysterious</p>
          </div>
          <div>
          <img src="alegant.png" alt="Mood 15" className="mood-item img" onClick={() => setMood("Alegant")} />
          <p className="mood-title">Alegant</p>
          </div>
          <div>
          <img src="dreamy.png" alt="Mood 16" className="mood-item img" onClick={() => setMood("Dreamy")} />
          <p className="mood-title">Dreamy</p>
          </div>
          <div>
          <img src="euphoric.png" alt="Mood 17" className="mood-item img" onClick={() => setMood("Euphoric")} />
          <p className="mood-title">Euphoric</p>
          </div>
          <div>
          <img src="fear.png" alt="Mood 18" className="mood-item img" onClick={() => setMood("Fear")} />
          <p className="mood-title">Fear</p>
          </div>
          <div>
          <img src="restless.png" alt="Mood 19" className="mood-item img" onClick={() => setMood("Restless")} />
          <p className="mood-title">Restless</p>
          </div>
          <div>
          <img src="peaceful.png" alt="Mood 20" className="mood-item img" onClick={() => setMood("Peaceful")} />
          <p className="mood-title">Peaceful</p>
          </div>
          <div>
          <img src="smooth.png" alt="Mood 21" className="mood-item img" onClick={() => setMood("Smooth")} />
          <p className="mood-title">Smooth</p>
          </div>
          <div>
          <img src="running.png" alt="Mood 22" className="mood-item img" onClick={() => setMood("Running")} />
          <p className="mood-title">Running</p>
          </div>
          <div>
          <img src="sexy.png" alt="Mood 23" className="mood-item img" onClick={() => setMood("Sexy")} />
          <p className="mood-title">Sexy</p>
          </div>
          <div>
          <img src="suspense.png" alt="Mood 24" className="mood-item img" onClick={() => setMood("Suspense")} />
          <p className="mood-title">Suspense</p>
          </div>
        </div>
      </div>



      <label>Tempo</label>
      <div className="tempo">
        <input
          type="range"
          min="0"
          max="100"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        />
        <div className="tempo-values">
          <div className="tempoo">
          <span>Slow</span>
          <span>Mid</span>
          <span>Fast</span>
          </div>
        </div>
      </div>

      <button className="create-btn" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
}

function MusicPreview({ previewData }) {
  if (!previewData) {
    return <div className="music-preview">No preview available</div>;
  }
  const [selectedFormat, setSelectedFormat] = useState("mp3","WaV","aiff");


  return (
    <div className="music-preview">
      <div className="preview-content">
        <img
          src={previewData.image}
          alt="Preview"
          className="preview-image"
        />
        <p>{previewData.songTitle || "Untitled"}</p>
        <audio controls>
          <source src={previewData.audio} type="audio/mp3" />
        </audio>

      <div>      
      <DownloadMultipleAudio />
      </div>


        <p>option: {previewData.chooseanoption}</p>
        <p>Genre: {previewData.genre}</p>
        <p>Mood: {previewData.mood}</p>
        <p>Tempo: {previewData.tempo}</p>
        <p>Lyrics:</p>
        <p>{previewData.lyrics}</p>
      </div>
    </div>
  );
}



const genreImages = {
  "Genre 1": "hiphop.png",
  "Genre 2": "trap.png",
  "Genre 3": "drill.png",
  "Genre 4": "r&b.png",
  "Genre 5": "latin.png",
  "Genre 6": "acoustic.png",
  "Genre 7": "rock.png",
  "Genre 8": "ambient.png",
  "Genre 9": "beat.png",
  "Genre 10": "drumbass.png",
  "Genre 11": "electrodance.png",
  "Genre 12": "funk.png",
  "Genre 13": "house.png",
  "Genre 14": "techno.png",
  "Genre 15": "citypop.png",
  "Genre 16": "pop.png",
  "Genre 17": "lofi.png",
  "Genre 18": "woeld.png",
  "Genre 19": "classical.png",
  "Genre 20": "country.png",
  "Genre 21": "electronica.png",
  "Genre 22": "tropical.png",
  "Genre 23": "afrobeat.png",
  "Genre 24": "dancehall.png",
  "Genre 25": "reggaer.png",
  "Genre 26": "phonksss.png",
};

const moodImages = {
  "Mood 1": "happy.png",
  "Mood 2": "sad.png",
  "Mood 3": "exited.png",
  "Mood 4": "glamorous.png",
  "Mood 5": "angry.png",
  "Mood 6": "scary.png",
  "Mood 7": "epic.png",
  "Mood 8": "dark.png",
  "Mood 9": "sentimental.png",
  "Mood 10": "hope.png",
  "Mood 11": "busy.png",
  "Mood 12": "romentic.png",
  "Mood 13": "funny.png",
  "Mood 14": "mysterious.png",
  "Mood 15": "alegant.png",
  "Mood 16": "dreamy.png",
  "Mood 17": "euphoric.png",
  "Mood 18": "fear.png",
  "Mood 19": "restless.png",
  "Mood 20": "peaceful.png",
  "Mood 21": "smooth.png",
  "Mood 22": "running.png",
  "Mood 23": "sexy.png",
  "Mood 24": "suspense.png",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;


