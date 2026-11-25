// === Module 11274: GiftAnimationData ===

// Module 11274 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 11273 */;
import _mod11275 from "module_11275" /* 11275 */;
import _mod11276 from "module_11276" /* 11276 */;
import _mod11277 from "module_11277" /* 11277 */;
import _mod11278 from "module_11278" /* 11278 */;
import _mod11279 from "module_11279" /* 11279 */;
import _mod11280 from "module_11280" /* 11280 */;
import _mod11281 from "module_11281" /* 11281 */;
import _mod11282 from "module_11282" /* 11282 */;
import _mod11283 from "module_11283" /* 11283 */;
import _mod11284 from "module_11284" /* 11284 */;
import _mod11285 from "module_11285" /* 11285 */;
import _mod11286 from "module_11286" /* 11286 */;
import _mod11287 from "module_11287" /* 11287 */;
import _mod11288 from "module_11288" /* 11288 */;
import _mod11289 from "module_11289" /* 11289 */;
import _mod11290 from "module_11290" /* 11290 */;
import _mod11291 from "module_11291" /* 11291 */;
import _mod11292 from "module_11292" /* 11292 */;
import _mod11293 from "module_11293" /* 11293 */;
import _mod11294 from "module_11294" /* 11294 */;
import _mod11295 from "module_11295" /* 11295 */;
import _mod11296 from "module_11296" /* 11296 */;
import _mod11297 from "module_11297" /* 11297 */;
import _mod11298 from "module_11298" /* 11298 */;
import size from "module_2" /* 2 */;

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
      return _mod11275;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11276;
    } else {
      return _mod11277;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11278;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11279;
    } else {
      return _mod11280;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11281;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11282;
    } else {
      return _mod11283;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11284;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11285;
    } else {
      return _mod11286;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11287;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11288;
    } else {
      return _mod11289;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11290;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11291;
    } else {
      return _mod11292;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11293;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11294;
    } else {
      return _mod11295;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11296;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11297;
    } else {
      return _mod11298;
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