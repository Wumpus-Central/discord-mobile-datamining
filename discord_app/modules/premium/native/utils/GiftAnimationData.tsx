// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10864 from "../../../../../_runtime/metro/10864__.js";
import _mod10865 from "../../../../../_runtime/metro/10865__.js";
import _mod10866 from "../../../../../_runtime/metro/10866__.js";
import _mod10867 from "../../../../../_runtime/metro/10867__.js";
import _mod10868 from "../../../../../_runtime/metro/10868__.js";
import _mod10869 from "../../../../../_runtime/metro/10869__.js";
import _mod10870 from "../../../../../_runtime/metro/10870__.js";
import _mod10871 from "../../../../../_runtime/metro/10871__.js";
import _mod10872 from "../../../../../_runtime/metro/10872__.js";
import _mod10873 from "../../../../../_runtime/metro/10873__.js";
import _mod10874 from "../../../../../_runtime/metro/10874__.js";
import _mod10875 from "../../../../../_runtime/metro/10875__.js";
import _mod10876 from "../../../../../_runtime/metro/10876__.js";
import _mod10877 from "../../../../../_runtime/metro/10877__.js";
import _mod10878 from "../../../../../_runtime/metro/10878__.js";
import _mod10879 from "../../../../../_runtime/metro/10879__.js";
import _mod10880 from "../../../../../_runtime/metro/10880__.js";
import _mod10881 from "../../../../../_runtime/metro/10881__.js";
import _mod10882 from "../../../../../_runtime/metro/10882__.js";
import _mod10883 from "../../../../../_runtime/metro/10883__.js";
import _mod10884 from "../../../../../_runtime/metro/10884__.js";
import _mod10885 from "../../../../../_runtime/metro/10885__.js";
import _mod10886 from "../../../../../_runtime/metro/10886__.js";
import _mod10887 from "../../../../../_runtime/metro/10887__.js";
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
      return _mod10864;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10865;
    } else {
      return _mod10866;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10867;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10868;
    } else {
      return _mod10869;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10870;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10871;
    } else {
      return _mod10872;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10873;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10874;
    } else {
      return _mod10875;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10876;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10877;
    } else {
      return _mod10878;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10879;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10880;
    } else {
      return _mod10881;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10882;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10883;
    } else {
      return _mod10884;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10885;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10886;
    } else {
      return _mod10887;
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
