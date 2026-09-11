// === Module 5016: VisualEffectView ===

// Module 5016 (VisualEffectView)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4308 */;
import VisualEffectViewIOS from "VisualEffectViewIOS" /* 5018 */;
import VisualEffectViewAndroid from "VisualEffectViewAndroid" /* 5021 */;
import noop from "module_19" /* 19 */;

const VisualEffectViewAndroidDefault = VisualEffectViewAndroid;

require = fn;
const View = fn(17).View;
let closure_4 = fn(5017).useVisualEffectViewOverrides;
const ThemeTypes = fn(1074).ThemeTypes;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
let closure_7 = PlatformUtils.isAndroid();
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectView.tsx");

export default noop.forwardRef(function VisualEffectView(blurAmount, ref) {
  ({ blurTheme, blurStyle } = blurAmount);
  if (blurStyle === undefined) {
    blurStyle = "default";
  }
  let num = blurAmount.blurAmount;
  if (num === undefined) {
    num = 1;
  }
  ({ tintColor, android_fallbackColor, android_blurTargetViewNativeId, android_softwareBlurDisabled } = blurAmount);
  if (android_softwareBlurDisabled === undefined) {
    android_softwareBlurDisabled = false;
  }
  const merged = Object.assign(blurAmount, Object.assign({ blurTheme: 0, blurStyle: 0, blurAmount: 0, tintColor: 0, android_fallbackColor: 0, android_blurTargetViewNativeId: 0, android_softwareBlurDisabled: 0 }));
  ({ blurAmountOverride, tintColorOverride, blurEffectNameOverride } = closure_4());
  if ("light" === blurTheme) {
    let DARK = ThemeTypes.LIGHT;
  } else {
    DARK = blurTheme;
    if ("dark" === blurTheme) {
      DARK = ThemeTypes.DARK;
    }
  }
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_DEFAULT, DARK);
  let obj1 = useToken;
  let token1 = obj1.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, DARK);
  if ("default" === blurStyle) {
    token1 = token;
  }
  const items = [{ backgroundColor: token1 }, merged.style, ];
  let tmp11;
  if (null != android_fallbackColor) {
    obj = { backgroundColor: android_fallbackColor };
    tmp11 = obj;
  }
  items[2] = tmp11;
  if ("light" === blurTheme) {
    let DARK2 = ThemeTypes.LIGHT;
  } else {
    DARK2 = blurTheme;
    if ("dark" === blurTheme) {
      DARK2 = ThemeTypes.DARK;
    }
  }
  let tmp6Result = useToken;
  const token2 = tmp6Result.useToken(nativeDefault.colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, DARK2);
  tmp6Result = useToken;
  let token3 = tmp6Result.useToken(nativeDefault.colors.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN, DARK2);
  if ("default" === blurStyle) {
    token3 = token2;
  }
  let tmp17 = closure_7;
  if (closure_7) {
    let tmp18 = null == android_blurTargetViewNativeId;
    if (!tmp18) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !VisualEffectViewAndroid.MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp18 = true === android_softwareBlurDisabled;
    }
    tmp17 = tmp18;
  }
  if (tmp17) {
    obj = { ref };
    const merged1 = Object.assign(merged);
    obj.style = items;
    let tmp19Result = <View ref={ref} />;
  } else if (closure_7) {
    obj1 = { ref, blurAmount: null, blurTintIOSParityCompensationColor: null, tintColor: null, blurTargetViewNativeId: null };
    if (blurAmountOverride == null) {
      if (null == num) {
        if (tmp3) {
          blurTheme = ThemeTypes.LIGHT;
        } else if ("dark" === blurTheme) {
          blurTheme = ThemeTypes.DARK;
        }
        let num2 = 1;
        if (blurTheme === ThemeTypes.LIGHT) {
          num2 = 0.85;
        }
        num = num2;
      }
      blurAmountOverride = num;
    }
    obj1.blurAmount = blurAmountOverride;
    obj1.blurTintIOSParityCompensationColor = token3;
    if (tintColorOverride == null) {
      tintColorOverride = tintColor;
    }
    obj1.tintColor = tintColorOverride;
    obj1.blurTargetViewNativeId = android_blurTargetViewNativeId;
    const merged2 = Object.assign(merged);
    tmp19Result = jsx(VisualEffectViewAndroidDefault, { ref, blurAmount: null, blurTintIOSParityCompensationColor: null, tintColor: null, blurTargetViewNativeId: null });
    const tmp8Result = VisualEffectViewAndroidDefault;
  } else {
    const obj2 = { ref, blurEffectName: null, blurAmount: null, tintColor: null };
    if (blurEffectNameOverride != null) {
      obj2.blurEffectName = blurEffectNameOverride;
      let tmp28 = blurAmountOverride;
      if (blurAmountOverride == null) {
        tmp28 = num;
      }
      obj2.blurAmount = tmp28;
      let tmp29 = tintColorOverride;
      if (tintColorOverride == null) {
        tmp29 = tintColor;
      }
      obj2.tintColor = tmp29;
      const merged3 = Object.assign(merged);
      tmp19Result = <tmp20 {...obj2} />;
    } else {
      if (!VisualEffectViewIOS.MODERN_IOS_BLURS_EFFECTS_AVAILABLE) {
        if (tmp3) {
          let DARK3 = ThemeTypes.LIGHT;
        } else {
          DARK3 = blurTheme;
          if ("dark" === blurTheme) {
            DARK3 = ThemeTypes.DARK;
          }
        }
        let str5 = "UIBlurEffectStyleDark";
        if (DARK3 === ThemeTypes.LIGHT) {
          str5 = "UIBlurEffectStyleLight";
        }
      }
      if (tmp3) {
        let DARK4 = ThemeTypes.LIGHT;
      } else {
        DARK4 = blurTheme;
        if ("dark" === blurTheme) {
          DARK4 = ThemeTypes.DARK;
        }
      }
      let str7 = "UIBlurEffectStyleSystemUltraThinMaterialDark";
      if (DARK4 === ThemeTypes.LIGHT) {
        str7 = "UIBlurEffectStyleSystemUltraThinMaterialLight";
      }
    }
  }
  return tmp19Result;
});
export const normalizeBlurTheme = function normalizeBlurTheme(blurTheme) {
  let DARK = blurTheme;
  if ("light" === blurTheme) {
    DARK = ThemeTypes.LIGHT;
  } else if ("dark" === DARK) {
    DARK = ThemeTypes.DARK;
  }
  return DARK;
};
export const isBlurThemeLight = function isBlurThemeLight(blurTheme) {
  let DARK = blurTheme;
  if ("light" === blurTheme) {
    DARK = ThemeTypes.LIGHT;
  } else if ("dark" === DARK) {
    DARK = ThemeTypes.DARK;
  }
  return DARK === ThemeTypes.LIGHT;
};
export const isBlurDisabled = function isBlurDisabled(merged) {
  let android_softwareBlurDisabled = merged.android_softwareBlurDisabled;
  let tmp2 = closure_7;
  if (closure_7) {
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
};