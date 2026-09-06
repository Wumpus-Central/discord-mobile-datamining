// === Module 10733: GiftingPromotionUtils ===

// Module 10733 (GiftingPromotionUtils)
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import PremiumGiftingGogoPromotionExperiment2 from "PremiumGiftingGogoPromotionExperiment" /* 10740 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10741 */;
import MarketingComponentType from "MarketingComponentType" /* 10742 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10665 */;

require = fn;
const SubscriptionPlans = fn(1373).SubscriptionPlans;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx");

export const useFetchClaimableGiftingPromotionRewardSkuIds = function useFetchClaimableGiftingPromotionRewardSkuIds() {
  const tmp = stateFromStoresArray(purchases.useState(), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  let items = [hasPreviouslyFetched];
  stateFromStoresArray = first(504).useStateFromStoresArray(items, () => hasPreviouslyFetched.getGiftPromotionRewardSkuIds());
  const obj = first(504);
  const fetchPurchases = first(10734).useFetchPurchases();
  purchases = fetchPurchases.purchases;
  hasPreviouslyFetched = fetchPurchases.hasPreviouslyFetched;
  const fetchPurchasesError = fetchPurchases.fetchPurchasesError;
  purchases.useRef(false);
  const items1 = [stateFromStoresArray, purchases, hasPreviouslyFetched, fetchPurchasesError];
  const effect = purchases.useEffect(() => {
    if (hasPreviouslyFetched) {
      if (!ref.current) {
        if (stateFromStoresArray.length > 0) {
          if (null == fetchPurchasesError) {
            let found = stateFromStoresArray.filter((item) => null == purchases.get(item));
          } else {
            found = [];
          }
          dependencyMap(found);
          tmp.current = true;
        }
      }
    }
  }, items1);
  const someResult = stateFromStoresArray.some((item) => item === first(10738).GiftingPromotionRewardSKUIds.SUMMER_2026_GOGO_FAKE_SKU_ID);
  const obj3 = first(10734);
  const fetchSummer2026GogoPromoEligibility = first(10739).useFetchSummer2026GogoPromoEligibility(someResult);
  const isEligible = fetchSummer2026GogoPromoEligibility.isEligible;
  const hasFetched = fetchSummer2026GogoPromoEligibility.hasFetched;
  const items2 = [first, isEligible, hasFetched, someResult];
  return purchases.useMemo(() => {
    if (someResult) {
      if (!isEligible) {
        let items = [];
      }
      return items;
    }
    items = first;
  }, items2);
};
export const getRewardAssetIdMap = function getRewardAssetIdMap(arr) {
  const map = new Map();
  const item = arr.forEach((skuId) => map.set(skuId.skuId, skuId.assetId));
  return map;
};
export const useShouldShowSelectFreeSkuStep = function useShouldShowSelectFreeSkuStep(id, arg1, arg2) {
  const items = [, ];
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
  const PremiumGiftingGogoPromotionExperiment = PremiumGiftingGogoPromotionExperiment2.PremiumGiftingGogoPromotionExperiment;
  if (arg1) {
    tmp4 = hasItem;
  }
  if (tmp4) {
    tmp4 = tmp3;
  }
  if (tmp4) {
    tmp4 = !PremiumGiftingGogoPromotionExperiment.useConfig({ location: "useShouldShowSelectFreeSkuStep" }).enabled;
  }
  return tmp4;
};
export const useShouldAutoSelectGiftingPromotionReward = function useShouldAutoSelectGiftingPromotionReward(id, arg1, arg2) {
  const items = [, ];
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
  const items = [, ];
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
    obj = { background: null };
    const _HermesInternal = HermesInternal;
    obj.background = "linear-gradient(" + result + "deg, " + joined + ")";
    return obj;
  }
};
export const createBackgroundStyle = function createBackgroundStyle(arg0) {
  if (null != arg0) {
    const obj = { backgroundImage: null, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" };
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
    if (null == PromotionsStore.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_REMINDER_NAGBAR)) {
      return false;
    } else {
      const giftPromotion = PromotionsStore.getGiftPromotion();
      let id;
      if (giftPromotion != null) {
        id = giftPromotion.id;
      }
      let tmp5 = null != id;
      if (tmp5) {
        let tmpResult = DismissibleContentUnsafeUtils;
        let isDismissed = tmpResult.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, id).isDismissed;
        if (isDismissed) {
          tmpResult = DismissibleContentUnsafeUtils;
          isDismissed = !tmpResult.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, id).isDismissed;
        }
        tmp5 = isDismissed;
      }
      return tmp5;
    }
  } else {
    return false;
  }
};