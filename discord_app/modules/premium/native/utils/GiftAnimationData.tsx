// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod9618 from "../../../../../_runtime/metro/09618__.js";
import _mod9619 from "../../../../../_runtime/metro/09619__.js";
import _mod9620 from "../../../../../_runtime/metro/09620__.js";
import _mod9621 from "../../../../../_runtime/metro/09621__.js";
import _mod9622 from "../../../../../_runtime/metro/09622__.js";
import _mod9623 from "../../../../../_runtime/metro/09623__.js";
import _mod9624 from "../../../../../_runtime/metro/09624__.js";
import _mod9625 from "../../../../../_runtime/metro/09625__.js";
import _mod9626 from "../../../../../_runtime/metro/09626__.js";
import _mod9627 from "../../../../../_runtime/metro/09627__.js";
import _mod9628 from "../../../../../_runtime/metro/09628__.js";
import _mod9629 from "../../../../../_runtime/metro/09629__.js";
import _mod9630 from "../../../../../_runtime/metro/09630__.js";
import _mod9631 from "../../../../../_runtime/metro/09631__.js";
import _mod9632 from "../../../../../_runtime/metro/09632__.js";
import _mod9633 from "../../../../../_runtime/metro/09633__.js";
import _mod9634 from "../../../../../_runtime/metro/09634__.js";
import _mod9635 from "../../../../../_runtime/metro/09635__.js";
import _mod9636 from "../../../../../_runtime/metro/09636__.js";
import _mod9637 from "../../../../../_runtime/metro/09637__.js";
import _mod9638 from "../../../../../_runtime/metro/09638__.js";
import _mod9639 from "../../../../../_runtime/metro/09639__.js";
import _mod9640 from "../../../../../_runtime/metro/09640__.js";
import _mod9641 from "../../../../../_runtime/metro/09641__.js";
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
      return _mod9618;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9619;
    } else {
      return _mod9620;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9621;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9622;
    } else {
      return _mod9623;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9624;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9625;
    } else {
      return _mod9626;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9627;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9628;
    } else {
      return _mod9629;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9630;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9631;
    } else {
      return _mod9632;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9633;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9634;
    } else {
      return _mod9635;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9636;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9637;
    } else {
      return _mod9638;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9639;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9640;
    } else {
      return _mod9641;
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
