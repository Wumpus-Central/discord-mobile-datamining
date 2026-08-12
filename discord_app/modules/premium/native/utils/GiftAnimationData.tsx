// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import { PremiumGiftStyles } from "GuildFeatures";
import { _sendGiftMessage } from "../../PremiumGiftingUtils.tsx";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_9632").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
      return tmp17(9632);
    } else if (tmp17(8223).AnimationState.LOOP === ACTION) {
      return tmp17(9633);
    } else {
      return tmp17(9634);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(9635);
    } else if (tmp15(8223).AnimationState.LOOP === ACTION) {
      return tmp15(9636);
    } else {
      return tmp15(9637);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(9638);
    } else if (tmp13(8223).AnimationState.LOOP === ACTION) {
      return tmp13(9639);
    } else {
      return tmp13(9640);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(9641);
    } else if (tmp11(8223).AnimationState.LOOP === ACTION) {
      return tmp11(9642);
    } else {
      return tmp11(9643);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(9644);
    } else if (tmp9(8223).AnimationState.LOOP === ACTION) {
      return tmp9(9645);
    } else {
      return tmp9(9646);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(9647);
    } else if (tmp7(8223).AnimationState.LOOP === ACTION) {
      return tmp7(9648);
    } else {
      return tmp7(9649);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(9650);
    } else if (tmp5(8223).AnimationState.LOOP === ACTION) {
      return tmp5(9651);
    } else {
      return tmp5(9652);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(9653);
    } else if (tmp3(8223).AnimationState.LOOP === ACTION) {
      return tmp3(9654);
    } else {
      return tmp3(9655);
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