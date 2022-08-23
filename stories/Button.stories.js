import { Button } from "../component/Button/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "#17293d",
  color: "#87bfec",
  border: "none",
  borderRadius: "5px",
};
