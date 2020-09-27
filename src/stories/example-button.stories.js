import React from "react"
import Item from "../components/example-button"

export default {
  title: "Example/ExampleButton",
  component: Item,
}

const Template = args => <Item {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: "Example Button",
}
