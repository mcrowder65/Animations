import React from "react"
import Item from "src/components/item"
import styled from "@emotion/styled"
import ContentBlock from "src/components/content-block"
import { arr } from "src/data"
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;

  ${Item}, ${ContentBlock} {
    margin: 5px 0 5px 0;
  }
`

const Content = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  :hover ${Item} {
    //background-color: blue;
  }
`
const TableOfContents = styled.div`
  width: 23%;
  height: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: flex;
  flex-direction: column;
`
function App() {
  const [active, setActive] = React.useState(1)
  return (
    <Container>
      <Content>
        {arr.map((item) => {
          return (
            <Item
              onMouseOver={() => setActive(item)}
              key={item}
              isActive={item === active}
            >
              {item}
            </Item>
          )
        })}
      </Content>
      <TableOfContents>
        {arr.map((item) => {
          return (
            <ContentBlock isActive={item === active} key={item}>
              {item}
            </ContentBlock>
          )
        })}
      </TableOfContents>
    </Container>
  )
}

export default App
