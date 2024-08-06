import React, { useState, useEffect } from 'react'
import "./Recomended.css"
import { API_KEY, value_converter } from '../Data';
import { Link } from 'react-router-dom';

const Recomended = ({categoryId}) => {
  const [apiData, setApiData]=useState([]);
  const fetching_data = async ()=>{
    const recvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(recvideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
  }

  useEffect(()=>{
    fetching_data();
  },[])

  return (
    <div className='recomended'>
      {
        apiData.map((item, index)=>{
          return(

      <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-list">
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <div className="vid-info">
        <h3>{item.snippet.title}</h3>
        <p>{item.snippet.channelTitle}</p>
        <p>{value_converter(item.statistics.viewCount)} </p>
        </div>
      </Link>
          )
        })
      }
    </div>
  )
}

export default Recomended
