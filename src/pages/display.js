import React from "react"
import { useSpring, animated } from "react-spring"
import styled from "@emotion/styled"
const Display = styled((props) => {
  const spring = useSpring({
    marginTop: 0,
    from: { marginTop: 5000 },
  })
  return <animated.div style={spring} {...props} />
})`
  width: 4px;
  height: 40px;
  background-color: orange;
`

export default Display
