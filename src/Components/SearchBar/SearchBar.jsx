import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchField, setSearchField] = useState("")
    const [searchResults, setSearchResults] = useState([])
    

    function handleChange(event){
        event.preventDefault()
        const filteredSongs = props.songs.filter((song) => {
            return (
                song.title.toLowerCase().includes(searchField.toLowerCase()) ||
                song.artist.toLowerCase().includes(searchField.toLowerCase()) ||
                song.album.toLowerCase().includes(searchField.toLowerCase()) ||
                song.release_date.toLowerCase().includes(searchField.toLowerCase()) ||
                song.genre.toLowerCase().includes(searchField.toLowerCase())
            )
        })
        setSearchResults(filteredSongs)
        props.setSongs(searchResults)
    }

    return ( 
        <form onSubmit={handleChange}>
            <h3>Search For Your Song</h3>
            <input type="search" placeholder='search song' id={searchField} onChange={event => setSearchField(event.target.value)}/>
            <button type='submit'>Double click to search</button>
        </form>
     );
}
 
export default SearchBar;