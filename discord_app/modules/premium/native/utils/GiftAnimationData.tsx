// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10699 from "../../../../../_runtime/metro/10699__.js";
import _mod10700 from "../../../../../_runtime/metro/10700__.js";
import _mod10701 from "../../../../../_runtime/metro/10701__.js";
import _mod10702 from "../../../../../_runtime/metro/10702__.js";
import _mod10703 from "../../../../../_runtime/metro/10703__.js";
import _mod10704 from "../../../../../_runtime/metro/10704__.js";
import _mod10705 from "../../../../../_runtime/metro/10705__.js";
import _mod10706 from "../../../../../_runtime/metro/10706__.js";
import _mod10707 from "../../../../../_runtime/metro/10707__.js";
import _mod10708 from "../../../../../_runtime/metro/10708__.js";
import _mod10709 from "../../../../../_runtime/metro/10709__.js";
import _mod10710 from "../../../../../_runtime/metro/10710__.js";
import _mod10711 from "../../../../../_runtime/metro/10711__.js";
import _mod10712 from "../../../../../_runtime/metro/10712__.js";
import _mod10713 from "../../../../../_runtime/metro/10713__.js";
import _mod10714 from "../../../../../_runtime/metro/10714__.js";
import _mod10715 from "../../../../../_runtime/metro/10715__.js";
import _mod10716 from "../../../../../_runtime/metro/10716__.js";
import _mod10717 from "../../../../../_runtime/metro/10717__.js";
import _mod10718 from "../../../../../_runtime/metro/10718__.js";
import _mod10719 from "../../../../../_runtime/metro/10719__.js";
import _mod10720 from "../../../../../_runtime/metro/10720__.js";
import _mod10721 from "../../../../../_runtime/metro/10721__.js";
import _mod10722 from "../../../../../_runtime/metro/10722__.js";
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
