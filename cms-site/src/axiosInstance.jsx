import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.p2.slc1.foxhub.space",
});

export default instance;
