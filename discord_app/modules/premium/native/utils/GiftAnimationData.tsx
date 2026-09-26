// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
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
import _mod10304 from "../../../../../_runtime/metro/10304__.js";
import _mod10305 from "../../../../../_runtime/metro/10305__.js";
import _mod10306 from "../../../../../_runtime/metro/10306__.js";
import _mod10307 from "../../../../../_runtime/metro/10307__.js";
import _mod10308 from "../../../../../_runtime/metro/10308__.js";
import _mod10309 from "../../../../../_runtime/metro/10309__.js";
import _mod10310 from "../../../../../_runtime/metro/10310__.js";
import _mod10311 from "../../../../../_runtime/metro/10311__.js";
import _mod10312 from "../../../../../_runtime/metro/10312__.js";
import _mod10313 from "../../../../../_runtime/metro/10313__.js";
import _mod10314 from "../../../../../_runtime/metro/10314__.js";
import _mod10315 from "../../../../../_runtime/metro/10315__.js";
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
      return _mod10292;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10293;
    } else {
      return _mod10294;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10295;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10296;
    } else {
      return _mod10297;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10298;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10299;
    } else {
      return _mod10300;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10301;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10302;
    } else {
      return _mod10303;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10304;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10305;
    } else {
      return _mod10306;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10307;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10308;
    } else {
      return _mod10309;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10310;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10311;
    } else {
      return _mod10312;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10313;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10314;
    } else {
      return _mod10315;
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
