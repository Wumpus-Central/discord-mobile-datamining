// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import set from "../../../../../_runtime/00002_set.js";
import GuildFeatures from "../../PremiumConstants.tsx";
import _sendGiftMessage from "../../PremiumGiftingUtils.tsx";

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
      return tmp17(9800);
    } else if (tmp17(8402).AnimationState.LOOP === ACTION) {
      return tmp17(9801);
    } else {
      return tmp17(9802);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(9803);
    } else if (tmp15(8402).AnimationState.LOOP === ACTION) {
      return tmp15(9804);
    } else {
      return tmp15(9805);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(9806);
    } else if (tmp13(8402).AnimationState.LOOP === ACTION) {
      return tmp13(9807);
    } else {
      return tmp13(9808);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(9809);
    } else if (tmp11(8402).AnimationState.LOOP === ACTION) {
      return tmp11(9810);
    } else {
      return tmp11(9811);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(9812);
    } else if (tmp9(8402).AnimationState.LOOP === ACTION) {
      return tmp9(9813);
    } else {
      return tmp9(9814);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(9815);
    } else if (tmp7(8402).AnimationState.LOOP === ACTION) {
      return tmp7(9816);
    } else {
      return tmp7(9817);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(9818);
    } else if (tmp5(8402).AnimationState.LOOP === ACTION) {
      return tmp5(9819);
    } else {
      return tmp5(9820);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(9821);
    } else if (tmp3(8402).AnimationState.LOOP === ACTION) {
      return tmp3(9822);
    } else {
      return tmp3(9823);
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