import React from "react";
const Traval1 = ({ destination,country, distance, image }) => (
    <figure>
      <img src={image} alt={destination} />
      <figcaption>
        <blockquote>{destination}</blockquote>
        <blockquote>{country}</blockquote>
        <cite>{distance}</cite>
      </figcaption>
    </figure>
  );
  export default Traval1;