// === Module 14001: GuildBadgeDollarSign ===

// Module 14001 (GuildBadgeDollarSign)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7550 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13970 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#008456", "#6BE473"];
const primaryTintLuminances = [0.17, 0.6];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeDollarSign.tsx");

export const GuildBadgeDollarSign = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBadgeDollarSign(arg0) {
  const cResult = c.c(47);
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
    const tmp20 = React4(inlineStyles.Path, { d: "M16 11.9295V9H15V11.9295H16Z", fill: "black" });
    const tmp21 = React4(inlineStyles.Path, { d: "M16 12V9H15V12H16Z", fill: "black" });
    const tmp22 = React4(inlineStyles.Path, { d: "M1 7L1 4H0L0 7H1Z", fill: "black" });
    cResult[7] = tmp20;
    cResult[8] = tmp21;
    cResult[9] = tmp22;
    let tmp18 = tmp22;
    let tmp17 = tmp21;
    let tmp16 = tmp20;
  } else {
    tmp16 = cResult[7];
    tmp17 = cResult[8];
    tmp18 = cResult[9];
  }
  if (cResult[10] !== primaryColorsTransformed[1]) {
    const obj3 = { d: "M15 7V3H11V1H5.00002V3H2.00002V4H1.00002V7H2.00002V8H5.00002V9H1.00002V13H5.00002V15H11V13H14V12H15V9H14V8H11V7H15Z", fill: primaryColorsTransformed[1] };
    const tmp25 = React4(inlineStyles.Path, obj3);
    cResult[10] = primaryColorsTransformed[1];
    cResult[11] = tmp25;
    let tmp23 = tmp25;
  } else {
    tmp23 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp33 = React4(inlineStyles.Path, { d: "M15 12H14V13H15V12Z", fill: "black" });
    const tmp34 = React4(inlineStyles.Path, { d: "M13 9H12V10H13V9Z", fill: "white" });
    const tmp35 = React4(inlineStyles.Path, { d: "M12 8H8V9H12V8Z", fill: "white" });
    const tmp36 = React4(inlineStyles.Path, { d: "M5 3H2V4H5V3Z", fill: "white" });
    const tmp37 = React4(inlineStyles.Path, { d: "M7 9H6V10H7V9Z", fill: "black" });
    const tmp38 = React4(inlineStyles.Path, { d: "M8 6H7V7H8V6Z", fill: "black" });
    cResult[12] = tmp35;
    cResult[13] = tmp36;
    cResult[14] = tmp37;
    cResult[15] = tmp38;
    cResult[16] = tmp33;
    cResult[17] = tmp34;
    let tmp31 = tmp34;
    let tmp30 = tmp33;
    let tmp29 = tmp38;
    let tmp28 = tmp37;
    let tmp27 = tmp36;
    let tmp26 = tmp35;
  } else {
    tmp26 = cResult[12];
    tmp27 = cResult[13];
    tmp28 = cResult[14];
    tmp29 = cResult[15];
    tmp30 = cResult[16];
    tmp31 = cResult[17];
  }
  if (cResult[18] !== primaryColorsTransformed[0]) {
    const obj4 = { d: "M8 5H7V6H8V5Z", fill: primaryColorsTransformed[0] };
    const tmp44 = React4(inlineStyles.Path, obj4);
    const obj5 = { d: "M7 10H6V11H7V10Z", fill: primaryColorsTransformed[0] };
    const tmp45 = React4(inlineStyles.Path, obj5);
    const obj6 = { d: "M6 9H5V10H6V9Z", fill: primaryColorsTransformed[0] };
    const tmp46 = React4(inlineStyles.Path, obj6);
    const obj7 = { d: "M9 6H8V7H9V6Z", fill: primaryColorsTransformed[0] };
    const tmp47 = React4(inlineStyles.Path, obj7);
    cResult[18] = primaryColorsTransformed[0];
    cResult[19] = tmp44;
    cResult[20] = tmp45;
    cResult[21] = tmp46;
    cResult[22] = tmp47;
    let tmp42 = tmp47;
    let tmp41 = tmp46;
    let tmp40 = tmp45;
    let tmp39 = tmp44;
  } else {
    tmp39 = cResult[19];
    tmp40 = cResult[20];
    tmp41 = cResult[21];
    tmp42 = cResult[22];
  }
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp52 = React4(inlineStyles.Path, { d: "M2 3H1V4H2V3Z", fill: "black" });
    const tmp53 = React4(inlineStyles.Path, { d: "M2 4H1V5H2V4Z", fill: "white" });
    const tmp54 = React4(inlineStyles.Path, { d: "M11 13V15H5.00002V13H1.00002V9H6.00002V8H2.00002V7H1.00002V8H1.52588e-05V14H4.00002V16H12V14H14V13H11Z", fill: "black" });
    cResult[23] = tmp52;
    cResult[24] = tmp53;
    cResult[25] = tmp54;
    let tmp50 = tmp54;
    let tmp49 = tmp53;
    let tmp48 = tmp52;
  } else {
    tmp48 = cResult[23];
    tmp49 = cResult[24];
    tmp50 = cResult[25];
  }
  if (cResult[26] !== primaryColorsTransformed[0]) {
    const obj8 = { d: "M13 3V7H15V3H13Z", fill: primaryColorsTransformed[0] };
    const tmp60 = React4(inlineStyles.Path, obj8);
    const obj9 = { d: "M9 1V3H11V1L9 1Z", fill: primaryColorsTransformed[0] };
    const tmp61 = React4(inlineStyles.Path, obj9);
    const obj10 = { d: "M9 13V15H11V13H9Z", fill: primaryColorsTransformed[0] };
    const tmp62 = React4(inlineStyles.Path, obj10);
    const obj11 = { d: "M14 9V8H12V9H13V12H12V13H14V12H15V9H14Z", fill: primaryColorsTransformed[0] };
    const tmp63 = React4(inlineStyles.Path, obj11);
    cResult[26] = primaryColorsTransformed[0];
    cResult[27] = tmp60;
    cResult[28] = tmp61;
    cResult[29] = tmp62;
    cResult[30] = tmp63;
    let tmp58 = tmp63;
    let tmp57 = tmp62;
    let tmp56 = tmp61;
    let tmp55 = tmp60;
  } else {
    tmp55 = cResult[27];
    tmp56 = cResult[28];
    tmp57 = cResult[29];
    tmp58 = cResult[30];
  }
  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp68 = React4(inlineStyles.Path, { d: "M12 5V4H11V3H9.00002V1H5.00002V2H7.00002V3H8.00002V4H9.00002V5H10V6H11V7H13V5H12Z", fill: "white" });
    const tmp69 = React4(inlineStyles.Path, { d: "M9.00002 12V11H8.00002V10H7.00002V11H6.00002V10H5.00002V9H1.00002V10H4.00002V11H5.00002V12H6.00002V13H7.00002V14H8.00002V15H9.00002V13H10V12H9.00002Z", fill: "white" });
    const tmp70 = React4(inlineStyles.Path, { d: "M12 2V0H4.00002V2H2.00002V3H5.00002V1H11V3H12H15V7H8.00002V8H14V9H15V8H16V2H12Z", fill: "black" });
    cResult[31] = tmp68;
    cResult[32] = tmp69;
    cResult[33] = tmp70;
    let tmp66 = tmp70;
    let tmp65 = tmp69;
    let tmp64 = tmp68;
  } else {
    tmp64 = cResult[31];
    tmp65 = cResult[32];
    tmp66 = cResult[33];
  }
  if (cResult[34] === num7) {
    if (cResult[35] === tmp5) {
      if (cResult[36] === tmp39) {
        if (cResult[37] === tmp40) {
          if (cResult[38] === tmp41) {
            if (cResult[39] === tmp42) {
              if (cResult[40] === tmp55) {
                if (cResult[41] === tmp56) {
                  if (cResult[42] === tmp57) {
                    if (cResult[43] === tmp58) {
                      if (cResult[44] === tmp23) {
                        if (cResult[45] === num6) {
                          let tmp71 = cResult[46];
                        }
                        return tmp71;
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
  items = [tmp16, tmp17, tmp18, tmp23, tmp30, tmp31, tmp26, tmp27, tmp28, tmp29, tmp39, tmp40, tmp41, tmp42, tmp48, tmp49, tmp50, tmp55, tmp56, tmp57, tmp58, tmp64, tmp65, tmp66];
  obj12.children = items;
  const tmp73 = hasOwnProperty(inlineStyles.Svg, obj12);
  cResult[34] = num7;
  cResult[35] = tmp5;
  cResult[36] = tmp39;
  cResult[37] = tmp40;
  cResult[38] = tmp41;
  cResult[39] = tmp42;
  cResult[40] = tmp55;
  cResult[41] = tmp56;
  cResult[42] = tmp57;
  cResult[43] = tmp58;
  cResult[44] = tmp23;
  cResult[45] = num6;
  cResult[46] = tmp73;
  tmp71 = tmp73;
}) : (function GuildBadgeDollarSign(primaryTintColor) {
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
  items = [React4(inlineStyles.Path, { d: "M16 11.9295V9H15V11.9295H16Z", fill: "black" }), React4(inlineStyles.Path, { d: "M16 12V9H15V12H16Z", fill: "black" }), React4(inlineStyles.Path, { d: "M1 7L1 4H0L0 7H1Z", fill: "black" }), React4(inlineStyles.Path, { d: "M15 7V3H11V1H5.00002V3H2.00002V4H1.00002V7H2.00002V8H5.00002V9H1.00002V13H5.00002V15H11V13H14V12H15V9H14V8H11V7H15Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M15 12H14V13H15V12Z", fill: "black" }), React4(inlineStyles.Path, { d: "M13 9H12V10H13V9Z", fill: "white" }), React4(inlineStyles.Path, { d: "M12 8H8V9H12V8Z", fill: "white" }), React4(inlineStyles.Path, { d: "M5 3H2V4H5V3Z", fill: "white" }), React4(inlineStyles.Path, { d: "M7 9H6V10H7V9Z", fill: "black" }), React4(inlineStyles.Path, { d: "M8 6H7V7H8V6Z", fill: "black" }), React4(inlineStyles.Path, { d: "M8 5H7V6H8V5Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M7 10H6V11H7V10Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M6 9H5V10H6V9Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M9 6H8V7H9V6Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M2 3H1V4H2V3Z", fill: "black" }), React4(inlineStyles.Path, { d: "M2 4H1V5H2V4Z", fill: "white" }), React4(inlineStyles.Path, { d: "M11 13V15H5.00002V13H1.00002V9H6.00002V8H2.00002V7H1.00002V8H1.52588e-05V14H4.00002V16H12V14H14V13H11Z", fill: "black" }), React4(inlineStyles.Path, { d: "M13 3V7H15V3H13Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M9 1V3H11V1L9 1Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M9 13V15H11V13H9Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M14 9V8H12V9H13V12H12V13H14V12H15V9H14Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M12 5V4H11V3H9.00002V1H5.00002V2H7.00002V3H8.00002V4H9.00002V5H10V6H11V7H13V5H12Z", fill: "white" }), React4(inlineStyles.Path, { d: "M9.00002 12V11H8.00002V10H7.00002V11H6.00002V10H5.00002V9H1.00002V10H4.00002V11H5.00002V12H6.00002V13H7.00002V14H8.00002V15H9.00002V13H10V12H9.00002Z", fill: "white" }), React4(inlineStyles.Path, { d: "M12 2V0H4.00002V2H2.00002V3H5.00002V1H11V3H12H15V7H8.00002V8H14V9H15V8H16V2H12Z", fill: "black" })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});