import React from "react";
import "./VideoItem.scss";
import { Col } from "react-bootstrap";

const VideoItem = ({ video }) => {
  return (
    <Col md={3} style={{ margin: "10px" }}>
      <div className="myitem">
        <div className="item-img">
          <a
            href={`https://www.youtube.com/watch?v=` + video.id.videoId}
            target="blank"
          >
            <img
              alt={video.snippet.title}
              src={video.snippet.thumbnails.medium.url}
            />
          </a>
        </div>
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    </Col>
  );
};

export default VideoItem;
