// === Module 11258: CircleQuestionIcon ===

// Module 11258 (CircleQuestionIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4338 */;
import _mod11259 from "module_11259" /* 11259 */;
import _mod11260 from "module_11260" /* 11260 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleQuestionIcon.tsx");

export const CircleQuestionIcon = function CircleQuestionIcon(color) {
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, secondaryColor: 0, color: 0 }));
  const obj = { children: null };
  const merged1 = Object.assign(merged);
  const items = [React4(BaseIconImage.BaseIconImage, { source: _mod11259, color: secondaryColor, style }), ];
  const obj3 = { source: _mod11260, color: INTERACTIVE_ICON_DEFAULT, style: null };
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj3.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = React4(BaseIconImage.BaseIconImage, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
};