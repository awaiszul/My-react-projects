import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import { API_KEY, value_converter } from '../Data';
import moment from 'moment';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Playvideo = () => {
  const {videoId}=useParams();
  const [apiData, setApiData]=useState(null);
  const [channelData, setchannelData]=useState(null);
  const [commentData, setCommentData]=useState([])


  const fetching_data = async ()=>{
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(video_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))
  }
  const fetching_channel_data = async ()=>{
    const channel_data = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channel_data).then(res=>res.json()).then(data=>setchannelData(data.items[0]))

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))

  }

  useEffect(()=>{
    fetching_data();
  },[videoId])
  useEffect(()=>{
    fetching_channel_data();
  },[apiData])

  return (
    <div className='play-video'>
      {/* <video src='' controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
      <h3>{apiData?apiData.snippet.title :"Title here"}</h3>
      <div className="play-info">
        <p> {apiData?value_converter(apiData.statistics.viewCount): "total"} &bull;  {apiData?moment(apiData.snippet.publishedAt).fromNow():""} </p>
      <div className="">
        <span><img src="../../Images/like.png" alt="Likes" /> {apiData?value_converter(apiData.statistics.likeCount):125} </span>
        <span><img src="../../Images/dislike.png" alt="Likes" /></span>
        <span><img src="../../Images/comment.png" alt="Likes" /> {apiData?value_converter(apiData.statistics.commentCount):125}</span>
        <span><img src="../../Images/share.png" alt="Likes" /> </span>
      </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={`${channelData?channelData.snippet.thumbnails.default.url:""}`}alt="" />
        <div>

        <p> {apiData?apiData.snippet.channelTitle:""} </p>
        <span>{channelData? value_converter(channelData.statistics.subscriberCount):""}</span>
        </div>
      <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):""}</p>
      
      <hr />
      <h4>{apiData?value_converter(apiData.statistics.commentCount):125}</h4>
      {commentData.map((item, index)=>{
        return(
      <div key={index} className="comment">
        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
        <div>
            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>time</span></h3>
            <p> {item.snippet.topLevelComment.snippet.textDisplay} </p>
            <div className="comment-action">
              <img src="../../Images/like2.png" alt="l" />
                <span>{ value_converter( item.snippet.topLevelComment.snippet.likeCount)}</span>
              <img src="../../Images/dislike.png" alt="dl" />
            </div>
        </div>
      </div>
        )
      })}
      
      
      </div>
    </div>
  )
}

export default Playvideo
