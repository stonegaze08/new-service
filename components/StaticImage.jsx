
import Image from 'next/image';

const StaticImage = ({ src, alt, width, height }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
      />
    </div>
  );
};

export default StaticImage;