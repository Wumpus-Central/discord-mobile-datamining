// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
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
import _mod10888 from "../../../../../_runtime/metro/10888__.js";
import _mod10889 from "../../../../../_runtime/metro/10889__.js";
import _mod10890 from "../../../../../_runtime/metro/10890__.js";
import _mod10891 from "../../../../../_runtime/metro/10891__.js";
import _mod10892 from "../../../../../_runtime/metro/10892__.js";
import _mod10893 from "../../../../../_runtime/metro/10893__.js";
import _mod10894 from "../../../../../_runtime/metro/10894__.js";
import _mod10895 from "../../../../../_runtime/metro/10895__.js";
import _mod10896 from "../../../../../_runtime/metro/10896__.js";
import _mod10897 from "../../../../../_runtime/metro/10897__.js";
import _mod10898 from "../../../../../_runtime/metro/10898__.js";
import _mod10899 from "../../../../../_runtime/metro/10899__.js";
import _mod10900 from "../../../../../_runtime/metro/10900__.js";
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
      return _mod10877;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10878;
    } else {
      return _mod10879;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10880;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10881;
    } else {
      return _mod10882;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10883;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10884;
    } else {
      return _mod10885;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10886;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10887;
    } else {
      return _mod10888;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10889;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10890;
    } else {
      return _mod10891;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10892;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10893;
    } else {
      return _mod10894;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10895;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10896;
    } else {
      return _mod10897;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10898;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10899;
    } else {
      return _mod10900;
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
