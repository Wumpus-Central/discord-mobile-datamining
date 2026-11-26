// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod11321 from "../../../../../_runtime/metro/11321__.js";
import _mod11322 from "../../../../../_runtime/metro/11322__.js";
import _mod11323 from "../../../../../_runtime/metro/11323__.js";
import _mod11324 from "../../../../../_runtime/metro/11324__.js";
import _mod11325 from "../../../../../_runtime/metro/11325__.js";
import _mod11326 from "../../../../../_runtime/metro/11326__.js";
import _mod11327 from "../../../../../_runtime/metro/11327__.js";
import _mod11328 from "../../../../../_runtime/metro/11328__.js";
import _mod11329 from "../../../../../_runtime/metro/11329__.js";
import _mod11330 from "../../../../../_runtime/metro/11330__.js";
import _mod11331 from "../../../../../_runtime/metro/11331__.js";
import _mod11332 from "../../../../../_runtime/metro/11332__.js";
import _mod11333 from "../../../../../_runtime/metro/11333__.js";
import _mod11334 from "../../../../../_runtime/metro/11334__.js";
import _mod11335 from "../../../../../_runtime/metro/11335__.js";
import _mod11336 from "../../../../../_runtime/metro/11336__.js";
import _mod11337 from "../../../../../_runtime/metro/11337__.js";
import _mod11338 from "../../../../../_runtime/metro/11338__.js";
import _mod11339 from "../../../../../_runtime/metro/11339__.js";
import _mod11340 from "../../../../../_runtime/metro/11340__.js";
import _mod11341 from "../../../../../_runtime/metro/11341__.js";
import _mod11342 from "../../../../../_runtime/metro/11342__.js";
import _mod11343 from "../../../../../_runtime/metro/11343__.js";
import _mod11344 from "../../../../../_runtime/metro/11344__.js";
import size from "../../../../../_runtime/metro/00002__.js";

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
      return _mod11321;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11322;
    } else {
      return _mod11323;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11324;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11325;
    } else {
      return _mod11326;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11327;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11328;
    } else {
      return _mod11329;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11330;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11331;
    } else {
      return _mod11332;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11333;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11334;
    } else {
      return _mod11335;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11336;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11337;
    } else {
      return _mod11338;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11339;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11340;
    } else {
      return _mod11341;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11342;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11343;
    } else {
      return _mod11344;
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
