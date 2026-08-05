import { inlineStyles } from "../../../../../_runtime/08437_inlineStyles.js";
import { getTransformedBadgeColors } from "GuildBadgeUtils.tsx";
// discord_app/modules/guild_tag/native/badges/GuildBadgeCat.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#353639", "#74767F", "#D1CDD5"];
let closure_5 = [0.1, 0.4, 0.7];
let items = [{ base: 10, tint: 1 }, { base: 4, tint: 1 }, { base: 6, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCat.tsx");

export const GuildBadgeCat = function GuildBadgeCat(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.create(null));
  let obj = getTransformedBadgeColors /* getTransformedBadgeColors */;
  obj = { primaryBaseColors: closure_4, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [callback(inlineStyles /* inlineStyles */.Path, { d: "M2 1H4V2H5V3H6V4H10V3H11V2H12V1H14V6H15V13H14V14H13V15H3V14H2V13H1V6H2V1Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles /* inlineStyles */.Path, { d: "M13 15V16H3V15H13Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M14 15H13V14H14V15Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M14 14H13V13H14V14Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles /* inlineStyles */.Path, { d: "M3 14H2V13H3V14Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles /* inlineStyles */.Path, { d: "M3 15H2V14H3V15Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M5 2H4V1H5V2Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M6 3H5V2H6V3Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M4 1H2V0H4V1Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M11 1H12V2H11V1Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M10 2H11V3H10V2Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M10 10H11V11H10V10Z", fill: "white" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M9 11H12V12H9V11Z", fill: "white" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M4 11H7V12H4V11Z", fill: "white" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M4 12H12V13H4V12Z", fill: "white" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M3 13.0005H13V14.0005H3V13.0005Z", fill: "white" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M5 10H6V11H5V10Z", fill: "white" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M6 9.00024H9.99999V10.0002H6V9.00024Z", fill: "white" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M12 0H14V1H12V0Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M10 4H6V3H10V4Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M15 14H14V13H15V14Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M14 13H13V12H14V13Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M2 14H1V13H2V14Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M3 13H2V12H3V13Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M16 13H15V6H16V13Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M15 6H14V0H15V6Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M2 6H1V0H2V6Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M1 13H0V6H1V13Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M10 2.99976H11V5.99976H10V2.99976Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles /* inlineStyles */.Path, { d: "M5 2.99976H6V5.99976H5V2.99976Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles /* inlineStyles */.Path, { d: "M7 3.99976H9V6.99983H7V3.99976Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles /* inlineStyles */.Path, { d: "M12 3H13V4H12V3Z", fill: "#FF7FC0" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M13 2H14V5H13V2Z", fill: "#FF7FC0" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M12 8.99994H11V7H12V8.99994Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M5 8.99994H4V7H5V8.99994Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M4 4H3V3H4V4Z", fill: "#FF7FC0" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M3 5H2V2H3V5Z", fill: "#FF7FC0" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M15 11H12V10H15V11Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M4 11H1V10H4V11Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M13 14H3V15H13V14Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles /* inlineStyles */.Path, { d: "M10 11H6V10H10V11Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M8.99999 12H7V11H8.99999V12Z", fill: "black" }), callback(inlineStyles /* inlineStyles */.Path, { d: "M9 9H7V7H9V9Z", fill: "white" })];
  obj.children = items;
  return callback2(inlineStyles /* inlineStyles */.Svg, obj);
};