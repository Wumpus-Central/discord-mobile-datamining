// === Module 10545: GiftAnimationData ===

// Module 10545 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8427 */;
import _mod10546 from "module_10546" /* 10546 */;
import _mod10547 from "module_10547" /* 10547 */;
import _mod10548 from "module_10548" /* 10548 */;
import _mod10549 from "module_10549" /* 10549 */;
import _mod10550 from "module_10550" /* 10550 */;
import _mod10551 from "module_10551" /* 10551 */;
import _mod10552 from "module_10552" /* 10552 */;
import _mod10553 from "module_10553" /* 10553 */;
import _mod10554 from "module_10554" /* 10554 */;
import _mod10555 from "module_10555" /* 10555 */;
import _mod10556 from "module_10556" /* 10556 */;
import _mod10557 from "module_10557" /* 10557 */;
import _mod10558 from "module_10558" /* 10558 */;
import _mod10559 from "module_10559" /* 10559 */;
import _mod10560 from "module_10560" /* 10560 */;
import _mod10561 from "module_10561" /* 10561 */;
import _mod10562 from "module_10562" /* 10562 */;
import _mod10563 from "module_10563" /* 10563 */;
import _mod10564 from "module_10564" /* 10564 */;
import _mod10565 from "module_10565" /* 10565 */;
import _mod10566 from "module_10566" /* 10566 */;
import _mod10567 from "module_10567" /* 10567 */;
import _mod10568 from "module_10568" /* 10568 */;
import _mod10569 from "module_10569" /* 10569 */;
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
      return _mod10546;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10547;
    } else {
      return _mod10548;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10549;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10550;
    } else {
      return _mod10551;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10552;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10553;
    } else {
      return _mod10554;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10555;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10556;
    } else {
      return _mod10557;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10558;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10559;
    } else {
      return _mod10560;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10561;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10562;
    } else {
      return _mod10563;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10564;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10565;
    } else {
      return _mod10566;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10567;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10568;
    } else {
      return _mod10569;
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