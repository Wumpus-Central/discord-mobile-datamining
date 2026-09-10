// === Module 10901: GiftAnimationData ===

// Module 10901 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8135 */;
import _mod10902 from "module_10902" /* 10902 */;
import _mod10903 from "module_10903" /* 10903 */;
import _mod10904 from "module_10904" /* 10904 */;
import _mod10905 from "module_10905" /* 10905 */;
import _mod10906 from "module_10906" /* 10906 */;
import _mod10907 from "module_10907" /* 10907 */;
import _mod10908 from "module_10908" /* 10908 */;
import _mod10909 from "module_10909" /* 10909 */;
import _mod10910 from "module_10910" /* 10910 */;
import _mod10911 from "module_10911" /* 10911 */;
import _mod10912 from "module_10912" /* 10912 */;
import _mod10913 from "module_10913" /* 10913 */;
import _mod10914 from "module_10914" /* 10914 */;
import _mod10915 from "module_10915" /* 10915 */;
import _mod10916 from "module_10916" /* 10916 */;
import _mod10917 from "module_10917" /* 10917 */;
import _mod10918 from "module_10918" /* 10918 */;
import _mod10919 from "module_10919" /* 10919 */;
import _mod10920 from "module_10920" /* 10920 */;
import _mod10921 from "module_10921" /* 10921 */;
import _mod10922 from "module_10922" /* 10922 */;
import _mod10923 from "module_10923" /* 10923 */;
import _mod10924 from "module_10924" /* 10924 */;
import _mod10925 from "module_10925" /* 10925 */;
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
      return _mod10902;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10903;
    } else {
      return _mod10904;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10905;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10906;
    } else {
      return _mod10907;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10908;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10909;
    } else {
      return _mod10910;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10911;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10912;
    } else {
      return _mod10913;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10914;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10915;
    } else {
      return _mod10916;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10917;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10918;
    } else {
      return _mod10919;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10920;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10921;
    } else {
      return _mod10922;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10923;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10924;
    } else {
      return _mod10925;
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