// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
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
import _mod10588 from "../../../../../_runtime/metro/10588__.js";
import _mod10589 from "../../../../../_runtime/metro/10589__.js";
import _mod10590 from "../../../../../_runtime/metro/10590__.js";
import _mod10591 from "../../../../../_runtime/metro/10591__.js";
import _mod10592 from "../../../../../_runtime/metro/10592__.js";
import _mod10593 from "../../../../../_runtime/metro/10593__.js";
import _mod10594 from "../../../../../_runtime/metro/10594__.js";
import _mod10595 from "../../../../../_runtime/metro/10595__.js";
import _mod10596 from "../../../../../_runtime/metro/10596__.js";
import _mod10597 from "../../../../../_runtime/metro/10597__.js";
import _mod10598 from "../../../../../_runtime/metro/10598__.js";
import _mod10599 from "../../../../../_runtime/metro/10599__.js";
import _mod10600 from "../../../../../_runtime/metro/10600__.js";
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
      return _mod10577;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10578;
    } else {
      return _mod10579;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10580;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10581;
    } else {
      return _mod10582;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10583;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10584;
    } else {
      return _mod10585;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10586;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10587;
    } else {
      return _mod10588;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10589;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10590;
    } else {
      return _mod10591;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10592;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10593;
    } else {
      return _mod10594;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10595;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10596;
    } else {
      return _mod10597;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10598;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10599;
    } else {
      return _mod10600;
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
