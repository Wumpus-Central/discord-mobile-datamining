// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10506 from "../../../../../_runtime/metro/10506__.js";
import _mod10507 from "../../../../../_runtime/metro/10507__.js";
import _mod10508 from "../../../../../_runtime/metro/10508__.js";
import _mod10509 from "../../../../../_runtime/metro/10509__.js";
import _mod10510 from "../../../../../_runtime/metro/10510__.js";
import _mod10511 from "../../../../../_runtime/metro/10511__.js";
import _mod10512 from "../../../../../_runtime/metro/10512__.js";
import _mod10513 from "../../../../../_runtime/metro/10513__.js";
import _mod10514 from "../../../../../_runtime/metro/10514__.js";
import _mod10515 from "../../../../../_runtime/metro/10515__.js";
import _mod10516 from "../../../../../_runtime/metro/10516__.js";
import _mod10517 from "../../../../../_runtime/metro/10517__.js";
import _mod10518 from "../../../../../_runtime/metro/10518__.js";
import _mod10519 from "../../../../../_runtime/metro/10519__.js";
import _mod10520 from "../../../../../_runtime/metro/10520__.js";
import _mod10521 from "../../../../../_runtime/metro/10521__.js";
import _mod10522 from "../../../../../_runtime/metro/10522__.js";
import _mod10523 from "../../../../../_runtime/metro/10523__.js";
import _mod10524 from "../../../../../_runtime/metro/10524__.js";
import _mod10525 from "../../../../../_runtime/metro/10525__.js";
import _mod10526 from "../../../../../_runtime/metro/10526__.js";
import _mod10527 from "../../../../../_runtime/metro/10527__.js";
import _mod10528 from "../../../../../_runtime/metro/10528__.js";
import _mod10529 from "../../../../../_runtime/metro/10529__.js";
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
      return _mod10506;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10507;
    } else {
      return _mod10508;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10509;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10510;
    } else {
      return _mod10511;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10512;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10513;
    } else {
      return _mod10514;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10515;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10516;
    } else {
      return _mod10517;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10518;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10519;
    } else {
      return _mod10520;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10521;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10522;
    } else {
      return _mod10523;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10524;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10525;
    } else {
      return _mod10526;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10527;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10528;
    } else {
      return _mod10529;
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
