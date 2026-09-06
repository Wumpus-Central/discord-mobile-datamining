// === Module 16361: NonCollapsableGestureDetector ===

// Module 16361 (NonCollapsableGestureDetector)
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["children"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const style = { flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export const NonCollapsableGestureDetector = function NonCollapsableGestureDetector(children) {
  let obj = {};
  const merged = Object.assign(_objectWithoutProperties(children, closure_2));
  obj = { style, collapsable: false, children: children.children };
  obj.children = <View style={style} collapsable={false}>{children.children}</View>;
  return jsx(LegacyBaseButton.GestureDetector, { style, collapsable: false, children: children.children });
};