// === Module 13930: GuildBadgeForce ===

// Module 13930 (GuildBadgeForce)
import v1 from "v1" /* 1256 */;
import inlineStyles from "inlineStyles" /* 8453 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13917 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const primaryBaseColors = ["#be0351", "#ff2c52", "#f0f0f0"];
const secondaryBaseColors = ["#ffb84b", "#ffe361", "#f0f0f0"];
const primaryTintLuminances = [0.3, 0.4, 1];
let items = [{ base: 8, tint: 1 }, { base: 3, tint: 1 }, { base: 2, tint: 1 }];
const secondaryTintLuminances = [0.3, 0.5, 1];
let items1 = [{ base: 8, tint: 1 }, { base: 3, tint: 1 }, { base: 2, tint: 1 }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeForce.tsx");

export const GuildBadgeForce = function GuildBadgeForce(width) {
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  ({ primaryTintColor, secondaryTintColor } = width);
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  const memo = noop.useMemo(() => "badge-force-gradient-" + v1.v4(), []);
  let obj = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  let tmp9Result = typeof num === "number";
  if (typeof num === "number") {
    tmp9Result = num > 0;
  }
  if (tmp9Result) {
    tmp9Result = typeof num2 === "number";
  }
  if (tmp9Result) {
    tmp9Result = num2 > 0;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [React3(inlineStyles.Path, { d: "M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z", fill: "#000" }), React3(inlineStyles.Path, { d: "M7 1H4v1h3V1ZM11 2H7v1h4V2Z", fill: secondaryColorsTransformed[2] }), React3(inlineStyles.Path, { d: "M15 3h-4v1h4V3Z", fill: primaryColorsTransformed[2] }), React3(inlineStyles.Path, { d: "M7 15H4v1h3v-1Z", fill: "#000" }), React3(inlineStyles.Path, { d: "M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z", fill: secondaryColorsTransformed[1] }), React3(inlineStyles.Path, { d: "M7 14H4v1h3v-1Z", fill: secondaryColorsTransformed[0] }), React3(inlineStyles.Path, { d: "M11 14H7v1h4v-1Z", fill: "#000" }), React3(inlineStyles.Path, { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: secondaryColorsTransformed[1] }), React3(inlineStyles.Path, { d: "M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z", fill: "#000" }), React3(inlineStyles.Path, { d: "M2 5H1v2h1V5ZM6 5H5v2h1V5Z", fill: secondaryColorsTransformed[2] }), React3(inlineStyles.Path, { d: "M5 3H4v2h1V3Z", fill: secondaryColorsTransformed[0] }), React3(inlineStyles.Path, { d: "M11 3h-1v1h1V3Z", fill: "#000" }), React3(inlineStyles.Path, { d: "M4 2H3v1h1V2Z", fill: secondaryColorsTransformed[2] }), React3(inlineStyles.Path, { d: "M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z", fill: secondaryColorsTransformed[0] }), , , , , , , ];
  if (tmp9Result) {
    const _HermesInternal = HermesInternal;
    let combined = "url(#" + memo + ")";
  } else {
    combined = primaryColorsTransformed[1];
  }
  items[14] = React3(inlineStyles.Path, { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: combined });
  items[15] = React3(inlineStyles.Path, { d: "M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z", fill: primaryColorsTransformed[1] });
  items[16] = React3(inlineStyles.Path, { d: "M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z", fill: primaryColorsTransformed[0] });
  items[17] = React3(inlineStyles.Path, { d: "M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z", fill: secondaryColorsTransformed[2] });
  items[18] = React3(inlineStyles.Path, { d: "M11 4h-1v1h1V4ZM10 6H9v1h1V6Z", fill: primaryColorsTransformed[2] });
  items[19] = React3(inlineStyles.Path, { d: "M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z", fill: "#000" });
  if (tmp9Result) {
    const obj14 = { children: null };
    const obj15 = { id: memo, cx: 0.75, cy: 0.5, r: 1, fx: 0.75, fy: 0.5, children: null };
    const obj16 = { stopColor: primaryColorsTransformed[1], offset: "30%" };
    items1 = [tmp9(tmp3(8453).Stop, obj16), ];
    const obj17 = { stopColor: secondaryColorsTransformed[1], offset: "70%" };
    items1[1] = tmp9(tmp3(8453).Stop, obj17);
    obj15.children = items1;
    obj14.children = tmp7(tmp3(8453).RadialGradient, obj15);
    tmp9Result = tmp9(tmp3(8453).Defs, obj14);
  }
  items[20] = tmp9Result;
  obj.children = items;
  return React4(inlineStyles.Svg, obj);
};