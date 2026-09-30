// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10495 from "../../../../../_runtime/metro/10495__.js";
import _mod10496 from "../../../../../_runtime/metro/10496__.js";
import _mod10497 from "../../../../../_runtime/metro/10497__.js";
import _mod10498 from "../../../../../_runtime/metro/10498__.js";
import _mod10499 from "../../../../../_runtime/metro/10499__.js";
import _mod10500 from "../../../../../_runtime/metro/10500__.js";
import _mod10501 from "../../../../../_runtime/metro/10501__.js";
import _mod10502 from "../../../../../_runtime/metro/10502__.js";
import _mod10503 from "../../../../../_runtime/metro/10503__.js";
import _mod10504 from "../../../../../_runtime/metro/10504__.js";
import _mod10505 from "../../../../../_runtime/metro/10505__.js";
import _mod10506 from "../../../../../_runtime/metro/10506__.js";
import _mod10507 from "../../../../../_runtime/metro/10507__.js";
import _mod10508 from "../../../../../_runtime/metro/10508__.js";
import _mod10509 from "../../../../../_runtime/metro/10509__.js";
import _mod10510 from "../../../../../_runtime/metro/10510__.js";
import _mod10511 from "../../../../../_runtime/metro/10511__.js";
import _mod10512 from "../../../../../_runtime/metro/10512__.js";
import _mod10513 from "../../../../../_runtime/metro/10513__.js";
import _mod10514 from "../../../../../_runtime/metro/10514__.js";
import _mod10515 from "../../../../../_runtime/metro/10515__.js";
import _mod10516 from "../../../../../_runtime/metro/10516__.js";
import _mod10517 from "../../../../../_runtime/metro/10517__.js";
import _mod10518 from "../../../../../_runtime/metro/10518__.js";
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
      return _mod10495;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10496;
    } else {
      return _mod10497;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10498;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10499;
    } else {
      return _mod10500;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10501;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10502;
    } else {
      return _mod10503;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10504;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10505;
    } else {
      return _mod10506;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10507;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10508;
    } else {
      return _mod10509;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10510;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10511;
    } else {
      return _mod10512;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10513;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10514;
    } else {
      return _mod10515;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10516;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10517;
    } else {
      return _mod10518;
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
