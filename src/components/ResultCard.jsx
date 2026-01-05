import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[17.5vw] h-80 bg-white rounded">
      <div className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            src={item.src}
            autoPlay
            loop
            muted
          />
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      <h1 className="text-black">{item.title}</h1>
    </div>
  );
};

export default ResultCard;
