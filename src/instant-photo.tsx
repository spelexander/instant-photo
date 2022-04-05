import React, { CSSProperties, useMemo } from "react";
import {InstantPhotoFilter, InstantPhotoProps} from "./types";

import "./instant-photo.css";

export const filters: Record<InstantPhotoFilter, string | undefined> = {
  polaroid: "contrast(250%) brightness(90%) grayscale(70%)",
  vintage: "contrast(180%) brightness(70%) grayscale(20%) sepia(90%)",
  bloom: "contrast(200%) brightness(80%) grayscale(20%) ",
  greyscale: "contrast(190%) brightness(70%) grayscale(100%)",
  none: undefined,
};

export const InstantPhoto: React.FC<InstantPhotoProps> = ({
  image,
  alt,
  variant,
  size,
  rotation,
  style,
  photoStyle,
  footer,
  filter,
  showArtefacts,
}) => {
  const frameStyle: CSSProperties = useMemo(
    () => ({ transform: `rotate(${rotation}deg)`, ...style }),
    [style, rotation]
  );

  const imageStyle: CSSProperties = useMemo(
    () => ({ filter: filters[filter!], ...photoStyle }),
    [style, rotation]
  );

  const classNames = useMemo(() => {
    const isSmall = size === "small";
    switch (variant) {
      case "99mm":
        return {
          frame: isSmall ? 'frame99mmSmall' : 'frame99mmLarge',
          image: isSmall ? 'photo99mmSmall' : 'photo99mmLarge',
        };
      case "46mm":
      default:
    }
    return {
      frame: isSmall ? 'frame46mmSmall' : 'frame46mmLarge',
      image: isSmall ? 'photo46mmSmall' : 'photo46mmLarge',
    };
  }, [variant, size]);

  return (
    <div style={frameStyle} className={`frame ${classNames.frame}`}>
      {image ? (
        <img
          style={imageStyle}
          className={`photo ${classNames.image} photoBackground`}
          src={image}
          alt={alt}
        />
      ) : (
        <div
          style={photoStyle}
          className={`photo ${classNames.image} photoBackground`}
        />
      )}
      {footer && <div className="footer">{footer}</div>}
      {filter !== "none" && showArtefacts && (
        <div
          className={`photo ${classNames.image} photoFilter`}
        />
      )}
    </div>
  );
};

InstantPhoto.defaultProps = {
  variant: "46mm",
  size: "large",
  alt: "instant photo",
  style: {},
  photoStyle: {},
  rotation: 0,
  filter: "polaroid",
  showArtefacts: true,
};
