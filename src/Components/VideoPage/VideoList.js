import React from "react";
import VideoItem from "./VideoItem";

import "./VideoItem.scss";

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return (
      <div className="items">
        <VideoItem key={video.id.videoId} video={video} />
      </div>
    );
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
