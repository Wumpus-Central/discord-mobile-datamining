// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import { PremiumGiftStyles } from "GuildFeatures";
import { _sendGiftMessage } from "../../PremiumGiftingUtils.tsx";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_9522").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
      return tmp17(9522);
    } else if (tmp17(8122).AnimationState.LOOP === ACTION) {
      return tmp17(9523);
    } else {
      return tmp17(9524);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(9525);
    } else if (tmp15(8122).AnimationState.LOOP === ACTION) {
      return tmp15(9526);
    } else {
      return tmp15(9527);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(9528);
    } else if (tmp13(8122).AnimationState.LOOP === ACTION) {
      return tmp13(9529);
    } else {
      return tmp13(9530);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(9531);
    } else if (tmp11(8122).AnimationState.LOOP === ACTION) {
      return tmp11(9532);
    } else {
      return tmp11(9533);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(9534);
    } else if (tmp9(8122).AnimationState.LOOP === ACTION) {
      return tmp9(9535);
    } else {
      return tmp9(9536);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(9537);
    } else if (tmp7(8122).AnimationState.LOOP === ACTION) {
      return tmp7(9538);
    } else {
      return tmp7(9539);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(9540);
    } else if (tmp5(8122).AnimationState.LOOP === ACTION) {
      return tmp5(9541);
    } else {
      return tmp5(9542);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(9543);
    } else if (tmp3(8122).AnimationState.LOOP === ACTION) {
      return tmp3(9544);
    } else {
      return tmp3(9545);
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