// === Module 13737: GuildBadgeFire ===

// Module 13737 (GuildBadgeFire)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13728 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#ba3500", "#fd6214", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.3, 1];
let items = [{ base: 3, tint: 1 }, { base: 3, tint: 1 }, { base: 10, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFire.tsx");

export const GuildBadgeFire = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(36);
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
    const obj3 = { d: "M13 6V4h-1V1h-1v1h-1v1H9v1H8v1H3v1H2v2H1v4h1v1h1v1h1v1h8v-1h1v-1h1V6h-1Z", fill: primaryColorsTransformed[1] };
    const tmp18 = React4(inlineStyles.Path, obj3);
    cResult[7] = primaryColorsTransformed[1];
    cResult[8] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp21 = React4(inlineStyles.Path, { d: "M0 8v4h1V8H0ZM15 9v3h1V9h-1ZM14 6v3h1V6h-1ZM13 4v2h1V4h-1Z", fill: "#000" });
    cResult[9] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] !== primaryColorsTransformed[0]) {
    const obj4 = { d: "M14 9v3h1V9h-1ZM13 6v3h1V6h-1ZM12 4v2h1V4h-1Z", fill: primaryColorsTransformed[0] };
    const tmp24 = React4(inlineStyles.Path, obj4);
    cResult[10] = primaryColorsTransformed[0];
    cResult[11] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp27 = React4(inlineStyles.Path, { d: "M1 6v2h1V6H1ZM7 3H6v1h1V3ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM2 5v1h1V5H2ZM1 12v1h1v-1H1ZM2 13v1h1v-1H2ZM3 14v1h1v-1H3ZM14 12v1h1v-1h-1ZM13 13v1h1v-1h-1ZM12 14v1h1v-1h-1ZM4 15v1h8v-1H4ZM3 4v1h1V4H3ZM4 3v1h1V3H4ZM5 2v1h1V2H5ZM9 2v1h1V2H9ZM10 1v1h1V1h-1ZM11 0v1h1V0h-1Z", fill: "#000" });
    cResult[12] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[12];
  }
  if (cResult[13] !== primaryColorsTransformed[2]) {
    const obj5 = { d: "M11 1v1h1V1h-1ZM10 2v1h1V2h-1ZM9 3v1h1V3H9ZM8 4v1h1V4H8ZM5 3v1h1V3H5ZM4 4v1h1V4H4ZM6 4v1h1V4H6Z", fill: primaryColorsTransformed[2] };
    const tmp30 = React4(inlineStyles.Path, obj5);
    cResult[13] = primaryColorsTransformed[2];
    cResult[14] = tmp30;
    let tmp28 = tmp30;
  } else {
    tmp28 = cResult[14];
  }
  if (cResult[15] !== primaryColorsTransformed[1]) {
    const obj6 = { d: "M5 4v1h1V4H5Z", fill: primaryColorsTransformed[1] };
    const tmp33 = React4(inlineStyles.Path, obj6);
    cResult[15] = primaryColorsTransformed[1];
    cResult[16] = tmp33;
    let tmp31 = tmp33;
  } else {
    tmp31 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp36 = React4(inlineStyles.Path, { opacity: 0.5, d: "M11 4v1h1V4h-1ZM12 9V8h-1V6h-1v1H9v1H6V7H5v2H3v2h1v2h1v1h6v-1h1v-2h1V9h-1Z", fill: "#fff" });
    cResult[17] = tmp36;
    let tmp34 = tmp36;
  } else {
    tmp34 = cResult[17];
  }
  if (cResult[18] !== primaryColorsTransformed[2]) {
    const obj7 = { d: "M3 5v1h1V5H3ZM2 6v2h1V6H2ZM4 8v1h1V8H4Z", fill: primaryColorsTransformed[2] };
    const tmp39 = React4(inlineStyles.Path, obj7);
    cResult[18] = primaryColorsTransformed[2];
    cResult[19] = tmp39;
    let tmp37 = tmp39;
  } else {
    tmp37 = cResult[19];
  }
  if (cResult[20] !== primaryColorsTransformed[0]) {
    const obj8 = { d: "M2 12v1h1v-1H2ZM3 13v1h1v-1H3ZM12 13v1h1v-1h-1ZM13 12v1h1v-1h-1ZM4 14v1h8v-1H4Z", fill: primaryColorsTransformed[0] };
    const tmp42 = React4(inlineStyles.Path, obj8);
    cResult[20] = primaryColorsTransformed[0];
    cResult[21] = tmp42;
    let tmp40 = tmp42;
  } else {
    tmp40 = cResult[21];
  }
  if (cResult[22] !== primaryColorsTransformed[2]) {
    const obj9 = { d: "M1 8v2h1V8H1ZM11 10h-1V9H6v1H5v2h1v1h4v-1h1v-2Z", fill: primaryColorsTransformed[2] };
    const tmp45 = React4(inlineStyles.Path, obj9);
    cResult[22] = primaryColorsTransformed[2];
    cResult[23] = tmp45;
    let tmp43 = tmp45;
  } else {
    tmp43 = cResult[23];
  }
  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp48 = React4(inlineStyles.Path, { d: "M12 1v3h1V1h-1Z", fill: "#000" });
    cResult[24] = tmp48;
    let tmp46 = tmp48;
  } else {
    tmp46 = cResult[24];
  }
  if (cResult[25] === num7) {
    if (cResult[26] === tmp5) {
      if (cResult[27] === tmp37) {
        if (cResult[28] === tmp40) {
          if (cResult[29] === tmp43) {
            if (cResult[30] === tmp16) {
              if (cResult[31] === tmp22) {
                if (cResult[32] === tmp28) {
                  if (cResult[33] === tmp31) {
                    if (cResult[34] === num6) {
                      let tmp49 = cResult[35];
                    }
                    return tmp49;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const obj10 = {};
  const merged = Object.assign(tmp5);
  obj10.width = num6;
  obj10.height = num7;
  obj10.viewBox = "0 0 16 16";
  obj10.fill = "none";
  items = [tmp16, tmp19, tmp22, tmp25, tmp28, tmp31, tmp34, tmp37, tmp40, tmp43, tmp46];
  obj10.children = items;
  const tmp51 = hasOwnProperty(inlineStyles.Svg, obj10);
  cResult[25] = num7;
  cResult[26] = tmp5;
  cResult[27] = tmp37;
  cResult[28] = tmp40;
  cResult[29] = tmp43;
  cResult[30] = tmp16;
  cResult[31] = tmp22;
  cResult[32] = tmp28;
  cResult[33] = tmp31;
  cResult[34] = num6;
  cResult[35] = tmp51;
  tmp49 = tmp51;
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
  items = [React4(inlineStyles.Path, { d: "M13 6V4h-1V1h-1v1h-1v1H9v1H8v1H3v1H2v2H1v4h1v1h1v1h1v1h8v-1h1v-1h1V6h-1Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M0 8v4h1V8H0ZM15 9v3h1V9h-1ZM14 6v3h1V6h-1ZM13 4v2h1V4h-1Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M14 9v3h1V9h-1ZM13 6v3h1V6h-1ZM12 4v2h1V4h-1Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M1 6v2h1V6H1ZM7 3H6v1h1V3ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM2 5v1h1V5H2ZM1 12v1h1v-1H1ZM2 13v1h1v-1H2ZM3 14v1h1v-1H3ZM14 12v1h1v-1h-1ZM13 13v1h1v-1h-1ZM12 14v1h1v-1h-1ZM4 15v1h8v-1H4ZM3 4v1h1V4H3ZM4 3v1h1V3H4ZM5 2v1h1V2H5ZM9 2v1h1V2H9ZM10 1v1h1V1h-1ZM11 0v1h1V0h-1Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M11 1v1h1V1h-1ZM10 2v1h1V2h-1ZM9 3v1h1V3H9ZM8 4v1h1V4H8ZM5 3v1h1V3H5ZM4 4v1h1V4H4ZM6 4v1h1V4H6Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M5 4v1h1V4H5Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { opacity: 0.5, d: "M11 4v1h1V4h-1ZM12 9V8h-1V6h-1v1H9v1H6V7H5v2H3v2h1v2h1v1h6v-1h1v-2h1V9h-1Z", fill: "#fff" }), React4(inlineStyles.Path, { d: "M3 5v1h1V5H3ZM2 6v2h1V6H2ZM4 8v1h1V8H4Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M2 12v1h1v-1H2ZM3 13v1h1v-1H3ZM12 13v1h1v-1h-1ZM13 12v1h1v-1h-1ZM4 14v1h8v-1H4Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M1 8v2h1V8H1ZM11 10h-1V9H6v1H5v2h1v1h4v-1h1v-2Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M12 1v3h1V1h-1Z", fill: "#000" })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});