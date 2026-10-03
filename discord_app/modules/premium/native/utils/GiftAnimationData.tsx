// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10564 from "../../../../../_runtime/metro/10564__.js";
import _mod10565 from "../../../../../_runtime/metro/10565__.js";
import _mod10566 from "../../../../../_runtime/metro/10566__.js";
import _mod10567 from "../../../../../_runtime/metro/10567__.js";
import _mod10568 from "../../../../../_runtime/metro/10568__.js";
import _mod10569 from "../../../../../_runtime/metro/10569__.js";
import _mod10570 from "../../../../../_runtime/metro/10570__.js";
import _mod10571 from "../../../../../_runtime/metro/10571__.js";
import _mod10572 from "../../../../../_runtime/metro/10572__.js";
import _mod10573 from "../../../../../_runtime/metro/10573__.js";
import _mod10574 from "../../../../../_runtime/metro/10574__.js";
import _mod10575 from "../../../../../_runtime/metro/10575__.js";
import _mod10576 from "../../../../../_runtime/metro/10576__.js";
import _mod10577 from "../../../../../_runtime/metro/10577__.js";
import _mod10578 from "../../../../../_runtime/metro/10578__.js";
import _mod10579 from "../../../../../_runtime/metro/10579__.js";
import _mod10580 from "../../../../../_runtime/metro/10580__.js";
import _mod10581 from "../../../../../_runtime/metro/10581__.js";
import _mod10582 from "../../../../../_runtime/metro/10582__.js";
import _mod10583 from "../../../../../_runtime/metro/10583__.js";
import _mod10584 from "../../../../../_runtime/metro/10584__.js";
import _mod10585 from "../../../../../_runtime/metro/10585__.js";
import _mod10586 from "../../../../../_runtime/metro/10586__.js";
import _mod10587 from "../../../../../_runtime/metro/10587__.js";
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
      return _mod10564;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10565;
    } else {
      return _mod10566;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10567;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10568;
    } else {
      return _mod10569;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10570;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10571;
    } else {
      return _mod10572;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10573;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10574;
    } else {
      return _mod10575;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10576;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10577;
    } else {
      return _mod10578;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10579;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10580;
    } else {
      return _mod10581;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10582;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10583;
    } else {
      return _mod10584;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10585;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10586;
    } else {
      return _mod10587;
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
