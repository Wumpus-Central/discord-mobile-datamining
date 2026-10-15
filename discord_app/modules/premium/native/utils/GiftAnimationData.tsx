// === Module 10411: GiftAnimationData ===

// Module 10411 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8327 */;
import _mod10412 from "module_10412" /* 10412 */;
import _mod10413 from "module_10413" /* 10413 */;
import _mod10414 from "module_10414" /* 10414 */;
import _mod10415 from "module_10415" /* 10415 */;
import _mod10416 from "module_10416" /* 10416 */;
import _mod10417 from "module_10417" /* 10417 */;
import _mod10418 from "module_10418" /* 10418 */;
import _mod10419 from "module_10419" /* 10419 */;
import _mod10420 from "module_10420" /* 10420 */;
import _mod10421 from "module_10421" /* 10421 */;
import _mod10422 from "module_10422" /* 10422 */;
import _mod10423 from "module_10423" /* 10423 */;
import _mod10424 from "module_10424" /* 10424 */;
import _mod10425 from "module_10425" /* 10425 */;
import _mod10426 from "module_10426" /* 10426 */;
import _mod10427 from "module_10427" /* 10427 */;
import _mod10428 from "module_10428" /* 10428 */;
import _mod10429 from "module_10429" /* 10429 */;
import _mod10430 from "module_10430" /* 10430 */;
import _mod10431 from "module_10431" /* 10431 */;
import _mod10432 from "module_10432" /* 10432 */;
import _mod10433 from "module_10433" /* 10433 */;
import _mod10434 from "module_10434" /* 10434 */;
import _mod10435 from "module_10435" /* 10435 */;
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
      return _mod10412;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10413;
    } else {
      return _mod10414;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10415;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10416;
    } else {
      return _mod10417;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10418;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10419;
    } else {
      return _mod10420;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10421;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10422;
    } else {
      return _mod10423;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10424;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10425;
    } else {
      return _mod10426;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10427;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10428;
    } else {
      return _mod10429;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10430;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10431;
    } else {
      return _mod10432;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10433;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10434;
    } else {
      return _mod10435;
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