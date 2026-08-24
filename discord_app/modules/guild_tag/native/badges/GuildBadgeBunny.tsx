// discord_app/modules/guild_tag/native/badges/GuildBadgeBunny.tsx
import inlineStyles from "../../../../../_runtime/06571_inlineStyles.js";
import getTransformedBadgeColors from "GuildBadgeUtils.tsx";
import closure_2 from "../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = ["#847D8B", "#D1CDD5"];
let closure_6 = [0.2, 0.65];
let items = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }];
const result = require("set").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBunny.tsx");

export const GuildBadgeBunny = function GuildBadgeBunny(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.create(null));
  const memo = React.useMemo(() => "badge-bunny-clip-" + callback(table[2]).v4(), []);
  let obj = getTransformedBadgeColors;
  obj = { primaryBaseColors: closure_5, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances: closure_6, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  obj1 = { clipPath: "url(#" + memo + ")", children: null };
  items = [callback(inlineStyles.Path, { d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M5 8H4V6H3V4H2V2H4V4H5V8Z", fill: "#FF7FC0" }), callback(inlineStyles.Path, { d: "M12 8H11V4H12V2H14V4H13V6H12V8Z", fill: "#FF7FC0" }), callback(inlineStyles.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M9 11H10V12H11V13H12V15H4V13H5V12H6V11H7V9H9V11Z", fill: "white" }), callback(inlineStyles.Path, { d: "M9 12V13H7V12H9Z", fill: "#FF1B90" }), callback(inlineStyles.Path, { d: "M14 15V16H2V15H14Z", fill: "black" }), callback(inlineStyles.Path, { d: "M2 15H1V14H2V15Z", fill: "black" }), callback(inlineStyles.Path, { d: "M15 15H14V14H15V15Z", fill: "black" }), callback(inlineStyles.Path, { d: "M2 14H1V13H2V14Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M15 14H14V13H15V14Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M1 14H0V12H1V14Z", fill: "black" }), callback(inlineStyles.Path, { d: "M16 14H15V12H16V14Z", fill: "black" }), callback(inlineStyles.Path, { d: "M2 12H1V10H2V12Z", fill: "black" }), callback(inlineStyles.Path, { d: "M15 12H14V10H15V12Z", fill: "black" }), callback(inlineStyles.Path, { d: "M3 10H2V9H3V10Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 10H13V9H14V10Z", fill: "black" }), callback(inlineStyles.Path, { d: "M4 9H3V8H4V9Z", fill: "black" }), callback(inlineStyles.Path, { d: "M13 9H12V8H13V9Z", fill: "black" }), callback(inlineStyles.Path, { d: "M3 8H2V6H3V8Z", fill: "black" }), callback(inlineStyles.Path, { d: "M7 7H9V3H10V7H11V8H5V7H6V3H7V7Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 8H13V6H14V8Z", fill: "black" }), callback(inlineStyles.Path, { d: "M2 6H1V4H2V6Z", fill: "black" }), callback(inlineStyles.Path, { d: "M15 6H14V4H15V6Z", fill: "black" }), callback(inlineStyles.Path, { d: "M1 4H0V1H1V4Z", fill: "black" }), callback(inlineStyles.Path, { d: "M16 4H15V1H16V4Z", fill: "black" }), callback(inlineStyles.Path, { d: "M6 3H5V1H6V3Z", fill: "black" }), callback(inlineStyles.Path, { d: "M11 3H10V1H11V3Z", fill: "black" }), callback(inlineStyles.Path, { d: "M5 1H1V0H5V1Z", fill: "black" }), callback(inlineStyles.Path, { d: "M15 1H11V0H15V1Z", fill: "black" }), callback(inlineStyles.Path, { d: "M6 12H5V10H6V12Z", fill: "black" }), callback(inlineStyles.Path, { d: "M11 12H10V10H11V12Z", fill: "black" }), callback(inlineStyles.Path, { d: "M14 14H12V15H14V14Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M4 14H2V15H4V14Z", fill: primaryColorsTransformed[0] })];
  obj1[1] = items;
  const items1 = [callback2(inlineStyles.G, obj1), ];
  const obj7 = { children: callback(inlineStyles.ClipPath, { id: memo, children: callback(inlineStyles.Rect, { width: "16", height: "16", fill: "white" }) }) };
  items1[1] = callback(inlineStyles.Defs, obj7);
  obj.children = items1;
  return callback2(inlineStyles.Svg, obj);
};