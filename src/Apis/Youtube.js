import axios from "axios";
const API_KEY = "AIzaSyBr8k-HP0DlbkFRWbeRwZR48fRdNl-zpw0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: API_KEY,
    maxResults: 50,
    referer: document.referrer
  }
});
