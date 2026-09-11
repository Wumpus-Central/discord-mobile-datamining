// === Module 10920: GiftAnimationData ===

// Module 10920 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8157 */;
import _mod10921 from "module_10921" /* 10921 */;
import _mod10922 from "module_10922" /* 10922 */;
import _mod10923 from "module_10923" /* 10923 */;
import _mod10924 from "module_10924" /* 10924 */;
import _mod10925 from "module_10925" /* 10925 */;
import _mod10926 from "module_10926" /* 10926 */;
import _mod10927 from "module_10927" /* 10927 */;
import _mod10928 from "module_10928" /* 10928 */;
import _mod10929 from "module_10929" /* 10929 */;
import _mod10930 from "module_10930" /* 10930 */;
import _mod10931 from "module_10931" /* 10931 */;
import _mod10932 from "module_10932" /* 10932 */;
import _mod10933 from "module_10933" /* 10933 */;
import _mod10934 from "module_10934" /* 10934 */;
import _mod10935 from "module_10935" /* 10935 */;
import _mod10936 from "module_10936" /* 10936 */;
import _mod10937 from "module_10937" /* 10937 */;
import _mod10938 from "module_10938" /* 10938 */;
import _mod10939 from "module_10939" /* 10939 */;
import _mod10940 from "module_10940" /* 10940 */;
import _mod10941 from "module_10941" /* 10941 */;
import _mod10942 from "module_10942" /* 10942 */;
import _mod10943 from "module_10943" /* 10943 */;
import _mod10944 from "module_10944" /* 10944 */;
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
      return _mod10921;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10922;
    } else {
      return _mod10923;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10924;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10925;
    } else {
      return _mod10926;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10927;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10928;
    } else {
      return _mod10929;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10930;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10931;
    } else {
      return _mod10932;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10933;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10934;
    } else {
      return _mod10935;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10936;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10937;
    } else {
      return _mod10938;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10939;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10940;
    } else {
      return _mod10941;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10942;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10943;
    } else {
      return _mod10944;
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