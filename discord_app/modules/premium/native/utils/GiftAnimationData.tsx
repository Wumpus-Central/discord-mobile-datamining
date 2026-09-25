// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10280 from "../../../../../_runtime/metro/10280__.js";
import _mod10281 from "../../../../../_runtime/metro/10281__.js";
import _mod10282 from "../../../../../_runtime/metro/10282__.js";
import _mod10283 from "../../../../../_runtime/metro/10283__.js";
import _mod10284 from "../../../../../_runtime/metro/10284__.js";
import _mod10285 from "../../../../../_runtime/metro/10285__.js";
import _mod10286 from "../../../../../_runtime/metro/10286__.js";
import _mod10287 from "../../../../../_runtime/metro/10287__.js";
import _mod10288 from "../../../../../_runtime/metro/10288__.js";
import _mod10289 from "../../../../../_runtime/metro/10289__.js";
import _mod10290 from "../../../../../_runtime/metro/10290__.js";
import _mod10291 from "../../../../../_runtime/metro/10291__.js";
import _mod10292 from "../../../../../_runtime/metro/10292__.js";
import _mod10293 from "../../../../../_runtime/metro/10293__.js";
import _mod10294 from "../../../../../_runtime/metro/10294__.js";
import _mod10295 from "../../../../../_runtime/metro/10295__.js";
import _mod10296 from "../../../../../_runtime/metro/10296__.js";
import _mod10297 from "../../../../../_runtime/metro/10297__.js";
import _mod10298 from "../../../../../_runtime/metro/10298__.js";
import _mod10299 from "../../../../../_runtime/metro/10299__.js";
import _mod10300 from "../../../../../_runtime/metro/10300__.js";
import _mod10301 from "../../../../../_runtime/metro/10301__.js";
import _mod10302 from "../../../../../_runtime/metro/10302__.js";
import _mod10303 from "../../../../../_runtime/metro/10303__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const LottieType = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = size.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export { LottieType };
export const getLottieType = function getLottieType(giftStyle) {
  if (giftStyle === PremiumGiftStyles.NITROWEEN_STANDARD) {
    let _JSON = obj.LOTTIE;
  } else {
    _JSON = obj.JSON;
  }
  return _JSON;
};
export const getGiftAnimationData = function getGiftAnimationData(giftStyle, ACTION) {
  if (PremiumGiftStyles.STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10280;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10281;
    } else {
      return _mod10282;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10283;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10284;
    } else {
      return _mod10285;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10286;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10287;
    } else {
      return _mod10288;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10289;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10290;
    } else {
      return _mod10291;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10292;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10293;
    } else {
      return _mod10294;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10295;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10296;
    } else {
      return _mod10297;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10298;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10299;
    } else {
      return _mod10300;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10301;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10302;
    } else {
      return _mod10303;
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
};
