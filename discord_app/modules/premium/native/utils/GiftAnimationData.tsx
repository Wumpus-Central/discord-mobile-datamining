// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
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
import _mod10842 from "../../../../../_runtime/metro/10842__.js";
import _mod10843 from "../../../../../_runtime/metro/10843__.js";
import _mod10844 from "../../../../../_runtime/metro/10844__.js";
import _mod10845 from "../../../../../_runtime/metro/10845__.js";
import _mod10846 from "../../../../../_runtime/metro/10846__.js";
import _mod10847 from "../../../../../_runtime/metro/10847__.js";
import _mod10848 from "../../../../../_runtime/metro/10848__.js";
import _mod10849 from "../../../../../_runtime/metro/10849__.js";
import _mod10850 from "../../../../../_runtime/metro/10850__.js";
import _mod10851 from "../../../../../_runtime/metro/10851__.js";
import _mod10852 from "../../../../../_runtime/metro/10852__.js";
import _mod10853 from "../../../../../_runtime/metro/10853__.js";
import _mod10854 from "../../../../../_runtime/metro/10854__.js";
import _mod10855 from "../../../../../_runtime/metro/10855__.js";
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
      return _mod10832;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10833;
    } else {
      return _mod10834;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10835;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10836;
    } else {
      return _mod10837;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10838;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10839;
    } else {
      return _mod10840;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10841;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10842;
    } else {
      return _mod10843;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10844;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10845;
    } else {
      return _mod10846;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10847;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10848;
    } else {
      return _mod10849;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10850;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10851;
    } else {
      return _mod10852;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10853;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10854;
    } else {
      return _mod10855;
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
