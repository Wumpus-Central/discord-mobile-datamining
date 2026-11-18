// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod9519 from "../../../../../_runtime/metro/09519__.js";
import _mod9520 from "../../../../../_runtime/metro/09520__.js";
import _mod9521 from "../../../../../_runtime/metro/09521__.js";
import _mod9522 from "../../../../../_runtime/metro/09522__.js";
import _mod9523 from "../../../../../_runtime/metro/09523__.js";
import _mod9524 from "../../../../../_runtime/metro/09524__.js";
import _mod9525 from "../../../../../_runtime/metro/09525__.js";
import _mod9526 from "../../../../../_runtime/metro/09526__.js";
import _mod9527 from "../../../../../_runtime/metro/09527__.js";
import _mod9528 from "../../../../../_runtime/metro/09528__.js";
import _mod9529 from "../../../../../_runtime/metro/09529__.js";
import _mod9530 from "../../../../../_runtime/metro/09530__.js";
import _mod9531 from "../../../../../_runtime/metro/09531__.js";
import _mod9532 from "../../../../../_runtime/metro/09532__.js";
import _mod9533 from "../../../../../_runtime/metro/09533__.js";
import _mod9534 from "../../../../../_runtime/metro/09534__.js";
import _mod9535 from "../../../../../_runtime/metro/09535__.js";
import _mod9536 from "../../../../../_runtime/metro/09536__.js";
import _mod9537 from "../../../../../_runtime/metro/09537__.js";
import _mod9538 from "../../../../../_runtime/metro/09538__.js";
import _mod9539 from "../../../../../_runtime/metro/09539__.js";
import _mod9540 from "../../../../../_runtime/metro/09540__.js";
import _mod9541 from "../../../../../_runtime/metro/09541__.js";
import _mod9542 from "../../../../../_runtime/metro/09542__.js";
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
      return _mod9519;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9520;
    } else {
      return _mod9521;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9522;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9523;
    } else {
      return _mod9524;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9525;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9526;
    } else {
      return _mod9527;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9528;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9529;
    } else {
      return _mod9530;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9531;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9532;
    } else {
      return _mod9533;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9534;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9535;
    } else {
      return _mod9536;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9537;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9538;
    } else {
      return _mod9539;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9540;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9541;
    } else {
      return _mod9542;
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
