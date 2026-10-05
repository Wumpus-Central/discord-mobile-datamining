// === Module 5773: VisualEffectView ===

// Module 5773 (VisualEffectView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useToken from "useToken" /* 4580 */;
import VEVOOStore from "VEVOOStore" /* 5774 */;
import VisualEffectViewIOS from "VisualEffectViewIOS" /* 5775 */;
import VisualEffectViewAndroid from "VisualEffectViewAndroid" /* 5778 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const VisualEffectViewIOSDefault = VisualEffectViewIOS;
const VisualEffectViewAndroidDefault = VisualEffectViewAndroid;

function getIOSBlurEffect(blurTheme, blurStyle) {
  let DARK2;
  let str3;
  let DARK = blurTheme;
  if (VisualEffectViewIOS.MODERN_IOS_BLURS_EFFECTS_AVAILABLE) {
    if ("default" !== blurStyle) {
      if ("light" === DARK) {
        DARK = ThemeTypes.LIGHT;
      } else if ("dark" === DARK) {
        DARK = ThemeTypes.DARK;
      }
      let str6 = "UIBlurEffectStyleSystemUltraThinMaterialDark";
      if (DARK === ThemeTypes.LIGHT) {
        str6 = "UIBlurEffectStyleSystemUltraThinMaterialLight";
      }
      str3 = str6;
    }
    return str3;
  }
  if ("light" === DARK) {
    DARK2 = ThemeTypes.LIGHT;
  } else {
    DARK2 = DARK;
    if ("dark" === DARK) {
      DARK2 = ThemeTypes.DARK;
    }
  }
  str3 = "UIBlurEffectStyleDark";
  if (DARK2 === ThemeTypes.LIGHT) {
    str3 = "UIBlurEffectStyleLight";
  }
}
let closure_3 = ["blurTheme", "blurStyle", "blurAmount", "tintColor", "android_fallbackColor", "android_blurTargetViewNativeId", "android_softwareBlurDisabled"];
const View = react_native.View;
let closure_6 = VEVOOStore.useVisualEffectViewOverrides;
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
let closure_9 = PlatformUtils.isAndroid();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let android_fallbackColor;
  let blurStyle;
  let blurTheme;
  let style;
  let tmp10;
  let tmp4;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  ({ style, blurTheme, android_fallbackColor, blurStyle } = arg0);
  if (cResult[0] !== blurTheme) {
    let DARK;
    if ("light" === blurTheme) {
      DARK = ThemeTypes.LIGHT;
    } else {
      DARK = blurTheme;
      if ("dark" === blurTheme) {
        DARK = ThemeTypes.DARK;
      }
    }
    cResult[0] = blurTheme;
    cResult[1] = DARK;
    tmp4 = DARK;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_DEFAULT, tmp4);
  const tmpResult2 = useToken;
  let token1 = tmpResult2.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, tmp4);
  if ("default" === blurStyle) {
    token1 = token;
  }
  if (cResult[2] !== token1) {
    const obj2 = { backgroundColor: token1 };
    cResult[2] = token1;
    cResult[3] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== android_fallbackColor) {
    let tmp12;
    if (null != android_fallbackColor) {
      tmp12 = { backgroundColor: android_fallbackColor };
      const obj3 = { backgroundColor: android_fallbackColor };
    }
    cResult[4] = android_fallbackColor;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === tmp9) {
    if (cResult[7] === tmp10) {
      let tmp13;
      if (cResult[8] === style) {
        tmp13 = cResult[9];
      }
      return tmp13;
    }
  }
  const items = [tmp9, style, tmp10];
  cResult[6] = tmp9;
  cResult[7] = tmp10;
  cResult[8] = style;
  cResult[9] = items;
  tmp13 = items;
}) : ((arg0) => {
  let android_fallbackColor;
  let blurStyle;
  let blurTheme;
  let style;
  ({ blurTheme, android_fallbackColor } = arg0);
  ({ style, blurStyle } = arg0);
  if ("light" === blurTheme) {
    blurTheme = ThemeTypes.LIGHT;
  } else if ("dark" === blurTheme) {
    blurTheme = ThemeTypes.DARK;
  }
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_DEFAULT, blurTheme);
  const obj2 = useToken;
  let token1 = obj2.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, blurTheme);
  if ("default" === blurStyle) {
    token1 = token;
  }
  const items = [{ backgroundColor: token1 }, style, ];
  let tmp5;
  if (null != android_fallbackColor) {
    tmp5 = { backgroundColor: android_fallbackColor };
    const obj3 = { backgroundColor: android_fallbackColor };
  }
  items[2] = tmp5;
  return items;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    let DARK;
    if ("light" === arg0) {
      DARK = ThemeTypes.LIGHT;
    } else {
      DARK = arg0;
      if ("dark" === arg0) {
        DARK = ThemeTypes.DARK;
      }
    }
    cResult[0] = arg0;
    cResult[1] = DARK;
    tmp4 = DARK;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, tmp4);
  useToken;
  if ("default" === arg1) {
    return token;
  } else {
    return "ultra-thin" === arg1 ? tmp9 : undefined;
  }
}) : ((theme, arg1) => {
  let DARK = theme;
  if ("light" === theme) {
    DARK = ThemeTypes.LIGHT;
  } else if ("dark" === DARK) {
    DARK = ThemeTypes.DARK;
  }
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, DARK);
  useToken;
  if ("default" === arg1) {
    return token;
  } else {
    return "ultra-thin" === arg1 ? tmp5 : undefined;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
function normalizeBlurTheme(arg0) {
  let DARK = arg0;
  if ("light" === arg0) {
    DARK = ThemeTypes.LIGHT;
  } else if ("dark" === DARK) {
    DARK = ThemeTypes.DARK;
  }
  return DARK;
}
function isBlurThemeLight(arg0) {
  let DARK = arg0;
  if ("light" === arg0) {
    DARK = ThemeTypes.LIGHT;
  } else if ("dark" === DARK) {
    DARK = ThemeTypes.DARK;
  }
  return DARK === ThemeTypes.LIGHT;
}
function isBlurDisabled(merged) {
  let android_softwareBlurDisabled = merged.android_softwareBlurDisabled;
  let tmp2 = closure_9;
  if (tmp2) {
    let tmp4 = null == tmp;
    if (!tmp4) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !VisualEffectViewAndroid.MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp4 = true === android_softwareBlurDisabled;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
const forwardRefResult = react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let android_softwareBlurDisabled;
  let blurAmount;
  let blurAmountOverride;
  let blurEffectNameOverride;
  let blurStyle;
  let blurTheme;
  let tintColor;
  let tintColorOverride;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(39);
  if (cResult[0] !== arg0) {
    ({ blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, android_softwareBlurDisabled } = arg0);
    const tmp14 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = android_blurTargetViewNativeId;
    cResult[2] = android_fallbackColor;
    cResult[3] = blurTheme;
    cResult[4] = tmp14;
    cResult[5] = blurStyle;
    cResult[6] = blurAmount;
    cResult[7] = android_softwareBlurDisabled;
    cResult[8] = tintColor;
    tmp11 = tintColor;
    tmp10 = android_softwareBlurDisabled;
    tmp9 = blurAmount;
    tmp8 = blurStyle;
    tmp7 = tmp14;
    tmp6 = blurTheme;
    tmp5 = android_fallbackColor;
    tmp4 = android_blurTargetViewNativeId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
  }
  let str = "default";
  if (undefined !== tmp8) {
    str = tmp8;
  }
  let num10 = 1;
  let num11 = 1;
  if (undefined !== tmp9) {
    num11 = tmp9;
  }
  let tmp15 = undefined !== tmp10 && tmp10;
  const style = tmp7.style;
  ({ blurAmountOverride, tintColorOverride, blurEffectNameOverride } = closure_6());
  closure_6();
  if (cResult[9] === tmp5) {
    if (cResult[10] === str) {
      if (cResult[11] === tmp6) {
        let tmp17;
        if (cResult[12] === style) {
          tmp17 = cResult[13];
        }
        const tmp19 = closure_11(tmp17);
        const tmp21 = closure_12(tmp6, str);
        let tmp23 = closure_9;
        if (tmp23) {
          let tmp25 = null == tmp4;
          if (!tmp25) {
            if (tmp15) {
              tmp15 = !VisualEffectViewAndroid.MODERN_ANDROID_BLURRING_AVAILABLE;
            }
            tmp25 = true === tmp15;
          }
          tmp23 = tmp25;
        }
        if (tmp23) {
          if (cResult[14] === tmp19) {
            if (cResult[15] === tmp7) {
              let tmp58;
              if (cResult[16] === ref) {
                tmp58 = cResult[17];
              }
              return tmp58;
            }
          }
          const merged = Object.assign(tmp7);
          const tmp64 = <View ref={ref} style={tmp19} />;
          cResult[14] = tmp19;
          cResult[15] = tmp7;
          cResult[16] = ref;
          cResult[17] = tmp64;
          tmp58 = tmp64;
        } else if (closure_9) {
          if (cResult[18] === num11) {
            if (cResult[19] === blurAmountOverride) {
              let tmp42;
              if (cResult[20] === tmp6) {
                tmp42 = cResult[21];
              }
              if (tintColorOverride == null) {
                tintColorOverride = tmp11;
              }
              if (cResult[22] === tmp4) {
                if (cResult[23] === tmp21) {
                  if (cResult[24] === tmp7) {
                    if (cResult[25] === ref) {
                      if (cResult[26] === tmp42) {
                        let tmp50;
                        if (cResult[27] === tintColorOverride) {
                          tmp50 = cResult[28];
                        }
                        return tmp50;
                      }
                    }
                  }
                }
              }
              VisualEffectViewAndroidDefault;
              const merged1 = Object.assign(tmp7);
              const tmp57 = <tmp53 ref={ref} blurAmount={tmp42} blurTintIOSParityCompensationColor={tmp21} tintColor={tintColorOverride} blurTargetViewNativeId={tmp4} />;
              cResult[22] = tmp4;
              cResult[23] = tmp21;
              cResult[24] = tmp7;
              cResult[25] = ref;
              cResult[26] = tmp42;
              cResult[27] = tintColorOverride;
              cResult[28] = tmp57;
              tmp50 = tmp57;
            }
          }
          let tmp44 = blurAmountOverride;
          if (blurAmountOverride == null) {
            let tmp45 = num11;
            if (null == num11) {
              let DARK;
              if ("light" === tmp6) {
                DARK = ThemeTypes.LIGHT;
              } else {
                DARK = tmp6;
                if ("dark" === tmp6) {
                  DARK = ThemeTypes.DARK;
                }
              }
              if (DARK === ThemeTypes.LIGHT) {
                num10 = 0.85;
              }
              tmp45 = num10;
            }
            tmp44 = tmp45;
          }
          cResult[18] = num11;
          cResult[19] = blurAmountOverride;
          cResult[20] = tmp6;
          cResult[21] = tmp44;
          tmp42 = tmp44;
        } else {
          if (cResult[29] === blurEffectNameOverride) {
            if (cResult[30] === str) {
              let tmp27;
              if (cResult[31] === tmp6) {
                tmp27 = cResult[32];
              }
              let tmp32 = blurAmountOverride;
              if (blurAmountOverride == null) {
                tmp32 = num11;
              }
              let tmp33 = tintColorOverride;
              if (tintColorOverride == null) {
                tmp33 = tmp11;
              }
              if (cResult[33] === tmp7) {
                if (cResult[34] === ref) {
                  if (cResult[35] === tmp27) {
                    if (cResult[36] === tmp32) {
                      let tmp34;
                      if (cResult[37] === tmp33) {
                        tmp34 = cResult[38];
                      }
                      return tmp34;
                    }
                  }
                }
              }
              VisualEffectViewIOSDefault;
              const merged2 = Object.assign(tmp7);
              const tmp41 = <tmp37 ref={ref} blurEffectName={tmp27} blurAmount={tmp32} tintColor={tmp33} />;
              cResult[33] = tmp7;
              cResult[34] = ref;
              cResult[35] = tmp27;
              cResult[36] = tmp32;
              cResult[37] = tmp33;
              cResult[38] = tmp41;
              tmp34 = tmp41;
            }
          }
          let tmp29 = blurEffectNameOverride;
          if (blurEffectNameOverride == null) {
            tmp29 = getIOSBlurEffect(tmp6, str);
          }
          cResult[29] = blurEffectNameOverride;
          cResult[30] = str;
          cResult[31] = tmp6;
          cResult[32] = tmp29;
          tmp27 = tmp29;
        }
      }
    }
  }
  const obj5 = { blurTheme: tmp6, blurStyle: str, style, android_fallbackColor: tmp5 };
  cResult[9] = tmp5;
  cResult[10] = str;
  cResult[11] = tmp6;
  cResult[12] = style;
  cResult[13] = obj5;
  tmp17 = obj5;
}) : ((blurAmount, ref) => {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let android_softwareBlurDisabled;
  let blurAmountOverride;
  let blurEffectNameOverride;
  let blurStyle;
  let blurTheme;
  let tintColor;
  let tintColorOverride;
  let tmp10Result;
  ({ blurTheme, blurStyle } = blurAmount);
  if (blurStyle === undefined) {
    blurStyle = "default";
  }
  let num = blurAmount.blurAmount;
  if (num === undefined) {
    num = 1;
  }
  ({ tintColor, android_blurTargetViewNativeId, android_softwareBlurDisabled, android_fallbackColor } = blurAmount);
  if (android_softwareBlurDisabled === undefined) {
    android_softwareBlurDisabled = false;
  }
  const merged = Object.assign(blurAmount, Object.assign({ blurTheme: 0, blurStyle: 0, blurAmount: 0, tintColor: 0, android_fallbackColor: 0, android_blurTargetViewNativeId: 0, android_softwareBlurDisabled: 0 }));
  const style = merged.style;
  ({ blurAmountOverride, tintColorOverride, blurEffectNameOverride } = closure_6());
  closure_6();
  let tmp6 = closure_9;
  const tmp3 = closure_11({ blurTheme, blurStyle, style, android_fallbackColor });
  const tmp4 = closure_12(blurTheme, blurStyle);
  if (closure_9) {
    let tmp7 = null == android_blurTargetViewNativeId;
    if (!tmp7) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !VisualEffectViewAndroid.MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp7 = true === android_softwareBlurDisabled;
    }
    tmp6 = tmp7;
  }
  if (tmp6) {
    const merged1 = Object.assign(merged);
    tmp10Result = <View ref={ref} style={tmp3} />;
  } else if (closure_9) {
    VisualEffectViewAndroidDefault;
    if (blurAmountOverride == null) {
      if (null == num) {
        if ("light" === blurTheme) {
          blurTheme = ThemeTypes.LIGHT;
        } else if ("dark" === blurTheme) {
          blurTheme = ThemeTypes.DARK;
        }
        let num3 = 1;
        if (blurTheme === ThemeTypes.LIGHT) {
          num3 = 0.85;
        }
        num = num3;
      }
      blurAmountOverride = num;
    }
    if (tintColorOverride == null) {
      tintColorOverride = tintColor;
    }
    const merged2 = Object.assign(merged);
    tmp10Result = <tmp11Result ref={ref} blurAmount={blurAmountOverride} blurTintIOSParityCompensationColor={tmp4} tintColor={tintColorOverride} blurTargetViewNativeId={android_blurTargetViewNativeId} />;
  } else {
    VisualEffectViewIOSDefault;
    if (blurEffectNameOverride == null) {
      blurEffectNameOverride = getIOSBlurEffect(blurTheme, blurStyle);
    }
    let tmp15 = blurAmountOverride;
    if (blurAmountOverride == null) {
      tmp15 = num;
    }
    let tmp16 = tintColorOverride;
    if (tintColorOverride == null) {
      tmp16 = tintColor;
    }
    const merged3 = Object.assign(merged);
    tmp10Result = <tmp11Result2 ref={ref} blurEffectName={blurEffectNameOverride} blurAmount={tmp15} tintColor={tmp16} />;
  }
  return tmp10Result;
}));
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectView.tsx");

export default forwardRefResult;
export { normalizeBlurTheme };
export { isBlurThemeLight };
export { isBlurDisabled };