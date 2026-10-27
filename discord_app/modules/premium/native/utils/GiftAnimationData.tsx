// === Module 10590: GiftAnimationData ===

// Module 10590 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8450 */;
import _mod10591 from "module_10591" /* 10591 */;
import _mod10592 from "module_10592" /* 10592 */;
import _mod10593 from "module_10593" /* 10593 */;
import _mod10594 from "module_10594" /* 10594 */;
import _mod10595 from "module_10595" /* 10595 */;
import _mod10596 from "module_10596" /* 10596 */;
import _mod10597 from "module_10597" /* 10597 */;
import _mod10598 from "module_10598" /* 10598 */;
import _mod10599 from "module_10599" /* 10599 */;
import _mod10600 from "module_10600" /* 10600 */;
import _mod10601 from "module_10601" /* 10601 */;
import _mod10602 from "module_10602" /* 10602 */;
import _mod10603 from "module_10603" /* 10603 */;
import _mod10604 from "module_10604" /* 10604 */;
import _mod10605 from "module_10605" /* 10605 */;
import _mod10606 from "module_10606" /* 10606 */;
import _mod10607 from "module_10607" /* 10607 */;
import _mod10608 from "module_10608" /* 10608 */;
import _mod10609 from "module_10609" /* 10609 */;
import _mod10610 from "module_10610" /* 10610 */;
import _mod10611 from "module_10611" /* 10611 */;
import _mod10612 from "module_10612" /* 10612 */;
import _mod10613 from "module_10613" /* 10613 */;
import _mod10614 from "module_10614" /* 10614 */;
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
      return _mod10591;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10592;
    } else {
      return _mod10593;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10594;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10595;
    } else {
      return _mod10596;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10597;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10598;
    } else {
      return _mod10599;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10600;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10601;
    } else {
      return _mod10602;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10603;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10604;
    } else {
      return _mod10605;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10606;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10607;
    } else {
      return _mod10608;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10609;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10610;
    } else {
      return _mod10611;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10612;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10613;
    } else {
      return _mod10614;
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