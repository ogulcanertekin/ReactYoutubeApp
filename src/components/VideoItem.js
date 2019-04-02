import './VideoItem.css'
import React from 'react';

//OnVideoSelect(App içerisindeki fonks)--> App-->VideoList-->VideoItem  aktarılıyor --> Daha sonra herhangi bir video tıklandıgında bu prop içerisindeki fonks calısacak...

const VideoItem = ({video,onVideoSelect}) =>{                 // vieo --> destructing --> aslında props.video
    return (
        <div onClick={()=>onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">      
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;