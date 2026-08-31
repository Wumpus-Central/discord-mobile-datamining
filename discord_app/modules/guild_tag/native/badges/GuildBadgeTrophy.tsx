// discord_app/modules/guild_tag/native/badges/GuildBadgeTrophy.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import inlineStyles from "../../../../../_runtime/08209_inlineStyles.js";
import getTransformedBadgeColors from "GuildBadgeUtils.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#FD6214", "#FFB84B", "#FFE361"];
let closure_5 = [0.3, 0.56, 0.77];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const result = require("set").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeTrophy.tsx");

export const GuildBadgeTrophy = function GuildBadgeTrophy(primaryTintColor) {
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
  items = [callback(inlineStyles.Path, { d: "M4.99998 8.99999V10H7V13H4V15H12V13H9V10H11V8.99999H12V7.99999H14V6.99999H15V3.99999H14V2.99999H12V1H4V3H2V3.99999H0.999985V6.99999H1.99998V7.99999H3.99998V8.99999H4.99998Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M12 15H3.99998V16H12V15Z", fill: "black" }), callback(inlineStyles.Path, { d: "M12 14H3.99998V15H12V14Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M13 13H12V15H13V13Z", fill: "black" }), callback(inlineStyles.Path, { d: "M3.99998 8.99998V7.99998H1.99998V8.99998H3.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M3.99998 13H2.99998V15H3.99998V13Z", fill: "black" }), callback(inlineStyles.Path, { d: "M5 10V11H6V12H4V13H7V10H5Z", fill: "black" }), callback(inlineStyles.Path, { d: "M0 6.99998H1L1 3.99998H0L0 6.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M1 6.99998H2L2 3.99998H1L1 6.99998Z", fill: "white" }), callback(inlineStyles.Path, { d: "M5 7.99998H6L6 3.99998H5V7.99998Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M3 6.99998H4L4 3.99998H3L3 6.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M12 6.99998H13V3.99998H12V6.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M12 8H11V7H9V8H7V10H8V13H9V10H11V9H12V8Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M4.99998 8.99998H3.99998V9.99998H4.99998V8.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M4.99998 7.99998H3.99998V8.99998H4.99998V7.99998Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M5.99998 8.99998H4.99998V9.99998H5.99998V8.99998Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M6.99998 7.99998H5.99998V8.99998H6.99998V7.99998Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M6.99998 6.99998H5.99998V7.99998H6.99998V6.99998Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M11 6.99998H10V7.99998H11V6.99998Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M14 6.99998H12V7.99998H14V6.99998Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M10 7.99998H9V8.99998H10V7.99998Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M11 2H10V6.99999H11V2Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M5.99998 2H4.99998V3.99999H5.99998V2Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M14 3.99998V2.99998H12V3.99998H14Z", fill: "white" }), callback(inlineStyles.Path, { d: "M8 10H7V12H8V10Z", fill: "white" }), callback(inlineStyles.Path, { d: "M1.99998 6.99998H0.999985V7.99998H1.99998V6.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M3 7V4H2V8H4V7H3Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M1.99998 2.99998H0.999985V3.99998H1.99998V2.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M10 12V11H11V10H9V13H12V12H10Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 8.99998V7.99998H12V8.99998H14Z", fill: "black" }), callback(inlineStyles.Path, { d: "M16 3.99998H15V6.99998H16V3.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 3.99998H13V6.99998H14V3.99998Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M13 2V0H3V2H2V3H4V1H12V3H14V2H13Z", fill: "black" }), callback(inlineStyles.Path, { d: "M11 9.99998H12V8.99998H11V9.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 7.99998H15V6.99998H14V7.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 3.99998H15V2.99998H14V3.99998Z", fill: "black" }), callback(inlineStyles.Path, { d: "M7 13H4V14H7V13Z", fill: "white" }), callback(inlineStyles.Path, { d: "M4 1V8H5V2H6V7H7V2H12V1H4Z", fill: "white" })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};