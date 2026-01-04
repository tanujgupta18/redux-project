import React from "react";
import { fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white p-10">
      <button
        onClick={async () => {
          const data = await fetchPhotos("dog");
          console.log(data.results);
        }}
        className="px-4 py-2 m-5 rounded bg-green-400"
      >
        Get Photos
      </button>
      <button
        onClick={async () => {
          const data = await fetchVideos("dog");
          console.log(data.videos);
        }}
        className="px-4 py-2 m-5 rounded bg-green-400"
      >
        Get Videos
      </button>
    </div>
  );
};

export default App;
