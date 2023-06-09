import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    channelId: "UCBVjMGOIkavEAhyqpxJ73Dw",
    part: "snippet,id",
    order: "date",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.request(`${BASE_URL}/${url}`, options);

  return data;
};
