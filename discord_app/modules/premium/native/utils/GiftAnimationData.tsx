// === Module 10237: GiftAnimationData ===

// Module 10237 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 9341 */;
import _mod10238 from "module_10238" /* 10238 */;
import _mod10239 from "module_10239" /* 10239 */;
import _mod10240 from "module_10240" /* 10240 */;
import _mod10241 from "module_10241" /* 10241 */;
import _mod10242 from "module_10242" /* 10242 */;
import _mod10243 from "module_10243" /* 10243 */;
import _mod10244 from "module_10244" /* 10244 */;
import _mod10245 from "module_10245" /* 10245 */;
import _mod10246 from "module_10246" /* 10246 */;
import _mod10247 from "module_10247" /* 10247 */;
import _mod10248 from "module_10248" /* 10248 */;
import _mod10249 from "module_10249" /* 10249 */;
import _mod10250 from "module_10250" /* 10250 */;
import _mod10251 from "module_10251" /* 10251 */;
import _mod10252 from "module_10252" /* 10252 */;
import _mod10253 from "module_10253" /* 10253 */;
import _mod10254 from "module_10254" /* 10254 */;
import _mod10255 from "module_10255" /* 10255 */;
import _mod10256 from "module_10256" /* 10256 */;
import _mod10257 from "module_10257" /* 10257 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10259 from "module_10259" /* 10259 */;
import _mod10260 from "module_10260" /* 10260 */;
import _mod10261 from "module_10261" /* 10261 */;
import size from "module_2" /* 2 */;

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
      return _mod10238;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10239;
    } else {
      return _mod10240;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10241;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10242;
    } else {
      return _mod10243;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10244;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10245;
    } else {
      return _mod10246;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10247;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10248;
    } else {
      return _mod10249;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10250;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10251;
    } else {
      return _mod10252;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10253;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10254;
    } else {
      return _mod10255;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10256;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10257;
    } else {
      return _mod10258;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10259;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10260;
    } else {
      return _mod10261;
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