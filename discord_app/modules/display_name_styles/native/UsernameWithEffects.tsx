// discord_app/modules/display_name_styles/native/UsernameWithEffects.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import DisplayNameStylesUtils from "../DisplayNameStylesUtils.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import getNodeText from "../../../design/utils/shared/getNodeText.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useTypographyVariantRemap from "../../../../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx";
import useDisplayNameStylesDefault from "../hooks/useDisplayNameStyles.tsx";
import useDisplayNameStylesEnabled from "../hooks/useDisplayNameStylesEnabled.tsx";
import useDisplayNameStylesFont from "useDisplayNameStylesFont.tsx";
import DisplayNameStylesFlywheelExperiment from "../DisplayNameStylesFlywheelExperiment.tsx";
import types from "../types.tsx";
import useDisplayNameStylesAccessibleColors from "../hooks/useDisplayNameStylesAccessibleColors.tsx";
import PerLetterEffectDefault from "effects/PerLetterEffect.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = [
  "userId",
  "guildId",
  "userName",
  "effectDisplayType",
  "pendingDisplayNameStyles",
  "defaultColor",
  "containerStyle",
  "ignoreDisabledStylesSetting",
];
get_ActivityIndicator = fn(17);
({ View: metroRequire, processColor: closure_7, PixelRatio: closure_8, StyleSheet: closure_9 } = get_ActivityIndicator);
const MIN_PRISM_GRADIENT_WIDTH = fn(1395).MIN_PRISM_GRADIENT_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const dependencyMap = {
  [fn(1396).DisplayNameEffect.NEON]: 1,
  [fn(1396).DisplayNameEffect.TOON]: 1.6,
  [fn(1396).DisplayNameEffect.POP]: 1.2,
};
const createStyles = fn(4896);
let closure_14 = createStyles.createStyles((textShadowColor, arg1) => {
  const result = 0.04 * arg1;
  const sum = 4 + 0.12 * arg1;
  value = closure_1_8.get();
  const sum1 = dependencyMap[DisplayNameEffect.DisplayNameEffect.NEON] + 0.04 * arg1;
  const sum2 = dependencyMap[DisplayNameEffect.DisplayNameEffect.TOON] + 0.04 * arg1;
  const sum3 = dependencyMap[DisplayNameEffect.DisplayNameEffect.POP] + 0.04 * arg1;
  const result1 = Math.floor(sum2 / 2) / value;
  const obj = {
    color: nativeDefault.colors.WHITE,
    textShadowColor,
    textShadowRadius: sum,
    textShadowOffset: { width: 0, height: 0 },
  };
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
  const obj4 = {
    neon: null,
    popContainer: null,
    popBackLayer: null,
    popFrontLayer: null,
    toon: null,
    layoutImpact: null,
  };
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

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(85);
        ({
          userId,
          guildId,
          userName,
          effectDisplayType,
          pendingDisplayNameStyles,
          defaultColor,
          containerStyle,
          ignoreDisabledStylesSetting,
        } = arg0);
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
              const isDisplayNameStylesFlywheelViewersEnabled =
                DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelViewersEnabled("UsernameWithEffects");
              const tmpResult = DisplayNameStylesFlywheelExperiment;
              const result = DisplayNameStylesUtils.applyFlywheelViewingFallback(
                tmp8,
                isDisplayNameStylesFlywheelViewersEnabled,
              );
              const _Symbol = Symbol;
              if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { location: "UsernameWithEffects" };
                cResult[5] = obj2;
                let tmp12 = obj2;
              } else {
                tmp12 = cResult[5];
              }
              const tmpResult12 = DisplayNameStylesUtils;
              const displayNameStylesEnabled = useDisplayNameStylesEnabled.useDisplayNameStylesEnabled(tmp12);
              const tmpResult13 = useDisplayNameStylesEnabled;
              const obj3 = { displayNameStyles: result, ignoreDisabledStylesSetting: tmp5 };
              const displayNameStylesFont = useDisplayNameStylesFont.useDisplayNameStylesFont(obj3);
              let num2 = tmp4.lineClamp;
              if (num2 == null) {
                num2 = 1;
              }
              if (cResult[6] !== displayNameStylesFont) {
                let tmp18;
                if (null != displayNameStylesFont) {
                  const obj4 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
                  tmp18 = obj4;
                }
                cResult[6] = displayNameStylesFont;
                cResult[7] = tmp18;
                let tmp17 = tmp18;
              } else {
                tmp17 = cResult[7];
              }
              if (cResult[8] === displayNameStylesFont) {
                if (cResult[9] === tmp17) {
                  if (cResult[10] === tmp16) {
                    let tmp19 = cResult[11];
                  }
                  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
                  const tmpResult15 = useToken;
                  const token1 = useToken.useToken(nativeDefault.colors.WHITE);
                  const tmpResult16 = useToken;
                  const obj5 = { displayNameStyles: result, backgroundColor: token };
                  const displayNameStylesAccessibleColors =
                    useDisplayNameStylesAccessibleColors.useDisplayNameStylesAccessibleColors(obj5);
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
                    colorVariants = DisplayNameStylesUtils.generateColorVariants(first);
                    const tmpResult18 = DisplayNameStylesUtils;
                  }
                  const tmpResult19 = useTypographyVariantRemap;
                  const tmp28 =
                    Text_Text.TextStyleSheet[tmpResult19.useTypographyVariantRemap(tmpResult19, tmp4.variant, false)];
                  const flattenResult = options.flatten(tmp4.style);
                  let num11;
                  if (flattenResult != null) {
                    num11 = flattenResult.fontSize;
                  }
                  if (num11 == null) {
                    let fontSize;
                    if (tmp28 != null) {
                      fontSize = tmp28.fontSize;
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
                    if (tmp28 != null) {
                      lineHeight1 = tmp28.lineHeight;
                    }
                    lineHeight = lineHeight1;
                  }
                  if (lineHeight == null) {
                    lineHeight = 1.25 * num11;
                  }
                  const tmpResult17 = useDisplayNameStylesAccessibleColors;
                  const nodeText = getNodeText.getNodeText(userName);
                  let num13;
                  if (nodeText != null) {
                    num13 = nodeText.length;
                  }
                  if (num13 == null) {
                    num13 = 10;
                  }
                  const result1 = num13 * num11 * 0.6;
                  if (cResult[12] === dependencyMap[effectId]) {
                    if (cResult[13] === num11) {
                      let tmp37 = cResult[14];
                    }
                    let str3;
                    if (colorVariants != null) {
                      str3 = colorVariants.main;
                    }
                    if (str3 == null) {
                      str3 = "";
                    }
                    const tmp39Result = closure_14(str3, num11);
                    if (displayNameStylesEnabled) {
                      if (null != tmp8) {
                        if (effectDisplayType !== types.EffectDisplayType.PLAIN) {
                          if (null != colorVariants) {
                            if (cResult[27] === tmp19) {
                              if (cResult[28] === tmp4) {
                                let tmp41 = cResult[29];
                              }
                              if (tmpResult21.doesEffectImpactLayout(effectId)) {
                                const layoutImpact = tmp39Result.layoutImpact;
                              }
                              if (effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
                                if (cResult[30] !== userName) {
                                  let str5 = getNodeText.getNodeText(userName);
                                  if (str5 == null) {
                                    str5 = "";
                                  }
                                  cResult[30] = userName;
                                  cResult[31] = str5;
                                  let tmp91 = str5;
                                  const tmpResult22 = getNodeText;
                                } else {
                                  tmp91 = cResult[31];
                                }
                                if (cResult[32] === containerStyle) {
                                  if (cResult[33] === layoutImpact) {
                                    let tmp92 = cResult[34];
                                  }
                                  if (cResult[35] === result1) {
                                    if (cResult[36] === tmp4) {
                                      let tmp93 = cResult[37];
                                    }
                                    if (cResult[38] === displayNameStylesAccessibleColors) {
                                      if (cResult[39] === tmp92) {
                                        if (cResult[40] === tmp93) {
                                          if (cResult[41] === tmp91) {
                                            if (cResult[42] === tmp41) {
                                              let tmp97 = cResult[43];
                                            }
                                            return tmp97;
                                          }
                                        }
                                      }
                                    }
                                    const obj6 = {
                                      name: tmp91,
                                      containerStyle: tmp92,
                                      textStyle: tmp41,
                                      textProps: tmp93,
                                      colors: displayNameStylesAccessibleColors,
                                    };
                                    const tmp99 = closure_1_11(PerLetterEffectDefault, obj6);
                                    cResult[38] = displayNameStylesAccessibleColors;
                                    cResult[39] = tmp92;
                                    cResult[40] = tmp93;
                                    cResult[41] = tmp91;
                                    cResult[42] = tmp41;
                                    cResult[43] = tmp99;
                                    tmp97 = tmp99;
                                  }
                                  const obj7 = {};
                                  const merged = Object.assign(tmp4);
                                  obj7.gradientColors = undefined;
                                  obj7.gradientLength = result1;
                                  obj7.gradientMode = "clamp";
                                  obj7.gradientAngle = undefined;
                                  obj7.textStrokeWidth = undefined;
                                  obj7.textStrokeColor = undefined;
                                  cResult[35] = result1;
                                  cResult[36] = tmp4;
                                  cResult[37] = obj7;
                                  tmp93 = obj7;
                                }
                                const items = [layoutImpact, containerStyle];
                                cResult[32] = containerStyle;
                                cResult[33] = layoutImpact;
                                cResult[34] = items;
                                tmp92 = items;
                              } else {
                                if (DisplayNameEffect.DisplayNameEffect.GRADIENT !== effectId) {
                                  if (DisplayNameEffect.DisplayNameEffect.PRISM !== effectId) {
                                    if (DisplayNameEffect.DisplayNameEffect.NEON === effectId) {
                                      let neonStroke;
                                      if (colorVariants != null) {
                                        neonStroke = colorVariants.neonStroke;
                                      }
                                      const tmp71Result = React5(neonStroke);
                                      if (null != tmp71Result) {
                                        const tmp74 = tmp71Result;
                                      }
                                      if (cResult[51] === layoutImpact) {
                                        if (cResult[52] === tmp39Result.neon) {
                                          if (cResult[53] === tmp41) {
                                            let tmp75 = cResult[54];
                                          }
                                          let tmp43 = tmp75;
                                          let tmp44 = result1;
                                          let tmp45 = tmp74;
                                          let tmp46 = tmp37;
                                        }
                                      }
                                      const items1 = [tmp41, tmp39Result.neon, layoutImpact];
                                      cResult[51] = layoutImpact;
                                      cResult[52] = tmp39Result.neon;
                                      cResult[53] = tmp41;
                                      cResult[54] = items1;
                                      tmp75 = items1;
                                    } else if (DisplayNameEffect.DisplayNameEffect.POP === effectId) {
                                      let dark2;
                                      if (colorVariants != null) {
                                        dark2 = colorVariants.dark2;
                                      }
                                      const tmp52Result = React5(dark2);
                                      let main;
                                      if (colorVariants != null) {
                                        main = colorVariants.main;
                                      }
                                      const tmp52Result2 = React5(main);
                                      tmp44 = result1;
                                      tmp43 = tmp41;
                                      if (null != colorVariants) {
                                        if (cResult[55] === containerStyle) {
                                          if (cResult[56] === layoutImpact) {
                                            if (cResult[57] === tmp39Result.popContainer) {
                                              let tmp57 = cResult[58];
                                            }
                                            if (cResult[59] === tmp39Result.popBackLayer) {
                                              if (cResult[60] === tmp41) {
                                                let tmp58 = cResult[61];
                                              }
                                              if (cResult[62] === tmp39Result.popFrontLayer) {
                                                if (cResult[63] === tmp41) {
                                                  let tmp59 = cResult[64];
                                                }
                                                const obj8 = { style: tmp57, children: null };
                                                const obj9 = {};
                                                const merged1 = Object.assign(tmp4);
                                                obj9.textStrokeWidth = tmp37;
                                                let tmp66;
                                                if (null != tmp52Result2) {
                                                  tmp66 = tmp52Result2;
                                                }
                                                obj9.textStrokeColor = tmp66;
                                                obj9.style = tmp58;
                                                obj9.children = userName;
                                                const items2 = [closure_1_11(Text_Text.Text, obj9)];
                                                const obj10 = {};
                                                const merged2 = Object.assign(tmp4);
                                                obj10.textStrokeWidth = tmp37;
                                                let tmp70;
                                                if (null != tmp52Result) {
                                                  tmp70 = tmp52Result;
                                                }
                                                obj10.textStrokeColor = tmp70;
                                                obj10.style = tmp59;
                                                obj10.children = userName;
                                                items2[1] = closure_1_11(Text_Text.Text, obj10);
                                                obj8.children = items2;
                                                return __initData(timestampProducer, obj8);
                                              }
                                              const items3 = [tmp41, tmp39Result.popFrontLayer];
                                              cResult[62] = tmp39Result.popFrontLayer;
                                              cResult[63] = tmp41;
                                              cResult[64] = items3;
                                              tmp59 = items3;
                                            }
                                            const items4 = [tmp41, tmp39Result.popBackLayer];
                                            cResult[59] = tmp39Result.popBackLayer;
                                            cResult[60] = tmp41;
                                            cResult[61] = items4;
                                            tmp58 = items4;
                                          }
                                        }
                                        const items5 = [tmp39Result.popContainer, layoutImpact, containerStyle];
                                        cResult[55] = containerStyle;
                                        cResult[56] = layoutImpact;
                                        cResult[57] = tmp39Result.popContainer;
                                        cResult[58] = items5;
                                        tmp57 = items5;
                                      }
                                    } else if (DisplayNameEffect.DisplayNameEffect.TOON === effectId) {
                                      if (cResult[65] === layoutImpact) {
                                        if (cResult[66] === tmp39Result.toon) {
                                          if (cResult[67] === tmp41) {
                                            let tmp48 = cResult[68];
                                          }
                                          const items6 = [
                                            React5(token1),
                                            React5(colorVariants.light2),
                                            React5(colorVariants.light1),
                                            React5(colorVariants.main),
                                          ];
                                          const tmp50 = React5(colorVariants.toonStroke);
                                          let tmp51;
                                          if (null != tmp50) {
                                            tmp51 = tmp50;
                                          }
                                          let num26 = 90;
                                          tmp45 = tmp51;
                                          tmp44 = lineHeight;
                                          tmp43 = tmp48;
                                          tmp46 = tmp37;
                                          let tmp47 = items6;
                                        }
                                      }
                                      const items7 = [tmp41, tmp39Result.toon, layoutImpact];
                                      cResult[65] = layoutImpact;
                                      cResult[66] = tmp39Result.toon;
                                      cResult[67] = tmp41;
                                      cResult[68] = items7;
                                      tmp48 = items7;
                                    } else {
                                      const SOLID = DisplayNameEffect.DisplayNameEffect.SOLID;
                                      if (cResult[69] !== first) {
                                        const obj11 = { color: first };
                                        cResult[69] = first;
                                        cResult[70] = obj11;
                                        let tmp42 = obj11;
                                      } else {
                                        tmp42 = cResult[70];
                                      }
                                      if (cResult[71] === tmp42) {
                                        if (cResult[72] === tmp41) {
                                          tmp43 = cResult[73];
                                        }
                                        tmp44 = result1;
                                      }
                                      const items8 = [tmp41, tmp42];
                                      cResult[71] = tmp42;
                                      cResult[72] = tmp41;
                                      cResult[73] = items8;
                                      tmp43 = items8;
                                    }
                                  }
                                  if (cResult[74] !== tmp43) {
                                    const items9 = [tmp43];
                                    cResult[74] = tmp43;
                                    cResult[75] = items9;
                                    let tmp84 = items9;
                                  } else {
                                    tmp84 = cResult[75];
                                  }
                                  if (cResult[76] === num26) {
                                    if (cResult[77] === tmp47) {
                                      if (cResult[78] === tmp44) {
                                        if (cResult[79] === tmp45) {
                                          if (cResult[80] === tmp84) {
                                            if (cResult[81] === tmp4) {
                                              if (cResult[82] === tmp46) {
                                                if (cResult[83] === userName) {
                                                  let tmp85 = cResult[84];
                                                }
                                                return tmp85;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj12 = {};
                                  const merged3 = Object.assign(tmp4);
                                  obj12.gradientColors = tmp47;
                                  obj12.gradientLength = tmp44;
                                  obj12.gradientMode = "clamp";
                                  obj12.style = tmp84;
                                  obj12.gradientAngle = num26;
                                  obj12.textStrokeWidth = tmp46;
                                  obj12.textStrokeColor = tmp45;
                                  obj12.children = userName;
                                  const tmp90 = closure_1_11(Text_Text.Text, obj12);
                                  cResult[76] = num26;
                                  cResult[77] = tmp47;
                                  cResult[78] = tmp44;
                                  cResult[79] = tmp45;
                                  cResult[80] = tmp84;
                                  cResult[81] = tmp4;
                                  cResult[82] = tmp46;
                                  cResult[83] = userName;
                                  cResult[84] = tmp90;
                                  tmp85 = tmp90;
                                }
                                if (cResult[44] === displayNameStylesAccessibleColors) {
                                  if (cResult[45] === effectId) {
                                    if (cResult[46] === result1) {
                                      tmp47 = cResult[47];
                                      num26 = cResult[48];
                                      tmp44 = cResult[49];
                                      tmp43 = tmp41;
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
                                let tmp78 = found;
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
                                    tmp80[HermesBuiltin.arraySpread(found, 0)] = found[0];
                                  }
                                  const _Math = Math;
                                  bound = Math.max(result1, MIN_PRISM_GRADIENT_WIDTH);
                                  tmp78 = tmp80;
                                }
                                cResult[44] = displayNameStylesAccessibleColors;
                                cResult[45] = effectId;
                                cResult[46] = result1;
                                cResult[47] = tmp78;
                                cResult[48] = 45;
                                cResult[49] = bound;
                                tmp44 = bound;
                                tmp47 = tmp78;
                                tmp43 = tmp41;
                                num26 = num47;
                              }
                              tmpResult21 = DisplayNameStylesUtils;
                            }
                            const items10 = [tmp4.style, tmp19];
                            cResult[27] = tmp19;
                            cResult[28] = tmp4;
                            cResult[29] = items10;
                            tmp41 = items10;
                          }
                        }
                        if (cResult[19] === tmp17) {
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
                          const obj13 = {};
                          const merged4 = Object.assign(tmp4);
                          obj13.style = tmp100;
                          obj13.color = defaultColor;
                          obj13.children = userName;
                          const tmp106 = closure_1_11(Text_Text.Text, obj13);
                          cResult[22] = defaultColor;
                          cResult[23] = tmp100;
                          cResult[24] = tmp4;
                          cResult[25] = userName;
                          cResult[26] = tmp106;
                        }
                        const items11 = [tmp4.style, tmp17];
                        cResult[19] = tmp17;
                        cResult[20] = tmp4;
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
                    const obj14 = {};
                    const merged5 = Object.assign(tmp4);
                    obj14.color = defaultColor;
                    obj14.children = userName;
                    const tmp112 = closure_1_11(Text_Text.Text, obj14);
                    cResult[15] = defaultColor;
                    cResult[16] = tmp4;
                    cResult[17] = userName;
                    cResult[18] = tmp112;
                  }
                  let sum;
                  if (null != dependencyMap[effectId]) {
                    class Ne {
                      constructor(arg0) {
                        return closure_1_7(arg0);
                      }
                    }
                    sum = tmp36 + 0.04 * num11;
                  }
                  cResult[12] = dependencyMap[effectId];
                  cResult[13] = num11;
                  cResult[14] = sum;
                  tmp37 = sum;
                  const tmpResult20 = getNodeText;
                }
              }
              let tmp20 = tmp17;
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
                  tmp22[0] = displayNameStylesFont;
                }
                tmp20 = tmp22;
              }
              cResult[8] = displayNameStylesFont;
              cResult[9] = tmp17;
              cResult[10] = num2 > 1;
              cResult[11] = tmp20;
              tmp19 = tmp20;
              const tmpResult14 = useDisplayNameStylesFont;
            }
          }
        }
        const obj15 = {
          userId,
          guildId,
          pendingDisplayNameStyles,
          ignoreDisabledStylesSetting: undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting,
        };
        cResult[0] = guildId;
        cResult[1] = undefined !== ignoreDisabledStylesSetting && ignoreDisabledStylesSetting;
        cResult[2] = pendingDisplayNameStyles;
        cResult[3] = userId;
        cResult[4] = obj15;
        tmp6 = obj15;
      }
    : (userName) => {
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
        const merged = Object.assign(
          userName,
          Object.assign({
            userId: 0,
            guildId: 0,
            userName: 0,
            effectDisplayType: 0,
            pendingDisplayNameStyles: 0,
            defaultColor: 0,
            containerStyle: 0,
            ignoreDisabledStylesSetting: 0,
          }),
        );
        let num2;
        const tmp6 = num2(5312)({ userId, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting });
        const isDisplayNameStylesFlywheelViewersEnabled =
          userName(9404).useIsDisplayNameStylesFlywheelViewersEnabled("UsernameWithEffects");
        const obj = userName(9404);
        const result = userName(1394).applyFlywheelViewingFallback(tmp6, isDisplayNameStylesFlywheelViewersEnabled);
        const obj2 = userName(1394);
        const displayNameStylesEnabled = userName(5313).useDisplayNameStylesEnabled({
          location: "UsernameWithEffects",
        });
        const obj3 = userName(5313);
        const displayNameStylesFont = userName(9403).useDisplayNameStylesFont({
          displayNameStyles: result,
          ignoreDisabledStylesSetting,
        });
        let tmp12;
        if (null != displayNameStylesFont) {
          const obj5 = { fontFamily: displayNameStylesFont, lineHeight: "Array" };
          tmp12 = obj5;
        }
        let num = merged.lineClamp;
        if (num == null) {
          num = 1;
        }
        let tmp13 = tmp12;
        if (num <= 1) {
          let tmp14;
          if (null != displayNameStylesFont) {
            const obj6 = { fontFamily: displayNameStylesFont };
            tmp14 = obj6;
          }
          tmp13 = tmp14;
        }
        const obj4 = userName(9403);
        const token = userName(4586).useToken(tmp4(587).colors.BACKGROUND_BASE_LOW);
        const tmp7Result = userName(4586);
        const token1 = userName(4586).useToken(tmp4(587).colors.WHITE);
        const tmp7Result7 = userName(4586);
        const displayNameStylesAccessibleColors = userName(10648).useDisplayNameStylesAccessibleColors({
          displayNameStyles: result,
          backgroundColor: token,
        });
        let first;
        if (displayNameStylesAccessibleColors.length > 0) {
          first = displayNameStylesAccessibleColors[0];
        }
        let effectId;
        if (result != null) {
          effectId = result.effectId;
        }
        if (effectId == null) {
          effectId = tmp7(1396).DisplayNameEffect.SOLID;
        }
        let colorVariants = null;
        if (null != first) {
          colorVariants = tmp7(1394).generateColorVariants(first);
          const tmp7Result9 = tmp7(1394);
        }
        const tmp7Result10 = userName(4902);
        const tmp20 =
          userName(4892).TextStyleSheet[tmp7Result10.useTypographyVariantRemap(tmp7Result10, merged.variant, false)];
        const flattenResult = closure_9.flatten(merged.style);
        num2 = undefined;
        if (flattenResult != null) {
          num2 = flattenResult.fontSize;
        }
        if (num2 == null) {
          let fontSize;
          if (tmp20 != null) {
            fontSize = tmp20.fontSize;
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
          if (tmp20 != null) {
            lineHeight1 = tmp20.lineHeight;
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
          const sum = tmp26 + 0.04 * num2;
        }
        let str;
        if (colorVariants != null) {
          str = colorVariants.main;
        }
        if (str == null) {
          str = "";
        }
        const tmp28Result = closure_14(str, num2);
        if (displayNameStylesEnabled) {
          if (null != tmp6) {
            if (STATIC !== tmp7(10647).EffectDisplayType.PLAIN) {
              if (null != colorVariants) {
                const items1 = [merged.style, tmp13];
                if (tmp7Result11.doesEffectImpactLayout(effectId)) {
                  const layoutImpact = tmp28Result.layoutImpact;
                }
                if (effectId === tmp7(1396).DisplayNameEffect.GUMMY) {
                  const tmp4Result = tmp4(10651);
                  let str3 = tmp7(4589).getNodeText(userName);
                  if (str3 == null) {
                    str3 = "";
                  }
                  const obj7 = { name: str3, containerStyle: null, textStyle: null, textProps: null, colors: null };
                  const items2 = [layoutImpact, containerStyle];
                  obj7.containerStyle = items2;
                  obj7.textStyle = items1;
                  const obj8 = {};
                  const merged1 = Object.assign(merged);
                  obj8.gradientColors = undefined;
                  obj8.gradientLength = memo;
                  obj8.gradientMode = "clamp";
                  obj8.gradientAngle = undefined;
                  obj8.textStrokeWidth = undefined;
                  obj8.textStrokeColor = undefined;
                  obj7.textProps = obj8;
                  obj7.colors = displayNameStylesAccessibleColors;
                  return closure_11(tmp4Result, obj7);
                } else {
                  if (tmp7(1396).DisplayNameEffect.GRADIENT !== effectId) {
                    if (tmp7(1396).DisplayNameEffect.PRISM !== effectId) {
                      if (tmp7(1396).DisplayNameEffect.NEON === effectId) {
                        let neonStroke;
                        if (colorVariants != null) {
                          neonStroke = colorVariants.neonStroke;
                        }
                        const tmp53Result = closure_7(neonStroke);
                        let tmp56;
                        if (null != tmp53Result) {
                          tmp56 = tmp53Result;
                        }
                        const items3 = [items1, tmp28Result.neon, layoutImpact];
                        let tmp31 = tmp56;
                        let bound = memo;
                        let items10 = items3;
                        let tmp32 = sum;
                      } else if (tmp7(1396).DisplayNameEffect.POP === effectId) {
                        let dark2;
                        if (colorVariants != null) {
                          dark2 = colorVariants.dark2;
                        }
                        const tmp37Result = closure_7(dark2);
                        let main;
                        if (colorVariants != null) {
                          main = colorVariants.main;
                        }
                        const tmp37Result2 = closure_7(main);
                        bound = memo;
                        items10 = items1;
                        if (null != colorVariants) {
                          const obj9 = { style: null, children: null };
                          const items4 = [tmp28Result.popContainer, layoutImpact, containerStyle];
                          obj9.style = items4;
                          const obj10 = {};
                          const merged2 = Object.assign(merged);
                          obj10.textStrokeWidth = sum;
                          let tmp48;
                          if (null != tmp37Result2) {
                            tmp48 = tmp37Result2;
                          }
                          obj10.textStrokeColor = tmp48;
                          const items5 = [items1, tmp28Result.popBackLayer];
                          obj10.style = items5;
                          obj10.children = userName;
                          const items6 = [closure_11(tmp7(4892).Text, obj10)];
                          const obj11 = {};
                          const merged3 = Object.assign(merged);
                          obj11.textStrokeWidth = sum;
                          let tmp52;
                          if (null != tmp37Result) {
                            tmp52 = tmp37Result;
                          }
                          obj11.textStrokeColor = tmp52;
                          const items7 = [items1, tmp28Result.popFrontLayer];
                          obj11.style = items7;
                          obj11.children = userName;
                          items6[1] = closure_11(tmp7(4892).Text, obj11);
                          obj9.children = items6;
                          return closure_12(closure_6, obj9);
                        }
                      } else if (tmp7(1396).DisplayNameEffect.TOON === effectId) {
                        const items8 = [items1, tmp28Result.toon, layoutImpact];
                        const items9 = [
                          closure_7(token1),
                          closure_7(colorVariants.light2),
                          closure_7(colorVariants.light1),
                          closure_7(colorVariants.main),
                        ];
                        const tmp35 = closure_7(colorVariants.toonStroke);
                        let tmp36;
                        if (null != tmp35) {
                          tmp36 = tmp35;
                        }
                        let num5 = 90;
                        tmp31 = tmp36;
                        bound = lineHeight;
                        items10 = items8;
                        tmp32 = sum;
                        let tmp33 = items9;
                      } else {
                        const SOLID = tmp7(1396).DisplayNameEffect.SOLID;
                        items10 = [items1];
                        const obj12 = { color: first };
                        items10[1] = obj12;
                        bound = memo;
                      }
                    }
                    const obj13 = {};
                    const merged4 = Object.assign(merged);
                    obj13.gradientColors = tmp33;
                    obj13.gradientLength = bound;
                    obj13.gradientMode = "clamp";
                    const items11 = [items10];
                    obj13.style = items11;
                    obj13.gradientAngle = num5;
                    obj13.textStrokeWidth = tmp32;
                    obj13.textStrokeColor = tmp31;
                    obj13.children = userName;
                    return closure_11(tmp7(4892).Text, obj13);
                  }
                  const mapped = displayNameStylesAccessibleColors.map((item) => closure_1_7(item));
                  const found = mapped.filter(tmp7(1375).isNotNullish);
                  let num6 = 45;
                  if (effectId === tmp7(1396).DisplayNameEffect.PRISM) {
                    num6 = 0;
                  }
                  bound = memo;
                  items10 = items1;
                  num5 = num6;
                  tmp33 = found;
                  if (effectId === tmp7(1396).DisplayNameEffect.PRISM) {
                    let tmp57 = found;
                    if (found.length > 0) {
                      const items12 = [];
                      items12[HermesBuiltin.arraySpread(found, 0)] = found[0];
                      tmp57 = items12;
                    }
                    const _Math = Math;
                    bound = Math.max(memo, MIN_PRISM_GRADIENT_WIDTH);
                    tmp33 = tmp57;
                    items10 = items1;
                    num5 = num6;
                  }
                }
                tmp7Result11 = tmp7(1394);
              }
            }
            const obj14 = {};
            const merged5 = Object.assign(merged);
            const items13 = [merged.style, tmp12];
            obj14.style = items13;
            obj14.color = defaultColor;
            obj14.children = userName;
            return closure_11(tmp7(4892).Text, obj14);
          }
        }
        const obj15 = {};
        const merged6 = Object.assign(merged);
        obj15.color = defaultColor;
        obj15.children = userName;
        return closure_11(userName(4892).Text, obj15);
      },
);
export const AVERAGE_FONT_WIDTH_RATIO = 0.6;
