// discord_app/modules/interaction_components/native/layouts/LabelLayoutComponent.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

export default function LabelLayoutComponent(arg0) {
  let component;
  let description;
  let label;
  let renderComponent;
  ({ component, renderComponent } = arg0);
  ({ label, description } = arg0);
  let obj = require("../../ComponentStateContext.tsx") /* isInteractionComponent */;
  const componentError = obj.useComponentError(component);
  if (component.type === require("../../../../flow/Server.tsx") /* PermissionOverwriteType */.ComponentType.CHECKBOX) {
    let renderComponentResult = renderComponent(component, "label-child");
  } else {
    obj = { label: null, description: null, required: null, errorMessage: null, children: null };
    obj[0] = label;
    obj[1] = description;
    obj[2] = component.required;
    obj[3] = componentError;
    obj = { style: null, children: null };
    obj[0] = { width: "100%" };
    obj[1] = renderComponent(component, "label-child");
    obj[4] = <View style={null}>{null}</View>;
    renderComponentResult = jsx(require("../../../../design/components/Input/native/Input.native.tsx") /* Input */.Input, { style: null, children: null });
  }
  return renderComponentResult;
};