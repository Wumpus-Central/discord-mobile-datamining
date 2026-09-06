// discord_app/modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx
import LegacyBaseButton from "../../../../_runtime/06655_LegacyBaseButton.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  obj.children = (
    <View style={style} collapsable={false}>
      {children.children}
    </View>
  );
  return jsx(LegacyBaseButton.GestureDetector, { style, collapsable: false, children: children.children });
};
