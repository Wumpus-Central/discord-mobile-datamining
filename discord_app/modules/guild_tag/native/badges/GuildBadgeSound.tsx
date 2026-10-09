// discord_app/modules/guild_tag/native/badges/GuildBadgeSound.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07559_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#4282d8", "#47baff", "#b5e3ff", "#f0f0f0"];
const secondaryBaseColors = ["#816bee", "#b79cf8", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.4, 0.8, 1];
let items = [
  { base: 8, tint: 1 },
  { base: 2, tint: 1 },
  { base: 8, tint: 1 },
  { base: 8, tint: 1 },
];
const secondaryTintLuminances = [0.1, 0.5, 1];
const items1 = [
  { base: 4, tint: 1 },
  { base: 1, tint: 1 },
  { base: 8, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSound.tsx");

export const GuildBadgeSound = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgeSound(arg0) {
      const cResult = c.c(62);
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
            d: "M14 7V6h-2V5h-1V4h-1V2H9V1H7v1H6v2H5v1H4v1H2v1H1v2h1v1h2v1h1v1h1v2h1v1h2v-1h1v-2h1v-1h1v-1h2V9h1V7h-1Z",
            fill: primaryColorsTransformed[1],
          };
          const tmp16 = React4(inlineStyles.Path, obj2);
          cResult[9] = primaryColorsTransformed[1];
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] !== primaryColorsTransformed[2]) {
          const obj3 = { d: "M11 7H9V6H7v1H5v2h2v1h2V9h2V7Z", fill: primaryColorsTransformed[2] };
          const tmp19 = React4(inlineStyles.Path, obj3);
          cResult[11] = primaryColorsTransformed[2];
          cResult[12] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp23 = React4(inlineStyles.Path, {
            d: "M3 0H1v1h2V0ZM5 1H3v1h2V1ZM4 5H2v1h2V5ZM1 1H0v2h1V1Z",
            fill: "#000",
          });
          cResult[13] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        if (cResult[14] !== secondaryColorsTransformed[2]) {
          const obj4 = { d: "M3 1H1v2h1V2h1V1Z", fill: secondaryColorsTransformed[2] };
          const tmp26 = React4(inlineStyles.Path, obj4);
          cResult[14] = secondaryColorsTransformed[2];
          cResult[15] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[15];
        }
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp29 = React4(inlineStyles.Path, {
            d: "M1 7H0v2h1V7ZM16 1h-1v2h1V1ZM15 3h-1v2h1V3ZM2 3H1v2h1V3ZM6 2H5v2h1V2ZM11 2h-1v2h1V2ZM7 1H6v1h1V1Z",
            fill: "#000",
          });
          cResult[16] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[16];
        }
        if (cResult[17] !== primaryColorsTransformed[3]) {
          const obj5 = {
            d: "M7 2H6v1h1V2ZM8 3H7v1h1V3ZM5 5H4v1h1V5ZM3 6H2v1h1V6ZM2 7H1v1h1V7Z",
            fill: primaryColorsTransformed[3],
          };
          const tmp32 = React4(inlineStyles.Path, obj5);
          cResult[17] = primaryColorsTransformed[3];
          cResult[18] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[18];
        }
        if (cResult[19] !== secondaryColorsTransformed[1]) {
          const obj6 = { d: "M3 15v-1h2v-2H4v-1H2v2H1v2h2Z", fill: secondaryColorsTransformed[1] };
          const tmp35 = React4(inlineStyles.Path, obj6);
          cResult[19] = secondaryColorsTransformed[1];
          cResult[20] = tmp35;
          let tmp33 = tmp35;
        } else {
          tmp33 = cResult[20];
        }
        if (cResult[21] !== secondaryColorsTransformed[2]) {
          const obj7 = { d: "M2 13H1v1h1v-1Z", fill: secondaryColorsTransformed[2] };
          const tmp38 = React4(inlineStyles.Path, obj7);
          cResult[21] = secondaryColorsTransformed[2];
          cResult[22] = tmp38;
          let tmp36 = tmp38;
        } else {
          tmp36 = cResult[22];
        }
        const _Symbol3 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp41 = React4(inlineStyles.Path, { d: "M5 4H4v1h1V4Z", fill: "#000" });
          cResult[23] = tmp41;
          let tmp39 = tmp41;
        } else {
          tmp39 = cResult[23];
        }
        if (cResult[24] !== secondaryColorsTransformed[1]) {
          const obj8 = { d: "M5 2H2v3h2V4h1V2ZM14 5V2h-3v2h1v1h2Z", fill: secondaryColorsTransformed[1] };
          const tmp44 = React4(inlineStyles.Path, obj8);
          cResult[24] = secondaryColorsTransformed[1];
          cResult[25] = tmp44;
          let tmp42 = tmp44;
        } else {
          tmp42 = cResult[25];
        }
        if (cResult[26] !== secondaryColorsTransformed[0]) {
          const obj9 = {
            d: "M5 2H4v2h1V2ZM4 4H3v1h1V4ZM14 3h-1v2h1V3ZM15 2h-1v1h1V2Z",
            fill: secondaryColorsTransformed[0],
          };
          const tmp47 = React4(inlineStyles.Path, obj9);
          cResult[26] = secondaryColorsTransformed[0];
          cResult[27] = tmp47;
          let tmp45 = tmp47;
        } else {
          tmp45 = cResult[27];
        }
        if (cResult[28] !== secondaryColorsTransformed[1]) {
          const obj10 = { d: "M13 15v-1h-2v-2h1v-1h2v2h1v2h-2Z", fill: secondaryColorsTransformed[1] };
          const tmp50 = React4(inlineStyles.Path, obj10);
          cResult[28] = secondaryColorsTransformed[1];
          cResult[29] = tmp50;
          let tmp48 = tmp50;
        } else {
          tmp48 = cResult[29];
        }
        if (cResult[30] !== secondaryColorsTransformed[0]) {
          const obj11 = { d: "M15 13h-1v1h1v-1ZM14 11h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] };
          const tmp53 = React4(inlineStyles.Path, obj11);
          cResult[30] = secondaryColorsTransformed[0];
          cResult[31] = tmp53;
          let tmp51 = tmp53;
        } else {
          tmp51 = cResult[31];
        }
        const _Symbol4 = Symbol;
        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp56 = React4(inlineStyles.Path, {
            d: "M2 6H1v1h1V6ZM16 7h-1v2h1V7ZM15 6h-1v1h1V6ZM10 1H9v1h1V1ZM12 4h-1v1h1V4ZM9 0H7v1h2V0Z",
            fill: "#000",
          });
          cResult[32] = tmp56;
          let tmp54 = tmp56;
        } else {
          tmp54 = cResult[32];
        }
        if (cResult[33] !== primaryColorsTransformed[3]) {
          const obj12 = { d: "M9 1H7v1h2V1ZM9 7H7v2h2V7Z", fill: primaryColorsTransformed[3] };
          const tmp59 = React4(inlineStyles.Path, obj12);
          cResult[33] = primaryColorsTransformed[3];
          cResult[34] = tmp59;
          let tmp57 = tmp59;
        } else {
          tmp57 = cResult[34];
        }
        if (cResult[35] !== secondaryColorsTransformed[2]) {
          const obj13 = { d: "M15 1h-2v1h2V1ZM13 2h-2v1h2V2Z", fill: secondaryColorsTransformed[2] };
          const tmp62 = React4(inlineStyles.Path, obj13);
          cResult[35] = secondaryColorsTransformed[2];
          cResult[36] = tmp62;
          let tmp60 = tmp62;
        } else {
          tmp60 = cResult[36];
        }
        const _Symbol5 = Symbol;
        if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp65 = React4(inlineStyles.Path, {
            d: "M9 5H7v1h2V5ZM9 10H7v1h2v-1ZM15 0h-2v1h2V0ZM13 1h-2v1h2V1ZM14 5h-2v1h2V5ZM3 15H1v1h2v-1ZM5 14H3v1h2v-1ZM4 10H2v1h2v-1ZM1 13H0v2h1v-2ZM16 13h-1v2h1v-2ZM15 11h-1v2h1v-2ZM2 11H1v2h1v-2ZM6 12H5v2h1v-2ZM11 12h-1v2h1v-2ZM7 14H6v1h1v-1ZM5 11H4v1h1v-1Z",
            fill: "#000",
          });
          cResult[37] = tmp65;
          let tmp63 = tmp65;
        } else {
          tmp63 = cResult[37];
        }
        if (cResult[38] !== secondaryColorsTransformed[0]) {
          const obj14 = { d: "M5 12H4v2h1v-2ZM4 11H3v1h1v-1Z", fill: secondaryColorsTransformed[0] };
          const tmp68 = React4(inlineStyles.Path, obj14);
          cResult[38] = secondaryColorsTransformed[0];
          cResult[39] = tmp68;
          let tmp66 = tmp68;
        } else {
          tmp66 = cResult[39];
        }
        const _Symbol6 = Symbol;
        if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp71 = React4(inlineStyles.Path, {
            d: "M2 9H1v1h1V9ZM5 7H4v2h1V7ZM7 6H5v1h2V6ZM7 9H5v1h2V9ZM12 7h-1v2h1V7ZM11 6H9v1h2V6ZM11 9H9v1h2V9ZM15 9h-1v1h1V9Z",
            fill: "#000",
          });
          cResult[40] = tmp71;
          let tmp69 = tmp71;
        } else {
          tmp69 = cResult[40];
        }
        if (cResult[41] !== primaryColorsTransformed[0]) {
          const obj15 = {
            d: "M15 7h-1v2h1V7ZM14 6h-1v1h1V6ZM14 9h-1v1h1V9ZM12 9h-1v1h1V9ZM9 11H7v1h2v-1ZM10 10H9v1h1v-1ZM7 10H6v1h1v-1ZM9 14H7v1h2v-1ZM10 13H9v1h1v-1ZM7 13H6v1h1v-1ZM5 9H4v1h1V9ZM2 8H1v1h1V8ZM3 9H2v1h1V9Z",
            fill: primaryColorsTransformed[0],
          };
          const tmp74 = React4(inlineStyles.Path, obj15);
          cResult[41] = primaryColorsTransformed[0];
          cResult[42] = tmp74;
          let tmp72 = tmp74;
        } else {
          tmp72 = cResult[42];
        }
        const _Symbol7 = Symbol;
        if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp77 = React4(inlineStyles.Path, {
            d: "M10 14H9v1h1v-1ZM12 11h-1v1h1v-1ZM9 15H7v1h2v-1ZM15 15h-2v1h2v-1ZM13 14h-2v1h2v-1ZM14 10h-2v1h2v-1Z",
            fill: "#000",
          });
          cResult[43] = tmp77;
          let tmp75 = tmp77;
        } else {
          tmp75 = cResult[43];
        }
        if (cResult[44] === num8) {
          if (cResult[45] === tmp5) {
            if (cResult[46] === tmp33) {
              if (cResult[47] === tmp36) {
                if (cResult[48] === tmp42) {
                  if (cResult[49] === tmp45) {
                    if (cResult[50] === tmp48) {
                      if (cResult[51] === tmp51) {
                        if (cResult[52] === tmp57) {
                          if (cResult[53] === tmp60) {
                            if (cResult[54] === tmp66) {
                              if (cResult[55] === tmp72) {
                                if (cResult[56] === tmp14) {
                                  if (cResult[57] === tmp17) {
                                    if (cResult[58] === tmp24) {
                                      if (cResult[59] === tmp30) {
                                        if (cResult[60] === num7) {
                                          let tmp78 = cResult[61];
                                        }
                                        return tmp78;
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
        const obj16 = {};
        const merged = Object.assign(tmp5);
        obj16.width = num7;
        obj16.height = num8;
        obj16.viewBox = "0 0 16 16";
        obj16.fill = "none";
        items = [
          tmp14,
          tmp17,
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
        ];
        obj16.children = items;
        const tmp83 = hasOwnProperty(inlineStyles.Svg, obj16);
        cResult[44] = num8;
        cResult[45] = tmp5;
        cResult[46] = tmp33;
        cResult[47] = tmp36;
        cResult[48] = tmp42;
        cResult[49] = tmp45;
        cResult[50] = tmp48;
        cResult[51] = tmp51;
        cResult[52] = tmp57;
        cResult[53] = tmp60;
        cResult[54] = tmp66;
        cResult[55] = tmp72;
        cResult[56] = tmp14;
        cResult[57] = tmp17;
        cResult[58] = tmp24;
        cResult[59] = tmp30;
        cResult[60] = num7;
        cResult[61] = tmp83;
        tmp78 = tmp83;
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
      const obj17 = {
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
  : function GuildBadgeSound(width) {
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
          d: "M14 7V6h-2V5h-1V4h-1V2H9V1H7v1H6v2H5v1H4v1H2v1H1v2h1v1h2v1h1v1h1v2h1v1h2v-1h1v-2h1v-1h1v-1h2V9h1V7h-1Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M11 7H9V6H7v1H5v2h2v1h2V9h2V7Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M3 0H1v1h2V0ZM5 1H3v1h2V1ZM4 5H2v1h2V5ZM1 1H0v2h1V1Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M3 1H1v2h1V2h1V1Z", fill: secondaryColorsTransformed[2] }),
        React4(inlineStyles.Path, {
          d: "M1 7H0v2h1V7ZM16 1h-1v2h1V1ZM15 3h-1v2h1V3ZM2 3H1v2h1V3ZM6 2H5v2h1V2ZM11 2h-1v2h1V2ZM7 1H6v1h1V1Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, {
          d: "M7 2H6v1h1V2ZM8 3H7v1h1V3ZM5 5H4v1h1V5ZM3 6H2v1h1V6ZM2 7H1v1h1V7Z",
          fill: primaryColorsTransformed[3],
        }),
        React4(inlineStyles.Path, { d: "M3 15v-1h2v-2H4v-1H2v2H1v2h2Z", fill: secondaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M2 13H1v1h1v-1Z", fill: secondaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M5 4H4v1h1V4Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M5 2H2v3h2V4h1V2ZM14 5V2h-3v2h1v1h2Z", fill: secondaryColorsTransformed[1] }),
        React4(inlineStyles.Path, {
          d: "M5 2H4v2h1V2ZM4 4H3v1h1V4ZM14 3h-1v2h1V3ZM15 2h-1v1h1V2Z",
          fill: secondaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, { d: "M13 15v-1h-2v-2h1v-1h2v2h1v2h-2Z", fill: secondaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M15 13h-1v1h1v-1ZM14 11h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] }),
        React4(inlineStyles.Path, {
          d: "M2 6H1v1h1V6ZM16 7h-1v2h1V7ZM15 6h-1v1h1V6ZM10 1H9v1h1V1ZM12 4h-1v1h1V4ZM9 0H7v1h2V0Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M9 1H7v1h2V1ZM9 7H7v2h2V7Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M15 1h-2v1h2V1ZM13 2h-2v1h2V2Z", fill: secondaryColorsTransformed[2] }),
        React4(inlineStyles.Path, {
          d: "M9 5H7v1h2V5ZM9 10H7v1h2v-1ZM15 0h-2v1h2V0ZM13 1h-2v1h2V1ZM14 5h-2v1h2V5ZM3 15H1v1h2v-1ZM5 14H3v1h2v-1ZM4 10H2v1h2v-1ZM1 13H0v2h1v-2ZM16 13h-1v2h1v-2ZM15 11h-1v2h1v-2ZM2 11H1v2h1v-2ZM6 12H5v2h1v-2ZM11 12h-1v2h1v-2ZM7 14H6v1h1v-1ZM5 11H4v1h1v-1Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M5 12H4v2h1v-2ZM4 11H3v1h1v-1Z", fill: secondaryColorsTransformed[0] }),
        React4(inlineStyles.Path, {
          d: "M2 9H1v1h1V9ZM5 7H4v2h1V7ZM7 6H5v1h2V6ZM7 9H5v1h2V9ZM12 7h-1v2h1V7ZM11 6H9v1h2V6ZM11 9H9v1h2V9ZM15 9h-1v1h1V9Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, {
          d: "M15 7h-1v2h1V7ZM14 6h-1v1h1V6ZM14 9h-1v1h1V9ZM12 9h-1v1h1V9ZM9 11H7v1h2v-1ZM10 10H9v1h1v-1ZM7 10H6v1h1v-1ZM9 14H7v1h2v-1ZM10 13H9v1h1v-1ZM7 13H6v1h1v-1ZM5 9H4v1h1V9ZM2 8H1v1h1V8ZM3 9H2v1h1V9Z",
          fill: primaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, {
          d: "M10 14H9v1h1v-1ZM12 11h-1v1h1v-1ZM9 15H7v1h2v-1ZM15 15h-2v1h2v-1ZM13 14h-2v1h2v-1ZM14 10h-2v1h2v-1Z",
          fill: "#000",
        }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
