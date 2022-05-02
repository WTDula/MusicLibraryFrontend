import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchField, setSearchField] = useState("")
    

    function handleChange(event){
        event.preventDefault()
        let filteredSongs = props.songs.filter((song) => {
            if(searchField === ""){
                return props.songs
            }
            else if(
                song.title.toLowerCase().includes(searchField.toLowerCase()) ||
                song.artist.toLowerCase().includes(searchField.toLowerCase()) ||
                song.album.toLowerCase().includes(searchField.toLowerCase()) ||
                song.release_date.toLowerCase().includes(searchField.toLowerCase()) ||
                song.genre.toLowerCase().includes(searchField.toLowerCase())
            ){
                return true
            }
        })
        props.setSongs(filteredSongs)
    }

    return ( 
        <form onSubmit={handleChange}>
            <h3>Search For Your Song</h3>
            <input type="text" placeholder='search song' value={searchField} onChange={event => setSearchField(event.target.value)}/>
            <button type='submit'>Click to Search</button>
        </form>
     );
}
 
export default SearchBar;