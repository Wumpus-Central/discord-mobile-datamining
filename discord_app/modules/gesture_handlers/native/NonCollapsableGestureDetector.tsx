// === Module 15690: NonCollapsableGestureDetector ===

// Module 15690 (NonCollapsableGestureDetector)
import noopAll from "noop" /* 19 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6408 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

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