// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10818 from "../../../../../_runtime/metro/10818__.js";
import _mod10819 from "../../../../../_runtime/metro/10819__.js";
import _mod10820 from "../../../../../_runtime/metro/10820__.js";
import _mod10821 from "../../../../../_runtime/metro/10821__.js";
import _mod10822 from "../../../../../_runtime/metro/10822__.js";
import _mod10823 from "../../../../../_runtime/metro/10823__.js";
import _mod10824 from "../../../../../_runtime/metro/10824__.js";
import _mod10825 from "../../../../../_runtime/metro/10825__.js";
import _mod10826 from "../../../../../_runtime/metro/10826__.js";
import _mod10827 from "../../../../../_runtime/metro/10827__.js";
import _mod10828 from "../../../../../_runtime/metro/10828__.js";
import _mod10829 from "../../../../../_runtime/metro/10829__.js";
import _mod10830 from "../../../../../_runtime/metro/10830__.js";
import _mod10831 from "../../../../../_runtime/metro/10831__.js";
import _mod10832 from "../../../../../_runtime/metro/10832__.js";
import _mod10833 from "../../../../../_runtime/metro/10833__.js";
import _mod10834 from "../../../../../_runtime/metro/10834__.js";
import _mod10835 from "../../../../../_runtime/metro/10835__.js";
import _mod10836 from "../../../../../_runtime/metro/10836__.js";
import _mod10837 from "../../../../../_runtime/metro/10837__.js";
import _mod10838 from "../../../../../_runtime/metro/10838__.js";
import _mod10839 from "../../../../../_runtime/metro/10839__.js";
import _mod10840 from "../../../../../_runtime/metro/10840__.js";
import _mod10841 from "../../../../../_runtime/metro/10841__.js";
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
      return _mod10818;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10819;
    } else {
      return _mod10820;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10821;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10822;
    } else {
      return _mod10823;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10824;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10825;
    } else {
      return _mod10826;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10827;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10828;
    } else {
      return _mod10829;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10830;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10831;
    } else {
      return _mod10832;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10833;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10834;
    } else {
      return _mod10835;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10836;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10837;
    } else {
      return _mod10838;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10839;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10840;
    } else {
      return _mod10841;
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
