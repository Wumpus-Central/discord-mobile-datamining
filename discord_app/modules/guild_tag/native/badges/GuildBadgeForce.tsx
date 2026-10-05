// === Module 13743: GuildBadgeForce ===

// Module 13743 (GuildBadgeForce)
import react2 from "react" /* 576 */;
import v1 from "v1" /* 1266 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13730 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const primaryBaseColors = ["#be0351", "#ff2c52", "#f0f0f0"];
const secondaryBaseColors = ["#ffb84b", "#ffe361", "#f0f0f0"];
const primaryTintLuminances = [0.3, 0.4, 1];
let items = [{ base: 8, tint: 1 }, { base: 3, tint: 1 }, { base: 2, tint: 1 }];
const secondaryTintLuminances = [0.3, 0.5, 1];
let items1 = [{ base: 8, tint: 1 }, { base: 3, tint: 1 }, { base: 2, tint: 1 }];
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let RadialGradient;
  let height;
  let obj18;
  let primaryColorsTransformed;
  let primaryTintColor;
  let secondaryColorsTransformed;
  let secondaryTintColor;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let width;
  const obj = react2;
  const cResult = obj.c(67);
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
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = v1;
    const v4Result = tmpResult.v4();
    cResult[6] = v4Result;
    tmp12 = v4Result;
  } else {
    tmp12 = cResult[6];
  }
  const combined = "badge-force-gradient-" + tmp12;
  if (cResult[7] === tmp4) {
    let tmp15;
    let tmp18;
    let tmp21;
    let tmp24;
    let tmp27;
    let tmp30;
    let tmp33;
    let tmp36;
    let tmp39;
    let tmp42;
    let tmp45;
    let tmp48;
    let tmp51;
    let tmp54;
    let tmp57;
    let combined1;
    let tmp61;
    let tmp64;
    let tmp67;
    let tmp70;
    let tmp73;
    let tmp76;
    if (cResult[8] === tmp6) {
      tmp15 = cResult[9];
    }
    ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp15);
    let tmp17 = typeof num7 === "number";
    if (typeof num7 === "number") {
      tmp17 = num7 > 0;
    }
    if (tmp17) {
      tmp17 = typeof num8 === "number";
    }
    if (tmp17) {
      tmp17 = num8 > 0;
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp20 = hasOwnProperty(inlineStyles.Path, { d: "M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z", fill: "#000" });
      cResult[10] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[10];
    }
    if (cResult[11] !== secondaryColorsTransformed[2]) {
      const obj2 = { d: "M7 1H4v1h3V1ZM11 2H7v1h4V2Z", fill: secondaryColorsTransformed[2] };
      const tmp23 = hasOwnProperty(inlineStyles.Path, obj2);
      cResult[11] = secondaryColorsTransformed[2];
      cResult[12] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[12];
    }
    if (cResult[13] !== primaryColorsTransformed[2]) {
      const obj3 = { d: "M15 3h-4v1h4V3Z", fill: primaryColorsTransformed[2] };
      const tmp26 = hasOwnProperty(inlineStyles.Path, obj3);
      cResult[13] = primaryColorsTransformed[2];
      cResult[14] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[14];
    }
    const _Symbol2 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp29 = hasOwnProperty(inlineStyles.Path, { d: "M7 15H4v1h3v-1Z", fill: "#000" });
      cResult[15] = tmp29;
      tmp27 = tmp29;
    } else {
      tmp27 = cResult[15];
    }
    if (cResult[16] !== secondaryColorsTransformed[1]) {
      const obj4 = { d: "M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z", fill: secondaryColorsTransformed[1] };
      const tmp32 = hasOwnProperty(inlineStyles.Path, obj4);
      cResult[16] = secondaryColorsTransformed[1];
      cResult[17] = tmp32;
      tmp30 = tmp32;
    } else {
      tmp30 = cResult[17];
    }
    if (cResult[18] !== secondaryColorsTransformed[0]) {
      const obj5 = { d: "M7 14H4v1h3v-1Z", fill: secondaryColorsTransformed[0] };
      const tmp35 = hasOwnProperty(inlineStyles.Path, obj5);
      cResult[18] = secondaryColorsTransformed[0];
      cResult[19] = tmp35;
      tmp33 = tmp35;
    } else {
      tmp33 = cResult[19];
    }
    const _Symbol3 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp38 = hasOwnProperty(inlineStyles.Path, { d: "M11 14H7v1h4v-1Z", fill: "#000" });
      cResult[20] = tmp38;
      tmp36 = tmp38;
    } else {
      tmp36 = cResult[20];
    }
    if (cResult[21] !== secondaryColorsTransformed[1]) {
      const obj6 = { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: secondaryColorsTransformed[1] };
      const tmp41 = hasOwnProperty(inlineStyles.Path, obj6);
      cResult[21] = secondaryColorsTransformed[1];
      cResult[22] = tmp41;
      tmp39 = tmp41;
    } else {
      tmp39 = cResult[22];
    }
    const _Symbol4 = Symbol;
    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp44 = hasOwnProperty(inlineStyles.Path, { d: "M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z", fill: "#000" });
      cResult[23] = tmp44;
      tmp42 = tmp44;
    } else {
      tmp42 = cResult[23];
    }
    if (cResult[24] !== secondaryColorsTransformed[2]) {
      const obj7 = { d: "M2 5H1v2h1V5ZM6 5H5v2h1V5Z", fill: secondaryColorsTransformed[2] };
      const tmp47 = hasOwnProperty(inlineStyles.Path, obj7);
      cResult[24] = secondaryColorsTransformed[2];
      cResult[25] = tmp47;
      tmp45 = tmp47;
    } else {
      tmp45 = cResult[25];
    }
    if (cResult[26] !== secondaryColorsTransformed[0]) {
      const obj8 = { d: "M5 3H4v2h1V3Z", fill: secondaryColorsTransformed[0] };
      const tmp50 = hasOwnProperty(inlineStyles.Path, obj8);
      cResult[26] = secondaryColorsTransformed[0];
      cResult[27] = tmp50;
      tmp48 = tmp50;
    } else {
      tmp48 = cResult[27];
    }
    const _Symbol5 = Symbol;
    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp53 = hasOwnProperty(inlineStyles.Path, { d: "M11 3h-1v1h1V3Z", fill: "#000" });
      cResult[28] = tmp53;
      tmp51 = tmp53;
    } else {
      tmp51 = cResult[28];
    }
    if (cResult[29] !== secondaryColorsTransformed[2]) {
      const obj9 = { d: "M4 2H3v1h1V2Z", fill: secondaryColorsTransformed[2] };
      const tmp56 = hasOwnProperty(inlineStyles.Path, obj9);
      cResult[29] = secondaryColorsTransformed[2];
      cResult[30] = tmp56;
      tmp54 = tmp56;
    } else {
      tmp54 = cResult[30];
    }
    if (cResult[31] !== secondaryColorsTransformed[0]) {
      const obj10 = { d: "M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z", fill: secondaryColorsTransformed[0] };
      const tmp59 = hasOwnProperty(inlineStyles.Path, obj10);
      cResult[31] = secondaryColorsTransformed[0];
      cResult[32] = tmp59;
      tmp57 = tmp59;
    } else {
      tmp57 = cResult[32];
    }
    if (tmp17) {
      const _HermesInternal = HermesInternal;
      combined1 = "url(#" + combined + ")";
    } else {
      combined1 = primaryColorsTransformed[1];
    }
    if (cResult[33] !== combined1) {
      const obj11 = { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: combined1 };
      const tmp63 = hasOwnProperty(inlineStyles.Path, obj11);
      cResult[33] = combined1;
      cResult[34] = tmp63;
      tmp61 = tmp63;
    } else {
      tmp61 = cResult[34];
    }
    if (cResult[35] !== primaryColorsTransformed[1]) {
      const obj12 = { d: "M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z", fill: primaryColorsTransformed[1] };
      const tmp66 = hasOwnProperty(inlineStyles.Path, obj12);
      cResult[35] = primaryColorsTransformed[1];
      cResult[36] = tmp66;
      tmp64 = tmp66;
    } else {
      tmp64 = cResult[36];
    }
    if (cResult[37] !== primaryColorsTransformed[0]) {
      const obj13 = { d: "M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z", fill: primaryColorsTransformed[0] };
      const tmp69 = hasOwnProperty(inlineStyles.Path, obj13);
      cResult[37] = primaryColorsTransformed[0];
      cResult[38] = tmp69;
      tmp67 = tmp69;
    } else {
      tmp67 = cResult[38];
    }
    if (cResult[39] !== secondaryColorsTransformed[2]) {
      const obj14 = { d: "M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z", fill: secondaryColorsTransformed[2] };
      const tmp72 = hasOwnProperty(inlineStyles.Path, obj14);
      cResult[39] = secondaryColorsTransformed[2];
      cResult[40] = tmp72;
      tmp70 = tmp72;
    } else {
      tmp70 = cResult[40];
    }
    if (cResult[41] !== primaryColorsTransformed[2]) {
      const obj15 = { d: "M11 4h-1v1h1V4ZM10 6H9v1h1V6Z", fill: primaryColorsTransformed[2] };
      const tmp75 = hasOwnProperty(inlineStyles.Path, obj15);
      cResult[41] = primaryColorsTransformed[2];
      cResult[42] = tmp75;
      tmp73 = tmp75;
    } else {
      tmp73 = cResult[42];
    }
    const _Symbol6 = Symbol;
    if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp78 = hasOwnProperty(inlineStyles.Path, { d: "M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z", fill: "#000" });
      cResult[43] = tmp78;
      tmp76 = tmp78;
    } else {
      tmp76 = cResult[43];
    }
    if (cResult[44] === tmp17) {
      if (cResult[45] === primaryColorsTransformed[1]) {
        let tmp79;
        if (cResult[46] === secondaryColorsTransformed[1]) {
          tmp79 = cResult[47];
        }
        if (cResult[48] === num8) {
          if (cResult[49] === tmp5) {
            if (cResult[50] === tmp33) {
              if (cResult[51] === tmp39) {
                if (cResult[52] === tmp45) {
                  if (cResult[53] === tmp48) {
                    if (cResult[54] === tmp54) {
                      if (cResult[55] === tmp57) {
                        if (cResult[56] === tmp61) {
                          if (cResult[57] === tmp64) {
                            if (cResult[58] === tmp67) {
                              if (cResult[59] === tmp70) {
                                if (cResult[60] === tmp73) {
                                  if (cResult[61] === tmp79) {
                                    if (cResult[62] === tmp21) {
                                      if (cResult[63] === tmp24) {
                                        if (cResult[64] === tmp30) {
                                          let tmp83;
                                          if (cResult[65] === num7) {
                                            tmp83 = cResult[66];
                                          }
                                          return tmp83;
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
                  }
                }
              }
            }
          }
        }
        const obj16 = { width: num7, height: num8, viewBox: "0 0 16 16", fill: "none", children: items };
        const Svg = inlineStyles.Svg;
        const merged = Object.assign(tmp5);
        items = [tmp18, tmp21, tmp24, tmp27, tmp30, tmp33, tmp36, tmp39, tmp42, tmp45, tmp48, tmp51, tmp54, tmp57, tmp61, tmp64, tmp67, tmp70, tmp73, tmp76, tmp79];
        const tmp88 = metroRequire(Svg, obj16);
        cResult[48] = num8;
        cResult[49] = tmp5;
        cResult[50] = tmp33;
        cResult[51] = tmp39;
        cResult[52] = tmp45;
        cResult[53] = tmp48;
        cResult[54] = tmp54;
        cResult[55] = tmp57;
        cResult[56] = tmp61;
        cResult[57] = tmp64;
        cResult[58] = tmp67;
        cResult[59] = tmp70;
        cResult[60] = tmp73;
        cResult[61] = tmp79;
        cResult[62] = tmp21;
        cResult[63] = tmp24;
        cResult[64] = tmp30;
        cResult[65] = num7;
        cResult[66] = tmp88;
        tmp83 = tmp88;
      }
    }
    let tmp80 = tmp17;
    if (tmp80) {
      const obj17 = { children: metroRequire(RadialGradient, obj18) };
      const Defs = inlineStyles.Defs;
      obj18 = { id: combined, cx: 0.75, cy: 0.5, r: 1, fx: 0.75, fy: 0.5, children: items1 };
      RadialGradient = inlineStyles.RadialGradient;
      const obj19 = { stopColor: primaryColorsTransformed[1], offset: "30%" };
      items1 = [hasOwnProperty(inlineStyles.Stop, obj19), ];
      const obj20 = { stopColor: secondaryColorsTransformed[1], offset: "70%" };
      items1[1] = hasOwnProperty(inlineStyles.Stop, obj20);
      tmp80 = hasOwnProperty(Defs, obj17);
    }
    cResult[44] = tmp17;
    cResult[45] = primaryColorsTransformed[1];
    cResult[46] = secondaryColorsTransformed[1];
    cResult[47] = tmp80;
    tmp79 = tmp80;
  }
  const obj21 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor: tmp6, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const tmpResult2 = GuildBadgeUtils;
  const transformedBadgeColors = tmpResult2.getTransformedBadgeColors(obj21);
  cResult[7] = tmp4;
  cResult[8] = tmp6;
  cResult[9] = transformedBadgeColors;
  tmp15 = transformedBadgeColors;
}) : ((width) => {
  let RadialGradient;
  let combined;
  let obj18;
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
  const memo = react.useMemo(() => {
    const obj = v1;
    return "badge-force-gradient-" + obj.v4();
  }, []);
  let obj = GuildBadgeUtils;
  const obj2 = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj2);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  let tmp9Result = typeof num === "number";
  if (typeof num === "number") {
    tmp9Result = num > 0;
  }
  if (tmp9Result) {
    tmp9Result = typeof num2 === "number";
  }
  if (tmp9Result) {
    tmp9Result = num2 > 0;
  }
  const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items };
  const Svg = inlineStyles.Svg;
  const merged1 = Object.assign(merged);
  items = [hasOwnProperty(inlineStyles.Path, { d: "M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z", fill: "#000" }), , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M7 1H4v1h3V1ZM11 2H7v1h4V2Z", fill: secondaryColorsTransformed[2] };
  items[1] = hasOwnProperty(inlineStyles.Path, obj4);
  const obj5 = { d: "M15 3h-4v1h4V3Z", fill: primaryColorsTransformed[2] };
  items[2] = hasOwnProperty(inlineStyles.Path, obj5);
  items[3] = hasOwnProperty(inlineStyles.Path, { d: "M7 15H4v1h3v-1Z", fill: "#000" });
  const obj6 = { d: "M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z", fill: secondaryColorsTransformed[1] };
  items[4] = hasOwnProperty(inlineStyles.Path, obj6);
  const obj7 = { d: "M7 14H4v1h3v-1Z", fill: secondaryColorsTransformed[0] };
  items[5] = hasOwnProperty(inlineStyles.Path, obj7);
  items[6] = hasOwnProperty(inlineStyles.Path, { d: "M11 14H7v1h4v-1Z", fill: "#000" });
  const obj8 = { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: secondaryColorsTransformed[1] };
  items[7] = hasOwnProperty(inlineStyles.Path, obj8);
  items[8] = hasOwnProperty(inlineStyles.Path, { d: "M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z", fill: "#000" });
  const obj9 = { d: "M2 5H1v2h1V5ZM6 5H5v2h1V5Z", fill: secondaryColorsTransformed[2] };
  items[9] = hasOwnProperty(inlineStyles.Path, obj9);
  const obj10 = { d: "M5 3H4v2h1V3Z", fill: secondaryColorsTransformed[0] };
  items[10] = hasOwnProperty(inlineStyles.Path, obj10);
  items[11] = hasOwnProperty(inlineStyles.Path, { d: "M11 3h-1v1h1V3Z", fill: "#000" });
  const obj11 = { d: "M4 2H3v1h1V2Z", fill: secondaryColorsTransformed[2] };
  items[12] = hasOwnProperty(inlineStyles.Path, obj11);
  const obj12 = { d: "M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z", fill: secondaryColorsTransformed[0] };
  items[13] = hasOwnProperty(inlineStyles.Path, obj12);
  const Path = inlineStyles.Path;
  if (tmp9Result) {
    const _HermesInternal = HermesInternal;
    combined = "url(#" + memo + ")";
  } else {
    combined = primaryColorsTransformed[1];
  }
  items[14] = hasOwnProperty(Path, { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: combined });
  const obj13 = { d: "M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z", fill: primaryColorsTransformed[1] };
  items[15] = hasOwnProperty(inlineStyles.Path, obj13);
  const obj14 = { d: "M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z", fill: primaryColorsTransformed[0] };
  items[16] = hasOwnProperty(inlineStyles.Path, obj14);
  const obj15 = { d: "M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z", fill: secondaryColorsTransformed[2] };
  items[17] = hasOwnProperty(inlineStyles.Path, obj15);
  const obj16 = { d: "M11 4h-1v1h1V4ZM10 6H9v1h1V6Z", fill: primaryColorsTransformed[2] };
  items[18] = hasOwnProperty(inlineStyles.Path, obj16);
  items[19] = hasOwnProperty(inlineStyles.Path, { d: "M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z", fill: "#000" });
  if (tmp9Result) {
    const obj17 = { children: metroRequire(RadialGradient, obj18) };
    const Defs = inlineStyles.Defs;
    obj18 = { id: memo, cx: 0.75, cy: 0.5, r: 1, fx: 0.75, fy: 0.5, children: items1 };
    RadialGradient = inlineStyles.RadialGradient;
    const obj19 = { stopColor: primaryColorsTransformed[1], offset: "30%" };
    items1 = [hasOwnProperty(inlineStyles.Stop, obj19), ];
    const obj20 = { stopColor: secondaryColorsTransformed[1], offset: "70%" };
    items1[1] = hasOwnProperty(inlineStyles.Stop, obj20);
    tmp9Result = hasOwnProperty(Defs, obj17);
  }
  items[20] = tmp9Result;
  return metroRequire(Svg, obj3);
});
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeForce.tsx");

export const GuildBadgeForce = tmp3;