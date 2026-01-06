import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className="w-[17.5vw] relative h-80 bg-white rounded-lg overflow-hidden">
      <a href={item.url} className="h-full" target="_blank">
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
      </a>
      <div
        id="bottom"
        className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white"
      >
        <h2 className="font-semibold capitalize h-12 overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => {
            addToCollection(item);
          }}
          className="bg-indigo-600 text-white active:scale-95 rounded px-3 py-2 font-medium cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
