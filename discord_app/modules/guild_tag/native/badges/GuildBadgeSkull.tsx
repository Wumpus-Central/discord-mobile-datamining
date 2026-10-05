// discord_app/modules/guild_tag/native/badges/GuildBadgeSkull.tsx
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
let closure_2 = ["width", "height", "primaryTintColor"];
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const primaryBaseColors = ["#57595f", "#847d8b", "#d1cdd5"];
const primaryTintLuminances = [0, 0.12, 0.6];
let items = [
  { base: 10, tint: 1 },
  { base: 5, tint: 1 },
  { base: 2, tint: 1 },
];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let height;
      let primaryTintColor;
      let tmp11;
      let tmp16;
      let tmp19;
      let tmp22;
      let tmp25;
      let tmp28;
      let tmp31;
      let tmp34;
      let tmp37;
      let tmp38;
      let tmp39;
      let tmp4;
      let tmp44;
      let tmp47;
      let tmp48;
      let tmp49;
      let tmp5;
      let tmp54;
      let tmp57;
      let tmp6;
      let tmp7;
      let width;
      const obj = react2;
      const cResult = obj.c(45);
      if (cResult[0] !== arg0) {
        ({ width, height, primaryTintColor } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = primaryTintColor;
        cResult[2] = tmp10;
        cResult[3] = width;
        cResult[4] = height;
        tmp7 = height;
        tmp6 = width;
        tmp5 = tmp10;
        tmp4 = primaryTintColor;
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
        const tmpResult = GuildBadgeUtils;
        const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj2);
        cResult[5] = tmp4;
        cResult[6] = transformedBadgeColors;
        tmp11 = transformedBadgeColors;
      } else {
        tmp11 = cResult[6];
      }
      const primaryColorsTransformed = tmp11.primaryColorsTransformed;
      if (cResult[7] !== primaryColorsTransformed[2]) {
        const obj3 = {
          d: "M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z",
          fill: primaryColorsTransformed[2],
        };
        const tmp18 = React3(inlineStyles.Path, obj3);
        cResult[7] = primaryColorsTransformed[2];
        cResult[8] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = React3(inlineStyles.Path, {
          d: "M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z",
          fill: "#000",
        });
        cResult[9] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== primaryColorsTransformed[1]) {
        const obj4 = {
          d: "M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp24 = React3(inlineStyles.Path, obj4);
        cResult[10] = primaryColorsTransformed[1];
        cResult[11] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[11];
      }
      if (cResult[12] !== primaryColorsTransformed[0]) {
        const obj5 = { d: "M7 8H5v2h2V8Z", fill: primaryColorsTransformed[0] };
        const tmp27 = React3(inlineStyles.Path, obj5);
        cResult[12] = primaryColorsTransformed[0];
        cResult[13] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[13];
      }
      if (cResult[14] !== primaryColorsTransformed[1]) {
        const obj6 = { d: "M12 7H9v3h3V7Z", fill: primaryColorsTransformed[1] };
        const tmp30 = React3(inlineStyles.Path, obj6);
        cResult[14] = primaryColorsTransformed[1];
        cResult[15] = tmp30;
        tmp28 = tmp30;
      } else {
        tmp28 = cResult[15];
      }
      if (cResult[16] !== primaryColorsTransformed[0]) {
        const obj7 = { d: "M12 8h-2v2h2V8Z", fill: primaryColorsTransformed[0] };
        const tmp33 = React3(inlineStyles.Path, obj7);
        cResult[16] = primaryColorsTransformed[0];
        cResult[17] = tmp33;
        tmp31 = tmp33;
      } else {
        tmp31 = cResult[17];
      }
      if (cResult[18] !== primaryColorsTransformed[1]) {
        const obj8 = {
          d: "M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp36 = React3(inlineStyles.Path, obj8);
        cResult[18] = primaryColorsTransformed[1];
        cResult[19] = tmp36;
        tmp34 = tmp36;
      } else {
        tmp34 = cResult[19];
      }
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp41 = React3(inlineStyles.Path, { d: "M1 4H0v6h1V4Z", fill: "#000" });
        const tmp42 = React3(inlineStyles.Path, { d: "M2 4H1v6h1V4Z", fill: "#fff" });
        const tmp43 = React3(inlineStyles.Path, {
          d: "M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z",
          fill: "#000",
        });
        cResult[20] = tmp41;
        cResult[21] = tmp42;
        cResult[22] = tmp43;
        tmp39 = tmp43;
        tmp38 = tmp42;
        tmp37 = tmp41;
      } else {
        tmp37 = cResult[20];
        tmp38 = cResult[21];
        tmp39 = cResult[22];
      }
      if (cResult[23] !== primaryColorsTransformed[1]) {
        const obj9 = { d: "M14 10.01h1v-6h-1v6Z", fill: primaryColorsTransformed[1] };
        const tmp46 = React3(inlineStyles.Path, obj9);
        cResult[23] = primaryColorsTransformed[1];
        cResult[24] = tmp46;
        tmp44 = tmp46;
      } else {
        tmp44 = cResult[24];
      }
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp51 = React3(inlineStyles.Path, { d: "M4 0v1h8V0H4Z", fill: "#000" });
        const tmp52 = React3(inlineStyles.Path, {
          d: "M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z",
          fill: "#fff",
        });
        const tmp53 = React3(inlineStyles.Path, { d: "M5 15v1h6v-1H5Z", fill: "#000" });
        cResult[25] = tmp51;
        cResult[26] = tmp52;
        cResult[27] = tmp53;
        tmp49 = tmp53;
        tmp48 = tmp52;
        tmp47 = tmp51;
      } else {
        tmp47 = cResult[25];
        tmp48 = cResult[26];
        tmp49 = cResult[27];
      }
      if (cResult[28] !== primaryColorsTransformed[1]) {
        const obj10 = { d: "M5 14v1h6v-1H5Z", fill: primaryColorsTransformed[1] };
        const tmp56 = React3(inlineStyles.Path, obj10);
        cResult[28] = primaryColorsTransformed[1];
        cResult[29] = tmp56;
        tmp54 = tmp56;
      } else {
        tmp54 = cResult[29];
      }
      if (cResult[30] !== primaryColorsTransformed[0]) {
        const obj11 = { d: "M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z", fill: primaryColorsTransformed[0] };
        const tmp59 = React3(inlineStyles.Path, obj11);
        cResult[30] = primaryColorsTransformed[0];
        cResult[31] = tmp59;
        tmp57 = tmp59;
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
                            let tmp60;
                            if (cResult[43] === num6) {
                              tmp60 = cResult[44];
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
      const obj12 = { width: num6, height: num7, viewBox: "0 0 16 16", fill: "none", children: items };
      const Svg = inlineStyles.Svg;
      const merged = Object.assign(tmp5);
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
      const tmp62 = hasOwnProperty(Svg, obj12);
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
  : (width) => {
      let num = width.width;
      if (num === undefined) {
        num = 24;
      }
      let num2 = width.height;
      if (num2 === undefined) {
        num2 = 24;
      }
      const primaryTintColor = width.primaryTintColor;
      const merged = Object.assign(width, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
      const obj = GuildBadgeUtils;
      const obj2 = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items };
      const primaryColorsTransformed = obj.getTransformedBadgeColors(obj2).primaryColorsTransformed;
      const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items };
      const Svg = inlineStyles.Svg;
      const merged1 = Object.assign(merged);
      items = [, , , , , , , , , , , , , , ,];
      const obj4 = {
        d: "M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z",
        fill: primaryColorsTransformed[2],
      };
      items[0] = React3(inlineStyles.Path, obj4);
      items[1] = React3(inlineStyles.Path, {
        d: "M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z",
        fill: "#000",
      });
      const obj5 = {
        d: "M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z",
        fill: primaryColorsTransformed[1],
      };
      items[2] = React3(inlineStyles.Path, obj5);
      const obj6 = { d: "M7 8H5v2h2V8Z", fill: primaryColorsTransformed[0] };
      items[3] = React3(inlineStyles.Path, obj6);
      const obj7 = { d: "M12 7H9v3h3V7Z", fill: primaryColorsTransformed[1] };
      items[4] = React3(inlineStyles.Path, obj7);
      const obj8 = { d: "M12 8h-2v2h2V8Z", fill: primaryColorsTransformed[0] };
      items[5] = React3(inlineStyles.Path, obj8);
      const obj9 = {
        d: "M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z",
        fill: primaryColorsTransformed[1],
      };
      items[6] = React3(inlineStyles.Path, obj9);
      items[7] = React3(inlineStyles.Path, { d: "M1 4H0v6h1V4Z", fill: "#000" });
      items[8] = React3(inlineStyles.Path, { d: "M2 4H1v6h1V4Z", fill: "#fff" });
      items[9] = React3(inlineStyles.Path, {
        d: "M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z",
        fill: "#000",
      });
      const obj10 = { d: "M14 10.01h1v-6h-1v6Z", fill: primaryColorsTransformed[1] };
      items[10] = React3(inlineStyles.Path, obj10);
      items[11] = React3(inlineStyles.Path, { d: "M4 0v1h8V0H4Z", fill: "#000" });
      items[12] = React3(inlineStyles.Path, {
        d: "M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z",
        fill: "#fff",
      });
      items[13] = React3(inlineStyles.Path, { d: "M5 15v1h6v-1H5Z", fill: "#000" });
      const obj11 = { d: "M5 14v1h6v-1H5Z", fill: primaryColorsTransformed[1] };
      items[14] = React3(inlineStyles.Path, obj11);
      const obj12 = { d: "M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z", fill: primaryColorsTransformed[0] };
      items[15] = React3(inlineStyles.Path, obj12);
      return hasOwnProperty(Svg, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSkull.tsx");

export const GuildBadgeSkull = tmp4;
