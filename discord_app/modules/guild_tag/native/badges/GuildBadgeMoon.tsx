// === Module 13735: GuildBadgeMoon ===

// Module 13735 (GuildBadgeMoon)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13730 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#816bee", "#b79cf8", "#f0f0f0"];
const primaryTintLuminances = [0.15, 0.45, 0.9];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 5, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeMoon.tsx");

export const GuildBadgeMoon = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(30);
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
  if (cResult[7] !== primaryColorsTransformed[1]) {
    const obj3 = { d: "M14 5V3h-1V2h-1V1h-2v1h1v1h1v4h-1v1h-1v1H6V8H5V7H4V3h1V2h1V1H4v1H3v1H2v2H1v6h1v2h1v1h2v1h6v-1h2v-1h1v-2h1V5h-1Z", fill: primaryColorsTransformed[1] };
    const tmp18 = React4(inlineStyles.Path, obj3);
    cResult[7] = primaryColorsTransformed[1];
    cResult[8] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp21 = React4(inlineStyles.Path, { d: "M6 0H4v1h2V0ZM2 3H1v2h1V3ZM5 3H4v4h1V3ZM10 8H6v1h4V8Z", fill: "#000" });
    cResult[9] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] !== primaryColorsTransformed[2]) {
    const obj4 = { d: "M10 9H6v1h4V9Z", fill: primaryColorsTransformed[2] };
    const tmp24 = React4(inlineStyles.Path, obj4);
    cResult[10] = primaryColorsTransformed[2];
    cResult[11] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp27 = React4(inlineStyles.Path, { d: "M1 5H0v6h1V5ZM11 15H5v1h6v-1Z", fill: "#000" });
    cResult[12] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[12];
  }
  if (cResult[13] !== primaryColorsTransformed[0]) {
    const obj5 = { d: "M2 10H1v1h1v-1ZM13 12h-2v1H5v-1H3v-1H2v2h1v1h2v1h6v-1h2v-1h1v-2h-1v1ZM15 10h-1v1h1v-1Z", fill: primaryColorsTransformed[0] };
    const tmp30 = React4(inlineStyles.Path, obj5);
    cResult[13] = primaryColorsTransformed[0];
    cResult[14] = tmp30;
    let tmp28 = tmp30;
  } else {
    tmp28 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp33 = React4(inlineStyles.Path, { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2Z", fill: "#000" });
    cResult[15] = tmp33;
    let tmp31 = tmp33;
  } else {
    tmp31 = cResult[15];
  }
  if (cResult[16] !== primaryColorsTransformed[2]) {
    const obj6 = { d: "M6 1H4v1h2V1ZM4 2H3v1h1V2ZM3 3H2v1h1V3ZM2 5H1v1h1V5ZM3 6H2v1h1V6ZM5 7H4v1h1V7ZM6 8H5v1h1V8ZM12 7h-1v1h1V7ZM11 1h-1v1h1V1ZM11 8h-1v1h1V8Z", fill: primaryColorsTransformed[2] };
    const tmp36 = React4(inlineStyles.Path, obj6);
    cResult[16] = primaryColorsTransformed[2];
    cResult[17] = tmp36;
    let tmp34 = tmp36;
  } else {
    tmp34 = cResult[17];
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp39 = React4(inlineStyles.Path, { d: "M7 1H6v1h1V1ZM6 2H5v1h1V2ZM6 7H5v1h1V7ZM2 11H1v2h1v-2ZM3 13H2v1h1v-1ZM12 0h-2v1h2V0ZM13 14h-2v1h2v-1ZM5 14H3v1h2v-1ZM15 3h-1v2h1V3ZM12 3h-1v4h1V3ZM16 5h-1v6h1V5ZM13 1h-1v1h1V1ZM14 2h-1v1h1V2ZM10 1H9v1h1V1ZM11 2h-1v1h1V2ZM11 7h-1v1h1V7ZM15 11h-1v2h1v-2ZM14 13h-1v1h1v-1Z", fill: "#000" });
    cResult[18] = tmp39;
    let tmp37 = tmp39;
  } else {
    tmp37 = cResult[18];
  }
  if (cResult[19] !== primaryColorsTransformed[1]) {
    const obj7 = { d: "M5 2H4v1h1V2Z", fill: primaryColorsTransformed[1] };
    const tmp42 = React4(inlineStyles.Path, obj7);
    cResult[19] = primaryColorsTransformed[1];
    cResult[20] = tmp42;
    let tmp40 = tmp42;
  } else {
    tmp40 = cResult[20];
  }
  if (cResult[21] === num7) {
    if (cResult[22] === tmp5) {
      if (cResult[23] === tmp34) {
        if (cResult[24] === tmp40) {
          if (cResult[25] === tmp16) {
            if (cResult[26] === tmp22) {
              if (cResult[27] === tmp28) {
                if (cResult[28] === num6) {
                  let tmp43 = cResult[29];
                }
                return tmp43;
              }
            }
          }
        }
      }
    }
  }
  const obj8 = {};
  const merged = Object.assign(tmp5);
  obj8.width = num6;
  obj8.height = num7;
  obj8.viewBox = "0 0 16 16";
  obj8.fill = "none";
  items = [tmp16, tmp19, tmp22, tmp25, tmp28, tmp31, tmp34, tmp37, tmp40];
  obj8.children = items;
  const tmp45 = hasOwnProperty(inlineStyles.Svg, obj8);
  cResult[21] = num7;
  cResult[22] = tmp5;
  cResult[23] = tmp34;
  cResult[24] = tmp40;
  cResult[25] = tmp16;
  cResult[26] = tmp22;
  cResult[27] = tmp28;
  cResult[28] = num6;
  cResult[29] = tmp45;
  tmp43 = tmp45;
}) : ((primaryTintColor) => {
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
  items = [React4(inlineStyles.Path, { d: "M14 5V3h-1V2h-1V1h-2v1h1v1h1v4h-1v1h-1v1H6V8H5V7H4V3h1V2h1V1H4v1H3v1H2v2H1v6h1v2h1v1h2v1h6v-1h2v-1h1v-2h1V5h-1Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M6 0H4v1h2V0ZM2 3H1v2h1V3ZM5 3H4v4h1V3ZM10 8H6v1h4V8Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M10 9H6v1h4V9Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M1 5H0v6h1V5ZM11 15H5v1h6v-1Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M2 10H1v1h1v-1ZM13 12h-2v1H5v-1H3v-1H2v2h1v1h2v1h6v-1h2v-1h1v-2h-1v1ZM15 10h-1v1h1v-1Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M6 1H4v1h2V1ZM4 2H3v1h1V2ZM3 3H2v1h1V3ZM2 5H1v1h1V5ZM3 6H2v1h1V6ZM5 7H4v1h1V7ZM6 8H5v1h1V8ZM12 7h-1v1h1V7ZM11 1h-1v1h1V1ZM11 8h-1v1h1V8Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M7 1H6v1h1V1ZM6 2H5v1h1V2ZM6 7H5v1h1V7ZM2 11H1v2h1v-2ZM3 13H2v1h1v-1ZM12 0h-2v1h2V0ZM13 14h-2v1h2v-1ZM5 14H3v1h2v-1ZM15 3h-1v2h1V3ZM12 3h-1v4h1V3ZM16 5h-1v6h1V5ZM13 1h-1v1h1V1ZM14 2h-1v1h1V2ZM10 1H9v1h1V1ZM11 2h-1v1h1V2ZM11 7h-1v1h1V7ZM15 11h-1v2h1v-2ZM14 13h-1v1h1v-1Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M5 2H4v1h1V2Z", fill: primaryColorsTransformed[1] })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});