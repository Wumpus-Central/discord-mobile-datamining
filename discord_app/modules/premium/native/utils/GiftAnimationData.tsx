// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
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
import _mod10212 from "../../../../../_runtime/metro/10212__.js";
import _mod10213 from "../../../../../_runtime/metro/10213__.js";
import _mod10214 from "../../../../../_runtime/metro/10214__.js";
import _mod10215 from "../../../../../_runtime/metro/10215__.js";
import _mod10216 from "../../../../../_runtime/metro/10216__.js";
import _mod10217 from "../../../../../_runtime/metro/10217__.js";
import _mod10218 from "../../../../../_runtime/metro/10218__.js";
import _mod10219 from "../../../../../_runtime/metro/10219__.js";
import _mod10220 from "../../../../../_runtime/metro/10220__.js";
import _mod10221 from "../../../../../_runtime/metro/10221__.js";
import _mod10222 from "../../../../../_runtime/metro/10222__.js";
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
