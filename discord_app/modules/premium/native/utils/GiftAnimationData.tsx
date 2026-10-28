// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10623 from "../../../../../_runtime/metro/10623__.js";
import _mod10624 from "../../../../../_runtime/metro/10624__.js";
import _mod10625 from "../../../../../_runtime/metro/10625__.js";
import _mod10626 from "../../../../../_runtime/metro/10626__.js";
import _mod10627 from "../../../../../_runtime/metro/10627__.js";
import _mod10628 from "../../../../../_runtime/metro/10628__.js";
import _mod10629 from "../../../../../_runtime/metro/10629__.js";
import _mod10630 from "../../../../../_runtime/metro/10630__.js";
import _mod10631 from "../../../../../_runtime/metro/10631__.js";
import _mod10632 from "../../../../../_runtime/metro/10632__.js";
import _mod10633 from "../../../../../_runtime/metro/10633__.js";
import _mod10634 from "../../../../../_runtime/metro/10634__.js";
import _mod10635 from "../../../../../_runtime/metro/10635__.js";
import _mod10636 from "../../../../../_runtime/metro/10636__.js";
import _mod10637 from "../../../../../_runtime/metro/10637__.js";
import _mod10638 from "../../../../../_runtime/metro/10638__.js";
import _mod10639 from "../../../../../_runtime/metro/10639__.js";
import _mod10640 from "../../../../../_runtime/metro/10640__.js";
import _mod10641 from "../../../../../_runtime/metro/10641__.js";
import _mod10642 from "../../../../../_runtime/metro/10642__.js";
import _mod10643 from "../../../../../_runtime/metro/10643__.js";
import _mod10644 from "../../../../../_runtime/metro/10644__.js";
import _mod10645 from "../../../../../_runtime/metro/10645__.js";
import _mod10646 from "../../../../../_runtime/metro/10646__.js";
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
      return _mod10623;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10624;
    } else {
      return _mod10625;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10626;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10627;
    } else {
      return _mod10628;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10629;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10630;
    } else {
      return _mod10631;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10632;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10633;
    } else {
      return _mod10634;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10635;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10636;
    } else {
      return _mod10637;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10638;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10639;
    } else {
      return _mod10640;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10641;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10642;
    } else {
      return _mod10643;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10644;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10645;
    } else {
      return _mod10646;
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
