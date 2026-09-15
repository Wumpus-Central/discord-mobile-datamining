// === Module 17548: LabelLayoutComponent ===

// Module 17548 (LabelLayoutComponent)
import Server from "Server" /* 1895 */;
import Input from "Input" /* 6712 */;
import ComponentStateContext from "ComponentStateContext" /* 8232 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

export default function LabelLayoutComponent(arg0) {
  ({ component, renderComponent } = arg0);
  ({ label, description } = arg0);
  const componentError = ComponentStateContext.useComponentError(component);
  if (component.type === Server.ComponentType.CHECKBOX) {
    let renderComponentResult = renderComponent(component, "label-child");
  } else {
    const obj2 = { label, description, required: component.required, errorMessage: componentError, children: null };
    const obj3 = { style: { width: "100%" }, children: renderComponent(component, "label-child") };
    obj2.children = <View style={{ width: "100%" }}>{renderComponent(component, "label-child")}</View>;
    renderComponentResult = jsx(Input.Input, { label, description, required: component.required, errorMessage: componentError, children: null });
  }
  return renderComponentResult;
};