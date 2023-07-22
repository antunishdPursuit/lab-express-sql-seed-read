import { Link } from "react-router-dom";
function Song({song}) {
    return (
      <div >
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">{song.time}</li>
          <li className="list-group-item"><Link to={`/songs/${song.id}`}>{song.name}</Link></li>
          <li className="list-group-item">{song.album}</li>
        </ul>
      </div>
    );
  }
  
  export default Song;
  