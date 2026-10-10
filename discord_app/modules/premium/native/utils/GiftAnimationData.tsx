// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
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
import _mod10198 from "../../../../../_runtime/metro/10198__.js";
import _mod10199 from "../../../../../_runtime/metro/10199__.js";
import _mod10200 from "../../../../../_runtime/metro/10200__.js";
import _mod10201 from "../../../../../_runtime/metro/10201__.js";
import _mod10202 from "../../../../../_runtime/metro/10202__.js";
import _mod10203 from "../../../../../_runtime/metro/10203__.js";
import _mod10204 from "../../../../../_runtime/metro/10204__.js";
import _mod10205 from "../../../../../_runtime/metro/10205__.js";
import _mod10206 from "../../../../../_runtime/metro/10206__.js";
import _mod10207 from "../../../../../_runtime/metro/10207__.js";
import _mod10208 from "../../../../../_runtime/metro/10208__.js";
import _mod10209 from "../../../../../_runtime/metro/10209__.js";
import _mod10210 from "../../../../../_runtime/metro/10210__.js";
import _mod10211 from "../../../../../_runtime/metro/10211__.js";
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
      return _mod10188;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10189;
    } else {
      return _mod10190;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10191;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10192;
    } else {
      return _mod10193;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10194;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10195;
    } else {
      return _mod10196;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10197;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10198;
    } else {
      return _mod10199;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10200;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10201;
    } else {
      return _mod10202;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10203;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10204;
    } else {
      return _mod10205;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10206;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10207;
    } else {
      return _mod10208;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10209;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10210;
    } else {
      return _mod10211;
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
