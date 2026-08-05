// discord_app/modules/guild_tag/native/badges/GuildBadgeWind.tsx
import "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/08409_inlineStyles.js";
import { getTransformedBadgeColors } from "GuildBadgeUtils.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#816bee", "#b79cf8", "#f0f0f0"];
let closure_5 = ["#6c9ca6", "#9af4dc", "#f0f0f0"];
let closure_6 = [0.07, 0.35, 1];
let items = [{ base: 4, tint: 1 }, { base: 1, tint: 1 }, { base: 8, tint: 1 }, { base: 6, tint: 1 }];
let closure_8 = [0.2, 0.75, 1];
const items1 = [{ base: 2, tint: 1 }, { base: 1, tint: 1 }, { base: 6, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeWind.tsx");

export const GuildBadgeWind = function GuildBadgeWind(width) {
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
  items = [callback(inlineStyles.Path, { d: "M14 4V3h-2V1H8v1H7v1H6V2H3v1H2v4H1v3h1V9h1V8h5V6h1V5h5v1h1V4h-1Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M9 6v1H8v2h1v2h2v1h3v-1h1V6H9Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M4 10v4h1v1h3v-1h1v-4H4Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M8 14H5v1h3v-1ZM14 11h-3v1h3v-1ZM15 10h-1v1h1v-1ZM9 13H8v1h1v-1Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M9 7H8v1h1V7ZM11 8h-1v1h1V8ZM14 6H9v1h5V6Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M8 1H7v1h1V1ZM15 3h-1v1h1V3ZM14 8h-1v2h1V8ZM9 6H8v1h1V6Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M9 5H8v1h1V5Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M3 9H2v1h1V9ZM7 13H6v1h1v-1ZM6 12H5v1h1v-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M6 12H5v1h1v-1ZM13 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM5 14H4v1h1v-1ZM9 14H8v1h1v-1ZM2 10H1v1h1v-1ZM3 14H2v1h1v-1ZM2 15H1v1h1v-1ZM15 4v2h-1v1h1v4h1V4h-1ZM13 2V1h-1v2h2V2h-1ZM6 1H3v1h3V1ZM13 7h-3v1h3V7ZM7 10H4v1h3v-1ZM8 15H5v1h3v-1ZM7 2H6v1h1V2ZM3 2H2v1h1V2Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M6 2H3v1h3V2ZM7 3H6v1h1V3ZM4 5H3v1h1V5ZM2 7H1v1h1V7ZM3 3H2v1h1V3Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M14 12h-3v1h3v-1ZM10 11V8H9v1H8v1h1v4h1v-2h1v-1h-1ZM15 11h-1v1h1v-1ZM2 3H1v4h1V3ZM1 7H0v3h1V7ZM4 11H3v3h1v-3ZM8 11H7v2h1v-2ZM1 11H0v4h1v-4ZM12 0H8v1h4V0Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M8 2H7v1h1V2ZM12 1H8v1h4V1Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M14 5H9v1h5V5Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M14 4V3h-1v1H9v1h5v1h1V4h-1Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M5 11H4v1h1v-1Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M7 6v1H3v1h5V6H7Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M7 7v1H3v1h5V7H7Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M3 8H2v1h1V8ZM2 9H1v1h1V9Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M3 9v1H2v1H1v4h1v-1h1v-3h1v-1h4V9H3Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M3 10H2v1h1v-1ZM2 11H1v1h1v-1Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M3 13H2v1h1v-1ZM2 14H1v1h1v-1Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M8 9H3v1h5V9Z", fill: secondaryColorsTransformed[2] })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};