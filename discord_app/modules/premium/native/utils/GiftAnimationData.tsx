// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10238 from "../../../../../_runtime/metro/10238__.js";
import _mod10239 from "../../../../../_runtime/metro/10239__.js";
import _mod10240 from "../../../../../_runtime/metro/10240__.js";
import _mod10241 from "../../../../../_runtime/metro/10241__.js";
import _mod10242 from "../../../../../_runtime/metro/10242__.js";
import _mod10243 from "../../../../../_runtime/metro/10243__.js";
import _mod10244 from "../../../../../_runtime/metro/10244__.js";
import _mod10245 from "../../../../../_runtime/metro/10245__.js";
import _mod10246 from "../../../../../_runtime/metro/10246__.js";
import _mod10247 from "../../../../../_runtime/metro/10247__.js";
import _mod10248 from "../../../../../_runtime/metro/10248__.js";
import _mod10249 from "../../../../../_runtime/metro/10249__.js";
import _mod10250 from "../../../../../_runtime/metro/10250__.js";
import _mod10251 from "../../../../../_runtime/metro/10251__.js";
import _mod10252 from "../../../../../_runtime/metro/10252__.js";
import _mod10253 from "../../../../../_runtime/metro/10253__.js";
import _mod10254 from "../../../../../_runtime/metro/10254__.js";
import _mod10255 from "../../../../../_runtime/metro/10255__.js";
import _mod10256 from "../../../../../_runtime/metro/10256__.js";
import _mod10257 from "../../../../../_runtime/metro/10257__.js";
import _mod10258 from "../../../../../_runtime/metro/10258__.js";
import _mod10259 from "../../../../../_runtime/metro/10259__.js";
import _mod10260 from "../../../../../_runtime/metro/10260__.js";
import _mod10261 from "../../../../../_runtime/metro/10261__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const LottieType = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = size.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export { LottieType };
export function getLottieType(giftStyle) {
  if (giftStyle === PremiumGiftStyles.NITROWEEN_STANDARD) {
    let _JSON = obj.LOTTIE;
  } else {
    _JSON = obj.JSON;
  }
  return _JSON;
}
export function getGiftAnimationData(giftStyle, ACTION) {
  if (PremiumGiftStyles.STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10238;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10239;
    } else {
      return _mod10240;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10241;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10242;
    } else {
      return _mod10243;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10244;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10245;
    } else {
      return _mod10246;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10247;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10248;
    } else {
      return _mod10249;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10250;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10251;
    } else {
      return _mod10252;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10253;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10254;
    } else {
      return _mod10255;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10256;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10257;
    } else {
      return _mod10258;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10259;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10260;
    } else {
      return _mod10261;
    }
  } else {
    if (PremiumGiftStyles.SNOWGLOBE !== giftStyle) {
      if (PremiumGiftStyles.BOX !== giftStyle) {
        const CUP = PremiumGiftStyles.CUP;
      }
    }
    const _Error = Error;
    throw Error();
  }
}
