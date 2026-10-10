// discord_app/modules/guild_tag/native/badges/GuildBadgeSkull.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07576_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#57595f", "#847d8b", "#d1cdd5"];
const primaryTintLuminances = [0, 0.12, 0.6];
let items = [
  { base: 10, tint: 1 },
  { base: 5, tint: 1 },
  { base: 2, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSkull.tsx");

export const GuildBadgeSkull = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgeSkull(arg0) {
      const cResult = c.c(45);
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
      if (cResult[7] !== primaryColorsTransformed[2]) {
        const obj3 = {
          d: "M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z",
          fill: primaryColorsTransformed[2],
        };
        const tmp18 = React4(inlineStyles.Path, obj3);
        cResult[7] = primaryColorsTransformed[2];
        cResult[8] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = React4(inlineStyles.Path, {
          d: "M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z",
          fill: "#000",
        });
        cResult[9] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== primaryColorsTransformed[1]) {
        const obj4 = {
          d: "M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp24 = React4(inlineStyles.Path, obj4);
        cResult[10] = primaryColorsTransformed[1];
        cResult[11] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[11];
      }
      if (cResult[12] !== primaryColorsTransformed[0]) {
        const obj5 = { d: "M7 8H5v2h2V8Z", fill: primaryColorsTransformed[0] };
        const tmp27 = React4(inlineStyles.Path, obj5);
        cResult[12] = primaryColorsTransformed[0];
        cResult[13] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[13];
      }
      if (cResult[14] !== primaryColorsTransformed[1]) {
        const obj6 = { d: "M12 7H9v3h3V7Z", fill: primaryColorsTransformed[1] };
        const tmp30 = React4(inlineStyles.Path, obj6);
        cResult[14] = primaryColorsTransformed[1];
        cResult[15] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[15];
      }
      if (cResult[16] !== primaryColorsTransformed[0]) {
        const obj7 = { d: "M12 8h-2v2h2V8Z", fill: primaryColorsTransformed[0] };
        const tmp33 = React4(inlineStyles.Path, obj7);
        cResult[16] = primaryColorsTransformed[0];
        cResult[17] = tmp33;
        let tmp31 = tmp33;
      } else {
        tmp31 = cResult[17];
      }
      if (cResult[18] !== primaryColorsTransformed[1]) {
        const obj8 = {
          d: "M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp36 = React4(inlineStyles.Path, obj8);
        cResult[18] = primaryColorsTransformed[1];
        cResult[19] = tmp36;
        let tmp34 = tmp36;
      } else {
        tmp34 = cResult[19];
      }
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp41 = React4(inlineStyles.Path, { d: "M1 4H0v6h1V4Z", fill: "#000" });
        const tmp42 = React4(inlineStyles.Path, { d: "M2 4H1v6h1V4Z", fill: "#fff" });
        const tmp43 = React4(inlineStyles.Path, {
          d: "M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z",
          fill: "#000",
        });
        cResult[20] = tmp41;
        cResult[21] = tmp42;
        cResult[22] = tmp43;
        let tmp39 = tmp43;
        let tmp38 = tmp42;
        let tmp37 = tmp41;
      } else {
        tmp37 = cResult[20];
        tmp38 = cResult[21];
        tmp39 = cResult[22];
      }
      if (cResult[23] !== primaryColorsTransformed[1]) {
        const obj9 = { d: "M14 10.01h1v-6h-1v6Z", fill: primaryColorsTransformed[1] };
        const tmp46 = React4(inlineStyles.Path, obj9);
        cResult[23] = primaryColorsTransformed[1];
        cResult[24] = tmp46;
        let tmp44 = tmp46;
      } else {
        tmp44 = cResult[24];
      }
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp51 = React4(inlineStyles.Path, { d: "M4 0v1h8V0H4Z", fill: "#000" });
        const tmp52 = React4(inlineStyles.Path, {
          d: "M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z",
          fill: "#fff",
        });
        const tmp53 = React4(inlineStyles.Path, { d: "M5 15v1h6v-1H5Z", fill: "#000" });
        cResult[25] = tmp51;
        cResult[26] = tmp52;
        cResult[27] = tmp53;
        let tmp49 = tmp53;
        let tmp48 = tmp52;
        let tmp47 = tmp51;
      } else {
        tmp47 = cResult[25];
        tmp48 = cResult[26];
        tmp49 = cResult[27];
      }
      if (cResult[28] !== primaryColorsTransformed[1]) {
        const obj10 = { d: "M5 14v1h6v-1H5Z", fill: primaryColorsTransformed[1] };
        const tmp56 = React4(inlineStyles.Path, obj10);
        cResult[28] = primaryColorsTransformed[1];
        cResult[29] = tmp56;
        let tmp54 = tmp56;
      } else {
        tmp54 = cResult[29];
      }
      if (cResult[30] !== primaryColorsTransformed[0]) {
        const obj11 = { d: "M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z", fill: primaryColorsTransformed[0] };
        const tmp59 = React4(inlineStyles.Path, obj11);
        cResult[30] = primaryColorsTransformed[0];
        cResult[31] = tmp59;
        let tmp57 = tmp59;
      } else {
        tmp57 = cResult[31];
      }
      if (cResult[32] === num7) {
        if (cResult[33] === tmp5) {
          if (cResult[34] === tmp34) {
            if (cResult[35] === tmp44) {
              if (cResult[36] === tmp54) {
                if (cResult[37] === tmp57) {
                  if (cResult[38] === tmp16) {
                    if (cResult[39] === tmp22) {
                      if (cResult[40] === tmp25) {
                        if (cResult[41] === tmp28) {
                          if (cResult[42] === tmp31) {
                            if (cResult[43] === num6) {
                              let tmp60 = cResult[44];
                            }
                            return tmp60;
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
      const obj12 = {};
      const merged = Object.assign(tmp5);
      obj12.width = num6;
      obj12.height = num7;
      obj12.viewBox = "0 0 16 16";
      obj12.fill = "none";
      items = [
        tmp16,
        tmp19,
        tmp22,
        tmp25,
        tmp28,
        tmp31,
        tmp34,
        tmp37,
        tmp38,
        tmp39,
        tmp44,
        tmp47,
        tmp48,
        tmp49,
        tmp54,
        tmp57,
      ];
      obj12.children = items;
      const tmp62 = hasOwnProperty(inlineStyles.Svg, obj12);
      cResult[32] = num7;
      cResult[33] = tmp5;
      cResult[34] = tmp34;
      cResult[35] = tmp44;
      cResult[36] = tmp54;
      cResult[37] = tmp57;
      cResult[38] = tmp16;
      cResult[39] = tmp22;
      cResult[40] = tmp25;
      cResult[41] = tmp28;
      cResult[42] = tmp31;
      cResult[43] = num6;
      cResult[44] = tmp62;
      tmp60 = tmp62;
    }
  : function GuildBadgeSkull(primaryTintColor) {
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
          d: "M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z",
          fill: primaryColorsTransformed[2],
        }),
        React4(inlineStyles.Path, {
          d: "M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, {
          d: "M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M7 8H5v2h2V8Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M12 7H9v3h3V7Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M12 8h-2v2h2V8Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, {
          d: "M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M1 4H0v6h1V4Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M2 4H1v6h1V4Z", fill: "#fff" }),
        React4(inlineStyles.Path, {
          d: "M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M14 10.01h1v-6h-1v6Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M4 0v1h8V0H4Z", fill: "#000" }),
        React4(inlineStyles.Path, {
          d: "M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z",
          fill: "#fff",
        }),
        React4(inlineStyles.Path, { d: "M5 15v1h6v-1H5Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M5 14v1h6v-1H5Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z", fill: primaryColorsTransformed[0] }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
