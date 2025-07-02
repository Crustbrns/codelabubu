// import React from "react";
import img1 from "./labubus/Labubu1.png";
import img2 from "./labubus/Labubu2.png";
import img3 from "./labubus/Labubu3.png";
import img4 from "./labubus/Labubu4.png";
// import img5 from "./labubus/Labubu5.png";
import img6 from "./labubus/Labubu6.png";
// import img7 from "./labubus/Labubu7.png";
import img8 from "./labubus/Labubu8.png";
import img9 from "./labubus/Labubu9.png";
import { type EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "./EmblaCarousel";

function Labubupicker() {
  const OPTIONS: EmblaOptionsType = { align: "start" };
  //   const SLIDE_COUNT = 6;
  const SLIDES = Array.from([img1, img2, img3, img4, img6, img8, img9]);

  return (
    <div className="relative flex justify-center mt-6">
      <div className="absolute z-20 pb-1 pt-1 pl-4 pr-4 -top-4 text-white rounded-4xl shadow-[0px_5px_39px_7px_#7dbcff]" style={{backgroundColor: 'rgba(56,139,240,255)'}}>Успей забрать</div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default Labubupicker;
