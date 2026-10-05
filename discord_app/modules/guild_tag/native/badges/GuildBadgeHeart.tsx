// discord_app/modules/guild_tag/native/badges/GuildBadgeHeart.tsx
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
const primaryBaseColors = ["#ff1b90", "#ff7fc0", "#f0f0f0"];
const primaryTintLuminances = [0.2, 0.52, 1];
let items = [
  { base: 3, tint: 1 },
  { base: 2, tint: 1 },
  { base: 5, tint: 1 },
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
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let width;
      const obj = react2;
      const cResult = obj.c(26);
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
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = React3(inlineStyles.Path, {
          d: "M7 2v1h2V2H7ZM9 1v1h4V1H9ZM13 2v1h1V2h-1ZM14 3v1h1V3h-1ZM15 4v5h1V4h-1ZM14 9v2h1V9h-1ZM13 11v1h1v-1h-1ZM11 12v1h2v-1h-2ZM9 13v1h2v-1H9ZM7 14v1h2v-1H7Z",
          fill: "#000",
        });
        cResult[7] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] !== primaryColorsTransformed[1]) {
        const obj3 = {
          d: "M15 4h-1V3h-1V2H9v1H7V2H3v1H2v1H1v5h1v2h1v1h2v1h2v1h2v-1h2v-1h2v-1h1V9h1V4Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp21 = React3(inlineStyles.Path, obj3);
        cResult[8] = primaryColorsTransformed[1];
        cResult[9] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== primaryColorsTransformed[0]) {
        const obj4 = {
          d: "M15 4h-1v5h1V4ZM14 9h-1v2h1V9ZM3 9H2v2h1V9ZM13 11h-2v1h2v-1ZM11 12H9v1h2v-1ZM9 13H7v1h2v-1ZM7 12H5v1h2v-1ZM5 11H3v1h2v-1Z",
          fill: primaryColorsTransformed[0],
        };
        const tmp24 = React3(inlineStyles.Path, obj4);
        cResult[10] = primaryColorsTransformed[0];
        cResult[11] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[11];
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp27 = React3(inlineStyles.Path, {
          d: "M3 1v1h4V1H3ZM2 2v1h1V2H2ZM1 3v1h1V3H1ZM0 4v5h1V4H0ZM1 9v2h1V9H1ZM2 11v1h1v-1H2ZM3 12v1h2v-1H3ZM5 13v1h2v-1H5Z",
          fill: "#000",
        });
        cResult[12] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[12];
      }
      if (cResult[13] !== primaryColorsTransformed[2]) {
        const obj5 = { d: "M3 2v1h4V2H3ZM9 2v1h4V2H9ZM7 3v1h2V3H7Z", fill: primaryColorsTransformed[2] };
        const tmp30 = React3(inlineStyles.Path, obj5);
        cResult[13] = primaryColorsTransformed[2];
        cResult[14] = tmp30;
        tmp28 = tmp30;
      } else {
        tmp28 = cResult[14];
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp33 = React3(inlineStyles.Path, {
          opacity: 0.6,
          d: "M11 6V5H9v1H7V5H5v1H4v3h1v1h2.01v1h2v-1H11V9h1V6h-1Z",
          fill: "#fff",
        });
        cResult[15] = tmp33;
        tmp31 = tmp33;
      } else {
        tmp31 = cResult[15];
      }
      if (cResult[16] !== primaryColorsTransformed[2]) {
        const obj6 = { d: "M13 3v1h1V3h-1ZM2 3v1h1V3H2ZM3 4v1h1V4H3ZM1 4v2h1V4H1Z", fill: primaryColorsTransformed[2] };
        const tmp36 = React3(inlineStyles.Path, obj6);
        cResult[16] = primaryColorsTransformed[2];
        cResult[17] = tmp36;
        tmp34 = tmp36;
      } else {
        tmp34 = cResult[17];
      }
      if (cResult[18] === num7) {
        if (cResult[19] === tmp5) {
          if (cResult[20] === tmp34) {
            if (cResult[21] === tmp19) {
              if (cResult[22] === tmp22) {
                if (cResult[23] === tmp28) {
                  let tmp37;
                  if (cResult[24] === num6) {
                    tmp37 = cResult[25];
                  }
                  return tmp37;
                }
              }
            }
          }
        }
      }
      const obj7 = { width: num6, height: num7, viewBox: "0 0 16 16", fill: "none", children: items };
      const Svg = inlineStyles.Svg;
      const merged = Object.assign(tmp5);
      items = [tmp16, tmp19, tmp22, tmp25, tmp28, tmp31, tmp34];
      const tmp39 = hasOwnProperty(Svg, obj7);
      cResult[18] = num7;
      cResult[19] = tmp5;
      cResult[20] = tmp34;
      cResult[21] = tmp19;
      cResult[22] = tmp22;
      cResult[23] = tmp28;
      cResult[24] = num6;
      cResult[25] = tmp39;
      tmp37 = tmp39;
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
      items = [
        React3(inlineStyles.Path, {
          d: "M7 2v1h2V2H7ZM9 1v1h4V1H9ZM13 2v1h1V2h-1ZM14 3v1h1V3h-1ZM15 4v5h1V4h-1ZM14 9v2h1V9h-1ZM13 11v1h1v-1h-1ZM11 12v1h2v-1h-2ZM9 13v1h2v-1H9ZM7 14v1h2v-1H7Z",
          fill: "#000",
        }),
        ,
        ,
        ,
        ,
        ,
      ];
      const obj4 = {
        d: "M15 4h-1V3h-1V2H9v1H7V2H3v1H2v1H1v5h1v2h1v1h2v1h2v1h2v-1h2v-1h2v-1h1V9h1V4Z",
        fill: primaryColorsTransformed[1],
      };
      items[1] = React3(inlineStyles.Path, obj4);
      const obj5 = {
        d: "M15 4h-1v5h1V4ZM14 9h-1v2h1V9ZM3 9H2v2h1V9ZM13 11h-2v1h2v-1ZM11 12H9v1h2v-1ZM9 13H7v1h2v-1ZM7 12H5v1h2v-1ZM5 11H3v1h2v-1Z",
        fill: primaryColorsTransformed[0],
      };
      items[2] = React3(inlineStyles.Path, obj5);
      items[3] = React3(inlineStyles.Path, {
        d: "M3 1v1h4V1H3ZM2 2v1h1V2H2ZM1 3v1h1V3H1ZM0 4v5h1V4H0ZM1 9v2h1V9H1ZM2 11v1h1v-1H2ZM3 12v1h2v-1H3ZM5 13v1h2v-1H5Z",
        fill: "#000",
      });
      const obj6 = { d: "M3 2v1h4V2H3ZM9 2v1h4V2H9ZM7 3v1h2V3H7Z", fill: primaryColorsTransformed[2] };
      items[4] = React3(inlineStyles.Path, obj6);
      items[5] = React3(inlineStyles.Path, {
        opacity: 0.6,
        d: "M11 6V5H9v1H7V5H5v1H4v3h1v1h2.01v1h2v-1H11V9h1V6h-1Z",
        fill: "#fff",
      });
      const obj7 = { d: "M13 3v1h1V3h-1ZM2 3v1h1V3H2ZM3 4v1h1V4H3ZM1 4v2h1V4H1Z", fill: primaryColorsTransformed[2] };
      items[6] = React3(inlineStyles.Path, obj7);
      return hasOwnProperty(Svg, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeHeart.tsx");

export const GuildBadgeHeart = tmp4;
