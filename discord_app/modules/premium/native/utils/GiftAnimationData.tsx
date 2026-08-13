// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import { PremiumGiftStyles } from "GuildFeatures";
import { _sendGiftMessage } from "../../PremiumGiftingUtils.tsx";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_9636").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
      return tmp17(9636);
    } else if (tmp17(8227).AnimationState.LOOP === ACTION) {
      return tmp17(9637);
    } else {
      return tmp17(9638);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(9639);
    } else if (tmp15(8227).AnimationState.LOOP === ACTION) {
      return tmp15(9640);
    } else {
      return tmp15(9641);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(9642);
    } else if (tmp13(8227).AnimationState.LOOP === ACTION) {
      return tmp13(9643);
    } else {
      return tmp13(9644);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(9645);
    } else if (tmp11(8227).AnimationState.LOOP === ACTION) {
      return tmp11(9646);
    } else {
      return tmp11(9647);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(9648);
    } else if (tmp9(8227).AnimationState.LOOP === ACTION) {
      return tmp9(9649);
    } else {
      return tmp9(9650);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(9651);
    } else if (tmp7(8227).AnimationState.LOOP === ACTION) {
      return tmp7(9652);
    } else {
      return tmp7(9653);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(9654);
    } else if (tmp5(8227).AnimationState.LOOP === ACTION) {
      return tmp5(9655);
    } else {
      return tmp5(9656);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(9657);
    } else if (tmp3(8227).AnimationState.LOOP === ACTION) {
      return tmp3(9658);
    } else {
      return tmp3(9659);
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