import React from "react";

function GifListContainer() {
  const search = () => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"
    );
  };
  return <div></div>;
}

export default GifListContainer;
