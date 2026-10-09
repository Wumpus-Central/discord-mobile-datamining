// === Module 5364: VisualEffectView ===

// Module 5364 (VisualEffectView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken2 from "useToken" /* 4779 */;
import VisualEffectViewIOS from "VisualEffectViewIOS" /* 5366 */;
import VisualEffectViewAndroid from "VisualEffectViewAndroid" /* 5369 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const VisualEffectViewIOSDefault = VisualEffectViewIOS;
const VisualEffectViewAndroidDefault = VisualEffectViewAndroid;

require = fn;
function getIOSBlurEffect(blurTheme, blurStyle) {
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
      let str3 = str6;
    }
    return str3;
  }
  if ("light" === DARK) {
    let DARK2 = ThemeTypes.LIGHT;
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
let closure_3 = ["blurTheme", "blurStyle", "blurAmount", "tintColor", "android_fallbackColor", "android_blurTargetViewNativeId", "android_softwareBlurDisabled", "ref"];
const View = fn(17).View;
let closure_6 = fn(5365).useVisualEffectViewOverrides;
const ThemeTypes = fn(1085).ThemeTypes;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1382);
let closure_9 = PlatformUtils.isAndroid();
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAndroidDefaultFallbackStyle(arg0) {
  const cResult = c.c(10);
  ({ style, blurTheme, android_fallbackColor } = arg0);
  if (cResult[0] !== blurTheme) {
    if ("light" === blurTheme) {
      let DARK = ThemeTypes.LIGHT;
    } else {
      DARK = blurTheme;
      if ("dark" === blurTheme) {
        DARK = ThemeTypes.DARK;
      }
    }
    cResult[0] = blurTheme;
    cResult[1] = DARK;
  } else {
    const token = useToken2.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_DEFAULT, tmp5);
    const tmpResult = useToken2;
    let token1 = useToken2.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, tmp5);
    if ("default" === tmp4) {
      token1 = token;
    }
    if (cResult[2] !== token1) {
      const obj2 = { backgroundColor: token1 };
      cResult[2] = token1;
      cResult[3] = obj2;
      let tmp12 = obj2;
    } else {
      tmp12 = cResult[3];
    }
    if (cResult[4] !== android_fallbackColor) {
      let tmp15;
      if (null != android_fallbackColor) {
        const obj3 = { backgroundColor: android_fallbackColor };
        tmp15 = obj3;
      }
      cResult[4] = android_fallbackColor;
      cResult[5] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === tmp12) {
      if (cResult[7] === tmp13) {
        if (cResult[8] === style) {
          let tmp16 = cResult[9];
        }
        return tmp16;
      }
    }
    const items = [tmp12, style, tmp13];
    cResult[6] = tmp12;
    cResult[7] = tmp13;
    cResult[8] = style;
    cResult[9] = items;
    tmp16 = items;
    const tmpResult2 = useToken2;
  }
}) : (function useAndroidDefaultFallbackStyle(arg0) {
  ({ blurTheme, android_fallbackColor } = arg0);
  ({ style, blurStyle } = arg0);
  if ("light" === blurTheme) {
    blurTheme = ThemeTypes.LIGHT;
  } else if ("dark" === blurTheme) {
    blurTheme = ThemeTypes.DARK;
  }
  const token = useToken2.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_DEFAULT, blurTheme);
  let token1 = useToken2.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, blurTheme);
  if ("default" === blurStyle) {
    token1 = token;
  }
  const items = [{ backgroundColor: token1 }, style, ];
  let tmp5;
  if (null != android_fallbackColor) {
    const obj3 = { backgroundColor: android_fallbackColor };
    tmp5 = obj3;
  }
  items[2] = tmp5;
  return items;
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAndroidIOSParityTintColor(arg0, arg1) {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    if ("light" === arg0) {
      let DARK = ThemeTypes.LIGHT;
    } else {
      DARK = arg0;
      if ("dark" === arg0) {
        DARK = ThemeTypes.DARK;
      }
    }
    cResult[0] = arg0;
    cResult[1] = DARK;
  } else {
    const token = useToken2.useToken(nativeDefault.colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, cResult[1]);
    const tmpResult = useToken2;
    const useToken = useToken2.useToken;
    if ("default" === arg1) {
      return token;
    } else {
      return "ultra-thin" === arg1 ? tmp10 : undefined;
    }
    const tmpResult2 = useToken2;
  }
}) : (function useAndroidIOSParityTintColor(DARK, arg1) {
  if ("light" === DARK) {
    DARK = ThemeTypes.LIGHT;
  } else if ("dark" === DARK) {
    DARK = ThemeTypes.DARK;
  }
  const token = useToken2.useToken(nativeDefault.colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, DARK);
  useToken2;
  if ("default" === arg1) {
    return token;
  } else {
    return "ultra-thin" === arg1 ? tmp5 : undefined;
  }
});
ReactCompilerGating = fn(558);
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
  if (closure_9) {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VisualEffectView(arg0) {
  const cResult = c.c(40);
  if (cResult[0] !== arg0) {
    ({ blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, android_softwareBlurDisabled, ref } = arg0);
    const tmp15 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = android_blurTargetViewNativeId;
    cResult[2] = android_fallbackColor;
    cResult[3] = blurTheme;
    cResult[4] = tmp15;
    cResult[5] = ref;
    cResult[6] = blurStyle;
    cResult[7] = blurAmount;
    cResult[8] = android_softwareBlurDisabled;
    cResult[9] = tintColor;
    let tmp12 = tintColor;
    let tmp11 = android_softwareBlurDisabled;
    let tmp10 = blurAmount;
    let tmp9 = blurStyle;
    let tmp8 = ref;
    let tmp7 = tmp15;
    let tmp6 = blurTheme;
    let tmp5 = android_fallbackColor;
    let tmp4 = android_blurTargetViewNativeId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
  }
  let str = "default";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  let num11 = 1;
  let num12 = 1;
  if (undefined !== tmp10) {
    num12 = tmp10;
  }
  let tmp16 = undefined !== tmp11 && tmp11;
  const style = tmp7.style;
  ({ blurAmountOverride, tintColorOverride, blurEffectNameOverride } = closure_6());
  if (cResult[10] === tmp5) {
    if (cResult[11] === str) {
      if (cResult[12] === tmp6) {
        if (cResult[13] === style) {
          let tmp18 = cResult[14];
        }
        const tmp20 = closure_11(tmp18);
        const tmp22 = closure_12(tmp6, str);
        let tmp24 = closure_9;
        if (closure_9) {
          let tmp26 = null == tmp4;
          if (!tmp26) {
            if (tmp16) {
              tmp16 = !VisualEffectViewAndroid.MODERN_ANDROID_BLURRING_AVAILABLE;
            }
            tmp26 = true === tmp16;
          }
          tmp24 = tmp26;
        }
        if (tmp24) {
          if (cResult[15] === tmp20) {
            if (cResult[16] === tmp7) {
              if (cResult[17] === tmp8) {
                let tmp58 = cResult[18];
              }
              return tmp58;
            }
          }
          const obj2 = { ref: tmp8 };
          const merged = Object.assign(tmp7);
          obj2.style = tmp20;
          const tmp64 = <View ref={tmp8} />;
          cResult[15] = tmp20;
          cResult[16] = tmp7;
          cResult[17] = tmp8;
          cResult[18] = tmp64;
          tmp58 = tmp64;
        } else if (closure_9) {
          if (cResult[19] === num12) {
            if (cResult[20] === blurAmountOverride) {
              if (cResult[21] === tmp6) {
                let tmp42 = cResult[22];
              }
              if (tintColorOverride == null) {
                tintColorOverride = tmp12;
              }
              if (cResult[23] === tmp4) {
                if (cResult[24] === tmp22) {
                  if (cResult[25] === tmp7) {
                    if (cResult[26] === tmp8) {
                      if (cResult[27] === tmp42) {
                        if (cResult[28] === tintColorOverride) {
                          let tmp50 = cResult[29];
                        }
                        return tmp50;
                      }
                    }
                  }
                }
              }
              const obj3 = { ref: tmp8, blurAmount: tmp42, blurTintIOSParityCompensationColor: tmp22, tintColor: tintColorOverride, blurTargetViewNativeId: tmp4 };
              const merged1 = Object.assign(tmp7);
              const tmp57 = jsx(VisualEffectViewAndroidDefault, { ref: tmp8, blurAmount: tmp42, blurTintIOSParityCompensationColor: tmp22, tintColor: tintColorOverride, blurTargetViewNativeId: tmp4 });
              cResult[23] = tmp4;
              cResult[24] = tmp22;
              cResult[25] = tmp7;
              cResult[26] = tmp8;
              cResult[27] = tmp42;
              cResult[28] = tintColorOverride;
              cResult[29] = tmp57;
              tmp50 = tmp57;
            }
          }
          let tmp44 = blurAmountOverride;
          if (blurAmountOverride == null) {
            let tmp45 = num12;
            if (null == num12) {
              if ("light" === tmp6) {
                let DARK = ThemeTypes.LIGHT;
              } else {
                DARK = tmp6;
                if ("dark" === tmp6) {
                  DARK = ThemeTypes.DARK;
                }
              }
              if (DARK === ThemeTypes.LIGHT) {
                num11 = 0.85;
              }
              tmp45 = num11;
            }
            tmp44 = tmp45;
          }
          cResult[19] = num12;
          cResult[20] = blurAmountOverride;
          cResult[21] = tmp6;
          cResult[22] = tmp44;
          tmp42 = tmp44;
        } else {
          if (cResult[30] === blurEffectNameOverride) {
            if (cResult[31] === str) {
              if (cResult[32] === tmp6) {
                let tmp27 = cResult[33];
              }
              let tmp32 = blurAmountOverride;
              if (blurAmountOverride == null) {
                tmp32 = num12;
              }
              let tmp33 = tintColorOverride;
              if (tintColorOverride == null) {
                tmp33 = tmp12;
              }
              if (cResult[34] === tmp7) {
                if (cResult[35] === tmp8) {
                  if (cResult[36] === tmp27) {
                    if (cResult[37] === tmp32) {
                      if (cResult[38] === tmp33) {
                        let tmp34 = cResult[39];
                      }
                      return tmp34;
                    }
                  }
                }
              }
              const obj4 = { ref: tmp8, blurEffectName: tmp27, blurAmount: tmp32, tintColor: tmp33 };
              const merged2 = Object.assign(tmp7);
              const tmp41 = jsx(VisualEffectViewIOSDefault, { ref: tmp8, blurEffectName: tmp27, blurAmount: tmp32, tintColor: tmp33 });
              cResult[34] = tmp7;
              cResult[35] = tmp8;
              cResult[36] = tmp27;
              cResult[37] = tmp32;
              cResult[38] = tmp33;
              cResult[39] = tmp41;
              tmp34 = tmp41;
            }
          }
          let tmp29 = blurEffectNameOverride;
          if (blurEffectNameOverride == null) {
            tmp29 = getIOSBlurEffect(tmp6, str);
          }
          cResult[30] = blurEffectNameOverride;
          cResult[31] = str;
          cResult[32] = tmp6;
          cResult[33] = tmp29;
          tmp27 = tmp29;
        }
      }
    }
  }
  const obj5 = { blurTheme: tmp6, blurStyle: str, style, android_fallbackColor: tmp5 };
  cResult[10] = tmp5;
  cResult[11] = str;
  cResult[12] = tmp6;
  cResult[13] = style;
  cResult[14] = obj5;
  tmp18 = obj5;
  const tmp17 = closure_6();
}) : (function VisualEffectView(blurAmount) {
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
  const merged = Object.assign(blurAmount, Object.assign({ blurTheme: 0, blurStyle: 0, blurAmount: 0, tintColor: 0, android_fallbackColor: 0, android_blurTargetViewNativeId: 0, android_softwareBlurDisabled: 0, ref: 0 }));
  ({ blurAmountOverride, tintColorOverride, blurEffectNameOverride } = closure_6());
  const tmp2 = closure_6();
  let tmp6 = closure_9;
  const tmp3 = closure_11({ blurTheme, blurStyle, style: merged.style, android_fallbackColor });
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
    const obj2 = { ref };
    const merged1 = Object.assign(merged);
    obj2.style = tmp3;
    let tmp10Result = <View ref={ref} />;
  } else if (closure_9) {
    const obj3 = { ref, blurAmount: null, blurTintIOSParityCompensationColor: null, tintColor: null, blurTargetViewNativeId: null };
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
    obj3.blurAmount = blurAmountOverride;
    obj3.blurTintIOSParityCompensationColor = tmp4;
    if (tintColorOverride == null) {
      tintColorOverride = tintColor;
    }
    obj3.tintColor = tintColorOverride;
    obj3.blurTargetViewNativeId = android_blurTargetViewNativeId;
    const merged2 = Object.assign(merged);
    tmp10Result = jsx(VisualEffectViewAndroidDefault, { ref, blurAmount: null, blurTintIOSParityCompensationColor: null, tintColor: null, blurTargetViewNativeId: null });
    const tmp11Result = VisualEffectViewAndroidDefault;
  } else {
    const obj = { ref, blurEffectName: null, blurAmount: null, tintColor: null };
    if (blurEffectNameOverride == null) {
      blurEffectNameOverride = getIOSBlurEffect(blurTheme, blurStyle);
    }
    obj.blurEffectName = blurEffectNameOverride;
    let tmp15 = blurAmountOverride;
    if (blurAmountOverride == null) {
      tmp15 = num;
    }
    obj.blurAmount = tmp15;
    let tmp16 = tintColorOverride;
    if (tintColorOverride == null) {
      tmp16 = tintColor;
    }
    obj.tintColor = tmp16;
    const merged3 = Object.assign(merged);
    tmp10Result = jsx(VisualEffectViewIOSDefault, { ref, blurEffectName: null, blurAmount: null, tintColor: null });
    const tmp11Result2 = VisualEffectViewIOSDefault;
  }
  return tmp10Result;
});
export { normalizeBlurTheme };
export { isBlurThemeLight };
export { isBlurDisabled };