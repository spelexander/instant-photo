import React, { CSSProperties, useMemo } from "react";
import classNames from "./instant-photo.module.css";
import {InstantPhotoProps} from "./types";
import {sizeStyles} from "./sizes";
import {filters} from "./filters";

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
  const styles = useMemo(() => sizeStyles[variant!][size!], [variant, size]);

  const frameStyle: CSSProperties = useMemo(
    () => ({ transform: `rotate(${rotation}deg)`, ...styles.frame, ...style }),
    [style, rotation]
  );

  const imageStyle: CSSProperties = useMemo(
    () => ({ filter: filters[filter!], ...styles.photo, ...photoStyle }),
    [style, rotation]
  );

  const photoClassName = useMemo(() => `${classNames.photo} ${classNames.photoBackground}`, []);

  return (
    <div style={frameStyle} className={`${classNames.frame} ${classNames.frame}`}>
      {image ? (
        <img
          style={imageStyle}
          className={photoClassName}
          src={image}
          alt={alt}
        />
      ) : (
        <div
          style={imageStyle}
          className={photoClassName}
        />
      )}
      {footer && <div className={classNames.footer}>{footer}</div>}
      {filter !== "none" && showArtefacts && (
        <div
            style={imageStyle}
          className={`${classNames.photo} ${classNames.photoFilter}`}
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
