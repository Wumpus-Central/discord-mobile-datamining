// === Module 10541: LottieType ===

// Module 10541 (LottieType)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1925 */;
import _sendGiftMessage from "_sendGiftMessage" /* 7937 */;

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
      return tmp17(10542);
    } else if (tmp17(7937).AnimationState.LOOP === ACTION) {
      return tmp17(10543);
    } else {
      return tmp17(10544);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(10545);
    } else if (tmp15(7937).AnimationState.LOOP === ACTION) {
      return tmp15(10546);
    } else {
      return tmp15(10547);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(10548);
    } else if (tmp13(7937).AnimationState.LOOP === ACTION) {
      return tmp13(10549);
    } else {
      return tmp13(10550);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(10551);
    } else if (tmp11(7937).AnimationState.LOOP === ACTION) {
      return tmp11(10552);
    } else {
      return tmp11(10553);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(10554);
    } else if (tmp9(7937).AnimationState.LOOP === ACTION) {
      return tmp9(10555);
    } else {
      return tmp9(10556);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(10557);
    } else if (tmp7(7937).AnimationState.LOOP === ACTION) {
      return tmp7(10558);
    } else {
      return tmp7(10559);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(10560);
    } else if (tmp5(7937).AnimationState.LOOP === ACTION) {
      return tmp5(10561);
    } else {
      return tmp5(10562);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(10563);
    } else if (tmp3(7937).AnimationState.LOOP === ACTION) {
      return tmp3(10564);
    } else {
      return tmp3(10565);
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