// discord_app/modules/guild_tag/native/badges/GuildBadgeCrosshairs.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07550_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#3f581a", "#7fb134", "#bcef42", "#f0f0f0"];
const secondaryBaseColors = ["#008456", "#6be473", "#f0f0f0"];
const primaryTintLuminances = [0.05, 0.35, 0.7, 1];
let items = [
  { base: 8, tint: 1 },
  { base: 4, tint: 1 },
  { base: 2, tint: 1 },
  { base: 4, tint: 1 },
];
const secondaryTintLuminances = [0.15, 0.6, 1];
const items1 = [
  { base: 3, tint: 1 },
  { base: 2, tint: 1 },
  { base: 4, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCrosshairs.tsx");

export const GuildBadgeCrosshairs = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgeCrosshairs(arg0) {
      const cResult = c.c(106);
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
        if (cResult[9] !== primaryColorsTransformed[2]) {
          const obj2 = {
            d: "M9 1H7v4h2V1ZM11 7V6h-1V5H6v1H5v1H1v2h4v1h1v1h1v4h2v-4h1v-1h1V9h4V7h-4Z",
            fill: primaryColorsTransformed[2],
          };
          const tmp16 = React4(inlineStyles.Path, obj2);
          cResult[9] = primaryColorsTransformed[2];
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp20 = React4(inlineStyles.Path, {
            d: "M4 0H3v1h1V0ZM6 5H5v1h1V5ZM11 5h-1v1h1V5ZM13 0h-1v1h1V0ZM14 1h-1v1h1V1ZM15 2h-1v1h1V2ZM16 3h-1v1h1V3ZM9 0H7v1h2V0Z",
            fill: "#000",
          });
          cResult[11] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[11];
        }
        if (cResult[12] !== primaryColorsTransformed[3]) {
          const obj3 = { d: "M9 1H7v1h2V1Z", fill: primaryColorsTransformed[3] };
          const tmp23 = React4(inlineStyles.Path, obj3);
          cResult[12] = primaryColorsTransformed[3];
          cResult[13] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        if (cResult[14] !== primaryColorsTransformed[1]) {
          const obj4 = { d: "M9 3H7v1h2V3ZM9 4H7v1h2V4Z", fill: primaryColorsTransformed[1] };
          const tmp26 = React4(inlineStyles.Path, obj4);
          cResult[14] = primaryColorsTransformed[1];
          cResult[15] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[15];
        }
        if (cResult[16] !== primaryColorsTransformed[3]) {
          const obj5 = { d: "M9 12H7v1h2v-1Z", fill: primaryColorsTransformed[3] };
          const tmp29 = React4(inlineStyles.Path, obj5);
          cResult[16] = primaryColorsTransformed[3];
          cResult[17] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[17];
        }
        if (cResult[18] !== primaryColorsTransformed[1]) {
          const obj6 = { d: "M9 14H7v1h2v-1ZM9 11H7v1h2v-1Z", fill: primaryColorsTransformed[1] };
          const tmp32 = React4(inlineStyles.Path, obj6);
          cResult[18] = primaryColorsTransformed[1];
          cResult[19] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[19];
        }
        const _Symbol2 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp35 = React4(inlineStyles.Path, { d: "M9 6H7v1h2V6ZM9 9H7v1h2V9ZM10 7H9v2h1V7Z", fill: "#000" });
          cResult[20] = tmp35;
          let tmp33 = tmp35;
        } else {
          tmp33 = cResult[20];
        }
        if (cResult[21] !== primaryColorsTransformed[1]) {
          const obj7 = { d: "M12 7h-1v2h1V7Z", fill: primaryColorsTransformed[1] };
          const tmp38 = React4(inlineStyles.Path, obj7);
          cResult[21] = primaryColorsTransformed[1];
          cResult[22] = tmp38;
          let tmp36 = tmp38;
        } else {
          tmp36 = cResult[22];
        }
        const _Symbol3 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp41 = React4(inlineStyles.Path, { d: "M7 7H6v2h1V7Z", fill: "#000" });
          cResult[23] = tmp41;
          let tmp39 = tmp41;
        } else {
          tmp39 = cResult[23];
        }
        if (cResult[24] !== primaryColorsTransformed[3]) {
          const obj8 = { d: "M6 6H5v2h1V6Z", fill: primaryColorsTransformed[3] };
          const tmp44 = React4(inlineStyles.Path, obj8);
          cResult[24] = primaryColorsTransformed[3];
          cResult[25] = tmp44;
          let tmp42 = tmp44;
        } else {
          tmp42 = cResult[25];
        }
        const _Symbol4 = Symbol;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp47 = React4(inlineStyles.Path, { d: "M3 1H2v1h1V1Z", fill: "#000" });
          cResult[26] = tmp47;
          let tmp45 = tmp47;
        } else {
          tmp45 = cResult[26];
        }
        if (cResult[27] !== secondaryColorsTransformed[1]) {
          const obj9 = { d: "M3 1v1H2v1H1v1h3V1H3Z", fill: secondaryColorsTransformed[1] };
          const tmp50 = React4(inlineStyles.Path, obj9);
          cResult[27] = secondaryColorsTransformed[1];
          cResult[28] = tmp50;
          let tmp48 = tmp50;
        } else {
          tmp48 = cResult[28];
        }
        if (cResult[29] !== secondaryColorsTransformed[2]) {
          const obj10 = { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2Z", fill: secondaryColorsTransformed[2] };
          const tmp53 = React4(inlineStyles.Path, obj10);
          cResult[29] = secondaryColorsTransformed[2];
          cResult[30] = tmp53;
          let tmp51 = tmp53;
        } else {
          tmp51 = cResult[30];
        }
        if (cResult[31] !== secondaryColorsTransformed[0]) {
          const obj11 = { d: "M4 3H1v1h3V3Z", fill: secondaryColorsTransformed[0] };
          const tmp56 = React4(inlineStyles.Path, obj11);
          cResult[31] = secondaryColorsTransformed[0];
          cResult[32] = tmp56;
          let tmp54 = tmp56;
        } else {
          tmp54 = cResult[32];
        }
        if (cResult[33] !== secondaryColorsTransformed[1]) {
          const obj12 = {
            d: "M12 12v3h1v-1h1v-1h1v-1h-3ZM1 12v1h1v1h1v1h1v-3H1Z",
            fill: secondaryColorsTransformed[1],
          };
          const tmp59 = React4(inlineStyles.Path, obj12);
          cResult[33] = secondaryColorsTransformed[1];
          cResult[34] = tmp59;
          let tmp57 = tmp59;
        } else {
          tmp57 = cResult[34];
        }
        if (cResult[35] !== secondaryColorsTransformed[2]) {
          const obj13 = { d: "M4 12H1v1h3v-1Z", fill: secondaryColorsTransformed[2] };
          const tmp62 = React4(inlineStyles.Path, obj13);
          cResult[35] = secondaryColorsTransformed[2];
          cResult[36] = tmp62;
          let tmp60 = tmp62;
        } else {
          tmp60 = cResult[36];
        }
        if (cResult[37] !== secondaryColorsTransformed[0]) {
          const obj14 = { d: "M3 13v2h1v-2H3Z", fill: secondaryColorsTransformed[0] };
          const tmp65 = React4(inlineStyles.Path, obj14);
          cResult[37] = secondaryColorsTransformed[0];
          cResult[38] = tmp65;
          let tmp63 = tmp65;
        } else {
          tmp63 = cResult[38];
        }
        if (cResult[39] !== secondaryColorsTransformed[1]) {
          const obj15 = { d: "M14 3V2h-1V1h-1v3h3V3h-1Z", fill: secondaryColorsTransformed[1] };
          const tmp68 = React4(inlineStyles.Path, obj15);
          cResult[39] = secondaryColorsTransformed[1];
          cResult[40] = tmp68;
          let tmp66 = tmp68;
        } else {
          tmp66 = cResult[40];
        }
        if (cResult[41] !== secondaryColorsTransformed[2]) {
          const obj16 = { d: "M13 1h-1v1h1V1Z", fill: secondaryColorsTransformed[2] };
          const tmp71 = React4(inlineStyles.Path, obj16);
          cResult[41] = secondaryColorsTransformed[2];
          cResult[42] = tmp71;
          let tmp69 = tmp71;
        } else {
          tmp69 = cResult[42];
        }
        if (cResult[43] !== primaryColorsTransformed[3]) {
          const obj17 = { d: "M13 7h-1v1h1V7Z", fill: primaryColorsTransformed[3] };
          const tmp74 = React4(inlineStyles.Path, obj17);
          cResult[43] = primaryColorsTransformed[3];
          cResult[44] = tmp74;
          let tmp72 = tmp74;
        } else {
          tmp72 = cResult[44];
        }
        if (cResult[45] !== primaryColorsTransformed[1]) {
          const obj18 = { d: "M15 8h-3v1h3V8Z", fill: primaryColorsTransformed[1] };
          const tmp77 = React4(inlineStyles.Path, obj18);
          cResult[45] = primaryColorsTransformed[1];
          cResult[46] = tmp77;
          let tmp75 = tmp77;
        } else {
          tmp75 = cResult[46];
        }
        if (cResult[47] !== secondaryColorsTransformed[0]) {
          const obj19 = { d: "M15 3h-3v1h3V3Z", fill: secondaryColorsTransformed[0] };
          const tmp80 = React4(inlineStyles.Path, obj19);
          cResult[47] = secondaryColorsTransformed[0];
          cResult[48] = tmp80;
          let tmp78 = tmp80;
        } else {
          tmp78 = cResult[48];
        }
        const _Symbol5 = Symbol;
        if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp83 = React4(inlineStyles.Path, {
            d: "M2 2H1v1h1V2ZM7 1H6v4h1V1ZM10 1H9v4h1V1ZM16 7h-1v2h1V7ZM15 6h-4v1h4V6ZM15 9h-4v1h4V9ZM1 7H0v2h1V7ZM5 6H1v1h4V6Z",
            fill: "#000",
          });
          cResult[49] = tmp83;
          let tmp81 = tmp83;
        } else {
          tmp81 = cResult[49];
        }
        if (cResult[50] !== primaryColorsTransformed[3]) {
          const obj20 = { d: "M4 7H1v2h1V8h2V7Z", fill: primaryColorsTransformed[3] };
          const tmp86 = React4(inlineStyles.Path, obj20);
          cResult[50] = primaryColorsTransformed[3];
          cResult[51] = tmp86;
          let tmp84 = tmp86;
        } else {
          tmp84 = cResult[51];
        }
        const _Symbol6 = Symbol;
        if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp89 = React4(inlineStyles.Path, {
            d: "M5 9H1v1h4V9ZM1 3H0v1h1V3ZM4 15H3v1h1v-1ZM6 10H5v1h1v-1Z",
            fill: "#000",
          });
          cResult[52] = tmp89;
          let tmp87 = tmp89;
        } else {
          tmp87 = cResult[52];
        }
        if (cResult[53] !== primaryColorsTransformed[1]) {
          const obj21 = { d: "M4 8H3v1h1V8ZM5 7H4v2h1V7Z", fill: primaryColorsTransformed[1] };
          const tmp92 = React4(inlineStyles.Path, obj21);
          cResult[53] = primaryColorsTransformed[1];
          cResult[54] = tmp92;
          let tmp90 = tmp92;
        } else {
          tmp90 = cResult[54];
        }
        if (cResult[55] !== primaryColorsTransformed[0]) {
          const obj22 = { d: "M5 7H4v2h1V7Z", fill: primaryColorsTransformed[0] };
          const tmp95 = React4(inlineStyles.Path, obj22);
          cResult[55] = primaryColorsTransformed[0];
          cResult[56] = tmp95;
          let tmp93 = tmp95;
        } else {
          tmp93 = cResult[56];
        }
        if (cResult[57] !== primaryColorsTransformed[1]) {
          const obj23 = { d: "M10 10H6v1h4v-1Z", fill: primaryColorsTransformed[1] };
          const tmp98 = React4(inlineStyles.Path, obj23);
          cResult[57] = primaryColorsTransformed[1];
          cResult[58] = tmp98;
          let tmp96 = tmp98;
        } else {
          tmp96 = cResult[58];
        }
        if (cResult[59] !== primaryColorsTransformed[3]) {
          const obj24 = { d: "M10 5H6v1h4V5Z", fill: primaryColorsTransformed[3] };
          const tmp101 = React4(inlineStyles.Path, obj24);
          cResult[59] = primaryColorsTransformed[3];
          cResult[60] = tmp101;
          let tmp99 = tmp101;
        } else {
          tmp99 = cResult[60];
        }
        const _Symbol7 = Symbol;
        if (cResult[61] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp104 = React4(inlineStyles.Path, { d: "M11 10h-1v1h1v-1Z", fill: "#000" });
          cResult[61] = tmp104;
          let tmp102 = tmp104;
        } else {
          tmp102 = cResult[61];
        }
        if (cResult[62] !== primaryColorsTransformed[1]) {
          const obj25 = { d: "M11 9h-1v1h1V9Z", fill: primaryColorsTransformed[1] };
          const tmp107 = React4(inlineStyles.Path, obj25);
          cResult[62] = primaryColorsTransformed[1];
          cResult[63] = tmp107;
          let tmp105 = tmp107;
        } else {
          tmp105 = cResult[63];
        }
        const _Symbol8 = Symbol;
        if (cResult[64] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp111 = React4(inlineStyles.Path, {
            d: "M13 15h-1v1h1v-1ZM14 14h-1v1h1v-1ZM15 13h-1v1h1v-1ZM16 12h-1v1h1v-1ZM9 15H7v1h2v-1ZM3 14H2v1h1v-1ZM2 13H1v1h1v-1ZM7 11H6v4h1v-4ZM10 11H9v4h1v-4ZM4 4H1v1h4V1H4v3ZM12 4V1h-1v4h4V4h-3Z",
            fill: "#000",
          });
          const tmp112 = React4(inlineStyles.Path, {
            d: "M1 11v1h3v3h1v-4H1ZM11 11v4h1v-3h3v-1h-4ZM1 12H0v1h1v-1Z",
            fill: "#000",
          });
          cResult[64] = tmp111;
          cResult[65] = tmp112;
          let tmp109 = tmp112;
          let tmp108 = tmp111;
        } else {
          tmp108 = cResult[64];
          tmp109 = cResult[65];
        }
        if (cResult[66] !== secondaryColorsTransformed[0]) {
          const obj26 = {
            d: "M13 14h-1v1h1v-1ZM14 13h-1v1h1v-1ZM15 12h-1v1h1v-1Z",
            fill: secondaryColorsTransformed[0],
          };
          const tmp115 = React4(inlineStyles.Path, obj26);
          cResult[66] = secondaryColorsTransformed[0];
          cResult[67] = tmp115;
          let tmp113 = tmp115;
        } else {
          tmp113 = cResult[67];
        }
        if (cResult[68] !== secondaryColorsTransformed[2]) {
          const obj27 = { d: "M13 12h-1v1h1v-1Z", fill: secondaryColorsTransformed[2] };
          const tmp118 = React4(inlineStyles.Path, obj27);
          cResult[68] = secondaryColorsTransformed[2];
          cResult[69] = tmp118;
          let tmp116 = tmp118;
        } else {
          tmp116 = cResult[69];
        }
        if (cResult[70] !== primaryColorsTransformed[1]) {
          const obj28 = { d: "M9 7H7v2h2V7Z", fill: primaryColorsTransformed[1] };
          const tmp121 = React4(inlineStyles.Path, obj28);
          cResult[70] = primaryColorsTransformed[1];
          cResult[71] = tmp121;
          let tmp119 = tmp121;
        } else {
          tmp119 = cResult[71];
        }
        if (cResult[72] !== primaryColorsTransformed[0]) {
          const obj29 = { d: "M9 4H7v1h2V4ZM9 11H7v1h2v-1ZM12 7h-1v2h1V7Z", fill: primaryColorsTransformed[0] };
          const tmp124 = React4(inlineStyles.Path, obj29);
          cResult[72] = primaryColorsTransformed[0];
          cResult[73] = tmp124;
          let tmp122 = tmp124;
        } else {
          tmp122 = cResult[73];
        }
        if (cResult[74] === num8) {
          if (cResult[75] === tmp5) {
            if (cResult[76] === tmp36) {
              if (cResult[77] === tmp42) {
                if (cResult[78] === tmp48) {
                  if (cResult[79] === tmp51) {
                    if (cResult[80] === tmp54) {
                      if (cResult[81] === tmp57) {
                        if (cResult[82] === tmp60) {
                          if (cResult[83] === tmp63) {
                            if (cResult[84] === tmp66) {
                              if (cResult[85] === tmp69) {
                                if (cResult[86] === tmp72) {
                                  if (cResult[87] === tmp75) {
                                    if (cResult[88] === tmp78) {
                                      if (cResult[89] === tmp84) {
                                        if (cResult[90] === tmp90) {
                                          if (cResult[91] === tmp93) {
                                            if (cResult[92] === tmp96) {
                                              if (cResult[93] === tmp99) {
                                                if (cResult[94] === tmp105) {
                                                  if (cResult[95] === tmp113) {
                                                    if (cResult[96] === tmp116) {
                                                      if (cResult[97] === tmp119) {
                                                        if (cResult[98] === tmp14) {
                                                          if (cResult[99] === tmp122) {
                                                            if (cResult[100] === tmp21) {
                                                              if (cResult[101] === tmp24) {
                                                                if (cResult[102] === tmp27) {
                                                                  if (cResult[103] === tmp30) {
                                                                    if (cResult[104] === num7) {
                                                                      let tmp125 = cResult[105];
                                                                    }
                                                                    return tmp125;
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
        const obj30 = {};
        const merged = Object.assign(tmp5);
        obj30.width = num7;
        obj30.height = num8;
        obj30.viewBox = "0 0 16 16";
        obj30.fill = "none";
        items = [
          tmp14,
          tmp18,
          tmp21,
          tmp24,
          tmp27,
          tmp30,
          tmp33,
          tmp36,
          tmp39,
          tmp42,
          tmp45,
          tmp48,
          tmp51,
          tmp54,
          tmp57,
          tmp60,
          tmp63,
          tmp66,
          tmp69,
          tmp72,
          tmp75,
          tmp78,
          tmp81,
          tmp84,
          tmp87,
          tmp90,
          tmp93,
          tmp96,
          tmp99,
          tmp102,
          tmp105,
          tmp108,
          tmp109,
          tmp113,
          tmp116,
          tmp119,
          tmp122,
        ];
        obj30.children = items;
        const tmp130 = hasOwnProperty(inlineStyles.Svg, obj30);
        cResult[74] = num8;
        cResult[75] = tmp5;
        cResult[76] = tmp36;
        cResult[77] = tmp42;
        cResult[78] = tmp48;
        cResult[79] = tmp51;
        cResult[80] = tmp54;
        cResult[81] = tmp57;
        cResult[82] = tmp60;
        cResult[83] = tmp63;
        cResult[84] = tmp66;
        cResult[85] = tmp69;
        cResult[86] = tmp72;
        cResult[87] = tmp75;
        cResult[88] = tmp78;
        cResult[89] = tmp84;
        cResult[90] = tmp90;
        cResult[91] = tmp93;
        cResult[92] = tmp96;
        cResult[93] = tmp99;
        cResult[94] = tmp105;
        cResult[95] = tmp113;
        cResult[96] = tmp116;
        cResult[97] = tmp119;
        cResult[98] = tmp14;
        cResult[99] = tmp122;
        cResult[100] = tmp21;
        cResult[101] = tmp24;
        cResult[102] = tmp27;
        cResult[103] = tmp30;
        cResult[104] = num7;
        cResult[105] = tmp130;
        tmp125 = tmp130;
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
      const obj31 = {
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
  : function GuildBadgeCrosshairs(width) {
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
          d: "M9 1H7v4h2V1ZM11 7V6h-1V5H6v1H5v1H1v2h4v1h1v1h1v4h2v-4h1v-1h1V9h4V7h-4Z",
          fill: primaryColorsTransformed[2],
        }),
        React4(inlineStyles.Path, {
          d: "M4 0H3v1h1V0ZM6 5H5v1h1V5ZM11 5h-1v1h1V5ZM13 0h-1v1h1V0ZM14 1h-1v1h1V1ZM15 2h-1v1h1V2ZM16 3h-1v1h1V3ZM9 0H7v1h2V0Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M9 1H7v1h2V1Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M9 3H7v1h2V3ZM9 4H7v1h2V4Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M9 12H7v1h2v-1Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M9 14H7v1h2v-1ZM9 11H7v1h2v-1Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M9 6H7v1h2V6ZM9 9H7v1h2V9ZM10 7H9v2h1V7Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M12 7h-1v2h1V7Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M7 7H6v2h1V7Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M6 6H5v2h1V6Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M3 1H2v1h1V1Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M3 1v1H2v1H1v1h3V1H3Z", fill: secondaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2Z", fill: secondaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M4 3H1v1h3V3Z", fill: secondaryColorsTransformed[0] }),
        React4(inlineStyles.Path, {
          d: "M12 12v3h1v-1h1v-1h1v-1h-3ZM1 12v1h1v1h1v1h1v-3H1Z",
          fill: secondaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M4 12H1v1h3v-1Z", fill: secondaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M3 13v2h1v-2H3Z", fill: secondaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M14 3V2h-1V1h-1v3h3V3h-1Z", fill: secondaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M13 1h-1v1h1V1Z", fill: secondaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M13 7h-1v1h1V7Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M15 8h-3v1h3V8Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M15 3h-3v1h3V3Z", fill: secondaryColorsTransformed[0] }),
        React4(inlineStyles.Path, {
          d: "M2 2H1v1h1V2ZM7 1H6v4h1V1ZM10 1H9v4h1V1ZM16 7h-1v2h1V7ZM15 6h-4v1h4V6ZM15 9h-4v1h4V9ZM1 7H0v2h1V7ZM5 6H1v1h4V6Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M4 7H1v2h1V8h2V7Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M5 9H1v1h4V9ZM1 3H0v1h1V3ZM4 15H3v1h1v-1ZM6 10H5v1h1v-1Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M4 8H3v1h1V8ZM5 7H4v2h1V7Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M5 7H4v2h1V7Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M10 10H6v1h4v-1Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M10 5H6v1h4V5Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M11 10h-1v1h1v-1Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M11 9h-1v1h1V9Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, {
          d: "M13 15h-1v1h1v-1ZM14 14h-1v1h1v-1ZM15 13h-1v1h1v-1ZM16 12h-1v1h1v-1ZM9 15H7v1h2v-1ZM3 14H2v1h1v-1ZM2 13H1v1h1v-1ZM7 11H6v4h1v-4ZM10 11H9v4h1v-4ZM4 4H1v1h4V1H4v3ZM12 4V1h-1v4h4V4h-3Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M1 11v1h3v3h1v-4H1ZM11 11v4h1v-3h3v-1h-4ZM1 12H0v1h1v-1Z", fill: "#000" }),
        React4(inlineStyles.Path, {
          d: "M13 14h-1v1h1v-1ZM14 13h-1v1h1v-1ZM15 12h-1v1h1v-1Z",
          fill: secondaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, { d: "M13 12h-1v1h1v-1Z", fill: secondaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M9 7H7v2h2V7Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, {
          d: "M9 4H7v1h2V4ZM9 11H7v1h2v-1ZM12 7h-1v2h1V7Z",
          fill: primaryColorsTransformed[0],
        }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
