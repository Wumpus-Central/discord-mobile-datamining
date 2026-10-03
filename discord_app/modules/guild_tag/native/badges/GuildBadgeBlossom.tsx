// === Module 13761: GuildBadgeBlossom ===

// Module 13761 (GuildBadgeBlossom)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13728 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#B3269C", "#FF4CD2", "#FF7CDE", "#FD99E9"];
const primaryTintLuminances = [0.25, 0.5, 0.6, 0.7];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBlossom.tsx");

export const GuildBadgeBlossom = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(28);
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
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = React4(inlineStyles.Path, { d: "M9 10h-2v-2h2v2Z", fill: "#FCF4A9" });
    cResult[7] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] !== primaryColorsTransformed[0]) {
    const obj3 = { d: "M9 10v1h-2v-1h2ZM5 10h-1v-1h1v1ZM7 10h-1v-2h1v2ZM10 10h-1v-2h1v2ZM12 10h-1v-1h1v1ZM9 8h-2v-1h2v1ZM6 6h-1v-1h1v1ZM11 6h-1v-1h1v1Z", fill: primaryColorsTransformed[0] };
    const tmp21 = React4(inlineStyles.Path, obj3);
    cResult[8] = primaryColorsTransformed[0];
    cResult[9] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] !== primaryColorsTransformed[2]) {
    const obj4 = { d: "M9 13h-1v-1h1v1ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM6 11h-1v-1h1v1ZM11 11h-1v-1h1v1ZM6 8h-1v-2h1v2ZM11 8h-1v-1h-1v-1h2v2Z", fill: primaryColorsTransformed[2] };
    const tmp24 = React4(inlineStyles.Path, obj4);
    cResult[10] = primaryColorsTransformed[2];
    cResult[11] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp29 = React4(inlineStyles.Path, { d: "M8 15h-1v-1h1v1ZM5 3h-1v1h-1V2h2v1Z", fill: "#0E7941" });
    const tmp30 = React4(inlineStyles.Path, { d: "M9 15h-1v-1h1v1ZM13 4h-1v-1h-1V2h2v2Z", fill: "#054725" });
    const tmp31 = React4(inlineStyles.Path, { d: "M11 15h-1v-1h1v1ZM3 14H2V11h1v3ZM10 14h-1v-1h1v1ZM4 11h-1v-1h1v1ZM2 8H1V5h2v1H2v2ZM7 7h-1v-1h1v1ZM15 6H12v-1h3v1ZM8 2h-1V1h1v1Z", fill: "white" });
    cResult[12] = tmp29;
    cResult[13] = tmp30;
    cResult[14] = tmp31;
    let tmp27 = tmp31;
    let tmp26 = tmp30;
    let tmp25 = tmp29;
  } else {
    tmp25 = cResult[12];
    tmp26 = cResult[13];
    tmp27 = cResult[14];
  }
  if (cResult[15] !== primaryColorsTransformed[3]) {
    const obj5 = { d: "M5 11h1v1h2v1h-1v1h-1v1H3v-1h1v-1h-1v-2h1v-1h1v1ZM13 11h1v3h-1v-1h-1v1h1v1h-2v-1h-1v-1h-1v-1h1v-1h1v-1h2v1ZM5 9H2V6h1v-1h2v4ZM12 6h3v2h-1v1H11V5h1v1ZM9 2h1v1h1v2h-1v1H6v-1h-1v-2h1V2h2V1h1v1Z", fill: primaryColorsTransformed[3] };
    const tmp34 = React4(inlineStyles.Path, obj5);
    cResult[15] = primaryColorsTransformed[3];
    cResult[16] = tmp34;
    let tmp32 = tmp34;
  } else {
    tmp32 = cResult[16];
  }
  if (cResult[17] !== primaryColorsTransformed[1]) {
    const obj6 = { d: "M3 15H2v-1h1v1ZM14 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM13 14h-1v-1h1v1ZM9 12h-2v-1h2v1ZM7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM6 10h-1v-2h1v2ZM11 10h-1v-2h1v2ZM7 8h-1v-1h1v1ZM10 8h-1v-1h1v1ZM9 7h-2v-1h2v1Z", fill: primaryColorsTransformed[1] };
    const tmp37 = React4(inlineStyles.Path, obj6);
    cResult[17] = primaryColorsTransformed[1];
    cResult[18] = tmp37;
    let tmp35 = tmp37;
  } else {
    tmp35 = cResult[18];
  }
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp40 = React4(inlineStyles.Path, { d: "M6 16H2v-1h4v1ZM9 16h-2v-1h2v1ZM14 15v1H10v-1h4ZM4 10h-1v1H2v4H1V10h1v-1h2v1ZM7 15h-1v-1h1v1ZM10 15h-1v-1h1v1ZM14 10h1v5h-1V11h-1v-1h-1v-1h2v1ZM9 14h-2v-1h2v1ZM2 9H1v-1h1v1ZM15 9h-1v-1h1v1ZM5 2h-2v2h1v-1h1v2H1v3H0V4h2V1h3v1ZM14 4h2v4h-1V5H11v-2h1v1h1V2h-2V1h3v3ZM6 3h-1V2h1v1ZM11 3h-1V2h1v1ZM7 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1h-2V0h2v1Z", fill: "black" });
    cResult[19] = tmp40;
    let tmp38 = tmp40;
  } else {
    tmp38 = cResult[19];
  }
  if (cResult[20] === num7) {
    if (cResult[21] === tmp5) {
      if (cResult[22] === tmp32) {
        if (cResult[23] === tmp35) {
          if (cResult[24] === tmp19) {
            if (cResult[25] === tmp22) {
              if (cResult[26] === num6) {
                let tmp41 = cResult[27];
              }
              return tmp41;
            }
          }
        }
      }
    }
  }
  const obj7 = {};
  const merged = Object.assign(tmp5);
  obj7.width = num6;
  obj7.height = num7;
  obj7.viewBox = "0 0 16 16";
  obj7.fill = "none";
  items = [tmp16, tmp19, tmp22, tmp25, tmp26, tmp27, tmp32, tmp35, tmp38];
  obj7.children = items;
  const tmp43 = hasOwnProperty(inlineStyles.Svg, obj7);
  cResult[20] = num7;
  cResult[21] = tmp5;
  cResult[22] = tmp32;
  cResult[23] = tmp35;
  cResult[24] = tmp19;
  cResult[25] = tmp22;
  cResult[26] = num6;
  cResult[27] = tmp43;
  tmp41 = tmp43;
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
  items = [React4(inlineStyles.Path, { d: "M9 10h-2v-2h2v2Z", fill: "#FCF4A9" }), React4(inlineStyles.Path, { d: "M9 10v1h-2v-1h2ZM5 10h-1v-1h1v1ZM7 10h-1v-2h1v2ZM10 10h-1v-2h1v2ZM12 10h-1v-1h1v1ZM9 8h-2v-1h2v1ZM6 6h-1v-1h1v1ZM11 6h-1v-1h1v1Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M9 13h-1v-1h1v1ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM6 11h-1v-1h1v1ZM11 11h-1v-1h1v1ZM6 8h-1v-2h1v2ZM11 8h-1v-1h-1v-1h2v2Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M8 15h-1v-1h1v1ZM5 3h-1v1h-1V2h2v1Z", fill: "#0E7941" }), React4(inlineStyles.Path, { d: "M9 15h-1v-1h1v1ZM13 4h-1v-1h-1V2h2v2Z", fill: "#054725" }), React4(inlineStyles.Path, { d: "M11 15h-1v-1h1v1ZM3 14H2V11h1v3ZM10 14h-1v-1h1v1ZM4 11h-1v-1h1v1ZM2 8H1V5h2v1H2v2ZM7 7h-1v-1h1v1ZM15 6H12v-1h3v1ZM8 2h-1V1h1v1Z", fill: "white" }), React4(inlineStyles.Path, { d: "M5 11h1v1h2v1h-1v1h-1v1H3v-1h1v-1h-1v-2h1v-1h1v1ZM13 11h1v3h-1v-1h-1v1h1v1h-2v-1h-1v-1h-1v-1h1v-1h1v-1h2v1ZM5 9H2V6h1v-1h2v4ZM12 6h3v2h-1v1H11V5h1v1ZM9 2h1v1h1v2h-1v1H6v-1h-1v-2h1V2h2V1h1v1Z", fill: primaryColorsTransformed[3] }), React4(inlineStyles.Path, { d: "M3 15H2v-1h1v1ZM14 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM13 14h-1v-1h1v1ZM9 12h-2v-1h2v1ZM7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM6 10h-1v-2h1v2ZM11 10h-1v-2h1v2ZM7 8h-1v-1h1v1ZM10 8h-1v-1h1v1ZM9 7h-2v-1h2v1Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M6 16H2v-1h4v1ZM9 16h-2v-1h2v1ZM14 15v1H10v-1h4ZM4 10h-1v1H2v4H1V10h1v-1h2v1ZM7 15h-1v-1h1v1ZM10 15h-1v-1h1v1ZM14 10h1v5h-1V11h-1v-1h-1v-1h2v1ZM9 14h-2v-1h2v1ZM2 9H1v-1h1v1ZM15 9h-1v-1h1v1ZM5 2h-2v2h1v-1h1v2H1v3H0V4h2V1h3v1ZM14 4h2v4h-1V5H11v-2h1v1h1V2h-2V1h3v3ZM6 3h-1V2h1v1ZM11 3h-1V2h1v1ZM7 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1h-2V0h2v1Z", fill: "black" })];
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});