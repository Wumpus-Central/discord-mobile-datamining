// === Module 10817: GiftAnimationData ===

// Module 10817 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8619 */;
import _mod10818 from "module_10818" /* 10818 */;
import _mod10819 from "module_10819" /* 10819 */;
import _mod10820 from "module_10820" /* 10820 */;
import _mod10821 from "module_10821" /* 10821 */;
import _mod10822 from "module_10822" /* 10822 */;
import _mod10823 from "module_10823" /* 10823 */;
import _mod10824 from "module_10824" /* 10824 */;
import _mod10825 from "module_10825" /* 10825 */;
import _mod10826 from "module_10826" /* 10826 */;
import _mod10827 from "module_10827" /* 10827 */;
import _mod10828 from "module_10828" /* 10828 */;
import _mod10829 from "module_10829" /* 10829 */;
import _mod10830 from "module_10830" /* 10830 */;
import _mod10831 from "module_10831" /* 10831 */;
import _mod10832 from "module_10832" /* 10832 */;
import _mod10833 from "module_10833" /* 10833 */;
import _mod10834 from "module_10834" /* 10834 */;
import _mod10835 from "module_10835" /* 10835 */;
import _mod10836 from "module_10836" /* 10836 */;
import _mod10837 from "module_10837" /* 10837 */;
import _mod10838 from "module_10838" /* 10838 */;
import _mod10839 from "module_10839" /* 10839 */;
import _mod10840 from "module_10840" /* 10840 */;
import _mod10841 from "module_10841" /* 10841 */;
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
      return _mod10818;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10819;
    } else {
      return _mod10820;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10821;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10822;
    } else {
      return _mod10823;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10824;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10825;
    } else {
      return _mod10826;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10827;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10828;
    } else {
      return _mod10829;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10830;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10831;
    } else {
      return _mod10832;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10833;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10834;
    } else {
      return _mod10835;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10836;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10837;
    } else {
      return _mod10838;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10839;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10840;
    } else {
      return _mod10841;
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