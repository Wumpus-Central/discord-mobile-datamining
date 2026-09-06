// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const LottieType = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = size.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export { LottieType };
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
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp17(10832);
    } else if (tmp17(8082).AnimationState.LOOP === ACTION) {
      return tmp17(10833);
    } else {
      return tmp17(10834);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10835);
    } else if (tmp15(8082).AnimationState.LOOP === ACTION) {
      return tmp15(10836);
    } else {
      return tmp15(10837);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10838);
    } else if (tmp13(8082).AnimationState.LOOP === ACTION) {
      return tmp13(10839);
    } else {
      return tmp13(10840);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10841);
    } else if (tmp11(8082).AnimationState.LOOP === ACTION) {
      return tmp11(10842);
    } else {
      return tmp11(10843);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10844);
    } else if (tmp9(8082).AnimationState.LOOP === ACTION) {
      return tmp9(10845);
    } else {
      return tmp9(10846);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10847);
    } else if (tmp7(8082).AnimationState.LOOP === ACTION) {
      return tmp7(10848);
    } else {
      return tmp7(10849);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10850);
    } else if (tmp5(8082).AnimationState.LOOP === ACTION) {
      return tmp5(10851);
    } else {
      return tmp5(10852);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10853);
    } else if (tmp3(8082).AnimationState.LOOP === ACTION) {
      return tmp3(10854);
    } else {
      return tmp3(10855);
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
