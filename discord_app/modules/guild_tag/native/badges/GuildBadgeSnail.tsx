// === Module 13786: GuildBadgeSnail ===

// Module 13786 (GuildBadgeSnail)
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
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const primaryBaseColors = ["#7E1B1B", "#C7531A"];
const primaryTintLuminances = [0.25, 0.45];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const secondaryBaseColors = ["#B86F00", "#E6D23B"];
const secondaryTintLuminances = [0.5, 0.75];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
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
  const cResult = obj.c(31);
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
    let tmp15;
    let tmp20;
    let tmp19;
    let tmp18;
    let tmp25;
    let tmp31;
    let tmp36;
    let tmp39;
    if (cResult[7] === tmp6) {
      tmp12 = cResult[8];
    }
    ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = React3(inlineStyles.Path, { d: "M9 13h-1v-1h1v1ZM8 12h-1v-1h1v1ZM7 11h-1v-2h1v2ZM12 10h-1v-1h1v1ZM11 9h-1v-1h1v1ZM13 9h-1v-1h1v1ZM12 8h-1v-1h1v1ZM2 6H1v-1h1v1ZM8 5h-2v-1h2v1ZM4 2h-1V1h1v1Z", fill: "white" });
      cResult[9] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] !== primaryColorsTransformed[1]) {
      const obj2 = { d: "M8 13h-1v-1h1v1ZM12 12v-1h1v-1h1V7h-1v-1h-1v-1H8v-1h5v1h1v1h1v6h-2v1H9v-1h3ZM7 12h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
      const tmp22 = React3(inlineStyles.Path, obj2);
      const obj3 = { d: "M10 10h2v1H8v-2h1v-1h1v2ZM13 10h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
      const tmp23 = React3(inlineStyles.Path, obj3);
      const obj4 = { d: "M12 7H9v1h-1v1h-2v-1h1v-1h1v-1h4v1ZM13 8h-1v-1h1v1ZM8 6h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
      const tmp24 = React3(inlineStyles.Path, obj4);
      cResult[10] = primaryColorsTransformed[1];
      cResult[11] = tmp22;
      cResult[12] = tmp23;
      cResult[13] = tmp24;
      tmp20 = tmp24;
      tmp19 = tmp23;
      tmp18 = tmp22;
    } else {
      tmp18 = cResult[11];
      tmp19 = cResult[12];
      tmp20 = cResult[13];
    }
    if (cResult[14] !== primaryColorsTransformed[0]) {
      const obj5 = { d: "M13 13v1H7v-1h6ZM7 13h-1v-1h1v1ZM14 13h-1v-1h1v1ZM6 12h-1V9h1v3ZM12 12H8v-1h4v1ZM8 11h-1v-2h1v2ZM13 11h-1v-1h1v1ZM11 10h-1v-1h1v1ZM14 10h-1V7h1v3ZM9 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-2v-1h2v1ZM8 7h-1v-1h1v1ZM13 7h-1v-1h1v1ZM12 6H8v-1h4v1Z", fill: primaryColorsTransformed[0] };
      const tmp27 = React3(inlineStyles.Path, obj5);
      cResult[14] = primaryColorsTransformed[0];
      cResult[15] = tmp27;
      tmp25 = tmp27;
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
      const tmp33 = React3(inlineStyles.Path, obj6);
      cResult[16] = tmp29;
      cResult[17] = tmp33;
      tmp31 = tmp33;
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
      const tmp38 = React3(inlineStyles.Path, obj7);
      cResult[18] = first;
      cResult[19] = tmp38;
      tmp36 = tmp38;
    } else {
      tmp36 = cResult[19];
    }
    const _Symbol2 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp41 = React3(inlineStyles.Path, { d: "M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z", fill: "black" });
      cResult[20] = tmp41;
      tmp39 = tmp41;
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
                    let tmp42;
                    if (cResult[29] === num7) {
                      tmp42 = cResult[30];
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
    const obj8 = { width: num7, height: num8, viewBox: "0 0 16 16", fill: "none", children: items };
    const Svg = inlineStyles.Svg;
    const merged = Object.assign(tmp5);
    items = [tmp15, tmp18, tmp19, tmp20, tmp25, tmp31, tmp36, tmp39];
    const tmp47 = hasOwnProperty(Svg, obj8);
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
  items = [React3(inlineStyles.Path, { d: "M9 13h-1v-1h1v1ZM8 12h-1v-1h1v1ZM7 11h-1v-2h1v2ZM12 10h-1v-1h1v1ZM11 9h-1v-1h1v1ZM13 9h-1v-1h1v1ZM12 8h-1v-1h1v1ZM2 6H1v-1h1v1ZM8 5h-2v-1h2v1ZM4 2h-1V1h1v1Z", fill: "white" }), , , , , , , ];
  const obj4 = { d: "M8 13h-1v-1h1v1ZM12 12v-1h1v-1h1V7h-1v-1h-1v-1H8v-1h5v1h1v1h1v6h-2v1H9v-1h3ZM7 12h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
  items[1] = React3(inlineStyles.Path, obj4);
  const obj5 = { d: "M10 10h2v1H8v-2h1v-1h1v2ZM13 10h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
  items[2] = React3(inlineStyles.Path, obj5);
  const obj6 = { d: "M12 7H9v1h-1v1h-2v-1h1v-1h1v-1h4v1ZM13 8h-1v-1h1v1ZM8 6h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
  items[3] = React3(inlineStyles.Path, obj6);
  const obj7 = { d: "M13 13v1H7v-1h6ZM7 13h-1v-1h1v1ZM14 13h-1v-1h1v1ZM6 12h-1V9h1v3ZM12 12H8v-1h4v1ZM8 11h-1v-2h1v2ZM13 11h-1v-1h1v1ZM11 10h-1v-1h1v1ZM14 10h-1V7h1v3ZM9 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-2v-1h2v1ZM8 7h-1v-1h1v1ZM13 7h-1v-1h1v1ZM12 6H8v-1h4v1Z", fill: primaryColorsTransformed[0] };
  items[4] = React3(inlineStyles.Path, obj7);
  let tmp9;
  const Path = inlineStyles.Path;
  if (secondaryColorsTransformed != null) {
    tmp9 = secondaryColorsTransformed[1];
  }
  if (tmp9 == null) {
    tmp9 = secondaryBaseColors[1];
  }
  items[5] = React3(Path, { d: "M5 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM3 5h2v1h1v2H2v4H1V6h1V2h1v3Z", fill: tmp9 });
  let first;
  const Path2 = inlineStyles.Path;
  if (secondaryColorsTransformed != null) {
    first = secondaryColorsTransformed[0];
  }
  if (first == null) {
    first = secondaryBaseColors[0];
  }
  items[6] = React3(Path2, { d: "M5 13h1v1h-1v-1ZM7 15h-2v-1h2v1ZM15 14v1h-2v-1h2ZM3 9h1v1h1v4h-1v-1h-1v-1H2V8h1v1ZM5 4h-1v-1h1v1ZM6 3h-1V2h1v1ZM7 2h-1V1h1v1Z", fill: first });
  items[7] = React3(inlineStyles.Path, { d: "M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z", fill: "black" });
  return hasOwnProperty(Svg, obj3);
});
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSnail.tsx");

export const GuildBadgeSnail = tmp4;