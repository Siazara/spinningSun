import { useEffect } from "react"
import styled, {keyframes} from "styled-components"


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

const width = window.screen.width
const height = window.screen.height
const n = 6
const thornL = 70
const thornR = 10
const sunR = 30

function App() {

  const draw = async () => {
  var ctx = document.getElementById('spinning-sun').getContext('2d')

  const X = width / 2
  const Y = height / 2

  ctx.beginPath()
  ctx.arc(X, Y, sunR, 0, 2 * Math.PI)
  ctx.stroke()

  for (let i = 0; i < n; i++) {
    ctx.beginPath()
    let cos = Math.cos(i * 2 * Math.PI / n )
    let sin = Math.sin(i * 2 * Math.PI / n )
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

  useEffect(() => {
    draw()
  })

  return (
    <Spinningsun id='spinning-sun' width={width} height={height}></Spinningsun>
  );
}

export default App;
