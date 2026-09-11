// === Module 8795: MinecraftNeutralIcon ===

// Module 8795 (MinecraftNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod8796 from "module_8796" /* 8796 */;
import _mod8797 from "module_8797" /* 8797 */;
import _mod8798 from "module_8798" /* 8798 */;
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
  let obj = { children: null };
  obj = { source: _mod8796, color, style };
  const merged1 = Object.assign(merged);
  const items = [React4(BaseIconImage.BaseIconImage, obj), , ];
  obj = { source: _mod8797, color: str, style: null };
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = React4(BaseIconImage.BaseIconImage, obj);
  const obj1 = { source: _mod8798, color: str2, style: null };
  const items3 = [style];
  const items4 = [];
  items4[HermesBuiltin.arraySpread(items3.flat(), 0)] = { position: "absolute", top: 0 };
  obj1.style = items4;
  const merged3 = Object.assign(merged);
  items[2] = React4(BaseIconImage.BaseIconImage, obj1);
  obj.children = items;
  return hasOwnProperty(View, obj);
};