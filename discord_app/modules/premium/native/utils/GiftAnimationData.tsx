// === Module 11686: GiftAnimationData ===

// Module 11686 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 9265 */;
import _mod11687 from "module_11687" /* 11687 */;
import _mod11688 from "module_11688" /* 11688 */;
import _mod11689 from "module_11689" /* 11689 */;
import _mod11690 from "module_11690" /* 11690 */;
import _mod11691 from "module_11691" /* 11691 */;
import _mod11692 from "module_11692" /* 11692 */;
import _mod11693 from "module_11693" /* 11693 */;
import _mod11694 from "module_11694" /* 11694 */;
import _mod11695 from "module_11695" /* 11695 */;
import _mod11696 from "module_11696" /* 11696 */;
import _mod11697 from "module_11697" /* 11697 */;
import _mod11698 from "module_11698" /* 11698 */;
import _mod11699 from "module_11699" /* 11699 */;
import _mod11700 from "module_11700" /* 11700 */;
import _mod11701 from "module_11701" /* 11701 */;
import _mod11702 from "module_11702" /* 11702 */;
import _mod11703 from "module_11703" /* 11703 */;
import _mod11704 from "module_11704" /* 11704 */;
import _mod11705 from "module_11705" /* 11705 */;
import _mod11706 from "module_11706" /* 11706 */;
import _mod11707 from "module_11707" /* 11707 */;
import _mod11708 from "module_11708" /* 11708 */;
import _mod11709 from "module_11709" /* 11709 */;
import _mod11710 from "module_11710" /* 11710 */;
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
      return _mod11687;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11688;
    } else {
      return _mod11689;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11690;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11691;
    } else {
      return _mod11692;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11693;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11694;
    } else {
      return _mod11695;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11696;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11697;
    } else {
      return _mod11698;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11699;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11700;
    } else {
      return _mod11701;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11702;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11703;
    } else {
      return _mod11704;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11705;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11706;
    } else {
      return _mod11707;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11708;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11709;
    } else {
      return _mod11710;
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