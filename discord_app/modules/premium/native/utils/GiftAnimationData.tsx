// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10174 from "../../../../../_runtime/metro/10174__.js";
import _mod10175 from "../../../../../_runtime/metro/10175__.js";
import _mod10176 from "../../../../../_runtime/metro/10176__.js";
import _mod10177 from "../../../../../_runtime/metro/10177__.js";
import _mod10178 from "../../../../../_runtime/metro/10178__.js";
import _mod10179 from "../../../../../_runtime/metro/10179__.js";
import _mod10180 from "../../../../../_runtime/metro/10180__.js";
import _mod10181 from "../../../../../_runtime/metro/10181__.js";
import _mod10182 from "../../../../../_runtime/metro/10182__.js";
import _mod10183 from "../../../../../_runtime/metro/10183__.js";
import _mod10184 from "../../../../../_runtime/metro/10184__.js";
import _mod10185 from "../../../../../_runtime/metro/10185__.js";
import _mod10186 from "../../../../../_runtime/metro/10186__.js";
import _mod10187 from "../../../../../_runtime/metro/10187__.js";
import _mod10188 from "../../../../../_runtime/metro/10188__.js";
import _mod10189 from "../../../../../_runtime/metro/10189__.js";
import _mod10190 from "../../../../../_runtime/metro/10190__.js";
import _mod10191 from "../../../../../_runtime/metro/10191__.js";
import _mod10192 from "../../../../../_runtime/metro/10192__.js";
import _mod10193 from "../../../../../_runtime/metro/10193__.js";
import _mod10194 from "../../../../../_runtime/metro/10194__.js";
import _mod10195 from "../../../../../_runtime/metro/10195__.js";
import _mod10196 from "../../../../../_runtime/metro/10196__.js";
import _mod10197 from "../../../../../_runtime/metro/10197__.js";
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
