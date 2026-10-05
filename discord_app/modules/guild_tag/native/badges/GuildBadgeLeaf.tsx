// === Module 13737: GuildBadgeLeaf ===

// Module 13737 (GuildBadgeLeaf)
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
let closure_2 = ["width", "height", "primaryTintColor"];
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const primaryBaseColors = ["#4a8359", "#7fb134", "#bcef42", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.2, 0.6, 0.9];
let items = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }, { base: 10, tint: 1 }];
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
  let tmp35;
  let tmp39;
  let tmp4;
  let tmp42;
  let tmp45;
  let tmp5;
  let tmp6;
  let tmp7;
  let width;
  const obj = react2;
  const cResult = obj.c(34);
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
  if (cResult[7] !== primaryColorsTransformed[2]) {
    const obj3 = { d: "M15 2V1H9v1H3v5H1v5h12V7h2V2Z", fill: primaryColorsTransformed[2] };
    const tmp18 = React3(inlineStyles.Path, obj3);
    cResult[7] = primaryColorsTransformed[2];
    cResult[8] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== primaryColorsTransformed[1]) {
    const obj4 = { d: "M11 13v-1H5v1h6Z", fill: primaryColorsTransformed[1] };
    const tmp21 = React3(inlineStyles.Path, obj4);
    cResult[9] = primaryColorsTransformed[1];
    cResult[10] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp24 = React3(inlineStyles.Path, { d: "M15 2V1H9v1h6ZM9 3V2H5v1h4Z", fill: "#fff" });
    cResult[11] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] !== primaryColorsTransformed[1]) {
    const obj5 = { d: "M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z", fill: primaryColorsTransformed[1] };
    const tmp27 = React3(inlineStyles.Path, obj5);
    cResult[12] = primaryColorsTransformed[1];
    cResult[13] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp30 = React3(inlineStyles.Path, { d: "M16 1h-1v6h1V1Z", fill: "#000" });
    cResult[14] = tmp30;
    tmp28 = tmp30;
  } else {
    tmp28 = cResult[14];
  }
  if (cResult[15] !== primaryColorsTransformed[0]) {
    const obj6 = { d: "M3 9H2v6h1V9Z", fill: primaryColorsTransformed[0] };
    const tmp33 = React3(inlineStyles.Path, obj6);
    cResult[15] = primaryColorsTransformed[0];
    cResult[16] = tmp33;
    tmp31 = tmp33;
  } else {
    tmp31 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp37 = React3(inlineStyles.Path, { d: "M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z", fill: "#000" });
    const tmp38 = React3(inlineStyles.Path, { d: "M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z", fill: "#fff" });
    cResult[17] = tmp37;
    cResult[18] = tmp38;
    tmp35 = tmp38;
    tmp34 = tmp37;
  } else {
    tmp34 = cResult[17];
    tmp35 = cResult[18];
  }
  if (cResult[19] !== primaryColorsTransformed[0]) {
    const obj7 = { d: "M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z", fill: primaryColorsTransformed[0] };
    const tmp41 = React3(inlineStyles.Path, obj7);
    cResult[19] = primaryColorsTransformed[0];
    cResult[20] = tmp41;
    tmp39 = tmp41;
  } else {
    tmp39 = cResult[20];
  }
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp44 = React3(inlineStyles.Path, { d: "M5 4v1h1V4H5Z", fill: "#fff" });
    cResult[21] = tmp44;
    tmp42 = tmp44;
  } else {
    tmp42 = cResult[21];
  }
  if (cResult[22] !== primaryColorsTransformed[0]) {
    const obj8 = { d: "M3 8v1h1V8H3Z", fill: primaryColorsTransformed[0] };
    const tmp47 = React3(inlineStyles.Path, obj8);
    cResult[22] = primaryColorsTransformed[0];
    cResult[23] = tmp47;
    tmp45 = tmp47;
  } else {
    tmp45 = cResult[23];
  }
  if (cResult[24] === num7) {
    if (cResult[25] === tmp5) {
      if (cResult[26] === tmp39) {
        if (cResult[27] === tmp45) {
          if (cResult[28] === tmp16) {
            if (cResult[29] === tmp19) {
              if (cResult[30] === tmp25) {
                if (cResult[31] === tmp31) {
                  let tmp48;
                  if (cResult[32] === num6) {
                    tmp48 = cResult[33];
                  }
                  return tmp48;
                }
              }
            }
          }
        }
      }
    }
  }
  const obj9 = { width: num6, height: num7, viewBox: "0 0 16 16", fill: "none", children: items };
  const Svg = inlineStyles.Svg;
  const merged = Object.assign(tmp5);
  items = [tmp16, tmp19, tmp22, tmp25, tmp28, tmp31, tmp34, tmp35, tmp39, tmp42, tmp45];
  const tmp50 = hasOwnProperty(Svg, obj9);
  cResult[24] = num7;
  cResult[25] = tmp5;
  cResult[26] = tmp39;
  cResult[27] = tmp45;
  cResult[28] = tmp16;
  cResult[29] = tmp19;
  cResult[30] = tmp25;
  cResult[31] = tmp31;
  cResult[32] = num6;
  cResult[33] = tmp50;
  tmp48 = tmp50;
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
  items = [, , , , , , , , , , ];
  const obj4 = { d: "M15 2V1H9v1H3v5H1v5h12V7h2V2Z", fill: primaryColorsTransformed[2] };
  items[0] = React3(inlineStyles.Path, obj4);
  const obj5 = { d: "M11 13v-1H5v1h6Z", fill: primaryColorsTransformed[1] };
  items[1] = React3(inlineStyles.Path, obj5);
  items[2] = React3(inlineStyles.Path, { d: "M15 2V1H9v1h6ZM9 3V2H5v1h4Z", fill: "#fff" });
  const obj6 = { d: "M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z", fill: primaryColorsTransformed[1] };
  items[3] = React3(inlineStyles.Path, obj6);
  items[4] = React3(inlineStyles.Path, { d: "M16 1h-1v6h1V1Z", fill: "#000" });
  const obj7 = { d: "M3 9H2v6h1V9Z", fill: primaryColorsTransformed[0] };
  items[5] = React3(inlineStyles.Path, obj7);
  items[6] = React3(inlineStyles.Path, { d: "M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z", fill: "#000" });
  items[7] = React3(inlineStyles.Path, { d: "M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z", fill: "#fff" });
  const obj8 = { d: "M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z", fill: primaryColorsTransformed[0] };
  items[8] = React3(inlineStyles.Path, obj8);
  items[9] = React3(inlineStyles.Path, { d: "M5 4v1h1V4H5Z", fill: "#fff" });
  const obj9 = { d: "M3 8v1h1V8H3Z", fill: primaryColorsTransformed[0] };
  items[10] = React3(inlineStyles.Path, obj9);
  return hasOwnProperty(Svg, obj3);
});
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeLeaf.tsx");

export const GuildBadgeLeaf = tmp4;