// === Module 13742: GuildBadgeFlower ===

// Module 13742 (GuildBadgeFlower)
import react2 from "react" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13730 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const primaryBaseColors = ["#ff1c90", "#ff7fc0", "#f0f0f0"];
const secondaryBaseColors = ["#008456", "#6be473", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.45, 1];
let items = [{ base: 8, tint: 1 }, { base: 4, tint: 1 }, { base: 6, tint: 1 }];
const secondaryTintLuminances = [0.1, 0.35, 1];
const items1 = [{ base: 8, tint: 1 }, { base: 4, tint: 1 }, { base: 6, tint: 1 }];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
  const cResult = obj.c(32);
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
    let tmp24;
    let tmp27;
    let tmp30;
    let tmp33;
    if (cResult[7] === tmp6) {
      tmp12 = cResult[8];
    }
    ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
    if (cResult[9] !== primaryColorsTransformed[1]) {
      const obj2 = { d: "M15 2h-1V1h-3v3h-1V2H9V1H7v1H6v2H5V1H2v1H1v4h1v1h2v1h1v2h1v1h1v1h2v-1h1v-1h1V8h1V7h2V6h1V2Z", fill: primaryColorsTransformed[1] };
      const tmp16 = React3(inlineStyles.Path, obj2);
      cResult[9] = primaryColorsTransformed[1];
      cResult[10] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp20 = React3(inlineStyles.Path, { d: "M9 0H7v1h2V0ZM5 0H2v1h3V0ZM14 0h-3v1h3V0ZM15 1h-1v1h1V1ZM16 2h-1v4h1V2ZM10 1H9v1h1v2h1V1h-1ZM5 1v3h1V2h1V1H5ZM2 1H1v1h1V1ZM1 2H0v4h1V2ZM2 6H1v1h1V6ZM4 7H2v1h2V7ZM14 7h-2v1h2V7ZM15 6h-1v1h1V6ZM12 9V8h-1v2h4V9h-3ZM4 8v1H1v1h4V8H4ZM1 10H0v4h1v-4ZM2 14H1v1h1v-1ZM14 15H2v1h12v-1ZM15 14h-1v1h1v-1ZM16 10h-1v4h1v-4ZM6 10H5v1h1v-1ZM7 11H6v1h1v-1ZM10 11H9v1h1v-1ZM11 10h-1v1h1v-1ZM9 12H7v1h2v-1Z", fill: "#000" });
      cResult[11] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] !== secondaryColorsTransformed[1]) {
      const obj3 = { d: "M11 10v1h-1v1H9v1H7v-1H6v-1H5v-1H1v4h1v1h12v-1h1v-4h-4Z", fill: secondaryColorsTransformed[1] };
      const tmp23 = React3(inlineStyles.Path, obj3);
      cResult[12] = secondaryColorsTransformed[1];
      cResult[13] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[13];
    }
    if (cResult[14] !== secondaryColorsTransformed[0]) {
      const obj4 = { d: "M4 12H3v1h1v-1ZM3 11H2v1h1v-1ZM12 14v-1h-1v1H9v-1H7v1H5v-1H4v1H2v1h12v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 13h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] };
      const tmp26 = React3(inlineStyles.Path, obj4);
      cResult[14] = secondaryColorsTransformed[0];
      cResult[15] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[15];
    }
    if (cResult[16] !== primaryColorsTransformed[0]) {
      const obj5 = { d: "M6 9H5v1h1V9ZM7 10H6v1h1v-1ZM10 10H9v1h1v-1ZM11 9h-1v1h1V9ZM12 7h-1v1h1V7ZM14 6h-1v1h1V6ZM15 4h-1v2h1V4ZM9 11H7v1h2v-1Z", fill: primaryColorsTransformed[0] };
      const tmp29 = React3(inlineStyles.Path, obj5);
      cResult[16] = primaryColorsTransformed[0];
      cResult[17] = tmp29;
      tmp27 = tmp29;
    } else {
      tmp27 = cResult[17];
    }
    if (cResult[18] !== secondaryColorsTransformed[2]) {
      const obj6 = { d: "M10 12H9v1h1v-1ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM1 10v2h1v-1h3v-1H1Z", fill: secondaryColorsTransformed[2] };
      const tmp32 = React3(inlineStyles.Path, obj6);
      cResult[18] = secondaryColorsTransformed[2];
      cResult[19] = tmp32;
      tmp30 = tmp32;
    } else {
      tmp30 = cResult[19];
    }
    if (cResult[20] !== primaryColorsTransformed[2]) {
      const obj7 = { d: "M2 2H1v2h1V2ZM5 1H2v1h3V1ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM12 1h-1v2h1V2h2V1h-2Z", fill: primaryColorsTransformed[2] };
      const tmp35 = React3(inlineStyles.Path, obj7);
      cResult[20] = primaryColorsTransformed[2];
      cResult[21] = tmp35;
      tmp33 = tmp35;
    } else {
      tmp33 = cResult[21];
    }
    if (cResult[22] === num8) {
      if (cResult[23] === tmp5) {
        if (cResult[24] === tmp33) {
          if (cResult[25] === tmp14) {
            if (cResult[26] === tmp21) {
              if (cResult[27] === tmp24) {
                if (cResult[28] === tmp27) {
                  if (cResult[29] === tmp30) {
                    let tmp36;
                    if (cResult[30] === num7) {
                      tmp36 = cResult[31];
                    }
                    return tmp36;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj8 = { width: num7, height: num8, viewBox: "0 0 16 16", fill: "none", children: items };
    const Svg = inlineStyles.Svg;
    const merged = Object.assign(tmp5);
    items = [tmp14, tmp18, tmp21, tmp24, tmp27, tmp30, tmp33];
    const tmp41 = hasOwnProperty(Svg, obj8);
    cResult[22] = num8;
    cResult[23] = tmp5;
    cResult[24] = tmp33;
    cResult[25] = tmp14;
    cResult[26] = tmp21;
    cResult[27] = tmp24;
    cResult[28] = tmp27;
    cResult[29] = tmp30;
    cResult[30] = num7;
    cResult[31] = tmp41;
    tmp36 = tmp41;
  }
  const obj9 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const tmpResult = GuildBadgeUtils;
  const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj9);
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = transformedBadgeColors;
  tmp12 = transformedBadgeColors;
}) : ((width) => {
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
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  const obj = GuildBadgeUtils;
  const obj2 = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj2);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items };
  const Svg = inlineStyles.Svg;
  const merged1 = Object.assign(merged);
  items = [, , , , , , ];
  const obj4 = { d: "M15 2h-1V1h-3v3h-1V2H9V1H7v1H6v2H5V1H2v1H1v4h1v1h2v1h1v2h1v1h1v1h2v-1h1v-1h1V8h1V7h2V6h1V2Z", fill: primaryColorsTransformed[1] };
  items[0] = React3(inlineStyles.Path, obj4);
  items[1] = React3(inlineStyles.Path, { d: "M9 0H7v1h2V0ZM5 0H2v1h3V0ZM14 0h-3v1h3V0ZM15 1h-1v1h1V1ZM16 2h-1v4h1V2ZM10 1H9v1h1v2h1V1h-1ZM5 1v3h1V2h1V1H5ZM2 1H1v1h1V1ZM1 2H0v4h1V2ZM2 6H1v1h1V6ZM4 7H2v1h2V7ZM14 7h-2v1h2V7ZM15 6h-1v1h1V6ZM12 9V8h-1v2h4V9h-3ZM4 8v1H1v1h4V8H4ZM1 10H0v4h1v-4ZM2 14H1v1h1v-1ZM14 15H2v1h12v-1ZM15 14h-1v1h1v-1ZM16 10h-1v4h1v-4ZM6 10H5v1h1v-1ZM7 11H6v1h1v-1ZM10 11H9v1h1v-1ZM11 10h-1v1h1v-1ZM9 12H7v1h2v-1Z", fill: "#000" });
  const obj5 = { d: "M11 10v1h-1v1H9v1H7v-1H6v-1H5v-1H1v4h1v1h12v-1h1v-4h-4Z", fill: secondaryColorsTransformed[1] };
  items[2] = React3(inlineStyles.Path, obj5);
  const obj6 = { d: "M4 12H3v1h1v-1ZM3 11H2v1h1v-1ZM12 14v-1h-1v1H9v-1H7v1H5v-1H4v1H2v1h12v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 13h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] };
  items[3] = React3(inlineStyles.Path, obj6);
  const obj7 = { d: "M6 9H5v1h1V9ZM7 10H6v1h1v-1ZM10 10H9v1h1v-1ZM11 9h-1v1h1V9ZM12 7h-1v1h1V7ZM14 6h-1v1h1V6ZM15 4h-1v2h1V4ZM9 11H7v1h2v-1Z", fill: primaryColorsTransformed[0] };
  items[4] = React3(inlineStyles.Path, obj7);
  const obj8 = { d: "M10 12H9v1h1v-1ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM1 10v2h1v-1h3v-1H1Z", fill: secondaryColorsTransformed[2] };
  items[5] = React3(inlineStyles.Path, obj8);
  const obj9 = { d: "M2 2H1v2h1V2ZM5 1H2v1h3V1ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM12 1h-1v2h1V2h2V1h-2Z", fill: primaryColorsTransformed[2] };
  items[6] = React3(inlineStyles.Path, obj9);
  return hasOwnProperty(Svg, obj3);
});
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFlower.tsx");

export const GuildBadgeFlower = tmp4;