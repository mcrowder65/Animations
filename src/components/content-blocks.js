import React from "react"
import styled from "@emotion/styled"
import { useSpring } from "react-spring"
import { arr } from "src/data"
import ContentBlock from "src/components/content-block"

const ContentBlocks = styled(
  ({ setActive, prevActive, activeElement, ...props }) => {
    return (
      <div {...props}>
        {arr.map((item, index) => {
          return (
            <ContentBlock
              onClick={() => setActive(index)}
              prevActive={prevActive}
              activeElement={activeElement}
              isActive={index === activeElement}
              key={item}
            >
              {item}
            </ContentBlock>
          )
        })}
      </div>
    )
  },
)`
  height: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  ${ContentBlock} {
    margin: 5px 0 5px 0;
  }
`

export default ContentBlocks
