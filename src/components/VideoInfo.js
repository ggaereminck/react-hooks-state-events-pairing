import { useState } from "react"

function VideoInfo({ title, views, createdAt, upvotes, downvotes }){
    console.log(upvotes);
    const [Liked, setLiked] = useState(upvotes)
    const [Disliked, setDisliked] = useState(downvotes)
    return (
        <div>
            <h2>{title}</h2>
            <p>Views: {views} <span>|</span> Uploaded: {createdAt}</p>
            <button onClick={() => setLiked(Liked + 1)}>{Liked}👍</button>
            <button onClick={() => setDisliked(Disliked + 1)}>{Disliked}👎</button>
        </div>
    )
}




export default VideoInfo