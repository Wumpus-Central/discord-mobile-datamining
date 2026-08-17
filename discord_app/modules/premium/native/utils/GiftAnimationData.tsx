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
      return tmp17(9601);
    } else if (tmp17(8294).AnimationState.LOOP === ACTION) {
      return tmp17(9602);
    } else {
      return tmp17(9603);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(9604);
    } else if (tmp15(8294).AnimationState.LOOP === ACTION) {
      return tmp15(9605);
    } else {
      return tmp15(9606);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(9607);
    } else if (tmp13(8294).AnimationState.LOOP === ACTION) {
      return tmp13(9608);
    } else {
      return tmp13(9609);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(9610);
    } else if (tmp11(8294).AnimationState.LOOP === ACTION) {
      return tmp11(9611);
    } else {
      return tmp11(9612);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(9613);
    } else if (tmp9(8294).AnimationState.LOOP === ACTION) {
      return tmp9(9614);
    } else {
      return tmp9(9615);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(9616);
    } else if (tmp7(8294).AnimationState.LOOP === ACTION) {
      return tmp7(9617);
    } else {
      return tmp7(9618);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(9619);
    } else if (tmp5(8294).AnimationState.LOOP === ACTION) {
      return tmp5(9620);
    } else {
      return tmp5(9621);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(9622);
    } else if (tmp3(8294).AnimationState.LOOP === ACTION) {
      return tmp3(9623);
    } else {
      return tmp3(9624);
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