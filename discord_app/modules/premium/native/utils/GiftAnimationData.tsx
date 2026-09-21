// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod11094 from "../../../../../_runtime/metro/11094__.js";
import _mod11095 from "../../../../../_runtime/metro/11095__.js";
import _mod11096 from "../../../../../_runtime/metro/11096__.js";
import _mod11097 from "../../../../../_runtime/metro/11097__.js";
import _mod11098 from "../../../../../_runtime/metro/11098__.js";
import _mod11099 from "../../../../../_runtime/metro/11099__.js";
import _mod11100 from "../../../../../_runtime/metro/11100__.js";
import _mod11101 from "../../../../../_runtime/metro/11101__.js";
import _mod11102 from "../../../../../_runtime/metro/11102__.js";
import _mod11103 from "../../../../../_runtime/metro/11103__.js";
import _mod11104 from "../../../../../_runtime/metro/11104__.js";
import _mod11105 from "../../../../../_runtime/metro/11105__.js";
import _mod11106 from "../../../../../_runtime/metro/11106__.js";
import _mod11107 from "../../../../../_runtime/metro/11107__.js";
import _mod11108 from "../../../../../_runtime/metro/11108__.js";
import _mod11109 from "../../../../../_runtime/metro/11109__.js";
import _mod11110 from "../../../../../_runtime/metro/11110__.js";
import _mod11111 from "../../../../../_runtime/metro/11111__.js";
import _mod11112 from "../../../../../_runtime/metro/11112__.js";
import _mod11113 from "../../../../../_runtime/metro/11113__.js";
import _mod11114 from "../../../../../_runtime/metro/11114__.js";
import _mod11115 from "../../../../../_runtime/metro/11115__.js";
import _mod11116 from "../../../../../_runtime/metro/11116__.js";
import _mod11117 from "../../../../../_runtime/metro/11117__.js";
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
      return _mod11094;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11095;
    } else {
      return _mod11096;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11097;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11098;
    } else {
      return _mod11099;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11100;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11101;
    } else {
      return _mod11102;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11103;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11104;
    } else {
      return _mod11105;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11106;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11107;
    } else {
      return _mod11108;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11109;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11110;
    } else {
      return _mod11111;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11112;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11113;
    } else {
      return _mod11114;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11115;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11116;
    } else {
      return _mod11117;
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
