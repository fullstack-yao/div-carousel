import { useEffect } from "react";

export const useKeyDownNav = (
  navigateHandler: (direction: "left" | "right") => void
) => {
  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigateHandler("left");
      } else if (e.key === "ArrowRight") {
        navigateHandler("right");
      }
    };
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [navigateHandler]);
};
