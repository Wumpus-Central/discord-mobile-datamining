// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10546 from "../../../../../_runtime/metro/10546__.js";
import _mod10547 from "../../../../../_runtime/metro/10547__.js";
import _mod10548 from "../../../../../_runtime/metro/10548__.js";
import _mod10549 from "../../../../../_runtime/metro/10549__.js";
import _mod10550 from "../../../../../_runtime/metro/10550__.js";
import _mod10551 from "../../../../../_runtime/metro/10551__.js";
import _mod10552 from "../../../../../_runtime/metro/10552__.js";
import _mod10553 from "../../../../../_runtime/metro/10553__.js";
import _mod10554 from "../../../../../_runtime/metro/10554__.js";
import _mod10555 from "../../../../../_runtime/metro/10555__.js";
import _mod10556 from "../../../../../_runtime/metro/10556__.js";
import _mod10557 from "../../../../../_runtime/metro/10557__.js";
import _mod10558 from "../../../../../_runtime/metro/10558__.js";
import _mod10559 from "../../../../../_runtime/metro/10559__.js";
import _mod10560 from "../../../../../_runtime/metro/10560__.js";
import _mod10561 from "../../../../../_runtime/metro/10561__.js";
import _mod10562 from "../../../../../_runtime/metro/10562__.js";
import _mod10563 from "../../../../../_runtime/metro/10563__.js";
import _mod10564 from "../../../../../_runtime/metro/10564__.js";
import _mod10565 from "../../../../../_runtime/metro/10565__.js";
import _mod10566 from "../../../../../_runtime/metro/10566__.js";
import _mod10567 from "../../../../../_runtime/metro/10567__.js";
import _mod10568 from "../../../../../_runtime/metro/10568__.js";
import _mod10569 from "../../../../../_runtime/metro/10569__.js";
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
      return _mod10546;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10547;
    } else {
      return _mod10548;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10549;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10550;
    } else {
      return _mod10551;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10552;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10553;
    } else {
      return _mod10554;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10555;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10556;
    } else {
      return _mod10557;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10558;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10559;
    } else {
      return _mod10560;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10561;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10562;
    } else {
      return _mod10563;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10564;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10565;
    } else {
      return _mod10566;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10567;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10568;
    } else {
      return _mod10569;
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
