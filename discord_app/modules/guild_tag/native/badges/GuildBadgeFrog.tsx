// discord_app/modules/guild_tag/native/badges/GuildBadgeFrog.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import inlineStyles from "../../../../../_runtime/08136_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const primaryBaseColors = ["#008456", "#6BE473"];
const primaryTintLuminances = [0.2, 0.5];
let items = [
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
];
const secondaryBaseColors = ["#FFB84B", "#FFE361"];
const secondaryTintLuminances = [0.4, 0.8];
const items1 = [
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
      const cResult = obj.c(64);
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
        let tmp25;
        let tmp24;
        let tmp23;
        let tmp22;
        let tmp21;
        let tmp20;
        let tmp19;
        let tmp18;
        let tmp35;
        let tmp40;
        let tmp39;
        let tmp38;
        let tmp48;
        let tmp47;
        let tmp46;
        let tmp45;
        let tmp74;
        let tmp73;
        let tmp72;
        let tmp71;
        let tmp70;
        let tmp69;
        let tmp68;
        let tmp67;
        let tmp66;
        let tmp65;
        let tmp64;
        let tmp63;
        let tmp62;
        let tmp61;
        let tmp60;
        let tmp59;
        let tmp58;
        let tmp57;
        let tmp56;
        let tmp55;
        let tmp54;
        if (cResult[7] === tmp6) {
          tmp12 = cResult[8];
        }
        ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
        if (cResult[9] !== primaryColorsTransformed[1]) {
          const obj2 = {
            d: "M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z",
            fill: primaryColorsTransformed[1],
          };
          const tmp16 = React3(inlineStyles.Path, obj2);
          cResult[9] = primaryColorsTransformed[1];
          cResult[10] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp27 = React3(inlineStyles.Path, { d: "M13 3V2H10V3H13Z", fill: "white" });
          const tmp28 = React3(inlineStyles.Path, { d: "M13 7V6H10V7H13Z", fill: "white" });
          const tmp29 = React3(inlineStyles.Path, { d: "M14 6V3H13V6H14Z", fill: "white" });
          const tmp30 = React3(inlineStyles.Path, { d: "M10 6V3H9V6H10Z", fill: "white" });
          const tmp31 = React3(inlineStyles.Path, { d: "M6 3V2H3V3H6Z", fill: "white" });
          const tmp32 = React3(inlineStyles.Path, { d: "M6 7V6H3V7H6Z", fill: "white" });
          const tmp33 = React3(inlineStyles.Path, { d: "M7 6V3H6V6H7Z", fill: "white" });
          const tmp34 = React3(inlineStyles.Path, { d: "M3 6V3H2V6H3Z", fill: "white" });
          cResult[11] = tmp32;
          cResult[12] = tmp33;
          cResult[13] = tmp34;
          cResult[14] = tmp27;
          cResult[15] = tmp28;
          cResult[16] = tmp29;
          cResult[17] = tmp30;
          cResult[18] = tmp31;
          tmp25 = tmp31;
          tmp24 = tmp30;
          tmp23 = tmp29;
          tmp22 = tmp28;
          tmp21 = tmp27;
          tmp20 = tmp34;
          tmp19 = tmp33;
          tmp18 = tmp32;
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
          const tmp37 = React3(inlineStyles.Path, obj3);
          cResult[19] = secondaryColorsTransformed[1];
          cResult[20] = tmp37;
          tmp35 = tmp37;
        } else {
          tmp35 = cResult[20];
        }
        if (cResult[21] !== secondaryColorsTransformed[0]) {
          const obj4 = { d: "M12 13H4V14H12V13Z", fill: secondaryColorsTransformed[0] };
          const tmp42 = React3(inlineStyles.Path, obj4);
          const obj5 = { d: "M13 13V12H12V13H13Z", fill: secondaryColorsTransformed[0] };
          const tmp43 = React3(inlineStyles.Path, obj5);
          const obj6 = { d: "M4 13V12H3.00001V13H4Z", fill: secondaryColorsTransformed[0] };
          const tmp44 = React3(inlineStyles.Path, obj6);
          cResult[21] = secondaryColorsTransformed[0];
          cResult[22] = tmp42;
          cResult[23] = tmp43;
          cResult[24] = tmp44;
          tmp40 = tmp44;
          tmp39 = tmp43;
          tmp38 = tmp42;
        } else {
          tmp38 = cResult[22];
          tmp39 = cResult[23];
          tmp40 = cResult[24];
        }
        if (cResult[25] !== primaryColorsTransformed[0]) {
          const obj7 = { d: "M14 13V12H13V13H14Z", fill: primaryColorsTransformed[0] };
          const tmp50 = React3(inlineStyles.Path, obj7);
          const obj8 = { d: "M3.00002 13V12H2.00001V13H3.00002Z", fill: primaryColorsTransformed[0] };
          const tmp51 = React3(inlineStyles.Path, obj8);
          const obj9 = { d: "M15 11H14V12H15V11Z", fill: primaryColorsTransformed[0] };
          const tmp52 = React3(inlineStyles.Path, obj9);
          const obj10 = { d: "M2 11H1V12H2V11Z", fill: primaryColorsTransformed[0] };
          const tmp53 = React3(inlineStyles.Path, obj10);
          cResult[25] = primaryColorsTransformed[0];
          cResult[26] = tmp50;
          cResult[27] = tmp51;
          cResult[28] = tmp52;
          cResult[29] = tmp53;
          tmp48 = tmp53;
          tmp47 = tmp52;
          tmp46 = tmp51;
          tmp45 = tmp50;
        } else {
          tmp45 = cResult[26];
          tmp46 = cResult[27];
          tmp47 = cResult[28];
          tmp48 = cResult[29];
        }
        const _Symbol2 = Symbol;
        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp76 = React3(inlineStyles.Path, { d: "M14 14V13H12V14H14Z", fill: "black" });
          const tmp77 = React3(inlineStyles.Path, { d: "M9 3V2H7V3H9Z", fill: "black" });
          const tmp78 = React3(inlineStyles.Path, { d: "M13 2V1L9 1V2H13Z", fill: "black" });
          const tmp79 = React3(inlineStyles.Path, { d: "M7 2V1L3 1V2H7Z", fill: "black" });
          const tmp80 = React3(inlineStyles.Path, { d: "M4 14V13H2V14H4Z", fill: "black" });
          const tmp81 = React3(inlineStyles.Path, { d: "M15 12H14V13H15V12Z", fill: "black" });
          const tmp82 = React3(inlineStyles.Path, { d: "M14 2H13V3H14V2Z", fill: "black" });
          const tmp83 = React3(inlineStyles.Path, { d: "M3 2H2V3H3V2Z", fill: "black" });
          const tmp84 = React3(inlineStyles.Path, { d: "M2 12H1V13H2V12Z", fill: "black" });
          const tmp85 = React3(inlineStyles.Path, { d: "M12 14H4V15H12V14Z", fill: "black" });
          const tmp86 = React3(inlineStyles.Path, { d: "M16 12V6.99998H15V12H16Z", fill: "black" });
          const tmp87 = React3(inlineStyles.Path, { d: "M15 7V3H14V7H15Z", fill: "black" });
          const tmp88 = React3(inlineStyles.Path, { d: "M2 7L2 3H1L1 7H2Z", fill: "black" });
          const tmp89 = React3(inlineStyles.Path, { d: "M1 12L1 6.99998H0L0 12H1Z", fill: "black" });
          const tmp90 = React3(inlineStyles.Path, { d: "M13 6V3H10V6H13Z", fill: "black" });
          const tmp91 = React3(inlineStyles.Path, { d: "M6 6V3H3V6H6Z", fill: "black" });
          const tmp92 = React3(inlineStyles.Path, { d: "M13 9H3V10H13V9Z", fill: "black" });
          const tmp93 = React3(inlineStyles.Path, { d: "M14 8H13V9H14V8Z", fill: "black" });
          const tmp94 = React3(inlineStyles.Path, { d: "M7 7H6V8H7V7Z", fill: "black" });
          const tmp95 = React3(inlineStyles.Path, { d: "M10 7H9V8H10V7Z", fill: "black" });
          const tmp96 = React3(inlineStyles.Path, { d: "M3 8H2V9H3V8Z", fill: "black" });
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
          tmp74 = tmp96;
          tmp73 = tmp95;
          tmp72 = tmp94;
          tmp71 = tmp93;
          tmp70 = tmp92;
          tmp69 = tmp91;
          tmp68 = tmp90;
          tmp67 = tmp89;
          tmp66 = tmp88;
          tmp65 = tmp87;
          tmp64 = tmp86;
          tmp63 = tmp85;
          tmp62 = tmp84;
          tmp61 = tmp83;
          tmp60 = tmp82;
          tmp59 = tmp81;
          tmp58 = tmp80;
          tmp57 = tmp79;
          tmp56 = tmp78;
          tmp55 = tmp77;
          tmp54 = tmp76;
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
                              let tmp97;
                              if (cResult[62] === num7) {
                                tmp97 = cResult[63];
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
        const obj11 = { width: num7, height: num8, viewBox: "0 0 16 16", fill: "none", children: items };
        const Svg = inlineStyles.Svg;
        const merged = Object.assign(tmp5);
        items = [
          tmp14,
          tmp21,
          tmp22,
          tmp23,
          tmp24,
          tmp25,
          tmp18,
          tmp19,
          tmp20,
          tmp35,
          tmp38,
          tmp39,
          tmp40,
          tmp45,
          tmp46,
          tmp47,
          tmp48,
          tmp54,
          tmp55,
          tmp56,
          tmp57,
          tmp58,
          tmp59,
          tmp60,
          tmp61,
          tmp62,
          tmp63,
          tmp64,
          tmp65,
          tmp66,
          tmp67,
          tmp68,
          tmp69,
          tmp70,
          tmp71,
          tmp72,
          tmp73,
          tmp74,
        ];
        const tmp102 = hasOwnProperty(Svg, obj11);
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
      const obj12 = {
        primaryBaseColors,
        primaryTintColor: tmp4,
        primaryTintLuminances,
        primaryLuminanceWeights: items,
        secondaryBaseColors,
        secondaryTintColor: tmp6,
        secondaryTintLuminances,
        secondaryLuminanceWeights: items1,
      };
      const tmpResult = GuildBadgeUtils;
      const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj12);
      cResult[6] = tmp4;
      cResult[7] = tmp6;
      cResult[8] = transformedBadgeColors;
      tmp12 = transformedBadgeColors;
    }
  : (width) => {
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
      const merged = Object.assign(
        width,
        Object.assign({ width: 0, height: 0, primaryTintColor: 0, secondaryTintColor: 0 }),
      );
      const obj = GuildBadgeUtils;
      const obj2 = {
        primaryBaseColors,
        primaryTintColor,
        primaryTintLuminances,
        primaryLuminanceWeights: items,
        secondaryBaseColors,
        secondaryTintColor,
        secondaryTintLuminances,
        secondaryLuminanceWeights: items1,
      };
      const transformedBadgeColors = obj.getTransformedBadgeColors(obj2);
      ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
      const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items };
      const Svg = inlineStyles.Svg;
      const merged1 = Object.assign(merged);
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,];
      const obj4 = {
        d: "M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z",
        fill: primaryColorsTransformed[1],
      };
      items[0] = React3(inlineStyles.Path, obj4);
      items[1] = React3(inlineStyles.Path, { d: "M13 3V2H10V3H13Z", fill: "white" });
      items[2] = React3(inlineStyles.Path, { d: "M13 7V6H10V7H13Z", fill: "white" });
      items[3] = React3(inlineStyles.Path, { d: "M14 6V3H13V6H14Z", fill: "white" });
      items[4] = React3(inlineStyles.Path, { d: "M10 6V3H9V6H10Z", fill: "white" });
      items[5] = React3(inlineStyles.Path, { d: "M6 3V2H3V3H6Z", fill: "white" });
      items[6] = React3(inlineStyles.Path, { d: "M6 7V6H3V7H6Z", fill: "white" });
      items[7] = React3(inlineStyles.Path, { d: "M7 6V3H6V6H7Z", fill: "white" });
      items[8] = React3(inlineStyles.Path, { d: "M3 6V3H2V6H3Z", fill: "white" });
      const obj5 = { d: "M3.00002 10V12H4.00002V13H12V12H13V10H3.00002Z", fill: secondaryColorsTransformed[1] };
      items[9] = React3(inlineStyles.Path, obj5);
      const obj6 = { d: "M12 13H4V14H12V13Z", fill: secondaryColorsTransformed[0] };
      items[10] = React3(inlineStyles.Path, obj6);
      const obj7 = { d: "M13 13V12H12V13H13Z", fill: secondaryColorsTransformed[0] };
      items[11] = React3(inlineStyles.Path, obj7);
      const obj8 = { d: "M4 13V12H3.00001V13H4Z", fill: secondaryColorsTransformed[0] };
      items[12] = React3(inlineStyles.Path, obj8);
      const obj9 = { d: "M14 13V12H13V13H14Z", fill: primaryColorsTransformed[0] };
      items[13] = React3(inlineStyles.Path, obj9);
      const obj10 = { d: "M3.00002 13V12H2.00001V13H3.00002Z", fill: primaryColorsTransformed[0] };
      items[14] = React3(inlineStyles.Path, obj10);
      const obj11 = { d: "M15 11H14V12H15V11Z", fill: primaryColorsTransformed[0] };
      items[15] = React3(inlineStyles.Path, obj11);
      const obj12 = { d: "M2 11H1V12H2V11Z", fill: primaryColorsTransformed[0] };
      items[16] = React3(inlineStyles.Path, obj12);
      items[17] = React3(inlineStyles.Path, { d: "M14 14V13H12V14H14Z", fill: "black" });
      items[18] = React3(inlineStyles.Path, { d: "M9 3V2H7V3H9Z", fill: "black" });
      items[19] = React3(inlineStyles.Path, { d: "M13 2V1L9 1V2H13Z", fill: "black" });
      items[20] = React3(inlineStyles.Path, { d: "M7 2V1L3 1V2H7Z", fill: "black" });
      items[21] = React3(inlineStyles.Path, { d: "M4 14V13H2V14H4Z", fill: "black" });
      items[22] = React3(inlineStyles.Path, { d: "M15 12H14V13H15V12Z", fill: "black" });
      items[23] = React3(inlineStyles.Path, { d: "M14 2H13V3H14V2Z", fill: "black" });
      items[24] = React3(inlineStyles.Path, { d: "M3 2H2V3H3V2Z", fill: "black" });
      items[25] = React3(inlineStyles.Path, { d: "M2 12H1V13H2V12Z", fill: "black" });
      items[26] = React3(inlineStyles.Path, { d: "M12 14H4V15H12V14Z", fill: "black" });
      items[27] = React3(inlineStyles.Path, { d: "M16 12V6.99998H15V12H16Z", fill: "black" });
      items[28] = React3(inlineStyles.Path, { d: "M15 7V3H14V7H15Z", fill: "black" });
      items[29] = React3(inlineStyles.Path, { d: "M2 7L2 3H1L1 7H2Z", fill: "black" });
      items[30] = React3(inlineStyles.Path, { d: "M1 12L1 6.99998H0L0 12H1Z", fill: "black" });
      items[31] = React3(inlineStyles.Path, { d: "M13 6V3H10V6H13Z", fill: "black" });
      items[32] = React3(inlineStyles.Path, { d: "M6 6V3H3V6H6Z", fill: "black" });
      items[33] = React3(inlineStyles.Path, { d: "M13 9H3V10H13V9Z", fill: "black" });
      items[34] = React3(inlineStyles.Path, { d: "M14 8H13V9H14V8Z", fill: "black" });
      items[35] = React3(inlineStyles.Path, { d: "M7 7H6V8H7V7Z", fill: "black" });
      items[36] = React3(inlineStyles.Path, { d: "M10 7H9V8H10V7Z", fill: "black" });
      items[37] = React3(inlineStyles.Path, { d: "M3 8H2V9H3V8Z", fill: "black" });
      return hasOwnProperty(Svg, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFrog.tsx");

export const GuildBadgeFrog = tmp4;
