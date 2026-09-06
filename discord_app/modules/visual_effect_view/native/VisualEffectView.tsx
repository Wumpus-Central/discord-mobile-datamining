// discord_app/modules/visual_effect_view/native/VisualEffectView.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import VisualEffectViewIOS from "VisualEffectViewIOS.tsx";
import VisualEffectViewAndroid from "VisualEffectViewAndroid.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const VisualEffectViewAndroidDefault = VisualEffectViewAndroid;

require = fn;
const View = fn(17).View;
let closure_4 = fn(4966).useVisualEffectViewOverrides;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
let closure_6 = PlatformUtils.isAndroid();
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
  const merged = Object.assign(
    blurAmount,
    Object.assign({
      blurTheme: 0,
      blurStyle: 0,
      blurAmount: 0,
      tintColor: 0,
      android_fallbackColor: 0,
      android_blurTargetViewNativeId: 0,
      android_softwareBlurDisabled: 0,
    }),
  );
  ({ blurAmountOverride, tintColorOverride, blurEffectNameOverride } = closure_4());
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_DEFAULT, blurTheme);
  let obj1 = useToken;
  let token1 = obj1.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, blurTheme);
  if ("default" === blurStyle) {
    token1 = token;
  }
  const items = [{ backgroundColor: token1 }, merged.style];
  let tmp8;
  if (null != android_fallbackColor) {
    obj = { backgroundColor: android_fallbackColor };
    tmp8 = obj;
  }
  items[2] = tmp8;
  let tmp3Result = useToken;
  const token2 = tmp3Result.useToken(nativeDefault.colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, blurTheme);
  tmp3Result = useToken;
  let token3 = tmp3Result.useToken(nativeDefault.colors.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN, blurTheme);
  if ("default" === blurStyle) {
    token3 = token2;
  }
  let tmp12 = closure_6;
  if (closure_6) {
    let tmp13 = null == android_blurTargetViewNativeId;
    if (!tmp13) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !VisualEffectViewAndroid.MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp13 = true === android_softwareBlurDisabled;
    }
    tmp12 = tmp13;
  }
  if (tmp12) {
    obj = { ref };
    const merged1 = Object.assign(merged);
    obj.style = items;
    let tmp14Result = <View ref={ref} />;
  } else if (closure_6) {
    obj1 = {
      ref,
      blurAmount: null,
      blurTintIOSParityCompensationColor: null,
      tintColor: null,
      blurTargetViewNativeId: null,
    };
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
    obj1.blurAmount = blurAmountOverride;
    obj1.blurTintIOSParityCompensationColor = token3;
    if (tintColorOverride == null) {
      tintColorOverride = tintColor;
    }
    obj1.tintColor = tintColorOverride;
    obj1.blurTargetViewNativeId = android_blurTargetViewNativeId;
    const merged2 = Object.assign(merged);
    tmp14Result = jsx(VisualEffectViewAndroidDefault, {
      ref,
      blurAmount: null,
      blurTintIOSParityCompensationColor: null,
      tintColor: null,
      blurTargetViewNativeId: null,
    });
    const tmp5Result = VisualEffectViewAndroidDefault;
  } else {
    const obj2 = { ref, blurEffectName: null, blurAmount: null, tintColor: null };
    if (blurEffectNameOverride != null) {
      obj2.blurEffectName = blurEffectNameOverride;
      let tmp17 = blurAmountOverride;
      if (blurAmountOverride == null) {
        tmp17 = num;
      }
      obj2.blurAmount = tmp17;
      let tmp18 = tintColorOverride;
      if (tintColorOverride == null) {
        tmp18 = tintColor;
      }
      obj2.tintColor = tmp18;
      const merged3 = Object.assign(merged);
      tmp14Result = <tmp15 {...obj2} />;
    } else {
      if (!VisualEffectViewIOS.MODERN_IOS_BLURS_EFFECTS_AVAILABLE) {
        let str2 = "UIBlurEffectStyleDark";
        if ("light" === blurTheme) {
          str2 = "UIBlurEffectStyleLight";
        }
      }
      let str4 = "UIBlurEffectStyleSystemUltraThinMaterialDark";
      if ("light" === blurTheme) {
        str4 = "UIBlurEffectStyleSystemUltraThinMaterialLight";
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
        android_softwareBlurDisabled = !VisualEffectViewAndroid.MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp4 = true === android_softwareBlurDisabled;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
