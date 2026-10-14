// === Module 10198: GiftAnimationData ===

// Module 10198 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8117 */;
import _mod10199 from "module_10199" /* 10199 */;
import _mod10200 from "module_10200" /* 10200 */;
import _mod10201 from "module_10201" /* 10201 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10203 from "module_10203" /* 10203 */;
import _mod10204 from "module_10204" /* 10204 */;
import _mod10205 from "module_10205" /* 10205 */;
import _mod10206 from "module_10206" /* 10206 */;
import _mod10207 from "module_10207" /* 10207 */;
import _mod10208 from "module_10208" /* 10208 */;
import _mod10209 from "module_10209" /* 10209 */;
import _mod10210 from "module_10210" /* 10210 */;
import _mod10211 from "module_10211" /* 10211 */;
import _mod10212 from "module_10212" /* 10212 */;
import _mod10213 from "module_10213" /* 10213 */;
import _mod10214 from "module_10214" /* 10214 */;
import _mod10215 from "module_10215" /* 10215 */;
import _mod10216 from "module_10216" /* 10216 */;
import _mod10217 from "module_10217" /* 10217 */;
import _mod10218 from "module_10218" /* 10218 */;
import _mod10219 from "module_10219" /* 10219 */;
import _mod10220 from "module_10220" /* 10220 */;
import _mod10221 from "module_10221" /* 10221 */;
import _mod10222 from "module_10222" /* 10222 */;
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
      return _mod10199;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10200;
    } else {
      return _mod10201;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10202;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10203;
    } else {
      return _mod10204;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10205;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10206;
    } else {
      return _mod10207;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10208;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10209;
    } else {
      return _mod10210;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10211;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10212;
    } else {
      return _mod10213;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10214;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10215;
    } else {
      return _mod10216;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10217;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10218;
    } else {
      return _mod10219;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10220;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10221;
    } else {
      return _mod10222;
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