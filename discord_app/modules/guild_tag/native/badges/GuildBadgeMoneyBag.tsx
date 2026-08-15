// discord_app/modules/guild_tag/native/badges/GuildBadgeMoneyBag.tsx
import "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/06571_inlineStyles.js";
import { getTransformedBadgeColors } from "GuildBadgeUtils.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#FFB84B", "#FFE361"];
let closure_5 = [0.5, 0.77];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeMoneyBag.tsx");

export const GuildBadgeMoneyBag = function GuildBadgeMoneyBag(primaryTintColor) {
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
  items = [callback(inlineStyles.Path, { d: "M1.99999 15V14H0.999985V9H1.99999V8H2.99999V7H3.99999V6H12V7H13V8H14V9H15V14H14V15H1.99999Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M14 15H1.99999V16H14V15Z", fill: "black" }), callback(inlineStyles.Path, { d: "M3.00002 1V2H4.00002V3H12V2H13V1H3.00002Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M0.999996 15H2V14H0.999996L0.999996 15Z", fill: "black" }), callback(inlineStyles.Path, { d: "M0.999996 9H2V8H0.999996L0.999996 9Z", fill: "black" }), callback(inlineStyles.Path, { d: "M1.99999 9H2.99999V8H1.99999V9Z", fill: "white" }), callback(inlineStyles.Path, { d: "M2.99999 8H3.99999V7H2.99999V8Z", fill: "white" }), callback(inlineStyles.Path, { d: "M3.99999 7H4.99999V6H3.99999V7Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M11 7H12V6H11V7Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M8.99999 12H9.99999V8H8.99999V12Z", fill: "black" }), callback(inlineStyles.Path, { d: "M5.99999 12H6.99999L6.99999 8H5.99999V12Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 10H15V9H14V10Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M1.99999 8H2.99999V7H1.99999V8Z", fill: "black" }), callback(inlineStyles.Path, { d: "M2.99999 7H3.99999V6H2.99999V7Z", fill: "black" }), callback(inlineStyles.Path, { d: "M2.99999 3H3.99999V2L2.99999 2V3Z", fill: "black" }), callback(inlineStyles.Path, { d: "M3.99999 2L6.99999 2V1L3.99999 1V2Z", fill: "white" }), callback(inlineStyles.Path, { d: "M0.999985 9L0.999985 12H1.99998L1.99998 9H0.999985Z", fill: "white" }), callback(inlineStyles.Path, { d: "M8.99999 12H6.99999V13H8.99999V12Z", fill: "black" }), callback(inlineStyles.Path, { d: "M8.99999 7H6.99999V8H8.99999V7Z", fill: "black" }), callback(inlineStyles.Path, { d: "M8.99999 8H6.99999V12H8.99999V8Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M2 14V12H1V14H2Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M15 14V12H14V14H15Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M1.99999 15L14 15V13L1.99999 13V15Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M0 14H1L1 9H0L0 14Z", fill: "black" }), callback(inlineStyles.Path, { d: "M15 14H14V15H15V14Z", fill: "black" }), callback(inlineStyles.Path, { d: "M15 8H14V9H15V8Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 7H13V8H14V7Z", fill: "black" }), callback(inlineStyles.Path, { d: "M13 6H12V7H13V6Z", fill: "black" }), callback(inlineStyles.Path, { d: "M13 2H12V3H13V2Z", fill: "black" }), callback(inlineStyles.Path, { d: "M13 0H3.00002H2.99996H2.00002V2H3.00002V1H13V2H14V0H13Z", fill: "black" }), callback(inlineStyles.Path, { d: "M12 3V2L4.00002 2V3L12 3Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M5 4V6H11V4H5Z", fill: "#AD7A60" }), callback(inlineStyles.Path, { d: "M16 9H15V14H16V9Z", fill: "black" }), callback(inlineStyles.Path, { d: "M4.00002 3V6H5.00002V4H11V6H12V3H4.00002Z", fill: "black" }), callback(inlineStyles.Path, { d: "M8.99999 8H6.99999V9H8.99999V8Z", fill: "white" })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};