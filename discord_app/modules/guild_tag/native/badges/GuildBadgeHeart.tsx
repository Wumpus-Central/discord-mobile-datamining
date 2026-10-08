// === Module 13978: GuildBadgeHeart ===

// Module 13978 (GuildBadgeHeart)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7550 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13970 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#ff1b90", "#ff7fc0", "#f0f0f0"];
const primaryTintLuminances = [0.2, 0.52, 1];
let items = [{ base: 3, tint: 1 }, { base: 2, tint: 1 }, { base: 5, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeHeart.tsx");

export const GuildBadgeHeart = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBadgeHeart(arg0) {
  const cResult = c.c(26);
  if (cResult[0] !== arg0) {
    ({ width, height, primaryTintColor } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = primaryTintColor;
    cResult[2] = tmp10;
    cResult[3] = width;
    cResult[4] = height;
    let tmp7 = height;
    let tmp6 = width;
    let tmp5 = tmp10;
    let tmp4 = primaryTintColor;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  let num6 = 24;
  if (undefined !== tmp6) {
    num6 = tmp6;
  }
  let num7 = 24;
  if (undefined !== tmp7) {
    num7 = tmp7;
  }
  if (cResult[5] !== tmp4) {
    const obj2 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items };
    const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors(obj2);
    cResult[5] = tmp4;
    cResult[6] = transformedBadgeColors;
    let tmp11 = transformedBadgeColors;
    const tmpResult = GuildBadgeUtils;
  } else {
    tmp11 = cResult[6];
  }
  const primaryColorsTransformed = tmp11.primaryColorsTransformed;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = React4(inlineStyles.Path, { d: "M7 2v1h2V2H7ZM9 1v1h4V1H9ZM13 2v1h1V2h-1ZM14 3v1h1V3h-1ZM15 4v5h1V4h-1ZM14 9v2h1V9h-1ZM13 11v1h1v-1h-1ZM11 12v1h2v-1h-2ZM9 13v1h2v-1H9ZM7 14v1h2v-1H7Z", fill: "#000" });
    cResult[7] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] !== primaryColorsTransformed[1]) {
    const obj3 = { d: "M15 4h-1V3h-1V2H9v1H7V2H3v1H2v1H1v5h1v2h1v1h2v1h2v1h2v-1h2v-1h2v-1h1V9h1V4Z", fill: primaryColorsTransformed[1] };
    const tmp21 = React4(inlineStyles.Path, obj3);
    cResult[8] = primaryColorsTransformed[1];
    cResult[9] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] !== primaryColorsTransformed[0]) {
    const obj4 = { d: "M15 4h-1v5h1V4ZM14 9h-1v2h1V9ZM3 9H2v2h1V9ZM13 11h-2v1h2v-1ZM11 12H9v1h2v-1ZM9 13H7v1h2v-1ZM7 12H5v1h2v-1ZM5 11H3v1h2v-1Z", fill: primaryColorsTransformed[0] };
    const tmp24 = React4(inlineStyles.Path, obj4);
    cResult[10] = primaryColorsTransformed[0];
    cResult[11] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp27 = React4(inlineStyles.Path, { d: "M3 1v1h4V1H3ZM2 2v1h1V2H2ZM1 3v1h1V3H1ZM0 4v5h1V4H0ZM1 9v2h1V9H1ZM2 11v1h1v-1H2ZM3 12v1h2v-1H3ZM5 13v1h2v-1H5Z", fill: "#000" });
    cResult[12] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[12];
  }
  if (cResult[13] !== primaryColorsTransformed[2]) {
    const obj5 = { d: "M3 2v1h4V2H3ZM9 2v1h4V2H9ZM7 3v1h2V3H7Z", fill: primaryColorsTransformed[2] };
    const tmp30 = React4(inlineStyles.Path, obj5);
    cResult[13] = primaryColorsTransformed[2];
    cResult[14] = tmp30;
    let tmp28 = tmp30;
  } else {
    tmp28 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp33 = React4(inlineStyles.Path, { opacity: 0.6, d: "M11 6V5H9v1H7V5H5v1H4v3h1v1h2.01v1h2v-1H11V9h1V6h-1Z", fill: "#fff" });
    cResult[15] = tmp33;
    let tmp31 = tmp33;
  } else {
    tmp31 = cResult[15];
  }
  if (cResult[16] !== primaryColorsTransformed[2]) {
    const obj6 = { d: "M13 3v1h1V3h-1ZM2 3v1h1V3H2ZM3 4v1h1V4H3ZM1 4v2h1V4H1Z", fill: primaryColorsTransformed[2] };
    const tmp36 = React4(inlineStyles.Path, obj6);
    cResult[16] = primaryColorsTransformed[2];
    cResult[17] = tmp36;
    let tmp34 = tmp36;
  } else {
    tmp34 = cResult[17];
  }
  if (cResult[18] === num7) {
    if (cResult[19] === tmp5) {
      if (cResult[20] === tmp34) {
        if (cResult[21] === tmp19) {
          if (cResult[22] === tmp22) {
            if (cResult[23] === tmp28) {
              if (cResult[24] === num6) {
                let tmp37 = cResult[25];
              }
              return tmp37;
            }
          }
        }
      }
    }
  }
  const obj7 = {};
  const merged = Object.assign(tmp5);
  obj7.width = num6;
  obj7.height = num7;
  obj7.viewBox = "0 0 16 16";
  obj7.fill = "none";
  items = [tmp16, tmp19, tmp22, tmp25, tmp28, tmp31, tmp34];
  obj7.children = items;
  const tmp39 = hasOwnProperty(inlineStyles.Svg, obj7);
  cResult[18] = num7;
  cResult[19] = tmp5;
  cResult[20] = tmp34;
  cResult[21] = tmp19;
  cResult[22] = tmp22;
  cResult[23] = tmp28;
  cResult[24] = num6;
  cResult[25] = tmp39;
  tmp37 = tmp39;
}) : (function GuildBadgeHeart(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
  const primaryColorsTransformed = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items }).primaryColorsTransformed;
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.width = num;
  obj3.height = num2;
  obj3.viewBox = "0 0 16 16";
  obj3.fill = "none";
  items = [React4(inlineStyles.Path, { d: "M7 2v1h2V2H7ZM9 1v1h4V1H9ZM13 2v1h1V2h-1ZM14 3v1h1V3h-1ZM15 4v5h1V4h-1ZM14 9v2h1V9h-1ZM13 11v1h1v-1h-1ZM11 12v1h2v-1h-2ZM9 13v1h2v-1H9ZM7 14v1h2v-1H7Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M15 4h-1V3h-1V2H9v1H7V2H3v1H2v1H1v5h1v2h1v1h2v1h2v1h2v-1h2v-1h2v-1h1V9h1V4Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M15 4h-1v5h1V4ZM14 9h-1v2h1V9ZM3 9H2v2h1V9ZM13 11h-2v1h2v-1ZM11 12H9v1h2v-1ZM9 13H7v1h2v-1ZM7 12H5v1h2v-1ZM5 11H3v1h2v-1Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M3 1v1h4V1H3ZM2 2v1h1V2H2ZM1 3v1h1V3H1ZM0 4v5h1V4H0ZM1 9v2h1V9H1ZM2 11v1h1v-1H2ZM3 12v1h2v-1H3ZM5 13v1h2v-1H5Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M3 2v1h4V2H3ZM9 2v1h4V2H9ZM7 3v1h2V3H7Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { opacity: 0.6, d: "M11 6V5H9v1H7V5H5v1H4v3h1v1h2.01v1h2v-1H11V9h1V6h-1Z", fill: "#fff" }), React4(inlineStyles.Path, { d: "M13 3v1h1V3h-1ZM2 3v1h1V3H2ZM3 4v1h1V4H3ZM1 4v2h1V4H1Z", fill: primaryColorsTransformed[2] })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});