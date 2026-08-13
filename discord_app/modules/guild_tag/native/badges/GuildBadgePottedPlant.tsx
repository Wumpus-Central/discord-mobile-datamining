// discord_app/modules/guild_tag/native/badges/GuildBadgePottedPlant.tsx
import "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/07880_inlineStyles.js";
import { getTransformedBadgeColors } from "GuildBadgeUtils.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#003E22", "#027D46", "#14A95C"];
let closure_5 = [0.1, 0.25, 0.45];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
let closure_7 = ["#FD7531", "#FFAE49", "#FFC781"];
let closure_8 = [0.45, 0.6, 0.75];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgePottedPlant.tsx");

export const GuildBadgePottedPlant = function GuildBadgePottedPlant(width) {
  let primaryColorsTransformed;
  let primaryTintColor;
  let secondaryColorsTransformed;
  let secondaryTintColor;
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
  items = [callback(inlineStyles.Path, { d: "M7 6h-2v-1h1v-1h1v2ZM10 5h1v1h-2v-2h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1ZM4 4h-1v-1h1v1ZM13 4h-1v-1h1v1Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M8 9h-1V4h1v5Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M6 3h1v1h-1v1h-1v-1h-1v1H2V2h4v1Zm-3 1h1v-1h-1v1Z", fill: primaryColorsTransformed[2], fillRule: "evenodd" }), callback(inlineStyles.Path, { d: "M14 3h-2v1h-1v1h-1v-2h1V2h3v1Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M9 9h-1V4h1v5ZM5 6h-2v-1h2v1ZM15 4h-1v1h-1v1h-2v-1h1v-1h1v-1h1V2h1v2Z", fill: primaryColorsTransformed[1] }), , , , , ];
  let str;
  if (secondaryColorsTransformed != null) {
    str = secondaryColorsTransformed[0];
  }
  if (str == null) {
    str = "#FD7531";
  }
  items[5] = callback(inlineStyles.Path, { d: "M13 11v1H3v-1h10Z", fill: str });
  items[6] = callback(inlineStyles.Path, { d: "M4 14h-1v-2h1v2ZM5 11h-2v-1h2v1ZM2 4H1V2h1v2ZM10 4h-1v-1h1v1ZM11 3h-1V2h1v1ZM5 2H2V1h3v1ZM14 2H11V1h3v1Z", fill: "white" });
  let str2;
  if (secondaryColorsTransformed != null) {
    str2 = secondaryColorsTransformed[2];
  }
  if (str2 == null) {
    str2 = "#FFC781";
  }
  items[7] = callback(inlineStyles.Path, { d: "M12 14H4v-2h8v2ZM13 11H5v-1h8v1Z", fill: str2 });
  let str3;
  if (secondaryColorsTransformed != null) {
    str3 = secondaryColorsTransformed[1];
  }
  if (str3 == null) {
    str3 = "#FFAE49";
  }
  items[8] = callback(inlineStyles.Path, { d: "M12 14v1H4v-1h8ZM13 14h-1v-2h1v2Z", fill: str3 });
  items[9] = callback(inlineStyles.Path, { d: "M12 15v1H4v-1h8ZM4 15h-1v-1h1v1ZM13 15h-1v-1h1v1ZM7 9h2V6h4v1H10v2h4v5h-1V10H3v4H2V9h4v-2H3v-1h4v3ZM3 6H2v-1h1v1ZM14 6h-1v-1h1v1ZM2 5H1v-1h1v1ZM15 5h-1v-1h1v1ZM1 4H0V2h1v2ZM9 4h-2v-1h2v1ZM16 4h-1V2h1v2ZM7 3h-1V2h1v1ZM10 3h-1V2h1v1ZM2 2H1V1h1v1ZM6 2h-1V1h1v1ZM11 2h-1V1h1v1ZM15 2h-1V1h1v1ZM5 1H2V0h3v1ZM14 1H11V0h3v1Z", fill: "black" });
  obj.children = items;
  return closure_3(inlineStyles.Svg, obj);
};