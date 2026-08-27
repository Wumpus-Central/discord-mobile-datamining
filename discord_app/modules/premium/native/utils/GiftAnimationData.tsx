// === Module 10523: LottieType ===

// Module 10523 (LottieType)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import _sendGiftMessage from "_sendGiftMessage" /* 7923 */;

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
      return tmp17(10524);
    } else if (tmp17(7923).AnimationState.LOOP === ACTION) {
      return tmp17(10525);
    } else {
      return tmp17(10526);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(10527);
    } else if (tmp15(7923).AnimationState.LOOP === ACTION) {
      return tmp15(10528);
    } else {
      return tmp15(10529);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(10530);
    } else if (tmp13(7923).AnimationState.LOOP === ACTION) {
      return tmp13(10531);
    } else {
      return tmp13(10532);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(10533);
    } else if (tmp11(7923).AnimationState.LOOP === ACTION) {
      return tmp11(10534);
    } else {
      return tmp11(10535);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(10536);
    } else if (tmp9(7923).AnimationState.LOOP === ACTION) {
      return tmp9(10537);
    } else {
      return tmp9(10538);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(10539);
    } else if (tmp7(7923).AnimationState.LOOP === ACTION) {
      return tmp7(10540);
    } else {
      return tmp7(10541);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(10542);
    } else if (tmp5(7923).AnimationState.LOOP === ACTION) {
      return tmp5(10543);
    } else {
      return tmp5(10544);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(10545);
    } else if (tmp3(7923).AnimationState.LOOP === ACTION) {
      return tmp3(10546);
    } else {
      return tmp3(10547);
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