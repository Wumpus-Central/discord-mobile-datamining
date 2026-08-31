// === Module 13643: items ===

// Module 13643 (items)
import noopAll from "noop" /* 19 */;
import inlineStyles from "inlineStyles" /* 8209 */;
import getTransformedBadgeColors from "getTransformedBadgeColors" /* 13623 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#ffb84b", "#ffe361", "#f0f0f0"];
let closure_5 = ["#ba3500", "#fd6214", "#f0f0f0"];
let closure_6 = [0.07, 0.45, 1];
let items = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }, { base: 8, tint: 1 }, { base: 8, tint: 1 }];
let closure_8 = [0.1, 0.4, 1];
const items1 = [{ base: 2, tint: 1 }, { base: 1, tint: 2 }, { base: 4, tint: 1 }];
const result = require("set").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSun.tsx");

export const GuildBadgeSun = function GuildBadgeSun(width) {
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
  items = [callback(inlineStyles.Path, { d: "M14 6v1h-3V6h-1V5H9V2h1V1H1v1h2v1h1v1h2v2H5v1H4v2H3v2H2v2H1v2h3v-1h2v-1h1v-1h1v-1h2v-1h1V9h1v1h1v1h1v1h1V6h-1Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M14 0h-3v1h3V0ZM4 15H1v1h3v-1ZM6 14H4v1h2v-1ZM3 2H1v1h2V2ZM4 4v1h1v1h1V4H4ZM4 7H3v2h1V7ZM3 9H2v2h1V9ZM2 11H1v2h1v-2ZM1 13H0v2h1v-2ZM10 11H8v1h2v-1ZM10 0H1v1h9V0Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M10 1H1v1h9V1Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M14 6h-3v1h3V6ZM11 1h-1v1h1V1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M11 2h-1v2h1V2ZM14 1h-3v1h3V1Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M14 5h-3v1h3V5Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M1 1H0v1h1V1ZM4 3H3v1h1V3ZM5 6H4v1h1V6ZM15 1h-1v1h1V1ZM16 2h-1v3h1V2Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M15 2h-1v3h1V2Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M16 6h-1v6h1V6Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M15 6h-1v6h1V6Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M15 5h-1v1h1V5ZM10 2H9v3h1V2ZM11 5h-1v1h1V5Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M11 4h-1v1h1V4Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M7 13H6v1h1v-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M10 7v1H9v1H8v1H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h2v-1h1V7h-1ZM4 14H3v1h1v-1Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M8 12H7v1h1v-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M5 7H4v1h1V7ZM6 6H5v1h1V6Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M7 5H6v1h1V5ZM8 4H7v1h1V4Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M6 8H5v1h1V8ZM4 9H3v1h1V9ZM3 11H2v1h1v-1ZM2 13H1v1h1v-1Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M11 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM13 10h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 12h-1v1h1v-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M14 2h-3v3h3V2Z", fill: secondaryColorsTransformed[1] })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};