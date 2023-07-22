import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function SongsNewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });
  
  const addSong = (newsong) => {
    axios
    .post(`${API}/songs`, newsong)
    .then(
    (res) => {
    navigate(`/songs`);
    })
    .catch((c) => console.error("catch", c));
  };

  const handleTextChange = (event) => {
    console.log("ID:")
    console.log(event.target.id)
    console.log("value:")
    console.log(event.target.value)
    setSong({ ...song, [event.target.id]: event.target.value });
  };
  const handleCheckboxChange = () => {
    console.log(song)
    setSong({ ...song, is_favorite: !song.is_favorite });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song)
  };

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <h1>New Song</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating">
                <input
                id="name" 
                type="text" 
                value={song.name}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="name"
                required
                />
                <label htmlFor="name">Name:</label>
            </div>
            <br></br>
            <div className="form-floating">
                <input
                id="artist" 
                type="text" 
                value={song.artist}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="artist:"
                required
                />
                <label htmlFor="artist">artist:</label>
            </div>
            <br></br>
            <div className="form-floating">
                <input
                id="album" 
                type="text" 
                value={song.album}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="album"
                required
                />
                <label htmlFor="album">album:</label>
            </div>
            <br></br>
            <div className="form-floating">
                <input
                id="time" 
                type="number" 
                value={song.time}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="Year:"
                required
                />
                <label htmlFor="time">Year:</label>
            </div>
            <br></br>
            <div className="form-check form-switch">
                <input 
                id="is_favorite"
                type="checkbox" 
                value={song.is_favorite}
                onChange={handleCheckboxChange}
                className="form-check-input" 
                />
                <label className="form-check-label" htmlFor="is_favorite">Is it Your favorite?</label>
            </div>
            <br></br>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
  
  export default SongsNewForm;
  