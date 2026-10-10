// discord_app/modules/guild_tag/native/badges/GuildBadgePsychic.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07576_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#7fb134", "#bcef42", "#f0f0f0"];
const secondaryBaseColors = ["#816bee", "#b79cf8"];
const primaryTintLuminances = [0.1, 0.6, 0.95];
let items = [
  { base: 8, tint: 1 },
  { base: 4, tint: 1 },
  { base: 8, tint: 1 },
];
const secondaryTintLuminances = [0.1, 0.3];
const items1 = [
  { base: 8, tint: 1 },
  { base: 6, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgePsychic.tsx");

export const GuildBadgePsychic = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgePsychic(arg0) {
      const cResult = c.c(60);
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
            d: "M14 4V3h-1V2h-1V1H6v1H4v1H3v1H2v2H1v5h1v1h1v1h1v1h1v1h5v-1h2v-1h1v-1h1v-2h1V4h-1Z",
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
          const obj3 = { d: "M15 1h-2v1h2V1Z", fill: primaryColorsTransformed[2] };
          const tmp19 = React4(inlineStyles.Path, obj3);
          cResult[11] = primaryColorsTransformed[2];
          cResult[12] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[12];
        }
        if (cResult[13] !== primaryColorsTransformed[1]) {
          const obj4 = { d: "M3 13H1v1h2v-1Z", fill: primaryColorsTransformed[1] };
          const tmp22 = React4(inlineStyles.Path, obj4);
          cResult[13] = primaryColorsTransformed[1];
          cResult[14] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[14];
        }
        if (cResult[15] !== primaryColorsTransformed[0]) {
          const obj5 = { d: "M4 14H1v1h3v-1Z", fill: primaryColorsTransformed[0] };
          const tmp25 = React4(inlineStyles.Path, obj5);
          cResult[15] = primaryColorsTransformed[0];
          cResult[16] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[16];
        }
        if (cResult[17] !== secondaryColorsTransformed[0]) {
          const obj6 = { d: "M15 8h-1v2h1V8Z", fill: secondaryColorsTransformed[0] };
          const tmp28 = React4(inlineStyles.Path, obj6);
          cResult[17] = secondaryColorsTransformed[0];
          cResult[18] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[18];
        }
        if (cResult[19] !== primaryColorsTransformed[2]) {
          const obj7 = { d: "M12 1H6v1h6V1Z", fill: primaryColorsTransformed[2] };
          const tmp31 = React4(inlineStyles.Path, obj7);
          cResult[19] = primaryColorsTransformed[2];
          cResult[20] = tmp31;
          let tmp29 = tmp31;
        } else {
          tmp29 = cResult[20];
        }
        if (cResult[21] !== secondaryColorsTransformed[1]) {
          const obj8 = { d: "M12 2H6v1h6V2Z", fill: secondaryColorsTransformed[1] };
          const tmp34 = React4(inlineStyles.Path, obj8);
          cResult[21] = secondaryColorsTransformed[1];
          cResult[22] = tmp34;
          let tmp32 = tmp34;
        } else {
          tmp32 = cResult[22];
        }
        if (cResult[23] !== secondaryColorsTransformed[0]) {
          const obj9 = { d: "M10 14H5v1h5v-1Z", fill: secondaryColorsTransformed[0] };
          const tmp37 = React4(inlineStyles.Path, obj9);
          cResult[23] = secondaryColorsTransformed[0];
          cResult[24] = tmp37;
          let tmp35 = tmp37;
        } else {
          tmp35 = cResult[24];
        }
        if (cResult[25] !== primaryColorsTransformed[1]) {
          const obj10 = { d: "M15 2h-1v1h1V2Z", fill: primaryColorsTransformed[1] };
          const tmp40 = React4(inlineStyles.Path, obj10);
          cResult[25] = primaryColorsTransformed[1];
          cResult[26] = tmp40;
          let tmp38 = tmp40;
        } else {
          tmp38 = cResult[26];
        }
        if (cResult[27] !== primaryColorsTransformed[2]) {
          const obj11 = { d: "M6 5H5v1h1V5ZM3 4H2v1h1V4ZM4 3H3v1h1V3Z", fill: primaryColorsTransformed[2] };
          const tmp43 = React4(inlineStyles.Path, obj11);
          cResult[27] = primaryColorsTransformed[2];
          cResult[28] = tmp43;
          let tmp41 = tmp43;
        } else {
          tmp41 = cResult[28];
        }
        if (cResult[29] !== secondaryColorsTransformed[1]) {
          const obj12 = { d: "M6 3H5v1h1V3ZM13 3h-1v1h1V3Z", fill: secondaryColorsTransformed[1] };
          const tmp46 = React4(inlineStyles.Path, obj12);
          cResult[29] = secondaryColorsTransformed[1];
          cResult[30] = tmp46;
          let tmp44 = tmp46;
        } else {
          tmp44 = cResult[30];
        }
        if (cResult[31] !== primaryColorsTransformed[2]) {
          const obj13 = { d: "M5 2H4v1h1V2ZM7 6H6v1h1V6ZM2 12H1v1h1v-1Z", fill: primaryColorsTransformed[2] };
          const tmp49 = React4(inlineStyles.Path, obj13);
          cResult[31] = primaryColorsTransformed[2];
          cResult[32] = tmp49;
          let tmp47 = tmp49;
        } else {
          tmp47 = cResult[32];
        }
        if (cResult[33] !== secondaryColorsTransformed[0]) {
          const obj14 = {
            d: "M14 11h-1v1h1v-1ZM13 12h-1v1h1v-1ZM12 13h-1v1h1v-1Z",
            fill: secondaryColorsTransformed[0],
          };
          const tmp52 = React4(inlineStyles.Path, obj14);
          cResult[33] = secondaryColorsTransformed[0];
          cResult[34] = tmp52;
          let tmp50 = tmp52;
        } else {
          tmp50 = cResult[34];
        }
        const _Symbol = Symbol;
        if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp57 = React4(inlineStyles.Path, {
            d: "M15 1v2h-1V2h-1v1h1v1h1v6h1V1h-1ZM3 3H2v1h1V3ZM4 2h2V1H4v1H3v1h1V2ZM15 10h-1v2h1v-2ZM2 4H1v2h1V4ZM12 14h-2v1h2v-1ZM14 12h-1v1h1v-1ZM3 12H2v1h1v-1ZM4 13H3v1h1v-1ZM2 11H1v1h1v-1ZM13 13h-1v1h1v-1ZM1 6H0v9h1V6Z",
            fill: "#000",
          });
          const tmp58 = React4(inlineStyles.Path, {
            d: "M12 2h1V1h2V0H6v1h6v1ZM5 15v-1H4v1H1v1h9v-1H5Z",
            fill: "#000",
          });
          cResult[35] = tmp57;
          cResult[36] = tmp58;
          let tmp55 = tmp58;
          let tmp54 = tmp57;
        } else {
          tmp54 = cResult[35];
          tmp55 = cResult[36];
        }
        if (cResult[37] !== primaryColorsTransformed[2]) {
          const obj15 = { d: "M2 6H1v2h1V6Z", fill: primaryColorsTransformed[2] };
          const tmp61 = React4(inlineStyles.Path, obj15);
          cResult[37] = primaryColorsTransformed[2];
          cResult[38] = tmp61;
          let tmp59 = tmp61;
        } else {
          tmp59 = cResult[38];
        }
        if (cResult[39] !== secondaryColorsTransformed[1]) {
          const obj16 = {
            d: "M10 6H8v1h2V6ZM9 10H7v1h2v-1ZM11 7h-1v2h1V7ZM3 11h2v-1H4V5H3v6ZM11 4H7v1h4V4ZM10 12H6v1h4v-1ZM15 5h-1v3h1V5ZM2 8H1v3h1V8ZM5 4H4v1h1V4ZM8 7H7v1h1V7ZM7 9H6v1h1V9ZM6 11H5v1h1v-1ZM10 9H9v1h1V9ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM7 6V5H6v1H5v3h1V6h1ZM14 4h-1v1h1V4ZM12 5h-1v1h1V5ZM13 6h-1v4h1V6ZM3 11H2v1h1v-1ZM4 12H3v1h1v-1ZM5 13H4v1h1v-1Z",
            fill: secondaryColorsTransformed[1],
          };
          const tmp64 = React4(inlineStyles.Path, obj16);
          cResult[39] = secondaryColorsTransformed[1];
          cResult[40] = tmp64;
          let tmp62 = tmp64;
        } else {
          tmp62 = cResult[40];
        }
        if (cResult[41] === num8) {
          if (cResult[42] === tmp5) {
            if (cResult[43] === tmp32) {
              if (cResult[44] === tmp35) {
                if (cResult[45] === tmp38) {
                  if (cResult[46] === tmp41) {
                    if (cResult[47] === tmp44) {
                      if (cResult[48] === tmp47) {
                        if (cResult[49] === tmp50) {
                          if (cResult[50] === tmp59) {
                            if (cResult[51] === tmp62) {
                              if (cResult[52] === tmp14) {
                                if (cResult[53] === tmp17) {
                                  if (cResult[54] === tmp20) {
                                    if (cResult[55] === tmp23) {
                                      if (cResult[56] === tmp26) {
                                        if (cResult[57] === tmp29) {
                                          if (cResult[58] === num7) {
                                            let tmp65 = cResult[59];
                                          }
                                          return tmp65;
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
        const obj17 = {};
        const merged = Object.assign(tmp5);
        obj17.width = num7;
        obj17.height = num8;
        obj17.viewBox = "0 0 16 16";
        obj17.fill = "none";
        items = [
          tmp14,
          tmp17,
          tmp20,
          tmp23,
          tmp26,
          tmp29,
          tmp32,
          tmp35,
          tmp38,
          tmp41,
          tmp44,
          tmp47,
          tmp50,
          tmp54,
          tmp55,
          tmp59,
          tmp62,
        ];
        obj17.children = items;
        const tmp70 = hasOwnProperty(inlineStyles.Svg, obj17);
        cResult[41] = num8;
        cResult[42] = tmp5;
        cResult[43] = tmp32;
        cResult[44] = tmp35;
        cResult[45] = tmp38;
        cResult[46] = tmp41;
        cResult[47] = tmp44;
        cResult[48] = tmp47;
        cResult[49] = tmp50;
        cResult[50] = tmp59;
        cResult[51] = tmp62;
        cResult[52] = tmp14;
        cResult[53] = tmp17;
        cResult[54] = tmp20;
        cResult[55] = tmp23;
        cResult[56] = tmp26;
        cResult[57] = tmp29;
        cResult[58] = num7;
        cResult[59] = tmp70;
        tmp65 = tmp70;
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
      const obj18 = {
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
  : function GuildBadgePsychic(width) {
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
          d: "M14 4V3h-1V2h-1V1H6v1H4v1H3v1H2v2H1v5h1v1h1v1h1v1h1v1h5v-1h2v-1h1v-1h1v-2h1V4h-1Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M15 1h-2v1h2V1Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M3 13H1v1h2v-1Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M4 14H1v1h3v-1Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M15 8h-1v2h1V8Z", fill: secondaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M12 1H6v1h6V1Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M12 2H6v1h6V2Z", fill: secondaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M10 14H5v1h5v-1Z", fill: secondaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M15 2h-1v1h1V2Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M6 5H5v1h1V5ZM3 4H2v1h1V4ZM4 3H3v1h1V3Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M6 3H5v1h1V3ZM13 3h-1v1h1V3Z", fill: secondaryColorsTransformed[1] }),
        React4(inlineStyles.Path, {
          d: "M5 2H4v1h1V2ZM7 6H6v1h1V6ZM2 12H1v1h1v-1Z",
          fill: primaryColorsTransformed[2],
        }),
        React4(inlineStyles.Path, {
          d: "M14 11h-1v1h1v-1ZM13 12h-1v1h1v-1ZM12 13h-1v1h1v-1Z",
          fill: secondaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, {
          d: "M15 1v2h-1V2h-1v1h1v1h1v6h1V1h-1ZM3 3H2v1h1V3ZM4 2h2V1H4v1H3v1h1V2ZM15 10h-1v2h1v-2ZM2 4H1v2h1V4ZM12 14h-2v1h2v-1ZM14 12h-1v1h1v-1ZM3 12H2v1h1v-1ZM4 13H3v1h1v-1ZM2 11H1v1h1v-1ZM13 13h-1v1h1v-1ZM1 6H0v9h1V6Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M12 2h1V1h2V0H6v1h6v1ZM5 15v-1H4v1H1v1h9v-1H5Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M2 6H1v2h1V6Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, {
          d: "M10 6H8v1h2V6ZM9 10H7v1h2v-1ZM11 7h-1v2h1V7ZM3 11h2v-1H4V5H3v6ZM11 4H7v1h4V4ZM10 12H6v1h4v-1ZM15 5h-1v3h1V5ZM2 8H1v3h1V8ZM5 4H4v1h1V4ZM8 7H7v1h1V7ZM7 9H6v1h1V9ZM6 11H5v1h1v-1ZM10 9H9v1h1V9ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM7 6V5H6v1H5v3h1V6h1ZM14 4h-1v1h1V4ZM12 5h-1v1h1V5ZM13 6h-1v4h1V6ZM3 11H2v1h1v-1ZM4 12H3v1h1v-1ZM5 13H4v1h1v-1Z",
          fill: secondaryColorsTransformed[1],
        }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
