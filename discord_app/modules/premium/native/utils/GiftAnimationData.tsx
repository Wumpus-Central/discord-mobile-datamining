// === Module 10173: GiftAnimationData ===

// Module 10173 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8083 */;
import _mod10174 from "module_10174" /* 10174 */;
import _mod10175 from "module_10175" /* 10175 */;
import _mod10176 from "module_10176" /* 10176 */;
import _mod10177 from "module_10177" /* 10177 */;
import _mod10178 from "module_10178" /* 10178 */;
import _mod10179 from "module_10179" /* 10179 */;
import _mod10180 from "module_10180" /* 10180 */;
import _mod10181 from "module_10181" /* 10181 */;
import _mod10182 from "module_10182" /* 10182 */;
import _mod10183 from "module_10183" /* 10183 */;
import _mod10184 from "module_10184" /* 10184 */;
import _mod10185 from "module_10185" /* 10185 */;
import _mod10186 from "module_10186" /* 10186 */;
import _mod10187 from "module_10187" /* 10187 */;
import _mod10188 from "module_10188" /* 10188 */;
import _mod10189 from "module_10189" /* 10189 */;
import _mod10190 from "module_10190" /* 10190 */;
import _mod10191 from "module_10191" /* 10191 */;
import _mod10192 from "module_10192" /* 10192 */;
import _mod10193 from "module_10193" /* 10193 */;
import _mod10194 from "module_10194" /* 10194 */;
import _mod10195 from "module_10195" /* 10195 */;
import _mod10196 from "module_10196" /* 10196 */;
import _mod10197 from "module_10197" /* 10197 */;
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
      return _mod10174;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10175;
    } else {
      return _mod10176;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10177;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10178;
    } else {
      return _mod10179;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10180;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10181;
    } else {
      return _mod10182;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10183;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10184;
    } else {
      return _mod10185;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10186;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10187;
    } else {
      return _mod10188;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10189;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10190;
    } else {
      return _mod10191;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10192;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10193;
    } else {
      return _mod10194;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10195;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10196;
    } else {
      return _mod10197;
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