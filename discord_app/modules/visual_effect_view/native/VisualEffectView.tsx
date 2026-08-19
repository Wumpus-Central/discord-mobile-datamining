// discord_app/modules/visual_effect_view/native/VisualEffectView.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import BLUR_EFFECT_NAMES from "VisualEffectViewIOS.tsx";
import MODERN_ANDROID_BLURRING_AVAILABLE from "VisualEffectViewAndroid.tsx";
import MODERN_ANDROID_BLURRING_AVAILABLEDefault from "VisualEffectViewAndroid.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { useVisualEffectViewOverrides as closure_4 } from "overrides/VEVOOStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import obj132 from "../../../utils/PlatformUtils.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = fn;
let closure_6 = obj132.isAndroid();
const result = obj132.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectView.tsx");

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
  let tmp3Result = map;
  const token2 = tmp3Result.useToken(ThemesDefault.colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, blurTheme);
  tmp3Result = map;
  let token3 = tmp3Result.useToken(ThemesDefault.colors.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN, blurTheme);
  if ("default" === blurStyle) {
    token3 = token2;
  }
  let tmp12 = closure_6;
  if (closure_6) {
    let tmp13 = null == android_blurTargetViewNativeId;
    if (!tmp13) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !MODERN_ANDROID_BLURRING_AVAILABLE.MODERN_ANDROID_BLURRING_AVAILABLE;
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
    let tmp14Result = <View ref={null} />;
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
    tmp14Result = jsx(MODERN_ANDROID_BLURRING_AVAILABLEDefault, { ref: null, blurAmount: null, blurTintIOSParityCompensationColor: null, tintColor: null, blurTargetViewNativeId: null });
    const tmp5Result = MODERN_ANDROID_BLURRING_AVAILABLEDefault;
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
      tmp14Result = <tmp15 {...obj2} />;
    } else {
      if (!BLUR_EFFECT_NAMES.MODERN_IOS_BLURS_EFFECTS_AVAILABLE) {
      }
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