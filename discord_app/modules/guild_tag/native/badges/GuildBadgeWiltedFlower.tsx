// discord_app/modules/guild_tag/native/badges/GuildBadgeWiltedFlower.tsx
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
const primaryBaseColors = ["#480733", "#800E6F", "#E011AC"];
const primaryTintLuminances = [0.1, 0.3, 0.55];
let items = [
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
  { base: 3, tint: 1 },
];
const secondaryBaseColors = ["#096A4C", "#2DC92D"];
const secondaryTintLuminances = [0.25, 0.55];
const items1 = [
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
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
      const cResult = obj.c(31);
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
        let tmp17;
        let tmp21;
        let tmp24;
        let tmp27;
        let tmp30;
        let tmp35;
        let tmp39;
        let tmp38;
        if (cResult[7] === tmp6) {
          tmp12 = cResult[8];
        }
        ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
        let tmp15;
        if (secondaryColorsTransformed != null) {
          tmp15 = secondaryColorsTransformed[1];
        }
        if (tmp15 == null) {
          tmp15 = secondaryBaseColors[1];
        }
        if (cResult[9] !== tmp15) {
          const obj2 = {
            d: "M2 12h1v1h1v1h1v-1h1v1h1v1H3v-1H2v-1H1V10h1v2Zm3 1h-1v-1h1v1ZM11 2H6v1h-1v1h-1v8h-1V3h1V2h1V1h6v1Z",
            fill: tmp15,
          };
          const tmp19 = React3(inlineStyles.Path, obj2);
          cResult[9] = tmp15;
          cResult[10] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp23 = React3(inlineStyles.Path, {
            d: "M2 10H1v-1h1v1ZM8 10h-1v-1h1v1ZM9 7h-1V4h1v3ZM10 4h-1v-1h1v1Z",
            fill: "white",
          });
          cResult[11] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[11];
        }
        if (cResult[12] !== primaryColorsTransformed[0]) {
          const obj3 = {
            d: "M8 11h-1v-1h1v1ZM9 10h-1v-1h1v1ZM14 10h-2v-1h2v1ZM10 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-1v-2h1v2ZM12 6h-1V3h1v3Z",
            fill: primaryColorsTransformed[0],
          };
          const tmp26 = React3(inlineStyles.Path, obj3);
          cResult[12] = primaryColorsTransformed[0];
          cResult[13] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[13];
        }
        if (cResult[14] !== primaryColorsTransformed[1]) {
          const obj4 = { d: "M11 9h1v1h-1v1H8v-1h1v-1h1v-1h1v1Z", fill: primaryColorsTransformed[1] };
          const tmp29 = React3(inlineStyles.Path, obj4);
          cResult[14] = primaryColorsTransformed[1];
          cResult[15] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[15];
        }
        if (cResult[16] !== primaryColorsTransformed[2]) {
          const obj5 = {
            d: "M14 10v-1h1v2H12v-1h2ZM11 6h-1v2h-1v1h-1v-2h1V4h1v-1h1v3ZM13 4h1v5h-2v-1h-1v-2h1V3h1v1Z",
            fill: primaryColorsTransformed[2],
          };
          const tmp32 = React3(inlineStyles.Path, obj5);
          cResult[16] = primaryColorsTransformed[2];
          cResult[17] = tmp32;
          tmp30 = tmp32;
        } else {
          tmp30 = cResult[17];
        }
        let first;
        if (secondaryColorsTransformed != null) {
          first = secondaryColorsTransformed[0];
        }
        if (first == null) {
          first = secondaryBaseColors[0];
        }
        if (cResult[18] !== first) {
          const obj6 = { d: "M5 14h-1v-1h1v1ZM4 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM12 3H9V2h3v1Z", fill: first };
          const tmp37 = React3(inlineStyles.Path, obj6);
          cResult[18] = first;
          cResult[19] = tmp37;
          tmp35 = tmp37;
        } else {
          tmp35 = cResult[19];
        }
        const _Symbol2 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp41 = React3(inlineStyles.Path, { d: "M2 14h1v1h4v-1h1v2H2v-1H1v-2h1v1Z", fill: "black" });
          const tmp42 = React3(inlineStyles.Path, {
            d: "M7 14h-1v-1h1v1ZM3 11H2v-2H1v4H0V7h1v1h1V3h1v8ZM6 13h-1v-1h1v1ZM5 12h-1V4h1v8ZM11 12H7v-1h4v1ZM15 12H12v-1h3v1ZM7 11h-1v-2h1v2ZM12 11h-1v-1h1v1ZM16 11h-1v-2h1v2ZM8 9h-1V4h1v5ZM15 9h-1V4h1v5ZM6 4h-1v-1h1v1ZM9 4h-1v-1h-2V2h3v2ZM14 4h-1v-1h1v1ZM4 3h-1V2h1v1ZM13 3h-1V2h1v1ZM5 2h-1V1h1v1ZM12 2h-1V1h1v1ZM11 1H5V0h6v1Z",
            fill: "black",
          });
          cResult[20] = tmp41;
          cResult[21] = tmp42;
          tmp39 = tmp42;
          tmp38 = tmp41;
        } else {
          tmp38 = cResult[20];
          tmp39 = cResult[21];
        }
        if (cResult[22] === num8) {
          if (cResult[23] === tmp5) {
            if (cResult[24] === tmp35) {
              if (cResult[25] === tmp17) {
                if (cResult[26] === tmp24) {
                  if (cResult[27] === tmp27) {
                    if (cResult[28] === tmp30) {
                      let tmp43;
                      if (cResult[29] === num7) {
                        tmp43 = cResult[30];
                      }
                      return tmp43;
                    }
                  }
                }
              }
            }
          }
        }
        const obj7 = { width: num7, height: num8, viewBox: "0 0 16 16", fill: "none", children: items };
        const Svg = inlineStyles.Svg;
        const merged = Object.assign(tmp5);
        items = [tmp17, tmp21, tmp24, tmp27, tmp30, tmp35, tmp38, tmp39];
        const tmp48 = hasOwnProperty(Svg, obj7);
        cResult[22] = num8;
        cResult[23] = tmp5;
        cResult[24] = tmp35;
        cResult[25] = tmp17;
        cResult[26] = tmp24;
        cResult[27] = tmp27;
        cResult[28] = tmp30;
        cResult[29] = num7;
        cResult[30] = tmp48;
        tmp43 = tmp48;
      }
      const obj8 = {
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
      const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj8);
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
      let tmp9;
      const Path = inlineStyles.Path;
      if (secondaryColorsTransformed != null) {
        tmp9 = secondaryColorsTransformed[1];
      }
      if (tmp9 == null) {
        tmp9 = secondaryBaseColors[1];
      }
      items = [
        React3(Path, {
          d: "M2 12h1v1h1v1h1v-1h1v1h1v1H3v-1H2v-1H1V10h1v2Zm3 1h-1v-1h1v1ZM11 2H6v1h-1v1h-1v8h-1V3h1V2h1V1h6v1Z",
          fill: tmp9,
        }),
        React3(inlineStyles.Path, {
          d: "M2 10H1v-1h1v1ZM8 10h-1v-1h1v1ZM9 7h-1V4h1v3ZM10 4h-1v-1h1v1Z",
          fill: "white",
        }),
        ,
        ,
        ,
        ,
        ,
      ];
      const obj4 = {
        d: "M8 11h-1v-1h1v1ZM9 10h-1v-1h1v1ZM14 10h-2v-1h2v1ZM10 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-1v-2h1v2ZM12 6h-1V3h1v3Z",
        fill: primaryColorsTransformed[0],
      };
      items[2] = React3(inlineStyles.Path, obj4);
      const obj5 = { d: "M11 9h1v1h-1v1H8v-1h1v-1h1v-1h1v1Z", fill: primaryColorsTransformed[1] };
      items[3] = React3(inlineStyles.Path, obj5);
      const obj6 = {
        d: "M14 10v-1h1v2H12v-1h2ZM11 6h-1v2h-1v1h-1v-2h1V4h1v-1h1v3ZM13 4h1v5h-2v-1h-1v-2h1V3h1v1Z",
        fill: primaryColorsTransformed[2],
      };
      items[4] = React3(inlineStyles.Path, obj6);
      let first;
      const Path2 = inlineStyles.Path;
      if (secondaryColorsTransformed != null) {
        first = secondaryColorsTransformed[0];
      }
      if (first == null) {
        first = secondaryBaseColors[0];
      }
      items[5] = React3(Path2, { d: "M5 14h-1v-1h1v1ZM4 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM12 3H9V2h3v1Z", fill: first });
      items[6] = React3(inlineStyles.Path, { d: "M2 14h1v1h4v-1h1v2H2v-1H1v-2h1v1Z", fill: "black" });
      items[7] = React3(inlineStyles.Path, {
        d: "M7 14h-1v-1h1v1ZM3 11H2v-2H1v4H0V7h1v1h1V3h1v8ZM6 13h-1v-1h1v1ZM5 12h-1V4h1v8ZM11 12H7v-1h4v1ZM15 12H12v-1h3v1ZM7 11h-1v-2h1v2ZM12 11h-1v-1h1v1ZM16 11h-1v-2h1v2ZM8 9h-1V4h1v5ZM15 9h-1V4h1v5ZM6 4h-1v-1h1v1ZM9 4h-1v-1h-2V2h3v2ZM14 4h-1v-1h1v1ZM4 3h-1V2h1v1ZM13 3h-1V2h1v1ZM5 2h-1V1h1v1ZM12 2h-1V1h1v1ZM11 1H5V0h6v1Z",
        fill: "black",
      });
      return hasOwnProperty(Svg, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeWiltedFlower.tsx");

export const GuildBadgeWiltedFlower = tmp4;
