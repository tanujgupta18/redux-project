import React from "react";
import { fetchPhotos } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button
        onClick={async () => {
          const data = await fetchPhotos("dog");
          console.log(data.results);
        }}
        className="px-3 py-2 rounded"
      >
        Get Photos
      </button>
    </div>
  );
};

export default App;
