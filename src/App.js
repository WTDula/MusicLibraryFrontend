import React, { useState, useEffect} from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import AddButton from "./Components/AddButton/AddButton";
import SearchBar from "./Components/SearchBar/SearchBar";
import "./App.css"

//import './App.css';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs()
  }, [])

  async function getAllSongs(){
    let response = await axios.get("http://127.0.0.1:8000/music/")
    setSongs(response.data)
  }

  async function createSong(newSong){
        let response = await axios.post("http://127.0.0.1:8000/music/", newSong)
        if(response.status === 201){
          await getAllSongs()
        }
  }

  return (
    <div className="app">
      <h1>Music Library</h1>
      <SearchBar songs={songs} setSongs={setSongs}/>
      <MusicTable songs={songs} getAllSongs={getAllSongs}/>
      <h2>Add a Song with the form below</h2>
      <AddButton createSong={createSong}/>
    </div>
  );
}

export default App;
