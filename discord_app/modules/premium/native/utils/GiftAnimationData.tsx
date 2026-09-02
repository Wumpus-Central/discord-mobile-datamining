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
      return tmp17(10825);
    } else if (tmp17(8000).AnimationState.LOOP === ACTION) {
      return tmp17(10826);
    } else {
      return tmp17(10827);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(10828);
    } else if (tmp15(8000).AnimationState.LOOP === ACTION) {
      return tmp15(10829);
    } else {
      return tmp15(10830);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(10831);
    } else if (tmp13(8000).AnimationState.LOOP === ACTION) {
      return tmp13(10832);
    } else {
      return tmp13(10833);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(10834);
    } else if (tmp11(8000).AnimationState.LOOP === ACTION) {
      return tmp11(10835);
    } else {
      return tmp11(10836);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(10837);
    } else if (tmp9(8000).AnimationState.LOOP === ACTION) {
      return tmp9(10838);
    } else {
      return tmp9(10839);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(10840);
    } else if (tmp7(8000).AnimationState.LOOP === ACTION) {
      return tmp7(10841);
    } else {
      return tmp7(10842);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(10843);
    } else if (tmp5(8000).AnimationState.LOOP === ACTION) {
      return tmp5(10844);
    } else {
      return tmp5(10845);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(10846);
    } else if (tmp3(8000).AnimationState.LOOP === ACTION) {
      return tmp3(10847);
    } else {
      return tmp3(10848);
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
