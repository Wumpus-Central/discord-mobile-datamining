// discord_app/modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx
import util from "../../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _modDef2546 from "../../PremiumGifting.messages.js";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import GiftPromotionReminderExperiment2 from "../../experiments/GiftPromotionReminderExperiment.tsx";
import MarketingComponentType from "../../../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import PromotionsStore from "../../../promotions/PromotionsStore.tsx";

const require = globalThis.__r;

require = fn;
const SubscriptionPlans = fn(1374).SubscriptionPlans;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx");

export const useFetchClaimableGiftingPromotionRewardSkuIds = function useFetchClaimableGiftingPromotionRewardSkuIds() {
  const tmp = hasPreviouslyFetched(fetchPurchasesError.useState(), 2);
  _require = tmp[1];
  const items = [ref];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () =>
    ref.getGiftPromotionRewardSkuIds(),
  );
  const obj = require("initialize");
  const fetchPurchases = require("useFetchCollectiblesCategoriesAndPurchases").useFetchPurchases();
  purchases = fetchPurchases.purchases;
  hasPreviouslyFetched = fetchPurchases.hasPreviouslyFetched;
  fetchPurchasesError = fetchPurchases.fetchPurchasesError;
  const obj2 = require("useFetchCollectiblesCategoriesAndPurchases");
  const items1 = [stateFromStoresArray, purchases, hasPreviouslyFetched, fetchPurchasesError];
  const effect = fetchPurchasesError.useEffect(() => {
    if (hasPreviouslyFetched) {
      if (!ref.current) {
        if (stateFromStoresArray.length > 0) {
          if (null == fetchPurchasesError) {
            let found = stateFromStoresArray.filter((item) => null == purchases.get(item));
          } else {
            found = [];
          }
          closure_0(found);
          tmp.current = true;
        }
      }
    }
  }, items1);
  return tmp[0];
};
export const getGiftingPromotionRewardEarnedSubtitle = function getGiftingPromotionRewardEarnedSubtitle(
  arg0,
  arr,
  arg2,
) {
  closure_0 = arg2;
  if (arr != null) {
    const found = arr.filter((item) => !closure_0.includes(item));
  }
  if (arg0.length > 0) {
    if (null != found) {
      if (0 === found.length) {
        const intl2 = util.intl;
        const obj = { count: arg0.length };
        let formatToPlainStringResult = intl2.formatToPlainString(_modDef2546.cMHedL, obj);
      }
      return formatToPlainStringResult;
    }
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.string(_modDef2546["/8znyU"]);
};
export const getRewardAssetIdMap = function getRewardAssetIdMap(arr) {
  const map = new Map();
  const item = arr.forEach((skuId) => map.set(skuId.skuId, skuId.assetId));
  return map;
};
export const useShouldShowSelectFreeSkuStep = function useShouldShowSelectFreeSkuStep(id, arg1, arg2) {
  const items = [,];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let tmp3 = null != arg2;
  const hasItem = items.includes(id);
  if (tmp3) {
    tmp3 = arg2.length >= 1;
  }
  let tmp4 = arg1;
  if (arg1) {
    tmp4 = hasItem;
  }
  if (tmp4) {
    tmp4 = tmp3;
  }
  return tmp4;
};
export const useShouldAutoSelectGiftingPromotionReward = function useShouldAutoSelectGiftingPromotionReward(
  id,
  arg1,
  arg2,
) {
  const items = [,];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let tmp3 = null != arg2;
  const hasItem = items.includes(id);
  if (tmp3) {
    tmp3 = 1 === arg2.length;
  }
  if (tmp3) {
    tmp3 = hasItem;
  }
  if (tmp3) {
    tmp3 = arg1;
  }
  return tmp3;
};
export const useIsPlanEligibleForGiftingPromotion = function useIsPlanEligibleForGiftingPromotion(id) {
  const items = [,];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  return items.includes(id);
};
export const createGradientStyle = function createGradientStyle(gradient, arg1) {
  if (null != gradient) {
    let obj = arg1;
    if (arg1 == null) {
      obj = {};
    }
    const reverse = obj.reverse;
    const colorStops = obj.colorStops;
    const defaultAngle = obj.defaultAngle;
    let num = 78.98;
    if (undefined !== defaultAngle) {
      num = defaultAngle;
    }
    const _Array = Array;
    if (!Array.isArray(gradient)) {
      gradient = gradient.gradient;
    }
    const _Array2 = Array;
    let angle = num;
    if (!Array.isArray(gradient)) {
      angle = num;
      if (null != gradient.angle) {
        angle = gradient.angle;
      }
    }
    let result = angle;
    if (tmp) {
      result = (angle + 180) % 360;
    }
    if (null != colorStops) {
      const mapped = gradient.map((item, index) => "" + item + " " + colorStops[index] + "%");
      let joined = mapped.join(", ");
    } else {
      joined = gradient.join(", ");
    }
    const obj2 = { background: null };
    const _HermesInternal = HermesInternal;
    obj2.background = "linear-gradient(" + result + "deg, " + joined + ")";
    return obj2;
  }
};
export const createBackgroundStyle = function createBackgroundStyle(arg0) {
  if (null != arg0) {
    const obj = {
      backgroundImage: null,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
    const _HermesInternal = HermesInternal;
    obj.backgroundImage = "url(" + arg0 + ")";
    return obj;
  }
};
export const combinePromotionStyles = function combinePromotionStyles(backgroundImage, background) {
  if (null != backgroundImage) {
    if (null != background) {
      const _HermesInternal = HermesInternal;
      backgroundImage.backgroundImage = "" + backgroundImage.backgroundImage + ", " + background.background;
      backgroundImage.backgroundColor = "lightgray";
      backgroundImage.backgroundRepeat = "no-repeat, no-repeat";
      if (null == backgroundImage.backgroundSize) {
        backgroundImage.backgroundSize = "auto 110%, auto";
      }
      if (null == backgroundImage.backgroundPosition) {
        backgroundImage.backgroundPosition = "right 90% center, 0% 0%";
      }
      return backgroundImage;
    }
  }
  let tmp = backgroundImage;
  if (null == backgroundImage) {
    let obj = background;
    if (null == background) {
      obj = {};
    }
    tmp = obj;
  }
  return tmp;
};
export const shouldShowGiftPromotionReminderNotice = function shouldShowGiftPromotionReminderNotice() {
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  if (GiftPromotionReminderExperiment.getConfig({ location: "shouldShowGiftPromotionReminderNotice" }).enabled) {
    if (
      null ==
      PromotionsStore.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_REMINDER_NAGBAR)
    ) {
      return false;
    } else {
      const giftPromotion = PromotionsStore.getGiftPromotion();
      let id;
      if (giftPromotion != null) {
        id = giftPromotion.id;
      }
      let tmp5 = null != id;
      if (tmp5) {
        let isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
          dismissible_content.DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK,
          id,
        ).isDismissed;
        if (isDismissed) {
          isDismissed = !DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
            dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER,
            id,
          ).isDismissed;
          const tmpResult2 = DismissibleContentUnsafeUtils;
        }
        tmp5 = isDismissed;
        const tmpResult = DismissibleContentUnsafeUtils;
      }
      return tmp5;
    }
  } else {
    return false;
  }
};
