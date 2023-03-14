import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IImage } from "../interfaces";
import { useKeyDownNav } from "../helpers/hookHelper";

interface Props {
  images: IImage[];
  currIndex: number;
  setCurrIndex: (index: number) => void;
}

const Carousel = (props: Props) => {
  const { images, currIndex, setCurrIndex } = props;

  const navigateHandler = (direction: "left" | "right"): void => {
    let newIndex = currIndex;
    if (direction === "left" && currIndex > 0) {
      newIndex = currIndex - 1;
    } else if (direction === "right" && currIndex < images.length - 1) {
      newIndex = currIndex + 1;
    }

    if (newIndex !== currIndex) {
      setTimeout(() => {
        setCurrIndex(newIndex);
      }, 300);
    }
  };

  useKeyDownNav(navigateHandler);

  return (
    <div className="carouselContainer">
      <div className="arrow" onClick={() => navigateHandler("left")}>
        <ArrowBack />
      </div>
      {images.length ? (
        <div
          className="center"
          style={{ backgroundImage: `url(${images[currIndex].url})` }}
        >
          {images[currIndex].title}
        </div>
      ) : (
        <div className="center">No images...</div>
      )}
      <div className="arrow" onClick={() => navigateHandler("right")}>
        <ArrowForward />
      </div>
    </div>
  );
};

export default Carousel;
