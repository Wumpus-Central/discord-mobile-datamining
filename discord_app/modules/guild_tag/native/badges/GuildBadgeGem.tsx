// discord_app/modules/guild_tag/native/badges/GuildBadgeGem.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07559_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#ff1c90", "#ff7fc0", "#ffa5d3", "#f0f0f0"];
const secondaryBaseColors = ["#816bee", "#b79cf8", "#cdbafa", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.3, 0.5, 0.9];
let items = [
  { base: 8, tint: 1 },
  { base: 4, tint: 1 },
  { base: 3, tint: 1 },
  { base: 4, tint: 1 },
];
const secondaryTintLuminances = [0.1, 0.3, 0.5, 0.9];
const items1 = [
  { base: 8, tint: 1 },
  { base: 4, tint: 1 },
  { base: 3, tint: 1 },
  { base: 4, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeGem.tsx");

export const GuildBadgeGem = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgeGem(arg0) {
      const cResult = c.c(54);
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
        if (cResult[9] !== secondaryColorsTransformed[1]) {
          const obj2 = {
            d: "M13 8v1h-1v1h-1V3h-1V2H9V1H8v14h6v-1h-2v-1h1v-1h1v-1h1V8h-2Z",
            fill: secondaryColorsTransformed[1],
          };
          const tmp16 = React4(inlineStyles.Path, obj2);
          cResult[9] = secondaryColorsTransformed[1];
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] !== primaryColorsTransformed[1]) {
          const obj3 = { d: "M7 1v1H6v1H5v8H3v-1H1v4h1v1h6V1H7Z", fill: primaryColorsTransformed[1] };
          const tmp19 = React4(inlineStyles.Path, obj3);
          cResult[11] = primaryColorsTransformed[1];
          cResult[12] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp23 = React4(inlineStyles.Path, { d: "M9 0H7v1h2V0ZM7 1H6v1h1V1Z", fill: "#000" });
          cResult[13] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        if (cResult[14] !== primaryColorsTransformed[3]) {
          const obj4 = { d: "M9 1H7v1h2V1ZM7 2H6v1h1V2ZM7 6H6v1h1V6Z", fill: primaryColorsTransformed[3] };
          const tmp26 = React4(inlineStyles.Path, obj4);
          cResult[14] = primaryColorsTransformed[3];
          cResult[15] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[15];
        }
        if (cResult[16] !== primaryColorsTransformed[2]) {
          const obj5 = { d: "M5 12H4v1h1v-1Z", fill: primaryColorsTransformed[2] };
          const tmp29 = React4(inlineStyles.Path, obj5);
          cResult[16] = primaryColorsTransformed[2];
          cResult[17] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[17];
        }
        if (cResult[18] !== primaryColorsTransformed[0]) {
          const obj6 = { d: "M6 12H5v1h1v-1ZM2 13H1v1h1v-1ZM8 14H2v1h6v-1Z", fill: primaryColorsTransformed[0] };
          const tmp32 = React4(inlineStyles.Path, obj6);
          cResult[18] = primaryColorsTransformed[0];
          cResult[19] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[19];
        }
        if (cResult[20] !== primaryColorsTransformed[2]) {
          const obj7 = {
            d: "M4 13H3v1h1v-1ZM3 12H2v1h1v-1ZM6 10V8H5v3h1v3h1v-4H6ZM7 2v3H6v1h1v3h1V2H7Z",
            fill: primaryColorsTransformed[2],
          };
          const tmp35 = React4(inlineStyles.Path, obj7);
          cResult[20] = primaryColorsTransformed[2];
          cResult[21] = tmp35;
          let tmp33 = tmp35;
        } else {
          tmp33 = cResult[21];
        }
        if (cResult[22] !== secondaryColorsTransformed[3]) {
          const obj8 = { d: "M14 8h-1v1h1V8ZM13 9h-1v1h1V9Z", fill: secondaryColorsTransformed[3] };
          const tmp38 = React4(inlineStyles.Path, obj8);
          cResult[22] = secondaryColorsTransformed[3];
          cResult[23] = tmp38;
          let tmp36 = tmp38;
        } else {
          tmp36 = cResult[23];
        }
        if (cResult[24] !== primaryColorsTransformed[3]) {
          const obj9 = { d: "M5 11H3v1h2v-1ZM3 10H1v1h2v-1Z", fill: primaryColorsTransformed[3] };
          const tmp42 = React4(inlineStyles.Path, obj9);
          const obj10 = { d: "M2 12v-2H1v2h1Z", fill: primaryColorsTransformed[3] };
          const tmp43 = React4(inlineStyles.Path, obj10);
          cResult[24] = primaryColorsTransformed[3];
          cResult[25] = tmp42;
          cResult[26] = tmp43;
          let tmp40 = tmp43;
          let tmp39 = tmp42;
        } else {
          tmp39 = cResult[25];
          tmp40 = cResult[26];
        }
        if (cResult[27] !== secondaryColorsTransformed[2]) {
          const obj11 = { d: "M11 3h-1v1h1V3Z", fill: secondaryColorsTransformed[2] };
          const tmp46 = React4(inlineStyles.Path, obj11);
          cResult[27] = secondaryColorsTransformed[2];
          cResult[28] = tmp46;
          let tmp44 = tmp46;
        } else {
          tmp44 = cResult[28];
        }
        if (cResult[29] !== primaryColorsTransformed[3]) {
          const obj12 = { d: "M6 3H5v3h1V3Z", fill: primaryColorsTransformed[3] };
          const tmp49 = React4(inlineStyles.Path, obj12);
          cResult[29] = primaryColorsTransformed[3];
          cResult[30] = tmp49;
          let tmp47 = tmp49;
        } else {
          tmp47 = cResult[30];
        }
        const _Symbol2 = Symbol;
        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp53 = React4(inlineStyles.Path, {
            d: "M10 1H9v1h1V1ZM11 2h-1v1h1V2ZM6 11H5v1h1v-1ZM15 11h-1v1h1v-1ZM13 12v1h-1v1h2v-2h-1ZM14 14v1H2v1h13v-2h-1ZM2 14H1v1h1v-1ZM16 7h-3v1h3V7ZM3 9H0v1h3V9Z",
            fill: "#000",
          });
          const tmp54 = React4(inlineStyles.Path, {
            d: "M1 14V9H0v5h1ZM16 11V8h-1v3h1ZM6 2H5v1h1V2ZM4 3v7H3v1h2V3H4ZM12 8V3h-1v7h1V9h1V8h-1Z",
            fill: "#000",
          });
          cResult[31] = tmp53;
          cResult[32] = tmp54;
          let tmp51 = tmp54;
          let tmp50 = tmp53;
        } else {
          tmp50 = cResult[31];
          tmp51 = cResult[32];
        }
        if (cResult[33] !== secondaryColorsTransformed[2]) {
          const obj13 = {
            d: "M9 2H8v2h1V2ZM10 6V4H9v4h1v1h1V6h-1ZM12 10h-1v1h1v-1ZM9 10H8v3h1v-3ZM11 13h-1v1h1v-1ZM11 11h-1v1h1v-1ZM12 12h-1v1h1v-1Z",
            fill: secondaryColorsTransformed[2],
          };
          const tmp57 = React4(inlineStyles.Path, obj13);
          cResult[33] = secondaryColorsTransformed[2];
          cResult[34] = tmp57;
          let tmp55 = tmp57;
        } else {
          tmp55 = cResult[34];
        }
        if (cResult[35] !== secondaryColorsTransformed[0]) {
          const obj14 = {
            d: "M12 14v-1h-1v1H8v1h6v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1Z",
            fill: secondaryColorsTransformed[0],
          };
          const tmp60 = React4(inlineStyles.Path, obj14);
          cResult[35] = secondaryColorsTransformed[0];
          cResult[36] = tmp60;
          let tmp58 = tmp60;
        } else {
          tmp58 = cResult[36];
        }
        if (cResult[37] === num8) {
          if (cResult[38] === tmp5) {
            if (cResult[39] === tmp33) {
              if (cResult[40] === tmp36) {
                if (cResult[41] === tmp39) {
                  if (cResult[42] === tmp40) {
                    if (cResult[43] === tmp44) {
                      if (cResult[44] === tmp47) {
                        if (cResult[45] === tmp55) {
                          if (cResult[46] === tmp58) {
                            if (cResult[47] === tmp14) {
                              if (cResult[48] === tmp17) {
                                if (cResult[49] === tmp24) {
                                  if (cResult[50] === tmp27) {
                                    if (cResult[51] === tmp30) {
                                      if (cResult[52] === num7) {
                                        let tmp61 = cResult[53];
                                      }
                                      return tmp61;
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
        const obj15 = {};
        const merged = Object.assign(tmp5);
        obj15.width = num7;
        obj15.height = num8;
        obj15.viewBox = "0 0 16 16";
        obj15.fill = "none";
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
          tmp40,
          tmp44,
          tmp47,
          tmp50,
          tmp51,
          tmp55,
          tmp58,
        ];
        obj15.children = items;
        const tmp66 = hasOwnProperty(inlineStyles.Svg, obj15);
        cResult[37] = num8;
        cResult[38] = tmp5;
        cResult[39] = tmp33;
        cResult[40] = tmp36;
        cResult[41] = tmp39;
        cResult[42] = tmp40;
        cResult[43] = tmp44;
        cResult[44] = tmp47;
        cResult[45] = tmp55;
        cResult[46] = tmp58;
        cResult[47] = tmp14;
        cResult[48] = tmp17;
        cResult[49] = tmp24;
        cResult[50] = tmp27;
        cResult[51] = tmp30;
        cResult[52] = num7;
        cResult[53] = tmp66;
        tmp61 = tmp66;
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
      const obj16 = {
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
  : function GuildBadgeGem(width) {
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
          d: "M13 8v1h-1v1h-1V3h-1V2H9V1H8v14h6v-1h-2v-1h1v-1h1v-1h1V8h-2Z",
          fill: secondaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M7 1v1H6v1H5v8H3v-1H1v4h1v1h6V1H7Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M9 0H7v1h2V0ZM7 1H6v1h1V1Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M9 1H7v1h2V1ZM7 2H6v1h1V2ZM7 6H6v1h1V6Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M5 12H4v1h1v-1Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, {
          d: "M6 12H5v1h1v-1ZM2 13H1v1h1v-1ZM8 14H2v1h6v-1Z",
          fill: primaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, {
          d: "M4 13H3v1h1v-1ZM3 12H2v1h1v-1ZM6 10V8H5v3h1v3h1v-4H6ZM7 2v3H6v1h1v3h1V2H7Z",
          fill: primaryColorsTransformed[2],
        }),
        React4(inlineStyles.Path, { d: "M14 8h-1v1h1V8ZM13 9h-1v1h1V9Z", fill: secondaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M5 11H3v1h2v-1ZM3 10H1v1h2v-1Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M2 12v-2H1v2h1Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, { d: "M11 3h-1v1h1V3Z", fill: secondaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M6 3H5v3h1V3Z", fill: primaryColorsTransformed[3] }),
        React4(inlineStyles.Path, {
          d: "M10 1H9v1h1V1ZM11 2h-1v1h1V2ZM6 11H5v1h1v-1ZM15 11h-1v1h1v-1ZM13 12v1h-1v1h2v-2h-1ZM14 14v1H2v1h13v-2h-1ZM2 14H1v1h1v-1ZM16 7h-3v1h3V7ZM3 9H0v1h3V9Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, {
          d: "M1 14V9H0v5h1ZM16 11V8h-1v3h1ZM6 2H5v1h1V2ZM4 3v7H3v1h2V3H4ZM12 8V3h-1v7h1V9h1V8h-1Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, {
          d: "M9 2H8v2h1V2ZM10 6V4H9v4h1v1h1V6h-1ZM12 10h-1v1h1v-1ZM9 10H8v3h1v-3ZM11 13h-1v1h1v-1ZM11 11h-1v1h1v-1ZM12 12h-1v1h1v-1Z",
          fill: secondaryColorsTransformed[2],
        }),
        React4(inlineStyles.Path, {
          d: "M12 14v-1h-1v1H8v1h6v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1Z",
          fill: secondaryColorsTransformed[0],
        }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
