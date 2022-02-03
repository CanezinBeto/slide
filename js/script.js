import Slide from './module/slide.js'

const slide = new Slide('.slide', '.slide-wrapper')
slide.init()

slide.changeSlide(3)
slide.activePrevSlide()
