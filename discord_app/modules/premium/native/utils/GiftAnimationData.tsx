// === Module 9617: GiftAnimationData ===

// Module 9617 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8881 */;
import _mod9618 from "module_9618" /* 9618 */;
import _mod9619 from "module_9619" /* 9619 */;
import _mod9620 from "module_9620" /* 9620 */;
import _mod9621 from "module_9621" /* 9621 */;
import _mod9622 from "module_9622" /* 9622 */;
import _mod9623 from "module_9623" /* 9623 */;
import _mod9624 from "module_9624" /* 9624 */;
import _mod9625 from "module_9625" /* 9625 */;
import _mod9626 from "module_9626" /* 9626 */;
import _mod9627 from "module_9627" /* 9627 */;
import _mod9628 from "module_9628" /* 9628 */;
import _mod9629 from "module_9629" /* 9629 */;
import _mod9630 from "module_9630" /* 9630 */;
import _mod9631 from "module_9631" /* 9631 */;
import _mod9632 from "module_9632" /* 9632 */;
import _mod9633 from "module_9633" /* 9633 */;
import _mod9634 from "module_9634" /* 9634 */;
import _mod9635 from "module_9635" /* 9635 */;
import _mod9636 from "module_9636" /* 9636 */;
import _mod9637 from "module_9637" /* 9637 */;
import _mod9638 from "module_9638" /* 9638 */;
import _mod9639 from "module_9639" /* 9639 */;
import _mod9640 from "module_9640" /* 9640 */;
import _mod9641 from "module_9641" /* 9641 */;
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
      return _mod9618;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9619;
    } else {
      return _mod9620;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9621;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9622;
    } else {
      return _mod9623;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9624;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9625;
    } else {
      return _mod9626;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9627;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9628;
    } else {
      return _mod9629;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9630;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9631;
    } else {
      return _mod9632;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9633;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9634;
    } else {
      return _mod9635;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9636;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9637;
    } else {
      return _mod9638;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9639;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9640;
    } else {
      return _mod9641;
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