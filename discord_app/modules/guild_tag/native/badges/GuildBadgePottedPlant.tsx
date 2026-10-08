// === Module 14004: GuildBadgePottedPlant ===

// Module 14004 (GuildBadgePottedPlant)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7550 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13970 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#003E22", "#027D46", "#14A95C"];
const primaryTintLuminances = [0.1, 0.25, 0.45];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const secondaryBaseColors = ["#FD7531", "#FFAE49", "#FFC781"];
const secondaryTintLuminances = [0.45, 0.6, 0.75];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgePottedPlant.tsx");

export const GuildBadgePottedPlant = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBadgePottedPlant(arg0) {
  const cResult = c.c(37);
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
    if (cResult[9] !== primaryColorsTransformed[0]) {
      const obj2 = { d: "M7 6h-2v-1h1v-1h1v2ZM10 5h1v1h-2v-2h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1ZM4 4h-1v-1h1v1ZM13 4h-1v-1h1v1Z", fill: primaryColorsTransformed[0] };
      const tmp16 = React4(inlineStyles.Path, obj2);
      cResult[9] = primaryColorsTransformed[0];
      cResult[10] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[10];
    }
    if (cResult[11] !== primaryColorsTransformed[2]) {
      const obj3 = { d: "M8 9h-1V4h1v5Z", fill: primaryColorsTransformed[2] };
      const tmp21 = React4(inlineStyles.Path, obj3);
      const obj4 = { d: "M6 3h1v1h-1v1h-1v-1h-1v1H2V2h4v1Zm-3 1h1v-1h-1v1Z", fill: primaryColorsTransformed[2], fillRule: "evenodd" };
      const tmp22 = React4(inlineStyles.Path, obj4);
      const obj5 = { d: "M14 3h-2v1h-1v1h-1v-2h1V2h3v1Z", fill: primaryColorsTransformed[2] };
      const tmp23 = React4(inlineStyles.Path, obj5);
      cResult[11] = primaryColorsTransformed[2];
      cResult[12] = tmp21;
      cResult[13] = tmp22;
      cResult[14] = tmp23;
      let tmp19 = tmp23;
      let tmp18 = tmp22;
      let tmp17 = tmp21;
    } else {
      tmp17 = cResult[12];
      tmp18 = cResult[13];
      tmp19 = cResult[14];
    }
    if (cResult[15] !== primaryColorsTransformed[1]) {
      const obj6 = { d: "M9 9h-1V4h1v5ZM5 6h-2v-1h2v1ZM15 4h-1v1h-1v1h-2v-1h1v-1h1v-1h1V2h1v2Z", fill: primaryColorsTransformed[1] };
      const tmp26 = React4(inlineStyles.Path, obj6);
      cResult[15] = primaryColorsTransformed[1];
      cResult[16] = tmp26;
      let tmp24 = tmp26;
    } else {
      tmp24 = cResult[16];
    }
    let str;
    if (secondaryColorsTransformed != null) {
      str = secondaryColorsTransformed[0];
    }
    if (str == null) {
      str = "#FD7531";
    }
    if (cResult[17] !== str) {
      const obj7 = { d: "M13 11v1H3v-1h10Z", fill: str };
      const tmp30 = React4(inlineStyles.Path, obj7);
      cResult[17] = str;
      cResult[18] = tmp30;
      let tmp28 = tmp30;
    } else {
      tmp28 = cResult[18];
    }
    const _Symbol = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp34 = React4(inlineStyles.Path, { d: "M4 14h-1v-2h1v2ZM5 11h-2v-1h2v1ZM2 4H1V2h1v2ZM10 4h-1v-1h1v1ZM11 3h-1V2h1v1ZM5 2H2V1h3v1ZM14 2H11V1h3v1Z", fill: "white" });
      cResult[19] = tmp34;
      let tmp32 = tmp34;
    } else {
      tmp32 = cResult[19];
    }
    let str3;
    if (secondaryColorsTransformed != null) {
      str3 = secondaryColorsTransformed[2];
    }
    if (str3 == null) {
      str3 = "#FFC781";
    }
    if (cResult[20] !== str3) {
      const obj8 = { d: "M12 14H4v-2h8v2ZM13 11H5v-1h8v1Z", fill: str3 };
      const tmp37 = React4(inlineStyles.Path, obj8);
      cResult[20] = str3;
      cResult[21] = tmp37;
      let tmp35 = tmp37;
    } else {
      tmp35 = cResult[21];
    }
    let str4;
    if (secondaryColorsTransformed != null) {
      str4 = secondaryColorsTransformed[1];
    }
    if (str4 == null) {
      str4 = "#FFAE49";
    }
    if (cResult[22] !== str4) {
      const obj9 = { d: "M12 14v1H4v-1h8ZM13 14h-1v-2h1v2Z", fill: str4 };
      const tmp40 = React4(inlineStyles.Path, obj9);
      cResult[22] = str4;
      cResult[23] = tmp40;
      let tmp38 = tmp40;
    } else {
      tmp38 = cResult[23];
    }
    const _Symbol2 = Symbol;
    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp43 = React4(inlineStyles.Path, { d: "M12 15v1H4v-1h8ZM4 15h-1v-1h1v1ZM13 15h-1v-1h1v1ZM7 9h2V6h4v1H10v2h4v5h-1V10H3v4H2V9h4v-2H3v-1h4v3ZM3 6H2v-1h1v1ZM14 6h-1v-1h1v1ZM2 5H1v-1h1v1ZM15 5h-1v-1h1v1ZM1 4H0V2h1v2ZM9 4h-2v-1h2v1ZM16 4h-1V2h1v2ZM7 3h-1V2h1v1ZM10 3h-1V2h1v1ZM2 2H1V1h1v1ZM6 2h-1V1h1v1ZM11 2h-1V1h1v1ZM15 2h-1V1h1v1ZM5 1H2V0h3v1ZM14 1H11V0h3v1Z", fill: "black" });
      cResult[24] = tmp43;
      let tmp41 = tmp43;
    } else {
      tmp41 = cResult[24];
    }
    if (cResult[25] === num8) {
      if (cResult[26] === tmp5) {
        if (cResult[27] === tmp28) {
          if (cResult[28] === tmp35) {
            if (cResult[29] === tmp38) {
              if (cResult[30] === tmp14) {
                if (cResult[31] === tmp17) {
                  if (cResult[32] === tmp18) {
                    if (cResult[33] === tmp19) {
                      if (cResult[34] === tmp24) {
                        if (cResult[35] === num7) {
                          let tmp44 = cResult[36];
                        }
                        return tmp44;
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
    const obj10 = {};
    const merged = Object.assign(tmp5);
    obj10.width = num7;
    obj10.height = num8;
    obj10.viewBox = "0 0 16 16";
    obj10.fill = "none";
    items = [tmp14, tmp17, tmp18, tmp19, tmp24, tmp28, tmp32, tmp35, tmp38, tmp41];
    obj10.children = items;
    const tmp49 = hasOwnProperty(inlineStyles.Svg, obj10);
    cResult[25] = num8;
    cResult[26] = tmp5;
    cResult[27] = tmp28;
    cResult[28] = tmp35;
    cResult[29] = tmp38;
    cResult[30] = tmp14;
    cResult[31] = tmp17;
    cResult[32] = tmp18;
    cResult[33] = tmp19;
    cResult[34] = tmp24;
    cResult[35] = num7;
    cResult[36] = tmp49;
    tmp44 = tmp49;
  }
  const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 });
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = transformedBadgeColors;
  tmp12 = transformedBadgeColors;
  const obj11 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const tmpResult = GuildBadgeUtils;
}) : (function GuildBadgePottedPlant(width) {
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
  items = [React4(inlineStyles.Path, { d: "M7 6h-2v-1h1v-1h1v2ZM10 5h1v1h-2v-2h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1ZM4 4h-1v-1h1v1ZM13 4h-1v-1h1v1Z", fill: primaryColorsTransformed[0] }), React4(inlineStyles.Path, { d: "M8 9h-1V4h1v5Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M6 3h1v1h-1v1h-1v-1h-1v1H2V2h4v1Zm-3 1h1v-1h-1v1Z", fill: primaryColorsTransformed[2], fillRule: "evenodd" }), React4(inlineStyles.Path, { d: "M14 3h-2v1h-1v1h-1v-2h1V2h3v1Z", fill: primaryColorsTransformed[2] }), React4(inlineStyles.Path, { d: "M9 9h-1V4h1v5ZM5 6h-2v-1h2v1ZM15 4h-1v1h-1v1h-2v-1h1v-1h1v-1h1V2h1v2Z", fill: primaryColorsTransformed[1] }), , , , , ];
  let str;
  if (secondaryColorsTransformed != null) {
    str = secondaryColorsTransformed[0];
  }
  if (str == null) {
    str = "#FD7531";
  }
  items[5] = React4(inlineStyles.Path, { d: "M13 11v1H3v-1h10Z", fill: str });
  items[6] = React4(inlineStyles.Path, { d: "M4 14h-1v-2h1v2ZM5 11h-2v-1h2v1ZM2 4H1V2h1v2ZM10 4h-1v-1h1v1ZM11 3h-1V2h1v1ZM5 2H2V1h3v1ZM14 2H11V1h3v1Z", fill: "white" });
  let str2;
  if (secondaryColorsTransformed != null) {
    str2 = secondaryColorsTransformed[2];
  }
  if (str2 == null) {
    str2 = "#FFC781";
  }
  items[7] = React4(inlineStyles.Path, { d: "M12 14H4v-2h8v2ZM13 11H5v-1h8v1Z", fill: str2 });
  let str3;
  if (secondaryColorsTransformed != null) {
    str3 = secondaryColorsTransformed[1];
  }
  if (str3 == null) {
    str3 = "#FFAE49";
  }
  items[8] = React4(inlineStyles.Path, { d: "M12 14v1H4v-1h8ZM13 14h-1v-2h1v2Z", fill: str3 });
  items[9] = React4(inlineStyles.Path, { d: "M12 15v1H4v-1h8ZM4 15h-1v-1h1v1ZM13 15h-1v-1h1v1ZM7 9h2V6h4v1H10v2h4v5h-1V10H3v4H2V9h4v-2H3v-1h4v3ZM3 6H2v-1h1v1ZM14 6h-1v-1h1v1ZM2 5H1v-1h1v1ZM15 5h-1v-1h1v1ZM1 4H0V2h1v2ZM9 4h-2v-1h2v1ZM16 4h-1V2h1v2ZM7 3h-1V2h1v1ZM10 3h-1V2h1v1ZM2 2H1V1h1v1ZM6 2h-1V1h1v1ZM11 2h-1V1h1v1ZM15 2h-1V1h1v1ZM5 1H2V0h3v1ZM14 1H11V0h3v1Z", fill: "black" });
  obj3.children = items;
  return hasOwnProperty(inlineStyles.Svg, obj3);
});