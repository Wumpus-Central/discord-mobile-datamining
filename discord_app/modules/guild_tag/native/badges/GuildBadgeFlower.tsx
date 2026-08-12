// discord_app/modules/guild_tag/native/badges/GuildBadgeFlower.tsx
import "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/07876_inlineStyles.js";
import { getTransformedBadgeColors } from "GuildBadgeUtils.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#ff1c90", "#ff7fc0", "#f0f0f0"];
let closure_5 = ["#008456", "#6be473", "#f0f0f0"];
let closure_6 = [0.1, 0.45, 1];
let items = [{ base: 8, tint: 1 }, { base: 4, tint: 1 }, { base: 6, tint: 1 }];
let closure_8 = [0.1, 0.35, 1];
const items1 = [{ base: 8, tint: 1 }, { base: 4, tint: 1 }, { base: 6, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFlower.tsx");

export const GuildBadgeFlower = function GuildBadgeFlower(width) {
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
  items = [callback(inlineStyles.Path, { d: "M15 2h-1V1h-3v3h-1V2H9V1H7v1H6v2H5V1H2v1H1v4h1v1h2v1h1v2h1v1h1v1h2v-1h1v-1h1V8h1V7h2V6h1V2Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M9 0H7v1h2V0ZM5 0H2v1h3V0ZM14 0h-3v1h3V0ZM15 1h-1v1h1V1ZM16 2h-1v4h1V2ZM10 1H9v1h1v2h1V1h-1ZM5 1v3h1V2h1V1H5ZM2 1H1v1h1V1ZM1 2H0v4h1V2ZM2 6H1v1h1V6ZM4 7H2v1h2V7ZM14 7h-2v1h2V7ZM15 6h-1v1h1V6ZM12 9V8h-1v2h4V9h-3ZM4 8v1H1v1h4V8H4ZM1 10H0v4h1v-4ZM2 14H1v1h1v-1ZM14 15H2v1h12v-1ZM15 14h-1v1h1v-1ZM16 10h-1v4h1v-4ZM6 10H5v1h1v-1ZM7 11H6v1h1v-1ZM10 11H9v1h1v-1ZM11 10h-1v1h1v-1ZM9 12H7v1h2v-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M11 10v1h-1v1H9v1H7v-1H6v-1H5v-1H1v4h1v1h12v-1h1v-4h-4Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M4 12H3v1h1v-1ZM3 11H2v1h1v-1ZM12 14v-1h-1v1H9v-1H7v1H5v-1H4v1H2v1h12v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 13h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M6 9H5v1h1V9ZM7 10H6v1h1v-1ZM10 10H9v1h1v-1ZM11 9h-1v1h1V9ZM12 7h-1v1h1V7ZM14 6h-1v1h1V6ZM15 4h-1v2h1V4ZM9 11H7v1h2v-1Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M10 12H9v1h1v-1ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM1 10v2h1v-1h3v-1H1Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M2 2H1v2h1V2ZM5 1H2v1h3V1ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM12 1h-1v2h1V2h2V1h-2Z", fill: primaryColorsTransformed[2] })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};