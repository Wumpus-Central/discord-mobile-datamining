// === Module 8974: MinecraftNeutralIcon ===

// Module 8974 (MinecraftNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4456 */;
import _mod8975 from "module_8975" /* 8975 */;
import _mod8976 from "module_8976" /* 8976 */;
import _mod8977 from "module_8977" /* 8977 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx");

export const MinecraftNeutralIcon = function MinecraftNeutralIcon(secondaryColor) {
  ({ style, color } = secondaryColor);
  if (color === undefined) {
    color = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  let str = secondaryColor.secondaryColor;
  if (str === undefined) {
    str = "#000";
  }
  let str2 = secondaryColor.tertiaryColor;
  if (str2 === undefined) {
    str2 = "#fff";
  }
  const merged = Object.assign(secondaryColor, Object.assign({ style: 0, color: 0, secondaryColor: 0, tertiaryColor: 0 }));
  const obj = { children: null };
  const merged1 = Object.assign(merged);
  const items = [React4(BaseIconImage.BaseIconImage, { source: _mod8975, color, style }), , ];
  const obj3 = { source: _mod8976, color: str, style: null };
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj3.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = React4(BaseIconImage.BaseIconImage, obj3);
  const obj4 = { source: _mod8977, color: str2, style: null };
  const items3 = [style];
  const items4 = [];
  items4[HermesBuiltin.arraySpread(items3.flat(), 0)] = { position: "absolute", top: 0 };
  obj4.style = items4;
  const merged3 = Object.assign(merged);
  items[2] = React4(BaseIconImage.BaseIconImage, obj4);
  obj.children = items;
  return hasOwnProperty(View, obj);
};