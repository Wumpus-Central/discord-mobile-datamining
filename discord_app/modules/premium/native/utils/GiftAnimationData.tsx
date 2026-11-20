// === Module 9497: GiftAnimationData ===

// Module 9497 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8761 */;
import _mod9498 from "module_9498" /* 9498 */;
import _mod9499 from "module_9499" /* 9499 */;
import _mod9500 from "module_9500" /* 9500 */;
import _mod9501 from "module_9501" /* 9501 */;
import _mod9502 from "module_9502" /* 9502 */;
import _mod9503 from "module_9503" /* 9503 */;
import _mod9504 from "module_9504" /* 9504 */;
import _mod9505 from "module_9505" /* 9505 */;
import _mod9506 from "module_9506" /* 9506 */;
import _mod9507 from "module_9507" /* 9507 */;
import _mod9508 from "module_9508" /* 9508 */;
import _mod9509 from "module_9509" /* 9509 */;
import _mod9510 from "module_9510" /* 9510 */;
import _mod9511 from "module_9511" /* 9511 */;
import _mod9512 from "module_9512" /* 9512 */;
import _mod9513 from "module_9513" /* 9513 */;
import _mod9514 from "module_9514" /* 9514 */;
import _mod9515 from "module_9515" /* 9515 */;
import _mod9516 from "module_9516" /* 9516 */;
import _mod9517 from "module_9517" /* 9517 */;
import _mod9518 from "module_9518" /* 9518 */;
import _mod9519 from "module_9519" /* 9519 */;
import _mod9520 from "module_9520" /* 9520 */;
import _mod9521 from "module_9521" /* 9521 */;
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
      return _mod9498;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9499;
    } else {
      return _mod9500;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9501;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9502;
    } else {
      return _mod9503;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9504;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9505;
    } else {
      return _mod9506;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9507;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9508;
    } else {
      return _mod9509;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9510;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9511;
    } else {
      return _mod9512;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9513;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9514;
    } else {
      return _mod9515;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9516;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9517;
    } else {
      return _mod9518;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9519;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9520;
    } else {
      return _mod9521;
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