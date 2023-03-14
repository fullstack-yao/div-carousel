import { FC, useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import { IImage } from "./interfaces";

const App: FC = () => {
  const [images, setImages] = useState<IImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currIndex, setCurrIndex] = useState<number>(0);
  const url = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.log("Fetching error: ", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [setImages, setLoading]);

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Carousel
          images={images}
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
        ></Carousel>
      )}
    </div>
  );
};

export default App;
