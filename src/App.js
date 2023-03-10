import { useEffect } from "react"
import styled, { keyframes } from "styled-components"


const sunWidth = window.screen.width
const sunHeight = window.screen.height * (1 / 3)
const ballHeight = window.screen.height * (1 / 2)
const n = 6
const thornL = 70
const thornR = 10
const sunR = 30
const X = sunWidth / 2
const Y = sunHeight / 2
const clicked = false
const ballStartX = X
const ballStartY = ballHeight / 2

const spin = keyframes`
from {transform: rotate(0deg)}
to {transform: rotate(360deg)}
`

const Spinningsun = styled.canvas`
animation-name: ${spin};
animation-duration: ${10}s;
animation-iteration-count: infinite;
animation-timing-function: linear;
`

const drop = keyframes`
from {transform: translate(${ballStartX}px, ${ballStartY}px)}
to {transform: translate(${ballStartX}px, 0px)}
`

const Ball = styled.canvas`
animation-name: ${clicked ? drop:null };
animation-duration: ${10}s;
animation-iteration-count: infinite;
animation-timing-function: linear;
`

function App() {

  const drawSun = async () => {
    var ctx = document.getElementById('spinning-sun').getContext('2d')

    ctx.beginPath()
    ctx.arc(X, Y, sunR, 0, 2 * Math.PI)
    ctx.stroke()

    for (let i = 0; i < n; i++) {
      ctx.beginPath()
      let cos = Math.cos(i * 2 * Math.PI / n)
      let sin = Math.sin(i * 2 * Math.PI / n)
      ctx.moveTo(X + sunR * cos, Y + sunR * sin)
      ctx.lineTo(X + (sunR + thornL) * cos, Y + (sunR + thornL) * sin)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(X + (sunR + thornL) * cos, Y + (sunR + thornL) * sin)
      ctx.arc(X + (sunR + thornL) * cos, Y + (sunR + thornL) * sin, thornR, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
    }
  }

  const drawBall = async () => {
    var ctx = document.getElementById('ball').getContext('2d')

    ctx.beginPath()
    ctx.arc(ballStartX, ballStartY, thornR, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
  }

  useEffect(() => {
    drawSun();
    drawBall();
  })

  return (
    <div>
      <Spinningsun id='spinning-sun' width={sunWidth} height={sunHeight}></Spinningsun>
      {/* <Ball id='ball'></Ball> */}
      <Ball id='ball' width={sunWidth} height={ballHeight}></Ball>
    </div>
  );
}

export default App;
