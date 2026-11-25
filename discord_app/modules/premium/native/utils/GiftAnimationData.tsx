// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod11275 from "../../../../../_runtime/metro/11275__.js";
import _mod11276 from "../../../../../_runtime/metro/11276__.js";
import _mod11277 from "../../../../../_runtime/metro/11277__.js";
import _mod11278 from "../../../../../_runtime/metro/11278__.js";
import _mod11279 from "../../../../../_runtime/metro/11279__.js";
import _mod11280 from "../../../../../_runtime/metro/11280__.js";
import _mod11281 from "../../../../../_runtime/metro/11281__.js";
import _mod11282 from "../../../../../_runtime/metro/11282__.js";
import _mod11283 from "../../../../../_runtime/metro/11283__.js";
import _mod11284 from "../../../../../_runtime/metro/11284__.js";
import _mod11285 from "../../../../../_runtime/metro/11285__.js";
import _mod11286 from "../../../../../_runtime/metro/11286__.js";
import _mod11287 from "../../../../../_runtime/metro/11287__.js";
import _mod11288 from "../../../../../_runtime/metro/11288__.js";
import _mod11289 from "../../../../../_runtime/metro/11289__.js";
import _mod11290 from "../../../../../_runtime/metro/11290__.js";
import _mod11291 from "../../../../../_runtime/metro/11291__.js";
import _mod11292 from "../../../../../_runtime/metro/11292__.js";
import _mod11293 from "../../../../../_runtime/metro/11293__.js";
import _mod11294 from "../../../../../_runtime/metro/11294__.js";
import _mod11295 from "../../../../../_runtime/metro/11295__.js";
import _mod11296 from "../../../../../_runtime/metro/11296__.js";
import _mod11297 from "../../../../../_runtime/metro/11297__.js";
import _mod11298 from "../../../../../_runtime/metro/11298__.js";
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
