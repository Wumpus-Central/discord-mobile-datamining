// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import { PremiumGiftStyles } from "GuildFeatures";
import { _sendGiftMessage } from "../../PremiumGiftingUtils.tsx";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_9476").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
      return tmp17(9476);
    } else if (tmp17(7964).AnimationState.LOOP === ACTION) {
      return tmp17(9477);
    } else {
      return tmp17(9478);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(9479);
    } else if (tmp15(7964).AnimationState.LOOP === ACTION) {
      return tmp15(9480);
    } else {
      return tmp15(9481);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(9482);
    } else if (tmp13(7964).AnimationState.LOOP === ACTION) {
      return tmp13(9483);
    } else {
      return tmp13(9484);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(9485);
    } else if (tmp11(7964).AnimationState.LOOP === ACTION) {
      return tmp11(9486);
    } else {
      return tmp11(9487);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(9488);
    } else if (tmp9(7964).AnimationState.LOOP === ACTION) {
      return tmp9(9489);
    } else {
      return tmp9(9490);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(9491);
    } else if (tmp7(7964).AnimationState.LOOP === ACTION) {
      return tmp7(9492);
    } else {
      return tmp7(9493);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(9494);
    } else if (tmp5(7964).AnimationState.LOOP === ACTION) {
      return tmp5(9495);
    } else {
      return tmp5(9496);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(9497);
    } else if (tmp3(7964).AnimationState.LOOP === ACTION) {
      return tmp3(9498);
    } else {
      return tmp3(9499);
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