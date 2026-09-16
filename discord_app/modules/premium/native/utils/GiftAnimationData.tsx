// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10978 from "../../../../../_runtime/metro/10978__.js";
import _mod10979 from "../../../../../_runtime/metro/10979__.js";
import _mod10980 from "../../../../../_runtime/metro/10980__.js";
import _mod10981 from "../../../../../_runtime/metro/10981__.js";
import _mod10982 from "../../../../../_runtime/metro/10982__.js";
import _mod10983 from "../../../../../_runtime/metro/10983__.js";
import _mod10984 from "../../../../../_runtime/metro/10984__.js";
import _mod10985 from "../../../../../_runtime/metro/10985__.js";
import _mod10986 from "../../../../../_runtime/metro/10986__.js";
import _mod10987 from "../../../../../_runtime/metro/10987__.js";
import _mod10988 from "../../../../../_runtime/metro/10988__.js";
import _mod10989 from "../../../../../_runtime/metro/10989__.js";
import _mod10990 from "../../../../../_runtime/metro/10990__.js";
import _mod10991 from "../../../../../_runtime/metro/10991__.js";
import _mod10992 from "../../../../../_runtime/metro/10992__.js";
import _mod10993 from "../../../../../_runtime/metro/10993__.js";
import _mod10994 from "../../../../../_runtime/metro/10994__.js";
import _mod10995 from "../../../../../_runtime/metro/10995__.js";
import _mod10996 from "../../../../../_runtime/metro/10996__.js";
import _mod10997 from "../../../../../_runtime/metro/10997__.js";
import _mod10998 from "../../../../../_runtime/metro/10998__.js";
import _mod10999 from "../../../../../_runtime/metro/10999__.js";
import _mod11000 from "../../../../../_runtime/metro/11000__.js";
import _mod11001 from "../../../../../_runtime/metro/11001__.js";
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
      return _mod10978;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10979;
    } else {
      return _mod10980;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10981;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10982;
    } else {
      return _mod10983;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10984;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10985;
    } else {
      return _mod10986;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10987;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10988;
    } else {
      return _mod10989;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10990;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10991;
    } else {
      return _mod10992;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10993;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10994;
    } else {
      return _mod10995;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10996;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10997;
    } else {
      return _mod10998;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10999;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11000;
    } else {
      return _mod11001;
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
