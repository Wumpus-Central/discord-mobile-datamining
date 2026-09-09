// === Module 10863: GiftAnimationData ===

// Module 10863 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8097 */;
import _mod10864 from "module_10864" /* 10864 */;
import _mod10865 from "module_10865" /* 10865 */;
import _mod10866 from "module_10866" /* 10866 */;
import _mod10867 from "module_10867" /* 10867 */;
import _mod10868 from "module_10868" /* 10868 */;
import _mod10869 from "module_10869" /* 10869 */;
import _mod10870 from "module_10870" /* 10870 */;
import _mod10871 from "module_10871" /* 10871 */;
import _mod10872 from "module_10872" /* 10872 */;
import _mod10873 from "module_10873" /* 10873 */;
import _mod10874 from "module_10874" /* 10874 */;
import _mod10875 from "module_10875" /* 10875 */;
import _mod10876 from "module_10876" /* 10876 */;
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
      return _mod10864;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10865;
    } else {
      return _mod10866;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10867;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10868;
    } else {
      return _mod10869;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10870;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10871;
    } else {
      return _mod10872;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10873;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10874;
    } else {
      return _mod10875;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10876;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10877;
    } else {
      return _mod10878;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10879;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10880;
    } else {
      return _mod10881;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10882;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10883;
    } else {
      return _mod10884;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10885;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10886;
    } else {
      return _mod10887;
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