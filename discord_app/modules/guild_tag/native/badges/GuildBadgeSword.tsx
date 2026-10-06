// discord_app/modules/guild_tag/native/badges/GuildBadgeSword.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
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
const primaryBaseColors = ["#ffb84b", "#ffe361", "#f0f0f0"];
const secondaryBaseColors = ["#847d8b", "#d1cdd5", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.4, 0.7];
let items = [
  { base: 5, tint: 1 },
  { base: 4, tint: 1 },
  { base: 3, tint: 1 },
];
const secondaryTintLuminances = [0.3, 0.9, 1];
const items1 = [
  { base: 4, tint: 1 },
  { base: 3, tint: 1 },
  { base: 8, tint: 1 },
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
      const cResult = obj.c(52);
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
        let tmp17;
        let tmp23;
        let tmp26;
        let tmp29;
        let tmp32;
        let tmp35;
        let tmp38;
        let tmp41;
        let tmp44;
        let tmp47;
        let tmp50;
        let tmp53;
        let tmp56;
        let tmp59;
        if (cResult[7] === tmp6) {
          tmp12 = cResult[8];
        }
        ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
        if (cResult[9] !== secondaryColorsTransformed[1]) {
          const obj2 = {
            d: "M11 1v1h-1v1H9v1H8v1H7v2H6v1h2v2h1V9h2V8h1V7h1V6h1V5h1V1h-4Z",
            fill: secondaryColorsTransformed[1],
          };
          const tmp16 = React3(inlineStyles.Path, obj2);
          cResult[9] = secondaryColorsTransformed[1];
          cResult[10] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] !== primaryColorsTransformed[1]) {
          const obj3 = {
            d: "M3 9h1v1h2v2h1v1h2v1h2v-2H9v-1H8v-1H7V9H6V8H5V7H4V5H2v2h1v2Z",
            fill: primaryColorsTransformed[1],
          };
          const tmp20 = React3(inlineStyles.Path, obj3);
          const obj4 = { d: "M5 11H3v2h2v-2ZM3 13H1v2h2v-2Z", fill: primaryColorsTransformed[1] };
          const tmp21 = React3(inlineStyles.Path, obj4);
          cResult[11] = primaryColorsTransformed[1];
          cResult[12] = tmp20;
          cResult[13] = tmp21;
          tmp18 = tmp21;
          tmp17 = tmp20;
        } else {
          tmp17 = cResult[12];
          tmp18 = cResult[13];
        }
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp25 = React3(inlineStyles.Path, {
            d: "M11 1h-1v1h1V1ZM10 2H9v1h1V2ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM7 5H6v2h1V5ZM5 5H4v2h1V5ZM2 5H1v2h1V5ZM3 7H2v2h1V7ZM11 9H9v1h2V9ZM11 11H9v1h2v-1ZM12 12h-1v2h1v-2Z",
            fill: "#000",
          });
          cResult[14] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[14];
        }
        if (cResult[15] !== secondaryColorsTransformed[0]) {
          const obj5 = { d: "M15 1h-1v4h1V1Z", fill: secondaryColorsTransformed[0] };
          const tmp28 = React3(inlineStyles.Path, obj5);
          cResult[15] = secondaryColorsTransformed[0];
          cResult[16] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[16];
        }
        const _Symbol2 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp31 = React3(inlineStyles.Path, {
            d: "M1 13H0v2h1v-2ZM11 14H9v1h2v-1ZM9 13H7v1h2v-1Z",
            fill: "#000",
          });
          cResult[17] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[17];
        }
        if (cResult[18] !== primaryColorsTransformed[0]) {
          const obj6 = { d: "M5 12H3v1h2v-1ZM3 14H1v1h2v-1Z", fill: primaryColorsTransformed[0] };
          const tmp34 = React3(inlineStyles.Path, obj6);
          cResult[18] = primaryColorsTransformed[0];
          cResult[19] = tmp34;
          tmp32 = tmp34;
        } else {
          tmp32 = cResult[19];
        }
        const _Symbol3 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp37 = React3(inlineStyles.Path, {
            d: "M3 14v1h1v-1h1v-1H3v1ZM6 12v-2H4V9H3v2h2v2h2v-1H6ZM3 12v-1H2v1H1v1h2v-1ZM3 15H1v1h2v-1ZM4 4H2v1h2V4ZM7 9v1h1V8H6v1h1Z",
            fill: "#000",
          });
          cResult[20] = tmp37;
          tmp35 = tmp37;
        } else {
          tmp35 = cResult[20];
        }
        if (cResult[21] !== secondaryColorsTransformed[0]) {
          const obj7 = {
            d: "M13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM11 5h-1v1h1V5ZM10 6H9v1h1V6ZM9 7H8v1h1V7Z",
            fill: secondaryColorsTransformed[0],
          };
          const tmp40 = React3(inlineStyles.Path, obj7);
          cResult[21] = secondaryColorsTransformed[0];
          cResult[22] = tmp40;
          tmp38 = tmp40;
        } else {
          tmp38 = cResult[22];
        }
        if (cResult[23] !== secondaryColorsTransformed[2]) {
          const obj8 = { d: "M7 7H6v1h1V7Z", fill: secondaryColorsTransformed[2] };
          const tmp43 = React3(inlineStyles.Path, obj8);
          cResult[23] = secondaryColorsTransformed[2];
          cResult[24] = tmp43;
          tmp41 = tmp43;
        } else {
          tmp41 = cResult[24];
        }
        if (cResult[25] !== primaryColorsTransformed[0]) {
          const obj9 = {
            d: "M4 8H3v1h1V8ZM3 6H2v1h1V6ZM5 9H4v1h1V9ZM7 11H6v1h1v-1ZM8 12H7v1h1v-1ZM10 13H9v1h1v-1Z",
            fill: primaryColorsTransformed[0],
          };
          const tmp46 = React3(inlineStyles.Path, obj9);
          cResult[25] = primaryColorsTransformed[0];
          cResult[26] = tmp46;
          tmp44 = tmp46;
        } else {
          tmp44 = cResult[26];
        }
        const _Symbol4 = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp49 = React3(inlineStyles.Path, {
            d: "M9 10H8v1h1v-1ZM6 7H5v1h1V7ZM15 5h-1v1h1V5ZM14 6h-1v1h1V6ZM13 7h-1v1h1V7ZM12 8h-1v1h1V8ZM11 0v1h4v4h1V0h-5Z",
            fill: "#000",
          });
          cResult[27] = tmp49;
          tmp47 = tmp49;
        } else {
          tmp47 = cResult[27];
        }
        if (cResult[28] !== primaryColorsTransformed[2]) {
          const obj10 = {
            d: "M11 12h-1v1h1v-1ZM9 11H8v1h1v-1ZM8 10H7v1h1v-1ZM7 9H6v1h1V9ZM6 8H5v1h1V8ZM5 7H4v1h1V7Z",
            fill: primaryColorsTransformed[2],
          };
          const tmp52 = React3(inlineStyles.Path, obj10);
          cResult[28] = primaryColorsTransformed[2];
          cResult[29] = tmp52;
          tmp50 = tmp52;
        } else {
          tmp50 = cResult[29];
        }
        if (cResult[30] !== secondaryColorsTransformed[2]) {
          const obj11 = {
            d: "M8 5H7v1h3V5H9V4H8v1ZM10 2v1H9v1h3V3h-1V2h-1ZM14 1h-3v1h3V1Z",
            fill: secondaryColorsTransformed[2],
          };
          const tmp55 = React3(inlineStyles.Path, obj11);
          cResult[30] = secondaryColorsTransformed[2];
          cResult[31] = tmp55;
          tmp53 = tmp55;
        } else {
          tmp53 = cResult[31];
        }
        if (cResult[32] !== secondaryColorsTransformed[0]) {
          const obj12 = {
            d: "M14 5h-1v1h1V5ZM13 6h-1v1h1V6ZM12 7h-1v1h1V7ZM11 8h-1v1h1V8ZM9 9H8v1h1V9Z",
            fill: secondaryColorsTransformed[0],
          };
          const tmp58 = React3(inlineStyles.Path, obj12);
          cResult[32] = secondaryColorsTransformed[0];
          cResult[33] = tmp58;
          tmp56 = tmp58;
        } else {
          tmp56 = cResult[33];
        }
        if (cResult[34] !== primaryColorsTransformed[2]) {
          const obj13 = { d: "M4 5H3v1h1V5ZM4 11H3v1h1v-1ZM2 13H1v1h1v-1Z", fill: primaryColorsTransformed[2] };
          const tmp61 = React3(inlineStyles.Path, obj13);
          cResult[34] = primaryColorsTransformed[2];
          cResult[35] = tmp61;
          tmp59 = tmp61;
        } else {
          tmp59 = cResult[35];
        }
        if (cResult[36] === num8) {
          if (cResult[37] === tmp5) {
            if (cResult[38] === tmp32) {
              if (cResult[39] === tmp38) {
                if (cResult[40] === tmp41) {
                  if (cResult[41] === tmp44) {
                    if (cResult[42] === tmp50) {
                      if (cResult[43] === tmp53) {
                        if (cResult[44] === tmp56) {
                          if (cResult[45] === tmp59) {
                            if (cResult[46] === tmp14) {
                              if (cResult[47] === tmp17) {
                                if (cResult[48] === tmp18) {
                                  if (cResult[49] === tmp26) {
                                    let tmp62;
                                    if (cResult[50] === num7) {
                                      tmp62 = cResult[51];
                                    }
                                    return tmp62;
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
        const obj14 = { width: num7, height: num8, viewBox: "0 0 16 16", fill: "none", children: items };
        const Svg = inlineStyles.Svg;
        const merged = Object.assign(tmp5);
        items = [
          tmp14,
          tmp17,
          tmp18,
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
          tmp53,
          tmp56,
          tmp59,
        ];
        const tmp67 = hasOwnProperty(Svg, obj14);
        cResult[36] = num8;
        cResult[37] = tmp5;
        cResult[38] = tmp32;
        cResult[39] = tmp38;
        cResult[40] = tmp41;
        cResult[41] = tmp44;
        cResult[42] = tmp50;
        cResult[43] = tmp53;
        cResult[44] = tmp56;
        cResult[45] = tmp59;
        cResult[46] = tmp14;
        cResult[47] = tmp17;
        cResult[48] = tmp18;
        cResult[49] = tmp26;
        cResult[50] = num7;
        cResult[51] = tmp67;
        tmp62 = tmp67;
      }
      const obj15 = {
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
      const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj15);
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
      items = [, , , , , , , , , , , , , , ,];
      const obj4 = {
        d: "M11 1v1h-1v1H9v1H8v1H7v2H6v1h2v2h1V9h2V8h1V7h1V6h1V5h1V1h-4Z",
        fill: secondaryColorsTransformed[1],
      };
      items[0] = React3(inlineStyles.Path, obj4);
      const obj5 = {
        d: "M3 9h1v1h2v2h1v1h2v1h2v-2H9v-1H8v-1H7V9H6V8H5V7H4V5H2v2h1v2Z",
        fill: primaryColorsTransformed[1],
      };
      items[1] = React3(inlineStyles.Path, obj5);
      const obj6 = { d: "M5 11H3v2h2v-2ZM3 13H1v2h2v-2Z", fill: primaryColorsTransformed[1] };
      items[2] = React3(inlineStyles.Path, obj6);
      items[3] = React3(inlineStyles.Path, {
        d: "M11 1h-1v1h1V1ZM10 2H9v1h1V2ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM7 5H6v2h1V5ZM5 5H4v2h1V5ZM2 5H1v2h1V5ZM3 7H2v2h1V7ZM11 9H9v1h2V9ZM11 11H9v1h2v-1ZM12 12h-1v2h1v-2Z",
        fill: "#000",
      });
      const obj7 = { d: "M15 1h-1v4h1V1Z", fill: secondaryColorsTransformed[0] };
      items[4] = React3(inlineStyles.Path, obj7);
      items[5] = React3(inlineStyles.Path, { d: "M1 13H0v2h1v-2ZM11 14H9v1h2v-1ZM9 13H7v1h2v-1Z", fill: "#000" });
      const obj8 = { d: "M5 12H3v1h2v-1ZM3 14H1v1h2v-1Z", fill: primaryColorsTransformed[0] };
      items[6] = React3(inlineStyles.Path, obj8);
      items[7] = React3(inlineStyles.Path, {
        d: "M3 14v1h1v-1h1v-1H3v1ZM6 12v-2H4V9H3v2h2v2h2v-1H6ZM3 12v-1H2v1H1v1h2v-1ZM3 15H1v1h2v-1ZM4 4H2v1h2V4ZM7 9v1h1V8H6v1h1Z",
        fill: "#000",
      });
      const obj9 = {
        d: "M13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM11 5h-1v1h1V5ZM10 6H9v1h1V6ZM9 7H8v1h1V7Z",
        fill: secondaryColorsTransformed[0],
      };
      items[8] = React3(inlineStyles.Path, obj9);
      const obj10 = { d: "M7 7H6v1h1V7Z", fill: secondaryColorsTransformed[2] };
      items[9] = React3(inlineStyles.Path, obj10);
      const obj11 = {
        d: "M4 8H3v1h1V8ZM3 6H2v1h1V6ZM5 9H4v1h1V9ZM7 11H6v1h1v-1ZM8 12H7v1h1v-1ZM10 13H9v1h1v-1Z",
        fill: primaryColorsTransformed[0],
      };
      items[10] = React3(inlineStyles.Path, obj11);
      items[11] = React3(inlineStyles.Path, {
        d: "M9 10H8v1h1v-1ZM6 7H5v1h1V7ZM15 5h-1v1h1V5ZM14 6h-1v1h1V6ZM13 7h-1v1h1V7ZM12 8h-1v1h1V8ZM11 0v1h4v4h1V0h-5Z",
        fill: "#000",
      });
      const obj12 = {
        d: "M11 12h-1v1h1v-1ZM9 11H8v1h1v-1ZM8 10H7v1h1v-1ZM7 9H6v1h1V9ZM6 8H5v1h1V8ZM5 7H4v1h1V7Z",
        fill: primaryColorsTransformed[2],
      };
      items[12] = React3(inlineStyles.Path, obj12);
      const obj13 = {
        d: "M8 5H7v1h3V5H9V4H8v1ZM10 2v1H9v1h3V3h-1V2h-1ZM14 1h-3v1h3V1Z",
        fill: secondaryColorsTransformed[2],
      };
      items[13] = React3(inlineStyles.Path, obj13);
      const obj14 = {
        d: "M14 5h-1v1h1V5ZM13 6h-1v1h1V6ZM12 7h-1v1h1V7ZM11 8h-1v1h1V8ZM9 9H8v1h1V9Z",
        fill: secondaryColorsTransformed[0],
      };
      items[14] = React3(inlineStyles.Path, obj14);
      const obj15 = { d: "M4 5H3v1h1V5ZM4 11H3v1h1v-1ZM2 13H1v1h1v-1Z", fill: primaryColorsTransformed[2] };
      items[15] = React3(inlineStyles.Path, obj15);
      return hasOwnProperty(Svg, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSword.tsx");

export const GuildBadgeSword = tmp4;
