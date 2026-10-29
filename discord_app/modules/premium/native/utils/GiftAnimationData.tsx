// === Module 10655: GiftAnimationData ===

// Module 10655 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8506 */;
import _mod10656 from "module_10656" /* 10656 */;
import _mod10657 from "module_10657" /* 10657 */;
import _mod10658 from "module_10658" /* 10658 */;
import _mod10659 from "module_10659" /* 10659 */;
import _mod10660 from "module_10660" /* 10660 */;
import _mod10661 from "module_10661" /* 10661 */;
import _mod10662 from "module_10662" /* 10662 */;
import _mod10663 from "module_10663" /* 10663 */;
import _mod10664 from "module_10664" /* 10664 */;
import _mod10665 from "module_10665" /* 10665 */;
import _mod10666 from "module_10666" /* 10666 */;
import _mod10667 from "module_10667" /* 10667 */;
import _mod10668 from "module_10668" /* 10668 */;
import _mod10669 from "module_10669" /* 10669 */;
import _mod10670 from "module_10670" /* 10670 */;
import _mod10671 from "module_10671" /* 10671 */;
import _mod10672 from "module_10672" /* 10672 */;
import _mod10673 from "module_10673" /* 10673 */;
import _mod10674 from "module_10674" /* 10674 */;
import _mod10675 from "module_10675" /* 10675 */;
import _mod10676 from "module_10676" /* 10676 */;
import _mod10677 from "module_10677" /* 10677 */;
import _mod10678 from "module_10678" /* 10678 */;
import _mod10679 from "module_10679" /* 10679 */;
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
      return _mod10656;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10657;
    } else {
      return _mod10658;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10659;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10660;
    } else {
      return _mod10661;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10662;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10663;
    } else {
      return _mod10664;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10665;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10666;
    } else {
      return _mod10667;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10668;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10669;
    } else {
      return _mod10670;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10671;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10672;
    } else {
      return _mod10673;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10674;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10675;
    } else {
      return _mod10676;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10677;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10678;
    } else {
      return _mod10679;
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