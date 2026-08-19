// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import GuildFeatures from "../../PremiumConstants.tsx";
import _sendGiftMessage from "../../PremiumGiftingUtils.tsx";
import _mod9601 from "../../../../../_runtime/metro/09601__.js";
import _mod9602 from "../../../../../_runtime/metro/09602__.js";
import _mod9603 from "../../../../../_runtime/metro/09603__.js";
import _mod9604 from "../../../../../_runtime/metro/09604__.js";
import _mod9605 from "../../../../../_runtime/metro/09605__.js";
import _mod9606 from "../../../../../_runtime/metro/09606__.js";
import _mod9607 from "../../../../../_runtime/metro/09607__.js";
import _mod9608 from "../../../../../_runtime/metro/09608__.js";
import _mod9609 from "../../../../../_runtime/metro/09609__.js";
import _mod9610 from "../../../../../_runtime/metro/09610__.js";
import _mod9611 from "../../../../../_runtime/metro/09611__.js";
import _mod9612 from "../../../../../_runtime/metro/09612__.js";
import _mod9613 from "../../../../../_runtime/metro/09613__.js";
import _mod9614 from "../../../../../_runtime/metro/09614__.js";
import _mod9615 from "../../../../../_runtime/metro/09615__.js";
import _mod9616 from "../../../../../_runtime/metro/09616__.js";
import _mod9617 from "../../../../../_runtime/metro/09617__.js";
import _mod9618 from "../../../../../_runtime/metro/09618__.js";
import _mod9619 from "../../../../../_runtime/metro/09619__.js";
import _mod9620 from "../../../../../_runtime/metro/09620__.js";
import _mod9621 from "../../../../../_runtime/metro/09621__.js";
import _mod9622 from "../../../../../_runtime/metro/09622__.js";
import _mod9623 from "../../../../../_runtime/metro/09623__.js";
import _mod9624 from "../../../../../_runtime/metro/09624__.js";

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = obj132.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export const LottieType = obj;
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
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return _mod9601;
    } else if (_sendGiftMessage.AnimationState.LOOP === ACTION) {
      return _mod9602;
    } else {
      return _mod9603;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return _mod9604;
    } else if (_sendGiftMessage.AnimationState.LOOP === ACTION) {
      return _mod9605;
    } else {
      return _mod9606;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return _mod9607;
    } else if (_sendGiftMessage.AnimationState.LOOP === ACTION) {
      return _mod9608;
    } else {
      return _mod9609;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return _mod9610;
    } else if (_sendGiftMessage.AnimationState.LOOP === ACTION) {
      return _mod9611;
    } else {
      return _mod9612;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return _mod9613;
    } else if (_sendGiftMessage.AnimationState.LOOP === ACTION) {
      return _mod9614;
    } else {
      return _mod9615;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return _mod9616;
    } else if (_sendGiftMessage.AnimationState.LOOP === ACTION) {
      return _mod9617;
    } else {
      return _mod9618;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return _mod9619;
    } else if (_sendGiftMessage.AnimationState.LOOP === ACTION) {
      return _mod9620;
    } else {
      return _mod9621;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return _mod9622;
    } else if (_sendGiftMessage.AnimationState.LOOP === ACTION) {
      return _mod9623;
    } else {
      return _mod9624;
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