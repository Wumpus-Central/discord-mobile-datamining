// === Module 9518: GiftAnimationData ===

// Module 9518 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8752 */;
import _mod9519 from "module_9519" /* 9519 */;
import _mod9520 from "module_9520" /* 9520 */;
import _mod9521 from "module_9521" /* 9521 */;
import _mod9522 from "module_9522" /* 9522 */;
import _mod9523 from "module_9523" /* 9523 */;
import _mod9524 from "module_9524" /* 9524 */;
import _mod9525 from "module_9525" /* 9525 */;
import _mod9526 from "module_9526" /* 9526 */;
import _mod9527 from "module_9527" /* 9527 */;
import _mod9528 from "module_9528" /* 9528 */;
import _mod9529 from "module_9529" /* 9529 */;
import _mod9530 from "module_9530" /* 9530 */;
import _mod9531 from "module_9531" /* 9531 */;
import _mod9532 from "module_9532" /* 9532 */;
import _mod9533 from "module_9533" /* 9533 */;
import _mod9534 from "module_9534" /* 9534 */;
import _mod9535 from "module_9535" /* 9535 */;
import _mod9536 from "module_9536" /* 9536 */;
import _mod9537 from "module_9537" /* 9537 */;
import _mod9538 from "module_9538" /* 9538 */;
import _mod9539 from "module_9539" /* 9539 */;
import _mod9540 from "module_9540" /* 9540 */;
import _mod9541 from "module_9541" /* 9541 */;
import _mod9542 from "module_9542" /* 9542 */;
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
      return _mod9519;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9520;
    } else {
      return _mod9521;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9522;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9523;
    } else {
      return _mod9524;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9525;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9526;
    } else {
      return _mod9527;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9528;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9529;
    } else {
      return _mod9530;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9531;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9532;
    } else {
      return _mod9533;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9534;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9535;
    } else {
      return _mod9536;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9537;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9538;
    } else {
      return _mod9539;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9540;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9541;
    } else {
      return _mod9542;
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