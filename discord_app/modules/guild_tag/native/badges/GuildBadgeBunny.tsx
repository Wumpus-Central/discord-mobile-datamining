// === Module 14053: GuildBadgeBunny ===

// Module 14053 (GuildBadgeBunny)
import v1 from "v1" /* 1255 */;
import inlineStyles from "inlineStyles" /* 8606 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 14031 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const primaryBaseColors = ["#847D8B", "#D1CDD5"];
const primaryTintLuminances = [0.2, 0.65];
let items = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBunny.tsx");

export const GuildBadgeBunny = function GuildBadgeBunny(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
  const memo = noop.useMemo(() => "badge-bunny-clip-" + v1.v4(), []);
  const primaryColorsTransformed = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items }).primaryColorsTransformed;
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.width = num;
  obj3.height = num2;
  obj3.viewBox = "0 0 16 16";
  obj3.fill = "none";
  const obj4 = { clipPath: "url(#" + memo + ")", children: null };
  items = [React3(inlineStyles.Path, { d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z", fill: primaryColorsTransformed[1] }), React3(inlineStyles.Path, { d: "M5 8H4V6H3V4H2V2H4V4H5V8Z", fill: "#FF7FC0" }), React3(inlineStyles.Path, { d: "M12 8H11V4H12V2H14V4H13V6H12V8Z", fill: "#FF7FC0" }), React3(inlineStyles.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M9 11H10V12H11V13H12V15H4V13H5V12H6V11H7V9H9V11Z", fill: "white" }), React3(inlineStyles.Path, { d: "M9 12V13H7V12H9Z", fill: "#FF1B90" }), React3(inlineStyles.Path, { d: "M14 15V16H2V15H14Z", fill: "black" }), React3(inlineStyles.Path, { d: "M2 15H1V14H2V15Z", fill: "black" }), React3(inlineStyles.Path, { d: "M15 15H14V14H15V15Z", fill: "black" }), React3(inlineStyles.Path, { d: "M2 14H1V13H2V14Z", fill: primaryColorsTransformed[0] }), React3(inlineStyles.Path, { d: "M15 14H14V13H15V14Z", fill: primaryColorsTransformed[0] }), React3(inlineStyles.Path, { d: "M1 14H0V12H1V14Z", fill: "black" }), React3(inlineStyles.Path, { d: "M16 14H15V12H16V14Z", fill: "black" }), React3(inlineStyles.Path, { d: "M2 12H1V10H2V12Z", fill: "black" }), React3(inlineStyles.Path, { d: "M15 12H14V10H15V12Z", fill: "black" }), React3(inlineStyles.Path, { d: "M3 10H2V9H3V10Z", fill: "black" }), React3(inlineStyles.Path, { d: "M14 10H13V9H14V10Z", fill: "black" }), React3(inlineStyles.Path, { d: "M4 9H3V8H4V9Z", fill: "black" }), React3(inlineStyles.Path, { d: "M13 9H12V8H13V9Z", fill: "black" }), React3(inlineStyles.Path, { d: "M3 8H2V6H3V8Z", fill: "black" }), React3(inlineStyles.Path, { d: "M7 7H9V3H10V7H11V8H5V7H6V3H7V7Z", fill: "black" }), React3(inlineStyles.Path, { d: "M14 8H13V6H14V8Z", fill: "black" }), React3(inlineStyles.Path, { d: "M2 6H1V4H2V6Z", fill: "black" }), React3(inlineStyles.Path, { d: "M15 6H14V4H15V6Z", fill: "black" }), React3(inlineStyles.Path, { d: "M1 4H0V1H1V4Z", fill: "black" }), React3(inlineStyles.Path, { d: "M16 4H15V1H16V4Z", fill: "black" }), React3(inlineStyles.Path, { d: "M6 3H5V1H6V3Z", fill: "black" }), React3(inlineStyles.Path, { d: "M11 3H10V1H11V3Z", fill: "black" }), React3(inlineStyles.Path, { d: "M5 1H1V0H5V1Z", fill: "black" }), React3(inlineStyles.Path, { d: "M15 1H11V0H15V1Z", fill: "black" }), React3(inlineStyles.Path, { d: "M6 12H5V10H6V12Z", fill: "black" }), React3(inlineStyles.Path, { d: "M11 12H10V10H11V12Z", fill: "black" }), React3(inlineStyles.Path, { d: "M14 14H12V15H14V14Z", fill: primaryColorsTransformed[0] }), React3(inlineStyles.Path, { d: "M4 14H2V15H4V14Z", fill: primaryColorsTransformed[0] })];
  obj4.children = items;
  const items1 = [React4(inlineStyles.G, obj4), ];
  const obj10 = { children: null };
  const obj2 = { primaryBaseColors, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items };
  const obj5 = { d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z", fill: primaryColorsTransformed[1] };
  const obj6 = { d: "M2 14H1V13H2V14Z", fill: primaryColorsTransformed[0] };
  const obj7 = { d: "M15 14H14V13H15V14Z", fill: primaryColorsTransformed[0] };
  const obj8 = { d: "M14 14H12V15H14V14Z", fill: primaryColorsTransformed[0] };
  const obj9 = { d: "M4 14H2V15H4V14Z", fill: primaryColorsTransformed[0] };
  obj10.children = React3(inlineStyles.ClipPath, { id: memo, children: React3(inlineStyles.Rect, { width: "16", height: "16", fill: "white" }) });
  items1[1] = React3(inlineStyles.Defs, obj10);
  obj3.children = items1;
  return React4(inlineStyles.Svg, obj3);
};