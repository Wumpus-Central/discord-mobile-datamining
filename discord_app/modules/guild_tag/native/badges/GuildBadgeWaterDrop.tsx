// === Module 13919: GuildBadgeWaterDrop ===

// Module 13919 (GuildBadgeWaterDrop)
import inlineStyles from "inlineStyles" /* 8453 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13917 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const primaryBaseColors = ["#4282d8", "#0abbff", "#ffffff"];
const primaryTintLuminances = [0.1, 0.32, 1];
let items = [{ base: 3, tint: 1 }, { base: 3, tint: 1 }, { base: 10, tint: 1 }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeWaterDrop.tsx");

export const GuildBadgeWaterDrop = function GuildBadgeWaterDrop(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
  let obj = { primaryBaseColors, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [React2(inlineStyles.Path, { d: "M13 6V5h-1V4h-1V3h-1V2H9V1H7v1H6v1H5v1H4v1H3v1H2v2H1v5h1v1h2v1h8v-1h2v-1h1V8h-1V6h-1Z", fill: primaryColorsTransformed[1] }), React2(inlineStyles.Path, { d: "M7 0v1h2V0H7ZM6 1v1h1V1H6ZM9 1v1h1V1H9ZM10 2v1h1V2h-1ZM11 3v1h1V3h-1ZM12 4v1h1V4h-1ZM13 5v1h1V5h-1ZM14 6v2h1V6h-1ZM1 6v2h1V6H1ZM0 8v5h1V8H0ZM15 8v5h1V8h-1ZM5 2v1h1V2H5ZM4 3v1h1V3H4ZM3 4v1h1V4H3ZM2 5v1h1V5H2ZM1 13v1h1v-1H1ZM14 13v1h1v-1h-1ZM4 15v1h8v-1H4Z", fill: "#000" }), React2(inlineStyles.Path, { d: "M4 14v1h8v-1H4Z", fill: primaryColorsTransformed[0] }), React2(inlineStyles.Path, { d: "M2 14v1h2v-1H2ZM14 15v-1h-2v1h2Z", fill: "#000" }), React2(inlineStyles.Path, { d: "M7 1v1h2V1H7Z", fill: primaryColorsTransformed[2] }), React2(inlineStyles.Path, { opacity: 0.5, d: "M11 8V7h-1V6H9V5H7v1H6v1H5v1H4v3h1v1h6v-1h1V8h-1Z", fill: "#fff" }), React2(inlineStyles.Path, { d: "M6 2v1h1V2H6ZM5 3v1h1V3H5ZM6 4v1h1V4H6ZM4 4v1h1V4H4ZM3 5v1h1V5H3ZM2 6v2h1V6H2ZM1 8v2h1V8H1Z", fill: primaryColorsTransformed[2] }), React2(inlineStyles.Path, { d: "M12 5v1h1V5h-1ZM13 6v2h1V6h-1ZM14 8v4h-1v1h-1v1h2v-1h1V8h-1ZM2 14h2v-1H2v1Z", fill: primaryColorsTransformed[0] })];
  obj.children = items;
  return React3(inlineStyles.Svg, obj);
};