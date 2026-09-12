// === Module 10959: GiftAnimationData ===

// Module 10959 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8187 */;
import _mod10960 from "module_10960" /* 10960 */;
import _mod10961 from "module_10961" /* 10961 */;
import _mod10962 from "module_10962" /* 10962 */;
import _mod10963 from "module_10963" /* 10963 */;
import _mod10964 from "module_10964" /* 10964 */;
import _mod10965 from "module_10965" /* 10965 */;
import _mod10966 from "module_10966" /* 10966 */;
import _mod10967 from "module_10967" /* 10967 */;
import _mod10968 from "module_10968" /* 10968 */;
import _mod10969 from "module_10969" /* 10969 */;
import _mod10970 from "module_10970" /* 10970 */;
import _mod10971 from "module_10971" /* 10971 */;
import _mod10972 from "module_10972" /* 10972 */;
import _mod10973 from "module_10973" /* 10973 */;
import _mod10974 from "module_10974" /* 10974 */;
import _mod10975 from "module_10975" /* 10975 */;
import _mod10976 from "module_10976" /* 10976 */;
import _mod10977 from "module_10977" /* 10977 */;
import _mod10978 from "module_10978" /* 10978 */;
import _mod10979 from "module_10979" /* 10979 */;
import _mod10980 from "module_10980" /* 10980 */;
import _mod10981 from "module_10981" /* 10981 */;
import _mod10982 from "module_10982" /* 10982 */;
import _mod10983 from "module_10983" /* 10983 */;
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