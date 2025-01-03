import React from 'react';

const ImageWithText = ({ src, alt, text, marginRight, marginTop, borderRadius, fontSize, fontWeight }) => {
  const imageStyle = {
    marginRight: marginRight || '10px',
    borderRadius: borderRadius || '50%',
    marginTop: marginTop || '18px'
  };

  const textStyle = {
    fontSize: fontSize || '50px', 
    fontWeight: fontWeight || '600'
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={src} alt={alt} style={imageStyle} width={'85'} height={'85'} />
      <span style={textStyle}>{text}</span>
    </div>
  );
};

export default ImageWithText;