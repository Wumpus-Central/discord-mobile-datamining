// discord_app/modules/guild_tag/native/badges/GuildBadgeToadstool.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#be0351", "#ff2c52"];
const secondaryBaseColors = ["#ffb84b", "#ffe361"];
const primaryTintLuminances = [0.12, 0.25];
let items = [
  { base: 5, tint: 1 },
  { base: 4, tint: 1 },
];
const secondaryTintLuminances = [0.4, 0.8];
const items1 = [
  { base: 5, tint: 1 },
  { base: 4, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeToadstool.tsx");

export const GuildBadgeToadstool = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(49);
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
          const obj2 = { d: "M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z", fill: secondaryColorsTransformed[1] };
          const tmp16 = React4(inlineStyles.Path, obj2);
          cResult[9] = secondaryColorsTransformed[1];
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] !== primaryColorsTransformed[1]) {
          const obj3 = { d: "M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z", fill: primaryColorsTransformed[1] };
          const tmp19 = React4(inlineStyles.Path, obj3);
          cResult[11] = primaryColorsTransformed[1];
          cResult[12] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp26 = React4(inlineStyles.Path, { d: "M12 0H4v1h8V0Z", fill: "#000" });
          const tmp27 = React4(inlineStyles.Path, { d: "M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z", fill: "#fff" });
          const tmp28 = React4(inlineStyles.Path, { d: "M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z", fill: "#000" });
          const tmp29 = React4(inlineStyles.Path, { d: "M2 7V3H1v6h2V7H2Z", fill: "#fff" });
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
        if (cResult[17] !== primaryColorsTransformed[0]) {
          const obj4 = { d: "M15 3h-1v6h1V3Z", fill: primaryColorsTransformed[0] };
          const tmp32 = React4(inlineStyles.Path, obj4);
          cResult[17] = primaryColorsTransformed[0];
          cResult[18] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[18];
        }
        const _Symbol2 = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp35 = React4(inlineStyles.Path, { d: "M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z", fill: "#fff" });
          cResult[19] = tmp35;
          let tmp33 = tmp35;
        } else {
          tmp33 = cResult[19];
        }
        if (cResult[20] !== primaryColorsTransformed[0]) {
          const obj5 = { opacity: 0.5, d: "M15 6h-1v2h1V6Z", fill: primaryColorsTransformed[0] };
          const tmp39 = React4(inlineStyles.Path, obj5);
          const obj6 = { d: "M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z", fill: primaryColorsTransformed[0] };
          const tmp40 = React4(inlineStyles.Path, obj6);
          cResult[20] = primaryColorsTransformed[0];
          cResult[21] = tmp39;
          cResult[22] = tmp40;
          let tmp37 = tmp40;
          let tmp36 = tmp39;
        } else {
          tmp36 = cResult[21];
          tmp37 = cResult[22];
        }
        const _Symbol3 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp43 = React4(inlineStyles.Path, { d: "M6 10H5v2h1v-2Z", fill: "#fff" });
          cResult[23] = tmp43;
          let tmp41 = tmp43;
        } else {
          tmp41 = cResult[23];
        }
        if (cResult[24] !== secondaryColorsTransformed[0]) {
          const obj7 = { d: "M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z", fill: secondaryColorsTransformed[0] };
          const tmp46 = React4(inlineStyles.Path, obj7);
          cResult[24] = secondaryColorsTransformed[0];
          cResult[25] = tmp46;
          let tmp44 = tmp46;
        } else {
          tmp44 = cResult[25];
        }
        const _Symbol4 = Symbol;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp49 = React4(inlineStyles.Path, { d: "M5 12H4v2h1v-2Z", fill: "#fff" });
          cResult[26] = tmp49;
          let tmp47 = tmp49;
        } else {
          tmp47 = cResult[26];
        }
        if (cResult[27] !== primaryColorsTransformed[0]) {
          const obj8 = { d: "M4 9H2v1h2V9ZM14 9h-2v1h2V9Z", fill: primaryColorsTransformed[0] };
          const tmp52 = React4(inlineStyles.Path, obj8);
          cResult[27] = primaryColorsTransformed[0];
          cResult[28] = tmp52;
          let tmp50 = tmp52;
        } else {
          tmp50 = cResult[28];
        }
        const _Symbol5 = Symbol;
        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp55 = React4(inlineStyles.Path, { d: "M8 6H6v2h2V6Z", fill: "#fff" });
          cResult[29] = tmp55;
          let tmp53 = tmp55;
        } else {
          tmp53 = cResult[29];
        }
        if (cResult[30] !== primaryColorsTransformed[0]) {
          const obj9 = { opacity: 0.5, d: "M8 7H6v1h2V7Z", fill: primaryColorsTransformed[0] };
          const tmp58 = React4(inlineStyles.Path, obj9);
          cResult[30] = primaryColorsTransformed[0];
          cResult[31] = tmp58;
          let tmp56 = tmp58;
        } else {
          tmp56 = cResult[31];
        }
        const _Symbol6 = Symbol;
        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp65 = React4(inlineStyles.Path, { d: "M10 8H6v1h4V8Z", fill: "#000" });
          const tmp66 = React4(inlineStyles.Path, { d: "M10 9H6v1h4V9Z", fill: "#fff" });
          const tmp67 = React4(inlineStyles.Path, { d: "M2 2H1v1h1V2Z", fill: "#000" });
          const tmp68 = React4(inlineStyles.Path, { d: "M5 3H4v1h1V3Z", fill: "#fff" });
          const tmp69 = React4(inlineStyles.Path, {
            d: "M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z",
            fill: "#000",
          });
          cResult[32] = tmp65;
          cResult[33] = tmp66;
          cResult[34] = tmp67;
          cResult[35] = tmp68;
          cResult[36] = tmp69;
          let tmp63 = tmp69;
          let tmp62 = tmp68;
          let tmp61 = tmp67;
          let tmp60 = tmp66;
          let tmp59 = tmp65;
        } else {
          tmp59 = cResult[32];
          tmp60 = cResult[33];
          tmp61 = cResult[34];
          tmp62 = cResult[35];
          tmp63 = cResult[36];
        }
        if (cResult[37] === num8) {
          if (cResult[38] === tmp5) {
            if (cResult[39] === tmp30) {
              if (cResult[40] === tmp36) {
                if (cResult[41] === tmp37) {
                  if (cResult[42] === tmp44) {
                    if (cResult[43] === tmp50) {
                      if (cResult[44] === tmp56) {
                        if (cResult[45] === tmp14) {
                          if (cResult[46] === tmp17) {
                            if (cResult[47] === num7) {
                              let tmp70 = cResult[48];
                            }
                            return tmp70;
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
        const obj10 = {};
        const merged = Object.assign(tmp5);
        obj10.width = num7;
        obj10.height = num8;
        obj10.viewBox = "0 0 16 16";
        obj10.fill = "none";
        items = [
          tmp14,
          tmp17,
          tmp21,
          tmp22,
          tmp23,
          tmp24,
          tmp30,
          tmp33,
          tmp36,
          tmp37,
          tmp41,
          tmp44,
          tmp47,
          tmp50,
          tmp53,
          tmp56,
          tmp59,
          tmp60,
          tmp61,
          tmp62,
          tmp63,
        ];
        obj10.children = items;
        const tmp75 = hasOwnProperty(inlineStyles.Svg, obj10);
        cResult[37] = num8;
        cResult[38] = tmp5;
        cResult[39] = tmp30;
        cResult[40] = tmp36;
        cResult[41] = tmp37;
        cResult[42] = tmp44;
        cResult[43] = tmp50;
        cResult[44] = tmp56;
        cResult[45] = tmp14;
        cResult[46] = tmp17;
        cResult[47] = num7;
        cResult[48] = tmp75;
        tmp70 = tmp75;
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
      const obj11 = {
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
        React4(inlineStyles.Path, { d: "M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z", fill: secondaryColorsTransformed[1] }),
        React4(inlineStyles.Path, {
          d: "M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M12 0H4v1h8V0Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z", fill: "#fff" }),
        React4(inlineStyles.Path, { d: "M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M2 7V3H1v6h2V7H2Z", fill: "#fff" }),
        React4(inlineStyles.Path, { d: "M15 3h-1v6h1V3Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z", fill: "#fff" }),
        React4(inlineStyles.Path, { opacity: 0.5, d: "M15 6h-1v2h1V6Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, {
          d: "M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z",
          fill: primaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, { d: "M6 10H5v2h1v-2Z", fill: "#fff" }),
        React4(inlineStyles.Path, { d: "M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z", fill: secondaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M5 12H4v2h1v-2Z", fill: "#fff" }),
        React4(inlineStyles.Path, { d: "M4 9H2v1h2V9ZM14 9h-2v1h2V9Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M8 6H6v2h2V6Z", fill: "#fff" }),
        React4(inlineStyles.Path, { opacity: 0.5, d: "M8 7H6v1h2V7Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M10 8H6v1h4V8Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M10 9H6v1h4V9Z", fill: "#fff" }),
        React4(inlineStyles.Path, { d: "M2 2H1v1h1V2Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M5 3H4v1h1V3Z", fill: "#fff" }),
        React4(inlineStyles.Path, {
          d: "M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z",
          fill: "#000",
        }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
