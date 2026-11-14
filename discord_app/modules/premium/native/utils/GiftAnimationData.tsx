// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod11753 from "../../../../../_runtime/metro/11753__.js";
import _mod11754 from "../../../../../_runtime/metro/11754__.js";
import _mod11755 from "../../../../../_runtime/metro/11755__.js";
import _mod11756 from "../../../../../_runtime/metro/11756__.js";
import _mod11757 from "../../../../../_runtime/metro/11757__.js";
import _mod11758 from "../../../../../_runtime/metro/11758__.js";
import _mod11759 from "../../../../../_runtime/metro/11759__.js";
import _mod11760 from "../../../../../_runtime/metro/11760__.js";
import _mod11761 from "../../../../../_runtime/metro/11761__.js";
import _mod11762 from "../../../../../_runtime/metro/11762__.js";
import _mod11763 from "../../../../../_runtime/metro/11763__.js";
import _mod11764 from "../../../../../_runtime/metro/11764__.js";
import _mod11765 from "../../../../../_runtime/metro/11765__.js";
import _mod11766 from "../../../../../_runtime/metro/11766__.js";
import _mod11767 from "../../../../../_runtime/metro/11767__.js";
import _mod11768 from "../../../../../_runtime/metro/11768__.js";
import _mod11769 from "../../../../../_runtime/metro/11769__.js";
import _mod11770 from "../../../../../_runtime/metro/11770__.js";
import _mod11771 from "../../../../../_runtime/metro/11771__.js";
import _mod11772 from "../../../../../_runtime/metro/11772__.js";
import _mod11773 from "../../../../../_runtime/metro/11773__.js";
import _mod11774 from "../../../../../_runtime/metro/11774__.js";
import _mod11775 from "../../../../../_runtime/metro/11775__.js";
import _mod11776 from "../../../../../_runtime/metro/11776__.js";
import size from "../../../../../_runtime/metro/00002__.js";

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
