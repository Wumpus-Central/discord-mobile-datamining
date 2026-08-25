// === Module 9733: LottieType ===

// Module 9733 (LottieType)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import _sendGiftMessage from "_sendGiftMessage" /* 8335 */;

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = set.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export const LottieType = obj;
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
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp17(9734);
    } else if (tmp17(8335).AnimationState.LOOP === ACTION) {
      return tmp17(9735);
    } else {
      return tmp17(9736);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(9737);
    } else if (tmp15(8335).AnimationState.LOOP === ACTION) {
      return tmp15(9738);
    } else {
      return tmp15(9739);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(9740);
    } else if (tmp13(8335).AnimationState.LOOP === ACTION) {
      return tmp13(9741);
    } else {
      return tmp13(9742);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(9743);
    } else if (tmp11(8335).AnimationState.LOOP === ACTION) {
      return tmp11(9744);
    } else {
      return tmp11(9745);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(9746);
    } else if (tmp9(8335).AnimationState.LOOP === ACTION) {
      return tmp9(9747);
    } else {
      return tmp9(9748);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(9749);
    } else if (tmp7(8335).AnimationState.LOOP === ACTION) {
      return tmp7(9750);
    } else {
      return tmp7(9751);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(9752);
    } else if (tmp5(8335).AnimationState.LOOP === ACTION) {
      return tmp5(9753);
    } else {
      return tmp5(9754);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(9755);
    } else if (tmp3(8335).AnimationState.LOOP === ACTION) {
      return tmp3(9756);
    } else {
      return tmp3(9757);
    }
  } else {
    if (tmp.SNOWGLOBE !== giftStyle) {
      if (tmp.BOX !== giftStyle) {
        const CUP = tmp.CUP;
      }
    }
    const _Error = Error;
    throw Error();
  }
};