// === Module 9435: ExperimentalWebBadgeIcon ===

// Module 9435 (ExperimentalWebBadgeIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 5836 */;
import _mod9436 from "module_9436" /* 9436 */;
import _mod9437 from "module_9437" /* 9437 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ExperimentalWebBadgeIcon.tsx");

export function ExperimentalWebBadgeIcon(secondaryColor) {
  ({ style, color } = secondaryColor);
  if (color === undefined) {
    color = nativeDefault.colors.ICON_MUTED;
  }
  let str = secondaryColor.secondaryColor;
  if (str === undefined) {
    str = "#fff";
  }
  const merged = Object.assign(secondaryColor, Object.assign({ style: 0, color: 0, secondaryColor: 0 }));
  const obj = { children: null };
  const merged1 = Object.assign(merged);
  items = [React4(BaseIconImage.BaseIconImage, { source: _mod9436, color, style }), ];
  const obj3 = { source: _mod9437, color: str, style: null };
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj3.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = React4(BaseIconImage.BaseIconImage, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
}