import { PremiumGiftStyles } from "GuildFeatures";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_8966").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
    if (require(7980) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp17(8966);
    } else if (tmp17(7980).AnimationState.LOOP === ACTION) {
      return tmp17(8967);
    } else {
      return tmp17(8968);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (require(7980) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp15(8969);
    } else if (tmp15(7980).AnimationState.LOOP === ACTION) {
      return tmp15(8970);
    } else {
      return tmp15(8971);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (require(7980) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp13(8972);
    } else if (tmp13(7980).AnimationState.LOOP === ACTION) {
      return tmp13(8973);
    } else {
      return tmp13(8974);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (require(7980) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp11(8975);
    } else if (tmp11(7980).AnimationState.LOOP === ACTION) {
      return tmp11(8976);
    } else {
      return tmp11(8977);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(7980) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp9(8978);
    } else if (tmp9(7980).AnimationState.LOOP === ACTION) {
      return tmp9(8979);
    } else {
      return tmp9(8980);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (require(7980) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp7(8981);
    } else if (tmp7(7980).AnimationState.LOOP === ACTION) {
      return tmp7(8982);
    } else {
      return tmp7(8983);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (require(7980) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp5(8984);
    } else if (tmp5(7980).AnimationState.LOOP === ACTION) {
      return tmp5(8985);
    } else {
      return tmp5(8986);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (require(7980) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp3(8987);
    } else if (tmp3(7980).AnimationState.LOOP === ACTION) {
      return tmp3(8988);
    } else {
      return tmp3(8989);
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