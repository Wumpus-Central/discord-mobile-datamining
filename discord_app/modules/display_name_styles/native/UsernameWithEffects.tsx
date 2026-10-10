// === Module 10262: UsernameWithEffects ===

// Module 10262 (UsernameWithEffects)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1407 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1409 */;
import useToken2 from "useToken" /* 4818 */;
import getNodeText from "getNodeText" /* 4821 */;
import Text_Text from "Text/Text" /* 5088 */;
import useTypographyVariantRemap from "useTypographyVariantRemap" /* 5098 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 5628 */;
import useDisplayNameStylesEnabled from "useDisplayNameStylesEnabled" /* 5629 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 8853 */;
import types from "types" /* 10263 */;
import useDisplayNameStylesAccessibleColors from "useDisplayNameStylesAccessibleColors" /* 10264 */;
import PerLetterEffectDefault from "PerLetterEffect" /* 10267 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["userId", "guildId", "userName", "effectDisplayType", "pendingDisplayNameStyles", "defaultColor", "containerStyle", "ignoreDisabledStylesSetting"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, processColor: closure_7, PixelRatio: closure_8, StyleSheet: closure_9 } = get_ActivityIndicator);
const MIN_PRISM_GRADIENT_WIDTH = fn(1408).MIN_PRISM_GRADIENT_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const dependencyMap = { [fn(1409).DisplayNameEffect.NEON]: 1, [fn(1409).DisplayNameEffect.TOON]: 1.6, [fn(1409).DisplayNameEffect.POP]: 1.2 };
const createStyles = fn(5092);
let closure_14 = createStyles.createStyles((textShadowColor, arg1) => {
  const result = 0.04 * arg1;
  const sum = 4 + 0.12 * arg1;
  value = closure_1_8.get();
  const sum1 = dependencyMap[DisplayNameEffect.DisplayNameEffect.NEON] + 0.04 * arg1;
  const sum2 = dependencyMap[DisplayNameEffect.DisplayNameEffect.TOON] + 0.04 * arg1;
  const sum3 = dependencyMap[DisplayNameEffect.DisplayNameEffect.POP] + 0.04 * arg1;
  const result1 = Math.floor(sum2 / 2) / value;
  const obj = { color: nativeDefault.colors.WHITE, textShadowColor, textShadowRadius: sum, textShadowOffset: { width: 0, height: 0 } };
  if (obj2.isIOS()) {
    const rect = { top: null, left: null, padding: null, marginVertical: null, marginLeft: null, marginRight: null };
    const result2 = -sum1 / 2;
    rect.top = result2;
    rect.left = result2;
    rect.padding = sum;
    rect.marginVertical = -sum;
    rect.marginLeft = -sum;
    rect.marginRight = -sum - sum1;
    let obj3 = rect;
  } else {
    obj3 = { left: -sum1, paddingRight: sum, marginRight: -sum - sum1 };
  }
  const obj4 = { neon: null, popContainer: null, popBackLayer: null, popFrontLayer: null, toon: null, layoutImpact: null };
  const merged = Object.assign(obj3);
  obj4.neon = obj;
  obj2 = utils_PlatformUtils;
  let num = 0;
  if (tmp4Result.isIOS()) {
    num = -sum3 / 2;
  }
  const rect1 = { position: "relative", top: num, left: null, marginRight: null };
  tmp4Result = utils_PlatformUtils;
  let num2 = 0;
  if (tmp4Result7.isIOS()) {
    num2 = -sum3 / 2;
  }
  rect1.left = num2;
  tmp4Result7 = utils_PlatformUtils;
  let num3 = 0;
  if (tmp4Result8.isIOS()) {
    num3 = -sum3;
  }
  rect1.marginRight = num3;
  obj4.popContainer = rect1;
  const rect2 = { color: textShadowColor, position: "absolute", left: 0, right: 0 };
  tmp4Result8 = utils_PlatformUtils;
  if (tmp4Result9.isIOS()) {
    const obj5 = { top: 1.2 + result };
    let obj6 = obj5;
  } else {
    obj6 = { transform: null };
    const obj7 = { translateY: 1.2 + result };
    const items = [obj7];
    obj6.transform = items;
  }
  const merged1 = Object.assign(obj6);
  obj4.popBackLayer = rect2;
  tmp4Result9 = utils_PlatformUtils;
  obj4.popFrontLayer = { color: nativeDefault.colors.WHITE };
  const rect3 = { color: nativeDefault.colors.WHITE, top: null, left: null, marginRight: null };
  const obj8 = { color: nativeDefault.colors.WHITE };
  let num6 = 0;
  if (tmp4Result10.isIOS()) {
    num6 = -sum2 / 2;
  }
  rect3.top = num6;
  tmp4Result10 = utils_PlatformUtils;
  if (tmp4Result11.isIOS()) {
    let result3 = -sum2 / 2;
  } else {
    result3 = -result1;
  }
  rect3.left = result3;
  tmp4Result11 = utils_PlatformUtils;
  rect3.marginRight = utils_PlatformUtils.isIOS() ? -sum2 : -result1;
  obj4.toon = rect3;
  obj4.layoutImpact = { flexShrink: 1, minWidth: 0 };
  return obj4;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/UsernameWithEffects.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UsernameWithEffects(arg0) {
  const cResult = c.c(92);
  ({ userId, guildId, userName, effectDisplayType, pendingDisplayNameStyles, defaultColor, containerStyle, ignoreDisabledStylesSetting } = arg0);
  const tmp4 = _objectWithoutProperties(arg0, closure_3);
  if (undefined === effectDisplayType) {
    effectDisplayType = types.EffectDisplayType.STATIC;
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === tmp5) {
      if (cResult[2] === pendingDisplayNameStyles) {
        if (cResult[3] === userId) {
          let tmp6 = cResult[4];
        }
        const tmp8 = useDisplayNameStylesDefault(tmp6);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { location: "UsernameWithEffects" };
          cResult[5] = obj2;
        }
        useDisplayNameStylesEnabled;
        if (cResult[6] === tmp8) {
          if (cResult[7] === tmp5) {
            let tmp13 = cResult[8];
          }
          const displayNameStylesFont = useDisplayNameStylesFont.useDisplayNameStylesFont(tmp13);
          let num5 = tmp4.lineClamp;
          if (num5 == null) {
            num5 = 1;
          }
          if (cResult[9] !== displayNameStylesFont) {
            let tmp18;
            if (null != displayNameStylesFont) {
              const obj3 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
              tmp18 = obj3;
            }
            cResult[9] = displayNameStylesFont;
            cResult[10] = tmp18;
            let tmp17 = tmp18;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] === displayNameStylesFont) {
            if (cResult[12] === tmp17) {
              if (cResult[13] === tmp16) {
                let tmp19 = cResult[14];
              }
              const token = useToken2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
              const tmpResult11 = useToken2;
              const useToken = useToken2.useToken;
              if (cResult[15] === token) {
                if (cResult[16] === tmp8) {
                  let tmp26 = cResult[17];
                }
                const displayNameStylesAccessibleColors = useDisplayNameStylesAccessibleColors.useDisplayNameStylesAccessibleColors(tmp26);
                let first;
                if (displayNameStylesAccessibleColors.length > 0) {
                  first = displayNameStylesAccessibleColors[0];
                }
                let effectId;
                if (tmp8 != null) {
                  effectId = tmp8.effectId;
                }
                if (effectId == null) {
                  effectId = DisplayNameEffect.DisplayNameEffect.SOLID;
                }
                let colorVariants = null;
                if (null != first) {
                  colorVariants = DisplayNameStylesUtils.generateColorVariants(first);
                  const tmpResult14 = DisplayNameStylesUtils;
                }
                const tmpResult15 = useTypographyVariantRemap;
                const tmp30 = Text_Text.TextStyleSheet[tmpResult15.useTypographyVariantRemap(tmpResult15, tmp4.variant, false)];
                const flattenResult = options.flatten(tmp4.style);
                let num17;
                if (flattenResult != null) {
                  num17 = flattenResult.fontSize;
                }
                if (num17 == null) {
                  let fontSize;
                  if (tmp30 != null) {
                    fontSize = tmp30.fontSize;
                  }
                  num17 = fontSize;
                }
                if (num17 == null) {
                  num17 = 16;
                }
                let lineHeight;
                if (flattenResult != null) {
                  lineHeight = flattenResult.lineHeight;
                }
                if (lineHeight == null) {
                  let lineHeight1;
                  if (tmp30 != null) {
                    lineHeight1 = tmp30.lineHeight;
                  }
                  lineHeight = lineHeight1;
                }
                if (lineHeight == null) {
                  lineHeight = 1.25 * num17;
                }
                const tmpResult13 = useDisplayNameStylesAccessibleColors;
                const nodeText = getNodeText.getNodeText(userName);
                let num19;
                if (nodeText != null) {
                  num19 = nodeText.length;
                }
                if (num19 == null) {
                  num19 = 10;
                }
                const result = num19 * num17 * 0.6;
                if (cResult[18] === dependencyMap[effectId]) {
                  if (cResult[19] === num17) {
                    let tmp39 = cResult[20];
                  }
                  let str2;
                  if (colorVariants != null) {
                    str2 = colorVariants.main;
                  }
                  if (str2 == null) {
                    str2 = "";
                  }
                  const tmp41Result = closure_14(str2, num17);
                  if (tmp12) {
                    if (null != tmp8) {
                      if (effectDisplayType !== types.EffectDisplayType.PLAIN) {
                        if (null != colorVariants) {
                          if (cResult[33] === tmp19) {
                            if (cResult[34] === tmp4) {
                              let tmp43 = cResult[35];
                            }
                            if (cResult[36] === effectId) {
                              if (cResult[37] === tmp41Result) {
                                let tmp44 = cResult[38];
                              }
                              if (effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
                                if (cResult[39] !== userName) {
                                  let str4 = getNodeText.getNodeText(userName);
                                  if (str4 == null) {
                                    str4 = "";
                                  }
                                  cResult[39] = userName;
                                  cResult[40] = str4;
                                  let tmp94 = str4;
                                  const tmpResult17 = getNodeText;
                                } else {
                                  tmp94 = cResult[40];
                                }
                                if (cResult[41] === containerStyle) {
                                  if (cResult[42] === tmp44) {
                                    let tmp95 = cResult[43];
                                  }
                                  if (cResult[44] === result) {
                                    if (cResult[45] === tmp4) {
                                      let tmp96 = cResult[46];
                                    }
                                    if (cResult[47] === displayNameStylesAccessibleColors) {
                                      if (cResult[48] === tmp94) {
                                        if (cResult[49] === tmp95) {
                                          if (cResult[50] === tmp96) {
                                            if (cResult[51] === tmp43) {
                                              let tmp100 = cResult[52];
                                            }
                                            return tmp100;
                                          }
                                        }
                                      }
                                    }
                                    const obj4 = { name: tmp94, containerStyle: tmp95, textStyle: tmp43, textProps: tmp96, colors: displayNameStylesAccessibleColors };
                                    const tmp102 = closure_1_11(PerLetterEffectDefault, obj4);
                                    cResult[47] = displayNameStylesAccessibleColors;
                                    cResult[48] = tmp94;
                                    cResult[49] = tmp95;
                                    cResult[50] = tmp96;
                                    cResult[51] = tmp43;
                                    cResult[52] = tmp102;
                                    tmp100 = tmp102;
                                  }
                                  const obj5 = {};
                                  const merged = Object.assign(tmp4);
                                  obj5.gradientColors = undefined;
                                  obj5.gradientLength = result;
                                  obj5.gradientMode = "clamp";
                                  obj5.gradientAngle = undefined;
                                  obj5.textStrokeWidth = undefined;
                                  obj5.textStrokeColor = undefined;
                                  cResult[44] = result;
                                  cResult[45] = tmp4;
                                  cResult[46] = obj5;
                                  tmp96 = obj5;
                                }
                                const items = [tmp44, containerStyle];
                                cResult[41] = containerStyle;
                                cResult[42] = tmp44;
                                cResult[43] = items;
                                tmp95 = items;
                              } else {
                                if (DisplayNameEffect.DisplayNameEffect.GRADIENT !== effectId) {
                                  if (DisplayNameEffect.DisplayNameEffect.PRISM !== effectId) {
                                    if (DisplayNameEffect.DisplayNameEffect.NEON === effectId) {
                                      let neonStroke;
                                      if (colorVariants != null) {
                                        neonStroke = colorVariants.neonStroke;
                                      }
                                      const tmp75Result = React5(neonStroke);
                                      if (null != tmp75Result) {
                                        const tmp78 = tmp75Result;
                                      }
                                      if (cResult[60] === tmp44) {
                                        if (cResult[61] === tmp41Result.neon) {
                                          if (cResult[62] === tmp43) {
                                            let tmp79 = cResult[63];
                                          }
                                          let tmp47 = tmp79;
                                          let tmp48 = result;
                                          let tmp49 = tmp78;
                                          let tmp50 = tmp39;
                                        }
                                      }
                                      const items1 = [tmp43, tmp41Result.neon, tmp44];
                                      cResult[60] = tmp44;
                                      cResult[61] = tmp41Result.neon;
                                      cResult[62] = tmp43;
                                      cResult[63] = items1;
                                      tmp79 = items1;
                                    } else if (DisplayNameEffect.DisplayNameEffect.POP === effectId) {
                                      let dark2;
                                      if (colorVariants != null) {
                                        dark2 = colorVariants.dark2;
                                      }
                                      const tmp56Result = React5(dark2);
                                      let main;
                                      if (colorVariants != null) {
                                        main = colorVariants.main;
                                      }
                                      const tmp56Result2 = React5(main);
                                      tmp48 = result;
                                      tmp47 = tmp43;
                                      if (null != colorVariants) {
                                        if (cResult[64] === containerStyle) {
                                          if (cResult[65] === tmp44) {
                                            if (cResult[66] === tmp41Result.popContainer) {
                                              let tmp61 = cResult[67];
                                            }
                                            if (cResult[68] === tmp41Result.popBackLayer) {
                                              if (cResult[69] === tmp43) {
                                                let tmp62 = cResult[70];
                                              }
                                              if (cResult[71] === tmp41Result.popFrontLayer) {
                                                if (cResult[72] === tmp43) {
                                                  let tmp63 = cResult[73];
                                                }
                                                const obj6 = { style: tmp61, children: null };
                                                const obj7 = {};
                                                const merged1 = Object.assign(tmp4);
                                                obj7.textStrokeWidth = tmp39;
                                                let tmp70;
                                                if (null != tmp56Result2) {
                                                  tmp70 = tmp56Result2;
                                                }
                                                obj7.textStrokeColor = tmp70;
                                                obj7.style = tmp62;
                                                obj7.children = userName;
                                                const items2 = [closure_1_11(Text_Text.Text, obj7), ];
                                                const obj8 = {};
                                                const merged2 = Object.assign(tmp4);
                                                obj8.textStrokeWidth = tmp39;
                                                let tmp74;
                                                if (null != tmp56Result) {
                                                  tmp74 = tmp56Result;
                                                }
                                                obj8.textStrokeColor = tmp74;
                                                obj8.style = tmp63;
                                                obj8.children = userName;
                                                items2[1] = closure_1_11(Text_Text.Text, obj8);
                                                obj6.children = items2;
                                                return __initData(timestampProducer, obj6);
                                              }
                                              const items3 = [tmp43, tmp41Result.popFrontLayer];
                                              cResult[71] = tmp41Result.popFrontLayer;
                                              cResult[72] = tmp43;
                                              cResult[73] = items3;
                                              tmp63 = items3;
                                            }
                                            const items4 = [tmp43, tmp41Result.popBackLayer];
                                            cResult[68] = tmp41Result.popBackLayer;
                                            cResult[69] = tmp43;
                                            cResult[70] = items4;
                                            tmp62 = items4;
                                          }
                                        }
                                        const items5 = [tmp41Result.popContainer, tmp44, containerStyle];
                                        cResult[64] = containerStyle;
                                        cResult[65] = tmp44;
                                        cResult[66] = tmp41Result.popContainer;
                                        cResult[67] = items5;
                                        tmp61 = items5;
                                      }
                                    } else if (DisplayNameEffect.DisplayNameEffect.TOON === effectId) {
                                      if (cResult[74] === tmp44) {
                                        if (cResult[75] === tmp41Result.toon) {
                                          if (cResult[76] === tmp43) {
                                            let tmp52 = cResult[77];
                                          }
                                          const items6 = [React5(tmp25), React5(colorVariants.light2), React5(colorVariants.light1), React5(colorVariants.main)];
                                          const tmp54 = React5(colorVariants.toonStroke);
                                          let tmp55;
                                          if (null != tmp54) {
                                            tmp55 = tmp54;
                                          }
                                          let num35 = 90;
                                          tmp49 = tmp55;
                                          tmp48 = lineHeight;
                                          tmp50 = tmp39;
                                          let tmp51 = items6;
                                          tmp47 = tmp52;
                                        }
                                      }
                                      const items7 = [tmp43, tmp41Result.toon, tmp44];
                                      cResult[74] = tmp44;
                                      cResult[75] = tmp41Result.toon;
                                      cResult[76] = tmp43;
                                      cResult[77] = items7;
                                      tmp52 = items7;
                                    } else {
                                      const SOLID = DisplayNameEffect.DisplayNameEffect.SOLID;
                                      if (cResult[78] !== first) {
                                        const obj9 = { color: first };
                                        cResult[78] = first;
                                        cResult[79] = obj9;
                                        let tmp46 = obj9;
                                      } else {
                                        tmp46 = cResult[79];
                                      }
                                      if (cResult[80] === tmp46) {
                                        if (cResult[81] === tmp43) {
                                          tmp47 = cResult[82];
                                        }
                                        tmp48 = result;
                                      }
                                      const items8 = [tmp43, tmp46];
                                      cResult[80] = tmp46;
                                      cResult[81] = tmp43;
                                      cResult[82] = items8;
                                      tmp47 = items8;
                                    }
                                  }
                                  if (cResult[83] === num35) {
                                    if (cResult[84] === tmp51) {
                                      if (cResult[85] === tmp48) {
                                        if (cResult[86] === tmp49) {
                                          if (cResult[87] === tmp4) {
                                            if (cResult[88] === tmp50) {
                                              if (cResult[89] === tmp47) {
                                                if (cResult[90] === userName) {
                                                  let tmp88 = cResult[91];
                                                }
                                                return tmp88;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj10 = {};
                                  const merged3 = Object.assign(tmp4);
                                  obj10.gradientColors = tmp51;
                                  obj10.gradientLength = tmp48;
                                  obj10.gradientMode = "clamp";
                                  obj10.style = tmp47;
                                  obj10.gradientAngle = num35;
                                  obj10.textStrokeWidth = tmp50;
                                  obj10.textStrokeColor = tmp49;
                                  obj10.children = userName;
                                  const tmp93 = closure_1_11(Text_Text.Text, obj10);
                                  cResult[83] = num35;
                                  cResult[84] = tmp51;
                                  cResult[85] = tmp48;
                                  cResult[86] = tmp49;
                                  cResult[87] = tmp4;
                                  cResult[88] = tmp50;
                                  cResult[89] = tmp47;
                                  cResult[90] = userName;
                                  cResult[91] = tmp93;
                                  tmp88 = tmp93;
                                }
                                if (cResult[53] === displayNameStylesAccessibleColors) {
                                  if (cResult[54] === effectId) {
                                    if (cResult[55] === result) {
                                      tmp51 = cResult[56];
                                      num35 = cResult[57];
                                      tmp48 = cResult[58];
                                      tmp47 = tmp43;
                                    }
                                  }
                                }
                                const _Symbol2 = Symbol;
                                if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
                                  class Ne {
                                    constructor(arg0) {
                                      return closure_1_7(arg0);
                                    }
                                  }
                                  cResult[59] = Ne;
                                } else {
                                  class Ne {
                                    constructor(arg0) {
                                      return closure_1_7(arg0);
                                    }
                                  }
                                }
                                const mapped = displayNameStylesAccessibleColors.map(Ne);
                                const found = mapped.filter(GlobalUtils.isNotNullish);
                                if (effectId === DisplayNameEffect.DisplayNameEffect.PRISM) {
                                  class Ne {
                                    constructor(arg0) {
                                      return closure_1_7(arg0);
                                    }
                                  }
                                }
                                let bound = result;
                                let tmp82 = found;
                                if (effectId === DisplayNameEffect.DisplayNameEffect.PRISM) {
                                  class Ne {
                                    constructor(arg0) {
                                      return closure_1_7(arg0);
                                    }
                                  }
                                  if (found.length > 0) {
                                    class Ne {
                                      constructor(arg0) {
                                        return closure_1_7(arg0);
                                      }
                                    }
                                    tmp84[HermesBuiltin.arraySpread(found, 0)] = found[0];
                                  }
                                  const _Math = Math;
                                  bound = Math.max(result, MIN_PRISM_GRADIENT_WIDTH);
                                  tmp82 = tmp84;
                                }
                                cResult[53] = displayNameStylesAccessibleColors;
                                cResult[54] = effectId;
                                cResult[55] = result;
                                cResult[56] = tmp82;
                                cResult[57] = 45;
                                cResult[58] = bound;
                                tmp48 = bound;
                                tmp51 = tmp82;
                                num35 = num55;
                                tmp47 = tmp43;
                              }
                            }
                            if (tmpResult18.doesEffectImpactLayout(effectId)) {
                              class Ne {
                                constructor(arg0) {
                                  return closure_1_7(arg0);
                                }
                              }
                            }
                            cResult[36] = effectId;
                            cResult[37] = tmp41Result;
                            cResult[38] = undefined;
                            tmp44 = tmp45;
                            tmpResult18 = DisplayNameStylesUtils;
                          }
                          const items9 = [tmp4.style, tmp19];
                          cResult[33] = tmp19;
                          cResult[34] = tmp4;
                          cResult[35] = items9;
                          tmp43 = items9;
                        }
                      }
                      if (cResult[25] === tmp17) {
                        class Ne {
                          constructor(arg0) {
                            return closure_1_7(arg0);
                          }
                        }
                        if (cResult[28] === defaultColor) {
                          class Ne {
                            constructor(arg0) {
                              return closure_1_7(arg0);
                            }
                          }
                        }
                        const obj11 = {};
                        const merged4 = Object.assign(tmp4);
                        obj11.style = tmp103;
                        obj11.color = defaultColor;
                        obj11.children = userName;
                        const tmp109 = closure_1_11(Text_Text.Text, obj11);
                        cResult[28] = defaultColor;
                        cResult[29] = tmp103;
                        cResult[30] = tmp4;
                        cResult[31] = userName;
                        cResult[32] = tmp109;
                      }
                      const items10 = [tmp4.style, tmp17];
                      cResult[25] = tmp17;
                      cResult[26] = tmp4;
                      cResult[27] = items10;
                    }
                  } else {
                    class Ne {
                      constructor(arg0) {
                        return closure_1_7(arg0);
                      }
                    }
                  }
                  if (cResult[21] === defaultColor) {
                    class Ne {
                      constructor(arg0) {
                        return closure_1_7(arg0);
                      }
                    }
                  }
                  const obj12 = {};
                  const merged5 = Object.assign(tmp4);
                  obj12.color = defaultColor;
                  obj12.children = userName;
                  const tmp115 = closure_1_11(Text_Text.Text, obj12);
                  cResult[21] = defaultColor;
                  cResult[22] = tmp4;
                  cResult[23] = userName;
                  cResult[24] = tmp115;
                }
                let sum;
                if (null != dependencyMap[effectId]) {
                  class Ne {
                    constructor(arg0) {
                      return closure_1_7(arg0);
                    }
                  }
                  sum = tmp38 + 0.04 * num17;
                }
                cResult[18] = dependencyMap[effectId];
                cResult[19] = num17;
                cResult[20] = sum;
                tmp39 = sum;
                const tmpResult16 = getNodeText;
              }
              const obj13 = { displayNameStyles: tmp8, backgroundColor: token };
              cResult[15] = token;
              cResult[16] = tmp8;
              cResult[17] = obj13;
              tmp26 = obj13;
              const tmpResult12 = useToken2;
            }
          }
          let tmp20 = tmp17;
          if (num5 <= 1) {
            class Ne {
              constructor(arg0) {
                return closure_1_7(arg0);
              }
            }
            if (null != displayNameStylesFont) {
              class Ne {
                constructor(arg0) {
                  return closure_1_7(arg0);
                }
              }
              tmp22[0] = displayNameStylesFont;
            }
            tmp20 = tmp22;
          }
          cResult[11] = displayNameStylesFont;
          cResult[12] = tmp17;
          cResult[13] = num5 > 1;
          cResult[14] = tmp20;
          tmp19 = tmp20;
          const tmpResult10 = useDisplayNameStylesFont;
        }
        const obj14 = { displayNameStyles: tmp8, ignoreDisabledStylesSetting: tmp5 };
        cResult[6] = tmp8;
        cResult[7] = tmp5;
        cResult[8] = obj14;
        tmp13 = obj14;
      }
    }
  }
  const obj15 = { userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting: undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting };
  cResult[0] = guildId;
  cResult[1] = undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting;
  cResult[2] = pendingDisplayNameStyles;
  cResult[3] = userId;
  cResult[4] = obj15;
  tmp6 = obj15;
}) : (function UsernameWithEffects(userName) {
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    STATIC = userName(10263).EffectDisplayType.STATIC;
  }
  ({ defaultColor, containerStyle, ignoreDisabledStylesSetting, pendingDisplayNameStyles } = userName);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const merged = Object.assign(userName, Object.assign({ userId: 0, guildId: 0, userName: 0, effectDisplayType: 0, pendingDisplayNameStyles: 0, defaultColor: 0, containerStyle: 0, ignoreDisabledStylesSetting: 0 }));
  let num2;
  const tmp6 = num2(5628)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
  const displayNameStylesEnabled = userName(5629).useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  const obj = userName(5629);
  const displayNameStylesFont = userName(8853).useDisplayNameStylesFont({ displayNameStyles: tmp6, ignoreDisabledStylesSetting });
  let tmp10;
  if (null != displayNameStylesFont) {
    const obj3 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
    tmp10 = obj3;
  }
  let num = merged.lineClamp;
  if (num == null) {
    num = 1;
  }
  let tmp11 = tmp10;
  if (num <= 1) {
    let tmp12;
    if (null != displayNameStylesFont) {
      const obj4 = { fontFamily: displayNameStylesFont };
      tmp12 = obj4;
    }
    tmp11 = tmp12;
  }
  const obj2 = userName(8853);
  const token = userName(4818).useToken(tmp4(587).colors.BACKGROUND_BASE_LOW);
  const tmp7Result = userName(4818);
  const token1 = userName(4818).useToken(tmp4(587).colors.WHITE);
  const tmp7Result7 = userName(4818);
  const displayNameStylesAccessibleColors = userName(10264).useDisplayNameStylesAccessibleColors({ displayNameStyles: tmp6, backgroundColor: token });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (tmp6 != null) {
    effectId = tmp6.effectId;
  }
  if (effectId == null) {
    effectId = tmp7(1409).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    colorVariants = tmp7(1407).generateColorVariants(first);
    const tmp7Result9 = tmp7(1407);
  }
  const tmp7Result10 = userName(5098);
  const tmp18 = userName(5088).TextStyleSheet[tmp7Result10.useTypographyVariantRemap(tmp7Result10, merged.variant, false)];
  const flattenResult = closure_9.flatten(merged.style);
  num2 = undefined;
  if (flattenResult != null) {
    num2 = flattenResult.fontSize;
  }
  if (num2 == null) {
    let fontSize;
    if (tmp18 != null) {
      fontSize = tmp18.fontSize;
    }
    num2 = fontSize;
  }
  if (num2 == null) {
    num2 = 16;
  }
  let lineHeight;
  if (flattenResult != null) {
    lineHeight = flattenResult.lineHeight;
  }
  if (lineHeight == null) {
    let lineHeight1;
    if (tmp18 != null) {
      lineHeight1 = tmp18.lineHeight;
    }
    lineHeight = lineHeight1;
  }
  if (lineHeight == null) {
    lineHeight = 1.25 * num2;
  }
  const items = [userName, num2];
  const memo = noop.useMemo(() => {
    const nodeText = getNodeText.getNodeText(userName);
    let num;
    if (nodeText != null) {
      num = nodeText.length;
    }
    if (num == null) {
      num = 10;
    }
    return num * num2 * 0.6;
  }, items);
  if (null != dependencyMap[effectId]) {
    const sum = tmp24 + 0.04 * num2;
  }
  let str;
  if (colorVariants != null) {
    str = colorVariants.main;
  }
  if (str == null) {
    str = "";
  }
  const tmp26Result = closure_14(str, num2);
  if (displayNameStylesEnabled) {
    if (null != tmp6) {
      if (STATIC !== tmp7(10263).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          const items1 = [merged.style, tmp11];
          if (tmp7Result11.doesEffectImpactLayout(effectId)) {
            const layoutImpact = tmp26Result.layoutImpact;
          }
          if (effectId === tmp7(1409).DisplayNameEffect.GUMMY) {
            const tmp4Result = tmp4(10267);
            let str3 = tmp7(4821).getNodeText(userName);
            if (str3 == null) {
              str3 = "";
            }
            const obj5 = { name: str3, containerStyle: null, textStyle: null, textProps: null, colors: null };
            const items2 = [layoutImpact, containerStyle];
            obj5.containerStyle = items2;
            obj5.textStyle = items1;
            const obj6 = {};
            const merged1 = Object.assign(merged);
            obj6.gradientColors = undefined;
            obj6.gradientLength = memo;
            obj6.gradientMode = "clamp";
            obj6.gradientAngle = undefined;
            obj6.textStrokeWidth = undefined;
            obj6.textStrokeColor = undefined;
            obj5.textProps = obj6;
            obj5.colors = displayNameStylesAccessibleColors;
            return closure_11(tmp4Result, obj5);
          } else {
            if (tmp7(1409).DisplayNameEffect.GRADIENT !== effectId) {
              if (tmp7(1409).DisplayNameEffect.PRISM !== effectId) {
                if (tmp7(1409).DisplayNameEffect.NEON === effectId) {
                  let neonStroke;
                  if (colorVariants != null) {
                    neonStroke = colorVariants.neonStroke;
                  }
                  const tmp51Result = closure_7(neonStroke);
                  let tmp54;
                  if (null != tmp51Result) {
                    tmp54 = tmp51Result;
                  }
                  const items3 = [items1, tmp26Result.neon, layoutImpact];
                  let tmp29 = tmp54;
                  let bound = memo;
                  let items10 = items3;
                  let tmp30 = sum;
                } else if (tmp7(1409).DisplayNameEffect.POP === effectId) {
                  let dark2;
                  if (colorVariants != null) {
                    dark2 = colorVariants.dark2;
                  }
                  const tmp35Result = closure_7(dark2);
                  let main;
                  if (colorVariants != null) {
                    main = colorVariants.main;
                  }
                  const tmp35Result2 = closure_7(main);
                  bound = memo;
                  items10 = items1;
                  if (null != colorVariants) {
                    const obj7 = { style: null, children: null };
                    const items4 = [tmp26Result.popContainer, layoutImpact, containerStyle];
                    obj7.style = items4;
                    const obj8 = {};
                    const merged2 = Object.assign(merged);
                    obj8.textStrokeWidth = sum;
                    let tmp46;
                    if (null != tmp35Result2) {
                      tmp46 = tmp35Result2;
                    }
                    obj8.textStrokeColor = tmp46;
                    const items5 = [items1, tmp26Result.popBackLayer];
                    obj8.style = items5;
                    obj8.children = userName;
                    const items6 = [closure_11(tmp7(5088).Text, obj8), ];
                    const obj9 = {};
                    const merged3 = Object.assign(merged);
                    obj9.textStrokeWidth = sum;
                    let tmp50;
                    if (null != tmp35Result) {
                      tmp50 = tmp35Result;
                    }
                    obj9.textStrokeColor = tmp50;
                    const items7 = [items1, tmp26Result.popFrontLayer];
                    obj9.style = items7;
                    obj9.children = userName;
                    items6[1] = closure_11(tmp7(5088).Text, obj9);
                    obj7.children = items6;
                    return closure_12(closure_6, obj7);
                  }
                } else if (tmp7(1409).DisplayNameEffect.TOON === effectId) {
                  const items8 = [items1, tmp26Result.toon, layoutImpact];
                  const items9 = [closure_7(token1), closure_7(colorVariants.light2), closure_7(colorVariants.light1), closure_7(colorVariants.main)];
                  const tmp33 = closure_7(colorVariants.toonStroke);
                  let tmp34;
                  if (null != tmp33) {
                    tmp34 = tmp33;
                  }
                  let num5 = 90;
                  tmp29 = tmp34;
                  bound = lineHeight;
                  items10 = items8;
                  tmp30 = sum;
                  let tmp31 = items9;
                } else {
                  const SOLID = tmp7(1409).DisplayNameEffect.SOLID;
                  items10 = [items1, ];
                  const obj10 = { color: first };
                  items10[1] = obj10;
                  bound = memo;
                }
              }
              const obj11 = {};
              const merged4 = Object.assign(merged);
              obj11.gradientColors = tmp31;
              obj11.gradientLength = bound;
              obj11.gradientMode = "clamp";
              obj11.style = items10;
              obj11.gradientAngle = num5;
              obj11.textStrokeWidth = tmp30;
              obj11.textStrokeColor = tmp29;
              obj11.children = userName;
              return closure_11(tmp7(5088).Text, obj11);
            }
            const mapped = displayNameStylesAccessibleColors.map((item) => closure_1_7(item));
            const found = mapped.filter(tmp7(1388).isNotNullish);
            let num6 = 45;
            if (effectId === tmp7(1409).DisplayNameEffect.PRISM) {
              num6 = 0;
            }
            bound = memo;
            items10 = items1;
            num5 = num6;
            tmp31 = found;
            if (effectId === tmp7(1409).DisplayNameEffect.PRISM) {
              let tmp55 = found;
              if (found.length > 0) {
                const items11 = [];
                items11[HermesBuiltin.arraySpread(found, 0)] = found[0];
                tmp55 = items11;
              }
              const _Math = Math;
              bound = Math.max(memo, MIN_PRISM_GRADIENT_WIDTH);
              tmp31 = tmp55;
              items10 = items1;
              num5 = num6;
            }
          }
          tmp7Result11 = tmp7(1407);
        }
      }
      const obj12 = {};
      const merged5 = Object.assign(merged);
      const items12 = [merged.style, tmp10];
      obj12.style = items12;
      obj12.color = defaultColor;
      obj12.children = userName;
      return closure_11(tmp7(5088).Text, obj12);
    }
  }
  const obj13 = {};
  const merged6 = Object.assign(merged);
  obj13.color = defaultColor;
  obj13.children = userName;
  return closure_11(userName(5088).Text, obj13);
}));
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;