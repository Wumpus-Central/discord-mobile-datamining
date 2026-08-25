// === Module 4805: isBlurDisabled ===

// Module 4805 (isBlurDisabled)
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4101 */;
import MODERN_ANDROID_BLURRING_AVAILABLE from "MODERN_ANDROID_BLURRING_AVAILABLE" /* 4810 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { useVisualEffectViewOverrides as closure_4 } from "useVisualEffectViewOverrides" /* 4806 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 500 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_6 = set.isAndroid();
const result = set.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectView.tsx");

export default importAllResult.forwardRef(function VisualEffectView(blurAmount) {
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
  const merged = Object.assign(blurAmount, Object.create(null));
  ({ blurAmountOverride, tintColorOverride, blurEffectNameOverride } = callback());
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.LEGACY_BLUR_FALLBACK_DEFAULT, blurTheme);
  obj1 = map;
  let token1 = obj1.useToken(ThemesDefault.colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, blurTheme);
  if ("default" === blurStyle) {
    token1 = token;
  }
  const items = [{ backgroundColor: token1 }, merged.style, ];
  let tmp8;
  if (null != android_fallbackColor) {
    obj = { backgroundColor: null };
    obj[0] = android_fallbackColor;
    tmp8 = obj;
  }
  items[2] = tmp8;
  let tmp3Result = tmp3(4101);
  const token2 = tmp3Result.useToken(tmp5(712).colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, blurTheme);
  tmp3Result = tmp3(4101);
  let token3 = tmp3Result.useToken(tmp5(712).colors.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN, blurTheme);
  if ("default" === blurStyle) {
    token3 = token2;
  }
  let tmp12 = closure_6;
  if (closure_6) {
    let tmp13 = null == android_blurTargetViewNativeId;
    if (!tmp13) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !tmp3(4810).MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp13 = true === android_softwareBlurDisabled;
    }
    tmp12 = tmp13;
  }
  if (tmp12) {
    obj = { ref: null };
    obj[0] = arg1;
    const merged1 = Object.assign(merged);
    obj.style = items;
    let tmp14Result = tmp14(View, obj);
  } else if (closure_6) {
    obj1 = { ref: null, blurAmount: null, blurTintIOSParityCompensationColor: null, tintColor: null, blurTargetViewNativeId: null };
    obj1[0] = arg1;
    if (blurAmountOverride == null) {
      if (null == num) {
        let num2 = 1;
        if ("light" === blurTheme) {
          num2 = 0.85;
        }
        num = num2;
      }
      blurAmountOverride = num;
    }
    obj1[1] = blurAmountOverride;
    obj1[2] = token3;
    if (tintColorOverride == null) {
      tintColorOverride = tintColor;
    }
    obj1[3] = tintColorOverride;
    obj1[4] = android_blurTargetViewNativeId;
    const merged2 = Object.assign(merged);
    tmp14Result = tmp14(tmp5(4810), obj1);
    const tmp5Result = tmp5(4810);
  } else {
    const obj2 = { ref: null, blurEffectName: null, blurAmount: null, tintColor: null };
    obj2[0] = arg1;
    if (blurEffectNameOverride != null) {
      obj2[1] = blurEffectNameOverride;
      let tmp17 = blurAmountOverride;
      if (blurAmountOverride == null) {
        tmp17 = num;
      }
      obj2[2] = tmp17;
      let tmp18 = tintColorOverride;
      if (tintColorOverride == null) {
        tmp18 = tintColor;
      }
      obj2[3] = tmp18;
      const merged3 = Object.assign(merged);
      tmp14Result = tmp14(tmp15, obj2);
    } else {
      if (!tmp3(4807).MODERN_IOS_BLURS_EFFECTS_AVAILABLE) {
        let str2 = "UIBlurEffectStyleDark";
        if ("light" === blurTheme) {
          str2 = "UIBlurEffectStyleLight";
        }
      }
      let str4 = "UIBlurEffectStyleSystemUltraThinMaterialDark";
      if ("light" === blurTheme) {
        str4 = "UIBlurEffectStyleSystemUltraThinMaterialLight";
      }
      str2 = str4;
    }
  }
  return tmp14Result;
});
export const isBlurDisabled = function isBlurDisabled(merged) {
  let android_softwareBlurDisabled = merged.android_softwareBlurDisabled;
  let tmp2 = closure_6;
  if (closure_6) {
    let tmp4 = null == tmp;
    if (!tmp4) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !MODERN_ANDROID_BLURRING_AVAILABLE.MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp4 = true === android_softwareBlurDisabled;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};