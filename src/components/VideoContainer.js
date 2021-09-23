import Video from "./Video";
import VideoInfo from "./VideoInfo";
import video from "../data/video"

function VideoContainer(){
    return (
    <>
        <Video embedUrl = {video.embedUrl}/>
        <VideoInfo  title = {video.title} views = {video.views} createdAt = {video.createdAt} upvotes = {video.upvotes} downvotes = {video.downvotes}/>
    </>
    );
}

export default VideoContainer