// discord_app/modules/premium/native/utils/GiftAnimationData.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumGiftingUtils from "../../PremiumGiftingUtils.tsx";
import _mod10679 from "../../../../../_runtime/metro/10679__.js";
import _mod10680 from "../../../../../_runtime/metro/10680__.js";
import _mod10681 from "../../../../../_runtime/metro/10681__.js";
import _mod10682 from "../../../../../_runtime/metro/10682__.js";
import _mod10683 from "../../../../../_runtime/metro/10683__.js";
import _mod10684 from "../../../../../_runtime/metro/10684__.js";
import _mod10685 from "../../../../../_runtime/metro/10685__.js";
import _mod10686 from "../../../../../_runtime/metro/10686__.js";
import _mod10687 from "../../../../../_runtime/metro/10687__.js";
import _mod10688 from "../../../../../_runtime/metro/10688__.js";
import _mod10689 from "../../../../../_runtime/metro/10689__.js";
import _mod10690 from "../../../../../_runtime/metro/10690__.js";
import _mod10691 from "../../../../../_runtime/metro/10691__.js";
import _mod10692 from "../../../../../_runtime/metro/10692__.js";
import _mod10693 from "../../../../../_runtime/metro/10693__.js";
import _mod10694 from "../../../../../_runtime/metro/10694__.js";
import _mod10695 from "../../../../../_runtime/metro/10695__.js";
import _mod10696 from "../../../../../_runtime/metro/10696__.js";
import _mod10697 from "../../../../../_runtime/metro/10697__.js";
import _mod10698 from "../../../../../_runtime/metro/10698__.js";
import _mod10699 from "../../../../../_runtime/metro/10699__.js";
import _mod10700 from "../../../../../_runtime/metro/10700__.js";
import _mod10701 from "../../../../../_runtime/metro/10701__.js";
import _mod10702 from "../../../../../_runtime/metro/10702__.js";
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
      return _mod10679;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10680;
    } else {
      return _mod10681;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10682;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10683;
    } else {
      return _mod10684;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10685;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10686;
    } else {
      return _mod10687;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10688;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10689;
    } else {
      return _mod10690;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10691;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10692;
    } else {
      return _mod10693;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10694;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10695;
    } else {
      return _mod10696;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10697;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10698;
    } else {
      return _mod10699;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10700;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10701;
    } else {
      return _mod10702;
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
