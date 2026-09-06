// discord_app/design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod6611 from "../../../../../../../_runtime/metro/06611__.js";
import _mod6612 from "../../../../../../../_runtime/metro/06612__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx");

export const CircleErrorIcon = function CircleErrorIcon(color) {
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, secondaryColor: 0, color: 0 }));
  let obj = { children: null };
  obj = { source: _mod6611, color: secondaryColor, style };
  const merged1 = Object.assign(merged);
  const items = [React4(BaseIconImage.BaseIconImage, obj)];
  obj = { source: _mod6612, color: INTERACTIVE_ICON_DEFAULT, style: null };
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = React4(BaseIconImage.BaseIconImage, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
};
