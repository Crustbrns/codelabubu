import React, { useCallback, useEffect, useState } from 'react'
import { type EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

import { DotButton, useDotButton } from './EmblaCarouselDotButtons'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false })
  ])
  // const [isPlaying, setIsPlaying] = useState(true)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  // const onButtonAutoplayClick = useCallback(
  //   (callback: () => void) => {
  //     const autoScroll = emblaApi?.plugins()?.autoScroll
  //     if (!autoScroll) return

  //     const resetOrStop =
  //       autoScroll.options.stopOnInteraction === false
  //         ? autoScroll.reset
  //         : autoScroll.stop

  //     resetOrStop()
  //     callback()
  //   },
  //   [emblaApi]
  // )


  // const toggleAutoplay = useCallback(() => {
  //   const autoScroll = emblaApi?.plugins()?.autoScroll
  //   if (!autoScroll) return

  //   const playOrStop = autoScroll.isPlaying()
  //     ? autoScroll.stop
  //     : autoScroll.play
  //   playOrStop()
  // }, [emblaApi])

  // useEffect(() => {
  //   const autoScroll = emblaApi?.plugins()?.autoScroll
  //   if (!autoScroll) return

  //   setIsPlaying(autoScroll.isPlaying())
  //   emblaApi
  //     .on('autoScroll:play', () => setIsPlaying(true))
  //     .on('autoScroll:stop', () => setIsPlaying(false))
  //     .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))

  // }, [emblaApi])

  return (
    <section className="embla">
      <div className="embla__viewport bg-white rounded-xl" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide flex justify-center" key={index}>
              <img className="embla__slide__number p-4" style={{height: 300}} src={index}/>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls flex justify-center mt-3 mb-4 items-center">
        <div className="embla__dots flex gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'bg-transparent p-1 rounded-4xl opacity-35 '.concat('embla__dot'.concat(
                index === selectedIndex ? 'embla__dot--selected opacity-100' : ''
              ))}
            />
          ))}
        </div>
{/* 
        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button> */}
      </div>
    </section>
  )
}

export default EmblaCarousel
