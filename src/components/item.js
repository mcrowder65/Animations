import React from "react"
import styled from "@emotion/styled"

const Item = styled(({ children, ...props }) => {
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
