// === Module 5780: VisualEffectView ===

// Module 5780 (VisualEffectView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken2 from "useToken" /* 4586 */;
import VisualEffectViewIOS from "VisualEffectViewIOS" /* 5782 */;
import VisualEffectViewAndroid from "VisualEffectViewAndroid" /* 5785 */;
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
let closure_3 = ["blurTheme", "blurStyle", "blurAmount", "tintColor", "android_fallbackColor", "android_blurTargetViewNativeId", "android_softwareBlurDisabled"];
const View = fn(17).View;
let closure_6 = fn(5781).useVisualEffectViewOverrides;
const ThemeTypes = fn(1085).ThemeTypes;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1369);
let closure_9 = PlatformUtils.isAndroid();
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
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
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
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
}) : ((DARK, arg1) => {
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

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(39);
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
    let tmp11 = tintColor;
    let tmp10 = android_softwareBlurDisabled;
    let tmp9 = blurAmount;
    let tmp8 = blurStyle;
    let tmp7 = tmp14;
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
  if (cResult[9] === tmp5) {
    if (cResult[10] === str) {
      if (cResult[11] === tmp6) {
        if (cResult[12] === style) {
          let tmp17 = cResult[13];
        }
        const tmp19 = closure_11(tmp17);
        const tmp21 = closure_12(tmp6, str);
        let tmp23 = closure_9;
        if (closure_9) {
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
              if (cResult[16] === ref) {
                let tmp58 = cResult[17];
              }
              return tmp58;
            }
          }
          const obj2 = { ref };
          const merged = Object.assign(tmp7);
          obj2.style = tmp19;
          const tmp64 = <View ref={ref} />;
          cResult[14] = tmp19;
          cResult[15] = tmp7;
          cResult[16] = ref;
          cResult[17] = tmp64;
          tmp58 = tmp64;
        } else if (closure_9) {
          if (cResult[18] === num11) {
            if (cResult[19] === blurAmountOverride) {
              if (cResult[20] === tmp6) {
                let tmp42 = cResult[21];
              }
              if (tintColorOverride == null) {
                tintColorOverride = tmp11;
              }
              if (cResult[22] === tmp4) {
                if (cResult[23] === tmp21) {
                  if (cResult[24] === tmp7) {
                    if (cResult[25] === ref) {
                      if (cResult[26] === tmp42) {
                        if (cResult[27] === tintColorOverride) {
                          let tmp50 = cResult[28];
                        }
                        return tmp50;
                      }
                    }
                  }
                }
              }
              const obj3 = { ref, blurAmount: tmp42, blurTintIOSParityCompensationColor: tmp21, tintColor: tintColorOverride, blurTargetViewNativeId: tmp4 };
              const merged1 = Object.assign(tmp7);
              const tmp57 = jsx(VisualEffectViewAndroidDefault, { ref, blurAmount: tmp42, blurTintIOSParityCompensationColor: tmp21, tintColor: tintColorOverride, blurTargetViewNativeId: tmp4 });
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
              if ("light" === tmp6) {
                let DARK = ThemeTypes.LIGHT;
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
              if (cResult[31] === tmp6) {
                let tmp27 = cResult[32];
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
                      if (cResult[37] === tmp33) {
                        let tmp34 = cResult[38];
                      }
                      return tmp34;
                    }
                  }
                }
              }
              const obj4 = { ref, blurEffectName: tmp27, blurAmount: tmp32, tintColor: tmp33 };
              const merged2 = Object.assign(tmp7);
              const tmp41 = jsx(VisualEffectViewIOSDefault, { ref, blurEffectName: tmp27, blurAmount: tmp32, tintColor: tmp33 });
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
  const tmp16 = closure_6();
}) : ((blurAmount, ref) => {
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
}));
export { normalizeBlurTheme };
export { isBlurThemeLight };
export { isBlurDisabled };