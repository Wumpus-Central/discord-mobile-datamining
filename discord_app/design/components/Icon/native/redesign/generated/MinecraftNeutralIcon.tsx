// discord_app/design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseIconImage from "../../BaseIconImage.tsx";
import _mod8705 from "../../../../../../../_runtime/metro/08705__.js";
import _mod8706 from "../../../../../../../_runtime/metro/08706__.js";
import _mod8707 from "../../../../../../../_runtime/metro/08707__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

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
  const merged = Object.assign(
    secondaryColor,
    Object.assign({ style: 0, color: 0, secondaryColor: 0, tertiaryColor: 0 }),
  );
  let obj = { children: null };
  obj = { source: _mod8705, color, style };
  const merged1 = Object.assign(merged);
  const items = [React4(BaseIconImage.BaseIconImage, obj), ,];
  obj = { source: _mod8706, color: str, style: null };
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = React4(BaseIconImage.BaseIconImage, obj);
  const obj1 = { source: _mod8707, color: str2, style: null };
  const items3 = [style];
  const items4 = [];
  items4[HermesBuiltin.arraySpread(items3.flat(), 0)] = { position: "absolute", top: 0 };
  obj1.style = items4;
  const merged3 = Object.assign(merged);
  items[2] = React4(BaseIconImage.BaseIconImage, obj1);
  obj.children = items;
  return hasOwnProperty(View, obj);
};
