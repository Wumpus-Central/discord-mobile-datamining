// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod11687 from "../../../../../_runtime/metro/11687__.js";
import _mod11688 from "../../../../../_runtime/metro/11688__.js";
import _mod11689 from "../../../../../_runtime/metro/11689__.js";
import _mod11690 from "../../../../../_runtime/metro/11690__.js";
import _mod11691 from "../../../../../_runtime/metro/11691__.js";
import _mod11692 from "../../../../../_runtime/metro/11692__.js";
import _mod11693 from "../../../../../_runtime/metro/11693__.js";
import _mod11694 from "../../../../../_runtime/metro/11694__.js";
import _mod11695 from "../../../../../_runtime/metro/11695__.js";
import _mod11696 from "../../../../../_runtime/metro/11696__.js";
import _mod11697 from "../../../../../_runtime/metro/11697__.js";
import _mod11698 from "../../../../../_runtime/metro/11698__.js";
import _mod11699 from "../../../../../_runtime/metro/11699__.js";
import _mod11700 from "../../../../../_runtime/metro/11700__.js";
import _mod11701 from "../../../../../_runtime/metro/11701__.js";
import _mod11702 from "../../../../../_runtime/metro/11702__.js";
import _mod11703 from "../../../../../_runtime/metro/11703__.js";
import _mod11704 from "../../../../../_runtime/metro/11704__.js";
import _mod11705 from "../../../../../_runtime/metro/11705__.js";
import _mod11706 from "../../../../../_runtime/metro/11706__.js";
import _mod11707 from "../../../../../_runtime/metro/11707__.js";
import _mod11708 from "../../../../../_runtime/metro/11708__.js";
import _mod11709 from "../../../../../_runtime/metro/11709__.js";
import _mod11710 from "../../../../../_runtime/metro/11710__.js";
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
      return _mod11687;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11688;
    } else {
      return _mod11689;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11690;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11691;
    } else {
      return _mod11692;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11693;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11694;
    } else {
      return _mod11695;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11696;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11697;
    } else {
      return _mod11698;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11699;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11700;
    } else {
      return _mod11701;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11702;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11703;
    } else {
      return _mod11704;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11705;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11706;
    } else {
      return _mod11707;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11708;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11709;
    } else {
      return _mod11710;
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
