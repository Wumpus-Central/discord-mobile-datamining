// === Module 11321: GiftAnimationData ===

// Module 11321 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1389 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 11320 */;
import _mod11322 from "module_11322" /* 11322 */;
import _mod11323 from "module_11323" /* 11323 */;
import _mod11324 from "module_11324" /* 11324 */;
import _mod11325 from "module_11325" /* 11325 */;
import _mod11326 from "module_11326" /* 11326 */;
import _mod11327 from "module_11327" /* 11327 */;
import _mod11328 from "module_11328" /* 11328 */;
import _mod11329 from "module_11329" /* 11329 */;
import _mod11330 from "module_11330" /* 11330 */;
import _mod11331 from "module_11331" /* 11331 */;
import _mod11332 from "module_11332" /* 11332 */;
import _mod11333 from "module_11333" /* 11333 */;
import _mod11334 from "module_11334" /* 11334 */;
import _mod11335 from "module_11335" /* 11335 */;
import _mod11336 from "module_11336" /* 11336 */;
import _mod11337 from "module_11337" /* 11337 */;
import _mod11338 from "module_11338" /* 11338 */;
import _mod11339 from "module_11339" /* 11339 */;
import _mod11340 from "module_11340" /* 11340 */;
import _mod11341 from "module_11341" /* 11341 */;
import _mod11342 from "module_11342" /* 11342 */;
import _mod11343 from "module_11343" /* 11343 */;
import _mod11344 from "module_11344" /* 11344 */;
import _mod11345 from "module_11345" /* 11345 */;
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
      return _mod11322;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11323;
    } else {
      return _mod11324;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11325;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11326;
    } else {
      return _mod11327;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11328;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11329;
    } else {
      return _mod11330;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11331;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11332;
    } else {
      return _mod11333;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11334;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11335;
    } else {
      return _mod11336;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11337;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11338;
    } else {
      return _mod11339;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11340;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11341;
    } else {
      return _mod11342;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11343;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11344;
    } else {
      return _mod11345;
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