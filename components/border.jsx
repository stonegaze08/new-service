import React from 'react';

const CustomImage = ({ src, alt, borderRadius, margin }) => {
  const style = {
    borderRadius: borderRadius || '50%',
    margin: margin || '0',
  };

  return (
    <img src={src} alt={alt} style={style} width={'75'} height={'75'} />
  );
};

export default CustomImage;

