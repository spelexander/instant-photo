import React from "react";
import { InstantPhoto } from "instant-photo";

import { Footer as FooterContent } from "./footer";


export const Default = () => (
  <InstantPhoto
    filter="none"
    image="https://imagedelivery.net/_c4jAFjxf-vVYrGvQV8G2A/dc599444-db9f-4065-974b-2f245626a700/public"
  />
);

export const Small = () => (
  <InstantPhoto
    filter="none"
    size="small"
    image="https://imagedelivery.net/_c4jAFjxf-vVYrGvQV8G2A/dc599444-db9f-4065-974b-2f245626a700/public"
  />
);

export const Empty = () => <InstantPhoto />;

export const Row = () => (
  <div style={{ display: "flex" }}>
    <InstantPhoto
      filter="none"
      rotation={5}
      image="https://imagedelivery.net/_c4jAFjxf-vVYrGvQV8G2A/b6ec167b-9954-4b71-b26f-ac13421ab300/public"
    />
    <InstantPhoto
      filter="none"
      style={{ marginLeft: "-30px" }}
      rotation={-3}
      image="https://imagedelivery.net/_c4jAFjxf-vVYrGvQV8G2A/dea46e01-9ac3-461e-7918-cd19df681c00/public"
    />
    <InstantPhoto
      filter="none"
      rotation={2}
      image="https://imagedelivery.net/_c4jAFjxf-vVYrGvQV8G2A/96ab3cef-7db6-4557-dec4-354aa53d8b00/public"
    />
  </div>
);

export const Footer = () => (
  <InstantPhoto
    filter="none"
    image="https://imagedelivery.net/_c4jAFjxf-vVYrGvQV8G2A/6e0cbb8f-aa35-4b03-d89a-dcf0b287f300/public"
    footer={<FooterContent />}
  />
);

export const Filter = () => (
  <div style={{ display: "flex" }}>
    <InstantPhoto
      filter="polaroid"
      size="small"
      rotation={4}
      image="https://imagedelivery.net/_c4jAFjxf-vVYrGvQV8G2A/8a24ef4c-cc52-440e-38fa-cffa45486d00/public"
    />
    <InstantPhoto
      filter="vintage"
      size="small"
      rotation={3}
      image="https://imagedelivery.net/_c4jAFjxf-vVYrGvQV8G2A/8a24ef4c-cc52-440e-38fa-cffa45486d00/public"
    />
    <InstantPhoto
      filter="greyscale"
      size="small"
      rotation={-7}
      image="https://imagedelivery.net/_c4jAFjxf-vVYrGvQV8G2A/8a24ef4c-cc52-440e-38fa-cffa45486d00/public"
    />
    <InstantPhoto
      filter="bloom"
      size="small"
      rotation={5}
      image="https://imagedelivery.net/_c4jAFjxf-vVYrGvQV8G2A/8a24ef4c-cc52-440e-38fa-cffa45486d00/public"
    />
  </div>
);

export const Variant = () => (
  <InstantPhoto
    filter="none"
    variant="99mm"
  />
);

export const VariantSmall = () => (
  <InstantPhoto
    filter="none"
    variant="99mm"
    size="small"
  />
);
