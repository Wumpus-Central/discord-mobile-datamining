// === Module 10603: LottieType ===

// Module 10603 (LottieType)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import _sendGiftMessage from "_sendGiftMessage" /* 7991 */;

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
      return tmp17(10604);
    } else if (tmp17(7991).AnimationState.LOOP === ACTION) {
      return tmp17(10605);
    } else {
      return tmp17(10606);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(10607);
    } else if (tmp15(7991).AnimationState.LOOP === ACTION) {
      return tmp15(10608);
    } else {
      return tmp15(10609);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(10610);
    } else if (tmp13(7991).AnimationState.LOOP === ACTION) {
      return tmp13(10611);
    } else {
      return tmp13(10612);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(10613);
    } else if (tmp11(7991).AnimationState.LOOP === ACTION) {
      return tmp11(10614);
    } else {
      return tmp11(10615);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(10616);
    } else if (tmp9(7991).AnimationState.LOOP === ACTION) {
      return tmp9(10617);
    } else {
      return tmp9(10618);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(10619);
    } else if (tmp7(7991).AnimationState.LOOP === ACTION) {
      return tmp7(10620);
    } else {
      return tmp7(10621);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(10622);
    } else if (tmp5(7991).AnimationState.LOOP === ACTION) {
      return tmp5(10623);
    } else {
      return tmp5(10624);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(10625);
    } else if (tmp3(7991).AnimationState.LOOP === ACTION) {
      return tmp3(10626);
    } else {
      return tmp3(10627);
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