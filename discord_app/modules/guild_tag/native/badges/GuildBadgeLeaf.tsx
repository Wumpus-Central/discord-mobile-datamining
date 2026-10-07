// discord_app/modules/guild_tag/native/badges/GuildBadgeLeaf.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#4a8359", "#7fb134", "#bcef42", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.2, 0.6, 0.9];
let items = [
  { base: 4, tint: 1 },
  { base: 3, tint: 1 },
  { base: 3, tint: 1 },
  { base: 10, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeLeaf.tsx");

export const GuildBadgeLeaf = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(34);
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
        const obj3 = { d: "M15 2V1H9v1H3v5H1v5h12V7h2V2Z", fill: primaryColorsTransformed[2] };
        const tmp18 = React4(inlineStyles.Path, obj3);
        cResult[7] = primaryColorsTransformed[2];
        cResult[8] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] !== primaryColorsTransformed[1]) {
        const obj4 = { d: "M11 13v-1H5v1h6Z", fill: primaryColorsTransformed[1] };
        const tmp21 = React4(inlineStyles.Path, obj4);
        cResult[9] = primaryColorsTransformed[1];
        cResult[10] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp24 = React4(inlineStyles.Path, { d: "M15 2V1H9v1h6ZM9 3V2H5v1h4Z", fill: "#fff" });
        cResult[11] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[11];
      }
      if (cResult[12] !== primaryColorsTransformed[1]) {
        const obj5 = {
          d: "M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp27 = React4(inlineStyles.Path, obj5);
        cResult[12] = primaryColorsTransformed[1];
        cResult[13] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[13];
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp30 = React4(inlineStyles.Path, { d: "M16 1h-1v6h1V1Z", fill: "#000" });
        cResult[14] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[14];
      }
      if (cResult[15] !== primaryColorsTransformed[0]) {
        const obj6 = { d: "M3 9H2v6h1V9Z", fill: primaryColorsTransformed[0] };
        const tmp33 = React4(inlineStyles.Path, obj6);
        cResult[15] = primaryColorsTransformed[0];
        cResult[16] = tmp33;
        let tmp31 = tmp33;
      } else {
        tmp31 = cResult[16];
      }
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp37 = React4(inlineStyles.Path, {
          d: "M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z",
          fill: "#000",
        });
        const tmp38 = React4(inlineStyles.Path, { d: "M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z", fill: "#fff" });
        cResult[17] = tmp37;
        cResult[18] = tmp38;
        let tmp35 = tmp38;
        let tmp34 = tmp37;
      } else {
        tmp34 = cResult[17];
        tmp35 = cResult[18];
      }
      if (cResult[19] !== primaryColorsTransformed[0]) {
        const obj7 = {
          d: "M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z",
          fill: primaryColorsTransformed[0],
        };
        const tmp41 = React4(inlineStyles.Path, obj7);
        cResult[19] = primaryColorsTransformed[0];
        cResult[20] = tmp41;
        let tmp39 = tmp41;
      } else {
        tmp39 = cResult[20];
      }
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp44 = React4(inlineStyles.Path, { d: "M5 4v1h1V4H5Z", fill: "#fff" });
        cResult[21] = tmp44;
        let tmp42 = tmp44;
      } else {
        tmp42 = cResult[21];
      }
      if (cResult[22] !== primaryColorsTransformed[0]) {
        const obj8 = { d: "M3 8v1h1V8H3Z", fill: primaryColorsTransformed[0] };
        const tmp47 = React4(inlineStyles.Path, obj8);
        cResult[22] = primaryColorsTransformed[0];
        cResult[23] = tmp47;
        let tmp45 = tmp47;
      } else {
        tmp45 = cResult[23];
      }
      if (cResult[24] === num7) {
        if (cResult[25] === tmp5) {
          if (cResult[26] === tmp39) {
            if (cResult[27] === tmp45) {
              if (cResult[28] === tmp16) {
                if (cResult[29] === tmp19) {
                  if (cResult[30] === tmp25) {
                    if (cResult[31] === tmp31) {
                      if (cResult[32] === num6) {
                        let tmp48 = cResult[33];
                      }
                      return tmp48;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj9 = {};
      const merged = Object.assign(tmp5);
      obj9.width = num6;
      obj9.height = num7;
      obj9.viewBox = "0 0 16 16";
      obj9.fill = "none";
      items = [tmp16, tmp19, tmp22, tmp25, tmp28, tmp31, tmp34, tmp35, tmp39, tmp42, tmp45];
      obj9.children = items;
      const tmp50 = hasOwnProperty(inlineStyles.Svg, obj9);
      cResult[24] = num7;
      cResult[25] = tmp5;
      cResult[26] = tmp39;
      cResult[27] = tmp45;
      cResult[28] = tmp16;
      cResult[29] = tmp19;
      cResult[30] = tmp25;
      cResult[31] = tmp31;
      cResult[32] = num6;
      cResult[33] = tmp50;
      tmp48 = tmp50;
    }
  : (primaryTintColor) => {
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
        React4(inlineStyles.Path, { d: "M15 2V1H9v1H3v5H1v5h12V7h2V2Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M11 13v-1H5v1h6Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M15 2V1H9v1h6ZM9 3V2H5v1h4Z", fill: "#fff" }),
        React4(inlineStyles.Path, {
          d: "M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M16 1h-1v6h1V1Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M3 9H2v6h1V9Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, {
          d: "M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z", fill: "#fff" }),
        React4(inlineStyles.Path, {
          d: "M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z",
          fill: primaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, { d: "M5 4v1h1V4H5Z", fill: "#fff" }),
        React4(inlineStyles.Path, { d: "M3 8v1h1V8H3Z", fill: primaryColorsTransformed[0] }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
