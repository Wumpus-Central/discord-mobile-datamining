// === Module 13909: items ===

// Module 13909 (items)
import noopAll from "noop" /* 19 */;
import inlineStyles from "inlineStyles" /* 8254 */;
import getTransformedBadgeColors from "getTransformedBadgeColors" /* 13895 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#ff1c90", "#ff7fc0", "#ffa5d3", "#f0f0f0"];
let closure_5 = ["#816bee", "#b79cf8", "#cdbafa", "#f0f0f0"];
let closure_6 = [0.1, 0.3, 0.5, 0.9];
let items = [{ base: 8, tint: 1 }, { base: 4, tint: 1 }, { base: 3, tint: 1 }, { base: 4, tint: 1 }];
let closure_8 = [0.1, 0.3, 0.5, 0.9];
const items1 = [{ base: 8, tint: 1 }, { base: 4, tint: 1 }, { base: 3, tint: 1 }, { base: 4, tint: 1 }];
const result = require("set").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeGem.tsx");

export const GuildBadgeGem = function GuildBadgeGem(width) {
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
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_6, primaryLuminanceWeights: items, secondaryBaseColors: closure_5, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [callback(inlineStyles.Path, { d: "M13 8v1h-1v1h-1V3h-1V2H9V1H8v14h6v-1h-2v-1h1v-1h1v-1h1V8h-2Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M7 1v1H6v1H5v8H3v-1H1v4h1v1h6V1H7Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M9 0H7v1h2V0ZM7 1H6v1h1V1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M9 1H7v1h2V1ZM7 2H6v1h1V2ZM7 6H6v1h1V6Z", fill: primaryColorsTransformed[3] }), callback(inlineStyles.Path, { d: "M5 12H4v1h1v-1Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M6 12H5v1h1v-1ZM2 13H1v1h1v-1ZM8 14H2v1h6v-1Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M4 13H3v1h1v-1ZM3 12H2v1h1v-1ZM6 10V8H5v3h1v3h1v-4H6ZM7 2v3H6v1h1v3h1V2H7Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M14 8h-1v1h1V8ZM13 9h-1v1h1V9Z", fill: secondaryColorsTransformed[3] }), callback(inlineStyles.Path, { d: "M5 11H3v1h2v-1ZM3 10H1v1h2v-1Z", fill: primaryColorsTransformed[3] }), callback(inlineStyles.Path, { d: "M2 12v-2H1v2h1Z", fill: primaryColorsTransformed[3] }), callback(inlineStyles.Path, { d: "M11 3h-1v1h1V3Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M6 3H5v3h1V3Z", fill: primaryColorsTransformed[3] }), callback(inlineStyles.Path, { d: "M10 1H9v1h1V1ZM11 2h-1v1h1V2ZM6 11H5v1h1v-1ZM15 11h-1v1h1v-1ZM13 12v1h-1v1h2v-2h-1ZM14 14v1H2v1h13v-2h-1ZM2 14H1v1h1v-1ZM16 7h-3v1h3V7ZM3 9H0v1h3V9Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M1 14V9H0v5h1ZM16 11V8h-1v3h1ZM6 2H5v1h1V2ZM4 3v7H3v1h2V3H4ZM12 8V3h-1v7h1V9h1V8h-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M9 2H8v2h1V2ZM10 6V4H9v4h1v1h1V6h-1ZM12 10h-1v1h1v-1ZM9 10H8v3h1v-3ZM11 13h-1v1h1v-1ZM11 11h-1v1h1v-1ZM12 12h-1v1h1v-1Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M12 14v-1h-1v1H8v1h6v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};