// discord_app/modules/guild_tag/native/badges/GuildBadgeWaterDrop.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07576_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#4282d8", "#0abbff", "#ffffff"];
const primaryTintLuminances = [0.1, 0.32, 1];
let items = [
  { base: 3, tint: 1 },
  { base: 3, tint: 1 },
  { base: 10, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeWaterDrop.tsx");

export const GuildBadgeWaterDrop = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgeWaterDrop(arg0) {
      const cResult = c.c(29);
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
      if (cResult[7] !== primaryColorsTransformed[1]) {
        const obj3 = {
          d: "M13 6V5h-1V4h-1V3h-1V2H9V1H7v1H6v1H5v1H4v1H3v1H2v2H1v5h1v1h2v1h8v-1h2v-1h1V8h-1V6h-1Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp18 = React4(inlineStyles.Path, obj3);
        cResult[7] = primaryColorsTransformed[1];
        cResult[8] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = React4(inlineStyles.Path, {
          d: "M7 0v1h2V0H7ZM6 1v1h1V1H6ZM9 1v1h1V1H9ZM10 2v1h1V2h-1ZM11 3v1h1V3h-1ZM12 4v1h1V4h-1ZM13 5v1h1V5h-1ZM14 6v2h1V6h-1ZM1 6v2h1V6H1ZM0 8v5h1V8H0ZM15 8v5h1V8h-1ZM5 2v1h1V2H5ZM4 3v1h1V3H4ZM3 4v1h1V4H3ZM2 5v1h1V5H2ZM1 13v1h1v-1H1ZM14 13v1h1v-1h-1ZM4 15v1h8v-1H4Z",
          fill: "#000",
        });
        cResult[9] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== primaryColorsTransformed[0]) {
        const obj4 = { d: "M4 14v1h8v-1H4Z", fill: primaryColorsTransformed[0] };
        const tmp24 = React4(inlineStyles.Path, obj4);
        cResult[10] = primaryColorsTransformed[0];
        cResult[11] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[11];
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp27 = React4(inlineStyles.Path, { d: "M2 14v1h2v-1H2ZM14 15v-1h-2v1h2Z", fill: "#000" });
        cResult[12] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[12];
      }
      if (cResult[13] !== primaryColorsTransformed[2]) {
        const obj5 = { d: "M7 1v1h2V1H7Z", fill: primaryColorsTransformed[2] };
        const tmp30 = React4(inlineStyles.Path, obj5);
        cResult[13] = primaryColorsTransformed[2];
        cResult[14] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[14];
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp33 = React4(inlineStyles.Path, {
          opacity: 0.5,
          d: "M11 8V7h-1V6H9V5H7v1H6v1H5v1H4v3h1v1h6v-1h1V8h-1Z",
          fill: "#fff",
        });
        cResult[15] = tmp33;
        let tmp31 = tmp33;
      } else {
        tmp31 = cResult[15];
      }
      if (cResult[16] !== primaryColorsTransformed[2]) {
        const obj6 = {
          d: "M6 2v1h1V2H6ZM5 3v1h1V3H5ZM6 4v1h1V4H6ZM4 4v1h1V4H4ZM3 5v1h1V5H3ZM2 6v2h1V6H2ZM1 8v2h1V8H1Z",
          fill: primaryColorsTransformed[2],
        };
        const tmp36 = React4(inlineStyles.Path, obj6);
        cResult[16] = primaryColorsTransformed[2];
        cResult[17] = tmp36;
        let tmp34 = tmp36;
      } else {
        tmp34 = cResult[17];
      }
      if (cResult[18] !== primaryColorsTransformed[0]) {
        const obj7 = {
          d: "M12 5v1h1V5h-1ZM13 6v2h1V6h-1ZM14 8v4h-1v1h-1v1h2v-1h1V8h-1ZM2 14h2v-1H2v1Z",
          fill: primaryColorsTransformed[0],
        };
        const tmp39 = React4(inlineStyles.Path, obj7);
        cResult[18] = primaryColorsTransformed[0];
        cResult[19] = tmp39;
        let tmp37 = tmp39;
      } else {
        tmp37 = cResult[19];
      }
      if (cResult[20] === num7) {
        if (cResult[21] === tmp5) {
          if (cResult[22] === tmp34) {
            if (cResult[23] === tmp37) {
              if (cResult[24] === tmp16) {
                if (cResult[25] === tmp22) {
                  if (cResult[26] === tmp28) {
                    if (cResult[27] === num6) {
                      let tmp40 = cResult[28];
                    }
                    return tmp40;
                  }
                }
              }
            }
          }
        }
      }
      const obj8 = {};
      const merged = Object.assign(tmp5);
      obj8.width = num6;
      obj8.height = num7;
      obj8.viewBox = "0 0 16 16";
      obj8.fill = "none";
      items = [tmp16, tmp19, tmp22, tmp25, tmp28, tmp31, tmp34, tmp37];
      obj8.children = items;
      const tmp42 = hasOwnProperty(inlineStyles.Svg, obj8);
      cResult[20] = num7;
      cResult[21] = tmp5;
      cResult[22] = tmp34;
      cResult[23] = tmp37;
      cResult[24] = tmp16;
      cResult[25] = tmp22;
      cResult[26] = tmp28;
      cResult[27] = num6;
      cResult[28] = tmp42;
      tmp40 = tmp42;
    }
  : function GuildBadgeWaterDrop(primaryTintColor) {
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
          d: "M13 6V5h-1V4h-1V3h-1V2H9V1H7v1H6v1H5v1H4v1H3v1H2v2H1v5h1v1h2v1h8v-1h2v-1h1V8h-1V6h-1Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, {
          d: "M7 0v1h2V0H7ZM6 1v1h1V1H6ZM9 1v1h1V1H9ZM10 2v1h1V2h-1ZM11 3v1h1V3h-1ZM12 4v1h1V4h-1ZM13 5v1h1V5h-1ZM14 6v2h1V6h-1ZM1 6v2h1V6H1ZM0 8v5h1V8H0ZM15 8v5h1V8h-1ZM5 2v1h1V2H5ZM4 3v1h1V3H4ZM3 4v1h1V4H3ZM2 5v1h1V5H2ZM1 13v1h1v-1H1ZM14 13v1h1v-1h-1ZM4 15v1h8v-1H4Z",
          fill: "#000",
        }),
        React4(inlineStyles.Path, { d: "M4 14v1h8v-1H4Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M2 14v1h2v-1H2ZM14 15v-1h-2v1h2Z", fill: "#000" }),
        React4(inlineStyles.Path, { d: "M7 1v1h2V1H7Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, {
          opacity: 0.5,
          d: "M11 8V7h-1V6H9V5H7v1H6v1H5v1H4v3h1v1h6v-1h1V8h-1Z",
          fill: "#fff",
        }),
        React4(inlineStyles.Path, {
          d: "M6 2v1h1V2H6ZM5 3v1h1V3H5ZM6 4v1h1V4H6ZM4 4v1h1V4H4ZM3 5v1h1V5H3ZM2 6v2h1V6H2ZM1 8v2h1V8H1Z",
          fill: primaryColorsTransformed[2],
        }),
        React4(inlineStyles.Path, {
          d: "M12 5v1h1V5h-1ZM13 6v2h1V6h-1ZM14 8v4h-1v1h-1v1h2v-1h1V8h-1ZM2 14h2v-1H2v1Z",
          fill: primaryColorsTransformed[0],
        }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
