// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import { PremiumGiftStyles } from "GuildFeatures";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_8789").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
    if (require(7862) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp17(8789);
    } else if (tmp17(7862).AnimationState.LOOP === ACTION) {
      return tmp17(8790);
    } else {
      return tmp17(8791);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (require(7862) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp15(8792);
    } else if (tmp15(7862).AnimationState.LOOP === ACTION) {
      return tmp15(8793);
    } else {
      return tmp15(8794);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (require(7862) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp13(8795);
    } else if (tmp13(7862).AnimationState.LOOP === ACTION) {
      return tmp13(8796);
    } else {
      return tmp13(8797);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (require(7862) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp11(8798);
    } else if (tmp11(7862).AnimationState.LOOP === ACTION) {
      return tmp11(8799);
    } else {
      return tmp11(8800);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(7862) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp9(8801);
    } else if (tmp9(7862).AnimationState.LOOP === ACTION) {
      return tmp9(8802);
    } else {
      return tmp9(8803);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (require(7862) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp7(8804);
    } else if (tmp7(7862).AnimationState.LOOP === ACTION) {
      return tmp7(8805);
    } else {
      return tmp7(8806);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (require(7862) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp5(8807);
    } else if (tmp5(7862).AnimationState.LOOP === ACTION) {
      return tmp5(8808);
    } else {
      return tmp5(8809);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (require(7862) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp3(8810);
    } else if (tmp3(7862).AnimationState.LOOP === ACTION) {
      return tmp3(8811);
    } else {
      return tmp3(8812);
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