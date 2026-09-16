// === Module 10977: GiftAnimationData ===

// Module 10977 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8199 */;
import _mod10978 from "module_10978" /* 10978 */;
import _mod10979 from "module_10979" /* 10979 */;
import _mod10980 from "module_10980" /* 10980 */;
import _mod10981 from "module_10981" /* 10981 */;
import _mod10982 from "module_10982" /* 10982 */;
import _mod10983 from "module_10983" /* 10983 */;
import _mod10984 from "module_10984" /* 10984 */;
import _mod10985 from "module_10985" /* 10985 */;
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