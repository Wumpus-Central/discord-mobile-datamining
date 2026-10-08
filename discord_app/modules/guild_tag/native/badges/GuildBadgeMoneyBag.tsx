// discord_app/modules/guild_tag/native/badges/GuildBadgeMoneyBag.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07550_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#FFB84B", "#FFE361"];
const primaryTintLuminances = [0.5, 0.77];
let items = [
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeMoneyBag.tsx");

export const GuildBadgeMoneyBag = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgeMoneyBag(arg0) {
      const cResult = c.c(62);
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
        const obj2 = {
          primaryBaseColors,
          primaryTintColor: tmp4,
          primaryTintLuminances,
          primaryLuminanceWeights: items,
        };
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
        const obj3 = {
          d: "M1.99999 15V14H0.999985V9H1.99999V8H2.99999V7H3.99999V6H12V7H13V8H14V9H15V14H14V15H1.99999Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp18 = React4(inlineStyles.Path, obj3);
        cResult[7] = primaryColorsTransformed[1];
        cResult[8] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = React4(inlineStyles.Path, { d: "M14 15H1.99999V16H14V15Z", fill: "black" });
        cResult[9] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== primaryColorsTransformed[1]) {
        const obj4 = { d: "M3.00002 1V2H4.00002V3H12V2H13V1H3.00002Z", fill: primaryColorsTransformed[1] };
        const tmp24 = React4(inlineStyles.Path, obj4);
        cResult[10] = primaryColorsTransformed[1];
        cResult[11] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[11];
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp30 = React4(inlineStyles.Path, { d: "M0.999996 15H2V14H0.999996L0.999996 15Z", fill: "black" });
        const tmp31 = React4(inlineStyles.Path, { d: "M0.999996 9H2V8H0.999996L0.999996 9Z", fill: "black" });
        const tmp32 = React4(inlineStyles.Path, { d: "M1.99999 9H2.99999V8H1.99999V9Z", fill: "white" });
        const tmp33 = React4(inlineStyles.Path, { d: "M2.99999 8H3.99999V7H2.99999V8Z", fill: "white" });
        cResult[12] = tmp33;
        cResult[13] = tmp30;
        cResult[14] = tmp31;
        cResult[15] = tmp32;
        let tmp28 = tmp32;
        let tmp27 = tmp31;
        let tmp26 = tmp30;
        let tmp25 = tmp33;
      } else {
        tmp25 = cResult[12];
        tmp26 = cResult[13];
        tmp27 = cResult[14];
        tmp28 = cResult[15];
      }
      if (cResult[16] !== primaryColorsTransformed[0]) {
        const obj5 = { d: "M3.99999 7H4.99999V6H3.99999V7Z", fill: primaryColorsTransformed[0] };
        const tmp37 = React4(inlineStyles.Path, obj5);
        const obj6 = { d: "M11 7H12V6H11V7Z", fill: primaryColorsTransformed[0] };
        const tmp38 = React4(inlineStyles.Path, obj6);
        cResult[16] = primaryColorsTransformed[0];
        cResult[17] = tmp37;
        cResult[18] = tmp38;
        let tmp35 = tmp38;
        let tmp34 = tmp37;
      } else {
        tmp34 = cResult[17];
        tmp35 = cResult[18];
      }
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp42 = React4(inlineStyles.Path, { d: "M8.99999 12H9.99999V8H8.99999V12Z", fill: "black" });
        const tmp43 = React4(inlineStyles.Path, { d: "M5.99999 12H6.99999L6.99999 8H5.99999V12Z", fill: "black" });
        cResult[19] = tmp42;
        cResult[20] = tmp43;
        let tmp40 = tmp43;
        let tmp39 = tmp42;
      } else {
        tmp39 = cResult[19];
        tmp40 = cResult[20];
      }
      if (cResult[21] !== primaryColorsTransformed[0]) {
        const obj7 = { d: "M14 10H15V9H14V10Z", fill: primaryColorsTransformed[0] };
        const tmp46 = React4(inlineStyles.Path, obj7);
        cResult[21] = primaryColorsTransformed[0];
        cResult[22] = tmp46;
        let tmp44 = tmp46;
      } else {
        tmp44 = cResult[22];
      }
      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp55 = React4(inlineStyles.Path, { d: "M1.99999 8H2.99999V7H1.99999V8Z", fill: "black" });
        const tmp56 = React4(inlineStyles.Path, { d: "M2.99999 7H3.99999V6H2.99999V7Z", fill: "black" });
        const tmp57 = React4(inlineStyles.Path, { d: "M2.99999 3H3.99999V2L2.99999 2V3Z", fill: "black" });
        const tmp58 = React4(inlineStyles.Path, { d: "M3.99999 2L6.99999 2V1L3.99999 1V2Z", fill: "white" });
        const tmp59 = React4(inlineStyles.Path, {
          d: "M0.999985 9L0.999985 12H1.99998L1.99998 9H0.999985Z",
          fill: "white",
        });
        const tmp60 = React4(inlineStyles.Path, { d: "M8.99999 12H6.99999V13H8.99999V12Z", fill: "black" });
        const tmp61 = React4(inlineStyles.Path, { d: "M8.99999 7H6.99999V8H8.99999V7Z", fill: "black" });
        cResult[23] = tmp55;
        cResult[24] = tmp56;
        cResult[25] = tmp57;
        cResult[26] = tmp58;
        cResult[27] = tmp59;
        cResult[28] = tmp60;
        cResult[29] = tmp61;
        let tmp53 = tmp61;
        let tmp52 = tmp60;
        let tmp51 = tmp59;
        let tmp50 = tmp58;
        let tmp49 = tmp57;
        let tmp48 = tmp56;
        let tmp47 = tmp55;
      } else {
        tmp47 = cResult[23];
        tmp48 = cResult[24];
        tmp49 = cResult[25];
        tmp50 = cResult[26];
        tmp51 = cResult[27];
        tmp52 = cResult[28];
        tmp53 = cResult[29];
      }
      if (cResult[30] !== primaryColorsTransformed[0]) {
        const obj8 = { d: "M8.99999 8H6.99999V12H8.99999V8Z", fill: primaryColorsTransformed[0] };
        const tmp67 = React4(inlineStyles.Path, obj8);
        const obj9 = { d: "M2 14V12H1V14H2Z", fill: primaryColorsTransformed[0] };
        const tmp68 = React4(inlineStyles.Path, obj9);
        const obj10 = { d: "M15 14V12H14V14H15Z", fill: primaryColorsTransformed[0] };
        const tmp69 = React4(inlineStyles.Path, obj10);
        const obj11 = { d: "M1.99999 15L14 15V13L1.99999 13V15Z", fill: primaryColorsTransformed[0] };
        const tmp70 = React4(inlineStyles.Path, obj11);
        cResult[30] = primaryColorsTransformed[0];
        cResult[31] = tmp67;
        cResult[32] = tmp68;
        cResult[33] = tmp69;
        cResult[34] = tmp70;
        let tmp65 = tmp70;
        let tmp64 = tmp69;
        let tmp63 = tmp68;
        let tmp62 = tmp67;
      } else {
        tmp62 = cResult[31];
        tmp63 = cResult[32];
        tmp64 = cResult[33];
        tmp65 = cResult[34];
      }
      if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp79 = React4(inlineStyles.Path, { d: "M0 14H1L1 9H0L0 14Z", fill: "black" });
        const tmp80 = React4(inlineStyles.Path, { d: "M15 14H14V15H15V14Z", fill: "black" });
        const tmp81 = React4(inlineStyles.Path, { d: "M15 8H14V9H15V8Z", fill: "black" });
        const tmp82 = React4(inlineStyles.Path, { d: "M14 7H13V8H14V7Z", fill: "black" });
        const tmp83 = React4(inlineStyles.Path, { d: "M13 6H12V7H13V6Z", fill: "black" });
        const tmp84 = React4(inlineStyles.Path, { d: "M13 2H12V3H13V2Z", fill: "black" });
        const tmp85 = React4(inlineStyles.Path, {
          d: "M13 0H3.00002H2.99996H2.00002V2H3.00002V1H13V2H14V0H13Z",
          fill: "black",
        });
        cResult[35] = tmp79;
        cResult[36] = tmp80;
        cResult[37] = tmp81;
        cResult[38] = tmp82;
        cResult[39] = tmp83;
        cResult[40] = tmp84;
        cResult[41] = tmp85;
        let tmp77 = tmp85;
        let tmp76 = tmp84;
        let tmp75 = tmp83;
        let tmp74 = tmp82;
        let tmp73 = tmp81;
        let tmp72 = tmp80;
        let tmp71 = tmp79;
      } else {
        tmp71 = cResult[35];
        tmp72 = cResult[36];
        tmp73 = cResult[37];
        tmp74 = cResult[38];
        tmp75 = cResult[39];
        tmp76 = cResult[40];
        tmp77 = cResult[41];
      }
      if (cResult[42] !== primaryColorsTransformed[0]) {
        const obj12 = { d: "M12 3V2L4.00002 2V3L12 3Z", fill: primaryColorsTransformed[0] };
        const tmp88 = React4(inlineStyles.Path, obj12);
        cResult[42] = primaryColorsTransformed[0];
        cResult[43] = tmp88;
        let tmp86 = tmp88;
      } else {
        tmp86 = cResult[43];
      }
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp94 = React4(inlineStyles.Path, { d: "M5 4V6H11V4H5Z", fill: "#AD7A60" });
        const tmp95 = React4(inlineStyles.Path, { d: "M16 9H15V14H16V9Z", fill: "black" });
        const tmp96 = React4(inlineStyles.Path, { d: "M4.00002 3V6H5.00002V4H11V6H12V3H4.00002Z", fill: "black" });
        const tmp97 = React4(inlineStyles.Path, { d: "M8.99999 8H6.99999V9H8.99999V8Z", fill: "white" });
        cResult[44] = tmp94;
        cResult[45] = tmp95;
        cResult[46] = tmp96;
        cResult[47] = tmp97;
        let tmp92 = tmp97;
        let tmp91 = tmp96;
        let tmp90 = tmp95;
        let tmp89 = tmp94;
      } else {
        tmp89 = cResult[44];
        tmp90 = cResult[45];
        tmp91 = cResult[46];
        tmp92 = cResult[47];
      }
      if (cResult[48] === num7) {
        if (cResult[49] === tmp5) {
          if (cResult[50] === tmp34) {
            if (cResult[51] === tmp35) {
              if (cResult[52] === tmp44) {
                if (cResult[53] === tmp62) {
                  if (cResult[54] === tmp63) {
                    if (cResult[55] === tmp64) {
                      if (cResult[56] === tmp65) {
                        if (cResult[57] === tmp86) {
                          if (cResult[58] === tmp16) {
                            if (cResult[59] === tmp22) {
                              if (cResult[60] === num6) {
                                let tmp98 = cResult[61];
                              }
                              return tmp98;
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
      const obj13 = {};
      const merged = Object.assign(tmp5);
      obj13.width = num6;
      obj13.height = num7;
      obj13.viewBox = "0 0 16 16";
      obj13.fill = "none";
      items = [
        tmp16,
        tmp19,
        tmp22,
        tmp26,
        tmp27,
        tmp28,
        tmp25,
        tmp34,
        tmp35,
        tmp39,
        tmp40,
        tmp44,
        tmp47,
        tmp48,
        tmp49,
        tmp50,
        tmp51,
        tmp52,
        tmp53,
        tmp62,
        tmp63,
        tmp64,
        tmp65,
        tmp71,
        tmp72,
        tmp73,
        tmp74,
        tmp75,
        tmp76,
        tmp77,
        tmp86,
        tmp89,
        tmp90,
        tmp91,
        tmp92,
      ];
      obj13.children = items;
      const tmp100 = hasOwnProperty(inlineStyles.Svg, obj13);
      cResult[48] = num7;
      cResult[49] = tmp5;
      cResult[50] = tmp34;
      cResult[51] = tmp35;
      cResult[52] = tmp44;
      cResult[53] = tmp62;
      cResult[54] = tmp63;
      cResult[55] = tmp64;
      cResult[56] = tmp65;
      cResult[57] = tmp86;
      cResult[58] = tmp16;
      cResult[59] = tmp22;
      cResult[60] = num6;
      cResult[61] = tmp100;
      tmp98 = tmp100;
    }
  : function GuildBadgeMoneyBag(primaryTintColor) {
      let num = primaryTintColor.width;
      if (num === undefined) {
        num = 24;
      }
      let num2 = primaryTintColor.height;
      if (num2 === undefined) {
        num2 = 24;
      }
      const merged = Object.assign(primaryTintColor, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
      const primaryColorsTransformed = GuildBadgeUtils.getTransformedBadgeColors({
        primaryBaseColors,
        primaryTintColor: primaryTintColor.primaryTintColor,
        primaryTintLuminances,
        primaryLuminanceWeights: items,
      }).primaryColorsTransformed;
      const obj3 = {};
      const merged1 = Object.assign(merged);
      obj3.width = num;
      obj3.height = num2;
      obj3.viewBox = "0 0 16 16";
      obj3.fill = "none";
      items = [
        React4(inlineStyles.Path, {
          d: "M1.99999 15V14H0.999985V9H1.99999V8H2.99999V7H3.99999V6H12V7H13V8H14V9H15V14H14V15H1.99999Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M14 15H1.99999V16H14V15Z", fill: "black" }),
        React4(inlineStyles.Path, {
          d: "M3.00002 1V2H4.00002V3H12V2H13V1H3.00002Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M0.999996 15H2V14H0.999996L0.999996 15Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M0.999996 9H2V8H0.999996L0.999996 9Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M1.99999 9H2.99999V8H1.99999V9Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M2.99999 8H3.99999V7H2.99999V8Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M3.99999 7H4.99999V6H3.99999V7Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M11 7H12V6H11V7Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M8.99999 12H9.99999V8H8.99999V12Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M5.99999 12H6.99999L6.99999 8H5.99999V12Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M14 10H15V9H14V10Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M1.99999 8H2.99999V7H1.99999V8Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M2.99999 7H3.99999V6H2.99999V7Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M2.99999 3H3.99999V2L2.99999 2V3Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M3.99999 2L6.99999 2V1L3.99999 1V2Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M0.999985 9L0.999985 12H1.99998L1.99998 9H0.999985Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M8.99999 12H6.99999V13H8.99999V12Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M8.99999 7H6.99999V8H8.99999V7Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M8.99999 8H6.99999V12H8.99999V8Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M2 14V12H1V14H2Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M15 14V12H14V14H15Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M1.99999 15L14 15V13L1.99999 13V15Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M0 14H1L1 9H0L0 14Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M15 14H14V15H15V14Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M15 8H14V9H15V8Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M14 7H13V8H14V7Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M13 6H12V7H13V6Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M13 2H12V3H13V2Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M13 0H3.00002H2.99996H2.00002V2H3.00002V1H13V2H14V0H13Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M12 3V2L4.00002 2V3L12 3Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M5 4V6H11V4H5Z", fill: "#AD7A60" }),
        React4(inlineStyles.Path, { d: "M16 9H15V14H16V9Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M4.00002 3V6H5.00002V4H11V6H12V3H4.00002Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M8.99999 8H6.99999V9H8.99999V8Z", fill: "white" }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
