// === Module 17228: LabelLayoutComponent ===

// Module 17228 (LabelLayoutComponent)
import noopAll from "noop" /* 19 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import Input from "Input" /* 7718 */;
import isInteractionComponent from "isInteractionComponent" /* 8033 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

export default function LabelLayoutComponent(arg0) {
  ({ component, renderComponent } = arg0);
  ({ label, description } = arg0);
  let obj = isInteractionComponent;
  const componentError = obj.useComponentError(component);
  if (component.type === PermissionOverwriteType.ComponentType.CHECKBOX) {
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
    renderComponentResult = jsx(Input.Input, { style: null, children: null });
  }
  return renderComponentResult;
};