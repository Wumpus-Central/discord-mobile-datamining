// discord_app/modules/visual_effect_view/native/VisualEffectView.tsx
import { View } from "get ActivityIndicator";
import { useVisualEffectViewOverrides as closure_4 } from "useVisualEffectViewOverrides";
import { jsx } from "jsxProd";
import set from "set";
import importAllResult from "noop";
import set from "useVisualEffectViewOverrides";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";
import { MODERN_ANDROID_BLURRING_AVAILABLE } from "VisualEffectViewAndroid.tsx";

const require = arg1;
set = set.isAndroid();
const result = set.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectView.tsx");

export default require("noop").forwardRef(function VisualEffectView(blurAmount) {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let android_softwareBlurDisabled;
  let blurAmountOverride;
  let blurEffectNameOverride;
  let blurStyle;
  let blurTheme;
  let blurTintRgba;
  let blurTintRgbaOverride;
  ({ blurTheme, blurStyle } = blurAmount);
  if (blurStyle === undefined) {
    blurStyle = "default";
  }
  let num = blurAmount.blurAmount;
  if (num === undefined) {
    num = 1;
  }
  ({ blurTintRgba, android_fallbackColor, android_blurTargetViewNativeId, android_softwareBlurDisabled } = blurAmount);
  if (android_softwareBlurDisabled === undefined) {
    android_softwareBlurDisabled = false;
  }
  const merged = Object.assign(blurAmount, Object.create(null));
  ({ blurAmountOverride, blurTintRgbaOverride, blurEffectNameOverride } = callback());
  let obj = map;
  const token = obj.useToken(Themes.colors.LEGACY_BLUR_FALLBACK_DEFAULT, blurTheme);
  let obj1 = map;
  let token1 = obj1.useToken(Themes.colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, blurTheme);
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
  let tmp3Result = tmp3(3959);
  const token2 = tmp3Result.useToken(tmp5(712).colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, blurTheme);
  tmp3Result = tmp3(3959);
  if ("default" === blurStyle) {
    let tmp12 = token2;
  } else {
    tmp12 = tmp11;
  }
  let tmp14 = set;
  if (set) {
    let tmp15 = null == android_blurTargetViewNativeId;
    if (!tmp15) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !tmp3(4660).MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp15 = true === android_softwareBlurDisabled;
    }
    tmp14 = tmp15;
  }
  if (tmp14) {
    obj = { ref: null };
    obj[0] = arg1;
    const merged1 = Object.assign(merged);
    obj.style = items;
    let tmp16Result = tmp16(View, obj);
  } else if (set) {
    obj1 = { ref: null, blurAmount: null, blurTintIOSParityCompensationRgba: null, blurTintRgba: null, blurTargetViewNativeId: null };
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
    const tmp5Result = tmp5(4660);
    obj1[2] = tmp3(4099).hexToRgbaString(tmp12);
    if (blurTintRgbaOverride == null) {
      blurTintRgbaOverride = blurTintRgba;
    }
    obj1[3] = blurTintRgbaOverride;
    obj1[4] = android_blurTargetViewNativeId;
    const merged2 = Object.assign(merged);
    tmp16Result = tmp16(tmp5Result, obj1);
    const tmp3Result1 = tmp3(4099);
  } else {
    const obj2 = { ref: null, blurEffectName: null, blurAmount: null, blurTintRgba: null };
    obj2[0] = arg1;
    if (blurEffectNameOverride != null) {
      obj2[1] = blurEffectNameOverride;
      let tmp19 = blurAmountOverride;
      if (blurAmountOverride == null) {
        tmp19 = num;
      }
      obj2[2] = tmp19;
      let tmp20 = blurTintRgbaOverride;
      if (blurTintRgbaOverride == null) {
        tmp20 = blurTintRgba;
      }
      obj2[3] = tmp20;
      const merged3 = Object.assign(merged);
      tmp16Result = tmp16(tmp17, obj2);
    } else {
      if (!tmp3(4657).MODERN_IOS_BLURS_EFFECTS_AVAILABLE) {
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
  return tmp16Result;
});
export const isBlurDisabled = function isBlurDisabled(merged) {
  let android_softwareBlurDisabled = merged.android_softwareBlurDisabled;
  let tmp2 = set;
  if (set) {
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