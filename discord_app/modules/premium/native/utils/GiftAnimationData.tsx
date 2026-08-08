// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import { PremiumGiftStyles } from "GuildFeatures";
import { _sendGiftMessage } from "../../PremiumGiftingUtils.tsx";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_9587").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
      return tmp17(9587);
    } else if (tmp17(8182).AnimationState.LOOP === ACTION) {
      return tmp17(9588);
    } else {
      return tmp17(9589);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(9590);
    } else if (tmp15(8182).AnimationState.LOOP === ACTION) {
      return tmp15(9591);
    } else {
      return tmp15(9592);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(9593);
    } else if (tmp13(8182).AnimationState.LOOP === ACTION) {
      return tmp13(9594);
    } else {
      return tmp13(9595);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(9596);
    } else if (tmp11(8182).AnimationState.LOOP === ACTION) {
      return tmp11(9597);
    } else {
      return tmp11(9598);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(9599);
    } else if (tmp9(8182).AnimationState.LOOP === ACTION) {
      return tmp9(9600);
    } else {
      return tmp9(9601);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(9602);
    } else if (tmp7(8182).AnimationState.LOOP === ACTION) {
      return tmp7(9603);
    } else {
      return tmp7(9604);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(9605);
    } else if (tmp5(8182).AnimationState.LOOP === ACTION) {
      return tmp5(9606);
    } else {
      return tmp5(9607);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(9608);
    } else if (tmp3(8182).AnimationState.LOOP === ACTION) {
      return tmp3(9609);
    } else {
      return tmp3(9610);
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