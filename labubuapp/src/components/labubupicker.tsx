// import React from "react";
import img1 from "./labubus/Labubu1.png";
import img2 from "./labubus/Labubu2.png";
import img3 from "./labubus/Labubu3.png";
// import img4 from "./labubus/Labubu4.png";
// import img5 from "./labubus/Labubu5.png";
// import img6 from "./labubus/Labubu6.png";
// import img7 from "./labubus/Labubu7.png";
// import img8 from "./labubus/Labubu8.png";
// import img9 from "./labubus/Labubu9.png";
import { type EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "./EmblaCarousel";

function Labubupicker() {
  const OPTIONS: EmblaOptionsType = { align: "start" };
  //   const SLIDE_COUNT = 6;
  const SLIDES = Array.from([img1, img2, img3]);

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}

export default Labubupicker;
