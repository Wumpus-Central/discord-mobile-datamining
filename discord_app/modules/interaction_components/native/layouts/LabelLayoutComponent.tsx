// === Module 17394: LabelLayoutComponent ===

// Module 17394 (LabelLayoutComponent)
import Server from "Server" /* 1894 */;
import Input from "Input" /* 6607 */;
import ComponentStateContext from "ComponentStateContext" /* 8112 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

export default function LabelLayoutComponent(arg0) {
  ({ component, renderComponent } = arg0);
  ({ label, description } = arg0);
  let obj = ComponentStateContext;
  const componentError = obj.useComponentError(component);
  if (component.type === Server.ComponentType.CHECKBOX) {
    let renderComponentResult = renderComponent(component, "label-child");
  } else {
    obj = { label, description, required: component.required, errorMessage: componentError, children: null };
    obj = { style: { width: "100%" }, children: renderComponent(component, "label-child") };
    obj.children = <View style={{ width: "100%" }}>{renderComponent(component, "label-child")}</View>;
    renderComponentResult = jsx(Input.Input, { style: { width: "100%" }, children: renderComponent(component, "label-child") });
  }
  return renderComponentResult;
};