// === Module 10158: GiftAnimationData ===

// Module 10158 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8091 */;
import _mod10159 from "module_10159" /* 10159 */;
import _mod10160 from "module_10160" /* 10160 */;
import _mod10161 from "module_10161" /* 10161 */;
import _mod10162 from "module_10162" /* 10162 */;
import _mod10163 from "module_10163" /* 10163 */;
import _mod10164 from "module_10164" /* 10164 */;
import _mod10165 from "module_10165" /* 10165 */;
import _mod10166 from "module_10166" /* 10166 */;
import _mod10167 from "module_10167" /* 10167 */;
import _mod10168 from "module_10168" /* 10168 */;
import _mod10169 from "module_10169" /* 10169 */;
import _mod10170 from "module_10170" /* 10170 */;
import _mod10171 from "module_10171" /* 10171 */;
import _mod10172 from "module_10172" /* 10172 */;
import _mod10173 from "module_10173" /* 10173 */;
import _mod10174 from "module_10174" /* 10174 */;
import _mod10175 from "module_10175" /* 10175 */;
import _mod10176 from "module_10176" /* 10176 */;
import _mod10177 from "module_10177" /* 10177 */;
import _mod10178 from "module_10178" /* 10178 */;
import _mod10179 from "module_10179" /* 10179 */;
import _mod10180 from "module_10180" /* 10180 */;
import _mod10181 from "module_10181" /* 10181 */;
import _mod10182 from "module_10182" /* 10182 */;
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
      return _mod10159;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10160;
    } else {
      return _mod10161;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10162;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10163;
    } else {
      return _mod10164;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10165;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10166;
    } else {
      return _mod10167;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10168;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10169;
    } else {
      return _mod10170;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10171;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10172;
    } else {
      return _mod10173;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10174;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10175;
    } else {
      return _mod10176;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10177;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10178;
    } else {
      return _mod10179;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10180;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10181;
    } else {
      return _mod10182;
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