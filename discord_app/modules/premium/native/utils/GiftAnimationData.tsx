// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10517 from "../../../../../_runtime/metro/10517__.js";
import _mod10518 from "../../../../../_runtime/metro/10518__.js";
import _mod10519 from "../../../../../_runtime/metro/10519__.js";
import _mod10520 from "../../../../../_runtime/metro/10520__.js";
import _mod10521 from "../../../../../_runtime/metro/10521__.js";
import _mod10522 from "../../../../../_runtime/metro/10522__.js";
import _mod10523 from "../../../../../_runtime/metro/10523__.js";
import _mod10524 from "../../../../../_runtime/metro/10524__.js";
import _mod10525 from "../../../../../_runtime/metro/10525__.js";
import _mod10526 from "../../../../../_runtime/metro/10526__.js";
import _mod10527 from "../../../../../_runtime/metro/10527__.js";
import _mod10528 from "../../../../../_runtime/metro/10528__.js";
import _mod10529 from "../../../../../_runtime/metro/10529__.js";
import _mod10530 from "../../../../../_runtime/metro/10530__.js";
import _mod10531 from "../../../../../_runtime/metro/10531__.js";
import _mod10532 from "../../../../../_runtime/metro/10532__.js";
import _mod10533 from "../../../../../_runtime/metro/10533__.js";
import _mod10534 from "../../../../../_runtime/metro/10534__.js";
import _mod10535 from "../../../../../_runtime/metro/10535__.js";
import _mod10536 from "../../../../../_runtime/metro/10536__.js";
import _mod10537 from "../../../../../_runtime/metro/10537__.js";
import _mod10538 from "../../../../../_runtime/metro/10538__.js";
import _mod10539 from "../../../../../_runtime/metro/10539__.js";
import _mod10540 from "../../../../../_runtime/metro/10540__.js";
import size from "../../../../../_runtime/metro/00002__.js";

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
      return _mod10517;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10518;
    } else {
      return _mod10519;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10520;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10521;
    } else {
      return _mod10522;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10523;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10524;
    } else {
      return _mod10525;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10526;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10527;
    } else {
      return _mod10528;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10529;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10530;
    } else {
      return _mod10531;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10532;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10533;
    } else {
      return _mod10534;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10535;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10536;
    } else {
      return _mod10537;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10538;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10539;
    } else {
      return _mod10540;
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
