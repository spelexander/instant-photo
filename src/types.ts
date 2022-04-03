import {CSSProperties, ReactNode} from "react";

export type InstantPhotoVariant = "46mm" | "99mm";

export type InstantPhotoSize = "small" | "large";

export type InstantPhotoFilter =
    | "polaroid"
    | "vintage"
    | "bloom"
    | "greyscale"
    | "none";

export interface InstantPhotoProps {
    image?: string;
    variant?: InstantPhotoVariant;
    size?: InstantPhotoSize;
    alt?: string;
    rotation?: number;
    style?: CSSProperties;
    photoStyle?: CSSProperties;
    footer?: ReactNode;
    filter?: InstantPhotoFilter;
    showArtefacts?: boolean;
}
