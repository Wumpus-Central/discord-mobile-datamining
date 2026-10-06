// === Module 13789: GuildBadgeBee ===

// Module 13789 (GuildBadgeBee)
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
const primaryBaseColors = ["#E79418", "#FAE330"];
const primaryTintLuminances = [0.5, 0.75];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let height;
  let primaryTintColor;
  let tmp11;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp23;
  let tmp26;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let width;
  const obj = react2;
  const cResult = obj.c(23);
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
  let num7 = 24;
  if (undefined !== tmp6) {
    num7 = tmp6;
  }
  if (undefined !== tmp7) {
    num6 = tmp7;
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
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp20 = React3(inlineStyles.Path, { d: "M8 5v1H5v-1h3ZM5 5h-1v-1h1v1ZM11 5h-1v-1h1v1ZM4 4h-1V2h1v2ZM10 4h-1v-1h1v1ZM9 3h-1V2h1v1ZM8 2h-1V1h1v1Z", fill: "#B7DBF6" });
    const tmp21 = React3(inlineStyles.Path, { d: "M9 6h-1v-1H5v-1h-1V1h2v1h1v1h1v1h1v2ZM13 7h1v1h-1z", fill: "white" });
    const tmp22 = React3(inlineStyles.Path, { d: "M13 8h1v1h-2v-2h1v1Z", fill: "#B7DBF6" });
    cResult[7] = tmp20;
    cResult[8] = tmp21;
    cResult[9] = tmp22;
    tmp18 = tmp22;
    tmp17 = tmp21;
    tmp16 = tmp20;
  } else {
    tmp16 = cResult[7];
    tmp17 = cResult[8];
    tmp18 = cResult[9];
  }
  if (cResult[10] !== primaryColorsTransformed[1]) {
    const obj3 = { d: "M4 11h-1v-1h1v1ZM6 11h-1v-1h1v1ZM10 11h-1v-1h-1V7h1v-1h1v5ZM7 10h-1v-1h1v1ZM4 9h-1v-1h1v1ZM7 8h-1v1h-1v-2h2v1ZM4 7h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
    const tmp25 = React3(inlineStyles.Path, obj3);
    cResult[10] = primaryColorsTransformed[1];
    cResult[11] = tmp25;
    tmp23 = tmp25;
  } else {
    tmp23 = cResult[11];
  }
  if (cResult[12] !== primaryColorsTransformed[0]) {
    const obj4 = { d: "M7 13h-2v-2h1v-1h1v3ZM9 11h2v1h-1v1h-2V10h1v1ZM4 12h-1v-1h1v1ZM4 8h-1v1h1v1h-1v1H2V7h2v1ZM6 10h-1v-1h1v1ZM7 9h-1v-1h1v1Z", fill: primaryColorsTransformed[0] };
    const tmp28 = React3(inlineStyles.Path, obj4);
    cResult[12] = primaryColorsTransformed[0];
    cResult[13] = tmp28;
    tmp26 = tmp28;
  } else {
    tmp26 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp33 = React3(inlineStyles.Path, { d: "M5 16h-1v-1h1v1ZM8 16h-1v-1h1v1Z", fill: "black" });
    const tmp34 = React3(inlineStyles.Path, { d: "M12 5h1v-2h1v2h1v1h1v5h-1v1H12v2h-1v-1h-1v1h-1v1h-1v-1h-2v1h-1v-1h-1v-1h-1v-1h1V6h-1v-2h1v1h1v1h4v-2h1v1h1v-1h-1v-1h1V2h1v3ZM5 13h2V7h-2v6Zm4-6h-1v6h2v-1h1v-1h-1V6h-1v1Zm3 2h2v-2h-2v2Z", fill: "black", fillRule: "evenodd" });
    const tmp35 = React3(inlineStyles.Path, { d: "M11 15h-1v-1h1v1ZM3 12H2v-1h1v1ZM2 11H1v-2H0v-1h1v-1h1v4ZM3 7H2v-1h1v1ZM3 4H2V2h1v2ZM9 4h-1v-1h1v1ZM8 3h-1V2h1v1ZM10 3h-1V2h1v1ZM15 3h-1V2h1v1ZM4 2h-1V1h1v1ZM7 2h-1V1h1v1ZM9 2h-1V1h1v1ZM13 2h-1V1h1v1ZM6 1h-2V0h2v1ZM8 1h-1V0h1v1Z", fill: "black" });
    cResult[14] = tmp34;
    cResult[15] = tmp35;
    cResult[16] = tmp33;
    tmp31 = tmp33;
    tmp30 = tmp35;
    tmp29 = tmp34;
  } else {
    tmp29 = cResult[14];
    tmp30 = cResult[15];
    tmp31 = cResult[16];
  }
  if (cResult[17] === num6) {
    if (cResult[18] === tmp5) {
      if (cResult[19] === tmp23) {
        if (cResult[20] === tmp26) {
          let tmp36;
          if (cResult[21] === num7) {
            tmp36 = cResult[22];
          }
          return tmp36;
        }
      }
    }
  }
  const obj5 = { width: num7, height: num6, viewBox: "0 0 16 16", fill: "none", children: items };
  const Svg = inlineStyles.Svg;
  const merged = Object.assign(tmp5);
  items = [tmp16, tmp17, tmp18, tmp23, tmp26, tmp31, tmp29, tmp30];
  const tmp38 = hasOwnProperty(Svg, obj5);
  cResult[17] = num6;
  cResult[18] = tmp5;
  cResult[19] = tmp23;
  cResult[20] = tmp26;
  cResult[21] = num7;
  cResult[22] = tmp38;
  tmp36 = tmp38;
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
  items = [React3(inlineStyles.Path, { d: "M8 5v1H5v-1h3ZM5 5h-1v-1h1v1ZM11 5h-1v-1h1v1ZM4 4h-1V2h1v2ZM10 4h-1v-1h1v1ZM9 3h-1V2h1v1ZM8 2h-1V1h1v1Z", fill: "#B7DBF6" }), React3(inlineStyles.Path, { d: "M9 6h-1v-1H5v-1h-1V1h2v1h1v1h1v1h1v2ZM13 7h1v1h-1z", fill: "white" }), React3(inlineStyles.Path, { d: "M13 8h1v1h-2v-2h1v1Z", fill: "#B7DBF6" }), , , , , ];
  const obj4 = { d: "M4 11h-1v-1h1v1ZM6 11h-1v-1h1v1ZM10 11h-1v-1h-1V7h1v-1h1v5ZM7 10h-1v-1h1v1ZM4 9h-1v-1h1v1ZM7 8h-1v1h-1v-2h2v1ZM4 7h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
  items[3] = React3(inlineStyles.Path, obj4);
  const obj5 = { d: "M7 13h-2v-2h1v-1h1v3ZM9 11h2v1h-1v1h-2V10h1v1ZM4 12h-1v-1h1v1ZM4 8h-1v1h1v1h-1v1H2V7h2v1ZM6 10h-1v-1h1v1ZM7 9h-1v-1h1v1Z", fill: primaryColorsTransformed[0] };
  items[4] = React3(inlineStyles.Path, obj5);
  items[5] = React3(inlineStyles.Path, { d: "M5 16h-1v-1h1v1ZM8 16h-1v-1h1v1Z", fill: "black" });
  items[6] = React3(inlineStyles.Path, { d: "M12 5h1v-2h1v2h1v1h1v5h-1v1H12v2h-1v-1h-1v1h-1v1h-1v-1h-2v1h-1v-1h-1v-1h-1v-1h1V6h-1v-2h1v1h1v1h4v-2h1v1h1v-1h-1v-1h1V2h1v3ZM5 13h2V7h-2v6Zm4-6h-1v6h2v-1h1v-1h-1V6h-1v1Zm3 2h2v-2h-2v2Z", fill: "black", fillRule: "evenodd" });
  items[7] = React3(inlineStyles.Path, { d: "M11 15h-1v-1h1v1ZM3 12H2v-1h1v1ZM2 11H1v-2H0v-1h1v-1h1v4ZM3 7H2v-1h1v1ZM3 4H2V2h1v2ZM9 4h-1v-1h1v1ZM8 3h-1V2h1v1ZM10 3h-1V2h1v1ZM15 3h-1V2h1v1ZM4 2h-1V1h1v1ZM7 2h-1V1h1v1ZM9 2h-1V1h1v1ZM13 2h-1V1h1v1ZM6 1h-2V0h2v1ZM8 1h-1V0h1v1Z", fill: "black" });
  return hasOwnProperty(Svg, obj3);
});
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBee.tsx");

export const GuildBadgeBee = tmp4;