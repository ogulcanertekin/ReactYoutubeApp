import React from 'react';
import VideoItem from './VideoItem';
/*
const VideoList = (props) => {
    //props.videos
    return <div>{props.videos.length}</div>

}
*/

//onVideoSelect propertysini App den yolluyoruz ve buradan da VideoItema yolluyoruz.Nested-->İç içe callback!

const VideoList = ({videos,onVideoSelect}) => {           //destructing ES6

    const renderedList = videos.map((video)=>{          // map fonks kullanarak her bir video için  VideoItem componenti kullanılıyor.
        return <VideoItem onVideoSelect={onVideoSelect} video={video}/>;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>

}
export default VideoList;