// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10428 from "../../../../../_runtime/metro/10428__.js";
import _mod10429 from "../../../../../_runtime/metro/10429__.js";
import _mod10430 from "../../../../../_runtime/metro/10430__.js";
import _mod10431 from "../../../../../_runtime/metro/10431__.js";
import _mod10432 from "../../../../../_runtime/metro/10432__.js";
import _mod10433 from "../../../../../_runtime/metro/10433__.js";
import _mod10434 from "../../../../../_runtime/metro/10434__.js";
import _mod10435 from "../../../../../_runtime/metro/10435__.js";
import _mod10436 from "../../../../../_runtime/metro/10436__.js";
import _mod10437 from "../../../../../_runtime/metro/10437__.js";
import _mod10438 from "../../../../../_runtime/metro/10438__.js";
import _mod10439 from "../../../../../_runtime/metro/10439__.js";
import _mod10440 from "../../../../../_runtime/metro/10440__.js";
import _mod10441 from "../../../../../_runtime/metro/10441__.js";
import _mod10442 from "../../../../../_runtime/metro/10442__.js";
import _mod10443 from "../../../../../_runtime/metro/10443__.js";
import _mod10444 from "../../../../../_runtime/metro/10444__.js";
import _mod10445 from "../../../../../_runtime/metro/10445__.js";
import _mod10446 from "../../../../../_runtime/metro/10446__.js";
import _mod10447 from "../../../../../_runtime/metro/10447__.js";
import _mod10448 from "../../../../../_runtime/metro/10448__.js";
import _mod10449 from "../../../../../_runtime/metro/10449__.js";
import _mod10450 from "../../../../../_runtime/metro/10450__.js";
import _mod10451 from "../../../../../_runtime/metro/10451__.js";
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
      return _mod10428;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10429;
    } else {
      return _mod10430;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10431;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10432;
    } else {
      return _mod10433;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10434;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10435;
    } else {
      return _mod10436;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10437;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10438;
    } else {
      return _mod10439;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10440;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10441;
    } else {
      return _mod10442;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10443;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10444;
    } else {
      return _mod10445;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10446;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10447;
    } else {
      return _mod10448;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10449;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10450;
    } else {
      return _mod10451;
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
