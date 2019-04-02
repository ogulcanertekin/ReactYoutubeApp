import React from 'react';
import VideoItem from './VideoItem';
/*
const VideoList = (props) => {
    //props.videos
    return <div>{props.videos.length}</div>

}
*/
const VideoList = ({videos}) => {           //destructing ES6

    const renderedList = videos.map((video)=>{          // map fonks kullanarak her bir video için  VideoItem componenti kullanılıyor.
        return <VideoItem video={video}/>;
    });

    return <div>{renderedList}</div>

}
export default VideoList;