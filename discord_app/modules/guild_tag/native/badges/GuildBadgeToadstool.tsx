// discord_app/modules/guild_tag/native/badges/GuildBadgeToadstool.tsx
import "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/07758_inlineStyles.js";
import { getTransformedBadgeColors } from "GuildBadgeUtils.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#be0351", "#ff2c52"];
let closure_5 = ["#ffb84b", "#ffe361"];
let closure_6 = [0.12, 0.25];
let items = [{ base: 5, tint: 1 }, { base: 4, tint: 1 }];
let closure_8 = [0.4, 0.8];
const items1 = [{ base: 5, tint: 1 }, { base: 4, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeToadstool.tsx");

export const GuildBadgeToadstool = function GuildBadgeToadstool(width) {
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
  items = [callback(inlineStyles.Path, { d: "M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M12 0H4v1h8V0Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z", fill: "#fff" }), callback(inlineStyles.Path, { d: "M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M2 7V3H1v6h2V7H2Z", fill: "#fff" }), callback(inlineStyles.Path, { d: "M15 3h-1v6h1V3Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z", fill: "#fff" }), callback(inlineStyles.Path, { opacity: 0.5, d: "M15 6h-1v2h1V6Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M6 10H5v2h1v-2Z", fill: "#fff" }), callback(inlineStyles.Path, { d: "M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M5 12H4v2h1v-2Z", fill: "#fff" }), callback(inlineStyles.Path, { d: "M4 9H2v1h2V9ZM14 9h-2v1h2V9Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M8 6H6v2h2V6Z", fill: "#fff" }), callback(inlineStyles.Path, { opacity: 0.5, d: "M8 7H6v1h2V7Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M10 8H6v1h4V8Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M10 9H6v1h4V9Z", fill: "#fff" }), callback(inlineStyles.Path, { d: "M2 2H1v1h1V2Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M5 3H4v1h1V3Z", fill: "#fff" }), callback(inlineStyles.Path, { d: "M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z", fill: "#000" })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};