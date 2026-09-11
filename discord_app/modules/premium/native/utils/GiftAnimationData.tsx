// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10921 from "../../../../../_runtime/metro/10921__.js";
import _mod10922 from "../../../../../_runtime/metro/10922__.js";
import _mod10923 from "../../../../../_runtime/metro/10923__.js";
import _mod10924 from "../../../../../_runtime/metro/10924__.js";
import _mod10925 from "../../../../../_runtime/metro/10925__.js";
import _mod10926 from "../../../../../_runtime/metro/10926__.js";
import _mod10927 from "../../../../../_runtime/metro/10927__.js";
import _mod10928 from "../../../../../_runtime/metro/10928__.js";
import _mod10929 from "../../../../../_runtime/metro/10929__.js";
import _mod10930 from "../../../../../_runtime/metro/10930__.js";
import _mod10931 from "../../../../../_runtime/metro/10931__.js";
import _mod10932 from "../../../../../_runtime/metro/10932__.js";
import _mod10933 from "../../../../../_runtime/metro/10933__.js";
import _mod10934 from "../../../../../_runtime/metro/10934__.js";
import _mod10935 from "../../../../../_runtime/metro/10935__.js";
import _mod10936 from "../../../../../_runtime/metro/10936__.js";
import _mod10937 from "../../../../../_runtime/metro/10937__.js";
import _mod10938 from "../../../../../_runtime/metro/10938__.js";
import _mod10939 from "../../../../../_runtime/metro/10939__.js";
import _mod10940 from "../../../../../_runtime/metro/10940__.js";
import _mod10941 from "../../../../../_runtime/metro/10941__.js";
import _mod10942 from "../../../../../_runtime/metro/10942__.js";
import _mod10943 from "../../../../../_runtime/metro/10943__.js";
import _mod10944 from "../../../../../_runtime/metro/10944__.js";
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
      return _mod10921;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10922;
    } else {
      return _mod10923;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10924;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10925;
    } else {
      return _mod10926;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10927;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10928;
    } else {
      return _mod10929;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10930;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10931;
    } else {
      return _mod10932;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10933;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10934;
    } else {
      return _mod10935;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10936;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10937;
    } else {
      return _mod10938;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10939;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10940;
    } else {
      return _mod10941;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10942;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10943;
    } else {
      return _mod10944;
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
