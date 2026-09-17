// === Module 10985: GiftAnimationData ===

// Module 10985 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8219 */;
import _mod10986 from "module_10986" /* 10986 */;
import _mod10987 from "module_10987" /* 10987 */;
import _mod10988 from "module_10988" /* 10988 */;
import _mod10989 from "module_10989" /* 10989 */;
import _mod10990 from "module_10990" /* 10990 */;
import _mod10991 from "module_10991" /* 10991 */;
import _mod10992 from "module_10992" /* 10992 */;
import _mod10993 from "module_10993" /* 10993 */;
import _mod10994 from "module_10994" /* 10994 */;
import _mod10995 from "module_10995" /* 10995 */;
import _mod10996 from "module_10996" /* 10996 */;
import _mod10997 from "module_10997" /* 10997 */;
import _mod10998 from "module_10998" /* 10998 */;
import _mod10999 from "module_10999" /* 10999 */;
import _mod11000 from "module_11000" /* 11000 */;
import _mod11001 from "module_11001" /* 11001 */;
import _mod11002 from "module_11002" /* 11002 */;
import _mod11003 from "module_11003" /* 11003 */;
import _mod11004 from "module_11004" /* 11004 */;
import _mod11005 from "module_11005" /* 11005 */;
import _mod11006 from "module_11006" /* 11006 */;
import _mod11007 from "module_11007" /* 11007 */;
import _mod11008 from "module_11008" /* 11008 */;
import _mod11009 from "module_11009" /* 11009 */;
import size from "module_2" /* 2 */;

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
      return _mod10986;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10987;
    } else {
      return _mod10988;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10989;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10990;
    } else {
      return _mod10991;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10992;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10993;
    } else {
      return _mod10994;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10995;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10996;
    } else {
      return _mod10997;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10998;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10999;
    } else {
      return _mod11000;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11001;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11002;
    } else {
      return _mod11003;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11004;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11005;
    } else {
      return _mod11006;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11007;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11008;
    } else {
      return _mod11009;
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