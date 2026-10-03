// === Module 13765: GuildBadgeButterfly ===

// Module 13765 (GuildBadgeButterfly)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13728 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#0DA9FE", "#9AF2FF"];
const primaryTintLuminances = [0.45, 0.7];
let items = [{ base: 3, tint: 1 }, { base: 3, tint: 1 }];
const secondaryBaseColors = ["#5C0084"];
const secondaryTintLuminances = [0.2];
const items1 = [{ base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeButterfly.tsx");

export const GuildBadgeButterfly = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(26);
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
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = React4(inlineStyles.Path, { d: "M7 5h1v1h-1z", fill: "white" });
      cResult[9] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] !== primaryColorsTransformed[0]) {
      const obj2 = { d: "M6 10h1v1h-1v1h-1v1H2v-1h1v-1H2v1H1v-2h1v-1h4v1ZM14 10h1v2h-1v-1h-1v1h1v1H11v-1h-1v-1h-1v-1h1v-1h4v1ZM6 8H2V5h1v-1h3v4ZM13 5h1v3H10V4h3v1Z", fill: primaryColorsTransformed[0] };
      const tmp20 = React4(inlineStyles.Path, obj2);
      cResult[10] = primaryColorsTransformed[0];
      cResult[11] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] !== primaryColorsTransformed[1]) {
      const obj3 = { d: "M5 14H2v-1h3v1ZM14 13v1H11v-1h3ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM11 13h-1v-1h1v1ZM15 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM14 12h-1v-1h1v1ZM2 6H1v-1h1v1ZM15 6h-1v-1h1v1ZM5 4h-2v1H2v-2h3v1ZM14 5h-1v-1h-2v-1h3v2Z", fill: primaryColorsTransformed[1] };
      const tmp23 = React4(inlineStyles.Path, obj3);
      cResult[12] = primaryColorsTransformed[1];
      cResult[13] = tmp23;
      let tmp21 = tmp23;
    } else {
      tmp21 = cResult[13];
    }
    let first;
    if (secondaryColorsTransformed != null) {
      first = secondaryColorsTransformed[0];
    }
    if (first == null) {
      first = secondaryBaseColors[0];
    }
    if (cResult[14] !== first) {
      const obj4 = { d: "M4 15H2v-1h2v1ZM14 14v1h-2v-1h2ZM2 14H1v-1h1v1ZM15 14h-1v-1h1v1ZM7 10h-1v-1h1v1ZM10 10h-1v-1h1v1ZM6 9H3v-1h3v1ZM13 9H10v-1h3v1ZM3 2h1v1H2v2H1V1h2v1ZM15 5h-1v-2h-2V2h1V1h2v4Z", fill: first };
      const tmp29 = React4(inlineStyles.Path, obj4);
      cResult[14] = first;
      cResult[15] = tmp29;
      let tmp27 = tmp29;
    } else {
      tmp27 = cResult[15];
    }
    const _Symbol2 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp34 = React4(inlineStyles.Path, { d: "M4 16H2v-1h2v1ZM14 16h-2v-1h2v1ZM2 15H1v-1h1v1ZM5 15h-1v-1h1v1ZM12 15h-1v-1h1v1ZM15 15h-1v-1h1v1ZM1 14H0V10h1v4ZM6 14h-1v-1h1v1Z", fill: "black" });
      const tmp35 = React4(inlineStyles.Path, { d: "M9 4h1v5h-1v3h1v1h-1v1h-2v-1h-1v-1h1V9h-1V4h1v-1h2v1Zm-2 2h1v-1h-1v1Z", fill: "#000", fillRule: "evenodd" });
      const tmp36 = React4(inlineStyles.Path, { d: "M11 14h-1v-1h1v1ZM16 14h-1V10h1v4ZM2 10H1v-1h1v1ZM15 10h-1v-1h1v1ZM3 9H2v-1h1v1ZM14 9h-1v-1h1v1ZM1 6h1v2H1v-1H0V1h1v5ZM16 7h-1v1h-1v-2h1V1h1v6ZM6 4h-1v-1h1v1ZM11 4h-1v-1h1v1ZM5 3h-1V2h1v1ZM7 3h-1V1h1v2ZM10 3h-1V1h1v2ZM12 3h-1V2h1v1ZM4 2h-1V1h1v1ZM13 2h-1V1h1v1ZM3 1H1V0h2v1ZM6 1h-1V0h1v1ZM11 1h-1V0h1v1ZM15 1h-2V0h2v1Z", fill: "black" });
      cResult[16] = tmp35;
      cResult[17] = tmp36;
      cResult[18] = tmp34;
      let tmp32 = tmp34;
      let tmp31 = tmp36;
      let tmp30 = tmp35;
    } else {
      tmp30 = cResult[16];
      tmp31 = cResult[17];
      tmp32 = cResult[18];
    }
    if (cResult[19] === num8) {
      if (cResult[20] === tmp5) {
        if (cResult[21] === tmp18) {
          if (cResult[22] === tmp21) {
            if (cResult[23] === tmp27) {
              if (cResult[24] === num7) {
                let tmp37 = cResult[25];
              }
              return tmp37;
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
    items = [tmp15, tmp18, tmp21, tmp27, tmp32, tmp30, tmp31];
    obj5.children = items;
    const tmp42 = hasOwnProperty(inlineStyles.Svg, obj5);
    cResult[19] = num8;
    cResult[20] = tmp5;
    cResult[21] = tmp18;
    cResult[22] = tmp21;
    cResult[23] = tmp27;
    cResult[24] = num7;
    cResult[25] = tmp42;
    tmp37 = tmp42;
  }
  const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 });
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = transformedBadgeColors;
  tmp12 = transformedBadgeColors;
  const obj6 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
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
  items = [React4(inlineStyles.Path, { d: "M7 5h1v1h-1z", fill: "white" }), React4(inlineStyles.Path, { d: "M6 10h1v1h-1v1h-1v1H2v-1h1v-1H2v1H1v-2h1v-1h4v1ZM14 10h1v2h-1v-1h-1v1h1v1H11v-1h-1v-1h-1v-1h1v-1h4v1ZM6 8H2V5h1v-1h3v4ZM13 5h1v3H10V4h3v1Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M5 14H2v-1h3v1ZM14 13v1H11v-1h3ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM11 13h-1v-1h1v1ZM15 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM14 12h-1v-1h1v1ZM2 6H1v-1h1v1ZM15 6h-1v-1h1v1ZM5 4h-2v1H2v-2h3v1ZM14 5h-1v-1h-2v-1h3v2Z", fill: primaryColorsTransformed[1] }), , , , ];
  let first;
  if (secondaryColorsTransformed != null) {
    first = secondaryColorsTransformed[0];
  }
  if (first == null) {
    first = secondaryBaseColors[0];
  }
  items[3] = React4(inlineStyles.Path, { d: "M4 15H2v-1h2v1ZM14 14v1h-2v-1h2ZM2 14H1v-1h1v1ZM15 14h-1v-1h1v1ZM7 10h-1v-1h1v1ZM10 10h-1v-1h1v1ZM6 9H3v-1h3v1ZM13 9H10v-1h3v1ZM3 2h1v1H2v2H1V1h2v1ZM15 5h-1v-2h-2V2h1V1h2v4Z", fill: first });
  items[4] = React4(inlineStyles.Path, { d: "M4 16H2v-1h2v1ZM14 16h-2v-1h2v1ZM2 15H1v-1h1v1ZM5 15h-1v-1h1v1ZM12 15h-1v-1h1v1ZM15 15h-1v-1h1v1ZM1 14H0V10h1v4ZM6 14h-1v-1h1v1Z", fill: "black" });
  items[5] = React4(inlineStyles.Path, { d: "M9 4h1v5h-1v3h1v1h-1v1h-2v-1h-1v-1h1V9h-1V4h1v-1h2v1Zm-2 2h1v-1h-1v1Z", fill: "#000", fillRule: "evenodd" });
  items[6] = React4(inlineStyles.Path, { d: "M11 14h-1v-1h1v1ZM16 14h-1V10h1v4ZM2 10H1v-1h1v1ZM15 10h-1v-1h1v1ZM3 9H2v-1h1v1ZM14 9h-1v-1h1v1ZM1 6h1v2H1v-1H0V1h1v5ZM16 7h-1v1h-1v-2h1V1h1v6ZM6 4h-1v-1h1v1ZM11 4h-1v-1h1v1ZM5 3h-1V2h1v1ZM7 3h-1V1h1v2ZM10 3h-1V1h1v2ZM12 3h-1V2h1v1ZM4 2h-1V1h1v1ZM13 2h-1V1h1v1ZM3 1H1V0h2v1ZM6 1h-1V0h1v1ZM11 1h-1V0h1v1ZM15 1h-2V0h2v1Z", fill: "black" });
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});