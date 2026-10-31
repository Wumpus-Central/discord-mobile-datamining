// === Module 10698: GiftAnimationData ===

// Module 10698 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8548 */;
import _mod10699 from "module_10699" /* 10699 */;
import _mod10700 from "module_10700" /* 10700 */;
import _mod10701 from "module_10701" /* 10701 */;
import _mod10702 from "module_10702" /* 10702 */;
import _mod10703 from "module_10703" /* 10703 */;
import _mod10704 from "module_10704" /* 10704 */;
import _mod10705 from "module_10705" /* 10705 */;
import _mod10706 from "module_10706" /* 10706 */;
import _mod10707 from "module_10707" /* 10707 */;
import _mod10708 from "module_10708" /* 10708 */;
import _mod10709 from "module_10709" /* 10709 */;
import _mod10710 from "module_10710" /* 10710 */;
import _mod10711 from "module_10711" /* 10711 */;
import _mod10712 from "module_10712" /* 10712 */;
import _mod10713 from "module_10713" /* 10713 */;
import _mod10714 from "module_10714" /* 10714 */;
import _mod10715 from "module_10715" /* 10715 */;
import _mod10716 from "module_10716" /* 10716 */;
import _mod10717 from "module_10717" /* 10717 */;
import _mod10718 from "module_10718" /* 10718 */;
import _mod10719 from "module_10719" /* 10719 */;
import _mod10720 from "module_10720" /* 10720 */;
import _mod10721 from "module_10721" /* 10721 */;
import _mod10722 from "module_10722" /* 10722 */;
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
      return _mod10699;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10700;
    } else {
      return _mod10701;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10702;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10703;
    } else {
      return _mod10704;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10705;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10706;
    } else {
      return _mod10707;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10708;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10709;
    } else {
      return _mod10710;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10711;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10712;
    } else {
      return _mod10713;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10714;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10715;
    } else {
      return _mod10716;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10717;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10718;
    } else {
      return _mod10719;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10720;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10721;
    } else {
      return _mod10722;
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