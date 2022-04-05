import {InstantPhotoFilter} from "./types";

export const filters: Record<InstantPhotoFilter, string | undefined> = {
    polaroid: "contrast(250%) brightness(90%) grayscale(70%)",
    vintage: "contrast(180%) brightness(70%) grayscale(20%) sepia(90%)",
    bloom: "contrast(200%) brightness(80%) grayscale(20%) ",
    greyscale: "contrast(190%) brightness(70%) grayscale(100%)",
    none: undefined,
};
