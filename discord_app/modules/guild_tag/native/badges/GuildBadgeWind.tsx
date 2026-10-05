// === Module 13751: GuildBadgeWind ===

// Module 13751 (GuildBadgeWind)
import react2 from "react" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13730 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const primaryBaseColors = ["#816bee", "#b79cf8", "#f0f0f0"];
const secondaryBaseColors = ["#6c9ca6", "#9af4dc", "#f0f0f0"];
const primaryTintLuminances = [0.07, 0.35, 1];
let items = [{ base: 4, tint: 1 }, { base: 1, tint: 1 }, { base: 8, tint: 1 }, { base: 6, tint: 1 }];
const secondaryTintLuminances = [0.2, 0.75, 1];
const items1 = [{ base: 2, tint: 1 }, { base: 1, tint: 1 }, { base: 6, tint: 1 }];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let height;
  let primaryColorsTransformed;
  let primaryTintColor;
  let secondaryColorsTransformed;
  let secondaryTintColor;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let width;
  const obj = react2;
  const cResult = obj.c(66);
  if (cResult[0] !== arg0) {
    ({ width, height, primaryTintColor, secondaryTintColor } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = primaryTintColor;
    cResult[2] = tmp11;
    cResult[3] = secondaryTintColor;
    cResult[4] = width;
    cResult[5] = height;
    tmp8 = height;
    tmp7 = width;
    tmp6 = secondaryTintColor;
    tmp5 = tmp11;
    tmp4 = primaryTintColor;
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
    let tmp12;
    let tmp14;
    let tmp18;
    let tmp17;
    let tmp22;
    let tmp25;
    let tmp29;
    let tmp32;
    let tmp36;
    let tmp35;
    let tmp40;
    let tmp43;
    let tmp46;
    let tmp49;
    let tmp52;
    let tmp55;
    let tmp58;
    let tmp61;
    let tmp64;
    let tmp67;
    let tmp70;
    let tmp73;
    let tmp76;
    if (cResult[7] === tmp6) {
      tmp12 = cResult[8];
    }
    ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
    if (cResult[9] !== primaryColorsTransformed[1]) {
      const obj2 = { d: "M14 4V3h-2V1H8v1H7v1H6V2H3v1H2v4H1v3h1V9h1V8h5V6h1V5h5v1h1V4h-1Z", fill: primaryColorsTransformed[1] };
      const tmp16 = React3(inlineStyles.Path, obj2);
      cResult[9] = primaryColorsTransformed[1];
      cResult[10] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[10];
    }
    if (cResult[11] !== secondaryColorsTransformed[1]) {
      const obj3 = { d: "M9 6v1H8v2h1v2h2v1h3v-1h1V6H9Z", fill: secondaryColorsTransformed[1] };
      const tmp20 = React3(inlineStyles.Path, obj3);
      const obj4 = { d: "M4 10v4h1v1h3v-1h1v-4H4Z", fill: secondaryColorsTransformed[1] };
      const tmp21 = React3(inlineStyles.Path, obj4);
      cResult[11] = secondaryColorsTransformed[1];
      cResult[12] = tmp20;
      cResult[13] = tmp21;
      tmp18 = tmp21;
      tmp17 = tmp20;
    } else {
      tmp17 = cResult[12];
      tmp18 = cResult[13];
    }
    if (cResult[14] !== secondaryColorsTransformed[0]) {
      const obj5 = { d: "M8 14H5v1h3v-1ZM14 11h-3v1h3v-1ZM15 10h-1v1h1v-1ZM9 13H8v1h1v-1Z", fill: secondaryColorsTransformed[0] };
      const tmp24 = React3(inlineStyles.Path, obj5);
      cResult[14] = secondaryColorsTransformed[0];
      cResult[15] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[15];
    }
    if (cResult[16] !== secondaryColorsTransformed[2]) {
      const obj6 = { d: "M9 7H8v1h1V7ZM11 8h-1v1h1V8ZM14 6H9v1h5V6Z", fill: secondaryColorsTransformed[2] };
      const tmp27 = React3(inlineStyles.Path, obj6);
      cResult[16] = secondaryColorsTransformed[2];
      cResult[17] = tmp27;
      tmp25 = tmp27;
    } else {
      tmp25 = cResult[17];
    }
    const _Symbol = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp31 = React3(inlineStyles.Path, { d: "M8 1H7v1h1V1ZM15 3h-1v1h1V3ZM14 8h-1v2h1V8ZM9 6H8v1h1V6Z", fill: "#000" });
      cResult[18] = tmp31;
      tmp29 = tmp31;
    } else {
      tmp29 = cResult[18];
    }
    if (cResult[19] !== primaryColorsTransformed[0]) {
      const obj7 = { d: "M9 5H8v1h1V5Z", fill: primaryColorsTransformed[0] };
      const tmp34 = React3(inlineStyles.Path, obj7);
      cResult[19] = primaryColorsTransformed[0];
      cResult[20] = tmp34;
      tmp32 = tmp34;
    } else {
      tmp32 = cResult[20];
    }
    const _Symbol2 = Symbol;
    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp38 = React3(inlineStyles.Path, { d: "M3 9H2v1h1V9ZM7 13H6v1h1v-1ZM6 12H5v1h1v-1Z", fill: "#000" });
      const tmp39 = React3(inlineStyles.Path, { d: "M6 12H5v1h1v-1ZM13 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM5 14H4v1h1v-1ZM9 14H8v1h1v-1ZM2 10H1v1h1v-1ZM3 14H2v1h1v-1ZM2 15H1v1h1v-1ZM15 4v2h-1v1h1v4h1V4h-1ZM13 2V1h-1v2h2V2h-1ZM6 1H3v1h3V1ZM13 7h-3v1h3V7ZM7 10H4v1h3v-1ZM8 15H5v1h3v-1ZM7 2H6v1h1V2ZM3 2H2v1h1V2Z", fill: "#000" });
      cResult[21] = tmp38;
      cResult[22] = tmp39;
      tmp36 = tmp39;
      tmp35 = tmp38;
    } else {
      tmp35 = cResult[21];
      tmp36 = cResult[22];
    }
    if (cResult[23] !== primaryColorsTransformed[2]) {
      const obj8 = { d: "M6 2H3v1h3V2ZM7 3H6v1h1V3ZM4 5H3v1h1V5ZM2 7H1v1h1V7ZM3 3H2v1h1V3Z", fill: primaryColorsTransformed[2] };
      const tmp42 = React3(inlineStyles.Path, obj8);
      cResult[23] = primaryColorsTransformed[2];
      cResult[24] = tmp42;
      tmp40 = tmp42;
    } else {
      tmp40 = cResult[24];
    }
    const _Symbol3 = Symbol;
    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp45 = React3(inlineStyles.Path, { d: "M14 12h-3v1h3v-1ZM10 11V8H9v1H8v1h1v4h1v-2h1v-1h-1ZM15 11h-1v1h1v-1ZM2 3H1v4h1V3ZM1 7H0v3h1V7ZM4 11H3v3h1v-3ZM8 11H7v2h1v-2ZM1 11H0v4h1v-4ZM12 0H8v1h4V0Z", fill: "#000" });
      cResult[25] = tmp45;
      tmp43 = tmp45;
    } else {
      tmp43 = cResult[25];
    }
    if (cResult[26] !== primaryColorsTransformed[2]) {
      const obj9 = { d: "M8 2H7v1h1V2ZM12 1H8v1h4V1Z", fill: primaryColorsTransformed[2] };
      const tmp48 = React3(inlineStyles.Path, obj9);
      cResult[26] = primaryColorsTransformed[2];
      cResult[27] = tmp48;
      tmp46 = tmp48;
    } else {
      tmp46 = cResult[27];
    }
    const _Symbol4 = Symbol;
    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp51 = React3(inlineStyles.Path, { d: "M14 5H9v1h5V5Z", fill: "#000" });
      cResult[28] = tmp51;
      tmp49 = tmp51;
    } else {
      tmp49 = cResult[28];
    }
    if (cResult[29] !== primaryColorsTransformed[0]) {
      const obj10 = { d: "M14 4V3h-1v1H9v1h5v1h1V4h-1Z", fill: primaryColorsTransformed[0] };
      const tmp54 = React3(inlineStyles.Path, obj10);
      cResult[29] = primaryColorsTransformed[0];
      cResult[30] = tmp54;
      tmp52 = tmp54;
    } else {
      tmp52 = cResult[30];
    }
    if (cResult[31] !== secondaryColorsTransformed[2]) {
      const obj11 = { d: "M5 11H4v1h1v-1Z", fill: secondaryColorsTransformed[2] };
      const tmp57 = React3(inlineStyles.Path, obj11);
      cResult[31] = secondaryColorsTransformed[2];
      cResult[32] = tmp57;
      tmp55 = tmp57;
    } else {
      tmp55 = cResult[32];
    }
    if (cResult[33] !== primaryColorsTransformed[0]) {
      const obj12 = { d: "M7 6v1H3v1h5V6H7Z", fill: primaryColorsTransformed[0] };
      const tmp60 = React3(inlineStyles.Path, obj12);
      cResult[33] = primaryColorsTransformed[0];
      cResult[34] = tmp60;
      tmp58 = tmp60;
    } else {
      tmp58 = cResult[34];
    }
    const _Symbol5 = Symbol;
    if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp63 = React3(inlineStyles.Path, { d: "M7 7v1H3v1h5V7H7Z", fill: "#000" });
      cResult[35] = tmp63;
      tmp61 = tmp63;
    } else {
      tmp61 = cResult[35];
    }
    if (cResult[36] !== primaryColorsTransformed[0]) {
      const obj13 = { d: "M3 8H2v1h1V8ZM2 9H1v1h1V9Z", fill: primaryColorsTransformed[0] };
      const tmp66 = React3(inlineStyles.Path, obj13);
      cResult[36] = primaryColorsTransformed[0];
      cResult[37] = tmp66;
      tmp64 = tmp66;
    } else {
      tmp64 = cResult[37];
    }
    if (cResult[38] !== secondaryColorsTransformed[1]) {
      const obj14 = { d: "M3 9v1H2v1H1v4h1v-1h1v-3h1v-1h4V9H3Z", fill: secondaryColorsTransformed[1] };
      const tmp69 = React3(inlineStyles.Path, obj14);
      cResult[38] = secondaryColorsTransformed[1];
      cResult[39] = tmp69;
      tmp67 = tmp69;
    } else {
      tmp67 = cResult[39];
    }
    if (cResult[40] !== secondaryColorsTransformed[2]) {
      const obj15 = { d: "M3 10H2v1h1v-1ZM2 11H1v1h1v-1Z", fill: secondaryColorsTransformed[2] };
      const tmp72 = React3(inlineStyles.Path, obj15);
      cResult[40] = secondaryColorsTransformed[2];
      cResult[41] = tmp72;
      tmp70 = tmp72;
    } else {
      tmp70 = cResult[41];
    }
    if (cResult[42] !== secondaryColorsTransformed[0]) {
      const obj16 = { d: "M3 13H2v1h1v-1ZM2 14H1v1h1v-1Z", fill: secondaryColorsTransformed[0] };
      const tmp75 = React3(inlineStyles.Path, obj16);
      cResult[42] = secondaryColorsTransformed[0];
      cResult[43] = tmp75;
      tmp73 = tmp75;
    } else {
      tmp73 = cResult[43];
    }
    if (cResult[44] !== secondaryColorsTransformed[2]) {
      const obj17 = { d: "M8 9H3v1h5V9Z", fill: secondaryColorsTransformed[2] };
      const tmp78 = React3(inlineStyles.Path, obj17);
      cResult[44] = secondaryColorsTransformed[2];
      cResult[45] = tmp78;
      tmp76 = tmp78;
    } else {
      tmp76 = cResult[45];
    }
    if (cResult[46] === num8) {
      if (cResult[47] === tmp5) {
        if (cResult[48] === tmp32) {
          if (cResult[49] === tmp40) {
            if (cResult[50] === tmp46) {
              if (cResult[51] === tmp52) {
                if (cResult[52] === tmp55) {
                  if (cResult[53] === tmp58) {
                    if (cResult[54] === tmp64) {
                      if (cResult[55] === tmp67) {
                        if (cResult[56] === tmp70) {
                          if (cResult[57] === tmp73) {
                            if (cResult[58] === tmp76) {
                              if (cResult[59] === tmp14) {
                                if (cResult[60] === tmp17) {
                                  if (cResult[61] === tmp18) {
                                    if (cResult[62] === tmp22) {
                                      if (cResult[63] === tmp25) {
                                        let tmp79;
                                        if (cResult[64] === num7) {
                                          tmp79 = cResult[65];
                                        }
                                        return tmp79;
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
          }
        }
      }
    }
    const obj18 = { width: num7, height: num8, viewBox: "0 0 16 16", fill: "none", children: items };
    const Svg = inlineStyles.Svg;
    const merged = Object.assign(tmp5);
    items = [tmp14, tmp17, tmp18, tmp22, tmp25, tmp29, tmp32, tmp35, tmp36, tmp40, tmp43, tmp46, tmp49, tmp52, tmp55, tmp58, tmp61, tmp64, tmp67, tmp70, tmp73, tmp76];
    const tmp84 = hasOwnProperty(Svg, obj18);
    cResult[46] = num8;
    cResult[47] = tmp5;
    cResult[48] = tmp32;
    cResult[49] = tmp40;
    cResult[50] = tmp46;
    cResult[51] = tmp52;
    cResult[52] = tmp55;
    cResult[53] = tmp58;
    cResult[54] = tmp64;
    cResult[55] = tmp67;
    cResult[56] = tmp70;
    cResult[57] = tmp73;
    cResult[58] = tmp76;
    cResult[59] = tmp14;
    cResult[60] = tmp17;
    cResult[61] = tmp18;
    cResult[62] = tmp22;
    cResult[63] = tmp25;
    cResult[64] = num7;
    cResult[65] = tmp84;
    tmp79 = tmp84;
  }
  const obj19 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const tmpResult = GuildBadgeUtils;
  const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj19);
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = transformedBadgeColors;
  tmp12 = transformedBadgeColors;
}) : ((width) => {
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
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  const obj = GuildBadgeUtils;
  const obj2 = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj2);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items };
  const Svg = inlineStyles.Svg;
  const merged1 = Object.assign(merged);
  items = [, , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M14 4V3h-2V1H8v1H7v1H6V2H3v1H2v4H1v3h1V9h1V8h5V6h1V5h5v1h1V4h-1Z", fill: primaryColorsTransformed[1] };
  items[0] = React3(inlineStyles.Path, obj4);
  const obj5 = { d: "M9 6v1H8v2h1v2h2v1h3v-1h1V6H9Z", fill: secondaryColorsTransformed[1] };
  items[1] = React3(inlineStyles.Path, obj5);
  const obj6 = { d: "M4 10v4h1v1h3v-1h1v-4H4Z", fill: secondaryColorsTransformed[1] };
  items[2] = React3(inlineStyles.Path, obj6);
  const obj7 = { d: "M8 14H5v1h3v-1ZM14 11h-3v1h3v-1ZM15 10h-1v1h1v-1ZM9 13H8v1h1v-1Z", fill: secondaryColorsTransformed[0] };
  items[3] = React3(inlineStyles.Path, obj7);
  const obj8 = { d: "M9 7H8v1h1V7ZM11 8h-1v1h1V8ZM14 6H9v1h5V6Z", fill: secondaryColorsTransformed[2] };
  items[4] = React3(inlineStyles.Path, obj8);
  items[5] = React3(inlineStyles.Path, { d: "M8 1H7v1h1V1ZM15 3h-1v1h1V3ZM14 8h-1v2h1V8ZM9 6H8v1h1V6Z", fill: "#000" });
  const obj9 = { d: "M9 5H8v1h1V5Z", fill: primaryColorsTransformed[0] };
  items[6] = React3(inlineStyles.Path, obj9);
  items[7] = React3(inlineStyles.Path, { d: "M3 9H2v1h1V9ZM7 13H6v1h1v-1ZM6 12H5v1h1v-1Z", fill: "#000" });
  items[8] = React3(inlineStyles.Path, { d: "M6 12H5v1h1v-1ZM13 10h-1v1h1v-1ZM12 9h-1v1h1V9ZM5 14H4v1h1v-1ZM9 14H8v1h1v-1ZM2 10H1v1h1v-1ZM3 14H2v1h1v-1ZM2 15H1v1h1v-1ZM15 4v2h-1v1h1v4h1V4h-1ZM13 2V1h-1v2h2V2h-1ZM6 1H3v1h3V1ZM13 7h-3v1h3V7ZM7 10H4v1h3v-1ZM8 15H5v1h3v-1ZM7 2H6v1h1V2ZM3 2H2v1h1V2Z", fill: "#000" });
  const obj10 = { d: "M6 2H3v1h3V2ZM7 3H6v1h1V3ZM4 5H3v1h1V5ZM2 7H1v1h1V7ZM3 3H2v1h1V3Z", fill: primaryColorsTransformed[2] };
  items[9] = React3(inlineStyles.Path, obj10);
  items[10] = React3(inlineStyles.Path, { d: "M14 12h-3v1h3v-1ZM10 11V8H9v1H8v1h1v4h1v-2h1v-1h-1ZM15 11h-1v1h1v-1ZM2 3H1v4h1V3ZM1 7H0v3h1V7ZM4 11H3v3h1v-3ZM8 11H7v2h1v-2ZM1 11H0v4h1v-4ZM12 0H8v1h4V0Z", fill: "#000" });
  const obj11 = { d: "M8 2H7v1h1V2ZM12 1H8v1h4V1Z", fill: primaryColorsTransformed[2] };
  items[11] = React3(inlineStyles.Path, obj11);
  items[12] = React3(inlineStyles.Path, { d: "M14 5H9v1h5V5Z", fill: "#000" });
  const obj12 = { d: "M14 4V3h-1v1H9v1h5v1h1V4h-1Z", fill: primaryColorsTransformed[0] };
  items[13] = React3(inlineStyles.Path, obj12);
  const obj13 = { d: "M5 11H4v1h1v-1Z", fill: secondaryColorsTransformed[2] };
  items[14] = React3(inlineStyles.Path, obj13);
  const obj14 = { d: "M7 6v1H3v1h5V6H7Z", fill: primaryColorsTransformed[0] };
  items[15] = React3(inlineStyles.Path, obj14);
  items[16] = React3(inlineStyles.Path, { d: "M7 7v1H3v1h5V7H7Z", fill: "#000" });
  const obj15 = { d: "M3 8H2v1h1V8ZM2 9H1v1h1V9Z", fill: primaryColorsTransformed[0] };
  items[17] = React3(inlineStyles.Path, obj15);
  const obj16 = { d: "M3 9v1H2v1H1v4h1v-1h1v-3h1v-1h4V9H3Z", fill: secondaryColorsTransformed[1] };
  items[18] = React3(inlineStyles.Path, obj16);
  const obj17 = { d: "M3 10H2v1h1v-1ZM2 11H1v1h1v-1Z", fill: secondaryColorsTransformed[2] };
  items[19] = React3(inlineStyles.Path, obj17);
  const obj18 = { d: "M3 13H2v1h1v-1ZM2 14H1v1h1v-1Z", fill: secondaryColorsTransformed[0] };
  items[20] = React3(inlineStyles.Path, obj18);
  const obj19 = { d: "M8 9H3v1h5V9Z", fill: secondaryColorsTransformed[2] };
  items[21] = React3(inlineStyles.Path, obj19);
  return hasOwnProperty(Svg, obj3);
});
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeWind.tsx");

export const GuildBadgeWind = tmp4;