// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod11176 from "../../../../../_runtime/metro/11176__.js";
import _mod11177 from "../../../../../_runtime/metro/11177__.js";
import _mod11178 from "../../../../../_runtime/metro/11178__.js";
import _mod11179 from "../../../../../_runtime/metro/11179__.js";
import _mod11180 from "../../../../../_runtime/metro/11180__.js";
import _mod11181 from "../../../../../_runtime/metro/11181__.js";
import _mod11182 from "../../../../../_runtime/metro/11182__.js";
import _mod11183 from "../../../../../_runtime/metro/11183__.js";
import _mod11184 from "../../../../../_runtime/metro/11184__.js";
import _mod11185 from "../../../../../_runtime/metro/11185__.js";
import _mod11186 from "../../../../../_runtime/metro/11186__.js";
import _mod11187 from "../../../../../_runtime/metro/11187__.js";
import _mod11188 from "../../../../../_runtime/metro/11188__.js";
import _mod11189 from "../../../../../_runtime/metro/11189__.js";
import _mod11190 from "../../../../../_runtime/metro/11190__.js";
import _mod11191 from "../../../../../_runtime/metro/11191__.js";
import _mod11192 from "../../../../../_runtime/metro/11192__.js";
import _mod11193 from "../../../../../_runtime/metro/11193__.js";
import _mod11194 from "../../../../../_runtime/metro/11194__.js";
import _mod11195 from "../../../../../_runtime/metro/11195__.js";
import _mod11196 from "../../../../../_runtime/metro/11196__.js";
import _mod11197 from "../../../../../_runtime/metro/11197__.js";
import _mod11198 from "../../../../../_runtime/metro/11198__.js";
import _mod11199 from "../../../../../_runtime/metro/11199__.js";
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
      return _mod11176;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11177;
    } else {
      return _mod11178;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11179;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11180;
    } else {
      return _mod11181;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11182;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11183;
    } else {
      return _mod11184;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11185;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11186;
    } else {
      return _mod11187;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11188;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11189;
    } else {
      return _mod11190;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11191;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11192;
    } else {
      return _mod11193;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11194;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11195;
    } else {
      return _mod11196;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod11197;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod11198;
    } else {
      return _mod11199;
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
