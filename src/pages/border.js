import React from "react"
import { useSpring, animated } from "react-spring"
import styled from "@emotion/styled"
const Border = styled((props) => {
  const spring = useSpring({
    backgroundColor: "#eb5757",

    from: { backgroundColor: "white" },
  })
  return (
    <animated.div style={spring} {...props}>
      I will fade in
    </animated.div>
  )
})`
  width: 200px;
  height: 200px;
  border: 1px solid lightgray;
`

export default Border
