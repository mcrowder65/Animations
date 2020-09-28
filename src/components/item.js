import React from "react"
import styled from "@emotion/styled"
import { useSpring, animated } from "react-spring"

const Item = styled(({ children, isActive, ...props }) => {
  return <div {...props}>{children}</div>
})`
  height: 200px;
  background-color: papayawhip;
  border: ${(props) =>
    props.isActive ? "2px solid orange" : "1px solid lightgray"};
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    border: 2px solid orange;
  }
`
export default Item
