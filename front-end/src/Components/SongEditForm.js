import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function SongsEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  useEffect(() => {
    axios
      .get(`${API}/songs/${index}`)
      .then((response) => {
        console.log(response.data.is_favorite)
        setSong(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };
  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  }
  const updateSong = () => {
    
    axios
      .put(`${API}/songs/${index}`, song)
      .then((response) => {
        setSong(response.data);
        navigate(`/songs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
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
                    onChange={handleCheckboxChange}
                    className="form-check-input" 
                    checked={song.is_favorite}
                    />
                <label className="form-check-label" htmlFor="is_favorite">Is it Your favorite?</label>
            </div>

            <br></br>
            <input type="submit" />
            </form>
            <Link to={`/songs/${index}`}>
                    <button>Nevermind!</button>
            </Link>
        </div>
      </div>
    );
  }
  
  export default SongsEditForm;
  