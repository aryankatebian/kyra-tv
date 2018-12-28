import React from "react";
import youtube from "../../Apis/Youtube";
import { Col, Row, Grid, Image, Label } from "react-bootstrap";
import VideoPage from "../VideoPage/VideoPage";

import "./LandingPage.scss";

class LandingPage extends React.Component {
  state = {
    title: "",
    thumbnail: null,
    description: null,
    subscriber: null,
    viewCount: null,
    videoCount: null
  };
  componentDidMount() {
    this.onTermSubmit("PAQ");
  }
  onTermSubmit = async term => {
    const responde = await youtube.get("/channels", {
      params: {
        id: "UCvO6uJUVJQ6SrATfsWR5_aA",
        part: "snippet,contentDetails,statistics"
      }
    });
    this.setState({
      title: responde.data.items[0].snippet.title,
      thumbnail: responde.data.items[0].snippet.thumbnails.medium.url,
      description: responde.data.items[0].snippet.description,
      subscriber: responde.data.items[0].statistics.subscriberCount,
      viewCount: responde.data.items[0].statistics.viewCount,
      videoCount: responde.data.items[0].statistics.videoCount
    });
  };

  render() {
    return (
      <div className="landingpage">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Image src={this.state.thumbnail} circle />
              <h1>{this.state.title}</h1>
              <p>{this.state.description}</p>
              <Label bsStyle="danger" style={{ fontSize: "2rem" }}>
                total subscriber: {this.state.subscriber}
              </Label>
              <br />
              <br />
              <Label bsStyle="danger" style={{ fontSize: "2rem" }}>
                total view: {this.state.viewCount}
              </Label>
              <br />
              <br />
              <Label bsStyle="danger" style={{ fontSize: "2rem" }}>
                total video: {this.state.videoCount}
              </Label>
            </Col>
          </Row>
        </Grid>
        <br />
        <br />

        <VideoPage />
      </div>
    );
  }
}
export default LandingPage;
