import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {

    async function deleteSong(){
        let response = await axios.delete(`http://127.0.0.1:8000/music/${props.songID}/`)
        if(response.status === 204){
            await props.getAllSongs()
        }
    }

    return ( 
        <button onClick={() => deleteSong()}>Delete Song</button>
     )
}
 
export default DeleteButton;