// === Module 9600: LottieType ===

// Module 9600 (LottieType)
import obj132 from "obj132" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import _sendGiftMessage from "_sendGiftMessage" /* 8294 */;
import _mod9601 from "module_9601" /* 9601 */;
import _mod9602 from "module_9602" /* 9602 */;
import _mod9603 from "module_9603" /* 9603 */;
import _mod9604 from "module_9604" /* 9604 */;
import _mod9605 from "module_9605" /* 9605 */;
import _mod9606 from "module_9606" /* 9606 */;
import _mod9607 from "module_9607" /* 9607 */;
import _mod9608 from "module_9608" /* 9608 */;
import _mod9609 from "module_9609" /* 9609 */;
import _mod9610 from "module_9610" /* 9610 */;
import _mod9611 from "module_9611" /* 9611 */;
import _mod9612 from "module_9612" /* 9612 */;
import _mod9613 from "module_9613" /* 9613 */;
import _mod9614 from "module_9614" /* 9614 */;
import _mod9615 from "module_9615" /* 9615 */;
import _mod9616 from "module_9616" /* 9616 */;
import _mod9617 from "module_9617" /* 9617 */;
import _mod9618 from "module_9618" /* 9618 */;
import _mod9619 from "module_9619" /* 9619 */;
import _mod9620 from "module_9620" /* 9620 */;
import _mod9621 from "module_9621" /* 9621 */;
import _mod9622 from "module_9622" /* 9622 */;
import _mod9623 from "module_9623" /* 9623 */;
import _mod9624 from "module_9624" /* 9624 */;

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