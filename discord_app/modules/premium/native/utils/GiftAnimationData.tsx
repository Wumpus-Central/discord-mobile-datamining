// === Module 10460: GiftAnimationData ===

// Module 10460 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 7690 */;
import _mod10461 from "module_10461" /* 10461 */;
import _mod10462 from "module_10462" /* 10462 */;
import _mod10463 from "module_10463" /* 10463 */;
import _mod10464 from "module_10464" /* 10464 */;
import _mod10465 from "module_10465" /* 10465 */;
import _mod10466 from "module_10466" /* 10466 */;
import _mod10467 from "module_10467" /* 10467 */;
import _mod10468 from "module_10468" /* 10468 */;
import _mod10469 from "module_10469" /* 10469 */;
import _mod10470 from "module_10470" /* 10470 */;
import _mod10471 from "module_10471" /* 10471 */;
import _mod10472 from "module_10472" /* 10472 */;
import _mod10473 from "module_10473" /* 10473 */;
import _mod10474 from "module_10474" /* 10474 */;
import _mod10475 from "module_10475" /* 10475 */;
import _mod10476 from "module_10476" /* 10476 */;
import _mod10477 from "module_10477" /* 10477 */;
import _mod10478 from "module_10478" /* 10478 */;
import _mod10479 from "module_10479" /* 10479 */;
import _mod10480 from "module_10480" /* 10480 */;
import _mod10481 from "module_10481" /* 10481 */;
import _mod10482 from "module_10482" /* 10482 */;
import _mod10483 from "module_10483" /* 10483 */;
import _mod10484 from "module_10484" /* 10484 */;
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
      return _mod10461;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10462;
    } else {
      return _mod10463;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10464;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10465;
    } else {
      return _mod10466;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10467;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10468;
    } else {
      return _mod10469;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10470;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10471;
    } else {
      return _mod10472;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10473;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10474;
    } else {
      return _mod10475;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10476;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10477;
    } else {
      return _mod10478;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10479;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10480;
    } else {
      return _mod10481;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10482;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10483;
    } else {
      return _mod10484;
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