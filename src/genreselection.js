import React from "react";
import "./styles.css";

const genres = [
  { src: "/hiphop.png", name: "Hip Hop" },
  { src: "/trap.png", name: "Trap" },
  { src: "/drill.png", name: "Drill" },
  { src: "/r&b.png", name: "R & B" },
  { src: "/latin.png", name: "Latin" },
  { src: "/acoustic.png", name: "Acoustic" },
  { src: "/rock.png", name: "Rock" },
  { src: "/ambient.png", name: "Ambient" },
  { src: "/beat.png", name: "Beat" },
  { src: "/drumbass.png", name: "Drums n Bass" },
  { src: "/electrodance.png", name: "Electro & Dance" },
  { src: "/funk.png", name: "Funk" },
  { src: "/house.png", name: "House" },
  { src: "/techno.png", name: "Techno & Transe" },
  { src: "/citypop.png", name: "City Pop" },
  { src: "/pop.png", name: "Pop" },
  { src: "/lofi.png", name: "Lofi-Hip Hop" },
  { src: "/world.png", name: "World" },
  { src: "/classical.png", name: "Classical" },
  { src: "/country.png", name: "Country" },
  { src: "/electronica.png", name: "Electronica" },
  { src: "/tropical.png", name: "Tropical" },
  { src: "/afrobeat.png", name: "Afrobeats" },
  { src: "/dancehall.png", name: "Dancehall" },
  { src: "/reggae.png", name: "Reggae" },
  { src: "/phonk.png", name: "Phonk" },
];

const GenreSelection = ({ setGenre }) => {
  return (
    <div className="genre">
      <label htmlFor="genre-selection">Genre</label>
      <div id="genre-selection" className="genre-images">
        {genres.map((genre, index) => (
          <div key={index}>
            <img
              src={genre.src}
              alt={genre.name}
              className="genre-item img"
              onClick={() => setGenre(genre.name)}
            />
            <p className="genre-title">{genre.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSelection;
