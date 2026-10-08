// === Module 13999: GuildBadgeTrophy ===

// Module 13999 (GuildBadgeTrophy)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7550 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13970 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#FD6214", "#FFB84B", "#FFE361"];
const primaryTintLuminances = [0.3, 0.56, 0.77];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeTrophy.tsx");

export const GuildBadgeTrophy = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBadgeTrophy(arg0) {
  const cResult = c.c(78);
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
  if (cResult[7] !== primaryColorsTransformed[2]) {
    const obj3 = { d: "M4.99998 8.99999V10H7V13H4V15H12V13H9V10H11V8.99999H12V7.99999H14V6.99999H15V3.99999H14V2.99999H12V1H4V3H2V3.99999H0.999985V6.99999H1.99998V7.99999H3.99998V8.99999H4.99998Z", fill: primaryColorsTransformed[2] };
    const tmp18 = React4(inlineStyles.Path, obj3);
    cResult[7] = primaryColorsTransformed[2];
    cResult[8] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp21 = React4(inlineStyles.Path, { d: "M12 15H3.99998V16H12V15Z", fill: "black" });
    cResult[9] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] !== primaryColorsTransformed[1]) {
    const obj4 = { d: "M12 14H3.99998V15H12V14Z", fill: primaryColorsTransformed[1] };
    const tmp24 = React4(inlineStyles.Path, obj4);
    cResult[10] = primaryColorsTransformed[1];
    cResult[11] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp32 = React4(inlineStyles.Path, { d: "M13 13H12V15H13V13Z", fill: "black" });
    const tmp33 = React4(inlineStyles.Path, { d: "M3.99998 8.99998V7.99998H1.99998V8.99998H3.99998Z", fill: "black" });
    const tmp34 = React4(inlineStyles.Path, { d: "M3.99998 13H2.99998V15H3.99998V13Z", fill: "black" });
    const tmp35 = React4(inlineStyles.Path, { d: "M5 10V11H6V12H4V13H7V10H5Z", fill: "black" });
    const tmp36 = React4(inlineStyles.Path, { d: "M0 6.99998H1L1 3.99998H0L0 6.99998Z", fill: "black" });
    const tmp37 = React4(inlineStyles.Path, { d: "M1 6.99998H2L2 3.99998H1L1 6.99998Z", fill: "white" });
    cResult[12] = tmp35;
    cResult[13] = tmp36;
    cResult[14] = tmp37;
    cResult[15] = tmp32;
    cResult[16] = tmp33;
    cResult[17] = tmp34;
    let tmp30 = tmp34;
    let tmp29 = tmp33;
    let tmp28 = tmp32;
    let tmp27 = tmp37;
    let tmp26 = tmp36;
    let tmp25 = tmp35;
  } else {
    tmp25 = cResult[12];
    tmp26 = cResult[13];
    tmp27 = cResult[14];
    tmp28 = cResult[15];
    tmp29 = cResult[16];
    tmp30 = cResult[17];
  }
  if (cResult[18] !== primaryColorsTransformed[0]) {
    const obj5 = { d: "M5 7.99998H6L6 3.99998H5V7.99998Z", fill: primaryColorsTransformed[0] };
    const tmp40 = React4(inlineStyles.Path, obj5);
    cResult[18] = primaryColorsTransformed[0];
    cResult[19] = tmp40;
    let tmp38 = tmp40;
  } else {
    tmp38 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp44 = React4(inlineStyles.Path, { d: "M3 6.99998H4L4 3.99998H3L3 6.99998Z", fill: "black" });
    const tmp45 = React4(inlineStyles.Path, { d: "M12 6.99998H13V3.99998H12V6.99998Z", fill: "black" });
    cResult[20] = tmp44;
    cResult[21] = tmp45;
    let tmp42 = tmp45;
    let tmp41 = tmp44;
  } else {
    tmp41 = cResult[20];
    tmp42 = cResult[21];
  }
  if (cResult[22] !== primaryColorsTransformed[1]) {
    const obj6 = { d: "M12 8H11V7H9V8H7V10H8V13H9V10H11V9H12V8Z", fill: primaryColorsTransformed[1] };
    const tmp48 = React4(inlineStyles.Path, obj6);
    cResult[22] = primaryColorsTransformed[1];
    cResult[23] = tmp48;
    let tmp46 = tmp48;
  } else {
    tmp46 = cResult[23];
  }
  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp51 = React4(inlineStyles.Path, { d: "M4.99998 8.99998H3.99998V9.99998H4.99998V8.99998Z", fill: "black" });
    cResult[24] = tmp51;
    let tmp49 = tmp51;
  } else {
    tmp49 = cResult[24];
  }
  if (cResult[25] !== primaryColorsTransformed[1]) {
    const obj7 = { d: "M4.99998 7.99998H3.99998V8.99998H4.99998V7.99998Z", fill: primaryColorsTransformed[1] };
    const tmp55 = React4(inlineStyles.Path, obj7);
    const obj8 = { d: "M5.99998 8.99998H4.99998V9.99998H5.99998V8.99998Z", fill: primaryColorsTransformed[1] };
    const tmp56 = React4(inlineStyles.Path, obj8);
    cResult[25] = primaryColorsTransformed[1];
    cResult[26] = tmp55;
    cResult[27] = tmp56;
    let tmp53 = tmp56;
    let tmp52 = tmp55;
  } else {
    tmp52 = cResult[26];
    tmp53 = cResult[27];
  }
  if (cResult[28] !== primaryColorsTransformed[0]) {
    const obj9 = { d: "M6.99998 7.99998H5.99998V8.99998H6.99998V7.99998Z", fill: primaryColorsTransformed[0] };
    const tmp59 = React4(inlineStyles.Path, obj9);
    cResult[28] = primaryColorsTransformed[0];
    cResult[29] = tmp59;
    let tmp57 = tmp59;
  } else {
    tmp57 = cResult[29];
  }
  if (cResult[30] !== primaryColorsTransformed[1]) {
    const obj10 = { d: "M6.99998 6.99998H5.99998V7.99998H6.99998V6.99998Z", fill: primaryColorsTransformed[1] };
    const tmp62 = React4(inlineStyles.Path, obj10);
    cResult[30] = primaryColorsTransformed[1];
    cResult[31] = tmp62;
    let tmp60 = tmp62;
  } else {
    tmp60 = cResult[31];
  }
  if (cResult[32] !== primaryColorsTransformed[0]) {
    const obj11 = { d: "M11 6.99998H10V7.99998H11V6.99998Z", fill: primaryColorsTransformed[0] };
    const tmp65 = React4(inlineStyles.Path, obj11);
    cResult[32] = primaryColorsTransformed[0];
    cResult[33] = tmp65;
    let tmp63 = tmp65;
  } else {
    tmp63 = cResult[33];
  }
  if (cResult[34] !== primaryColorsTransformed[1]) {
    const obj12 = { d: "M14 6.99998H12V7.99998H14V6.99998Z", fill: primaryColorsTransformed[1] };
    const tmp68 = React4(inlineStyles.Path, obj12);
    cResult[34] = primaryColorsTransformed[1];
    cResult[35] = tmp68;
    let tmp66 = tmp68;
  } else {
    tmp66 = cResult[35];
  }
  if (cResult[36] !== primaryColorsTransformed[0]) {
    const obj13 = { d: "M10 7.99998H9V8.99998H10V7.99998Z", fill: primaryColorsTransformed[0] };
    const tmp71 = React4(inlineStyles.Path, obj13);
    cResult[36] = primaryColorsTransformed[0];
    cResult[37] = tmp71;
    let tmp69 = tmp71;
  } else {
    tmp69 = cResult[37];
  }
  if (cResult[38] !== primaryColorsTransformed[1]) {
    const obj14 = { d: "M11 2H10V6.99999H11V2Z", fill: primaryColorsTransformed[1] };
    const tmp74 = React4(inlineStyles.Path, obj14);
    cResult[38] = primaryColorsTransformed[1];
    cResult[39] = tmp74;
    let tmp72 = tmp74;
  } else {
    tmp72 = cResult[39];
  }
  if (cResult[40] !== primaryColorsTransformed[2]) {
    const obj15 = { d: "M5.99998 2H4.99998V3.99999H5.99998V2Z", fill: primaryColorsTransformed[2] };
    const tmp77 = React4(inlineStyles.Path, obj15);
    cResult[40] = primaryColorsTransformed[2];
    cResult[41] = tmp77;
    let tmp75 = tmp77;
  } else {
    tmp75 = cResult[41];
  }
  if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp82 = React4(inlineStyles.Path, { d: "M14 3.99998V2.99998H12V3.99998H14Z", fill: "white" });
    const tmp83 = React4(inlineStyles.Path, { d: "M8 10H7V12H8V10Z", fill: "white" });
    const tmp84 = React4(inlineStyles.Path, { d: "M1.99998 6.99998H0.999985V7.99998H1.99998V6.99998Z", fill: "black" });
    cResult[42] = tmp82;
    cResult[43] = tmp83;
    cResult[44] = tmp84;
    let tmp80 = tmp84;
    let tmp79 = tmp83;
    let tmp78 = tmp82;
  } else {
    tmp78 = cResult[42];
    tmp79 = cResult[43];
    tmp80 = cResult[44];
  }
  if (cResult[45] !== primaryColorsTransformed[1]) {
    const obj16 = { d: "M3 7V4H2V8H4V7H3Z", fill: primaryColorsTransformed[1] };
    const tmp87 = React4(inlineStyles.Path, obj16);
    cResult[45] = primaryColorsTransformed[1];
    cResult[46] = tmp87;
    let tmp85 = tmp87;
  } else {
    tmp85 = cResult[46];
  }
  if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp93 = React4(inlineStyles.Path, { d: "M1.99998 2.99998H0.999985V3.99998H1.99998V2.99998Z", fill: "black" });
    const tmp94 = React4(inlineStyles.Path, { d: "M10 12V11H11V10H9V13H12V12H10Z", fill: "black" });
    const tmp95 = React4(inlineStyles.Path, { d: "M14 8.99998V7.99998H12V8.99998H14Z", fill: "black" });
    const tmp96 = React4(inlineStyles.Path, { d: "M16 3.99998H15V6.99998H16V3.99998Z", fill: "black" });
    cResult[47] = tmp93;
    cResult[48] = tmp94;
    cResult[49] = tmp95;
    cResult[50] = tmp96;
    let tmp91 = tmp96;
    let tmp90 = tmp95;
    let tmp89 = tmp94;
    let tmp88 = tmp93;
  } else {
    tmp88 = cResult[47];
    tmp89 = cResult[48];
    tmp90 = cResult[49];
    tmp91 = cResult[50];
  }
  if (cResult[51] !== primaryColorsTransformed[1]) {
    const obj17 = { d: "M14 3.99998H13V6.99998H14V3.99998Z", fill: primaryColorsTransformed[1] };
    const tmp99 = React4(inlineStyles.Path, obj17);
    cResult[51] = primaryColorsTransformed[1];
    cResult[52] = tmp99;
    let tmp97 = tmp99;
  } else {
    tmp97 = cResult[52];
  }
  if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp107 = React4(inlineStyles.Path, { d: "M13 2V0H3V2H2V3H4V1H12V3H14V2H13Z", fill: "black" });
    const tmp108 = React4(inlineStyles.Path, { d: "M11 9.99998H12V8.99998H11V9.99998Z", fill: "black" });
    const tmp109 = React4(inlineStyles.Path, { d: "M14 7.99998H15V6.99998H14V7.99998Z", fill: "black" });
    const tmp110 = React4(inlineStyles.Path, { d: "M14 3.99998H15V2.99998H14V3.99998Z", fill: "black" });
    const tmp111 = React4(inlineStyles.Path, { d: "M7 13H4V14H7V13Z", fill: "white" });
    const tmp112 = React4(inlineStyles.Path, { d: "M4 1V8H5V2H6V7H7V2H12V1H4Z", fill: "white" });
    cResult[53] = tmp107;
    cResult[54] = tmp108;
    cResult[55] = tmp109;
    cResult[56] = tmp110;
    cResult[57] = tmp111;
    cResult[58] = tmp112;
    let tmp105 = tmp112;
    let tmp104 = tmp111;
    let tmp103 = tmp110;
    let tmp102 = tmp109;
    let tmp101 = tmp108;
    let tmp100 = tmp107;
  } else {
    tmp100 = cResult[53];
    tmp101 = cResult[54];
    tmp102 = cResult[55];
    tmp103 = cResult[56];
    tmp104 = cResult[57];
    tmp105 = cResult[58];
  }
  if (cResult[59] === num7) {
    if (cResult[60] === tmp5) {
      if (cResult[61] === tmp38) {
        if (cResult[62] === tmp46) {
          if (cResult[63] === tmp52) {
            if (cResult[64] === tmp53) {
              if (cResult[65] === tmp57) {
                if (cResult[66] === tmp60) {
                  if (cResult[67] === tmp63) {
                    if (cResult[68] === tmp66) {
                      if (cResult[69] === tmp69) {
                        if (cResult[70] === tmp72) {
                          if (cResult[71] === tmp75) {
                            if (cResult[72] === tmp85) {
                              if (cResult[73] === tmp97) {
                                if (cResult[74] === tmp16) {
                                  if (cResult[75] === tmp22) {
                                    if (cResult[76] === num6) {
                                      let tmp113 = cResult[77];
                                    }
                                    return tmp113;
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
  const obj18 = {};
  const merged = Object.assign(tmp5);
  obj18.width = num6;
  obj18.height = num7;
  obj18.viewBox = "0 0 16 16";
  obj18.fill = "none";
  items = [tmp16, tmp19, tmp22, tmp28, tmp29, tmp30, tmp25, tmp26, tmp27, tmp38, tmp41, tmp42, tmp46, tmp49, tmp52, tmp53, tmp57, tmp60, tmp63, tmp66, tmp69, tmp72, tmp75, tmp78, tmp79, tmp80, tmp85, tmp88, tmp89, tmp90, tmp91, tmp97, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105];
  obj18.children = items;
  const tmp115 = hasOwnProperty(inlineStyles.Svg, obj18);
  cResult[59] = num7;
  cResult[60] = tmp5;
  cResult[61] = tmp38;
  cResult[62] = tmp46;
  cResult[63] = tmp52;
  cResult[64] = tmp53;
  cResult[65] = tmp57;
  cResult[66] = tmp60;
  cResult[67] = tmp63;
  cResult[68] = tmp66;
  cResult[69] = tmp69;
  cResult[70] = tmp72;
  cResult[71] = tmp75;
  cResult[72] = tmp85;
  cResult[73] = tmp97;
  cResult[74] = tmp16;
  cResult[75] = tmp22;
  cResult[76] = num6;
  cResult[77] = tmp115;
  tmp113 = tmp115;
}) : (function GuildBadgeTrophy(primaryTintColor) {
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
  items = [React4(inlineStyles.Path, { d: "M4.99998 8.99999V10H7V13H4V15H12V13H9V10H11V8.99999H12V7.99999H14V6.99999H15V3.99999H14V2.99999H12V1H4V3H2V3.99999H0.999985V6.99999H1.99998V7.99999H3.99998V8.99999H4.99998Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M12 15H3.99998V16H12V15Z", fill: "black" }), React4(inlineStyles.Path, { d: "M12 14H3.99998V15H12V14Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M13 13H12V15H13V13Z", fill: "black" }), React4(inlineStyles.Path, { d: "M3.99998 8.99998V7.99998H1.99998V8.99998H3.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M3.99998 13H2.99998V15H3.99998V13Z", fill: "black" }), React4(inlineStyles.Path, { d: "M5 10V11H6V12H4V13H7V10H5Z", fill: "black" }), React4(inlineStyles.Path, { d: "M0 6.99998H1L1 3.99998H0L0 6.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M1 6.99998H2L2 3.99998H1L1 6.99998Z", fill: "white" }), React4(inlineStyles.Path, { d: "M5 7.99998H6L6 3.99998H5V7.99998Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M3 6.99998H4L4 3.99998H3L3 6.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M12 6.99998H13V3.99998H12V6.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M12 8H11V7H9V8H7V10H8V13H9V10H11V9H12V8Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M4.99998 8.99998H3.99998V9.99998H4.99998V8.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M4.99998 7.99998H3.99998V8.99998H4.99998V7.99998Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M5.99998 8.99998H4.99998V9.99998H5.99998V8.99998Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M6.99998 7.99998H5.99998V8.99998H6.99998V7.99998Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M6.99998 6.99998H5.99998V7.99998H6.99998V6.99998Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M11 6.99998H10V7.99998H11V6.99998Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M14 6.99998H12V7.99998H14V6.99998Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M10 7.99998H9V8.99998H10V7.99998Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M11 2H10V6.99999H11V2Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M5.99998 2H4.99998V3.99999H5.99998V2Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M14 3.99998V2.99998H12V3.99998H14Z", fill: "white" }), React4(inlineStyles.Path, { d: "M8 10H7V12H8V10Z", fill: "white" }), React4(inlineStyles.Path, { d: "M1.99998 6.99998H0.999985V7.99998H1.99998V6.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M3 7V4H2V8H4V7H3Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M1.99998 2.99998H0.999985V3.99998H1.99998V2.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M10 12V11H11V10H9V13H12V12H10Z", fill: "black" }), React4(inlineStyles.Path, { d: "M14 8.99998V7.99998H12V8.99998H14Z", fill: "black" }), React4(inlineStyles.Path, { d: "M16 3.99998H15V6.99998H16V3.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M14 3.99998H13V6.99998H14V3.99998Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M13 2V0H3V2H2V3H4V1H12V3H14V2H13Z", fill: "black" }), React4(inlineStyles.Path, { d: "M11 9.99998H12V8.99998H11V9.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M14 7.99998H15V6.99998H14V7.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M14 3.99998H15V2.99998H14V3.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M7 13H4V14H7V13Z", fill: "white" }), React4(inlineStyles.Path, { d: "M4 1V8H5V2H6V7H7V2H12V1H4Z", fill: "white" })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});