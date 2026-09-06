// === Module 13935: items ===

// Module 13935 (items)
import noopAll from "noop" /* 19 */;
import inlineStyles from "inlineStyles" /* 8453 */;
import getTransformedBadgeColors from "getTransformedBadgeColors" /* 13917 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#4282D8", "#54cfff", "#f0f0f0"];
let closure_5 = ["#6c9ca6", "#9af4dc", "#f0f0f0"];
let closure_6 = [0.1, 0.35, 1];
let items = [{ base: 8, tint: 1 }, { base: 6, tint: 1 }, { base: 8, tint: 1 }];
let closure_8 = [0.1, 0.6, 1];
const items1 = [{ base: 4, tint: 1 }, { base: 1, tint: 1 }, { base: 8, tint: 1 }];
const result = require("set").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSnow.tsx");

export const GuildBadgeSnow = function GuildBadgeSnow(width) {
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
  items = [callback(inlineStyles.Path, { d: "M11 10h1V9h3V8h-3V7h-1V4h2V3h-3v1H7V3H6V2H4v1H3v1H2v1H1v6h1v1h1v1h1v-2h4v1H7v1h1v1h2v-1h3v-1h-2v-2Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M9 11H8v1h1v-1ZM13 12h-1v1h1v-1ZM15 8h-1v1h1V8ZM12 7h-1v1h1V7ZM3 10H2v1h1v-1ZM4 11H3v2h1v-2ZM10 13H7v1h3v-1ZM10 10H9v1h1v-1Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M9 0H8v1h1V0ZM10 1H9v1h1V1ZM8 1H4v1h4V1ZM4 2H3v1h1V2ZM7 2H6v1h1V2ZM8 3H7v1h1V3ZM10 3H9v1h1V3ZM13 2h-3v1h3V2ZM14 3h-1v1h1V3ZM3 3H2v1h1V3ZM2 4H1v1h1V4ZM1 5H0v6h1V5ZM3 6H2v4h1V6ZM4 5H3v1h1V5ZM9 4H4v1h5V4Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M9 4H8v2h1V4ZM13 4h-2v1h2V4Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M12 4h-1v3h1V4ZM15 7h-3v1h3V7ZM16 8h-1v1h1V8ZM10 6H9v4h1V6ZM15 9h-3v1h3V9ZM12 10h-1v2h1v-2Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M13 11h-2v1h2v-1ZM14 12h-1v1h1v-1ZM13 13h-3v1h3v-1ZM10 14H6v1h4v-1ZM8 11H4v1h4v-1ZM6 15H5v1h1v-1ZM5 14H4v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM7 12H6v1h1v-1ZM3 12H2v1h1v-1ZM2 11H1v1h1v-1ZM4 10H3v1h1v-1ZM9 10H8v1h1v-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M9 6H8V5H4v1H3v4h1v1h4v-1h1V6Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M8 10H4v1h4v-1ZM4 9H3v1h1V9ZM9 9H8v1h1V9Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M4 6H3v1h1V6ZM6 7H5v1h1V7ZM8 5H4v1h4V5Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M8 13H7v1h1v-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M2 5H1v2h1V5ZM4 3H3v1h1V3ZM6 2H4v1h2V2ZM13 3h-3v1h3V3ZM9 1H8v1H7v1h1v1h1V3h1V2H9V1ZM6 12H5v1H4v1h1v1h1v-1h1v-1H6v-1Z", fill: primaryColorsTransformed[2] })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};