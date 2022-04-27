import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchField, setSearchField] = useState("")

    const filteredSongs = props.songs.filter((song) => {
        return (
            song.title.toLowerCase().includes(searchField.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchField.toLowerCase()) ||
            song.album.toLowerCase().includes(searchField.toLowerCase()) ||
            song.release_date.toLowerCase().includes(searchField.toLowerCase()) ||
            song.genre.toLowerCase().includes(searchField.toLowerCase())
        )
    })

    function handleChange(event){
        setSearchField(event.target.value)
        props.setSongs(filteredSongs)
    }

    return ( 
        <div>
            <h3>Search For Your Song</h3>
            <input type="search" placeholder='search song' onChange={handleChange} />
        </div>
     );
}
 
export default SearchBar;