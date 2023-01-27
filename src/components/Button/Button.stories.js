import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
}

const Template = args => <Button {...args}/>

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  color: 'white',
  title: 'Red Button'
}
export const Blue = Template.bind({});
Blue.args = {
  backgroundColor: 'blue',
  color: 'white',
  title: 'Blue Button'
}

export const YellowText = Template.bind({});
YellowText.args = {
  backgroundColor: 'red',
  color: 'yellow',
  title: 'Yellow Text Button'
}