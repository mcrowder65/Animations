import styled from "@emotion/styled"

const ContentBlock = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: ${(props) => props.isActive && "4px solid orange"};
`

export default ContentBlock
