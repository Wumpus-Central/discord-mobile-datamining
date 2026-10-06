// === Module 13754: GuildBadgeLightning ===

// Module 13754 (GuildBadgeLightning)
import react2 from "react" /* 576 */;
import inlineStyles from "inlineStyles" /* 8169 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13748 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_2 = ["width", "height", "primaryTintColor"];
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const primaryBaseColors = ["#ffb84b", "#ffe361", "#f0f0f0"];
const primaryTintLuminances = [0.15, 0.5, 0.9];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 2 }, { base: 10, tint: 1 }];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
  let tmp37;
  let tmp4;
  let tmp40;
  let tmp43;
  let tmp46;
  let tmp49;
  let tmp5;
  let tmp52;
  let tmp6;
  let tmp7;
  let width;
  const obj = react2;
  const cResult = obj.c(42);
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
    const obj2 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items };
    const tmpResult = GuildBadgeUtils;
    const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj2);
    cResult[5] = tmp4;
    cResult[6] = transformedBadgeColors;
    tmp11 = transformedBadgeColors;
  } else {
    tmp11 = cResult[6];
  }
  const primaryColorsTransformed = tmp11.primaryColorsTransformed;
  if (cResult[7] !== primaryColorsTransformed[1]) {
    const obj3 = { d: "M5 6H4v1H2v2h6v2H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h1v-1h2v-1h1V9h2V7H7V6h1V5h1V4h1V3H8v1H7v1H5v1Z", fill: primaryColorsTransformed[1] };
    const tmp18 = React3(inlineStyles.Path, obj3);
    cResult[7] = primaryColorsTransformed[1];
    cResult[8] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp21 = React3(inlineStyles.Path, { d: "M1 7H0v2h1V7Z", fill: "#000" });
    cResult[9] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] !== primaryColorsTransformed[2]) {
    const obj4 = { d: "M2 7H1v2h1V7Z", fill: primaryColorsTransformed[2] };
    const tmp24 = React3(inlineStyles.Path, obj4);
    cResult[10] = primaryColorsTransformed[2];
    cResult[11] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp27 = React3(inlineStyles.Path, { d: "M16 7h-1v2h1V7ZM3 6H1v1h2V6ZM6 4H4v1h2V4ZM4 5H3v1h1V5Z", fill: "#000" });
    cResult[12] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[12];
  }
  if (cResult[13] !== primaryColorsTransformed[2]) {
    const obj5 = { d: "M4 6H3v1h1V6ZM5 5H4v1h1V5ZM6 6H5v1h1V6ZM7 4H6v1h1V4ZM8 3H7v1h1V3ZM8 10H7v1h1v-1ZM7 11H6v1h1v-1ZM6 12H5v1h1v-1ZM5 13H4v1h1v-1ZM4 14H3v1h1v-1Z", fill: primaryColorsTransformed[2] };
    const tmp30 = React3(inlineStyles.Path, obj5);
    cResult[13] = primaryColorsTransformed[2];
    cResult[14] = tmp30;
    tmp28 = tmp30;
  } else {
    tmp28 = cResult[14];
  }
  if (cResult[15] !== primaryColorsTransformed[0]) {
    const obj6 = { d: "M12 2h-1v1h1V2ZM13 9h-1v1h1V9ZM12 10h-1v1h1v-1ZM10 11H9v1h1v-1ZM9 12H8v1h1v-1ZM15 8h-1v1h1V8Z", fill: primaryColorsTransformed[0] };
    const tmp33 = React3(inlineStyles.Path, obj6);
    cResult[15] = primaryColorsTransformed[0];
    cResult[16] = tmp33;
    tmp31 = tmp33;
  } else {
    tmp31 = cResult[16];
  }
  if (cResult[17] !== primaryColorsTransformed[2]) {
    const obj7 = { d: "M15 7h-1v1h1V7Z", fill: primaryColorsTransformed[2] };
    const tmp36 = React3(inlineStyles.Path, obj7);
    cResult[17] = primaryColorsTransformed[2];
    cResult[18] = tmp36;
    tmp34 = tmp36;
  } else {
    tmp34 = cResult[18];
  }
  if (cResult[19] !== primaryColorsTransformed[0]) {
    const obj8 = { d: "M11 3h-1v1h1V3ZM10 4H9v1h1V4ZM9 5H8v1h1V5ZM8 6H7v1h1V6Z", fill: primaryColorsTransformed[0] };
    const tmp39 = React3(inlineStyles.Path, obj8);
    cResult[19] = primaryColorsTransformed[0];
    cResult[20] = tmp39;
    tmp37 = tmp39;
  } else {
    tmp37 = cResult[20];
  }
  if (cResult[21] !== primaryColorsTransformed[2]) {
    const obj9 = { d: "M10 2H9v1h1V2Z", fill: primaryColorsTransformed[2] };
    const tmp42 = React3(inlineStyles.Path, obj9);
    cResult[21] = primaryColorsTransformed[2];
    cResult[22] = tmp42;
    tmp40 = tmp42;
  } else {
    tmp40 = cResult[22];
  }
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp45 = React3(inlineStyles.Path, { d: "M9 2H7v1h2V2ZM7 3H6v1h1V3ZM13 0h-3v1h3V0Z", fill: "#000" });
    cResult[23] = tmp45;
    tmp43 = tmp45;
  } else {
    tmp43 = cResult[23];
  }
  if (cResult[24] !== primaryColorsTransformed[2]) {
    const obj10 = { d: "M13 1h-3v1h3V1Z", fill: primaryColorsTransformed[2] };
    const tmp48 = React3(inlineStyles.Path, obj10);
    cResult[24] = primaryColorsTransformed[2];
    cResult[25] = tmp48;
    tmp46 = tmp48;
  } else {
    tmp46 = cResult[25];
  }
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp51 = React3(inlineStyles.Path, { d: "M15 6H8v1h7V6ZM10 1H9v1h1V1ZM14 1h-1v1h1V1ZM13 2h-1v1h1V2ZM12 3h-1v1h1V3ZM11 4h-1v1h1V4ZM10 5H9v1h1V5ZM15 9h-2v1h2V9ZM12 11h-2v1h2v-1ZM13 10h-1v1h1v-1ZM9 13H7v1h2v-1ZM10 12H9v1h1v-1ZM6 15H3v1h3v-1ZM8 9H1v1h7V9ZM7 14H6v1h1v-1ZM3 14H2v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM6 11H5v1h1v-1ZM7 10H6v1h1v-1Z", fill: "#000" });
    cResult[26] = tmp51;
    tmp49 = tmp51;
  } else {
    tmp49 = cResult[26];
  }
  if (cResult[27] !== primaryColorsTransformed[1]) {
    const obj11 = { d: "M11 2h-1v1h1V2Z", fill: primaryColorsTransformed[1] };
    const tmp54 = React3(inlineStyles.Path, obj11);
    cResult[27] = primaryColorsTransformed[1];
    cResult[28] = tmp54;
    tmp52 = tmp54;
  } else {
    tmp52 = cResult[28];
  }
  if (cResult[29] === num7) {
    if (cResult[30] === tmp5) {
      if (cResult[31] === tmp34) {
        if (cResult[32] === tmp37) {
          if (cResult[33] === tmp40) {
            if (cResult[34] === tmp46) {
              if (cResult[35] === tmp52) {
                if (cResult[36] === tmp16) {
                  if (cResult[37] === tmp22) {
                    if (cResult[38] === tmp28) {
                      if (cResult[39] === tmp31) {
                        let tmp55;
                        if (cResult[40] === num6) {
                          tmp55 = cResult[41];
                        }
                        return tmp55;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const obj12 = { width: num6, height: num7, viewBox: "0 0 16 16", fill: "none", children: items };
  const Svg = inlineStyles.Svg;
  const merged = Object.assign(tmp5);
  items = [tmp16, tmp19, tmp22, tmp25, tmp28, tmp31, tmp34, tmp37, tmp40, tmp43, tmp46, tmp49, tmp52];
  const tmp57 = hasOwnProperty(Svg, obj12);
  cResult[29] = num7;
  cResult[30] = tmp5;
  cResult[31] = tmp34;
  cResult[32] = tmp37;
  cResult[33] = tmp40;
  cResult[34] = tmp46;
  cResult[35] = tmp52;
  cResult[36] = tmp16;
  cResult[37] = tmp22;
  cResult[38] = tmp28;
  cResult[39] = tmp31;
  cResult[40] = num6;
  cResult[41] = tmp57;
  tmp55 = tmp57;
}) : ((width) => {
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
  items = [, , , , , , , , , , , , ];
  const obj4 = { d: "M5 6H4v1H2v2h6v2H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h1v-1h2v-1h1V9h2V7H7V6h1V5h1V4h1V3H8v1H7v1H5v1Z", fill: primaryColorsTransformed[1] };
  items[0] = React3(inlineStyles.Path, obj4);
  items[1] = React3(inlineStyles.Path, { d: "M1 7H0v2h1V7Z", fill: "#000" });
  const obj5 = { d: "M2 7H1v2h1V7Z", fill: primaryColorsTransformed[2] };
  items[2] = React3(inlineStyles.Path, obj5);
  items[3] = React3(inlineStyles.Path, { d: "M16 7h-1v2h1V7ZM3 6H1v1h2V6ZM6 4H4v1h2V4ZM4 5H3v1h1V5Z", fill: "#000" });
  const obj6 = { d: "M4 6H3v1h1V6ZM5 5H4v1h1V5ZM6 6H5v1h1V6ZM7 4H6v1h1V4ZM8 3H7v1h1V3ZM8 10H7v1h1v-1ZM7 11H6v1h1v-1ZM6 12H5v1h1v-1ZM5 13H4v1h1v-1ZM4 14H3v1h1v-1Z", fill: primaryColorsTransformed[2] };
  items[4] = React3(inlineStyles.Path, obj6);
  const obj7 = { d: "M12 2h-1v1h1V2ZM13 9h-1v1h1V9ZM12 10h-1v1h1v-1ZM10 11H9v1h1v-1ZM9 12H8v1h1v-1ZM15 8h-1v1h1V8Z", fill: primaryColorsTransformed[0] };
  items[5] = React3(inlineStyles.Path, obj7);
  const obj8 = { d: "M15 7h-1v1h1V7Z", fill: primaryColorsTransformed[2] };
  items[6] = React3(inlineStyles.Path, obj8);
  const obj9 = { d: "M11 3h-1v1h1V3ZM10 4H9v1h1V4ZM9 5H8v1h1V5ZM8 6H7v1h1V6Z", fill: primaryColorsTransformed[0] };
  items[7] = React3(inlineStyles.Path, obj9);
  const obj10 = { d: "M10 2H9v1h1V2Z", fill: primaryColorsTransformed[2] };
  items[8] = React3(inlineStyles.Path, obj10);
  items[9] = React3(inlineStyles.Path, { d: "M9 2H7v1h2V2ZM7 3H6v1h1V3ZM13 0h-3v1h3V0Z", fill: "#000" });
  const obj11 = { d: "M13 1h-3v1h3V1Z", fill: primaryColorsTransformed[2] };
  items[10] = React3(inlineStyles.Path, obj11);
  items[11] = React3(inlineStyles.Path, { d: "M15 6H8v1h7V6ZM10 1H9v1h1V1ZM14 1h-1v1h1V1ZM13 2h-1v1h1V2ZM12 3h-1v1h1V3ZM11 4h-1v1h1V4ZM10 5H9v1h1V5ZM15 9h-2v1h2V9ZM12 11h-2v1h2v-1ZM13 10h-1v1h1v-1ZM9 13H7v1h2v-1ZM10 12H9v1h1v-1ZM6 15H3v1h3v-1ZM8 9H1v1h7V9ZM7 14H6v1h1v-1ZM3 14H2v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM6 11H5v1h1v-1ZM7 10H6v1h1v-1Z", fill: "#000" });
  const obj12 = { d: "M11 2h-1v1h1V2Z", fill: primaryColorsTransformed[1] };
  items[12] = React3(inlineStyles.Path, obj12);
  return hasOwnProperty(Svg, obj3);
});
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeLightning.tsx");

export const GuildBadgeLightning = tmp4;