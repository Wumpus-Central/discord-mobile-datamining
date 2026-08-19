// === Module 13402: items ===

// Module 13402 (items)
import noopAll from "noop" /* 19 */;
import inlineStyles from "inlineStyles" /* 6571 */;
import getTransformedBadgeColors from "getTransformedBadgeColors" /* 13377 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#87553B", "#B88166"];
let closure_5 = [0.2, 0.5];
let items = [{ base: 7, tint: 1 }, { base: 3, tint: 1 }];
const result = require("set").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeGoat.tsx");

export const GuildBadgeGoat = function GuildBadgeGoat(primaryTintColor) {
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
  items = [callback(inlineStyles.Path, { d: "M15 6H13V8H15V6Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M2.99998 6H0.999985V8H2.99998V6Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M9.99998 14H5.99998V5H6.99998V4H8.99998V5H9.99998V14Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M10 6V7H9V10H11V11H12V6H10Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M6 6V7H7V10H5V11H4V6H6Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M9.99998 12H5.99998V13H9.99998V12Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M15 7H13V8H15V7Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M2.99998 7H0.999985V8H2.99998V7Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M8.99998 14H6.99998V15H8.99998V14Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M9.99998 4H8.99998V5H9.99998V4Z", fill: "#D1CDD5" }), callback(inlineStyles.Path, { d: "M6.99998 4H5.99998V5H6.99998V4Z", fill: "#D1CDD5" }), callback(inlineStyles.Path, { d: "M11 5H9.99998V6H11V5Z", fill: "#D1CDD5" }), callback(inlineStyles.Path, { d: "M5.99998 5H4.99998V6H5.99998V5Z", fill: "#D1CDD5" }), callback(inlineStyles.Path, { d: "M5.99998 5H3.99998V3H2.99998V2H1.99998V1H4.99998V2H5.99998V5Z", fill: "white" }), callback(inlineStyles.Path, { d: "M9.99998 5H12V3H13V2H14V1H11V2H9.99998V5Z", fill: "white" }), callback(inlineStyles.Path, { d: "M12 2H11V3H12V2Z", fill: "#D1CDD5" }), callback(inlineStyles.Path, { d: "M4.99998 2H3.99998V3H4.99998V2Z", fill: "#D1CDD5" }), callback(inlineStyles.Path, { d: "M4.99998 0H1.99998V1H4.99998V0Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 0H11V1H14V0Z", fill: "black" }), callback(inlineStyles.Path, { d: "M5.99998 9V7H4.99999V9H5.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M11 9V7H9.99999V9H11Z", fill: "black" }), callback(inlineStyles.Path, { d: "M8.99998 12H6.99998V13H8.99998V12Z", fill: "black" }), callback(inlineStyles.Path, { d: "M8.99998 10H6.99998V11H8.99998V10Z", fill: "black" }), callback(inlineStyles.Path, { d: "M13 5V3H12V5H11V6H12V11H13V9H15V8H13V6H15V8H16V5H13Z", fill: "black" }), callback(inlineStyles.Path, { d: "M5 5H4V3H3V5H0V8H1V6H3V8H1V9H3V11H4V6H5V5Z", fill: "black" }), callback(inlineStyles.Path, { d: "M11 11V10H10V14H11V12H12V11H11Z", fill: "black" }), callback(inlineStyles.Path, { d: "M9.99998 14H8.99998V15H9.99998V14Z", fill: "black" }), callback(inlineStyles.Path, { d: "M7 15V14H6V15H5V16H9V15H7Z", fill: "black" }), callback(inlineStyles.Path, { d: "M5 10V11H4V12H5V14H6V10H5Z", fill: "black" }), callback(inlineStyles.Path, { d: "M2 2V1H1V3H3V2H2Z", fill: "black" }), callback(inlineStyles.Path, { d: "M5.99998 1H4.99998V2H5.99998V1Z", fill: "black" }), callback(inlineStyles.Path, { d: "M9 2V3H7V2H6V4H10V2H9Z", fill: "black" }), callback(inlineStyles.Path, { d: "M11 1H9.99998V2H11V1Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 1V2H13V3H15V1H14Z", fill: "black" })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};