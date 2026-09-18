// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod11080 from "../../../../../_runtime/metro/11080__.js";
import _mod11081 from "../../../../../_runtime/metro/11081__.js";
import _mod11082 from "../../../../../_runtime/metro/11082__.js";
import _mod11083 from "../../../../../_runtime/metro/11083__.js";
import _mod11084 from "../../../../../_runtime/metro/11084__.js";
import _mod11085 from "../../../../../_runtime/metro/11085__.js";
import _mod11086 from "../../../../../_runtime/metro/11086__.js";
import _mod11087 from "../../../../../_runtime/metro/11087__.js";
import _mod11088 from "../../../../../_runtime/metro/11088__.js";
import _mod11089 from "../../../../../_runtime/metro/11089__.js";
import _mod11090 from "../../../../../_runtime/metro/11090__.js";
import _mod11091 from "../../../../../_runtime/metro/11091__.js";
import _mod11092 from "../../../../../_runtime/metro/11092__.js";
import _mod11093 from "../../../../../_runtime/metro/11093__.js";
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
      return _mod11080;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11081;
    } else {
      return _mod11082;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11083;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11084;
    } else {
      return _mod11085;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11086;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11087;
    } else {
      return _mod11088;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11089;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11090;
    } else {
      return _mod11091;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11092;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11093;
    } else {
      return _mod11094;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11095;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11096;
    } else {
      return _mod11097;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11098;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11099;
    } else {
      return _mod11100;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11101;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11102;
    } else {
      return _mod11103;
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
