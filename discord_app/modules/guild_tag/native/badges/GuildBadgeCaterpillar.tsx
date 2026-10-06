// discord_app/modules/guild_tag/native/badges/GuildBadgeCaterpillar.tsx
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
const primaryBaseColors = ["#05562C", "#1DAA5A"];
const primaryTintLuminances = [0.25, 0.45];
let items = [
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
];
const secondaryBaseColors = ["#E6CF1E"];
const secondaryTintLuminances = [0.7];
const items1 = [{ base: 3, tint: 1 }];
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
      const cResult = obj.c(24);
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
        let tmp21;
        let tmp27;
        let tmp30;
        if (cResult[7] === tmp6) {
          tmp12 = cResult[8];
        }
        ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
        if (cResult[9] !== primaryColorsTransformed[1]) {
          const obj2 = {
            d: "M3 14H2v-1h1v1ZM2 13H1v-1h1v1ZM5 13h-2v-1H2v-1h3v2ZM12 10h2v1h-1v2h-2v-1h-1v-2h1v-1h1v1ZM15 12h-1v-1h1v1ZM7 5h-1v-1h-1v3h2v1h-1v2h-1v-1h-1V3h1V2h1V1h1v4ZM11 5h1v1h-1v1h-1V4h1v1ZM10 4h-1v-1h1v1Z",
            fill: primaryColorsTransformed[1],
          };
          const tmp16 = React3(inlineStyles.Path, obj2);
          cResult[9] = primaryColorsTransformed[1];
          cResult[10] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp20 = React3(inlineStyles.Path, {
            d: "M15 11h-1v-1h1v1ZM14 10h-2v-1h2v1ZM12 5h-1v-1h1v1ZM11 4h-1v-1h1v1ZM10 3h-1V2h1v1ZM9 2h-2V1h2v1Z",
            fill: "white",
          });
          cResult[11] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[11];
        }
        if (cResult[12] !== primaryColorsTransformed[0]) {
          const obj3 = {
            d: "M4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM5 10h1v2h-1v-1h-1v-2h1v1ZM12 9h-1v1h-1V7h1v-1h1v3ZM6 5h1v2h-2V4h1v1ZM9 4h-2V2h2v2Z",
            fill: primaryColorsTransformed[0],
          };
          const tmp23 = React3(inlineStyles.Path, obj3);
          cResult[12] = primaryColorsTransformed[0];
          cResult[13] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        let first;
        if (secondaryColorsTransformed != null) {
          first = secondaryColorsTransformed[0];
        }
        if (first == null) {
          first = secondaryBaseColors[0];
        }
        if (cResult[14] !== first) {
          const obj4 = {
            d: "M10 12h1v1h3v-1h1v2h-1v1H11v-1h-1v-1h-1V5h-1v5h-1v3h-1v1h-1v1H2v-1h2v-1h1v-1h1V8h1V4h3v8ZM2 14H1v-1h1v1Z",
            fill: first,
          };
          const tmp29 = React3(inlineStyles.Path, obj4);
          cResult[14] = first;
          cResult[15] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[15];
        }
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp32 = React3(inlineStyles.Path, {
            d: "M5 16H2v-1h3v1ZM14 15v1H11v-1h3ZM2 15H1v-1h1v1ZM6 15h-1v-1h1v1ZM11 15h-1v-1h1v1ZM15 15h-1v-1h1v1ZM1 14H0v-2h1v2ZM7 14h-1v-1h1v1ZM10 14h-1v-1h1v1ZM16 14h-1V10h1v4ZM9 13h-2V10h1V5h1v8ZM14 13h-1v-2h1v2ZM2 12H1v-1h1v1ZM4 11H2v-1h1V3h1v8ZM15 10h-1v-1h1v1ZM13 8h1v1h-2V4h1v4ZM16 9h-1v-2h1v2ZM15 7h-1v-1h1v1ZM12 4h-1v-1h1v1ZM5 3h-1V2h1v1ZM11 3h-1V2h1v1ZM6 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1H6V0h3v1Z",
            fill: "black",
          });
          cResult[16] = tmp32;
          tmp30 = tmp32;
        } else {
          tmp30 = cResult[16];
        }
        if (cResult[17] === num8) {
          if (cResult[18] === tmp5) {
            if (cResult[19] === tmp14) {
              if (cResult[20] === tmp21) {
                if (cResult[21] === tmp27) {
                  let tmp33;
                  if (cResult[22] === num7) {
                    tmp33 = cResult[23];
                  }
                  return tmp33;
                }
              }
            }
          }
        }
        const obj5 = { width: num7, height: num8, viewBox: "0 0 16 16", fill: "none", children: items };
        const Svg = inlineStyles.Svg;
        const merged = Object.assign(tmp5);
        items = [tmp14, tmp18, tmp21, tmp27, tmp30];
        const tmp38 = hasOwnProperty(Svg, obj5);
        cResult[17] = num8;
        cResult[18] = tmp5;
        cResult[19] = tmp14;
        cResult[20] = tmp21;
        cResult[21] = tmp27;
        cResult[22] = num7;
        cResult[23] = tmp38;
        tmp33 = tmp38;
      }
      const obj6 = {
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
      const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj6);
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
      items = [, , , ,];
      const obj4 = {
        d: "M3 14H2v-1h1v1ZM2 13H1v-1h1v1ZM5 13h-2v-1H2v-1h3v2ZM12 10h2v1h-1v2h-2v-1h-1v-2h1v-1h1v1ZM15 12h-1v-1h1v1ZM7 5h-1v-1h-1v3h2v1h-1v2h-1v-1h-1V3h1V2h1V1h1v4ZM11 5h1v1h-1v1h-1V4h1v1ZM10 4h-1v-1h1v1Z",
        fill: primaryColorsTransformed[1],
      };
      items[0] = React3(inlineStyles.Path, obj4);
      items[1] = React3(inlineStyles.Path, {
        d: "M15 11h-1v-1h1v1ZM14 10h-2v-1h2v1ZM12 5h-1v-1h1v1ZM11 4h-1v-1h1v1ZM10 3h-1V2h1v1ZM9 2h-2V1h2v1Z",
        fill: "white",
      });
      const obj5 = {
        d: "M4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM5 10h1v2h-1v-1h-1v-2h1v1ZM12 9h-1v1h-1V7h1v-1h1v3ZM6 5h1v2h-2V4h1v1ZM9 4h-2V2h2v2Z",
        fill: primaryColorsTransformed[0],
      };
      items[2] = React3(inlineStyles.Path, obj5);
      let first;
      const Path = inlineStyles.Path;
      if (secondaryColorsTransformed != null) {
        first = secondaryColorsTransformed[0];
      }
      if (first == null) {
        first = secondaryBaseColors[0];
      }
      items[3] = React3(Path, {
        d: "M10 12h1v1h3v-1h1v2h-1v1H11v-1h-1v-1h-1V5h-1v5h-1v3h-1v1h-1v1H2v-1h2v-1h1v-1h1V8h1V4h3v8ZM2 14H1v-1h1v1Z",
        fill: first,
      });
      items[4] = React3(inlineStyles.Path, {
        d: "M5 16H2v-1h3v1ZM14 15v1H11v-1h3ZM2 15H1v-1h1v1ZM6 15h-1v-1h1v1ZM11 15h-1v-1h1v1ZM15 15h-1v-1h1v1ZM1 14H0v-2h1v2ZM7 14h-1v-1h1v1ZM10 14h-1v-1h1v1ZM16 14h-1V10h1v4ZM9 13h-2V10h1V5h1v8ZM14 13h-1v-2h1v2ZM2 12H1v-1h1v1ZM4 11H2v-1h1V3h1v8ZM15 10h-1v-1h1v1ZM13 8h1v1h-2V4h1v4ZM16 9h-1v-2h1v2ZM15 7h-1v-1h1v1ZM12 4h-1v-1h1v1ZM5 3h-1V2h1v1ZM11 3h-1V2h1v1ZM6 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1H6V0h3v1Z",
        fill: "black",
      });
      return hasOwnProperty(Svg, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCaterpillar.tsx");

export const GuildBadgeCaterpillar = tmp4;
