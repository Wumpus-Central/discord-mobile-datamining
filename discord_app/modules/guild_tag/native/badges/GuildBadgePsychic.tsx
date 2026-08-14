// discord_app/modules/guild_tag/native/badges/GuildBadgePsychic.tsx
import "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/07901_inlineStyles.js";
import { getTransformedBadgeColors } from "GuildBadgeUtils.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#7fb134", "#bcef42", "#f0f0f0"];
let closure_5 = ["#816bee", "#b79cf8"];
let closure_6 = [0.1, 0.6, 0.95];
let items = [{ base: 8, tint: 1 }, { base: 4, tint: 1 }, { base: 8, tint: 1 }];
let closure_8 = [0.1, 0.3];
const items1 = [{ base: 8, tint: 1 }, { base: 6, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgePsychic.tsx");

export const GuildBadgePsychic = function GuildBadgePsychic(width) {
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
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_6, primaryLuminanceWeights: items, secondaryBaseColors: closure_5, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [callback(inlineStyles.Path, { d: "M14 4V3h-1V2h-1V1H6v1H4v1H3v1H2v2H1v5h1v1h1v1h1v1h1v1h5v-1h2v-1h1v-1h1v-2h1V4h-1Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M15 1h-2v1h2V1Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M3 13H1v1h2v-1Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M4 14H1v1h3v-1Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M15 8h-1v2h1V8Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M12 1H6v1h6V1Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M12 2H6v1h6V2Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M10 14H5v1h5v-1Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M15 2h-1v1h1V2Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M6 5H5v1h1V5ZM3 4H2v1h1V4ZM4 3H3v1h1V3Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M6 3H5v1h1V3ZM13 3h-1v1h1V3Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M5 2H4v1h1V2ZM7 6H6v1h1V6ZM2 12H1v1h1v-1Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M14 11h-1v1h1v-1ZM13 12h-1v1h1v-1ZM12 13h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M15 1v2h-1V2h-1v1h1v1h1v6h1V1h-1ZM3 3H2v1h1V3ZM4 2h2V1H4v1H3v1h1V2ZM15 10h-1v2h1v-2ZM2 4H1v2h1V4ZM12 14h-2v1h2v-1ZM14 12h-1v1h1v-1ZM3 12H2v1h1v-1ZM4 13H3v1h1v-1ZM2 11H1v1h1v-1ZM13 13h-1v1h1v-1ZM1 6H0v9h1V6Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M12 2h1V1h2V0H6v1h6v1ZM5 15v-1H4v1H1v1h9v-1H5Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M2 6H1v2h1V6Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M10 6H8v1h2V6ZM9 10H7v1h2v-1ZM11 7h-1v2h1V7ZM3 11h2v-1H4V5H3v6ZM11 4H7v1h4V4ZM10 12H6v1h4v-1ZM15 5h-1v3h1V5ZM2 8H1v3h1V8ZM5 4H4v1h1V4ZM8 7H7v1h1V7ZM7 9H6v1h1V9ZM6 11H5v1h1v-1ZM10 9H9v1h1V9ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM7 6V5H6v1H5v3h1V6h1ZM14 4h-1v1h1V4ZM12 5h-1v1h1V5ZM13 6h-1v4h1V6ZM3 11H2v1h1v-1ZM4 12H3v1h1v-1ZM5 13H4v1h1v-1Z", fill: secondaryColorsTransformed[1] })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};