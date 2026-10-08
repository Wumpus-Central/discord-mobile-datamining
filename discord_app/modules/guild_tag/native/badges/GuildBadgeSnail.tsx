// === Module 14008: GuildBadgeSnail ===

// Module 14008 (GuildBadgeSnail)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7550 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13970 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#7E1B1B", "#C7531A"];
const primaryTintLuminances = [0.25, 0.45];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const secondaryBaseColors = ["#B86F00", "#E6D23B"];
const secondaryTintLuminances = [0.5, 0.75];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSnail.tsx");

export const GuildBadgeSnail = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBadgeSnail(arg0) {
  const cResult = c.c(31);
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
      const tmp17 = React4(inlineStyles.Path, { d: "M9 13h-1v-1h1v1ZM8 12h-1v-1h1v1ZM7 11h-1v-2h1v2ZM12 10h-1v-1h1v1ZM11 9h-1v-1h1v1ZM13 9h-1v-1h1v1ZM12 8h-1v-1h1v1ZM2 6H1v-1h1v1ZM8 5h-2v-1h2v1ZM4 2h-1V1h1v1Z", fill: "white" });
      cResult[9] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] !== primaryColorsTransformed[1]) {
      const obj2 = { d: "M8 13h-1v-1h1v1ZM12 12v-1h1v-1h1V7h-1v-1h-1v-1H8v-1h5v1h1v1h1v6h-2v1H9v-1h3ZM7 12h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
      const tmp22 = React4(inlineStyles.Path, obj2);
      const obj3 = { d: "M10 10h2v1H8v-2h1v-1h1v2ZM13 10h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
      const tmp23 = React4(inlineStyles.Path, obj3);
      const obj4 = { d: "M12 7H9v1h-1v1h-2v-1h1v-1h1v-1h4v1ZM13 8h-1v-1h1v1ZM8 6h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
      const tmp24 = React4(inlineStyles.Path, obj4);
      cResult[10] = primaryColorsTransformed[1];
      cResult[11] = tmp22;
      cResult[12] = tmp23;
      cResult[13] = tmp24;
      let tmp20 = tmp24;
      let tmp19 = tmp23;
      let tmp18 = tmp22;
    } else {
      tmp18 = cResult[11];
      tmp19 = cResult[12];
      tmp20 = cResult[13];
    }
    if (cResult[14] !== primaryColorsTransformed[0]) {
      const obj5 = { d: "M13 13v1H7v-1h6ZM7 13h-1v-1h1v1ZM14 13h-1v-1h1v1ZM6 12h-1V9h1v3ZM12 12H8v-1h4v1ZM8 11h-1v-2h1v2ZM13 11h-1v-1h1v1ZM11 10h-1v-1h1v1ZM14 10h-1V7h1v3ZM9 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-2v-1h2v1ZM8 7h-1v-1h1v1ZM13 7h-1v-1h1v1ZM12 6H8v-1h4v1Z", fill: primaryColorsTransformed[0] };
      const tmp27 = React4(inlineStyles.Path, obj5);
      cResult[14] = primaryColorsTransformed[0];
      cResult[15] = tmp27;
      let tmp25 = tmp27;
    } else {
      tmp25 = cResult[15];
    }
    let tmp29;
    if (secondaryColorsTransformed != null) {
      tmp29 = secondaryColorsTransformed[1];
    }
    if (tmp29 == null) {
      tmp29 = secondaryBaseColors[1];
    }
    if (cResult[16] !== tmp29) {
      const obj6 = { d: "M5 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM3 5h2v1h1v2H2v4H1V6h1V2h1v3Z", fill: tmp29 };
      const tmp33 = React4(inlineStyles.Path, obj6);
      cResult[16] = tmp29;
      cResult[17] = tmp33;
      let tmp31 = tmp33;
    } else {
      tmp31 = cResult[17];
    }
    let first;
    if (secondaryColorsTransformed != null) {
      first = secondaryColorsTransformed[0];
    }
    if (first == null) {
      first = secondaryBaseColors[0];
    }
    if (cResult[18] !== first) {
      const obj7 = { d: "M5 13h1v1h-1v-1ZM7 15h-2v-1h2v1ZM15 14v1h-2v-1h2ZM3 9h1v1h1v4h-1v-1h-1v-1H2V8h1v1ZM5 4h-1v-1h1v1ZM6 3h-1V2h1v1ZM7 2h-1V1h1v1Z", fill: first };
      const tmp38 = React4(inlineStyles.Path, obj7);
      cResult[18] = first;
      cResult[19] = tmp38;
      let tmp36 = tmp38;
    } else {
      tmp36 = cResult[19];
    }
    const _Symbol2 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp41 = React4(inlineStyles.Path, { d: "M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z", fill: "black" });
      cResult[20] = tmp41;
      let tmp39 = tmp41;
    } else {
      tmp39 = cResult[20];
    }
    if (cResult[21] === num8) {
      if (cResult[22] === tmp5) {
        if (cResult[23] === tmp31) {
          if (cResult[24] === tmp36) {
            if (cResult[25] === tmp18) {
              if (cResult[26] === tmp19) {
                if (cResult[27] === tmp20) {
                  if (cResult[28] === tmp25) {
                    if (cResult[29] === num7) {
                      let tmp42 = cResult[30];
                    }
                    return tmp42;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj8 = {};
    const merged = Object.assign(tmp5);
    obj8.width = num7;
    obj8.height = num8;
    obj8.viewBox = "0 0 16 16";
    obj8.fill = "none";
    items = [tmp15, tmp18, tmp19, tmp20, tmp25, tmp31, tmp36, tmp39];
    obj8.children = items;
    const tmp47 = hasOwnProperty(inlineStyles.Svg, obj8);
    cResult[21] = num8;
    cResult[22] = tmp5;
    cResult[23] = tmp31;
    cResult[24] = tmp36;
    cResult[25] = tmp18;
    cResult[26] = tmp19;
    cResult[27] = tmp20;
    cResult[28] = tmp25;
    cResult[29] = num7;
    cResult[30] = tmp47;
    tmp42 = tmp47;
  }
  const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 });
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = transformedBadgeColors;
  tmp12 = transformedBadgeColors;
  const obj9 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const tmpResult = GuildBadgeUtils;
}) : (function GuildBadgeSnail(width) {
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
  items = [React4(inlineStyles.Path, { d: "M9 13h-1v-1h1v1ZM8 12h-1v-1h1v1ZM7 11h-1v-2h1v2ZM12 10h-1v-1h1v1ZM11 9h-1v-1h1v1ZM13 9h-1v-1h1v1ZM12 8h-1v-1h1v1ZM2 6H1v-1h1v1ZM8 5h-2v-1h2v1ZM4 2h-1V1h1v1Z", fill: "white" }), React4(inlineStyles.Path, { d: "M8 13h-1v-1h1v1ZM12 12v-1h1v-1h1V7h-1v-1h-1v-1H8v-1h5v1h1v1h1v6h-2v1H9v-1h3ZM7 12h-1v-1h1v1Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M10 10h2v1H8v-2h1v-1h1v2ZM13 10h-1v-1h1v1Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M12 7H9v1h-1v1h-2v-1h1v-1h1v-1h4v1ZM13 8h-1v-1h1v1ZM8 6h-1v-1h1v1Z", fill: primaryColorsTransformed[1] }), React4(inlineStyles.Path, { d: "M13 13v1H7v-1h6ZM7 13h-1v-1h1v1ZM14 13h-1v-1h1v1ZM6 12h-1V9h1v3ZM12 12H8v-1h4v1ZM8 11h-1v-2h1v2ZM13 11h-1v-1h1v1ZM11 10h-1v-1h1v1ZM14 10h-1V7h1v3ZM9 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-2v-1h2v1ZM8 7h-1v-1h1v1ZM13 7h-1v-1h1v1ZM12 6H8v-1h4v1Z", fill: primaryColorsTransformed[0] }), , , ];
  let tmp9;
  if (secondaryColorsTransformed != null) {
    tmp9 = secondaryColorsTransformed[1];
  }
  if (tmp9 == null) {
    tmp9 = secondaryBaseColors[1];
  }
  items[5] = React4(inlineStyles.Path, { d: "M5 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM3 5h2v1h1v2H2v4H1V6h1V2h1v3Z", fill: tmp9 });
  let first;
  if (secondaryColorsTransformed != null) {
    first = secondaryColorsTransformed[0];
  }
  if (first == null) {
    first = secondaryBaseColors[0];
  }
  items[6] = React4(inlineStyles.Path, { d: "M5 13h1v1h-1v-1ZM7 15h-2v-1h2v1ZM15 14v1h-2v-1h2ZM3 9h1v1h1v4h-1v-1h-1v-1H2V8h1v1ZM5 4h-1v-1h1v1ZM6 3h-1V2h1v1ZM7 2h-1V1h1v1Z", fill: first });
  items[7] = React4(inlineStyles.Path, { d: "M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z", fill: "black" });
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});