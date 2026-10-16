// === Module 10428: GiftAnimationData ===

// Module 10428 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8333 */;
import _mod10429 from "module_10429" /* 10429 */;
import _mod10430 from "module_10430" /* 10430 */;
import _mod10431 from "module_10431" /* 10431 */;
import _mod10432 from "module_10432" /* 10432 */;
import _mod10433 from "module_10433" /* 10433 */;
import _mod10434 from "module_10434" /* 10434 */;
import _mod10435 from "module_10435" /* 10435 */;
import _mod10436 from "module_10436" /* 10436 */;
import _mod10437 from "module_10437" /* 10437 */;
import _mod10438 from "module_10438" /* 10438 */;
import _mod10439 from "module_10439" /* 10439 */;
import _mod10440 from "module_10440" /* 10440 */;
import _mod10441 from "module_10441" /* 10441 */;
import _mod10442 from "module_10442" /* 10442 */;
import _mod10443 from "module_10443" /* 10443 */;
import _mod10444 from "module_10444" /* 10444 */;
import _mod10445 from "module_10445" /* 10445 */;
import _mod10446 from "module_10446" /* 10446 */;
import _mod10447 from "module_10447" /* 10447 */;
import _mod10448 from "module_10448" /* 10448 */;
import _mod10449 from "module_10449" /* 10449 */;
import _mod10450 from "module_10450" /* 10450 */;
import _mod10451 from "module_10451" /* 10451 */;
import _mod10452 from "module_10452" /* 10452 */;
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
      return _mod10429;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10430;
    } else {
      return _mod10431;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10432;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10433;
    } else {
      return _mod10434;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10435;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10436;
    } else {
      return _mod10437;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10438;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10439;
    } else {
      return _mod10440;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10441;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10442;
    } else {
      return _mod10443;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10444;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10445;
    } else {
      return _mod10446;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10447;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10448;
    } else {
      return _mod10449;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10450;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10451;
    } else {
      return _mod10452;
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