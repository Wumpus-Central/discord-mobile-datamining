// === Module 14146: GuildBadgeFrog ===

// Module 14146 (GuildBadgeFrog)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7576 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 14122 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#008456", "#6BE473"];
const primaryTintLuminances = [0.2, 0.5];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const secondaryBaseColors = ["#FFB84B", "#FFE361"];
const secondaryTintLuminances = [0.4, 0.8];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFrog.tsx");

export const GuildBadgeFrog = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBadgeFrog(arg0) {
  const cResult = c.c(64);
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
      const obj2 = { d: "M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z", fill: primaryColorsTransformed[1] };
      const tmp16 = React4(inlineStyles.Path, obj2);
      cResult[9] = primaryColorsTransformed[1];
      cResult[10] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp27 = React4(inlineStyles.Path, { d: "M13 3V2H10V3H13Z", fill: "white" });
      const tmp28 = React4(inlineStyles.Path, { d: "M13 7V6H10V7H13Z", fill: "white" });
      const tmp29 = React4(inlineStyles.Path, { d: "M14 6V3H13V6H14Z", fill: "white" });
      const tmp30 = React4(inlineStyles.Path, { d: "M10 6V3H9V6H10Z", fill: "white" });
      const tmp31 = React4(inlineStyles.Path, { d: "M6 3V2H3V3H6Z", fill: "white" });
      const tmp32 = React4(inlineStyles.Path, { d: "M6 7V6H3V7H6Z", fill: "white" });
      const tmp33 = React4(inlineStyles.Path, { d: "M7 6V3H6V6H7Z", fill: "white" });
      const tmp34 = React4(inlineStyles.Path, { d: "M3 6V3H2V6H3Z", fill: "white" });
      cResult[11] = tmp32;
      cResult[12] = tmp33;
      cResult[13] = tmp34;
      cResult[14] = tmp27;
      cResult[15] = tmp28;
      cResult[16] = tmp29;
      cResult[17] = tmp30;
      cResult[18] = tmp31;
      let tmp25 = tmp31;
      let tmp24 = tmp30;
      let tmp23 = tmp29;
      let tmp22 = tmp28;
      let tmp21 = tmp27;
      let tmp20 = tmp34;
      let tmp19 = tmp33;
      let tmp18 = tmp32;
    } else {
      tmp18 = cResult[11];
      tmp19 = cResult[12];
      tmp20 = cResult[13];
      tmp21 = cResult[14];
      tmp22 = cResult[15];
      tmp23 = cResult[16];
      tmp24 = cResult[17];
      tmp25 = cResult[18];
    }
    if (cResult[19] !== secondaryColorsTransformed[1]) {
      const obj3 = { d: "M3.00002 10V12H4.00002V13H12V12H13V10H3.00002Z", fill: secondaryColorsTransformed[1] };
      const tmp37 = React4(inlineStyles.Path, obj3);
      cResult[19] = secondaryColorsTransformed[1];
      cResult[20] = tmp37;
      let tmp35 = tmp37;
    } else {
      tmp35 = cResult[20];
    }
    if (cResult[21] !== secondaryColorsTransformed[0]) {
      const obj4 = { d: "M12 13H4V14H12V13Z", fill: secondaryColorsTransformed[0] };
      const tmp42 = React4(inlineStyles.Path, obj4);
      const obj5 = { d: "M13 13V12H12V13H13Z", fill: secondaryColorsTransformed[0] };
      const tmp43 = React4(inlineStyles.Path, obj5);
      const obj6 = { d: "M4 13V12H3.00001V13H4Z", fill: secondaryColorsTransformed[0] };
      const tmp44 = React4(inlineStyles.Path, obj6);
      cResult[21] = secondaryColorsTransformed[0];
      cResult[22] = tmp42;
      cResult[23] = tmp43;
      cResult[24] = tmp44;
      let tmp40 = tmp44;
      let tmp39 = tmp43;
      let tmp38 = tmp42;
    } else {
      tmp38 = cResult[22];
      tmp39 = cResult[23];
      tmp40 = cResult[24];
    }
    if (cResult[25] !== primaryColorsTransformed[0]) {
      const obj7 = { d: "M14 13V12H13V13H14Z", fill: primaryColorsTransformed[0] };
      const tmp50 = React4(inlineStyles.Path, obj7);
      const obj8 = { d: "M3.00002 13V12H2.00001V13H3.00002Z", fill: primaryColorsTransformed[0] };
      const tmp51 = React4(inlineStyles.Path, obj8);
      const obj9 = { d: "M15 11H14V12H15V11Z", fill: primaryColorsTransformed[0] };
      const tmp52 = React4(inlineStyles.Path, obj9);
      const obj10 = { d: "M2 11H1V12H2V11Z", fill: primaryColorsTransformed[0] };
      const tmp53 = React4(inlineStyles.Path, obj10);
      cResult[25] = primaryColorsTransformed[0];
      cResult[26] = tmp50;
      cResult[27] = tmp51;
      cResult[28] = tmp52;
      cResult[29] = tmp53;
      let tmp48 = tmp53;
      let tmp47 = tmp52;
      let tmp46 = tmp51;
      let tmp45 = tmp50;
    } else {
      tmp45 = cResult[26];
      tmp46 = cResult[27];
      tmp47 = cResult[28];
      tmp48 = cResult[29];
    }
    const _Symbol2 = Symbol;
    if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp76 = React4(inlineStyles.Path, { d: "M14 14V13H12V14H14Z", fill: "black" });
      const tmp77 = React4(inlineStyles.Path, { d: "M9 3V2H7V3H9Z", fill: "black" });
      const tmp78 = React4(inlineStyles.Path, { d: "M13 2V1L9 1V2H13Z", fill: "black" });
      const tmp79 = React4(inlineStyles.Path, { d: "M7 2V1L3 1V2H7Z", fill: "black" });
      const tmp80 = React4(inlineStyles.Path, { d: "M4 14V13H2V14H4Z", fill: "black" });
      const tmp81 = React4(inlineStyles.Path, { d: "M15 12H14V13H15V12Z", fill: "black" });
      const tmp82 = React4(inlineStyles.Path, { d: "M14 2H13V3H14V2Z", fill: "black" });
      const tmp83 = React4(inlineStyles.Path, { d: "M3 2H2V3H3V2Z", fill: "black" });
      const tmp84 = React4(inlineStyles.Path, { d: "M2 12H1V13H2V12Z", fill: "black" });
      const tmp85 = React4(inlineStyles.Path, { d: "M12 14H4V15H12V14Z", fill: "black" });
      const tmp86 = React4(inlineStyles.Path, { d: "M16 12V6.99998H15V12H16Z", fill: "black" });
      const tmp87 = React4(inlineStyles.Path, { d: "M15 7V3H14V7H15Z", fill: "black" });
      const tmp88 = React4(inlineStyles.Path, { d: "M2 7L2 3H1L1 7H2Z", fill: "black" });
      const tmp89 = React4(inlineStyles.Path, { d: "M1 12L1 6.99998H0L0 12H1Z", fill: "black" });
      const tmp90 = React4(inlineStyles.Path, { d: "M13 6V3H10V6H13Z", fill: "black" });
      const tmp91 = React4(inlineStyles.Path, { d: "M6 6V3H3V6H6Z", fill: "black" });
      const tmp92 = React4(inlineStyles.Path, { d: "M13 9H3V10H13V9Z", fill: "black" });
      const tmp93 = React4(inlineStyles.Path, { d: "M14 8H13V9H14V8Z", fill: "black" });
      const tmp94 = React4(inlineStyles.Path, { d: "M7 7H6V8H7V7Z", fill: "black" });
      const tmp95 = React4(inlineStyles.Path, { d: "M10 7H9V8H10V7Z", fill: "black" });
      const tmp96 = React4(inlineStyles.Path, { d: "M3 8H2V9H3V8Z", fill: "black" });
      cResult[30] = tmp76;
      cResult[31] = tmp77;
      cResult[32] = tmp78;
      cResult[33] = tmp79;
      cResult[34] = tmp80;
      cResult[35] = tmp81;
      cResult[36] = tmp82;
      cResult[37] = tmp83;
      cResult[38] = tmp84;
      cResult[39] = tmp85;
      cResult[40] = tmp86;
      cResult[41] = tmp87;
      cResult[42] = tmp88;
      cResult[43] = tmp89;
      cResult[44] = tmp90;
      cResult[45] = tmp91;
      cResult[46] = tmp92;
      cResult[47] = tmp93;
      cResult[48] = tmp94;
      cResult[49] = tmp95;
      cResult[50] = tmp96;
      let tmp74 = tmp96;
      let tmp73 = tmp95;
      let tmp72 = tmp94;
      let tmp71 = tmp93;
      let tmp70 = tmp92;
      let tmp69 = tmp91;
      let tmp68 = tmp90;
      let tmp67 = tmp89;
      let tmp66 = tmp88;
      let tmp65 = tmp87;
      let tmp64 = tmp86;
      let tmp63 = tmp85;
      let tmp62 = tmp84;
      let tmp61 = tmp83;
      let tmp60 = tmp82;
      let tmp59 = tmp81;
      let tmp58 = tmp80;
      let tmp57 = tmp79;
      let tmp56 = tmp78;
      let tmp55 = tmp77;
      let tmp54 = tmp76;
    } else {
      tmp54 = cResult[30];
      tmp55 = cResult[31];
      tmp56 = cResult[32];
      tmp57 = cResult[33];
      tmp58 = cResult[34];
      tmp59 = cResult[35];
      tmp60 = cResult[36];
      tmp61 = cResult[37];
      tmp62 = cResult[38];
      tmp63 = cResult[39];
      tmp64 = cResult[40];
      tmp65 = cResult[41];
      tmp66 = cResult[42];
      tmp67 = cResult[43];
      tmp68 = cResult[44];
      tmp69 = cResult[45];
      tmp70 = cResult[46];
      tmp71 = cResult[47];
      tmp72 = cResult[48];
      tmp73 = cResult[49];
      tmp74 = cResult[50];
    }
    if (cResult[51] === num8) {
      if (cResult[52] === tmp5) {
        if (cResult[53] === tmp35) {
          if (cResult[54] === tmp38) {
            if (cResult[55] === tmp39) {
              if (cResult[56] === tmp40) {
                if (cResult[57] === tmp45) {
                  if (cResult[58] === tmp46) {
                    if (cResult[59] === tmp47) {
                      if (cResult[60] === tmp48) {
                        if (cResult[61] === tmp14) {
                          if (cResult[62] === num7) {
                            let tmp97 = cResult[63];
                          }
                          return tmp97;
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
    const obj11 = {};
    const merged = Object.assign(tmp5);
    obj11.width = num7;
    obj11.height = num8;
    obj11.viewBox = "0 0 16 16";
    obj11.fill = "none";
    items = [tmp14, tmp21, tmp22, tmp23, tmp24, tmp25, tmp18, tmp19, tmp20, tmp35, tmp38, tmp39, tmp40, tmp45, tmp46, tmp47, tmp48, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74];
    obj11.children = items;
    const tmp102 = hasOwnProperty(inlineStyles.Svg, obj11);
    cResult[51] = num8;
    cResult[52] = tmp5;
    cResult[53] = tmp35;
    cResult[54] = tmp38;
    cResult[55] = tmp39;
    cResult[56] = tmp40;
    cResult[57] = tmp45;
    cResult[58] = tmp46;
    cResult[59] = tmp47;
    cResult[60] = tmp48;
    cResult[61] = tmp14;
    cResult[62] = num7;
    cResult[63] = tmp102;
    tmp97 = tmp102;
  }
  const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 });
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = transformedBadgeColors;
  tmp12 = transformedBadgeColors;
  const obj12 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const tmpResult = GuildBadgeUtils;
}) : (function GuildBadgeFrog(width) {
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
  items = [React4(inlineStyles.Path, { d: "M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M13 3V2H10V3H13Z", fill: "white" }), React4(inlineStyles.Path, { d: "M13 7V6H10V7H13Z", fill: "white" }), React4(inlineStyles.Path, { d: "M14 6V3H13V6H14Z", fill: "white" }), React4(inlineStyles.Path, { d: "M10 6V3H9V6H10Z", fill: "white" }), React4(inlineStyles.Path, { d: "M6 3V2H3V3H6Z", fill: "white" }), React4(inlineStyles.Path, { d: "M6 7V6H3V7H6Z", fill: "white" }), React4(inlineStyles.Path, { d: "M7 6V3H6V6H7Z", fill: "white" }), React4(inlineStyles.Path, { d: "M3 6V3H2V6H3Z", fill: "white" }), React4(inlineStyles.Path, { d: "M3.00002 10V12H4.00002V13H12V12H13V10H3.00002Z", fill: secondaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M12 13H4V14H12V13Z", fill: secondaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M13 13V12H12V13H13Z", fill: secondaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M4 13V12H3.00001V13H4Z", fill: secondaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M14 13V12H13V13H14Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M3.00002 13V12H2.00001V13H3.00002Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M15 11H14V12H15V11Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M2 11H1V12H2V11Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M14 14V13H12V14H14Z", fill: "black" }), React4(inlineStyles.Path, { d: "M9 3V2H7V3H9Z", fill: "black" }), React4(inlineStyles.Path, { d: "M13 2V1L9 1V2H13Z", fill: "black" }), React4(inlineStyles.Path, { d: "M7 2V1L3 1V2H7Z", fill: "black" }), React4(inlineStyles.Path, { d: "M4 14V13H2V14H4Z", fill: "black" }), React4(inlineStyles.Path, { d: "M15 12H14V13H15V12Z", fill: "black" }), React4(inlineStyles.Path, { d: "M14 2H13V3H14V2Z", fill: "black" }), React4(inlineStyles.Path, { d: "M3 2H2V3H3V2Z", fill: "black" }), React4(inlineStyles.Path, { d: "M2 12H1V13H2V12Z", fill: "black" }), React4(inlineStyles.Path, { d: "M12 14H4V15H12V14Z", fill: "black" }), React4(inlineStyles.Path, { d: "M16 12V6.99998H15V12H16Z", fill: "black" }), React4(inlineStyles.Path, { d: "M15 7V3H14V7H15Z", fill: "black" }), React4(inlineStyles.Path, { d: "M2 7L2 3H1L1 7H2Z", fill: "black" }), React4(inlineStyles.Path, { d: "M1 12L1 6.99998H0L0 12H1Z", fill: "black" }), React4(inlineStyles.Path, { d: "M13 6V3H10V6H13Z", fill: "black" }), React4(inlineStyles.Path, { d: "M6 6V3H3V6H6Z", fill: "black" }), React4(inlineStyles.Path, { d: "M13 9H3V10H13V9Z", fill: "black" }), React4(inlineStyles.Path, { d: "M14 8H13V9H14V8Z", fill: "black" }), React4(inlineStyles.Path, { d: "M7 7H6V8H7V7Z", fill: "black" }), React4(inlineStyles.Path, { d: "M10 7H9V8H10V7Z", fill: "black" }), React4(inlineStyles.Path, { d: "M3 8H2V9H3V8Z", fill: "black" })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});