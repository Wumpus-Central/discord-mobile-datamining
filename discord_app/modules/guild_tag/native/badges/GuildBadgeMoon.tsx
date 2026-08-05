// discord_app/modules/guild_tag/native/badges/GuildBadgeMoon.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#816bee", "#b79cf8", "#f0f0f0"];
let closure_5 = [0.15, 0.45, 0.9];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 5, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeMoon.tsx");

export const GuildBadgeMoon = function GuildBadgeMoon(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.create(null));
  let obj = require(13171) /* getTransformedBadgeColors */;
  obj = { primaryBaseColors: closure_4, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [callback(require(8437) /* inlineStyles */.Path, { d: "M14 5V3h-1V2h-1V1h-2v1h1v1h1v4h-1v1h-1v1H6V8H5V7H4V3h1V2h1V1H4v1H3v1H2v2H1v6h1v2h1v1h2v1h6v-1h2v-1h1v-2h1V5h-1Z", fill: primaryColorsTransformed[1] }), callback(require(8437) /* inlineStyles */.Path, { d: "M6 0H4v1h2V0ZM2 3H1v2h1V3ZM5 3H4v4h1V3ZM10 8H6v1h4V8Z", fill: "#000" }), callback(require(8437) /* inlineStyles */.Path, { d: "M10 9H6v1h4V9Z", fill: primaryColorsTransformed[2] }), callback(require(8437) /* inlineStyles */.Path, { d: "M1 5H0v6h1V5ZM11 15H5v1h6v-1Z", fill: "#000" }), callback(require(8437) /* inlineStyles */.Path, { d: "M2 10H1v1h1v-1ZM13 12h-2v1H5v-1H3v-1H2v2h1v1h2v1h6v-1h2v-1h1v-2h-1v1ZM15 10h-1v1h1v-1Z", fill: primaryColorsTransformed[0] }), callback(require(8437) /* inlineStyles */.Path, { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2Z", fill: "#000" }), callback(require(8437) /* inlineStyles */.Path, { d: "M6 1H4v1h2V1ZM4 2H3v1h1V2ZM3 3H2v1h1V3ZM2 5H1v1h1V5ZM3 6H2v1h1V6ZM5 7H4v1h1V7ZM6 8H5v1h1V8ZM12 7h-1v1h1V7ZM11 1h-1v1h1V1ZM11 8h-1v1h1V8Z", fill: primaryColorsTransformed[2] }), callback(require(8437) /* inlineStyles */.Path, { d: "M7 1H6v1h1V1ZM6 2H5v1h1V2ZM6 7H5v1h1V7ZM2 11H1v2h1v-2ZM3 13H2v1h1v-1ZM12 0h-2v1h2V0ZM13 14h-2v1h2v-1ZM5 14H3v1h2v-1ZM15 3h-1v2h1V3ZM12 3h-1v4h1V3ZM16 5h-1v6h1V5ZM13 1h-1v1h1V1ZM14 2h-1v1h1V2ZM10 1H9v1h1V1ZM11 2h-1v1h1V2ZM11 7h-1v1h1V7ZM15 11h-1v2h1v-2ZM14 13h-1v1h1v-1Z", fill: "#000" }), callback(require(8437) /* inlineStyles */.Path, { d: "M5 2H4v1h1V2Z", fill: primaryColorsTransformed[1] })];
  obj.children = items;
  return callback2(require(8437) /* inlineStyles */.Svg, obj);
};