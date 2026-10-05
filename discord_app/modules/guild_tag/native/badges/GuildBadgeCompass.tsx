// discord_app/modules/guild_tag/native/badges/GuildBadgeCompass.tsx
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
const primaryBaseColors = ["#be0351", "#ff2c52", "#f0f0f0"];
const secondaryBaseColors = ["#4282d8", "#47baff", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.25, 1];
let items = [
  { base: 3, tint: 1 },
  { base: 2, tint: 1 },
  { base: 2, tint: 1 },
];
const secondaryTintLuminances = [0.1, 0.25, 1];
const items1 = [
  { base: 3, tint: 1 },
  { base: 2, tint: 1 },
  { base: 2, tint: 1 },
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
      const cResult = obj.c(58);
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
        let tmp17;
        let tmp21;
        let tmp24;
        let tmp27;
        let tmp30;
        let tmp34;
        let tmp33;
        let tmp38;
        let tmp41;
        let tmp44;
        let tmp47;
        let tmp50;
        let tmp63;
        let tmp62;
        let tmp61;
        let tmp60;
        let tmp59;
        let tmp58;
        let tmp57;
        let tmp56;
        let tmp55;
        let tmp54;
        let tmp53;
        if (cResult[7] === tmp6) {
          tmp12 = cResult[8];
        }
        ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
        if (cResult[9] !== secondaryColorsTransformed[1]) {
          const obj2 = { d: "M10 4V3H9V1H7v2H6v1H5v1h1v1h1v1h2V6h1V5h1V4h-1Z", fill: secondaryColorsTransformed[1] };
          const tmp16 = React3(inlineStyles.Path, obj2);
          cResult[9] = secondaryColorsTransformed[1];
          cResult[10] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] !== primaryColorsTransformed[1]) {
          const obj3 = { d: "M10 12v1H9v2H7v-2H6v-1H5v-1h1v-1h1V9h2v1h1v1h1v1h-1Z", fill: primaryColorsTransformed[1] };
          const tmp19 = React3(inlineStyles.Path, obj3);
          cResult[11] = primaryColorsTransformed[1];
          cResult[12] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp23 = React3(inlineStyles.Path, { d: "M7 0v1h2V0H7Z", fill: "#000" });
          cResult[13] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        if (cResult[14] !== secondaryColorsTransformed[2]) {
          const obj4 = { d: "M7 1v1h2V1H7Z", fill: secondaryColorsTransformed[2] };
          const tmp26 = React3(inlineStyles.Path, obj4);
          cResult[14] = secondaryColorsTransformed[2];
          cResult[15] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[15];
        }
        if (cResult[16] !== secondaryColorsTransformed[0]) {
          const obj5 = { d: "M7 6v1h2V6H7Z", fill: secondaryColorsTransformed[0] };
          const tmp29 = React3(inlineStyles.Path, obj5);
          cResult[16] = secondaryColorsTransformed[0];
          cResult[17] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[17];
        }
        const _Symbol2 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp32 = React3(inlineStyles.Path, {
            d: "M7 1H6v2h1V1ZM1 7H0v2h1V7ZM3 7V6H1v1h2ZM6 3H5v1h1V3Z",
            fill: "#000",
          });
          cResult[18] = tmp32;
          tmp30 = tmp32;
        } else {
          tmp30 = cResult[18];
        }
        if (cResult[19] !== secondaryColorsTransformed[2]) {
          const obj6 = { d: "M6 4H5v1h1V4ZM7 3H6v1h1V3Z", fill: secondaryColorsTransformed[2] };
          const tmp36 = React3(inlineStyles.Path, obj6);
          const obj7 = { d: "M7 9v1h2V9H7Z", fill: secondaryColorsTransformed[2] };
          const tmp37 = React3(inlineStyles.Path, obj7);
          cResult[19] = secondaryColorsTransformed[2];
          cResult[20] = tmp36;
          cResult[21] = tmp37;
          tmp34 = tmp37;
          tmp33 = tmp36;
        } else {
          tmp33 = cResult[20];
          tmp34 = cResult[21];
        }
        if (cResult[22] !== primaryColorsTransformed[0]) {
          const obj8 = { d: "M7 14v1h2v-1H7ZM7 12H6v1h1v-1ZM6 11H5v1h1v-1Z", fill: primaryColorsTransformed[0] };
          const tmp40 = React3(inlineStyles.Path, obj8);
          cResult[22] = primaryColorsTransformed[0];
          cResult[23] = tmp40;
          tmp38 = tmp40;
        } else {
          tmp38 = cResult[23];
        }
        if (cResult[24] !== secondaryColorsTransformed[2]) {
          const obj9 = { d: "M7 10H6v1h1v-1Z", fill: secondaryColorsTransformed[2] };
          const tmp43 = React3(inlineStyles.Path, obj9);
          cResult[24] = secondaryColorsTransformed[2];
          cResult[25] = tmp43;
          tmp41 = tmp43;
        } else {
          tmp41 = cResult[25];
        }
        if (cResult[26] !== primaryColorsTransformed[0]) {
          const obj10 = { d: "M9 13h1v-1H9v1ZM10 12h1v-1h-1v1ZM9 11h1v-1H9v1Z", fill: primaryColorsTransformed[0] };
          const tmp46 = React3(inlineStyles.Path, obj10);
          cResult[26] = primaryColorsTransformed[0];
          cResult[27] = tmp46;
          tmp44 = tmp46;
        } else {
          tmp44 = cResult[27];
        }
        if (cResult[28] !== secondaryColorsTransformed[2]) {
          const obj11 = { d: "M8 4H7v1h1V4Z", fill: secondaryColorsTransformed[2] };
          const tmp49 = React3(inlineStyles.Path, obj11);
          cResult[28] = secondaryColorsTransformed[2];
          cResult[29] = tmp49;
          tmp47 = tmp49;
        } else {
          tmp47 = cResult[29];
        }
        if (cResult[30] !== secondaryColorsTransformed[0]) {
          const obj12 = { d: "M10 5H9v1h1V5ZM11 4h-1v1h1V4Z", fill: secondaryColorsTransformed[0] };
          const tmp52 = React3(inlineStyles.Path, obj12);
          cResult[30] = secondaryColorsTransformed[0];
          cResult[31] = tmp52;
          tmp50 = tmp52;
        } else {
          tmp50 = cResult[31];
        }
        const _Symbol3 = Symbol;
        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp65 = React3(inlineStyles.Path, {
            d: "M12 10h1V9h2V7h-2V6h-1V5h-1v1h-1v1H9v2h1v1h1v1h1v-1Z",
            fill: "#C7C7C7",
          });
          const tmp66 = React3(inlineStyles.Path, { d: "M15 7h-1v2h1V7Z", fill: "#707070" });
          const tmp67 = React3(inlineStyles.Path, { d: "M12 6V5h-1v1h1ZM11 7V6h-1v1h1Z", fill: "#fff" });
          const tmp68 = React3(inlineStyles.Path, {
            d: "M11 10V9h-1v1h1ZM10 9V8H9v1h1ZM13 10V9h-1v1h1ZM12 11v-1h-1v1h1Z",
            fill: "#707070",
          });
          const tmp69 = React3(inlineStyles.Path, {
            d: "M4 10H3V9H1V7h2V6h1V5h1v1h1v1h1v2H6v1H5v1H4v-1Z",
            fill: "#C7C7C7",
          });
          const tmp70 = React3(inlineStyles.Path, { d: "M1 9h1V7H1v2Z", fill: "#fff" });
          const tmp71 = React3(inlineStyles.Path, { d: "M6 9h1V7H6v2Z", fill: "#707070" });
          const tmp72 = React3(inlineStyles.Path, { d: "M5 6V5H4v1h1ZM4 7V6H3v1h1ZM5 8V7H4v1h1Z", fill: "#fff" });
          const tmp73 = React3(inlineStyles.Path, { d: "M6 10V9H5v1h1ZM5 11v-1H4v1h1Z", fill: "#707070" });
          const tmp74 = React3(inlineStyles.Path, {
            d: "M5 4H4v1h1V4ZM6 5H5v1h1V5ZM7 6H6v1h1V6ZM9 7H7v2h2V7ZM10 9H9v1h1V9ZM11 10h-1v1h1v-1ZM4 5H3v1h1V5ZM9 16v-1H7v1h2ZM7 13H6v2h1v-2ZM1 9v1h2V9H1ZM6 12H5v1h1v-1ZM5 11H4v1h1v-1ZM4 10H3v1h1v-1ZM9 3h1V1H9v2ZM15 9h1V7h-1v2ZM15 7V6h-2v1h2ZM10 4h1V3h-1v1ZM11 5h1V4h-1v1ZM10 6h1V5h-1v1ZM9 7h1V6H9v1ZM6 10h1V9H6v1ZM5 11h1v-1H5v1Z",
            fill: "#000",
          });
          const tmp75 = React3(inlineStyles.Path, {
            d: "M11 5h1V4h-1v1ZM12 6h1V5h-1v1ZM9 15h1v-2H9v2ZM13 9v1h2V9h-2ZM10 13h1v-1h-1v1ZM11 12h1v-1h-1v1ZM12 11h1v-1h-1v1Z",
            fill: "#000",
          });
          cResult[32] = tmp65;
          cResult[33] = tmp66;
          cResult[34] = tmp67;
          cResult[35] = tmp68;
          cResult[36] = tmp69;
          cResult[37] = tmp70;
          cResult[38] = tmp71;
          cResult[39] = tmp72;
          cResult[40] = tmp73;
          cResult[41] = tmp74;
          cResult[42] = tmp75;
          tmp63 = tmp75;
          tmp62 = tmp74;
          tmp61 = tmp73;
          tmp60 = tmp72;
          tmp59 = tmp71;
          tmp58 = tmp70;
          tmp57 = tmp69;
          tmp56 = tmp68;
          tmp55 = tmp67;
          tmp54 = tmp66;
          tmp53 = tmp65;
        } else {
          tmp53 = cResult[32];
          tmp54 = cResult[33];
          tmp55 = cResult[34];
          tmp56 = cResult[35];
          tmp57 = cResult[36];
          tmp58 = cResult[37];
          tmp59 = cResult[38];
          tmp60 = cResult[39];
          tmp61 = cResult[40];
          tmp62 = cResult[41];
          tmp63 = cResult[42];
        }
        if (cResult[43] === num8) {
          if (cResult[44] === tmp5) {
            if (cResult[45] === tmp33) {
              if (cResult[46] === tmp34) {
                if (cResult[47] === tmp38) {
                  if (cResult[48] === tmp41) {
                    if (cResult[49] === tmp44) {
                      if (cResult[50] === tmp47) {
                        if (cResult[51] === tmp50) {
                          if (cResult[52] === tmp14) {
                            if (cResult[53] === tmp17) {
                              if (cResult[54] === tmp24) {
                                if (cResult[55] === tmp27) {
                                  let tmp76;
                                  if (cResult[56] === num7) {
                                    tmp76 = cResult[57];
                                  }
                                  return tmp76;
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
        const obj13 = { width: num7, height: num8, viewBox: "0 0 16 16", fill: "none", children: items };
        const Svg = inlineStyles.Svg;
        const merged = Object.assign(tmp5);
        items = [
          tmp14,
          tmp17,
          tmp21,
          tmp24,
          tmp27,
          tmp30,
          tmp33,
          tmp34,
          tmp38,
          tmp41,
          tmp44,
          tmp47,
          tmp50,
          tmp53,
          tmp54,
          tmp55,
          tmp56,
          tmp57,
          tmp58,
          tmp59,
          tmp60,
          tmp61,
          tmp62,
          tmp63,
        ];
        const tmp81 = hasOwnProperty(Svg, obj13);
        cResult[43] = num8;
        cResult[44] = tmp5;
        cResult[45] = tmp33;
        cResult[46] = tmp34;
        cResult[47] = tmp38;
        cResult[48] = tmp41;
        cResult[49] = tmp44;
        cResult[50] = tmp47;
        cResult[51] = tmp50;
        cResult[52] = tmp14;
        cResult[53] = tmp17;
        cResult[54] = tmp24;
        cResult[55] = tmp27;
        cResult[56] = num7;
        cResult[57] = tmp81;
        tmp76 = tmp81;
      }
      const obj14 = {
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
      const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj14);
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
      items = [, , , , , , , , , , , , , , , , , , , , , , ,];
      const obj4 = { d: "M10 4V3H9V1H7v2H6v1H5v1h1v1h1v1h2V6h1V5h1V4h-1Z", fill: secondaryColorsTransformed[1] };
      items[0] = React3(inlineStyles.Path, obj4);
      const obj5 = { d: "M10 12v1H9v2H7v-2H6v-1H5v-1h1v-1h1V9h2v1h1v1h1v1h-1Z", fill: primaryColorsTransformed[1] };
      items[1] = React3(inlineStyles.Path, obj5);
      items[2] = React3(inlineStyles.Path, { d: "M7 0v1h2V0H7Z", fill: "#000" });
      const obj6 = { d: "M7 1v1h2V1H7Z", fill: secondaryColorsTransformed[2] };
      items[3] = React3(inlineStyles.Path, obj6);
      const obj7 = { d: "M7 6v1h2V6H7Z", fill: secondaryColorsTransformed[0] };
      items[4] = React3(inlineStyles.Path, obj7);
      items[5] = React3(inlineStyles.Path, { d: "M7 1H6v2h1V1ZM1 7H0v2h1V7ZM3 7V6H1v1h2ZM6 3H5v1h1V3Z", fill: "#000" });
      const obj8 = { d: "M6 4H5v1h1V4ZM7 3H6v1h1V3Z", fill: secondaryColorsTransformed[2] };
      items[6] = React3(inlineStyles.Path, obj8);
      const obj9 = { d: "M7 9v1h2V9H7Z", fill: secondaryColorsTransformed[2] };
      items[7] = React3(inlineStyles.Path, obj9);
      const obj10 = { d: "M7 14v1h2v-1H7ZM7 12H6v1h1v-1ZM6 11H5v1h1v-1Z", fill: primaryColorsTransformed[0] };
      items[8] = React3(inlineStyles.Path, obj10);
      const obj11 = { d: "M7 10H6v1h1v-1Z", fill: secondaryColorsTransformed[2] };
      items[9] = React3(inlineStyles.Path, obj11);
      const obj12 = { d: "M9 13h1v-1H9v1ZM10 12h1v-1h-1v1ZM9 11h1v-1H9v1Z", fill: primaryColorsTransformed[0] };
      items[10] = React3(inlineStyles.Path, obj12);
      const obj13 = { d: "M8 4H7v1h1V4Z", fill: secondaryColorsTransformed[2] };
      items[11] = React3(inlineStyles.Path, obj13);
      const obj14 = { d: "M10 5H9v1h1V5ZM11 4h-1v1h1V4Z", fill: secondaryColorsTransformed[0] };
      items[12] = React3(inlineStyles.Path, obj14);
      items[13] = React3(inlineStyles.Path, {
        d: "M12 10h1V9h2V7h-2V6h-1V5h-1v1h-1v1H9v2h1v1h1v1h1v-1Z",
        fill: "#C7C7C7",
      });
      items[14] = React3(inlineStyles.Path, { d: "M15 7h-1v2h1V7Z", fill: "#707070" });
      items[15] = React3(inlineStyles.Path, { d: "M12 6V5h-1v1h1ZM11 7V6h-1v1h1Z", fill: "#fff" });
      items[16] = React3(inlineStyles.Path, {
        d: "M11 10V9h-1v1h1ZM10 9V8H9v1h1ZM13 10V9h-1v1h1ZM12 11v-1h-1v1h1Z",
        fill: "#707070",
      });
      items[17] = React3(inlineStyles.Path, { d: "M4 10H3V9H1V7h2V6h1V5h1v1h1v1h1v2H6v1H5v1H4v-1Z", fill: "#C7C7C7" });
      items[18] = React3(inlineStyles.Path, { d: "M1 9h1V7H1v2Z", fill: "#fff" });
      items[19] = React3(inlineStyles.Path, { d: "M6 9h1V7H6v2Z", fill: "#707070" });
      items[20] = React3(inlineStyles.Path, { d: "M5 6V5H4v1h1ZM4 7V6H3v1h1ZM5 8V7H4v1h1Z", fill: "#fff" });
      items[21] = React3(inlineStyles.Path, { d: "M6 10V9H5v1h1ZM5 11v-1H4v1h1Z", fill: "#707070" });
      items[22] = React3(inlineStyles.Path, {
        d: "M5 4H4v1h1V4ZM6 5H5v1h1V5ZM7 6H6v1h1V6ZM9 7H7v2h2V7ZM10 9H9v1h1V9ZM11 10h-1v1h1v-1ZM4 5H3v1h1V5ZM9 16v-1H7v1h2ZM7 13H6v2h1v-2ZM1 9v1h2V9H1ZM6 12H5v1h1v-1ZM5 11H4v1h1v-1ZM4 10H3v1h1v-1ZM9 3h1V1H9v2ZM15 9h1V7h-1v2ZM15 7V6h-2v1h2ZM10 4h1V3h-1v1ZM11 5h1V4h-1v1ZM10 6h1V5h-1v1ZM9 7h1V6H9v1ZM6 10h1V9H6v1ZM5 11h1v-1H5v1Z",
        fill: "#000",
      });
      items[23] = React3(inlineStyles.Path, {
        d: "M11 5h1V4h-1v1ZM12 6h1V5h-1v1ZM9 15h1v-2H9v2ZM13 9v1h2V9h-2ZM10 13h1v-1h-1v1ZM11 12h1v-1h-1v1ZM12 11h1v-1h-1v1Z",
        fill: "#000",
      });
      return hasOwnProperty(Svg, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCompass.tsx");

export const GuildBadgeCompass = tmp4;
