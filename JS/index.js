import { Router } from './router.js'

const router = new Router();

const buttonHome = document.querySelector(".buttonHome")
const buttonUniverse = document.querySelector(".buttonUniverse")
const buttonExplore = document.querySelector(".buttonExplore")
const bg = document.querySelector(".bg")

buttonUniverse.onclick = () => {
  router.route()
  BgUniverse()
}
buttonHome.onclick = () => {
  router.route()
  BgHome()
}
buttonExplore.onclick = () => {
  router.route()
  BgExplore()
}
router.add('/index.html', '/pages/home.html')
router.add('/', '/pages/home.html')
router.add('/theUniverse', '/pages/theUniverse.html')
router.add('/explore', '/pages/explore.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

function BgExplore() {
  bg.classList.add('bgExplore')
  bg.classList.remove('bgUniverse')
  bg.classList.remove('bg')
}

function BgUniverse() {
  bg.classList.add('bgUniverse')
  bg.classList.remove('bgExplore')
  bg.classList.remove('bg')
}

function BgHome() {
  bg.classList.add('bg')
  bg.classList.remove('bgExplore')
  bg.classList.remove('bgUniverse')
}