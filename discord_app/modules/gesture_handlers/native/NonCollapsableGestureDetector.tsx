// === Module 15624: NonCollapsableGestureDetector ===

// Module 15624 (NonCollapsableGestureDetector)
import noopAll from "noop" /* 19 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6377 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
let closure_2 = ["children"];
noopAll;
let closure_6 = { flex: 1 };
const result = require("obj132").fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export const NonCollapsableGestureDetector = function NonCollapsableGestureDetector(children) {
  const merged = Object.assign(callback(children, closure_2));
  const obj = { style: closure_6, collapsable: false, children: children.children };
  obj.children = <View style={closure_6} collapsable={false}>{children.children}</View>;
  return jsx(LegacyBaseButton.GestureDetector, { style: closure_6, collapsable: false, children: children.children });
};