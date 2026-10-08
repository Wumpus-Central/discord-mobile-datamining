// discord_app/modules/guild_tag/native/badges/GuildBadgeCrown.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07550_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#FFB84B", "#FFE361"];
const primaryTintLuminances = [0.56, 0.77];
let items = [
  { base: 3, tint: 1 },
  { base: 3, tint: 1 },
];
const secondaryBaseColors = ["#FF1C90", "#FF7FC0"];
const secondaryTintLuminances = [0.2, 0.4];
const items1 = [
  { base: 7, tint: 1 },
  { base: 3, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCrown.tsx");

export const GuildBadgeCrown = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgeCrown(arg0) {
      const cResult = c.c(56);
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
          const obj2 = {
            d: "M0.999985 2V14H1.99998V15H14V14H15V2H14V3H13V4H11V3H9.99998V2H8.99998V1H6.99998V2H5.99998V3H4.99998V4H2.99998V3H1.99998V2H0.999985Z",
            fill: primaryColorsTransformed[1],
          };
          const tmp16 = React4(inlineStyles.Path, obj2);
          cResult[9] = primaryColorsTransformed[1];
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp25 = React4(inlineStyles.Path, {
            d: "M0.999985 3H1.99998L1.99998 2L0.999985 2L0.999985 3Z",
            fill: "white",
          });
          const tmp26 = React4(inlineStyles.Path, { d: "M1.99998 4H2.99998V3H1.99998V4Z", fill: "white" });
          const tmp27 = React4(inlineStyles.Path, { d: "M4.99998 4H5.99998V3H4.99998V4Z", fill: "white" });
          const tmp28 = React4(inlineStyles.Path, { d: "M9.99998 4H11V3H9.99998V4Z", fill: "white" });
          const tmp29 = React4(inlineStyles.Path, {
            d: "M9 2.00002V1.00002H7V2.00002H6V3.00002H7V5.00002H9V3.00002H10V2.00002H9Z",
            fill: "white",
          });
          const tmp30 = React4(inlineStyles.Path, { d: "M2 5.00002V4.00002H1V13H2V14H3V5.00002H2Z", fill: "white" });
          cResult[11] = tmp30;
          cResult[12] = tmp25;
          cResult[13] = tmp26;
          cResult[14] = tmp27;
          cResult[15] = tmp28;
          cResult[16] = tmp29;
          let tmp23 = tmp29;
          let tmp22 = tmp28;
          let tmp21 = tmp27;
          let tmp20 = tmp26;
          let tmp19 = tmp25;
          let tmp18 = tmp30;
        } else {
          tmp18 = cResult[11];
          tmp19 = cResult[12];
          tmp20 = cResult[13];
          tmp21 = cResult[14];
          tmp22 = cResult[15];
          tmp23 = cResult[16];
        }
        if (cResult[17] !== primaryColorsTransformed[0]) {
          const obj3 = { d: "M13 5.00002V4.00002H14V15H12V5.00002H13Z", fill: primaryColorsTransformed[0] };
          const tmp34 = React4(inlineStyles.Path, obj3);
          const obj4 = { d: "M4.99999 5.00002H3V15H4.99999V5.00002Z", fill: primaryColorsTransformed[0] };
          const tmp35 = React4(inlineStyles.Path, obj4);
          cResult[17] = primaryColorsTransformed[0];
          cResult[18] = tmp34;
          cResult[19] = tmp35;
          let tmp32 = tmp35;
          let tmp31 = tmp34;
        } else {
          tmp31 = cResult[18];
          tmp32 = cResult[19];
        }
        const _Symbol2 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp38 = React4(inlineStyles.Path, { d: "M6.99998 15H8.99998V13H6.99998V15Z", fill: "white" });
          cResult[20] = tmp38;
          let tmp36 = tmp38;
        } else {
          tmp36 = cResult[20];
        }
        if (cResult[21] !== secondaryColorsTransformed[0]) {
          const obj5 = {
            d: "M10 7.00002V6.00002H9V5.00002H7V6.00002H6V7.00002H5V8.00001H6V11H7V12H9V11H10V8.00001H11V7.00002H10Z",
            fill: secondaryColorsTransformed[0],
          };
          const tmp41 = React4(inlineStyles.Path, obj5);
          cResult[21] = secondaryColorsTransformed[0];
          cResult[22] = tmp41;
          let tmp39 = tmp41;
        } else {
          tmp39 = cResult[22];
        }
        if (cResult[23] !== secondaryColorsTransformed[1]) {
          const obj6 = { d: "M6.99998 12H8.99998V10H6.99998V12Z", fill: secondaryColorsTransformed[1] };
          const tmp45 = React4(inlineStyles.Path, obj6);
          const obj7 = {
            d: "M9 7.00002V6.00002H7V7.00002H6V9.00001H10V7.00002H9Z",
            fill: secondaryColorsTransformed[1],
          };
          const tmp46 = React4(inlineStyles.Path, obj7);
          cResult[23] = secondaryColorsTransformed[1];
          cResult[24] = tmp45;
          cResult[25] = tmp46;
          let tmp43 = tmp46;
          let tmp42 = tmp45;
        } else {
          tmp42 = cResult[24];
          tmp43 = cResult[25];
        }
        const _Symbol3 = Symbol;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp68 = React4(inlineStyles.Path, {
            d: "M6.99998 9.00002H8.99998V7.00002H6.99998V9.00002Z",
            fill: "white",
          });
          const tmp69 = React4(inlineStyles.Path, {
            d: "M0.999985 15H1.99998L1.99998 14H0.999985L0.999985 15Z",
            fill: "black",
          });
          const tmp70 = React4(inlineStyles.Path, { d: "M1.99998 3H2.99998V2L1.99998 2V3Z", fill: "black" });
          const tmp71 = React4(inlineStyles.Path, { d: "M4.99998 3H5.99998V2L4.99998 2V3Z", fill: "black" });
          const tmp72 = React4(inlineStyles.Path, { d: "M5.99998 2L6.99998 2V1L5.99998 1V2Z", fill: "black" });
          const tmp73 = React4(inlineStyles.Path, { d: "M6.99998 1L8.99998 1V0L6.99998 0V1Z", fill: "black" });
          const tmp74 = React4(inlineStyles.Path, { d: "M2.99998 4L4.99998 4V3H2.99998V4Z", fill: "black" });
          const tmp75 = React4(inlineStyles.Path, { d: "M8.99998 2L9.99998 2V1L8.99998 1V2Z", fill: "black" });
          const tmp76 = React4(inlineStyles.Path, { d: "M9.99998 3H11V2L9.99998 2V3Z", fill: "black" });
          const tmp77 = React4(inlineStyles.Path, { d: "M13 3H14V2L13 2V3Z", fill: "black" });
          const tmp78 = React4(inlineStyles.Path, { d: "M11 4L13 4V3H11V4Z", fill: "black" });
          const tmp79 = React4(inlineStyles.Path, { d: "M14 15H15V14H14V15Z", fill: "black" });
          const tmp80 = React4(inlineStyles.Path, {
            d: "M1 1.00002V1.52588e-05H0V14H1V2.00002H2V1.00002H1Z",
            fill: "black",
          });
          const tmp81 = React4(inlineStyles.Path, {
            d: "M15 1.52588e-05V1.00002H14V2.00002H15V14H16V1.52588e-05H15Z",
            fill: "black",
          });
          const tmp82 = React4(inlineStyles.Path, { d: "M14 15H1.99998V16H14V15Z", fill: "black" });
          const tmp83 = React4(inlineStyles.Path, { d: "M6.99998 13H8.99998V12H6.99998V13Z", fill: "black" });
          const tmp84 = React4(inlineStyles.Path, { d: "M8.99998 12H9.99998V11H8.99998V12Z", fill: "black" });
          const tmp85 = React4(inlineStyles.Path, { d: "M5.99998 12H6.99998V11H5.99998V12Z", fill: "black" });
          const tmp86 = React4(inlineStyles.Path, { d: "M4.99998 11H5.99998V8H4.99998V11Z", fill: "black" });
          const tmp87 = React4(inlineStyles.Path, { d: "M9.99998 11H11V8H9.99998V11Z", fill: "black" });
          cResult[26] = tmp68;
          cResult[27] = tmp69;
          cResult[28] = tmp70;
          cResult[29] = tmp71;
          cResult[30] = tmp72;
          cResult[31] = tmp73;
          cResult[32] = tmp74;
          cResult[33] = tmp75;
          cResult[34] = tmp76;
          cResult[35] = tmp77;
          cResult[36] = tmp78;
          cResult[37] = tmp79;
          cResult[38] = tmp80;
          cResult[39] = tmp81;
          cResult[40] = tmp82;
          cResult[41] = tmp83;
          cResult[42] = tmp84;
          cResult[43] = tmp85;
          cResult[44] = tmp86;
          cResult[45] = tmp87;
          let tmp66 = tmp87;
          let tmp65 = tmp86;
          let tmp64 = tmp85;
          let tmp63 = tmp84;
          let tmp62 = tmp83;
          let tmp61 = tmp82;
          let tmp60 = tmp81;
          let tmp59 = tmp80;
          let tmp58 = tmp79;
          let tmp57 = tmp78;
          let tmp56 = tmp77;
          let tmp55 = tmp76;
          let tmp54 = tmp75;
          let tmp53 = tmp74;
          let tmp52 = tmp73;
          let tmp51 = tmp72;
          let tmp50 = tmp71;
          let tmp49 = tmp70;
          let tmp48 = tmp69;
          let tmp47 = tmp68;
        } else {
          tmp47 = cResult[26];
          tmp48 = cResult[27];
          tmp49 = cResult[28];
          tmp50 = cResult[29];
          tmp51 = cResult[30];
          tmp52 = cResult[31];
          tmp53 = cResult[32];
          tmp54 = cResult[33];
          tmp55 = cResult[34];
          tmp56 = cResult[35];
          tmp57 = cResult[36];
          tmp58 = cResult[37];
          tmp59 = cResult[38];
          tmp60 = cResult[39];
          tmp61 = cResult[40];
          tmp62 = cResult[41];
          tmp63 = cResult[42];
          tmp64 = cResult[43];
          tmp65 = cResult[44];
          tmp66 = cResult[45];
        }
        if (cResult[46] === num8) {
          if (cResult[47] === tmp5) {
            if (cResult[48] === tmp31) {
              if (cResult[49] === tmp32) {
                if (cResult[50] === tmp39) {
                  if (cResult[51] === tmp42) {
                    if (cResult[52] === tmp43) {
                      if (cResult[53] === tmp14) {
                        if (cResult[54] === num7) {
                          let tmp88 = cResult[55];
                        }
                        return tmp88;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj8 = {};
        const merged = Object.assign(tmp5);
        obj8.width = num7;
        obj8.height = num8;
        obj8.viewBox = "0 0 16 16";
        obj8.fill = "none";
        items = [
          tmp14,
          tmp19,
          tmp20,
          tmp21,
          tmp22,
          tmp23,
          tmp18,
          tmp31,
          tmp32,
          tmp36,
          tmp39,
          tmp42,
          tmp43,
          tmp47,
          tmp48,
          tmp49,
          tmp50,
          tmp51,
          tmp52,
          tmp53,
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
        ];
        obj8.children = items;
        const tmp93 = hasOwnProperty(inlineStyles.Svg, obj8);
        cResult[46] = num8;
        cResult[47] = tmp5;
        cResult[48] = tmp31;
        cResult[49] = tmp32;
        cResult[50] = tmp39;
        cResult[51] = tmp42;
        cResult[52] = tmp43;
        cResult[53] = tmp14;
        cResult[54] = num7;
        cResult[55] = tmp93;
        tmp88 = tmp93;
      }
      const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({
        primaryBaseColors,
        primaryTintColor: tmp4,
        primaryTintLuminances,
        primaryLuminanceWeights: items,
        secondaryBaseColors,
        secondaryTintColor: tmp6,
        secondaryTintLuminances,
        secondaryLuminanceWeights: items1,
      });
      cResult[6] = tmp4;
      cResult[7] = tmp6;
      cResult[8] = transformedBadgeColors;
      tmp12 = transformedBadgeColors;
      const obj9 = {
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
    }
  : function GuildBadgeCrown(width) {
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
      const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({
        primaryBaseColors,
        primaryTintColor,
        primaryTintLuminances,
        primaryLuminanceWeights: items,
        secondaryBaseColors,
        secondaryTintColor,
        secondaryTintLuminances,
        secondaryLuminanceWeights: items1,
      });
      ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
      const obj3 = {};
      const merged1 = Object.assign(merged);
      obj3.width = num;
      obj3.height = num2;
      obj3.viewBox = "0 0 16 16";
      obj3.fill = "none";
      items = [
        React4(inlineStyles.Path, {
          d: "M0.999985 2V14H1.99998V15H14V14H15V2H14V3H13V4H11V3H9.99998V2H8.99998V1H6.99998V2H5.99998V3H4.99998V4H2.99998V3H1.99998V2H0.999985Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M0.999985 3H1.99998L1.99998 2L0.999985 2L0.999985 3Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M1.99998 4H2.99998V3H1.99998V4Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M4.99998 4H5.99998V3H4.99998V4Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M9.99998 4H11V3H9.99998V4Z", fill: "white" }),
        React4(inlineStyles.Path, {
          d: "M9 2.00002V1.00002H7V2.00002H6V3.00002H7V5.00002H9V3.00002H10V2.00002H9Z",
          fill: "white",
        }),
        React4(inlineStyles.Path, { d: "M2 5.00002V4.00002H1V13H2V14H3V5.00002H2Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M13 5.00002V4.00002H14V15H12V5.00002H13Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M4.99999 5.00002H3V15H4.99999V5.00002Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M6.99998 15H8.99998V13H6.99998V15Z", fill: "white" }),
        React4(inlineStyles.Path, {
          d: "M10 7.00002V6.00002H9V5.00002H7V6.00002H6V7.00002H5V8.00001H6V11H7V12H9V11H10V8.00001H11V7.00002H10Z",
          fill: secondaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, { d: "M6.99998 12H8.99998V10H6.99998V12Z", fill: secondaryColorsTransformed[1] }),
        React4(inlineStyles.Path, {
          d: "M9 7.00002V6.00002H7V7.00002H6V9.00001H10V7.00002H9Z",
          fill: secondaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M6.99998 9.00002H8.99998V7.00002H6.99998V9.00002Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M0.999985 15H1.99998L1.99998 14H0.999985L0.999985 15Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M1.99998 3H2.99998V2L1.99998 2V3Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M4.99998 3H5.99998V2L4.99998 2V3Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M5.99998 2L6.99998 2V1L5.99998 1V2Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M6.99998 1L8.99998 1V0L6.99998 0V1Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M2.99998 4L4.99998 4V3H2.99998V4Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M8.99998 2L9.99998 2V1L8.99998 1V2Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M9.99998 3H11V2L9.99998 2V3Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M13 3H14V2L13 2V3Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M11 4L13 4V3H11V4Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M14 15H15V14H14V15Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M1 1.00002V1.52588e-05H0V14H1V2.00002H2V1.00002H1Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M15 1.52588e-05V1.00002H14V2.00002H15V14H16V1.52588e-05H15Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M14 15H1.99998V16H14V15Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M6.99998 13H8.99998V12H6.99998V13Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M8.99998 12H9.99998V11H8.99998V12Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M5.99998 12H6.99998V11H5.99998V12Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M4.99998 11H5.99998V8H4.99998V11Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M9.99998 11H11V8H9.99998V11Z", fill: "black" }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
