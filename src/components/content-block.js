import React from "react"
import styled from "@emotion/styled"
import { animated, useSpring } from "react-spring"
const Active = styled(({ prevActive, activeElement, ...props }) => {
  const spring = useSpring({
    marginTop: 0,
    from: { marginTop: prevActive > activeElement ? 100 : -100 },
  })
  return <animated.div {...props} style={spring} />
})`
  width: 4px;
  height: 40px;
  background-color: orange;
  position: absolute;
`
const Children = styled.div``
const ContentBlock = styled(
  ({ children, isActive, activeElement, prevActive, className, ...props }) => {
    return (
      <animated.div className={className} {...props}>
        {isActive && (
          <Active prevActive={prevActive} activeElement={activeElement} />
        )}
        <Children>{children}</Children>
      </animated.div>
    )
  },
)`
  width: 200px;
  cursor: pointer;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  ${Children} {
    padding-left: 16px;
  }
`

export default ContentBlock
