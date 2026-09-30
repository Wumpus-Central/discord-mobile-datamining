// === Module 10494: GiftAnimationData ===

// Module 10494 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 7720 */;
import _mod10495 from "module_10495" /* 10495 */;
import _mod10496 from "module_10496" /* 10496 */;
import _mod10497 from "module_10497" /* 10497 */;
import _mod10498 from "module_10498" /* 10498 */;
import _mod10499 from "module_10499" /* 10499 */;
import _mod10500 from "module_10500" /* 10500 */;
import _mod10501 from "module_10501" /* 10501 */;
import _mod10502 from "module_10502" /* 10502 */;
import _mod10503 from "module_10503" /* 10503 */;
import _mod10504 from "module_10504" /* 10504 */;
import _mod10505 from "module_10505" /* 10505 */;
import _mod10506 from "module_10506" /* 10506 */;
import _mod10507 from "module_10507" /* 10507 */;
import _mod10508 from "module_10508" /* 10508 */;
import _mod10509 from "module_10509" /* 10509 */;
import _mod10510 from "module_10510" /* 10510 */;
import _mod10511 from "module_10511" /* 10511 */;
import _mod10512 from "module_10512" /* 10512 */;
import _mod10513 from "module_10513" /* 10513 */;
import _mod10514 from "module_10514" /* 10514 */;
import _mod10515 from "module_10515" /* 10515 */;
import _mod10516 from "module_10516" /* 10516 */;
import _mod10517 from "module_10517" /* 10517 */;
import _mod10518 from "module_10518" /* 10518 */;
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
      return _mod10495;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10496;
    } else {
      return _mod10497;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10498;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10499;
    } else {
      return _mod10500;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10501;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10502;
    } else {
      return _mod10503;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10504;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10505;
    } else {
      return _mod10506;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10507;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10508;
    } else {
      return _mod10509;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10510;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10511;
    } else {
      return _mod10512;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10513;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10514;
    } else {
      return _mod10515;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10516;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10517;
    } else {
      return _mod10518;
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