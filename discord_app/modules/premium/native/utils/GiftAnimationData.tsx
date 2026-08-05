import { _sendGiftMessage } from "../../PremiumGiftingUtils.tsx";
// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import { PremiumGiftStyles } from "GuildFeatures";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_9505").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
    if (_sendGiftMessage /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp17(9505);
    } else if (tmp17(7992).AnimationState.LOOP === ACTION) {
      return tmp17(9506);
    } else {
      return tmp17(9507);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp15(9508);
    } else if (tmp15(7992).AnimationState.LOOP === ACTION) {
      return tmp15(9509);
    } else {
      return tmp15(9510);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp13(9511);
    } else if (tmp13(7992).AnimationState.LOOP === ACTION) {
      return tmp13(9512);
    } else {
      return tmp13(9513);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp11(9514);
    } else if (tmp11(7992).AnimationState.LOOP === ACTION) {
      return tmp11(9515);
    } else {
      return tmp11(9516);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp9(9517);
    } else if (tmp9(7992).AnimationState.LOOP === ACTION) {
      return tmp9(9518);
    } else {
      return tmp9(9519);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp7(9520);
    } else if (tmp7(7992).AnimationState.LOOP === ACTION) {
      return tmp7(9521);
    } else {
      return tmp7(9522);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp5(9523);
    } else if (tmp5(7992).AnimationState.LOOP === ACTION) {
      return tmp5(9524);
    } else {
      return tmp5(9525);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp3(9526);
    } else if (tmp3(7992).AnimationState.LOOP === ACTION) {
      return tmp3(9527);
    } else {
      return tmp3(9528);
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