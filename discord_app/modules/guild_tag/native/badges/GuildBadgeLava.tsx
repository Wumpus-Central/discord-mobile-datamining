// discord_app/modules/guild_tag/native/badges/GuildBadgeLava.tsx
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
const primaryBaseColors = ["#ba3500", "#fd6214", "#ffb84b", "#f0f0f0"];
const secondaryBaseColors = ["#35363a", "#57595f", "#d8d8d8"];
const primaryTintLuminances = [0.05, 0.15, 0.4, 0.9];
let items = [
  { base: 8, tint: 1 },
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
  { base: 8, tint: 1 },
];
const secondaryTintLuminances = [0.05, 0.3, 0.95];
const items1 = [
  { base: 2, tint: 1 },
  { base: 4, tint: 1 },
  { base: 4, tint: 1 },
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
      const cResult = obj.c(57);
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
        let tmp18;
        let tmp21;
        let tmp24;
        let tmp27;
        let tmp30;
        let tmp33;
        let tmp36;
        let tmp39;
        let tmp42;
        let tmp45;
        let tmp48;
        let tmp51;
        let tmp54;
        let tmp57;
        let tmp60;
        let tmp63;
        let tmp67;
        let tmp66;
        if (cResult[7] === tmp6) {
          tmp12 = cResult[8];
        }
        ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
        if (cResult[9] !== primaryColorsTransformed[2]) {
          const obj2 = {
            d: "M14 7V6h-1v1h-3V6H9V3h1V2H7v4H6v1H1v2h1v1h1V9h3v1h1v3H6v1h1v1h2v-1h1v-1H9v-3h1V9h3v1h1V9h1V7h-1Z",
            fill: primaryColorsTransformed[2],
          };
          const tmp16 = React3(inlineStyles.Path, obj2);
          cResult[9] = primaryColorsTransformed[2];
          cResult[10] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp20 = React3(inlineStyles.Path, {
            d: "M9 0H7v1h2V0ZM6 2H3v1h3V2ZM3 3H2v3h1V3ZM7 3H6v3h1V3ZM10 3H9v3h1V3ZM14 3h-1v3h1V3ZM13 2h-3v1h3V2ZM6 6H3v1h3V6ZM13 6h-3v1h3V6ZM7 1H6v1h1V1Z",
            fill: "#000",
          });
          cResult[11] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[11];
        }
        if (cResult[12] !== secondaryColorsTransformed[1]) {
          const obj3 = {
            d: "M6 3H5v1h1V3ZM5 4H4v1h1V4ZM13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM13 10h-1v1h1v-1ZM12 11h-1v1h1v-1ZM6 10H5v1h1v-1ZM5 11H4v1h1v-1Z",
            fill: secondaryColorsTransformed[1],
          };
          const tmp23 = React3(inlineStyles.Path, obj3);
          cResult[12] = secondaryColorsTransformed[1];
          cResult[13] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp26 = React3(inlineStyles.Path, { d: "M10 1H9v1h1V1ZM1 7H0v2h1V7Z", fill: "#000" });
          cResult[14] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[14];
        }
        if (cResult[15] !== secondaryColorsTransformed[0]) {
          const obj4 = {
            d: "M5 4v1H3v1h3V4H5ZM12 4v1h-2v1h3V4h-1ZM5 11v1H3v1h3v-2H5ZM12 11v1h-2v1h3v-2h-1Z",
            fill: secondaryColorsTransformed[0],
          };
          const tmp29 = React3(inlineStyles.Path, obj4);
          cResult[15] = secondaryColorsTransformed[0];
          cResult[16] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[16];
        }
        const _Symbol3 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp32 = React3(inlineStyles.Path, { d: "M2 9H1v1h1V9ZM2 6H1v1h1V6ZM16 7h-1v2h1V7Z", fill: "#000" });
          cResult[17] = tmp32;
          tmp30 = tmp32;
        } else {
          tmp30 = cResult[17];
        }
        if (cResult[18] !== primaryColorsTransformed[0]) {
          const obj5 = { d: "M15 7h-1v2h1V7Z", fill: primaryColorsTransformed[0] };
          const tmp35 = React3(inlineStyles.Path, obj5);
          cResult[18] = primaryColorsTransformed[0];
          cResult[19] = tmp35;
          tmp33 = tmp35;
        } else {
          tmp33 = cResult[19];
        }
        if (cResult[20] !== primaryColorsTransformed[3]) {
          const obj6 = { d: "M2 7H1v2h1V7Z", fill: primaryColorsTransformed[3] };
          const tmp38 = React3(inlineStyles.Path, obj6);
          cResult[20] = primaryColorsTransformed[3];
          cResult[21] = tmp38;
          tmp36 = tmp38;
        } else {
          tmp36 = cResult[21];
        }
        const _Symbol4 = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp41 = React3(inlineStyles.Path, { d: "M15 6h-1v1h1V6ZM15 9h-1v1h1V9Z", fill: "#000" });
          cResult[22] = tmp41;
          tmp39 = tmp41;
        } else {
          tmp39 = cResult[22];
        }
        if (cResult[23] !== primaryColorsTransformed[0]) {
          const obj7 = {
            d: "M14 9h-1v1h1V9ZM7 9H6v1h1V9ZM3 9H2v1h1V9ZM10 9H9v1h1V9Z",
            fill: primaryColorsTransformed[0],
          };
          const tmp44 = React3(inlineStyles.Path, obj7);
          cResult[23] = primaryColorsTransformed[0];
          cResult[24] = tmp44;
          tmp42 = tmp44;
        } else {
          tmp42 = cResult[24];
        }
        const _Symbol5 = Symbol;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp47 = React3(inlineStyles.Path, {
            d: "M9 15H7v1h2v-1ZM6 13H3v1h3v-1ZM3 10H2v3h1v-3ZM7 10H6v3h1v-3ZM10 10H9v3h1v-3ZM14 10h-1v3h1v-3ZM13 13h-3v1h3v-1ZM6 9H3v1h3V9ZM13 9h-3v1h3V9Z",
            fill: "#000",
          });
          cResult[25] = tmp47;
          tmp45 = tmp47;
        } else {
          tmp45 = cResult[25];
        }
        if (cResult[26] !== primaryColorsTransformed[0]) {
          const obj8 = { d: "M6 8H3v1h3V8ZM13 8h-3v1h3V8Z", fill: primaryColorsTransformed[0] };
          const tmp50 = React3(inlineStyles.Path, obj8);
          cResult[26] = primaryColorsTransformed[0];
          cResult[27] = tmp50;
          tmp48 = tmp50;
        } else {
          tmp48 = cResult[27];
        }
        const _Symbol6 = Symbol;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp53 = React3(inlineStyles.Path, { d: "M7 14H6v1h1v-1ZM10 14H9v1h1v-1Z", fill: "#000" });
          cResult[28] = tmp53;
          tmp51 = tmp53;
        } else {
          tmp51 = cResult[28];
        }
        if (cResult[29] !== primaryColorsTransformed[0]) {
          const obj9 = { d: "M9 14H7v1h2v-1Z", fill: primaryColorsTransformed[0] };
          const tmp56 = React3(inlineStyles.Path, obj9);
          cResult[29] = primaryColorsTransformed[0];
          cResult[30] = tmp56;
          tmp54 = tmp56;
        } else {
          tmp54 = cResult[30];
        }
        if (cResult[31] !== primaryColorsTransformed[3]) {
          const obj10 = { d: "M9 1H7v1h2V1ZM7 2H6v1h1V1Z", fill: primaryColorsTransformed[3] };
          const tmp59 = React3(inlineStyles.Path, obj10);
          cResult[31] = primaryColorsTransformed[3];
          cResult[32] = tmp59;
          tmp57 = tmp59;
        } else {
          tmp57 = cResult[32];
        }
        if (cResult[33] !== primaryColorsTransformed[0]) {
          const obj11 = { d: "M10 13H9v1h1v-1Z", fill: primaryColorsTransformed[0] };
          const tmp62 = React3(inlineStyles.Path, obj11);
          cResult[33] = primaryColorsTransformed[0];
          cResult[34] = tmp62;
          tmp60 = tmp62;
        } else {
          tmp60 = cResult[34];
        }
        if (cResult[35] !== secondaryColorsTransformed[2]) {
          const obj12 = {
            d: "M5 3H3v2h1V4h1V3ZM12 3h-2v2h1V4h1V3ZM5 10H3v2h1v-1h1v-1ZM12 10h-2v2h1v-1h1v-1Z",
            fill: secondaryColorsTransformed[2],
          };
          const tmp65 = React3(inlineStyles.Path, obj12);
          cResult[35] = secondaryColorsTransformed[2];
          cResult[36] = tmp65;
          tmp63 = tmp65;
        } else {
          tmp63 = cResult[36];
        }
        if (cResult[37] !== primaryColorsTransformed[1]) {
          const obj13 = {
            d: "M9 5V4H8V2H7v3h2ZM9 6H8v1H7v1H6v1h1v2h1v3h1v-4H8V8h2V7H9V6ZM14 7h-1v1h1V7Z",
            fill: primaryColorsTransformed[1],
          };
          const tmp69 = React3(inlineStyles.Path, obj13);
          const obj14 = { d: "M7 6H6v1h1V6ZM3 7H2v1h1V7ZM5 7H4v1h1V7Z", fill: primaryColorsTransformed[1] };
          const tmp70 = React3(inlineStyles.Path, obj14);
          cResult[37] = primaryColorsTransformed[1];
          cResult[38] = tmp69;
          cResult[39] = tmp70;
          tmp67 = tmp70;
          tmp66 = tmp69;
        } else {
          tmp66 = cResult[38];
          tmp67 = cResult[39];
        }
        if (cResult[40] === num8) {
          if (cResult[41] === tmp5) {
            if (cResult[42] === tmp33) {
              if (cResult[43] === tmp36) {
                if (cResult[44] === tmp42) {
                  if (cResult[45] === tmp48) {
                    if (cResult[46] === tmp54) {
                      if (cResult[47] === tmp57) {
                        if (cResult[48] === tmp60) {
                          if (cResult[49] === tmp63) {
                            if (cResult[50] === tmp66) {
                              if (cResult[51] === tmp67) {
                                if (cResult[52] === tmp14) {
                                  if (cResult[53] === tmp21) {
                                    if (cResult[54] === tmp27) {
                                      let tmp71;
                                      if (cResult[55] === num7) {
                                        tmp71 = cResult[56];
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
              }
            }
          }
        }
        const obj15 = { width: num7, height: num8, viewBox: "0 0 16 16", fill: "none", children: items };
        const Svg = inlineStyles.Svg;
        const merged = Object.assign(tmp5);
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
          tmp67,
        ];
        const tmp76 = hasOwnProperty(Svg, obj15);
        cResult[40] = num8;
        cResult[41] = tmp5;
        cResult[42] = tmp33;
        cResult[43] = tmp36;
        cResult[44] = tmp42;
        cResult[45] = tmp48;
        cResult[46] = tmp54;
        cResult[47] = tmp57;
        cResult[48] = tmp60;
        cResult[49] = tmp63;
        cResult[50] = tmp66;
        cResult[51] = tmp67;
        cResult[52] = tmp14;
        cResult[53] = tmp21;
        cResult[54] = tmp27;
        cResult[55] = num7;
        cResult[56] = tmp76;
        tmp71 = tmp76;
      }
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
      const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj16);
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
      items = [, , , , , , , , , , , , , , , , , ,];
      const obj4 = {
        d: "M14 7V6h-1v1h-3V6H9V3h1V2H7v4H6v1H1v2h1v1h1V9h3v1h1v3H6v1h1v1h2v-1h1v-1H9v-3h1V9h3v1h1V9h1V7h-1Z",
        fill: primaryColorsTransformed[2],
      };
      items[0] = React3(inlineStyles.Path, obj4);
      items[1] = React3(inlineStyles.Path, {
        d: "M9 0H7v1h2V0ZM6 2H3v1h3V2ZM3 3H2v3h1V3ZM7 3H6v3h1V3ZM10 3H9v3h1V3ZM14 3h-1v3h1V3ZM13 2h-3v1h3V2ZM6 6H3v1h3V6ZM13 6h-3v1h3V6ZM7 1H6v1h1V1Z",
        fill: "#000",
      });
      const obj5 = {
        d: "M6 3H5v1h1V3ZM5 4H4v1h1V4ZM13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM13 10h-1v1h1v-1ZM12 11h-1v1h1v-1ZM6 10H5v1h1v-1ZM5 11H4v1h1v-1Z",
        fill: secondaryColorsTransformed[1],
      };
      items[2] = React3(inlineStyles.Path, obj5);
      items[3] = React3(inlineStyles.Path, { d: "M10 1H9v1h1V1ZM1 7H0v2h1V7Z", fill: "#000" });
      const obj6 = {
        d: "M5 4v1H3v1h3V4H5ZM12 4v1h-2v1h3V4h-1ZM5 11v1H3v1h3v-2H5ZM12 11v1h-2v1h3v-2h-1Z",
        fill: secondaryColorsTransformed[0],
      };
      items[4] = React3(inlineStyles.Path, obj6);
      items[5] = React3(inlineStyles.Path, { d: "M2 9H1v1h1V9ZM2 6H1v1h1V6ZM16 7h-1v2h1V7Z", fill: "#000" });
      const obj7 = { d: "M15 7h-1v2h1V7Z", fill: primaryColorsTransformed[0] };
      items[6] = React3(inlineStyles.Path, obj7);
      const obj8 = { d: "M2 7H1v2h1V7Z", fill: primaryColorsTransformed[3] };
      items[7] = React3(inlineStyles.Path, obj8);
      items[8] = React3(inlineStyles.Path, { d: "M15 6h-1v1h1V6ZM15 9h-1v1h1V9Z", fill: "#000" });
      const obj9 = { d: "M14 9h-1v1h1V9ZM7 9H6v1h1V9ZM3 9H2v1h1V9ZM10 9H9v1h1V9Z", fill: primaryColorsTransformed[0] };
      items[9] = React3(inlineStyles.Path, obj9);
      items[10] = React3(inlineStyles.Path, {
        d: "M9 15H7v1h2v-1ZM6 13H3v1h3v-1ZM3 10H2v3h1v-3ZM7 10H6v3h1v-3ZM10 10H9v3h1v-3ZM14 10h-1v3h1v-3ZM13 13h-3v1h3v-1ZM6 9H3v1h3V9ZM13 9h-3v1h3V9Z",
        fill: "#000",
      });
      const obj10 = { d: "M6 8H3v1h3V8ZM13 8h-3v1h3V8Z", fill: primaryColorsTransformed[0] };
      items[11] = React3(inlineStyles.Path, obj10);
      items[12] = React3(inlineStyles.Path, { d: "M7 14H6v1h1v-1ZM10 14H9v1h1v-1Z", fill: "#000" });
      const obj11 = { d: "M9 14H7v1h2v-1Z", fill: primaryColorsTransformed[0] };
      items[13] = React3(inlineStyles.Path, obj11);
      const obj12 = { d: "M9 1H7v1h2V1ZM7 2H6v1h1V1Z", fill: primaryColorsTransformed[3] };
      items[14] = React3(inlineStyles.Path, obj12);
      const obj13 = { d: "M10 13H9v1h1v-1Z", fill: primaryColorsTransformed[0] };
      items[15] = React3(inlineStyles.Path, obj13);
      const obj14 = {
        d: "M5 3H3v2h1V4h1V3ZM12 3h-2v2h1V4h1V3ZM5 10H3v2h1v-1h1v-1ZM12 10h-2v2h1v-1h1v-1Z",
        fill: secondaryColorsTransformed[2],
      };
      items[16] = React3(inlineStyles.Path, obj14);
      const obj15 = {
        d: "M9 5V4H8V2H7v3h2ZM9 6H8v1H7v1H6v1h1v2h1v3h1v-4H8V8h2V7H9V6ZM14 7h-1v1h1V7Z",
        fill: primaryColorsTransformed[1],
      };
      items[17] = React3(inlineStyles.Path, obj15);
      const obj16 = { d: "M7 6H6v1h1V6ZM3 7H2v1h1V7ZM5 7H4v1h1V7Z", fill: primaryColorsTransformed[1] };
      items[18] = React3(inlineStyles.Path, obj16);
      return hasOwnProperty(Svg, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeLava.tsx");

export const GuildBadgeLava = tmp4;
