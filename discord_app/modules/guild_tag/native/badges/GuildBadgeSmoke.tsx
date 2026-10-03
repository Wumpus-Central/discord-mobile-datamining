// === Module 13745: GuildBadgeSmoke ===

// Module 13745 (GuildBadgeSmoke)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13728 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#35363a", "#57595f", "#d8d8d8"];
const secondaryBaseColors = ["#847d8b", "#d1cdd5", "#f0f0f0"];
const primaryTintLuminances = [0.05, 0.2, 0.95];
let items = [{ base: 4, tint: 1 }, { base: 2, tint: 1 }, { base: 3, tint: 1 }];
const secondaryTintLuminances = [0.2, 0.5, 0.95];
const items1 = [{ base: 4, tint: 1 }, { base: 2, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSmoke.tsx");

export const GuildBadgeSmoke = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(34);
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
    if (cResult[9] !== secondaryColorsTransformed[1]) {
      const obj2 = { d: "M13 3V2h-2v1h-1V2H9V1H7v1H6v1H5V2H3v1H2v4h2v1h1V7h6v1h1V7h2V3h-1Z", fill: secondaryColorsTransformed[1] };
      const tmp16 = React4(inlineStyles.Path, obj2);
      cResult[9] = secondaryColorsTransformed[1];
      cResult[10] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[10];
    }
    if (cResult[11] !== primaryColorsTransformed[1]) {
      const obj3 = { d: "M14 9V8h-4V7H6v1H2v1H1v3h1v1h4v1h1v1h2v-1h1v-1h4v-1h1V9h-1Z", fill: primaryColorsTransformed[1] };
      const tmp19 = React4(inlineStyles.Path, obj3);
      cResult[11] = primaryColorsTransformed[1];
      cResult[12] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[12];
    }
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp23 = React4(inlineStyles.Path, { d: "M9 0H7v1h2V0ZM7 1H6v1h1V1ZM10 1H9v1h1V1ZM13 1h-2v1h2V1ZM14 2h-1v1h1V2ZM11 2h-1v1h1V2ZM6 2H5v1h1V2ZM5 1H3v1h2V1ZM2 3H1v4h1V3ZM3 2H2v1h1V2ZM2 8H1v1h1V8ZM1 9H0v3h1V9ZM2 12H1v1h1v-1ZM6 13H2v1h4v-1ZM7 14H6v1h1v-1ZM9 15H7v1h2v-1ZM10 14H9v1h1v-1ZM14 13h-4v1h4v-1ZM15 12h-1v1h1v-1ZM16 9h-1v3h1V9ZM15 8h-1v1h1V8ZM15 3h-1v4h1V3ZM5 8H4v1h1V8ZM6 7H5v1h1V7ZM10 6H6v1h4V6ZM11 7h-1v1h1V7ZM12 8h-1v1h1V8ZM13 7h-1v1h2V7h-1ZM3 7H2v1h2V7H3Z", fill: "#000" });
      cResult[13] = tmp23;
      let tmp21 = tmp23;
    } else {
      tmp21 = cResult[13];
    }
    if (cResult[14] !== primaryColorsTransformed[0]) {
      const obj4 = { d: "M2 11H1v1h1v-1ZM3 12H2v1h1v-1ZM7 13H6v1h1v-1ZM10 13H9v1h1v-1ZM9 14H7v1h2v-1ZM14 12h-1v1h1v-1ZM15 9h-1v3h1V9Z", fill: primaryColorsTransformed[0] };
      const tmp26 = React4(inlineStyles.Path, obj4);
      cResult[14] = primaryColorsTransformed[0];
      cResult[15] = tmp26;
      let tmp24 = tmp26;
    } else {
      tmp24 = cResult[15];
    }
    if (cResult[16] !== secondaryColorsTransformed[0]) {
      const obj5 = { d: "M3 6H2v1h1V6ZM5 7H4v1h1V7ZM12 7h-1v1h1V7ZM6 6H5v1h1V6ZM11 6h-1v1h1V6Z", fill: secondaryColorsTransformed[0] };
      const tmp30 = React4(inlineStyles.Path, obj5);
      const obj6 = { d: "M12 7h-1v1h1V7ZM10 5H6v1h4V5ZM14 4h-1v3h1V4Z", fill: secondaryColorsTransformed[0] };
      const tmp31 = React4(inlineStyles.Path, obj6);
      cResult[16] = secondaryColorsTransformed[0];
      cResult[17] = tmp30;
      cResult[18] = tmp31;
      let tmp28 = tmp31;
      let tmp27 = tmp30;
    } else {
      tmp27 = cResult[17];
      tmp28 = cResult[18];
    }
    if (cResult[19] !== secondaryColorsTransformed[2]) {
      const obj7 = { d: "M4 4H3v1h1V4ZM3 3H2v1h1V3ZM5 2H3v1h2V2ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM10 2H9v1h1V2ZM13 2h-2v1h2V2ZM14 3h-1v1h1V3Z", fill: secondaryColorsTransformed[2] };
      const tmp34 = React4(inlineStyles.Path, obj7);
      cResult[19] = secondaryColorsTransformed[2];
      cResult[20] = tmp34;
      let tmp32 = tmp34;
    } else {
      tmp32 = cResult[20];
    }
    if (cResult[21] !== primaryColorsTransformed[2]) {
      const obj8 = { d: "M2 9H1v1h1V9ZM3 8H2v1h1V8ZM6 8H5v1h1V8ZM10 7H6v1h4V7ZM12 9h-1v1h1V9ZM14 8h-2v1h2V8Z", fill: primaryColorsTransformed[2] };
      const tmp37 = React4(inlineStyles.Path, obj8);
      cResult[21] = primaryColorsTransformed[2];
      cResult[22] = tmp37;
      let tmp35 = tmp37;
    } else {
      tmp35 = cResult[22];
    }
    if (cResult[23] === num8) {
      if (cResult[24] === tmp5) {
        if (cResult[25] === tmp32) {
          if (cResult[26] === tmp35) {
            if (cResult[27] === tmp14) {
              if (cResult[28] === tmp17) {
                if (cResult[29] === tmp24) {
                  if (cResult[30] === tmp27) {
                    if (cResult[31] === tmp28) {
                      if (cResult[32] === num7) {
                        let tmp38 = cResult[33];
                      }
                      return tmp38;
                    }
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
    obj9.width = num7;
    obj9.height = num8;
    obj9.viewBox = "0 0 16 16";
    obj9.fill = "none";
    items = [tmp14, tmp17, tmp21, tmp24, tmp27, tmp28, tmp32, tmp35];
    obj9.children = items;
    const tmp43 = hasOwnProperty(inlineStyles.Svg, obj9);
    cResult[23] = num8;
    cResult[24] = tmp5;
    cResult[25] = tmp32;
    cResult[26] = tmp35;
    cResult[27] = tmp14;
    cResult[28] = tmp17;
    cResult[29] = tmp24;
    cResult[30] = tmp27;
    cResult[31] = tmp28;
    cResult[32] = num7;
    cResult[33] = tmp43;
    tmp38 = tmp43;
  }
  const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 });
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = transformedBadgeColors;
  tmp12 = transformedBadgeColors;
  const obj10 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const tmpResult = GuildBadgeUtils;
}) : ((width) => {
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
  const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights: items1 });
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.width = num;
  obj3.height = num2;
  obj3.viewBox = "0 0 16 16";
  obj3.fill = "none";
  items = [React4(inlineStyles.Path, { d: "M13 3V2h-2v1h-1V2H9V1H7v1H6v1H5V2H3v1H2v4h2v1h1V7h6v1h1V7h2V3h-1Z", fill: secondaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M14 9V8h-4V7H6v1H2v1H1v3h1v1h4v1h1v1h2v-1h1v-1h4v-1h1V9h-1Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M9 0H7v1h2V0ZM7 1H6v1h1V1ZM10 1H9v1h1V1ZM13 1h-2v1h2V1ZM14 2h-1v1h1V2ZM11 2h-1v1h1V2ZM6 2H5v1h1V2ZM5 1H3v1h2V1ZM2 3H1v4h1V3ZM3 2H2v1h1V2ZM2 8H1v1h1V8ZM1 9H0v3h1V9ZM2 12H1v1h1v-1ZM6 13H2v1h4v-1ZM7 14H6v1h1v-1ZM9 15H7v1h2v-1ZM10 14H9v1h1v-1ZM14 13h-4v1h4v-1ZM15 12h-1v1h1v-1ZM16 9h-1v3h1V9ZM15 8h-1v1h1V8ZM15 3h-1v4h1V3ZM5 8H4v1h1V8ZM6 7H5v1h1V7ZM10 6H6v1h4V6ZM11 7h-1v1h1V7ZM12 8h-1v1h1V8ZM13 7h-1v1h2V7h-1ZM3 7H2v1h2V7H3Z", fill: "#000" }), React4(inlineStyles.Path, { d: "M2 11H1v1h1v-1ZM3 12H2v1h1v-1ZM7 13H6v1h1v-1ZM10 13H9v1h1v-1ZM9 14H7v1h2v-1ZM14 12h-1v1h1v-1ZM15 9h-1v3h1V9Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M3 6H2v1h1V6ZM5 7H4v1h1V7ZM12 7h-1v1h1V7ZM6 6H5v1h1V6ZM11 6h-1v1h1V6Z", fill: secondaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M12 7h-1v1h1V7ZM10 5H6v1h4V5ZM14 4h-1v3h1V4Z", fill: secondaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M4 4H3v1h1V4ZM3 3H2v1h1V3ZM5 2H3v1h2V2ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM10 2H9v1h1V2ZM13 2h-2v1h2V2ZM14 3h-1v1h1V3Z", fill: secondaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M2 9H1v1h1V9ZM3 8H2v1h1V8ZM6 8H5v1h1V8ZM10 7H6v1h4V7ZM12 9h-1v1h1V9ZM14 8h-2v1h2V8Z", fill: primaryColorsTransformed[2] })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});