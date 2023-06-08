import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import ChannelDetail from "./components/ChannelDetail";
import VideoDetail from "./components/VideoDetail";
import SearchFeed from "./components/SearchFeed";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes path="/" exact element={<Feed />} />
        <Routes path="/video/:id" element={<VideoDetail />} />
        <Routes path="/channel/:id" element={<ChannelDetail />} />
        <Routes path="/search/:searchTerm" element={<SearchFeed />} />
      </Box>
    </BrowserRouter>
  );
}

export default App;
