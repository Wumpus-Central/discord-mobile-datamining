// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
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
import _mod10601 from "../../../../../_runtime/metro/10601__.js";
import _mod10602 from "../../../../../_runtime/metro/10602__.js";
import _mod10603 from "../../../../../_runtime/metro/10603__.js";
import _mod10604 from "../../../../../_runtime/metro/10604__.js";
import _mod10605 from "../../../../../_runtime/metro/10605__.js";
import _mod10606 from "../../../../../_runtime/metro/10606__.js";
import _mod10607 from "../../../../../_runtime/metro/10607__.js";
import _mod10608 from "../../../../../_runtime/metro/10608__.js";
import _mod10609 from "../../../../../_runtime/metro/10609__.js";
import _mod10610 from "../../../../../_runtime/metro/10610__.js";
import _mod10611 from "../../../../../_runtime/metro/10611__.js";
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
      return _mod10588;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10589;
    } else {
      return _mod10590;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10591;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10592;
    } else {
      return _mod10593;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10594;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10595;
    } else {
      return _mod10596;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10597;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10598;
    } else {
      return _mod10599;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10600;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10601;
    } else {
      return _mod10602;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10603;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10604;
    } else {
      return _mod10605;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10606;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10607;
    } else {
      return _mod10608;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10609;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10610;
    } else {
      return _mod10611;
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
