import { useState, useEffect } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SongsDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [song, setSongs] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${index}`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate, API]);

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${index}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((e) => console.error(e));
  };

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <h1>Songs Details</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><span className="fw-bold">Name: </span>{song.name}</li>
            <li className="list-group-item"><span className="fw-bold">Artist: </span>{song.artist}</li>
            <li className="list-group-item"><span className="fw-bold">Album: </span>{song.album}</li>
            <li className="list-group-item"><span className="fw-bold">Time: </span>{song.time}</li>
            <li className="list-group-item"><span className="fw-bold">Favorite?: </span>{song.is_favorite ? "True" : "False"}</li>
          </ul>
          <div>
          {" "}
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/songs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
  
  export default SongsDetails;
  