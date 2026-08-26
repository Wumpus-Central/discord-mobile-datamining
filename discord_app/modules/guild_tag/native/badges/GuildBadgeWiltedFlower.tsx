// discord_app/modules/guild_tag/native/badges/GuildBadgeWiltedFlower.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import inlineStyles from "../../../../../_runtime/08052_inlineStyles.js";
import getTransformedBadgeColors from "GuildBadgeUtils.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#480733", "#800E6F", "#E011AC"];
let closure_5 = [0.1, 0.3, 0.55];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
let closure_7 = ["#096A4C", "#2DC92D"];
let closure_8 = [0.25, 0.55];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const result = require("set").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeWiltedFlower.tsx");

export const GuildBadgeWiltedFlower = function GuildBadgeWiltedFlower(width) {
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  ({ primaryTintColor, secondaryTintColor } = width);
  const merged = Object.assign(width, Object.create(null));
  let obj = getTransformedBadgeColors;
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items, secondaryBaseColors: closure_7, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  let tmp9;
  if (secondaryColorsTransformed != null) {
    tmp9 = secondaryColorsTransformed[1];
  }
  if (tmp9 == null) {
    tmp9 = tmp4[1];
  }
  items = [closure_2(inlineStyles.Path, { d: "M2 12h1v1h1v1h1v-1h1v1h1v1H3v-1H2v-1H1V10h1v2Zm3 1h-1v-1h1v1ZM11 2H6v1h-1v1h-1v8h-1V3h1V2h1V1h6v1Z", fill: tmp9 }), closure_2(inlineStyles.Path, { d: "M2 10H1v-1h1v1ZM8 10h-1v-1h1v1ZM9 7h-1V4h1v3ZM10 4h-1v-1h1v1Z", fill: "white" }), closure_2(inlineStyles.Path, { d: "M8 11h-1v-1h1v1ZM9 10h-1v-1h1v1ZM14 10h-2v-1h2v1ZM10 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-1v-2h1v2ZM12 6h-1V3h1v3Z", fill: primaryColorsTransformed[0] }), closure_2(inlineStyles.Path, { d: "M11 9h1v1h-1v1H8v-1h1v-1h1v-1h1v1Z", fill: primaryColorsTransformed[1] }), closure_2(inlineStyles.Path, { d: "M14 10v-1h1v2H12v-1h2ZM11 6h-1v2h-1v1h-1v-2h1V4h1v-1h1v3ZM13 4h1v5h-2v-1h-1v-2h1V3h1v1Z", fill: primaryColorsTransformed[2] }), , , ];
  let first;
  if (secondaryColorsTransformed != null) {
    first = secondaryColorsTransformed[0];
  }
  if (first == null) {
    first = tmp4[0];
  }
  items[5] = closure_2(inlineStyles.Path, { d: "M5 14h-1v-1h1v1ZM4 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM12 3H9V2h3v1Z", fill: first });
  items[6] = closure_2(inlineStyles.Path, { d: "M2 14h1v1h4v-1h1v2H2v-1H1v-2h1v1Z", fill: "black" });
  items[7] = closure_2(inlineStyles.Path, { d: "M7 14h-1v-1h1v1ZM3 11H2v-2H1v4H0V7h1v1h1V3h1v8ZM6 13h-1v-1h1v1ZM5 12h-1V4h1v8ZM11 12H7v-1h4v1ZM15 12H12v-1h3v1ZM7 11h-1v-2h1v2ZM12 11h-1v-1h1v1ZM16 11h-1v-2h1v2ZM8 9h-1V4h1v5ZM15 9h-1V4h1v5ZM6 4h-1v-1h1v1ZM9 4h-1v-1h-2V2h3v2ZM14 4h-1v-1h1v1ZM4 3h-1V2h1v1ZM13 3h-1V2h1v1ZM5 2h-1V1h1v1ZM12 2h-1V1h1v1ZM11 1H5V0h6v1Z", fill: "black" });
  obj.children = items;
  return closure_3(inlineStyles.Svg, obj);
};