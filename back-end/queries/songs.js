const db = require("../db/dbConfig.js");

const getAllSongs = async (search) => {
  const {order, is_favorite } = search
    try {
      if(order === "asc" || order === "desc"){
        switch (order) {
          case "asc":
        const allSongsAsc = await db.any("SELECT * FROM songs ORDER BY name asc");
        return allSongsAsc;
          case "desc":
        const allSongsDesc = await db.any("SELECT * FROM songs ORDER BY name desc");
        return allSongsDesc;
        }
      } else if(is_favorite === "true" || is_favorite === "false"){
        const allSongs = await db.any("SELECT * FROM songs WHERE is_favorite = $1", is_favorite);
        return allSongs;
      } else {
        const allSongs = await db.any("SELECT * FROM songs");
      return allSongs;
      }
    } catch (error) {
      return error;
    }
  };

// ONE song
const getSong = async (id) => {
    try {
      const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
      return oneSong;
    } catch (error) {
      return error;
    }
  };

// CREATE
const createSong = async (song) => {
  const {name, artist, album, time, is_favorite } = song
    try {
      const newSong = await db.one(
        "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [name, artist, album, time, is_favorite]
      );
      return newSong;
    } catch (error) {
      return error;
    }
  };
  
// Delete
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};
    
//Update
const updateSong = async (id, song) => {
  const {name, artist, album, time, is_favorite } = song
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 where id=$6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};
    
  module.exports = {
    getAllSongs,
    createSong,
    getSong,
    updateSong,
    deleteSong,
  };