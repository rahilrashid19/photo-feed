import React from "react";

const PhotoFeedLayout = ({ children, modal }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default PhotoFeedLayout;
