// === Module 10486: GiftAnimationData ===

// Module 10486 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 7707 */;
import _mod10487 from "module_10487" /* 10487 */;
import _mod10488 from "module_10488" /* 10488 */;
import _mod10489 from "module_10489" /* 10489 */;
import _mod10490 from "module_10490" /* 10490 */;
import _mod10491 from "module_10491" /* 10491 */;
import _mod10492 from "module_10492" /* 10492 */;
import _mod10493 from "module_10493" /* 10493 */;
import _mod10494 from "module_10494" /* 10494 */;
import _mod10495 from "module_10495" /* 10495 */;
import _mod10496 from "module_10496" /* 10496 */;
import _mod10497 from "module_10497" /* 10497 */;
import _mod10498 from "module_10498" /* 10498 */;
import _mod10499 from "module_10499" /* 10499 */;
import _mod10500 from "module_10500" /* 10500 */;
import _mod10501 from "module_10501" /* 10501 */;
import _mod10502 from "module_10502" /* 10502 */;
import _mod10503 from "module_10503" /* 10503 */;
import _mod10504 from "module_10504" /* 10504 */;
import _mod10505 from "module_10505" /* 10505 */;
import _mod10506 from "module_10506" /* 10506 */;
import _mod10507 from "module_10507" /* 10507 */;
import _mod10508 from "module_10508" /* 10508 */;
import _mod10509 from "module_10509" /* 10509 */;
import _mod10510 from "module_10510" /* 10510 */;
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
      return _mod10487;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10488;
    } else {
      return _mod10489;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10490;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10491;
    } else {
      return _mod10492;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10493;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10494;
    } else {
      return _mod10495;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10496;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10497;
    } else {
      return _mod10498;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10499;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10500;
    } else {
      return _mod10501;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10502;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10503;
    } else {
      return _mod10504;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10505;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10506;
    } else {
      return _mod10507;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10508;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10509;
    } else {
      return _mod10510;
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