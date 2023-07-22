import Song from "./Song";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
      axios
      .get(`${API}/songs`)
      .then((response) => {
          setSongs(response.data)})
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <h1>Songs</h1>
          {songs.map(song => {
            return <Song key={song.id} song={song} />;
          })}
      </div>
    </div>
  );
}

export default Songs;
