// discord_app/modules/guild_tag/native/badges/GuildBadgeSpider.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07576_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#950123", "#DA1846"];
const primaryTintLuminances = [0.2, 0.45];
let items = [
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
];
const secondaryBaseColors = ["#1F1F1F"];
const secondaryTintLuminances = [0.15];
const items1 = [{ base: 5, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSpider.tsx");

export const GuildBadgeSpider = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgeSpider(arg0) {
      const cResult = c.c(25);
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
            d: "M7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM9 10h-2v-1h2v1ZM10 5h-1v1h-2v-1h-1v-2h4v2Z",
            fill: primaryColorsTransformed[1],
          };
          const tmp16 = React4(inlineStyles.Path, obj2);
          cResult[9] = primaryColorsTransformed[1];
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        let str;
        if (secondaryColorsTransformed != null) {
          str = secondaryColorsTransformed[0];
        }
        if (str == null) {
          str = "#1F1F1F";
        }
        if (cResult[11] !== str) {
          const obj3 = { d: "M9 12h-2v-2h2v2ZM6 6h1v1h2v-1h1v-1h1v3h-1v1h-1v-1h-2v1h-1v-1h-1V5h1v1Z", fill: str };
          const tmp20 = React4(inlineStyles.Path, obj3);
          cResult[11] = str;
          cResult[12] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[12];
        }
        if (cResult[13] !== primaryColorsTransformed[0]) {
          const obj4 = {
            d: "M9 13v1h-2v-1h2ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM9 7h-2v-1h2v1ZM7 6h-1v-1h1v1ZM10 6h-1v-1h1v1ZM6 5h-1v-1h1v1ZM11 5h-1v-1h1v1Z",
            fill: primaryColorsTransformed[0],
          };
          const tmp23 = React4(inlineStyles.Path, obj4);
          cResult[13] = primaryColorsTransformed[0];
          cResult[14] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[14];
        }
        const _Symbol = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp29 = React4(inlineStyles.Path, { d: "M7 14h-1v-1h1v1ZM10 14h-1v-1h1v1Z", fill: "#35ED7E" });
          const tmp30 = React4(inlineStyles.Path, {
            d: "M3 7h1V4h1v4h1v1h1v1h-1v2h4v-2h-1v-1h1v-1h1V4h1v3h1V3h1v1h1v3h-1v1h-1v1h-1v1h-1v1h1v-1h2v-1h2v1h-1v1h-1v1h-2v1h2v1h1v1h1v1h-2v-1h-2v-1h-2v-1H6v1h-2v1H2v1H0v-1h1v-1h1v-1h2v-1H2v-1H1v-1H0v-1h2v1h2v-1h-1v-1H2v-1H1V4h1v-1h1v4Zm1 4h1v-1h-1v1Z",
            fill: "black",
            fillRule: "evenodd",
          });
          const tmp31 = React4(inlineStyles.Path, {
            d: "M10 16h-1v-1h-2v1h-1v-2h4v2ZM9 9h-2v-1h2v1ZM6 4h-1v-1h1v1ZM11 4h-1v-1h1v1ZM4 3h-1V2h1v1ZM9 2h1v1H6V2h2V0h1v2ZM13 3h-1V2h1v1Z",
            fill: "black",
          });
          cResult[15] = tmp31;
          cResult[16] = tmp29;
          cResult[17] = tmp30;
          let tmp27 = tmp30;
          let tmp26 = tmp29;
          let tmp25 = tmp31;
        } else {
          tmp25 = cResult[15];
          tmp26 = cResult[16];
          tmp27 = cResult[17];
        }
        if (cResult[18] === num8) {
          if (cResult[19] === tmp5) {
            if (cResult[20] === tmp14) {
              if (cResult[21] === tmp18) {
                if (cResult[22] === tmp21) {
                  if (cResult[23] === num7) {
                    let tmp32 = cResult[24];
                  }
                  return tmp32;
                }
              }
            }
          }
        }
        const obj5 = {};
        const merged = Object.assign(tmp5);
        obj5.width = num7;
        obj5.height = num8;
        obj5.viewBox = "0 0 16 16";
        obj5.fill = "none";
        items = [tmp14, tmp18, tmp21, tmp26, tmp27, tmp25];
        obj5.children = items;
        const tmp37 = hasOwnProperty(inlineStyles.Svg, obj5);
        cResult[18] = num8;
        cResult[19] = tmp5;
        cResult[20] = tmp14;
        cResult[21] = tmp18;
        cResult[22] = tmp21;
        cResult[23] = num7;
        cResult[24] = tmp37;
        tmp32 = tmp37;
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
    }
  : function GuildBadgeSpider(width) {
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
          d: "M7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM9 10h-2v-1h2v1ZM10 5h-1v1h-2v-1h-1v-2h4v2Z",
          fill: primaryColorsTransformed[1],
        }),
        ,
        ,
        ,
        ,
      ];
      let str;
      if (secondaryColorsTransformed != null) {
        str = secondaryColorsTransformed[0];
      }
      if (str == null) {
        str = "#1F1F1F";
      }
      items[1] = React4(inlineStyles.Path, {
        d: "M9 12h-2v-2h2v2ZM6 6h1v1h2v-1h1v-1h1v3h-1v1h-1v-1h-2v1h-1v-1h-1V5h1v1Z",
        fill: str,
      });
      items[2] = React4(inlineStyles.Path, {
        d: "M9 13v1h-2v-1h2ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM9 7h-2v-1h2v1ZM7 6h-1v-1h1v1ZM10 6h-1v-1h1v1ZM6 5h-1v-1h1v1ZM11 5h-1v-1h1v1Z",
        fill: primaryColorsTransformed[0],
      });
      items[3] = React4(inlineStyles.Path, { d: "M7 14h-1v-1h1v1ZM10 14h-1v-1h1v1Z", fill: "#35ED7E" });
      items[4] = React4(inlineStyles.Path, {
        d: "M3 7h1V4h1v4h1v1h1v1h-1v2h4v-2h-1v-1h1v-1h1V4h1v3h1V3h1v1h1v3h-1v1h-1v1h-1v1h-1v1h1v-1h2v-1h2v1h-1v1h-1v1h-2v1h2v1h1v1h1v1h-2v-1h-2v-1h-2v-1H6v1h-2v1H2v1H0v-1h1v-1h1v-1h2v-1H2v-1H1v-1H0v-1h2v1h2v-1h-1v-1H2v-1H1V4h1v-1h1v4Zm1 4h1v-1h-1v1Z",
        fill: "black",
        fillRule: "evenodd",
      });
      items[5] = React4(inlineStyles.Path, {
        d: "M10 16h-1v-1h-2v1h-1v-2h4v2ZM9 9h-2v-1h2v1ZM6 4h-1v-1h1v1ZM11 4h-1v-1h1v1ZM4 3h-1V2h1v1ZM9 2h1v1H6V2h2V0h1v2ZM13 3h-1V2h1v1Z",
        fill: "black",
      });
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
