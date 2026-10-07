// === Module 13773: GuildBadgeGoat ===

// Module 13773 (GuildBadgeGoat)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 8169 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13748 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#87553B", "#B88166"];
const primaryTintLuminances = [0.2, 0.5];
let items = [{ base: 7, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeGoat.tsx");

export const GuildBadgeGoat = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(56);
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
    const obj3 = { d: "M15 6H13V8H15V6Z", fill: primaryColorsTransformed[1] };
    const tmp20 = React4(inlineStyles.Path, obj3);
    const obj4 = { d: "M2.99998 6H0.999985V8H2.99998V6Z", fill: primaryColorsTransformed[1] };
    const tmp21 = React4(inlineStyles.Path, obj4);
    const obj5 = { d: "M9.99998 14H5.99998V5H6.99998V4H8.99998V5H9.99998V14Z", fill: primaryColorsTransformed[1] };
    const tmp22 = React4(inlineStyles.Path, obj5);
    cResult[7] = primaryColorsTransformed[1];
    cResult[8] = tmp20;
    cResult[9] = tmp21;
    cResult[10] = tmp22;
    let tmp18 = tmp22;
    let tmp17 = tmp21;
    let tmp16 = tmp20;
  } else {
    tmp16 = cResult[8];
    tmp17 = cResult[9];
    tmp18 = cResult[10];
  }
  if (cResult[11] !== primaryColorsTransformed[0]) {
    const obj6 = { d: "M10 6V7H9V10H11V11H12V6H10Z", fill: primaryColorsTransformed[0] };
    const tmp30 = React4(inlineStyles.Path, obj6);
    const obj7 = { d: "M6 6V7H7V10H5V11H4V6H6Z", fill: primaryColorsTransformed[0] };
    const tmp31 = React4(inlineStyles.Path, obj7);
    const obj8 = { d: "M9.99998 12H5.99998V13H9.99998V12Z", fill: primaryColorsTransformed[0] };
    const tmp32 = React4(inlineStyles.Path, obj8);
    const obj9 = { d: "M15 7H13V8H15V7Z", fill: primaryColorsTransformed[0] };
    const tmp33 = React4(inlineStyles.Path, obj9);
    const obj10 = { d: "M2.99998 7H0.999985V8H2.99998V7Z", fill: primaryColorsTransformed[0] };
    const tmp34 = React4(inlineStyles.Path, obj10);
    const obj11 = { d: "M8.99998 14H6.99998V15H8.99998V14Z", fill: primaryColorsTransformed[0] };
    const tmp35 = React4(inlineStyles.Path, obj11);
    cResult[11] = primaryColorsTransformed[0];
    cResult[12] = tmp33;
    cResult[13] = tmp34;
    cResult[14] = tmp35;
    cResult[15] = tmp30;
    cResult[16] = tmp31;
    cResult[17] = tmp32;
    let tmp28 = tmp32;
    let tmp27 = tmp31;
    let tmp26 = tmp30;
    let tmp25 = tmp35;
    let tmp24 = tmp34;
    let tmp23 = tmp33;
  } else {
    tmp23 = cResult[12];
    tmp24 = cResult[13];
    tmp25 = cResult[14];
    tmp26 = cResult[15];
    tmp27 = cResult[16];
    tmp28 = cResult[17];
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp62 = React4(inlineStyles.Path, { d: "M9.99998 4H8.99998V5H9.99998V4Z", fill: "#D1CDD5" });
    const tmp63 = React4(inlineStyles.Path, { d: "M6.99998 4H5.99998V5H6.99998V4Z", fill: "#D1CDD5" });
    const tmp64 = React4(inlineStyles.Path, { d: "M11 5H9.99998V6H11V5Z", fill: "#D1CDD5" });
    const tmp65 = React4(inlineStyles.Path, { d: "M5.99998 5H4.99998V6H5.99998V5Z", fill: "#D1CDD5" });
    const tmp66 = React4(inlineStyles.Path, { d: "M5.99998 5H3.99998V3H2.99998V2H1.99998V1H4.99998V2H5.99998V5Z", fill: "white" });
    const tmp67 = React4(inlineStyles.Path, { d: "M9.99998 5H12V3H13V2H14V1H11V2H9.99998V5Z", fill: "white" });
    const tmp68 = React4(inlineStyles.Path, { d: "M12 2H11V3H12V2Z", fill: "#D1CDD5" });
    const tmp69 = React4(inlineStyles.Path, { d: "M4.99998 2H3.99998V3H4.99998V2Z", fill: "#D1CDD5" });
    const tmp70 = React4(inlineStyles.Path, { d: "M4.99998 0H1.99998V1H4.99998V0Z", fill: "black" });
    const tmp71 = React4(inlineStyles.Path, { d: "M14 0H11V1H14V0Z", fill: "black" });
    const tmp72 = React4(inlineStyles.Path, { d: "M5.99998 9V7H4.99999V9H5.99998Z", fill: "black" });
    const tmp73 = React4(inlineStyles.Path, { d: "M11 9V7H9.99999V9H11Z", fill: "black" });
    const tmp74 = React4(inlineStyles.Path, { d: "M8.99998 12H6.99998V13H8.99998V12Z", fill: "black" });
    const tmp75 = React4(inlineStyles.Path, { d: "M8.99998 10H6.99998V11H8.99998V10Z", fill: "black" });
    const tmp76 = React4(inlineStyles.Path, { d: "M13 5V3H12V5H11V6H12V11H13V9H15V8H13V6H15V8H16V5H13Z", fill: "black" });
    const tmp77 = React4(inlineStyles.Path, { d: "M5 5H4V3H3V5H0V8H1V6H3V8H1V9H3V11H4V6H5V5Z", fill: "black" });
    const tmp78 = React4(inlineStyles.Path, { d: "M11 11V10H10V14H11V12H12V11H11Z", fill: "black" });
    const tmp79 = React4(inlineStyles.Path, { d: "M9.99998 14H8.99998V15H9.99998V14Z", fill: "black" });
    const tmp80 = React4(inlineStyles.Path, { d: "M7 15V14H6V15H5V16H9V15H7Z", fill: "black" });
    const tmp81 = React4(inlineStyles.Path, { d: "M5 10V11H4V12H5V14H6V10H5Z", fill: "black" });
    const tmp82 = React4(inlineStyles.Path, { d: "M2 2V1H1V3H3V2H2Z", fill: "black" });
    const tmp83 = React4(inlineStyles.Path, { d: "M5.99998 1H4.99998V2H5.99998V1Z", fill: "black" });
    const tmp84 = React4(inlineStyles.Path, { d: "M9 2V3H7V2H6V4H10V2H9Z", fill: "black" });
    const tmp85 = React4(inlineStyles.Path, { d: "M11 1H9.99998V2H11V1Z", fill: "black" });
    const tmp86 = React4(inlineStyles.Path, { d: "M14 1V2H13V3H15V1H14Z", fill: "black" });
    cResult[18] = tmp62;
    cResult[19] = tmp63;
    cResult[20] = tmp64;
    cResult[21] = tmp65;
    cResult[22] = tmp66;
    cResult[23] = tmp67;
    cResult[24] = tmp68;
    cResult[25] = tmp69;
    cResult[26] = tmp70;
    cResult[27] = tmp71;
    cResult[28] = tmp72;
    cResult[29] = tmp73;
    cResult[30] = tmp74;
    cResult[31] = tmp75;
    cResult[32] = tmp76;
    cResult[33] = tmp77;
    cResult[34] = tmp78;
    cResult[35] = tmp79;
    cResult[36] = tmp80;
    cResult[37] = tmp81;
    cResult[38] = tmp82;
    cResult[39] = tmp83;
    cResult[40] = tmp84;
    cResult[41] = tmp85;
    cResult[42] = tmp86;
    let tmp60 = tmp86;
    let tmp59 = tmp85;
    let tmp58 = tmp84;
    let tmp57 = tmp83;
    let tmp56 = tmp82;
    let tmp55 = tmp81;
    let tmp54 = tmp80;
    let tmp53 = tmp79;
    let tmp52 = tmp78;
    let tmp51 = tmp77;
    let tmp50 = tmp76;
    let tmp49 = tmp75;
    let tmp48 = tmp74;
    let tmp47 = tmp73;
    let tmp46 = tmp72;
    let tmp45 = tmp71;
    let tmp44 = tmp70;
    let tmp43 = tmp69;
    let tmp42 = tmp68;
    let tmp41 = tmp67;
    let tmp40 = tmp66;
    let tmp39 = tmp65;
    let tmp38 = tmp64;
    let tmp37 = tmp63;
    let tmp36 = tmp62;
  } else {
    tmp36 = cResult[18];
    tmp37 = cResult[19];
    tmp38 = cResult[20];
    tmp39 = cResult[21];
    tmp40 = cResult[22];
    tmp41 = cResult[23];
    tmp42 = cResult[24];
    tmp43 = cResult[25];
    tmp44 = cResult[26];
    tmp45 = cResult[27];
    tmp46 = cResult[28];
    tmp47 = cResult[29];
    tmp48 = cResult[30];
    tmp49 = cResult[31];
    tmp50 = cResult[32];
    tmp51 = cResult[33];
    tmp52 = cResult[34];
    tmp53 = cResult[35];
    tmp54 = cResult[36];
    tmp55 = cResult[37];
    tmp56 = cResult[38];
    tmp57 = cResult[39];
    tmp58 = cResult[40];
    tmp59 = cResult[41];
    tmp60 = cResult[42];
  }
  if (cResult[43] === num7) {
    if (cResult[44] === tmp5) {
      if (cResult[45] === tmp23) {
        if (cResult[46] === tmp24) {
          if (cResult[47] === tmp25) {
            if (cResult[48] === tmp16) {
              if (cResult[49] === tmp17) {
                if (cResult[50] === tmp18) {
                  if (cResult[51] === tmp26) {
                    if (cResult[52] === tmp27) {
                      if (cResult[53] === tmp28) {
                        if (cResult[54] === num6) {
                          let tmp87 = cResult[55];
                        }
                        return tmp87;
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
  const obj12 = {};
  const merged = Object.assign(tmp5);
  obj12.width = num6;
  obj12.height = num7;
  obj12.viewBox = "0 0 16 16";
  obj12.fill = "none";
  items = [tmp16, tmp17, tmp18, tmp26, tmp27, tmp28, tmp23, tmp24, tmp25, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60];
  obj12.children = items;
  const tmp89 = hasOwnProperty(inlineStyles.Svg, obj12);
  cResult[43] = num7;
  cResult[44] = tmp5;
  cResult[45] = tmp23;
  cResult[46] = tmp24;
  cResult[47] = tmp25;
  cResult[48] = tmp16;
  cResult[49] = tmp17;
  cResult[50] = tmp18;
  cResult[51] = tmp26;
  cResult[52] = tmp27;
  cResult[53] = tmp28;
  cResult[54] = num6;
  cResult[55] = tmp89;
  tmp87 = tmp89;
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
  items = [React4(inlineStyles.Path, { d: "M15 6H13V8H15V6Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M2.99998 6H0.999985V8H2.99998V6Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M9.99998 14H5.99998V5H6.99998V4H8.99998V5H9.99998V14Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M10 6V7H9V10H11V11H12V6H10Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M6 6V7H7V10H5V11H4V6H6Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M9.99998 12H5.99998V13H9.99998V12Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M15 7H13V8H15V7Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M2.99998 7H0.999985V8H2.99998V7Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M8.99998 14H6.99998V15H8.99998V14Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M9.99998 4H8.99998V5H9.99998V4Z", fill: "#D1CDD5" }), React4(inlineStyles.Path, { d: "M6.99998 4H5.99998V5H6.99998V4Z", fill: "#D1CDD5" }), React4(inlineStyles.Path, { d: "M11 5H9.99998V6H11V5Z", fill: "#D1CDD5" }), React4(inlineStyles.Path, { d: "M5.99998 5H4.99998V6H5.99998V5Z", fill: "#D1CDD5" }), React4(inlineStyles.Path, { d: "M5.99998 5H3.99998V3H2.99998V2H1.99998V1H4.99998V2H5.99998V5Z", fill: "white" }), React4(inlineStyles.Path, { d: "M9.99998 5H12V3H13V2H14V1H11V2H9.99998V5Z", fill: "white" }), React4(inlineStyles.Path, { d: "M12 2H11V3H12V2Z", fill: "#D1CDD5" }), React4(inlineStyles.Path, { d: "M4.99998 2H3.99998V3H4.99998V2Z", fill: "#D1CDD5" }), React4(inlineStyles.Path, { d: "M4.99998 0H1.99998V1H4.99998V0Z", fill: "black" }), React4(inlineStyles.Path, { d: "M14 0H11V1H14V0Z", fill: "black" }), React4(inlineStyles.Path, { d: "M5.99998 9V7H4.99999V9H5.99998Z", fill: "black" }), React4(inlineStyles.Path, { d: "M11 9V7H9.99999V9H11Z", fill: "black" }), React4(inlineStyles.Path, { d: "M8.99998 12H6.99998V13H8.99998V12Z", fill: "black" }), React4(inlineStyles.Path, { d: "M8.99998 10H6.99998V11H8.99998V10Z", fill: "black" }), React4(inlineStyles.Path, { d: "M13 5V3H12V5H11V6H12V11H13V9H15V8H13V6H15V8H16V5H13Z", fill: "black" }), React4(inlineStyles.Path, { d: "M5 5H4V3H3V5H0V8H1V6H3V8H1V9H3V11H4V6H5V5Z", fill: "black" }), React4(inlineStyles.Path, { d: "M11 11V10H10V14H11V12H12V11H11Z", fill: "black" }), React4(inlineStyles.Path, { d: "M9.99998 14H8.99998V15H9.99998V14Z", fill: "black" }), React4(inlineStyles.Path, { d: "M7 15V14H6V15H5V16H9V15H7Z", fill: "black" }), React4(inlineStyles.Path, { d: "M5 10V11H4V12H5V14H6V10H5Z", fill: "black" }), React4(inlineStyles.Path, { d: "M2 2V1H1V3H3V2H2Z", fill: "black" }), React4(inlineStyles.Path, { d: "M5.99998 1H4.99998V2H5.99998V1Z", fill: "black" }), React4(inlineStyles.Path, { d: "M9 2V3H7V2H6V4H10V2H9Z", fill: "black" }), React4(inlineStyles.Path, { d: "M11 1H9.99998V2H11V1Z", fill: "black" }), React4(inlineStyles.Path, { d: "M14 1V2H13V3H15V1H14Z", fill: "black" })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});