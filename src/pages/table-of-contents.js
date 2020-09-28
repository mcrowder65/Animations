import React from "react"
import Item from "src/components/item"
import styled from "@emotion/styled"
import ContentBlock from "src/components/content-block"
import { arr } from "src/data"
import usePrevious from "src/hooks/use-previous"
import ContentBlocks from "src/components/content-blocks"
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;

  ${Item}, ${ContentBlock} {
    margin: 5px 0 5px 0;
  }
  ${ContentBlocks} {
    display: flex;
    flex-direction: column;
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
function TableOfContents() {
  const [active, setActive] = React.useState(0)
  const [activeElement, setActiveElement] = React.useState(active)
  const prevActive = usePrevious(activeElement)
  React.useEffect(() => {
    if (activeElement !== active) {
      setTimeout(() => {
        setActiveElement(
          activeElement < active ? activeElement + 1 : activeElement - 1,
        )
      }, 15)
    }
    // iterate(activeElement, active)
  }, [active, activeElement])
  console.log({ active, activeElement })
  return (
    <Container>
      <Content>
        {arr.map((item, index) => {
          return (
            <Item
              onMouseOver={() => setActive(index)}
              key={item}
              isActive={index === activeElement}
            >
              {item}
            </Item>
          )
        })}
      </Content>
      <ContentBlocks
        activeElement={activeElement}
        prevActive={prevActive}
        setActive={setActive}
      />
    </Container>
  )
}

export default TableOfContents
