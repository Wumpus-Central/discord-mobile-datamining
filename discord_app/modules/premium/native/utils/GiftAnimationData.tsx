// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10960 from "../../../../../_runtime/metro/10960__.js";
import _mod10961 from "../../../../../_runtime/metro/10961__.js";
import _mod10962 from "../../../../../_runtime/metro/10962__.js";
import _mod10963 from "../../../../../_runtime/metro/10963__.js";
import _mod10964 from "../../../../../_runtime/metro/10964__.js";
import _mod10965 from "../../../../../_runtime/metro/10965__.js";
import _mod10966 from "../../../../../_runtime/metro/10966__.js";
import _mod10967 from "../../../../../_runtime/metro/10967__.js";
import _mod10968 from "../../../../../_runtime/metro/10968__.js";
import _mod10969 from "../../../../../_runtime/metro/10969__.js";
import _mod10970 from "../../../../../_runtime/metro/10970__.js";
import _mod10971 from "../../../../../_runtime/metro/10971__.js";
import _mod10972 from "../../../../../_runtime/metro/10972__.js";
import _mod10973 from "../../../../../_runtime/metro/10973__.js";
import _mod10974 from "../../../../../_runtime/metro/10974__.js";
import _mod10975 from "../../../../../_runtime/metro/10975__.js";
import _mod10976 from "../../../../../_runtime/metro/10976__.js";
import _mod10977 from "../../../../../_runtime/metro/10977__.js";
import _mod10978 from "../../../../../_runtime/metro/10978__.js";
import _mod10979 from "../../../../../_runtime/metro/10979__.js";
import _mod10980 from "../../../../../_runtime/metro/10980__.js";
import _mod10981 from "../../../../../_runtime/metro/10981__.js";
import _mod10982 from "../../../../../_runtime/metro/10982__.js";
import _mod10983 from "../../../../../_runtime/metro/10983__.js";
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
      return _mod10960;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10961;
    } else {
      return _mod10962;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10963;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10964;
    } else {
      return _mod10965;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10966;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10967;
    } else {
      return _mod10968;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10969;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10970;
    } else {
      return _mod10971;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10972;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10973;
    } else {
      return _mod10974;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10975;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10976;
    } else {
      return _mod10977;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10978;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10979;
    } else {
      return _mod10980;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10981;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10982;
    } else {
      return _mod10983;
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
