// === Module 8515: MinecraftNeutralIcon ===

// Module 8515 (MinecraftNeutralIcon)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx");

export const MinecraftNeutralIcon = function MinecraftNeutralIcon(secondaryColor) {
  let color;
  let style;
  ({ style, color } = secondaryColor);
  if (color === undefined) {
    color = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let str = secondaryColor.secondaryColor;
  if (str === undefined) {
    str = "#000";
  }
  let str2 = secondaryColor.tertiaryColor;
  if (str2 === undefined) {
    str2 = "#fff";
  }
  const merged = Object.assign(secondaryColor, Object.create(null));
  let obj = { children: null };
  obj = { source: null, color: null, style: null };
  obj[0] = require(8516) /* registerAsset */;
  obj[1] = color;
  obj[2] = style;
  const merged1 = Object.assign(merged);
  const items = [callback(require(3896) /* BaseIconImage */.BaseIconImage, obj), , ];
  obj = { source: null, color: null, style: null };
  obj[0] = require(8517) /* registerAsset */;
  obj[1] = str;
  const items1 = [style];
  const items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  obj[2] = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(require(3896) /* BaseIconImage */.BaseIconImage, obj);
  const obj1 = { source: null, color: null, style: null };
  obj1[0] = require(8518) /* registerAsset */;
  obj1[1] = str2;
  const items3 = [style];
  const items4 = [];
  items4[HermesBuiltin.arraySpread(items3.flat(), 0)] = { position: "absolute", top: 0 };
  obj1[2] = items4;
  const merged3 = Object.assign(merged);
  items[2] = callback(require(3896) /* BaseIconImage */.BaseIconImage, obj1);
  obj[0] = items;
  return callback2(View, obj);
};