// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10159 from "../../../../../_runtime/metro/10159__.js";
import _mod10160 from "../../../../../_runtime/metro/10160__.js";
import _mod10161 from "../../../../../_runtime/metro/10161__.js";
import _mod10162 from "../../../../../_runtime/metro/10162__.js";
import _mod10163 from "../../../../../_runtime/metro/10163__.js";
import _mod10164 from "../../../../../_runtime/metro/10164__.js";
import _mod10165 from "../../../../../_runtime/metro/10165__.js";
import _mod10166 from "../../../../../_runtime/metro/10166__.js";
import _mod10167 from "../../../../../_runtime/metro/10167__.js";
import _mod10168 from "../../../../../_runtime/metro/10168__.js";
import _mod10169 from "../../../../../_runtime/metro/10169__.js";
import _mod10170 from "../../../../../_runtime/metro/10170__.js";
import _mod10171 from "../../../../../_runtime/metro/10171__.js";
import _mod10172 from "../../../../../_runtime/metro/10172__.js";
import _mod10173 from "../../../../../_runtime/metro/10173__.js";
import _mod10174 from "../../../../../_runtime/metro/10174__.js";
import _mod10175 from "../../../../../_runtime/metro/10175__.js";
import _mod10176 from "../../../../../_runtime/metro/10176__.js";
import _mod10177 from "../../../../../_runtime/metro/10177__.js";
import _mod10178 from "../../../../../_runtime/metro/10178__.js";
import _mod10179 from "../../../../../_runtime/metro/10179__.js";
import _mod10180 from "../../../../../_runtime/metro/10180__.js";
import _mod10181 from "../../../../../_runtime/metro/10181__.js";
import _mod10182 from "../../../../../_runtime/metro/10182__.js";
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
      return _mod10159;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10160;
    } else {
      return _mod10161;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10162;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10163;
    } else {
      return _mod10164;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10165;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10166;
    } else {
      return _mod10167;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10168;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10169;
    } else {
      return _mod10170;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10171;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10172;
    } else {
      return _mod10173;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10174;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10175;
    } else {
      return _mod10176;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10177;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10178;
    } else {
      return _mod10179;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10180;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10181;
    } else {
      return _mod10182;
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
