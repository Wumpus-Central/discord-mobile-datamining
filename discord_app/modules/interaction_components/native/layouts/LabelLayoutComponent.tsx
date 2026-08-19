// discord_app/modules/interaction_components/native/layouts/LabelLayoutComponent.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import PermissionOverwriteType from "../../../../flow/Server.tsx";
import Input from "../../../../design/components/Input/native/Input.native.tsx";
import isInteractionComponent from "../../ComponentStateContext.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

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