// === Module 10516: GiftAnimationData ===

// Module 10516 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8399 */;
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
import _mod10530 from "module_10530" /* 10530 */;
import _mod10531 from "module_10531" /* 10531 */;
import _mod10532 from "module_10532" /* 10532 */;
import _mod10533 from "module_10533" /* 10533 */;
import _mod10534 from "module_10534" /* 10534 */;
import _mod10535 from "module_10535" /* 10535 */;
import _mod10536 from "module_10536" /* 10536 */;
import _mod10537 from "module_10537" /* 10537 */;
import _mod10538 from "module_10538" /* 10538 */;
import _mod10539 from "module_10539" /* 10539 */;
import _mod10540 from "module_10540" /* 10540 */;
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
      return _mod10517;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10518;
    } else {
      return _mod10519;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10520;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10521;
    } else {
      return _mod10522;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10523;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10524;
    } else {
      return _mod10525;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10526;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10527;
    } else {
      return _mod10528;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10529;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10530;
    } else {
      return _mod10531;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10532;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10533;
    } else {
      return _mod10534;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10535;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10536;
    } else {
      return _mod10537;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10538;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10539;
    } else {
      return _mod10540;
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