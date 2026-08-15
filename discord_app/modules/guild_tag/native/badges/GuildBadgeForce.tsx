// discord_app/modules/guild_tag/native/badges/GuildBadgeForce.tsx
import noop from "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/06571_inlineStyles.js";
import { getTransformedBadgeColors } from "GuildBadgeUtils.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = ["#be0351", "#ff2c52", "#f0f0f0"];
let closure_6 = ["#ffb84b", "#ffe361", "#f0f0f0"];
let closure_7 = [0.3, 0.4, 1];
let items = [{ base: 8, tint: 1 }, { base: 3, tint: 1 }, { base: 2, tint: 1 }];
let closure_9 = [0.3, 0.5, 1];
let items1 = [{ base: 8, tint: 1 }, { base: 3, tint: 1 }, { base: 2, tint: 1 }];
const result = require("v1").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeForce.tsx");

export const GuildBadgeForce = function GuildBadgeForce(width) {
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
  const memo = React.useMemo(() => "badge-force-gradient-" + callback(table[2]).v4(), []);
  let obj = getTransformedBadgeColors;
  obj = { primaryBaseColors: closure_5, primaryTintColor, primaryTintLuminances: closure_7, primaryLuminanceWeights: items, secondaryBaseColors: closure_6, secondaryTintColor, secondaryTintLuminances: closure_9, secondaryLuminanceWeights: items1 };
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
  items = [callback(inlineStyles.Path, { d: "M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M7 1H4v1h3V1ZM11 2H7v1h4V2Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M15 3h-4v1h4V3Z", fill: primaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M7 15H4v1h3v-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M7 14H4v1h3v-1Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M11 14H7v1h4v-1Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: secondaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M2 5H1v2h1V5ZM6 5H5v2h1V5Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M5 3H4v2h1V3Z", fill: secondaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M11 3h-1v1h1V3Z", fill: "#000" }), callback(inlineStyles.Path, { d: "M4 2H3v1h1V2Z", fill: secondaryColorsTransformed[2] }), callback(inlineStyles.Path, { d: "M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z", fill: secondaryColorsTransformed[0] }), , , , , , , ];
  if (tmp9Result) {
    const _HermesInternal = HermesInternal;
    let combined = "url(#" + memo + ")";
  } else {
    combined = primaryColorsTransformed[1];
  }
  items[14] = callback(inlineStyles.Path, { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: combined });
  items[15] = callback(inlineStyles.Path, { d: "M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z", fill: primaryColorsTransformed[1] });
  items[16] = callback(inlineStyles.Path, { d: "M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z", fill: primaryColorsTransformed[0] });
  items[17] = callback(inlineStyles.Path, { d: "M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z", fill: secondaryColorsTransformed[2] });
  items[18] = callback(inlineStyles.Path, { d: "M11 4h-1v1h1V4ZM10 6H9v1h1V6Z", fill: primaryColorsTransformed[2] });
  items[19] = callback(inlineStyles.Path, { d: "M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z", fill: "#000" });
  if (tmp9Result) {
    const obj14 = { children: null };
    const obj15 = { id: null, cx: 0.75, cy: 0.5, r: 1, fx: 0.75, fy: 0.5, children: null };
    obj15[0] = memo;
    const obj16 = { stopColor: null, offset: "30%" };
    obj16[0] = primaryColorsTransformed[1];
    items1 = [tmp9(tmp3(6571).Stop, obj16), ];
    const obj17 = { stopColor: null, offset: "70%" };
    obj17[0] = secondaryColorsTransformed[1];
    items1[1] = tmp9(tmp3(6571).Stop, obj17);
    obj15[6] = items1;
    obj14[0] = tmp7(tmp3(6571).RadialGradient, obj15);
    tmp9Result = tmp9(tmp3(6571).Defs, obj14);
  }
  items[20] = tmp9Result;
  obj.children = items;
  return closure_4(inlineStyles.Svg, obj);
};