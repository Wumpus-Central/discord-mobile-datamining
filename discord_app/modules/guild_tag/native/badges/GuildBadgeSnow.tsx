// discord_app/modules/guild_tag/native/badges/GuildBadgeSnow.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/08136_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#4282D8", "#54cfff", "#f0f0f0"];
const secondaryBaseColors = ["#6c9ca6", "#9af4dc", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.35, 1];
let items = [
  { base: 8, tint: 1 },
  { base: 6, tint: 1 },
  { base: 8, tint: 1 },
];
const secondaryTintLuminances = [0.1, 0.6, 1];
const items1 = [
  { base: 4, tint: 1 },
  { base: 1, tint: 1 },
  { base: 8, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSnow.tsx");

export const GuildBadgeSnow = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(36);
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
            d: "M11 10h1V9h3V8h-3V7h-1V4h2V3h-3v1H7V3H6V2H4v1H3v1H2v1H1v6h1v1h1v1h1v-2h4v1H7v1h1v1h2v-1h3v-1h-2v-2Z",
            fill: primaryColorsTransformed[1],
          };
          const tmp16 = React4(inlineStyles.Path, obj2);
          cResult[9] = primaryColorsTransformed[1];
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] !== primaryColorsTransformed[0]) {
          const obj3 = {
            d: "M9 11H8v1h1v-1ZM13 12h-1v1h1v-1ZM15 8h-1v1h1V8ZM12 7h-1v1h1V7ZM3 10H2v1h1v-1ZM4 11H3v2h1v-2ZM10 13H7v1h3v-1ZM10 10H9v1h1v-1Z",
            fill: primaryColorsTransformed[0],
          };
          const tmp19 = React4(inlineStyles.Path, obj3);
          cResult[11] = primaryColorsTransformed[0];
          cResult[12] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp26 = React4(inlineStyles.Path, {
            d: "M9 0H8v1h1V0ZM10 1H9v1h1V1ZM8 1H4v1h4V1ZM4 2H3v1h1V2ZM7 2H6v1h1V2ZM8 3H7v1h1V3ZM10 3H9v1h1V3ZM13 2h-3v1h3V2ZM14 3h-1v1h1V3ZM3 3H2v1h1V3ZM2 4H1v1h1V4ZM1 5H0v6h1V5ZM3 6H2v4h1V6ZM4 5H3v1h1V5ZM9 4H4v1h5V4Z",
            fill: "#000",
          });
          const tmp27 = React4(inlineStyles.Path, { d: "M9 4H8v2h1V4ZM13 4h-2v1h2V4Z", fill: "#000" });
          const tmp28 = React4(inlineStyles.Path, {
            d: "M12 4h-1v3h1V4ZM15 7h-3v1h3V7ZM16 8h-1v1h1V8ZM10 6H9v4h1V6ZM15 9h-3v1h3V9ZM12 10h-1v2h1v-2Z",
            fill: "#000",
          });
          const tmp29 = React4(inlineStyles.Path, {
            d: "M13 11h-2v1h2v-1ZM14 12h-1v1h1v-1ZM13 13h-3v1h3v-1ZM10 14H6v1h4v-1ZM8 11H4v1h4v-1ZM6 15H5v1h1v-1ZM5 14H4v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM7 12H6v1h1v-1ZM3 12H2v1h1v-1ZM2 11H1v1h1v-1ZM4 10H3v1h1v-1ZM9 10H8v1h1v-1Z",
            fill: "#000",
          });
          cResult[13] = tmp26;
          cResult[14] = tmp27;
          cResult[15] = tmp28;
          cResult[16] = tmp29;
          let tmp24 = tmp29;
          let tmp23 = tmp28;
          let tmp22 = tmp27;
          let tmp21 = tmp26;
        } else {
          tmp21 = cResult[13];
          tmp22 = cResult[14];
          tmp23 = cResult[15];
          tmp24 = cResult[16];
        }
        if (cResult[17] !== secondaryColorsTransformed[1]) {
          const obj4 = { d: "M9 6H8V5H4v1H3v4h1v1h4v-1h1V6Z", fill: secondaryColorsTransformed[1] };
          const tmp32 = React4(inlineStyles.Path, obj4);
          cResult[17] = secondaryColorsTransformed[1];
          cResult[18] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[18];
        }
        if (cResult[19] !== secondaryColorsTransformed[0]) {
          const obj5 = { d: "M8 10H4v1h4v-1ZM4 9H3v1h1V9ZM9 9H8v1h1V9Z", fill: secondaryColorsTransformed[0] };
          const tmp35 = React4(inlineStyles.Path, obj5);
          cResult[19] = secondaryColorsTransformed[0];
          cResult[20] = tmp35;
          let tmp33 = tmp35;
        } else {
          tmp33 = cResult[20];
        }
        if (cResult[21] !== secondaryColorsTransformed[2]) {
          const obj6 = { d: "M4 6H3v1h1V6ZM6 7H5v1h1V7ZM8 5H4v1h4V5Z", fill: secondaryColorsTransformed[2] };
          const tmp38 = React4(inlineStyles.Path, obj6);
          cResult[21] = secondaryColorsTransformed[2];
          cResult[22] = tmp38;
          let tmp36 = tmp38;
        } else {
          tmp36 = cResult[22];
        }
        const _Symbol2 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp41 = React4(inlineStyles.Path, { d: "M8 13H7v1h1v-1Z", fill: "#000" });
          cResult[23] = tmp41;
          let tmp39 = tmp41;
        } else {
          tmp39 = cResult[23];
        }
        if (cResult[24] !== primaryColorsTransformed[2]) {
          const obj7 = {
            d: "M2 5H1v2h1V5ZM4 3H3v1h1V3ZM6 2H4v1h2V2ZM13 3h-3v1h3V3ZM9 1H8v1H7v1h1v1h1V3h1V2H9V1ZM6 12H5v1H4v1h1v1h1v-1h1v-1H6v-1Z",
            fill: primaryColorsTransformed[2],
          };
          const tmp44 = React4(inlineStyles.Path, obj7);
          cResult[24] = primaryColorsTransformed[2];
          cResult[25] = tmp44;
          let tmp42 = tmp44;
        } else {
          tmp42 = cResult[25];
        }
        if (cResult[26] === num8) {
          if (cResult[27] === tmp5) {
            if (cResult[28] === tmp30) {
              if (cResult[29] === tmp33) {
                if (cResult[30] === tmp36) {
                  if (cResult[31] === tmp42) {
                    if (cResult[32] === tmp14) {
                      if (cResult[33] === tmp17) {
                        if (cResult[34] === num7) {
                          let tmp45 = cResult[35];
                        }
                        return tmp45;
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
        items = [tmp14, tmp17, tmp21, tmp22, tmp23, tmp24, tmp30, tmp33, tmp36, tmp39, tmp42];
        obj8.children = items;
        const tmp50 = hasOwnProperty(inlineStyles.Svg, obj8);
        cResult[26] = num8;
        cResult[27] = tmp5;
        cResult[28] = tmp30;
        cResult[29] = tmp33;
        cResult[30] = tmp36;
        cResult[31] = tmp42;
        cResult[32] = tmp14;
        cResult[33] = tmp17;
        cResult[34] = num7;
        cResult[35] = tmp50;
        tmp45 = tmp50;
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
  : (width) => {
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
          d: "M11 10h1V9h3V8h-3V7h-1V4h2V3h-3v1H7V3H6V2H4v1H3v1H2v1H1v6h1v1h1v1h1v-2h4v1H7v1h1v1h2v-1h3v-1h-2v-2Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, {
          d: "M9 11H8v1h1v-1ZM13 12h-1v1h1v-1ZM15 8h-1v1h1V8ZM12 7h-1v1h1V7ZM3 10H2v1h1v-1ZM4 11H3v2h1v-2ZM10 13H7v1h3v-1ZM10 10H9v1h1v-1Z",
          fill: primaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, {
          d: "M9 0H8v1h1V0ZM10 1H9v1h1V1ZM8 1H4v1h4V1ZM4 2H3v1h1V2ZM7 2H6v1h1V2ZM8 3H7v1h1V3ZM10 3H9v1h1V3ZM13 2h-3v1h3V2ZM14 3h-1v1h1V3ZM3 3H2v1h1V3ZM2 4H1v1h1V4ZM1 5H0v6h1V5ZM3 6H2v4h1V6ZM4 5H3v1h1V5ZM9 4H4v1h5V4Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M9 4H8v2h1V4ZM13 4h-2v1h2V4Z", fill: "#000" }),
        React4(inlineStyles.Path, {
          d: "M12 4h-1v3h1V4ZM15 7h-3v1h3V7ZM16 8h-1v1h1V8ZM10 6H9v4h1V6ZM15 9h-3v1h3V9ZM12 10h-1v2h1v-2Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, {
          d: "M13 11h-2v1h2v-1ZM14 12h-1v1h1v-1ZM13 13h-3v1h3v-1ZM10 14H6v1h4v-1ZM8 11H4v1h4v-1ZM6 15H5v1h1v-1ZM5 14H4v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM7 12H6v1h1v-1ZM3 12H2v1h1v-1ZM2 11H1v1h1v-1ZM4 10H3v1h1v-1ZM9 10H8v1h1v-1Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M9 6H8V5H4v1H3v4h1v1h4v-1h1V6Z", fill: secondaryColorsTransformed[1] }),
        React4(inlineStyles.Path, {
          d: "M8 10H4v1h4v-1ZM4 9H3v1h1V9ZM9 9H8v1h1V9Z",
          fill: secondaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, {
          d: "M4 6H3v1h1V6ZM6 7H5v1h1V7ZM8 5H4v1h4V5Z",
          fill: secondaryColorsTransformed[2],
        }),
        React4(inlineStyles.Path, { d: "M8 13H7v1h1v-1Z", fill: "#000" }),
        React4(inlineStyles.Path, {
          d: "M2 5H1v2h1V5ZM4 3H3v1h1V3ZM6 2H4v1h2V2ZM13 3h-3v1h3V3ZM9 1H8v1H7v1h1v1h1V3h1V2H9V1ZM6 12H5v1H4v1h1v1h1v-1h1v-1H6v-1Z",
          fill: primaryColorsTransformed[2],
        }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
