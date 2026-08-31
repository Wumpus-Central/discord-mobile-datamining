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
      return tmp17(10566);
    } else if (tmp17(7959).AnimationState.LOOP === ACTION) {
      return tmp17(10567);
    } else {
      return tmp17(10568);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(10569);
    } else if (tmp15(7959).AnimationState.LOOP === ACTION) {
      return tmp15(10570);
    } else {
      return tmp15(10571);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(10572);
    } else if (tmp13(7959).AnimationState.LOOP === ACTION) {
      return tmp13(10573);
    } else {
      return tmp13(10574);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(10575);
    } else if (tmp11(7959).AnimationState.LOOP === ACTION) {
      return tmp11(10576);
    } else {
      return tmp11(10577);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(10578);
    } else if (tmp9(7959).AnimationState.LOOP === ACTION) {
      return tmp9(10579);
    } else {
      return tmp9(10580);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(10581);
    } else if (tmp7(7959).AnimationState.LOOP === ACTION) {
      return tmp7(10582);
    } else {
      return tmp7(10583);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(10584);
    } else if (tmp5(7959).AnimationState.LOOP === ACTION) {
      return tmp5(10585);
    } else {
      return tmp5(10586);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(10587);
    } else if (tmp3(7959).AnimationState.LOOP === ACTION) {
      return tmp3(10588);
    } else {
      return tmp3(10589);
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