// === Module 10828: GiftAnimationData ===

// Module 10828 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8672 */;
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
import _mod10842 from "module_10842" /* 10842 */;
import _mod10843 from "module_10843" /* 10843 */;
import _mod10844 from "module_10844" /* 10844 */;
import _mod10845 from "module_10845" /* 10845 */;
import _mod10846 from "module_10846" /* 10846 */;
import _mod10847 from "module_10847" /* 10847 */;
import _mod10848 from "module_10848" /* 10848 */;
import _mod10849 from "module_10849" /* 10849 */;
import _mod10850 from "module_10850" /* 10850 */;
import _mod10851 from "module_10851" /* 10851 */;
import _mod10852 from "module_10852" /* 10852 */;
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
      return _mod10829;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10830;
    } else {
      return _mod10831;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10832;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10833;
    } else {
      return _mod10834;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10835;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10836;
    } else {
      return _mod10837;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10838;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10839;
    } else {
      return _mod10840;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10841;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10842;
    } else {
      return _mod10843;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10844;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10845;
    } else {
      return _mod10846;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10847;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10848;
    } else {
      return _mod10849;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10850;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10851;
    } else {
      return _mod10852;
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