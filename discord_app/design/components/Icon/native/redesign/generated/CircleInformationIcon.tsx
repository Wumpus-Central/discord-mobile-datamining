// === Module 4515: CircleInformationIcon ===

// Module 4515 (CircleInformationIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import _mod4516 from "module_4516" /* 4516 */;
import _mod4517 from "module_4517" /* 4517 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx");

export const CircleInformationIcon = function CircleInformationIcon(color) {
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
  obj = { source: _mod4516, color: secondaryColor, style };
  const merged1 = Object.assign(merged);
  const items = [React4(BaseIconImage.BaseIconImage, obj), ];
  obj = { source: _mod4517, color: INTERACTIVE_ICON_DEFAULT, style: null };
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = React4(BaseIconImage.BaseIconImage, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
};