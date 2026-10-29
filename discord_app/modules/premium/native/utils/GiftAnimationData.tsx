// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10656 from "../../../../../_runtime/metro/10656__.js";
import _mod10657 from "../../../../../_runtime/metro/10657__.js";
import _mod10658 from "../../../../../_runtime/metro/10658__.js";
import _mod10659 from "../../../../../_runtime/metro/10659__.js";
import _mod10660 from "../../../../../_runtime/metro/10660__.js";
import _mod10661 from "../../../../../_runtime/metro/10661__.js";
import _mod10662 from "../../../../../_runtime/metro/10662__.js";
import _mod10663 from "../../../../../_runtime/metro/10663__.js";
import _mod10664 from "../../../../../_runtime/metro/10664__.js";
import _mod10665 from "../../../../../_runtime/metro/10665__.js";
import _mod10666 from "../../../../../_runtime/metro/10666__.js";
import _mod10667 from "../../../../../_runtime/metro/10667__.js";
import _mod10668 from "../../../../../_runtime/metro/10668__.js";
import _mod10669 from "../../../../../_runtime/metro/10669__.js";
import _mod10670 from "../../../../../_runtime/metro/10670__.js";
import _mod10671 from "../../../../../_runtime/metro/10671__.js";
import _mod10672 from "../../../../../_runtime/metro/10672__.js";
import _mod10673 from "../../../../../_runtime/metro/10673__.js";
import _mod10674 from "../../../../../_runtime/metro/10674__.js";
import _mod10675 from "../../../../../_runtime/metro/10675__.js";
import _mod10676 from "../../../../../_runtime/metro/10676__.js";
import _mod10677 from "../../../../../_runtime/metro/10677__.js";
import _mod10678 from "../../../../../_runtime/metro/10678__.js";
import _mod10679 from "../../../../../_runtime/metro/10679__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const LottieType = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = size.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export { LottieType };
export function getLottieType(giftStyle) {
  if (giftStyle === PremiumGiftStyles.NITROWEEN_STANDARD) {
    let _JSON = obj.LOTTIE;
  } else {
    _JSON = obj.JSON;
  }
  return _JSON;
}
export function getGiftAnimationData(giftStyle, ACTION) {
  if (PremiumGiftStyles.STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10656;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10657;
    } else {
      return _mod10658;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10659;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10660;
    } else {
      return _mod10661;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10662;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10663;
    } else {
      return _mod10664;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10665;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10666;
    } else {
      return _mod10667;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10668;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10669;
    } else {
      return _mod10670;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10671;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10672;
    } else {
      return _mod10673;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10674;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10675;
    } else {
      return _mod10676;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10677;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10678;
    } else {
      return _mod10679;
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
}
