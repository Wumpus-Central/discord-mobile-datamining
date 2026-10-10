// === Module 14154: GuildBadgeClover ===

// Module 14154 (GuildBadgeClover)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7576 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 14122 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#006638", "#29BB21", "#35ED3B"];
const primaryTintLuminances = [0.2, 0.43, 0.57];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeClover.tsx");

export const GuildBadgeClover = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBadgeClover(arg0) {
  const cResult = c.c(23);
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
  let num7 = 24;
  if (undefined !== tmp6) {
    num7 = tmp6;
  }
  if (undefined !== tmp7) {
    num6 = tmp7;
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
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = React4(inlineStyles.Path, { d: "M6 13h-1v-1h1v1ZM2 11H1v-2h1v2ZM4 6H2v1H1v-2h3v1ZM14 6h-2v-1h2v1ZM7 2h-1v2h-1V1h2v1ZM11 2h-2V1h2v1Z", fill: "white" });
    cResult[7] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] !== primaryColorsTransformed[2]) {
    const obj3 = { d: "M9 12h1v2H5v-1h1v-2h3v1ZM14 7h-1v2h1v2h-2v-1h-1v-1h-1v-2h1v-1h3v1ZM5 10H2V6h3v4ZM10 4h-1v1H6V2h4v2Z", fill: primaryColorsTransformed[2] };
    const tmp21 = React4(inlineStyles.Path, obj3);
    cResult[8] = primaryColorsTransformed[2];
    cResult[9] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] !== primaryColorsTransformed[1]) {
    const obj4 = { d: "M7 15h-2v-1h2v1ZM10 14v-2h1v3h-2v-1h1ZM10 12h-1v-1h1v1ZM4 11H2v-1h2v1ZM9 11h-2v-1h2v1ZM15 11h-1v-2h1v2ZM6 9h-1v-2h1v2ZM14 9h-1v-2h1v2ZM15 7h-1v-2h1v2ZM9 6h-2v-1h2v1ZM10 5h-1v-1h1v1ZM11 4h-1V2h1v2Z", fill: primaryColorsTransformed[1] };
    const tmp24 = React4(inlineStyles.Path, obj4);
    cResult[10] = primaryColorsTransformed[1];
    cResult[11] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] !== primaryColorsTransformed[0]) {
    const obj5 = { d: "M15 15h-1v-1h1v1ZM14 14h-1v-1h1v1ZM13 13h-1v-1h1v1ZM5 12h-1v-1h1v1ZM12 12h-1v-1h1v1ZM6 11h-1v-1h1v1ZM11 11h-1v-1h1v1ZM7 10h-1v-1h1v1ZM10 10h-1v-1h1v1ZM9 9h-2v-2h2v2ZM7 7h-1v-1h1v1ZM10 7h-1v-1h1v1ZM6 6h-1v-1h1v1ZM11 6h-1v-1h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1Z", fill: primaryColorsTransformed[0] };
    const tmp27 = React4(inlineStyles.Path, obj5);
    cResult[12] = primaryColorsTransformed[0];
    cResult[13] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp31 = React4(inlineStyles.Path, { d: "M7 16h-2v-1h2v1ZM11 16h-2v-1h2v1ZM15 15v-1h1v2h-2v-1h1ZM5 15h-1V12h1v3ZM9 15h-2v-1h2v1ZM12 13h1v1h-1v1h-1V12h1v1ZM14 15h-1v-1h1v1ZM15 14h-1v-1h1v1Z", fill: "black" });
    const tmp32 = React4(inlineStyles.Path, { d: "M15 12h-1v1h-1v-1h-1v-1h3v1ZM4 12H1v-1h3v1ZM6 12h-1v-1h1v1ZM11 12h-1v-1h1v1ZM1 11H0v-2h1v2ZM5 11h-1v-1h1v1ZM7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM12 11h-1v-1h1v1ZM16 11h-1v-2h1v2ZM6 10h-1v-1h1v1ZM9 10h-2v-1h2v1ZM11 10h-1v-1h1v1ZM2 9H1v-2h1v2ZM7 9h-1v-2h1v2ZM10 9h-1v-2h1v2ZM15 9h-1v-2h1v2ZM1 7H0v-2h1v2ZM6 7h-1v-1h1v1ZM9 7h-2v-1h2v1ZM11 7h-1v-1h1v1ZM16 7h-1v-2h1v2ZM5 6h-1v-1h1v1ZM7 6h-1v-1h1v1ZM10 6h-1v-1h1v1ZM12 6h-1v-1h1v1ZM4 5H1v-1h3v1ZM6 5h-1v-1h1v1ZM11 5h-1v-1h1v1ZM15 5H12v-1h3v1ZM5 4h-1V1h1v3ZM12 4h-1V1h1v3ZM9 2h-2V1h2v1ZM7 1h-2V0h2v1ZM11 1h-2V0h2v1Z", fill: "black" });
    cResult[14] = tmp31;
    cResult[15] = tmp32;
    let tmp29 = tmp32;
    let tmp28 = tmp31;
  } else {
    tmp28 = cResult[14];
    tmp29 = cResult[15];
  }
  if (cResult[16] === num6) {
    if (cResult[17] === tmp5) {
      if (cResult[18] === tmp19) {
        if (cResult[19] === tmp22) {
          if (cResult[20] === tmp25) {
            if (cResult[21] === num7) {
              let tmp33 = cResult[22];
            }
            return tmp33;
          }
        }
      }
    }
  }
  const obj6 = {};
  const merged = Object.assign(tmp5);
  obj6.width = num7;
  obj6.height = num6;
  obj6.viewBox = "0 0 16 16";
  obj6.fill = "none";
  items = [tmp16, tmp19, tmp22, tmp25, tmp28, tmp29];
  obj6.children = items;
  const tmp35 = hasOwnProperty(inlineStyles.Svg, obj6);
  cResult[16] = num6;
  cResult[17] = tmp5;
  cResult[18] = tmp19;
  cResult[19] = tmp22;
  cResult[20] = tmp25;
  cResult[21] = num7;
  cResult[22] = tmp35;
  tmp33 = tmp35;
}) : (function GuildBadgeClover(primaryTintColor) {
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
  items = [React4(inlineStyles.Path, { d: "M6 13h-1v-1h1v1ZM2 11H1v-2h1v2ZM4 6H2v1H1v-2h3v1ZM14 6h-2v-1h2v1ZM7 2h-1v2h-1V1h2v1ZM11 2h-2V1h2v1Z", fill: "white" }), React4(inlineStyles.Path, { d: "M9 12h1v2H5v-1h1v-2h3v1ZM14 7h-1v2h1v2h-2v-1h-1v-1h-1v-2h1v-1h3v1ZM5 10H2V6h3v4ZM10 4h-1v1H6V2h4v2Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M7 15h-2v-1h2v1ZM10 14v-2h1v3h-2v-1h1ZM10 12h-1v-1h1v1ZM4 11H2v-1h2v1ZM9 11h-2v-1h2v1ZM15 11h-1v-2h1v2ZM6 9h-1v-2h1v2ZM14 9h-1v-2h1v2ZM15 7h-1v-2h1v2ZM9 6h-2v-1h2v1ZM10 5h-1v-1h1v1ZM11 4h-1V2h1v2Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M15 15h-1v-1h1v1ZM14 14h-1v-1h1v1ZM13 13h-1v-1h1v1ZM5 12h-1v-1h1v1ZM12 12h-1v-1h1v1ZM6 11h-1v-1h1v1ZM11 11h-1v-1h1v1ZM7 10h-1v-1h1v1ZM10 10h-1v-1h1v1ZM9 9h-2v-2h2v2ZM7 7h-1v-1h1v1ZM10 7h-1v-1h1v1ZM6 6h-1v-1h1v1ZM11 6h-1v-1h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M7 16h-2v-1h2v1ZM11 16h-2v-1h2v1ZM15 15v-1h1v2h-2v-1h1ZM5 15h-1V12h1v3ZM9 15h-2v-1h2v1ZM12 13h1v1h-1v1h-1V12h1v1ZM14 15h-1v-1h1v1ZM15 14h-1v-1h1v1Z", fill: "black" }), React4(inlineStyles.Path, { d: "M15 12h-1v1h-1v-1h-1v-1h3v1ZM4 12H1v-1h3v1ZM6 12h-1v-1h1v1ZM11 12h-1v-1h1v1ZM1 11H0v-2h1v2ZM5 11h-1v-1h1v1ZM7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM12 11h-1v-1h1v1ZM16 11h-1v-2h1v2ZM6 10h-1v-1h1v1ZM9 10h-2v-1h2v1ZM11 10h-1v-1h1v1ZM2 9H1v-2h1v2ZM7 9h-1v-2h1v2ZM10 9h-1v-2h1v2ZM15 9h-1v-2h1v2ZM1 7H0v-2h1v2ZM6 7h-1v-1h1v1ZM9 7h-2v-1h2v1ZM11 7h-1v-1h1v1ZM16 7h-1v-2h1v2ZM5 6h-1v-1h1v1ZM7 6h-1v-1h1v1ZM10 6h-1v-1h1v1ZM12 6h-1v-1h1v1ZM4 5H1v-1h3v1ZM6 5h-1v-1h1v1ZM11 5h-1v-1h1v1ZM15 5H12v-1h3v1ZM5 4h-1V1h1v3ZM12 4h-1V1h1v3ZM9 2h-2V1h2v1ZM7 1h-2V0h2v1ZM11 1h-2V0h2v1Z", fill: "black" })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});