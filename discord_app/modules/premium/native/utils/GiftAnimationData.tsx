// === Module 10505: GiftAnimationData ===

// Module 10505 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8395 */;
import _mod10506 from "module_10506" /* 10506 */;
import _mod10507 from "module_10507" /* 10507 */;
import _mod10508 from "module_10508" /* 10508 */;
import _mod10509 from "module_10509" /* 10509 */;
import _mod10510 from "module_10510" /* 10510 */;
import _mod10511 from "module_10511" /* 10511 */;
import _mod10512 from "module_10512" /* 10512 */;
import _mod10513 from "module_10513" /* 10513 */;
import _mod10514 from "module_10514" /* 10514 */;
import _mod10515 from "module_10515" /* 10515 */;
import _mod10516 from "module_10516" /* 10516 */;
import _mod10517 from "module_10517" /* 10517 */;
import _mod10518 from "module_10518" /* 10518 */;
import _mod10519 from "module_10519" /* 10519 */;
import _mod10520 from "module_10520" /* 10520 */;
import _mod10521 from "module_10521" /* 10521 */;
import _mod10522 from "module_10522" /* 10522 */;
import _mod10523 from "module_10523" /* 10523 */;
import _mod10524 from "module_10524" /* 10524 */;
import _mod10525 from "module_10525" /* 10525 */;
import _mod10526 from "module_10526" /* 10526 */;
import _mod10527 from "module_10527" /* 10527 */;
import _mod10528 from "module_10528" /* 10528 */;
import _mod10529 from "module_10529" /* 10529 */;
import size from "module_2" /* 2 */;

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