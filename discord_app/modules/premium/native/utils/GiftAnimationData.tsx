// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10412 from "../../../../../_runtime/metro/10412__.js";
import _mod10413 from "../../../../../_runtime/metro/10413__.js";
import _mod10414 from "../../../../../_runtime/metro/10414__.js";
import _mod10415 from "../../../../../_runtime/metro/10415__.js";
import _mod10416 from "../../../../../_runtime/metro/10416__.js";
import _mod10417 from "../../../../../_runtime/metro/10417__.js";
import _mod10418 from "../../../../../_runtime/metro/10418__.js";
import _mod10419 from "../../../../../_runtime/metro/10419__.js";
import _mod10420 from "../../../../../_runtime/metro/10420__.js";
import _mod10421 from "../../../../../_runtime/metro/10421__.js";
import _mod10422 from "../../../../../_runtime/metro/10422__.js";
import _mod10423 from "../../../../../_runtime/metro/10423__.js";
import _mod10424 from "../../../../../_runtime/metro/10424__.js";
import _mod10425 from "../../../../../_runtime/metro/10425__.js";
import _mod10426 from "../../../../../_runtime/metro/10426__.js";
import _mod10427 from "../../../../../_runtime/metro/10427__.js";
import _mod10428 from "../../../../../_runtime/metro/10428__.js";
import _mod10429 from "../../../../../_runtime/metro/10429__.js";
import _mod10430 from "../../../../../_runtime/metro/10430__.js";
import _mod10431 from "../../../../../_runtime/metro/10431__.js";
import _mod10432 from "../../../../../_runtime/metro/10432__.js";
import _mod10433 from "../../../../../_runtime/metro/10433__.js";
import _mod10434 from "../../../../../_runtime/metro/10434__.js";
import _mod10435 from "../../../../../_runtime/metro/10435__.js";
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
      return _mod10412;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10413;
    } else {
      return _mod10414;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10415;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10416;
    } else {
      return _mod10417;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10418;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10419;
    } else {
      return _mod10420;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10421;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10422;
    } else {
      return _mod10423;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10424;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10425;
    } else {
      return _mod10426;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10427;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10428;
    } else {
      return _mod10429;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10430;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10431;
    } else {
      return _mod10432;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10433;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10434;
    } else {
      return _mod10435;
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
