// === Module 13765: GuildBadgeMaple ===

// Module 13765 (GuildBadgeMaple)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13730 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#4E0B11", "#730E17", "#AC1F2B", "#EB2823", "#FF514C"];
const primaryTintLuminances = [0.17, 0.25, 0.4, 0.53, 0.65];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeMaple.tsx");

export const GuildBadgeMaple = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(30);
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
    const obj2 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items };
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
    const obj3 = { d: "M5 12h-1v-1h1v1ZM7 12h-1v-2h-1v-1h1V6h1v6ZM5 9h-1v-1h1v1ZM4 8h-1v-1h1v1ZM3 7H2v-1h1v1Z", fill: primaryColorsTransformed[1] };
    const tmp18 = React4(inlineStyles.Path, obj3);
    cResult[7] = primaryColorsTransformed[1];
    cResult[8] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== primaryColorsTransformed[4]) {
    const obj4 = { d: "M5 12v-1h-1v-1H2V7h1v1h1v-1h-1v-1h2v1h1v2h-1v-1h-1v1h1v1h1v3H3v-1h2ZM7 6h-1v-1h1v1ZM8 3h-1V2h1v1Z", fill: primaryColorsTransformed[4] };
    const tmp21 = React4(inlineStyles.Path, obj4);
    cResult[9] = primaryColorsTransformed[4];
    cResult[10] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[10];
  }
  if (cResult[11] !== primaryColorsTransformed[0]) {
    const obj5 = { d: "M9 13h-1V4h1v3h1v1h-1v2h1v1h-1v2ZM12 12h-1v-1h1v1ZM11 10h-1v-1h1v1ZM12 9h-1v-1h1v1ZM13 8h-1v-1h1v1ZM14 7h-1v-1h1v1ZM10 4h-1v-1h1v1Z", fill: primaryColorsTransformed[0] };
    const tmp24 = React4(inlineStyles.Path, obj5);
    cResult[11] = primaryColorsTransformed[0];
    cResult[12] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp27 = React4(inlineStyles.Path, { d: "M2 14H1v-1h1v1ZM3 13H2v-1h1v1ZM4 12h-1v-1h1v1ZM4 6H2v2H1V5h3v1ZM12 7h-1v-1h1v1ZM13 6h-1v-1h1v1ZM7 5h-1V2h1v3ZM9 2h-2V1h2v1Z", fill: "white" });
    cResult[13] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[13];
  }
  if (cResult[14] !== primaryColorsTransformed[2]) {
    const obj6 = { d: "M15 13v1H10v-1h5ZM14 10h-2v-1h2v1ZM15 8h-1v-1h1v1Z", fill: primaryColorsTransformed[2] };
    const tmp30 = React4(inlineStyles.Path, obj6);
    cResult[14] = primaryColorsTransformed[2];
    cResult[15] = tmp30;
    let tmp28 = tmp30;
  } else {
    tmp28 = cResult[15];
  }
  if (cResult[16] !== primaryColorsTransformed[3]) {
    const obj7 = { d: "M8 15h-1V3h1V2h2v1h-1v1h-1v11ZM5 14H2v-1h3v1ZM12 11h-1v1h1v-1h1v1h1v1H9v-2h1v-1h1v-1h1v2Z", fill: primaryColorsTransformed[3] };
    const tmp34 = React4(inlineStyles.Path, obj7);
    const obj8 = { d: "M12 8h-1v1h-1v1h-1v-2h1v-1h2v1ZM14 9h-2v-1h1v-1h1v2ZM10 7h-1V4h1v3ZM13 7h-1v-1h1v1ZM15 7h-1v-1h-1v-1h2v2Z", fill: primaryColorsTransformed[3] };
    const tmp35 = React4(inlineStyles.Path, obj8);
    cResult[16] = primaryColorsTransformed[3];
    cResult[17] = tmp35;
    cResult[18] = tmp34;
    let tmp32 = tmp34;
    let tmp31 = tmp35;
  } else {
    tmp31 = cResult[17];
    tmp32 = cResult[18];
  }
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp38 = React4(inlineStyles.Path, { d: "M7 15h1v-2h2v1h-1v2H6v-2h-1v-1h1v-1h1v3ZM5 15H1v-1h4v1ZM15 15H10v-1h5v1ZM1 14H0v-1h1v1ZM16 14h-1v-1h1v1ZM2 13H1v-1h1v1ZM15 13h-1v-1h1v1ZM4 11h-1v1H2v-2h2v1ZM14 12h-1v-1h-1v-1h2v2ZM2 10H1v-2h1v2ZM15 10h-1v-2h1v2ZM4 5H1v3H0V4h4v1ZM11 5h1v-1h4v4h-1V5H12v1h-1v1h-1V2h1v3ZM6 7h-1v-1h-1v-1h1V2h1v5ZM7 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1h-2V0h2v1Z", fill: "black" });
    cResult[19] = tmp38;
    let tmp36 = tmp38;
  } else {
    tmp36 = cResult[19];
  }
  if (cResult[20] === num7) {
    if (cResult[21] === tmp5) {
      if (cResult[22] === tmp31) {
        if (cResult[23] === tmp16) {
          if (cResult[24] === tmp19) {
            if (cResult[25] === tmp22) {
              if (cResult[26] === tmp28) {
                if (cResult[27] === tmp32) {
                  if (cResult[28] === num6) {
                    let tmp39 = cResult[29];
                  }
                  return tmp39;
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
  items = [tmp16, tmp19, tmp22, tmp25, tmp28, tmp32, tmp31, tmp36];
  obj9.children = items;
  const tmp41 = hasOwnProperty(inlineStyles.Svg, obj9);
  cResult[20] = num7;
  cResult[21] = tmp5;
  cResult[22] = tmp31;
  cResult[23] = tmp16;
  cResult[24] = tmp19;
  cResult[25] = tmp22;
  cResult[26] = tmp28;
  cResult[27] = tmp32;
  cResult[28] = num6;
  cResult[29] = tmp41;
  tmp39 = tmp41;
}) : ((primaryTintColor) => {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
  const primaryColorsTransformed = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items }).primaryColorsTransformed;
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.width = num;
  obj3.height = num2;
  obj3.viewBox = "0 0 16 16";
  obj3.fill = "none";
  items = [React4(inlineStyles.Path, { d: "M5 12h-1v-1h1v1ZM7 12h-1v-2h-1v-1h1V6h1v6ZM5 9h-1v-1h1v1ZM4 8h-1v-1h1v1ZM3 7H2v-1h1v1Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M5 12v-1h-1v-1H2V7h1v1h1v-1h-1v-1h2v1h1v2h-1v-1h-1v1h1v1h1v3H3v-1h2ZM7 6h-1v-1h1v1ZM8 3h-1V2h1v1Z", fill: primaryColorsTransformed[4] }), React4(inlineStyles.Path, { d: "M9 13h-1V4h1v3h1v1h-1v2h1v1h-1v2ZM12 12h-1v-1h1v1ZM11 10h-1v-1h1v1ZM12 9h-1v-1h1v1ZM13 8h-1v-1h1v1ZM14 7h-1v-1h1v1ZM10 4h-1v-1h1v1Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M2 14H1v-1h1v1ZM3 13H2v-1h1v1ZM4 12h-1v-1h1v1ZM4 6H2v2H1V5h3v1ZM12 7h-1v-1h1v1ZM13 6h-1v-1h1v1ZM7 5h-1V2h1v3ZM9 2h-2V1h2v1Z", fill: "white" }), React4(inlineStyles.Path, { d: "M15 13v1H10v-1h5ZM14 10h-2v-1h2v1ZM15 8h-1v-1h1v1Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M8 15h-1V3h1V2h2v1h-1v1h-1v11ZM5 14H2v-1h3v1ZM12 11h-1v1h1v-1h1v1h1v1H9v-2h1v-1h1v-1h1v2Z", fill: primaryColorsTransformed[3] }), React4(inlineStyles.Path, { d: "M12 8h-1v1h-1v1h-1v-2h1v-1h2v1ZM14 9h-2v-1h1v-1h1v2ZM10 7h-1V4h1v3ZM13 7h-1v-1h1v1ZM15 7h-1v-1h-1v-1h2v2Z", fill: primaryColorsTransformed[3] }), React4(inlineStyles.Path, { d: "M7 15h1v-2h2v1h-1v2H6v-2h-1v-1h1v-1h1v3ZM5 15H1v-1h4v1ZM15 15H10v-1h5v1ZM1 14H0v-1h1v1ZM16 14h-1v-1h1v1ZM2 13H1v-1h1v1ZM15 13h-1v-1h1v1ZM4 11h-1v1H2v-2h2v1ZM14 12h-1v-1h-1v-1h2v2ZM2 10H1v-2h1v2ZM15 10h-1v-2h1v2ZM4 5H1v3H0V4h4v1ZM11 5h1v-1h4v4h-1V5H12v1h-1v1h-1V2h1v3ZM6 7h-1v-1h-1v-1h1V2h1v5ZM7 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1h-2V0h2v1Z", fill: "black" })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});