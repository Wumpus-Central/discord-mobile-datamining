// === Module 11181: GiftAnimationData ===

// Module 11181 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8430 */;
import _mod11182 from "module_11182" /* 11182 */;
import _mod11183 from "module_11183" /* 11183 */;
import _mod11184 from "module_11184" /* 11184 */;
import _mod11185 from "module_11185" /* 11185 */;
import _mod11186 from "module_11186" /* 11186 */;
import _mod11187 from "module_11187" /* 11187 */;
import _mod11188 from "module_11188" /* 11188 */;
import _mod11189 from "module_11189" /* 11189 */;
import _mod11190 from "module_11190" /* 11190 */;
import _mod11191 from "module_11191" /* 11191 */;
import _mod11192 from "module_11192" /* 11192 */;
import _mod11193 from "module_11193" /* 11193 */;
import _mod11194 from "module_11194" /* 11194 */;
import _mod11195 from "module_11195" /* 11195 */;
import _mod11196 from "module_11196" /* 11196 */;
import _mod11197 from "module_11197" /* 11197 */;
import _mod11198 from "module_11198" /* 11198 */;
import _mod11199 from "module_11199" /* 11199 */;
import _mod11200 from "module_11200" /* 11200 */;
import _mod11201 from "module_11201" /* 11201 */;
import _mod11202 from "module_11202" /* 11202 */;
import _mod11203 from "module_11203" /* 11203 */;
import _mod11204 from "module_11204" /* 11204 */;
import _mod11205 from "module_11205" /* 11205 */;
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
      return _mod11182;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11183;
    } else {
      return _mod11184;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11185;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11186;
    } else {
      return _mod11187;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11188;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11189;
    } else {
      return _mod11190;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11191;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11192;
    } else {
      return _mod11193;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11194;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11195;
    } else {
      return _mod11196;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11197;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11198;
    } else {
      return _mod11199;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11200;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11201;
    } else {
      return _mod11202;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11203;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11204;
    } else {
      return _mod11205;
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