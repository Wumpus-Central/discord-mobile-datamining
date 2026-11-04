// === Module 10876: GiftAnimationData ===

// Module 10876 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8689 */;
import _mod10877 from "module_10877" /* 10877 */;
import _mod10878 from "module_10878" /* 10878 */;
import _mod10879 from "module_10879" /* 10879 */;
import _mod10880 from "module_10880" /* 10880 */;
import _mod10881 from "module_10881" /* 10881 */;
import _mod10882 from "module_10882" /* 10882 */;
import _mod10883 from "module_10883" /* 10883 */;
import _mod10884 from "module_10884" /* 10884 */;
import _mod10885 from "module_10885" /* 10885 */;
import _mod10886 from "module_10886" /* 10886 */;
import _mod10887 from "module_10887" /* 10887 */;
import _mod10888 from "module_10888" /* 10888 */;
import _mod10889 from "module_10889" /* 10889 */;
import _mod10890 from "module_10890" /* 10890 */;
import _mod10891 from "module_10891" /* 10891 */;
import _mod10892 from "module_10892" /* 10892 */;
import _mod10893 from "module_10893" /* 10893 */;
import _mod10894 from "module_10894" /* 10894 */;
import _mod10895 from "module_10895" /* 10895 */;
import _mod10896 from "module_10896" /* 10896 */;
import _mod10897 from "module_10897" /* 10897 */;
import _mod10898 from "module_10898" /* 10898 */;
import _mod10899 from "module_10899" /* 10899 */;
import _mod10900 from "module_10900" /* 10900 */;
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
      return _mod10877;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10878;
    } else {
      return _mod10879;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10880;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10881;
    } else {
      return _mod10882;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10883;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10884;
    } else {
      return _mod10885;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10886;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10887;
    } else {
      return _mod10888;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10889;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10890;
    } else {
      return _mod10891;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10892;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10893;
    } else {
      return _mod10894;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10895;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10896;
    } else {
      return _mod10897;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10898;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10899;
    } else {
      return _mod10900;
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