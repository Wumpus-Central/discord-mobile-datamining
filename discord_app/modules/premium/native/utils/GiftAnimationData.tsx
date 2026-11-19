// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod9498 from "../../../../../_runtime/metro/09498__.js";
import _mod9499 from "../../../../../_runtime/metro/09499__.js";
import _mod9500 from "../../../../../_runtime/metro/09500__.js";
import _mod9501 from "../../../../../_runtime/metro/09501__.js";
import _mod9502 from "../../../../../_runtime/metro/09502__.js";
import _mod9503 from "../../../../../_runtime/metro/09503__.js";
import _mod9504 from "../../../../../_runtime/metro/09504__.js";
import _mod9505 from "../../../../../_runtime/metro/09505__.js";
import _mod9506 from "../../../../../_runtime/metro/09506__.js";
import _mod9507 from "../../../../../_runtime/metro/09507__.js";
import _mod9508 from "../../../../../_runtime/metro/09508__.js";
import _mod9509 from "../../../../../_runtime/metro/09509__.js";
import _mod9510 from "../../../../../_runtime/metro/09510__.js";
import _mod9511 from "../../../../../_runtime/metro/09511__.js";
import _mod9512 from "../../../../../_runtime/metro/09512__.js";
import _mod9513 from "../../../../../_runtime/metro/09513__.js";
import _mod9514 from "../../../../../_runtime/metro/09514__.js";
import _mod9515 from "../../../../../_runtime/metro/09515__.js";
import _mod9516 from "../../../../../_runtime/metro/09516__.js";
import _mod9517 from "../../../../../_runtime/metro/09517__.js";
import _mod9518 from "../../../../../_runtime/metro/09518__.js";
import _mod9519 from "../../../../../_runtime/metro/09519__.js";
import _mod9520 from "../../../../../_runtime/metro/09520__.js";
import _mod9521 from "../../../../../_runtime/metro/09521__.js";
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
      return _mod9498;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9499;
    } else {
      return _mod9500;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9501;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9502;
    } else {
      return _mod9503;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9504;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9505;
    } else {
      return _mod9506;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9507;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9508;
    } else {
      return _mod9509;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9510;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9511;
    } else {
      return _mod9512;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9513;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9514;
    } else {
      return _mod9515;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9516;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9517;
    } else {
      return _mod9518;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod9519;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod9520;
    } else {
      return _mod9521;
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
