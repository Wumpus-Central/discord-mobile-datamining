// discord_app/modules/guild_tag/native/badges/GuildBadgeFrog.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#008456", "#6BE473"];
let closure_5 = [0.2, 0.5];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
let closure_7 = ["#FFB84B", "#FFE361"];
let closure_8 = [0.4, 0.8];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFrog.tsx");

export const GuildBadgeFrog = function GuildBadgeFrog(width) {
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
  let obj = require(13171) /* getTransformedBadgeColors */;
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items, secondaryBaseColors: closure_7, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [callback(require(8437) /* inlineStyles */.Path, { d: "M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z", fill: primaryColorsTransformed[1] }), callback(require(8437) /* inlineStyles */.Path, { d: "M13 3V2H10V3H13Z", fill: "white" }), callback(require(8437) /* inlineStyles */.Path, { d: "M13 7V6H10V7H13Z", fill: "white" }), callback(require(8437) /* inlineStyles */.Path, { d: "M14 6V3H13V6H14Z", fill: "white" }), callback(require(8437) /* inlineStyles */.Path, { d: "M10 6V3H9V6H10Z", fill: "white" }), callback(require(8437) /* inlineStyles */.Path, { d: "M6 3V2H3V3H6Z", fill: "white" }), callback(require(8437) /* inlineStyles */.Path, { d: "M6 7V6H3V7H6Z", fill: "white" }), callback(require(8437) /* inlineStyles */.Path, { d: "M7 6V3H6V6H7Z", fill: "white" }), callback(require(8437) /* inlineStyles */.Path, { d: "M3 6V3H2V6H3Z", fill: "white" }), callback(require(8437) /* inlineStyles */.Path, { d: "M3.00002 10V12H4.00002V13H12V12H13V10H3.00002Z", fill: secondaryColorsTransformed[1] }), callback(require(8437) /* inlineStyles */.Path, { d: "M12 13H4V14H12V13Z", fill: secondaryColorsTransformed[0] }), callback(require(8437) /* inlineStyles */.Path, { d: "M13 13V12H12V13H13Z", fill: secondaryColorsTransformed[0] }), callback(require(8437) /* inlineStyles */.Path, { d: "M4 13V12H3.00001V13H4Z", fill: secondaryColorsTransformed[0] }), callback(require(8437) /* inlineStyles */.Path, { d: "M14 13V12H13V13H14Z", fill: primaryColorsTransformed[0] }), callback(require(8437) /* inlineStyles */.Path, { d: "M3.00002 13V12H2.00001V13H3.00002Z", fill: primaryColorsTransformed[0] }), callback(require(8437) /* inlineStyles */.Path, { d: "M15 11H14V12H15V11Z", fill: primaryColorsTransformed[0] }), callback(require(8437) /* inlineStyles */.Path, { d: "M2 11H1V12H2V11Z", fill: primaryColorsTransformed[0] }), callback(require(8437) /* inlineStyles */.Path, { d: "M14 14V13H12V14H14Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M9 3V2H7V3H9Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M13 2V1L9 1V2H13Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M7 2V1L3 1V2H7Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M4 14V13H2V14H4Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M15 12H14V13H15V12Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M14 2H13V3H14V2Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M3 2H2V3H3V2Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M2 12H1V13H2V12Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M12 14H4V15H12V14Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M16 12V6.99998H15V12H16Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M15 7V3H14V7H15Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M2 7L2 3H1L1 7H2Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M1 12L1 6.99998H0L0 12H1Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M13 6V3H10V6H13Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M6 6V3H3V6H6Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M13 9H3V10H13V9Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M14 8H13V9H14V8Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M7 7H6V8H7V7Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M10 7H9V8H10V7Z", fill: "black" }), callback(require(8437) /* inlineStyles */.Path, { d: "M3 8H2V9H3V8Z", fill: "black" })];
  obj.children = items;
  return callback2(require(8437) /* inlineStyles */.Svg, obj);
};