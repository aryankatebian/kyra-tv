import React from "react";
import youtube from "../../Apis/Youtube";
import VideoList from "./VideoList";
import { Row, Grid } from "react-bootstrap";
import Chart from "./Graph";

class VideoPage extends React.Component {
  state = {
    videos: [],
    update: []
  };
  componentDidMount() {
    this.onTermSubmit("PAQ");
  }

  onTermSubmit = async term => {
    const responde = await youtube.get("/search", {
      params: {
        part: "snippet",
        q: term
      }
    });
    this.setState({
      videos: responde.data.items
    });
  };

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <VideoList videos={this.state.videos} />;
        </Row>
        <br />
        <Row className="show-grid">
          <Chart />
        </Row>
      </Grid>
    );
  }
}
export default VideoPage;
