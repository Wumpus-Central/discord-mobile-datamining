// === Module 10646: UsernameWithEffects ===

// Module 10646 (UsernameWithEffects)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1394 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1395 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1396 */;
import useToken from "useToken" /* 4586 */;
import getNodeText from "getNodeText" /* 4589 */;
import Text_Text from "Text/Text" /* 4892 */;
import useTypographyVariantRemap from "useTypographyVariantRemap" /* 4902 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 5312 */;
import useDisplayNameStylesEnabled from "useDisplayNameStylesEnabled" /* 5313 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9403 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 9404 */;
import types from "types" /* 10647 */;
import useDisplayNameStylesAccessibleColors from "useDisplayNameStylesAccessibleColors" /* 10648 */;
import PerLetterEffectDefault from "PerLetterEffect" /* 10651 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let closure_3 = ["userId", "guildId", "userName", "effectDisplayType", "pendingDisplayNameStyles", "defaultColor", "containerStyle", "ignoreDisabledStylesSetting"];
({ View: metroRequire, processColor: metroImportDefault, PixelRatio: metroImportAll, StyleSheet: c9 } = react_native);
const MIN_PRISM_GRADIENT_WIDTH = DisplayNameStylesConstants.MIN_PRISM_GRADIENT_WIDTH;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = { [DisplayNameEffect.DisplayNameEffect.NEON]: 1, [DisplayNameEffect.DisplayNameEffect.TOON]: 1.6, [DisplayNameEffect.DisplayNameEffect.POP]: 1.2 };
let closure_14 = createStyles.createStyles((textShadowColor, arg1) => {
  let items;
  let num2;
  let num3;
  let num6;
  let obj3;
  let obj6;
  let rect1;
  let rect2;
  let rect3;
  let result2;
  let result3;
  let tmp4Result12;
  const result = 0.04 * arg1;
  const sum = 4 + 0.12 * arg1;
  const value = metroImportAll.get();
  const sum1 = closure_13[DisplayNameEffect.DisplayNameEffect.NEON] + 0.04 * arg1;
  const sum2 = closure_13[DisplayNameEffect.DisplayNameEffect.TOON] + 0.04 * arg1;
  const sum3 = closure_13[DisplayNameEffect.DisplayNameEffect.POP] + 0.04 * arg1;
  const result1 = Math.floor(sum2 / 2) / value;
  const obj = { color: nativeDefault.colors.WHITE, textShadowColor, textShadowRadius: sum, textShadowOffset: { width: 0, height: 0 } };
  const obj2 = utils_PlatformUtils;
  if (obj2.isIOS()) {
    const rect = { top: result2, left: result2, padding: sum, marginVertical: -sum, marginLeft: -sum, marginRight: -sum - sum1 };
    result2 = -sum1 / 2;
    obj3 = rect;
  } else {
    obj3 = { left: -sum1, paddingRight: sum, marginRight: -sum - sum1 };
  }
  const obj4 = { neon: obj, popContainer: rect1, popBackLayer: rect2, popFrontLayer: { color: nativeDefault.colors.WHITE }, toon: rect3, layoutImpact: { flexShrink: 1, minWidth: 0 } };
  const merged = Object.assign(obj3);
  let num = 0;
  const tmp4Result = utils_PlatformUtils;
  if (tmp4Result.isIOS()) {
    num = -sum3 / 2;
  }
  rect1 = { position: "relative", top: num, left: num2, marginRight: num3 };
  num2 = 0;
  const tmp4Result7 = utils_PlatformUtils;
  if (tmp4Result7.isIOS()) {
    num2 = -sum3 / 2;
  }
  num3 = 0;
  const tmp4Result8 = utils_PlatformUtils;
  if (tmp4Result8.isIOS()) {
    num3 = -sum3;
  }
  rect2 = { color: textShadowColor, position: "absolute", left: 0, right: 0 };
  const tmp4Result9 = utils_PlatformUtils;
  if (tmp4Result9.isIOS()) {
    obj6 = { top: 1.2 + result };
    const obj5 = { top: 1.2 + result };
  } else {
    obj6 = { transform: items };
    items = [{ translateY: 1.2 + result }];
    const obj7 = { translateY: 1.2 + result };
  }
  const merged1 = Object.assign(obj6);
  ({ color: nativeDefault.colors.WHITE });
  rect3 = { color: nativeDefault.colors.WHITE, top: num6, left: result3, marginRight: tmp4Result12.isIOS() ? -sum2 : -result1 };
  num6 = 0;
  const tmp4Result10 = utils_PlatformUtils;
  if (tmp4Result10.isIOS()) {
    num6 = -sum2 / 2;
  }
  const tmp4Result11 = utils_PlatformUtils;
  if (tmp4Result11.isIOS()) {
    result3 = -sum2 / 2;
  } else {
    result3 = -result1;
  }
  tmp4Result12 = utils_PlatformUtils;
  return obj4;
});
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let defaultColor;
  let effectDisplayType;
  let guildId;
  let ignoreDisabledStylesSetting;
  let items2;
  let pendingDisplayNameStyles;
  let tmp67;
  let tmp71;
  let userId;
  let userName;
  const obj = react2;
  const cResult = obj.c(85);
  ({ userId, guildId, userName, effectDisplayType, pendingDisplayNameStyles, defaultColor, containerStyle, ignoreDisabledStylesSetting } = arg0);
  const tmp5 = _objectWithoutProperties(arg0, closure_3);
  if (undefined === effectDisplayType) {
    effectDisplayType = types.EffectDisplayType.STATIC;
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === (undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting)) {
      if (cResult[2] === pendingDisplayNameStyles) {
        let tmp7;
        let tmp13;
        let tmp18;
        if (cResult[3] === userId) {
          tmp7 = cResult[4];
        }
        const tmp9 = useDisplayNameStylesDefault(tmp7);
        const tmp2Result = DisplayNameStylesFlywheelExperiment;
        const isDisplayNameStylesFlywheelViewersEnabled = tmp2Result.useIsDisplayNameStylesFlywheelViewersEnabled("UsernameWithEffects");
        const tmp2Result12 = DisplayNameStylesUtils;
        const result = tmp2Result12.applyFlywheelViewingFallback(tmp9, isDisplayNameStylesFlywheelViewersEnabled);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { location: "UsernameWithEffects" };
          cResult[5] = obj2;
          tmp13 = obj2;
        } else {
          tmp13 = cResult[5];
        }
        const tmp2Result13 = useDisplayNameStylesEnabled;
        const displayNameStylesEnabled = tmp2Result13.useDisplayNameStylesEnabled(tmp13);
        const obj3 = { displayNameStyles: result, ignoreDisabledStylesSetting: undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting };
        const tmp2Result14 = useDisplayNameStylesFont;
        const displayNameStylesFont = tmp2Result14.useDisplayNameStylesFont(obj3);
        let num2 = tmp5.lineClamp;
        if (num2 == null) {
          num2 = 1;
        }
        if (cResult[6] !== displayNameStylesFont) {
          let tmp19;
          if (null != displayNameStylesFont) {
            tmp19 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
            const obj4 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
          }
          cResult[6] = displayNameStylesFont;
          cResult[7] = tmp19;
          tmp18 = tmp19;
        } else {
          tmp18 = cResult[7];
        }
        if (cResult[8] === displayNameStylesFont) {
          if (cResult[9] === tmp18) {
            let tmp20;
            if (cResult[10] === num2 > 1) {
              tmp20 = cResult[11];
            }
            const tmp2Result15 = useToken;
            const token = tmp2Result15.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
            const tmp2Result16 = useToken;
            const token1 = tmp2Result16.useToken(nativeDefault.colors.WHITE);
            const obj5 = { displayNameStyles: result, backgroundColor: token };
            const tmp2Result17 = useDisplayNameStylesAccessibleColors;
            const displayNameStylesAccessibleColors = tmp2Result17.useDisplayNameStylesAccessibleColors(obj5);
            let first;
            if (displayNameStylesAccessibleColors.length > 0) {
              first = displayNameStylesAccessibleColors[0];
            }
            let effectId;
            if (result != null) {
              effectId = result.effectId;
            }
            if (effectId == null) {
              effectId = DisplayNameEffect.DisplayNameEffect.SOLID;
            }
            let colorVariants = null;
            if (null != first) {
              const tmp2Result18 = DisplayNameStylesUtils;
              colorVariants = tmp2Result18.generateColorVariants(first);
            }
            const TextStyleSheet = Text_Text.TextStyleSheet;
            const tmp2Result19 = useTypographyVariantRemap;
            const tmp29 = TextStyleSheet[tmp2Result19.useTypographyVariantRemap(tmp2Result19, tmp5.variant, false)];
            const flattenResult = React4.flatten(tmp5.style);
            let num11;
            if (flattenResult != null) {
              num11 = flattenResult.fontSize;
            }
            if (num11 == null) {
              let fontSize;
              if (tmp29 != null) {
                fontSize = tmp29.fontSize;
              }
              num11 = fontSize;
            }
            if (num11 == null) {
              num11 = 16;
            }
            let lineHeight;
            if (flattenResult != null) {
              lineHeight = flattenResult.lineHeight;
            }
            if (lineHeight == null) {
              let lineHeight1;
              if (tmp29 != null) {
                lineHeight1 = tmp29.lineHeight;
              }
              lineHeight = lineHeight1;
            }
            if (lineHeight == null) {
              lineHeight = 1.25 * num11;
            }
            const tmp2Result20 = getNodeText;
            const nodeText = tmp2Result20.getNodeText(userName);
            let num13;
            if (nodeText != null) {
              num13 = nodeText.length;
            }
            if (num13 == null) {
              num13 = 10;
            }
            const result1 = num13 * num11 * 0.6;
            if (cResult[12] === closure_13[effectId]) {
              let tmp38;
              if (cResult[13] === num11) {
                tmp38 = cResult[14];
              }
              let str3;
              if (colorVariants != null) {
                str3 = colorVariants.main;
              }
              if (str3 == null) {
                str3 = "";
              }
              const tmp40Result = closure_14(str3, num11);
              if (displayNameStylesEnabled) {
                if (null != tmp9) {
                  if (effectDisplayType !== types.EffectDisplayType.PLAIN) {
                    if (null != colorVariants) {
                      if (cResult[27] === tmp20) {
                        let tmp42;
                        let layoutImpact;
                        if (cResult[28] === tmp5) {
                          tmp42 = cResult[29];
                        }
                        const tmp2Result21 = DisplayNameStylesUtils;
                        if (tmp2Result21.doesEffectImpactLayout(effectId)) {
                          layoutImpact = tmp40Result.layoutImpact;
                        }
                        if (effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
                          let tmp92;
                          if (cResult[30] !== userName) {
                            const tmp2Result22 = getNodeText;
                            let str5 = tmp2Result22.getNodeText(userName);
                            if (str5 == null) {
                              str5 = "";
                            }
                            cResult[30] = userName;
                            cResult[31] = str5;
                            tmp92 = str5;
                          } else {
                            tmp92 = cResult[31];
                          }
                          if (cResult[32] === containerStyle) {
                            let tmp93;
                            if (cResult[33] === layoutImpact) {
                              tmp93 = cResult[34];
                            }
                            if (cResult[35] === result1) {
                              let tmp94;
                              if (cResult[36] === tmp5) {
                                tmp94 = cResult[37];
                              }
                              if (cResult[38] === displayNameStylesAccessibleColors) {
                                if (cResult[39] === tmp93) {
                                  if (cResult[40] === tmp94) {
                                    if (cResult[41] === tmp92) {
                                      let tmp98;
                                      if (cResult[42] === tmp42) {
                                        tmp98 = cResult[43];
                                      }
                                      return tmp98;
                                    }
                                  }
                                }
                              }
                              const obj6 = { name: tmp92, containerStyle: tmp93, textStyle: tmp42, textProps: tmp94, colors: displayNameStylesAccessibleColors };
                              const tmp100 = unpackModuleId(PerLetterEffectDefault, obj6);
                              cResult[38] = displayNameStylesAccessibleColors;
                              cResult[39] = tmp93;
                              cResult[40] = tmp94;
                              cResult[41] = tmp92;
                              cResult[42] = tmp42;
                              cResult[43] = tmp100;
                              tmp98 = tmp100;
                            }
                            const obj7 = { gradientColors: undefined, gradientLength: result1, gradientMode: "clamp", gradientAngle: undefined, textStrokeWidth: undefined, textStrokeColor: undefined };
                            const merged = Object.assign(tmp5);
                            cResult[35] = result1;
                            cResult[36] = tmp5;
                            cResult[37] = obj7;
                            tmp94 = obj7;
                          }
                          const items = [layoutImpact, containerStyle];
                          cResult[32] = containerStyle;
                          cResult[33] = layoutImpact;
                          cResult[34] = items;
                          tmp93 = items;
                        } else {
                          let tmp48;
                          let num26;
                          let tmp45;
                          let tmp44;
                          if (DisplayNameEffect.DisplayNameEffect.GRADIENT !== effectId) {
                            let tmp46;
                            let tmp47;
                            let tmp85;
                            if (DisplayNameEffect.DisplayNameEffect.PRISM !== effectId) {
                              if (DisplayNameEffect.DisplayNameEffect.NEON === effectId) {
                                let tmp75;
                                let neonStroke;
                                if (colorVariants != null) {
                                  neonStroke = colorVariants.neonStroke;
                                }
                                const tmp72Result = metroImportDefault(neonStroke);
                                if (null != tmp72Result) {
                                  tmp75 = tmp72Result;
                                }
                                if (cResult[51] === layoutImpact) {
                                  if (cResult[52] === tmp40Result.neon) {
                                    let tmp76;
                                    if (cResult[53] === tmp42) {
                                      tmp76 = cResult[54];
                                    }
                                    tmp44 = tmp76;
                                    tmp45 = result1;
                                    tmp46 = tmp75;
                                    tmp47 = tmp38;
                                  }
                                }
                                const items1 = [tmp42, tmp40Result.neon, layoutImpact];
                                cResult[51] = layoutImpact;
                                cResult[52] = tmp40Result.neon;
                                cResult[53] = tmp42;
                                cResult[54] = items1;
                                tmp76 = items1;
                              } else if (DisplayNameEffect.DisplayNameEffect.POP === effectId) {
                                let dark2;
                                if (colorVariants != null) {
                                  dark2 = colorVariants.dark2;
                                }
                                const tmp53Result = metroImportDefault(dark2);
                                let main;
                                if (colorVariants != null) {
                                  main = colorVariants.main;
                                }
                                const tmp53Result2 = metroImportDefault(main);
                                tmp45 = result1;
                                tmp44 = tmp42;
                                if (null != colorVariants) {
                                  if (cResult[55] === containerStyle) {
                                    if (cResult[56] === layoutImpact) {
                                      let tmp58;
                                      if (cResult[57] === tmp40Result.popContainer) {
                                        tmp58 = cResult[58];
                                      }
                                      if (cResult[59] === tmp40Result.popBackLayer) {
                                        let tmp59;
                                        if (cResult[60] === tmp42) {
                                          tmp59 = cResult[61];
                                        }
                                        if (cResult[62] === tmp40Result.popFrontLayer) {
                                          let tmp60;
                                          if (cResult[63] === tmp42) {
                                            tmp60 = cResult[64];
                                          }
                                          const obj8 = { style: tmp58, children: items2 };
                                          const obj9 = { textStrokeWidth: tmp38, textStrokeColor: tmp67, style: tmp59, children: userName };
                                          const Text = Text_Text.Text;
                                          const merged1 = Object.assign(tmp5);
                                          tmp67 = undefined;
                                          if (null != tmp53Result2) {
                                            tmp67 = tmp53Result2;
                                          }
                                          items2 = [unpackModuleId(Text, obj9), ];
                                          const obj10 = { textStrokeWidth: tmp38, textStrokeColor: tmp71, style: tmp60, children: userName };
                                          const Text2 = Text_Text.Text;
                                          const merged2 = Object.assign(tmp5);
                                          tmp71 = undefined;
                                          if (null != tmp53Result) {
                                            tmp71 = tmp53Result;
                                          }
                                          items2[1] = unpackModuleId(Text2, obj10);
                                          return closure_12(metroRequire, obj8);
                                        }
                                        const items3 = [tmp42, tmp40Result.popFrontLayer];
                                        cResult[62] = tmp40Result.popFrontLayer;
                                        cResult[63] = tmp42;
                                        cResult[64] = items3;
                                        tmp60 = items3;
                                      }
                                      const items4 = [tmp42, tmp40Result.popBackLayer];
                                      cResult[59] = tmp40Result.popBackLayer;
                                      cResult[60] = tmp42;
                                      cResult[61] = items4;
                                      tmp59 = items4;
                                    }
                                  }
                                  const items5 = [tmp40Result.popContainer, layoutImpact, containerStyle];
                                  cResult[55] = containerStyle;
                                  cResult[56] = layoutImpact;
                                  cResult[57] = tmp40Result.popContainer;
                                  cResult[58] = items5;
                                  tmp58 = items5;
                                }
                              } else if (DisplayNameEffect.DisplayNameEffect.TOON === effectId) {
                                if (cResult[65] === layoutImpact) {
                                  if (cResult[66] === tmp40Result.toon) {
                                    let tmp49;
                                    if (cResult[67] === tmp42) {
                                      tmp49 = cResult[68];
                                    }
                                    const items6 = [metroImportDefault(token1), metroImportDefault(colorVariants.light2), metroImportDefault(colorVariants.light1), metroImportDefault(colorVariants.main)];
                                    const tmp51 = metroImportDefault(colorVariants.toonStroke);
                                    let tmp52;
                                    if (null != tmp51) {
                                      tmp52 = tmp51;
                                    }
                                    num26 = 90;
                                    tmp46 = tmp52;
                                    tmp45 = lineHeight;
                                    tmp44 = tmp49;
                                    tmp47 = tmp38;
                                    tmp48 = items6;
                                  }
                                }
                                const items7 = [tmp42, tmp40Result.toon, layoutImpact];
                                cResult[65] = layoutImpact;
                                cResult[66] = tmp40Result.toon;
                                cResult[67] = tmp42;
                                cResult[68] = items7;
                                tmp49 = items7;
                              } else {
                                let tmp43;
                                const SOLID = DisplayNameEffect.DisplayNameEffect.SOLID;
                                if (cResult[69] !== first) {
                                  const obj11 = { color: first };
                                  cResult[69] = first;
                                  cResult[70] = obj11;
                                  tmp43 = obj11;
                                } else {
                                  tmp43 = cResult[70];
                                }
                                if (cResult[71] === tmp43) {
                                  if (cResult[72] === tmp42) {
                                    tmp44 = cResult[73];
                                  }
                                  tmp45 = result1;
                                }
                                const items8 = [tmp42, tmp43];
                                cResult[71] = tmp43;
                                cResult[72] = tmp42;
                                cResult[73] = items8;
                                tmp44 = items8;
                              }
                            }
                            if (cResult[74] !== tmp44) {
                              const items9 = [tmp44];
                              cResult[74] = tmp44;
                              cResult[75] = items9;
                              tmp85 = items9;
                            } else {
                              tmp85 = cResult[75];
                            }
                            if (cResult[76] === num26) {
                              if (cResult[77] === tmp48) {
                                if (cResult[78] === tmp45) {
                                  if (cResult[79] === tmp46) {
                                    if (cResult[80] === tmp85) {
                                      if (cResult[81] === tmp5) {
                                        if (cResult[82] === tmp47) {
                                          let tmp86;
                                          if (cResult[83] === userName) {
                                            tmp86 = cResult[84];
                                          }
                                          return tmp86;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj12 = { gradientColors: tmp48, gradientLength: tmp45, gradientMode: "clamp", style: tmp85, gradientAngle: num26, textStrokeWidth: tmp47, textStrokeColor: tmp46, children: userName };
                            const Text3 = Text_Text.Text;
                            const merged3 = Object.assign(tmp5);
                            const tmp91 = unpackModuleId(Text3, obj12);
                            cResult[76] = num26;
                            cResult[77] = tmp48;
                            cResult[78] = tmp45;
                            cResult[79] = tmp46;
                            cResult[80] = tmp85;
                            cResult[81] = tmp5;
                            cResult[82] = tmp47;
                            cResult[83] = userName;
                            cResult[84] = tmp91;
                            tmp86 = tmp91;
                          }
                          if (cResult[44] === displayNameStylesAccessibleColors) {
                            if (cResult[45] === effectId) {
                              if (cResult[46] === result1) {
                                tmp48 = cResult[47];
                                num26 = cResult[48];
                                tmp45 = cResult[49];
                                tmp44 = tmp42;
                              }
                            }
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                            class Ne {
                              constructor(arg0) {
                                return closure_1_7(arg0);
                              }
                            }
                            cResult[50] = Ne;
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
                          let bound = result1;
                          let tmp79 = found;
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
                              tmp81[HermesBuiltin.arraySpread(tmp81, found, 0)] = found[0];
                            }
                            const _Math = Math;
                            bound = Math.max(result1, MIN_PRISM_GRADIENT_WIDTH);
                            tmp79 = tmp81;
                          }
                          cResult[44] = displayNameStylesAccessibleColors;
                          cResult[45] = effectId;
                          cResult[46] = result1;
                          cResult[47] = tmp79;
                          cResult[48] = 45;
                          cResult[49] = bound;
                          tmp45 = bound;
                          tmp48 = tmp79;
                          tmp44 = tmp42;
                          num26 = num47;
                        }
                      }
                      const items10 = [tmp5.style, tmp20];
                      cResult[27] = tmp20;
                      cResult[28] = tmp5;
                      cResult[29] = items10;
                      tmp42 = items10;
                    }
                  }
                  if (cResult[19] === tmp18) {
                    class Ne {
                      constructor(arg0) {
                        return closure_1_7(arg0);
                      }
                    }
                    if (cResult[22] === defaultColor) {
                      class Ne {
                        constructor(arg0) {
                          return closure_1_7(arg0);
                        }
                      }
                    }
                    const obj13 = { style: tmp101, color: defaultColor, children: userName };
                    const Text4 = Text_Text.Text;
                    const merged4 = Object.assign(tmp5);
                    cResult[22] = defaultColor;
                    cResult[23] = tmp101;
                    cResult[24] = tmp5;
                    cResult[25] = userName;
                    cResult[26] = unpackModuleId(Text4, obj13);
                    const tmp107 = unpackModuleId(Text4, obj13);
                  }
                  const items11 = [tmp5.style, tmp18];
                  cResult[19] = tmp18;
                  cResult[20] = tmp5;
                  cResult[21] = items11;
                }
              } else {
                class Ne {
                  constructor(arg0) {
                    return closure_1_7(arg0);
                  }
                }
              }
              if (cResult[15] === defaultColor) {
                class Ne {
                  constructor(arg0) {
                    return closure_1_7(arg0);
                  }
                }
              }
              const obj14 = { color: defaultColor, children: userName };
              const Text5 = Text_Text.Text;
              const merged5 = Object.assign(tmp5);
              cResult[15] = defaultColor;
              cResult[16] = tmp5;
              cResult[17] = userName;
              cResult[18] = unpackModuleId(Text5, obj14);
              const tmp113 = unpackModuleId(Text5, obj14);
            }
            let sum;
            if (null != closure_13[effectId]) {
              class Ne {
                constructor(arg0) {
                  return closure_1_7(arg0);
                }
              }
              sum = tmp37 + 0.04 * num11;
            }
            cResult[12] = closure_13[effectId];
            cResult[13] = num11;
            cResult[14] = sum;
            tmp38 = sum;
          }
        }
        let tmp21 = tmp18;
        if (num2 <= 1) {
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
            tmp23[0] = displayNameStylesFont;
          }
          tmp21 = tmp23;
        }
        cResult[8] = displayNameStylesFont;
        cResult[9] = tmp18;
        cResult[10] = num2 > 1;
        cResult[11] = tmp21;
        tmp20 = tmp21;
      }
    }
  }
  const obj15 = { userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting: undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting };
  cResult[0] = guildId;
  cResult[1] = undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting;
  cResult[2] = pendingDisplayNameStyles;
  cResult[3] = userId;
  cResult[4] = obj15;
  tmp7 = obj15;
}) : ((userName) => {
  let containerStyle;
  let defaultColor;
  let guildId;
  let ignoreDisabledStylesSetting;
  let items11;
  let items13;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj8;
  let pendingDisplayNameStyles;
  let sum;
  let tmp49;
  let tmp53;
  let userId;
  userName = userName.userName;
  let STATIC = userName.effectDisplayType;
  ({ userId, guildId } = userName);
  if (STATIC === undefined) {
    STATIC = userName(10647).EffectDisplayType.STATIC;
  }
  ({ defaultColor, containerStyle, ignoreDisabledStylesSetting, pendingDisplayNameStyles } = userName);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const merged = Object.assign(userName, Object.assign({ userId: 0, guildId: 0, userName: 0, effectDisplayType: 0, pendingDisplayNameStyles: 0, defaultColor: 0, containerStyle: 0, ignoreDisabledStylesSetting: 0 }));
  let num2;
  const tmp7 = num2(5312)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
  let obj = userName(9404);
  const isDisplayNameStylesFlywheelViewersEnabled = obj.useIsDisplayNameStylesFlywheelViewersEnabled("UsernameWithEffects");
  const obj2 = userName(1394);
  const result = obj2.applyFlywheelViewingFallback(tmp7, isDisplayNameStylesFlywheelViewersEnabled);
  const obj3 = userName(5313);
  const displayNameStylesEnabled = obj3.useDisplayNameStylesEnabled({ location: "UsernameWithEffects" });
  const obj4 = userName(9403);
  const displayNameStylesFont = obj4.useDisplayNameStylesFont({ displayNameStyles: result, ignoreDisabledStylesSetting });
  let tmp13;
  if (null != displayNameStylesFont) {
    tmp13 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
    const obj5 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
  }
  let num = merged.lineClamp;
  if (num == null) {
    num = 1;
  }
  let tmp14 = tmp13;
  if (num <= 1) {
    let tmp15;
    if (null != displayNameStylesFont) {
      tmp15 = { fontFamily: displayNameStylesFont };
      const obj6 = { fontFamily: displayNameStylesFont };
    }
    tmp14 = tmp15;
  }
  const tmp8Result = userName(4586);
  const token = tmp8Result.useToken(tmp5(587).colors.BACKGROUND_BASE_LOW);
  const tmp8Result7 = userName(4586);
  const token1 = tmp8Result7.useToken(tmp5(587).colors.WHITE);
  const tmp8Result8 = userName(10648);
  const displayNameStylesAccessibleColors = tmp8Result8.useDisplayNameStylesAccessibleColors({ displayNameStyles: result, backgroundColor: token });
  let first;
  if (displayNameStylesAccessibleColors.length > 0) {
    first = displayNameStylesAccessibleColors[0];
  }
  let effectId;
  if (result != null) {
    effectId = result.effectId;
  }
  if (effectId == null) {
    effectId = tmp8(1396).DisplayNameEffect.SOLID;
  }
  let colorVariants = null;
  if (null != first) {
    const tmp8Result9 = userName(1394);
    colorVariants = tmp8Result9.generateColorVariants(first);
  }
  const TextStyleSheet = tmp8(4892).TextStyleSheet;
  const tmp8Result10 = userName(4902);
  const tmp21 = TextStyleSheet[tmp8Result10.useTypographyVariantRemap(tmp8Result10, merged.variant, false)];
  const flattenResult = closure_9.flatten(merged.style);
  num2 = undefined;
  if (flattenResult != null) {
    num2 = flattenResult.fontSize;
  }
  if (num2 == null) {
    let fontSize;
    if (tmp21 != null) {
      fontSize = tmp21.fontSize;
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
    if (tmp21 != null) {
      lineHeight1 = tmp21.lineHeight;
    }
    lineHeight = lineHeight1;
  }
  if (lineHeight == null) {
    lineHeight = 1.25 * num2;
  }
  const items = [userName, num2];
  const memo = react.useMemo(() => {
    const obj = getNodeText;
    const nodeText = obj.getNodeText(userName);
    let num;
    if (nodeText != null) {
      num = nodeText.length;
    }
    if (num == null) {
      num = 10;
    }
    return num * num2 * 0.6;
  }, items);
  if (null != closure_13[effectId]) {
    sum = tmp27 + 0.04 * num2;
  }
  let str;
  if (colorVariants != null) {
    str = colorVariants.main;
  }
  if (str == null) {
    str = "";
  }
  const tmp29Result = closure_14(str, num2);
  if (displayNameStylesEnabled) {
    if (null != tmp7) {
      if (STATIC !== userName(10647).EffectDisplayType.PLAIN) {
        if (null != colorVariants) {
          let layoutImpact;
          const items1 = [merged.style, tmp14];
          const tmp8Result11 = userName(1394);
          if (tmp8Result11.doesEffectImpactLayout(effectId)) {
            layoutImpact = tmp29Result.layoutImpact;
          }
          if (effectId === userName(1396).DisplayNameEffect.GUMMY) {
            const tmp5Result = num2(10651);
            const tmp8Result12 = userName(4589);
            let str3 = tmp8Result12.getNodeText(userName);
            if (str3 == null) {
              str3 = "";
            }
            const obj7 = { name: str3, containerStyle: items2, textStyle: items1, textProps: obj8, colors: displayNameStylesAccessibleColors };
            items2 = [layoutImpact, containerStyle];
            obj8 = { gradientColors: undefined, gradientLength: memo, gradientMode: "clamp", gradientAngle: undefined, textStrokeWidth: undefined, textStrokeColor: undefined };
            const merged1 = Object.assign(merged);
            return closure_11(tmp5Result, obj7);
          } else {
            let bound;
            let tmp34;
            let items10;
            let num5;
            if (userName(1396).DisplayNameEffect.GRADIENT !== effectId) {
              let tmp32;
              let tmp33;
              if (userName(1396).DisplayNameEffect.PRISM !== effectId) {
                if (userName(1396).DisplayNameEffect.NEON === effectId) {
                  let neonStroke;
                  if (colorVariants != null) {
                    neonStroke = colorVariants.neonStroke;
                  }
                  const tmp54Result = closure_7(neonStroke);
                  let tmp57;
                  if (null != tmp54Result) {
                    tmp57 = tmp54Result;
                  }
                  const items3 = [items1, tmp29Result.neon, layoutImpact];
                  tmp32 = tmp57;
                  bound = memo;
                  items10 = items3;
                  tmp33 = sum;
                } else if (userName(1396).DisplayNameEffect.POP === effectId) {
                  let dark2;
                  if (colorVariants != null) {
                    dark2 = colorVariants.dark2;
                  }
                  const tmp38Result = closure_7(dark2);
                  let main;
                  if (colorVariants != null) {
                    main = colorVariants.main;
                  }
                  const tmp38Result2 = closure_7(main);
                  bound = memo;
                  items10 = items1;
                  if (null != colorVariants) {
                    const obj9 = { style: items4, children: items6 };
                    items4 = [tmp29Result.popContainer, layoutImpact, containerStyle];
                    const obj10 = { textStrokeWidth: sum, textStrokeColor: tmp49, style: items5, children: userName };
                    const Text = tmp8(4892).Text;
                    const merged2 = Object.assign(merged);
                    tmp49 = undefined;
                    if (null != tmp38Result2) {
                      tmp49 = tmp38Result2;
                    }
                    items5 = [items1, tmp29Result.popBackLayer];
                    items6 = [closure_11(Text, obj10), ];
                    const obj11 = { textStrokeWidth: sum, textStrokeColor: tmp53, style: items7, children: userName };
                    const Text2 = tmp8(4892).Text;
                    const merged3 = Object.assign(merged);
                    tmp53 = undefined;
                    if (null != tmp38Result) {
                      tmp53 = tmp38Result;
                    }
                    items7 = [items1, tmp29Result.popFrontLayer];
                    items6[1] = closure_11(Text2, obj11);
                    return closure_12(closure_6, obj9);
                  }
                } else if (userName(1396).DisplayNameEffect.TOON === effectId) {
                  const items8 = [items1, tmp29Result.toon, layoutImpact];
                  const items9 = [closure_7(token1), closure_7(colorVariants.light2), closure_7(colorVariants.light1), closure_7(colorVariants.main)];
                  const tmp36 = closure_7(colorVariants.toonStroke);
                  let tmp37;
                  if (null != tmp36) {
                    tmp37 = tmp36;
                  }
                  num5 = 90;
                  tmp32 = tmp37;
                  bound = lineHeight;
                  items10 = items8;
                  tmp33 = sum;
                  tmp34 = items9;
                } else {
                  const SOLID = tmp8(1396).DisplayNameEffect.SOLID;
                  items10 = [items1, ];
                  const obj12 = { color: first };
                  items10[1] = obj12;
                  bound = memo;
                }
              }
              const obj13 = { gradientColors: tmp34, gradientLength: bound, gradientMode: "clamp", style: items11, gradientAngle: num5, textStrokeWidth: tmp33, textStrokeColor: tmp32, children: userName };
              const Text3 = tmp8(4892).Text;
              const merged4 = Object.assign(merged);
              items11 = [items10];
              return closure_11(Text3, obj13);
            }
            const mapped = displayNameStylesAccessibleColors.map((item) => closure_1_7(item));
            const found = mapped.filter(tmp8(1375).isNotNullish);
            let num6 = 45;
            if (effectId === userName(1396).DisplayNameEffect.PRISM) {
              num6 = 0;
            }
            bound = memo;
            items10 = items1;
            num5 = num6;
            tmp34 = found;
            if (effectId === userName(1396).DisplayNameEffect.PRISM) {
              let tmp58 = found;
              if (found.length > 0) {
                const items12 = [];
                items12[HermesBuiltin.arraySpread(items12, found, 0)] = found[0];
                tmp58 = items12;
              }
              const _Math = Math;
              bound = Math.max(memo, MIN_PRISM_GRADIENT_WIDTH);
              tmp34 = tmp58;
              items10 = items1;
              num5 = num6;
            }
          }
        }
      }
      const obj14 = { style: items13, color: defaultColor, children: userName };
      const Text4 = tmp8(4892).Text;
      const merged5 = Object.assign(merged);
      items13 = [merged.style, tmp13];
      return closure_11(Text4, obj14);
    }
  }
  const obj15 = { color: defaultColor, children: userName };
  const Text5 = tmp8(4892).Text;
  const merged6 = Object.assign(merged);
  return closure_11(Text5, obj15);
}));
let result = size.fileFinishedImporting("modules/display_name_styles/native/UsernameWithEffects.tsx");

export default memoResult;
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;