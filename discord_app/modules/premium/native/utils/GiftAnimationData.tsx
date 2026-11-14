// === Module 11752: GiftAnimationData ===

// Module 11752 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 9332 */;
import _mod11753 from "module_11753" /* 11753 */;
import _mod11754 from "module_11754" /* 11754 */;
import _mod11755 from "module_11755" /* 11755 */;
import _mod11756 from "module_11756" /* 11756 */;
import _mod11757 from "module_11757" /* 11757 */;
import _mod11758 from "module_11758" /* 11758 */;
import _mod11759 from "module_11759" /* 11759 */;
import _mod11760 from "module_11760" /* 11760 */;
import _mod11761 from "module_11761" /* 11761 */;
import _mod11762 from "module_11762" /* 11762 */;
import _mod11763 from "module_11763" /* 11763 */;
import _mod11764 from "module_11764" /* 11764 */;
import _mod11765 from "module_11765" /* 11765 */;
import _mod11766 from "module_11766" /* 11766 */;
import _mod11767 from "module_11767" /* 11767 */;
import _mod11768 from "module_11768" /* 11768 */;
import _mod11769 from "module_11769" /* 11769 */;
import _mod11770 from "module_11770" /* 11770 */;
import _mod11771 from "module_11771" /* 11771 */;
import _mod11772 from "module_11772" /* 11772 */;
import _mod11773 from "module_11773" /* 11773 */;
import _mod11774 from "module_11774" /* 11774 */;
import _mod11775 from "module_11775" /* 11775 */;
import _mod11776 from "module_11776" /* 11776 */;
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
      return _mod11753;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11754;
    } else {
      return _mod11755;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11756;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11757;
    } else {
      return _mod11758;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11759;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11760;
    } else {
      return _mod11761;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11762;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11763;
    } else {
      return _mod11764;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11765;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11766;
    } else {
      return _mod11767;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11768;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11769;
    } else {
      return _mod11770;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11771;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11772;
    } else {
      return _mod11773;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11774;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11775;
    } else {
      return _mod11776;
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