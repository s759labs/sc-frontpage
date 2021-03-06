import Modal from "./index";
import Button from "../Button";

export default {
  component: Modal,
  title: "Ui/Modal",
  // decorators: (Story) => <div>
  //   <NupurUiWrapper>
  //     <Story />
  //   </NupurUiWrapper>
  // </div>
}

const Template = args =>  <div><div id="portal"/><Modal {...args}/></div>

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "This is Modal title",
  children: "This modal has 3 components. title, children and actions. This section is children",
  actions: <><p>This are actions &nbsp;&nbsp;</p> <Button outlined className="text-sm">Cancel</Button>&nbsp; <Button className="text-sm">Confirm</Button></>
}
