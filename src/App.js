import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [photo , setPhoto] = useState("")
  const [image , setImage] = useState([])
  const changeImage = () =>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo} &client_id=Qy0LZ7_P6LHz8-Csw5VbLB-L4j_wqjk3fD7YthA1M-A`)
     .then((response)=>{
      setImage(response.data.results);
     })
  }

  return (
    <>
    <div className='container'>
      <input type="text" placeholder='Search Images'  className='searchImage' value={photo} onChange={(e)=>{
      setPhoto(e.target.value)
      }} />
      <button type='submit' onClick={changeImage}>Images</button>
    </div>
      <div className='container2'>
        {image.map((value)=>{
          return(
            <div>
              <img src={value.urls.small} alt=''/>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
