// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10902 from "../../../../../_runtime/metro/10902__.js";
import _mod10903 from "../../../../../_runtime/metro/10903__.js";
import _mod10904 from "../../../../../_runtime/metro/10904__.js";
import _mod10905 from "../../../../../_runtime/metro/10905__.js";
import _mod10906 from "../../../../../_runtime/metro/10906__.js";
import _mod10907 from "../../../../../_runtime/metro/10907__.js";
import _mod10908 from "../../../../../_runtime/metro/10908__.js";
import _mod10909 from "../../../../../_runtime/metro/10909__.js";
import _mod10910 from "../../../../../_runtime/metro/10910__.js";
import _mod10911 from "../../../../../_runtime/metro/10911__.js";
import _mod10912 from "../../../../../_runtime/metro/10912__.js";
import _mod10913 from "../../../../../_runtime/metro/10913__.js";
import _mod10914 from "../../../../../_runtime/metro/10914__.js";
import _mod10915 from "../../../../../_runtime/metro/10915__.js";
import _mod10916 from "../../../../../_runtime/metro/10916__.js";
import _mod10917 from "../../../../../_runtime/metro/10917__.js";
import _mod10918 from "../../../../../_runtime/metro/10918__.js";
import _mod10919 from "../../../../../_runtime/metro/10919__.js";
import _mod10920 from "../../../../../_runtime/metro/10920__.js";
import _mod10921 from "../../../../../_runtime/metro/10921__.js";
import _mod10922 from "../../../../../_runtime/metro/10922__.js";
import _mod10923 from "../../../../../_runtime/metro/10923__.js";
import _mod10924 from "../../../../../_runtime/metro/10924__.js";
import _mod10925 from "../../../../../_runtime/metro/10925__.js";
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
      return _mod10902;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10903;
    } else {
      return _mod10904;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10905;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10906;
    } else {
      return _mod10907;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10908;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10909;
    } else {
      return _mod10910;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10911;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10912;
    } else {
      return _mod10913;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10914;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10915;
    } else {
      return _mod10916;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10917;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10918;
    } else {
      return _mod10919;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10920;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10921;
    } else {
      return _mod10922;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10923;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10924;
    } else {
      return _mod10925;
    }
  } else {
    if (PremiumGiftStyles.SNOWGLOBE !== giftStyle) {
      if (PremiumGiftStyles.BOX !== giftStyle) {
        const CUP = PremiumGiftStyles.CUP;
      }
    }
    const _Error = Error;
    throw Error();
  }
};
