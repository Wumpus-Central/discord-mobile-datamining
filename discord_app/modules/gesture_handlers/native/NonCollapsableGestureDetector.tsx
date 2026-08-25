// discord_app/modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import LegacyBaseButton from "../../../../_runtime/05533_LegacyBaseButton.js";
import closure_3 from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let closure_2 = ["children"];
noopAll;
let closure_6 = { flex: 1 };
const result = require("set").fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export const NonCollapsableGestureDetector = function NonCollapsableGestureDetector(children) {
  let obj = {};
  const merged = Object.assign(callback(children, closure_2));
  obj = { style: closure_6, collapsable: false, children: children.children };
  obj.children = <View style={closure_6} collapsable={false}>{arg0.children}</View>;
  return jsx(LegacyBaseButton.GestureDetector, { style: closure_6, collapsable: false, children: children.children });
};