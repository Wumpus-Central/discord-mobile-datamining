// === Module 14142: GuildBadgeSun ===

// Module 14142 (GuildBadgeSun)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7576 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 14122 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#ffb84b", "#ffe361", "#f0f0f0"];
const secondaryBaseColors = ["#ba3500", "#fd6214", "#f0f0f0"];
const primaryTintLuminances = [0.07, 0.45, 1];
let items = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }, { base: 8, tint: 1 }, { base: 8, tint: 1 }];
const secondaryTintLuminances = [0.1, 0.4, 1];
const items1 = [{ base: 2, tint: 1 }, { base: 1, tint: 2 }, { base: 4, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSun.tsx");

export const GuildBadgeSun = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBadgeSun(arg0) {
  const cResult = c.c(57);
  if (cResult[0] !== arg0) {
    ({ width, height, primaryTintColor, secondaryTintColor } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = primaryTintColor;
    cResult[2] = tmp11;
    cResult[3] = secondaryTintColor;
    cResult[4] = width;
    cResult[5] = height;
    let tmp8 = height;
    let tmp7 = width;
    let tmp6 = secondaryTintColor;
    let tmp5 = tmp11;
    let tmp4 = primaryTintColor;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  let num7 = 24;
  if (undefined !== tmp7) {
    num7 = tmp7;
  }
  let num8 = 24;
  if (undefined !== tmp8) {
    num8 = tmp8;
  }
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp6) {
      let tmp12 = cResult[8];
    }
    ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
    if (cResult[9] !== primaryColorsTransformed[1]) {
      const obj2 = { d: "M14 6v1h-3V6h-1V5H9V2h1V1H1v1h2v1h1v1h2v2H5v1H4v2H3v2H2v2H1v2h3v-1h2v-1h1v-1h1v-1h2v-1h1V9h1v1h1v1h1v1h1V6h-1Z", fill: primaryColorsTransformed[1] };
      const tmp16 = React4(inlineStyles.Path, obj2);
      cResult[9] = primaryColorsTransformed[1];
      cResult[10] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp20 = React4(inlineStyles.Path, { d: "M14 0h-3v1h3V0ZM4 15H1v1h3v-1ZM6 14H4v1h2v-1ZM3 2H1v1h2V2ZM4 4v1h1v1h1V4H4ZM4 7H3v2h1V7ZM3 9H2v2h1V9ZM2 11H1v2h1v-2ZM1 13H0v2h1v-2ZM10 11H8v1h2v-1ZM10 0H1v1h9V0Z", fill: "#000" });
      cResult[11] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] !== primaryColorsTransformed[2]) {
      const obj3 = { d: "M10 1H1v1h9V1Z", fill: primaryColorsTransformed[2] };
      const tmp23 = React4(inlineStyles.Path, obj3);
      cResult[12] = primaryColorsTransformed[2];
      cResult[13] = tmp23;
      let tmp21 = tmp23;
    } else {
      tmp21 = cResult[13];
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp26 = React4(inlineStyles.Path, { d: "M14 6h-3v1h3V6ZM11 1h-1v1h1V1Z", fill: "#000" });
      cResult[14] = tmp26;
      let tmp24 = tmp26;
    } else {
      tmp24 = cResult[14];
    }
    if (cResult[15] !== secondaryColorsTransformed[2]) {
      const obj4 = { d: "M11 2h-1v2h1V2ZM14 1h-3v1h3V1Z", fill: secondaryColorsTransformed[2] };
      const tmp29 = React4(inlineStyles.Path, obj4);
      cResult[15] = secondaryColorsTransformed[2];
      cResult[16] = tmp29;
      let tmp27 = tmp29;
    } else {
      tmp27 = cResult[16];
    }
    if (cResult[17] !== secondaryColorsTransformed[0]) {
      const obj5 = { d: "M14 5h-3v1h3V5Z", fill: secondaryColorsTransformed[0] };
      const tmp32 = React4(inlineStyles.Path, obj5);
      cResult[17] = secondaryColorsTransformed[0];
      cResult[18] = tmp32;
      let tmp30 = tmp32;
    } else {
      tmp30 = cResult[18];
    }
    const _Symbol3 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp35 = React4(inlineStyles.Path, { d: "M1 1H0v1h1V1ZM4 3H3v1h1V3ZM5 6H4v1h1V6ZM15 1h-1v1h1V1ZM16 2h-1v3h1V2Z", fill: "#000" });
      cResult[19] = tmp35;
      let tmp33 = tmp35;
    } else {
      tmp33 = cResult[19];
    }
    if (cResult[20] !== secondaryColorsTransformed[0]) {
      const obj6 = { d: "M15 2h-1v3h1V2Z", fill: secondaryColorsTransformed[0] };
      const tmp38 = React4(inlineStyles.Path, obj6);
      cResult[20] = secondaryColorsTransformed[0];
      cResult[21] = tmp38;
      let tmp36 = tmp38;
    } else {
      tmp36 = cResult[21];
    }
    const _Symbol4 = Symbol;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp41 = React4(inlineStyles.Path, { d: "M16 6h-1v6h1V6Z", fill: "#000" });
      cResult[22] = tmp41;
      let tmp39 = tmp41;
    } else {
      tmp39 = cResult[22];
    }
    if (cResult[23] !== primaryColorsTransformed[0]) {
      const obj7 = { d: "M15 6h-1v6h1V6Z", fill: primaryColorsTransformed[0] };
      const tmp44 = React4(inlineStyles.Path, obj7);
      cResult[23] = primaryColorsTransformed[0];
      cResult[24] = tmp44;
      let tmp42 = tmp44;
    } else {
      tmp42 = cResult[24];
    }
    const _Symbol5 = Symbol;
    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp47 = React4(inlineStyles.Path, { d: "M15 5h-1v1h1V5ZM10 2H9v3h1V2ZM11 5h-1v1h1V5Z", fill: "#000" });
      cResult[25] = tmp47;
      let tmp45 = tmp47;
    } else {
      tmp45 = cResult[25];
    }
    if (cResult[26] !== secondaryColorsTransformed[0]) {
      const obj8 = { d: "M11 4h-1v1h1V4Z", fill: secondaryColorsTransformed[0] };
      const tmp50 = React4(inlineStyles.Path, obj8);
      cResult[26] = secondaryColorsTransformed[0];
      cResult[27] = tmp50;
      let tmp48 = tmp50;
    } else {
      tmp48 = cResult[27];
    }
    const _Symbol6 = Symbol;
    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp53 = React4(inlineStyles.Path, { d: "M7 13H6v1h1v-1Z", fill: "#000" });
      cResult[28] = tmp53;
      let tmp51 = tmp53;
    } else {
      tmp51 = cResult[28];
    }
    if (cResult[29] !== primaryColorsTransformed[0]) {
      const obj9 = { d: "M10 7v1H9v1H8v1H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h2v-1h1V7h-1ZM4 14H3v1h1v-1Z", fill: primaryColorsTransformed[0] };
      const tmp56 = React4(inlineStyles.Path, obj9);
      cResult[29] = primaryColorsTransformed[0];
      cResult[30] = tmp56;
      let tmp54 = tmp56;
    } else {
      tmp54 = cResult[30];
    }
    const _Symbol7 = Symbol;
    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp59 = React4(inlineStyles.Path, { d: "M8 12H7v1h1v-1Z", fill: "#000" });
      cResult[31] = tmp59;
      let tmp57 = tmp59;
    } else {
      tmp57 = cResult[31];
    }
    if (cResult[32] !== primaryColorsTransformed[2]) {
      const obj10 = { d: "M5 7H4v1h1V7ZM6 6H5v1h1V6Z", fill: primaryColorsTransformed[2] };
      const tmp62 = React4(inlineStyles.Path, obj10);
      cResult[32] = primaryColorsTransformed[2];
      cResult[33] = tmp62;
      let tmp60 = tmp62;
    } else {
      tmp60 = cResult[33];
    }
    if (cResult[34] !== primaryColorsTransformed[0]) {
      const obj11 = { d: "M7 5H6v1h1V5ZM8 4H7v1h1V4Z", fill: primaryColorsTransformed[0] };
      const tmp65 = React4(inlineStyles.Path, obj11);
      cResult[34] = primaryColorsTransformed[0];
      cResult[35] = tmp65;
      let tmp63 = tmp65;
    } else {
      tmp63 = cResult[35];
    }
    if (cResult[36] !== primaryColorsTransformed[2]) {
      const obj12 = { d: "M6 8H5v1h1V8ZM4 9H3v1h1V9ZM3 11H2v1h1v-1ZM2 13H1v1h1v-1Z", fill: primaryColorsTransformed[2] };
      const tmp68 = React4(inlineStyles.Path, obj12);
      cResult[36] = primaryColorsTransformed[2];
      cResult[37] = tmp68;
      let tmp66 = tmp68;
    } else {
      tmp66 = cResult[37];
    }
    const _Symbol8 = Symbol;
    if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp71 = React4(inlineStyles.Path, { d: "M11 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM13 10h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 12h-1v1h1v-1Z", fill: "#000" });
      cResult[38] = tmp71;
      let tmp69 = tmp71;
    } else {
      tmp69 = cResult[38];
    }
    if (cResult[39] !== secondaryColorsTransformed[1]) {
      const obj13 = { d: "M14 2h-3v3h3V2Z", fill: secondaryColorsTransformed[1] };
      const tmp74 = React4(inlineStyles.Path, obj13);
      cResult[39] = secondaryColorsTransformed[1];
      cResult[40] = tmp74;
      let tmp72 = tmp74;
    } else {
      tmp72 = cResult[40];
    }
    if (cResult[41] === num8) {
      if (cResult[42] === tmp5) {
        if (cResult[43] === tmp36) {
          if (cResult[44] === tmp42) {
            if (cResult[45] === tmp48) {
              if (cResult[46] === tmp54) {
                if (cResult[47] === tmp60) {
                  if (cResult[48] === tmp63) {
                    if (cResult[49] === tmp66) {
                      if (cResult[50] === tmp72) {
                        if (cResult[51] === tmp14) {
                          if (cResult[52] === tmp21) {
                            if (cResult[53] === tmp27) {
                              if (cResult[54] === tmp30) {
                                if (cResult[55] === num7) {
                                  let tmp75 = cResult[56];
                                }
                                return tmp75;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj14 = {};
    const merged = Object.assign(tmp5);
    obj14.width = num7;
    obj14.height = num8;
    obj14.viewBox = "0 0 16 16";
    obj14.fill = "none";
    items = [tmp14, tmp18, tmp21, tmp24, tmp27, tmp30, tmp33, tmp36, tmp39, tmp42, tmp45, tmp48, tmp51, tmp54, tmp57, tmp60, tmp63, tmp66, tmp69, tmp72];
    obj14.children = items;
    const tmp80 = hasOwnProperty(inlineStyles.Svg, obj14);
    cResult[41] = num8;
    cResult[42] = tmp5;
    cResult[43] = tmp36;
    cResult[44] = tmp42;
    cResult[45] = tmp48;
    cResult[46] = tmp54;
    cResult[47] = tmp60;
    cResult[48] = tmp63;
    cResult[49] = tmp66;
    cResult[50] = tmp72;
    cResult[51] = tmp14;
    cResult[52] = tmp21;
    cResult[53] = tmp27;
    cResult[54] = tmp30;
    cResult[55] = num7;
    cResult[56] = tmp80;
    tmp75 = tmp80;
  }
  const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 });
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = transformedBadgeColors;
  tmp12 = transformedBadgeColors;
  const obj15 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const tmpResult = GuildBadgeUtils;
}) : (function GuildBadgeSun(width) {
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
  const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights: items1 });
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.width = num;
  obj3.height = num2;
  obj3.viewBox = "0 0 16 16";
  obj3.fill = "none";
  items = [React4(inlineStyles.Path, { d: "M14 6v1h-3V6h-1V5H9V2h1V1H1v1h2v1h1v1h2v2H5v1H4v2H3v2H2v2H1v2h3v-1h2v-1h1v-1h1v-1h2v-1h1V9h1v1h1v1h1v1h1V6h-1Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M14 0h-3v1h3V0ZM4 15H1v1h3v-1ZM6 14H4v1h2v-1ZM3 2H1v1h2V2ZM4 4v1h1v1h1V4H4ZM4 7H3v2h1V7ZM3 9H2v2h1V9ZM2 11H1v2h1v-2ZM1 13H0v2h1v-2ZM10 11H8v1h2v-1ZM10 0H1v1h9V0Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M10 1H1v1h9V1Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M14 6h-3v1h3V6ZM11 1h-1v1h1V1Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M11 2h-1v2h1V2ZM14 1h-3v1h3V1Z", fill: secondaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M14 5h-3v1h3V5Z", fill: secondaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M1 1H0v1h1V1ZM4 3H3v1h1V3ZM5 6H4v1h1V6ZM15 1h-1v1h1V1ZM16 2h-1v3h1V2Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M15 2h-1v3h1V2Z", fill: secondaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M16 6h-1v6h1V6Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M15 6h-1v6h1V6Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M15 5h-1v1h1V5ZM10 2H9v3h1V2ZM11 5h-1v1h1V5Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M11 4h-1v1h1V4Z", fill: secondaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M7 13H6v1h1v-1Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M10 7v1H9v1H8v1H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h2v-1h1V7h-1ZM4 14H3v1h1v-1Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M8 12H7v1h1v-1Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M5 7H4v1h1V7ZM6 6H5v1h1V6Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M7 5H6v1h1V5ZM8 4H7v1h1V4Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M6 8H5v1h1V8ZM4 9H3v1h1V9ZM3 11H2v1h1v-1ZM2 13H1v1h1v-1Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M11 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM13 10h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 12h-1v1h1v-1Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M14 2h-3v3h3V2Z", fill: secondaryColorsTransformed[1] })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});