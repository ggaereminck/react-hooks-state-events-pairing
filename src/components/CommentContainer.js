import video from "../data/video";
import CommentBar from "./CommentBar";

function CommentContainer(){
    return (
        <>
            {video.comments.map(vid => {
                return <CommentBar key={vid.id} user={vid.user} comment={vid.comment}/>
            })}
        </>
    )
}

export default CommentContainer;