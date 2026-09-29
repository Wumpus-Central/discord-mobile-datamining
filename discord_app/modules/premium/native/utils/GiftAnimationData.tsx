// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10461 from "../../../../../_runtime/metro/10461__.js";
import _mod10462 from "../../../../../_runtime/metro/10462__.js";
import _mod10463 from "../../../../../_runtime/metro/10463__.js";
import _mod10464 from "../../../../../_runtime/metro/10464__.js";
import _mod10465 from "../../../../../_runtime/metro/10465__.js";
import _mod10466 from "../../../../../_runtime/metro/10466__.js";
import _mod10467 from "../../../../../_runtime/metro/10467__.js";
import _mod10468 from "../../../../../_runtime/metro/10468__.js";
import _mod10469 from "../../../../../_runtime/metro/10469__.js";
import _mod10470 from "../../../../../_runtime/metro/10470__.js";
import _mod10471 from "../../../../../_runtime/metro/10471__.js";
import _mod10472 from "../../../../../_runtime/metro/10472__.js";
import _mod10473 from "../../../../../_runtime/metro/10473__.js";
import _mod10474 from "../../../../../_runtime/metro/10474__.js";
import _mod10475 from "../../../../../_runtime/metro/10475__.js";
import _mod10476 from "../../../../../_runtime/metro/10476__.js";
import _mod10477 from "../../../../../_runtime/metro/10477__.js";
import _mod10478 from "../../../../../_runtime/metro/10478__.js";
import _mod10479 from "../../../../../_runtime/metro/10479__.js";
import _mod10480 from "../../../../../_runtime/metro/10480__.js";
import _mod10481 from "../../../../../_runtime/metro/10481__.js";
import _mod10482 from "../../../../../_runtime/metro/10482__.js";
import _mod10483 from "../../../../../_runtime/metro/10483__.js";
import _mod10484 from "../../../../../_runtime/metro/10484__.js";
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
      return _mod10461;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10462;
    } else {
      return _mod10463;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10464;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10465;
    } else {
      return _mod10466;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10467;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10468;
    } else {
      return _mod10469;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10470;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10471;
    } else {
      return _mod10472;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10473;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10474;
    } else {
      return _mod10475;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10476;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10477;
    } else {
      return _mod10478;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10479;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10480;
    } else {
      return _mod10481;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10482;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10483;
    } else {
      return _mod10484;
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
