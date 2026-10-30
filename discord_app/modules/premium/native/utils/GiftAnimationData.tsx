// === Module 10678: GiftAnimationData ===

// Module 10678 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8540 */;
import _mod10679 from "module_10679" /* 10679 */;
import _mod10680 from "module_10680" /* 10680 */;
import _mod10681 from "module_10681" /* 10681 */;
import _mod10682 from "module_10682" /* 10682 */;
import _mod10683 from "module_10683" /* 10683 */;
import _mod10684 from "module_10684" /* 10684 */;
import _mod10685 from "module_10685" /* 10685 */;
import _mod10686 from "module_10686" /* 10686 */;
import _mod10687 from "module_10687" /* 10687 */;
import _mod10688 from "module_10688" /* 10688 */;
import _mod10689 from "module_10689" /* 10689 */;
import _mod10690 from "module_10690" /* 10690 */;
import _mod10691 from "module_10691" /* 10691 */;
import _mod10692 from "module_10692" /* 10692 */;
import _mod10693 from "module_10693" /* 10693 */;
import _mod10694 from "module_10694" /* 10694 */;
import _mod10695 from "module_10695" /* 10695 */;
import _mod10696 from "module_10696" /* 10696 */;
import _mod10697 from "module_10697" /* 10697 */;
import _mod10698 from "module_10698" /* 10698 */;
import _mod10699 from "module_10699" /* 10699 */;
import _mod10700 from "module_10700" /* 10700 */;
import _mod10701 from "module_10701" /* 10701 */;
import _mod10702 from "module_10702" /* 10702 */;
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
      return _mod10679;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10680;
    } else {
      return _mod10681;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10682;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10683;
    } else {
      return _mod10684;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10685;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10686;
    } else {
      return _mod10687;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10688;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10689;
    } else {
      return _mod10690;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10691;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10692;
    } else {
      return _mod10693;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10694;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10695;
    } else {
      return _mod10696;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10697;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10698;
    } else {
      return _mod10699;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10700;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10701;
    } else {
      return _mod10702;
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