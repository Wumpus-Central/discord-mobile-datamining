// === Module 11093: GiftAnimationData ===

// Module 11093 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8340 */;
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
import _mod11104 from "module_11104" /* 11104 */;
import _mod11105 from "module_11105" /* 11105 */;
import _mod11106 from "module_11106" /* 11106 */;
import _mod11107 from "module_11107" /* 11107 */;
import _mod11108 from "module_11108" /* 11108 */;
import _mod11109 from "module_11109" /* 11109 */;
import _mod11110 from "module_11110" /* 11110 */;
import _mod11111 from "module_11111" /* 11111 */;
import _mod11112 from "module_11112" /* 11112 */;
import _mod11113 from "module_11113" /* 11113 */;
import _mod11114 from "module_11114" /* 11114 */;
import _mod11115 from "module_11115" /* 11115 */;
import _mod11116 from "module_11116" /* 11116 */;
import _mod11117 from "module_11117" /* 11117 */;
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
      return _mod11094;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11095;
    } else {
      return _mod11096;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11097;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11098;
    } else {
      return _mod11099;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11100;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11101;
    } else {
      return _mod11102;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11103;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11104;
    } else {
      return _mod11105;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11106;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11107;
    } else {
      return _mod11108;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11109;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11110;
    } else {
      return _mod11111;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11112;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11113;
    } else {
      return _mod11114;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11115;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11116;
    } else {
      return _mod11117;
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