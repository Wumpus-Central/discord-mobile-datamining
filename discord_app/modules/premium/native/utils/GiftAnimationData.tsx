// === Module 11079: GiftAnimationData ===

// Module 11079 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8301 */;
import _mod11080 from "module_11080" /* 11080 */;
import _mod11081 from "module_11081" /* 11081 */;
import _mod11082 from "module_11082" /* 11082 */;
import _mod11083 from "module_11083" /* 11083 */;
import _mod11084 from "module_11084" /* 11084 */;
import _mod11085 from "module_11085" /* 11085 */;
import _mod11086 from "module_11086" /* 11086 */;
import _mod11087 from "module_11087" /* 11087 */;
import _mod11088 from "module_11088" /* 11088 */;
import _mod11089 from "module_11089" /* 11089 */;
import _mod11090 from "module_11090" /* 11090 */;
import _mod11091 from "module_11091" /* 11091 */;
import _mod11092 from "module_11092" /* 11092 */;
import _mod11093 from "module_11093" /* 11093 */;
import _mod11094 from "module_11094" /* 11094 */;
import _mod11095 from "module_11095" /* 11095 */;
import _mod11096 from "module_11096" /* 11096 */;
import _mod11097 from "module_11097" /* 11097 */;
import _mod11098 from "module_11098" /* 11098 */;
import _mod11099 from "module_11099" /* 11099 */;
import _mod11100 from "module_11100" /* 11100 */;
import _mod11101 from "module_11101" /* 11101 */;
import _mod11102 from "module_11102" /* 11102 */;
import _mod11103 from "module_11103" /* 11103 */;
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
      return _mod11080;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11081;
    } else {
      return _mod11082;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11083;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11084;
    } else {
      return _mod11085;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11086;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11087;
    } else {
      return _mod11088;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11089;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11090;
    } else {
      return _mod11091;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11092;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11093;
    } else {
      return _mod11094;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11095;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11096;
    } else {
      return _mod11097;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11098;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11099;
    } else {
      return _mod11100;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11101;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11102;
    } else {
      return _mod11103;
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