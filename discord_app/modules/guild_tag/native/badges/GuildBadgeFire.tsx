// discord_app/modules/guild_tag/native/badges/GuildBadgeFire.tsx
import "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/07901_inlineStyles.js";
import { getTransformedBadgeColors } from "GuildBadgeUtils.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#ba3500", "#fd6214", "#f0f0f0"];
let closure_5 = [0.1, 0.3, 1];
let items = [{ base: 3, tint: 1 }, { base: 3, tint: 1 }, { base: 10, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFire.tsx");

export const GuildBadgeFire = function GuildBadgeFire(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.create(null));
  let obj = getTransformedBadgeColors;
  obj = { primaryBaseColors: closure_4, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [callback(inlineStyles.Path, { d: "M13 6V4h-1V1h-1v1h-1v1H9v1H8v1H3v1H2v2H1v4h1v1h1v1h1v1h8v-1h1v-1h1V6h-1Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M0 8v4h1V8H0ZM15 9v3h1V9h-1ZM14 6v3h1V6h-1ZM13 4v2h1V4h-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M14 9v3h1V9h-1ZM13 6v3h1V6h-1ZM12 4v2h1V4h-1Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M1 6v2h1V6H1ZM7 3H6v1h1V3ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM2 5v1h1V5H2ZM1 12v1h1v-1H1ZM2 13v1h1v-1H2ZM3 14v1h1v-1H3ZM14 12v1h1v-1h-1ZM13 13v1h1v-1h-1ZM12 14v1h1v-1h-1ZM4 15v1h8v-1H4ZM3 4v1h1V4H3ZM4 3v1h1V3H4ZM5 2v1h1V2H5ZM9 2v1h1V2H9ZM10 1v1h1V1h-1ZM11 0v1h1V0h-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M11 1v1h1V1h-1ZM10 2v1h1V2h-1ZM9 3v1h1V3H9ZM8 4v1h1V4H8ZM5 3v1h1V3H5ZM4 4v1h1V4H4ZM6 4v1h1V4H6Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M5 4v1h1V4H5Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { opacity: 0.5, d: "M11 4v1h1V4h-1ZM12 9V8h-1V6h-1v1H9v1H6V7H5v2H3v2h1v2h1v1h6v-1h1v-2h1V9h-1Z", fill: "#fff" }), callback(inlineStyles.Path, { d: "M3 5v1h1V5H3ZM2 6v2h1V6H2ZM4 8v1h1V8H4Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M2 12v1h1v-1H2ZM3 13v1h1v-1H3ZM12 13v1h1v-1h-1ZM13 12v1h1v-1h-1ZM4 14v1h8v-1H4Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M1 8v2h1V8H1ZM11 10h-1V9H6v1H5v2h1v1h4v-1h1v-2Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M12 1v3h1V1h-1Z", fill: "#000" })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};