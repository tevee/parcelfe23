import anime from 'animejs'
import sunFlowerImgUrl from './media/sunflower.jpg'

const img = document.createElement('img')
document.body.append(img);
img.src = sunFlowerImgUrl;

anime({
    targets: img,
    rotate: 360
})