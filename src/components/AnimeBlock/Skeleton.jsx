import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={180}
      height={343}
      viewBox="0 0 180 343"
      backgroundColor="#A4A4A4"
      foregroundColor="#ecebeb">
      <rect
        x="0"
        y="0"
        rx="5"
        ry="5"
        width="180"
        height="250"
      />
      <rect
        x="30"
        y="270"
        rx="5"
        ry="5"
        width="120"
        height="20"
      />
      <rect
        x="0"
        y="310"
        rx="5"
        ry="5"
        width="180"
        height="30"
      />
    </ContentLoader>
  );
};

export default Skeleton;
