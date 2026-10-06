// === Module 10477: GiftingPromotionUtils ===

// Module 10477 (GiftingPromotionUtils)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4704 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10482 */;
import MarketingComponentType from "MarketingComponentType" /* 10483 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10409 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map;

const SubscriptionPlans = PremiumConstants.SubscriptionPlans;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let fetchPurchasesError;
  let hasPreviouslyFetched;
  let purchases;
  let stateFromStoresArray;
  let tmp6;
  let tmp7;
  const tmp2 = stateFromStoresArray;
  const obj = require("react");
  const cResult = obj.c(8);
  const tmp4 = purchases(hasPreviouslyFetched.useState(), 2);
  _require = tmp4[1];
  const first = tmp4[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [fetchPurchasesError];
    const fn = function l() {
      return fetchPurchasesError.getGiftPromotionRewardSkuIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = require("get initialized");
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7);
  const tmpResult2 = require("useFetchCollectiblesCategoriesAndPurchases");
  const fetchPurchases = tmpResult2.useFetchPurchases();
  purchases = fetchPurchases.purchases;
  hasPreviouslyFetched = fetchPurchases.hasPreviouslyFetched;
  fetchPurchasesError = fetchPurchases.fetchPurchasesError;
  const ref = obj2.useRef(false);
  if (cResult[2] === fetchPurchasesError) {
    if (cResult[3] === hasPreviouslyFetched) {
      if (cResult[4] === purchases) {
        let tmp11;
        let tmp12;
        if (cResult[5] === stateFromStoresArray) {
          tmp11 = cResult[6];
          tmp12 = cResult[7];
        }
        const effect = obj2.useEffect(tmp11, tmp12);
        return first;
      }
    }
  }
  const fn2 = function b() {
    if (hasPreviouslyFetched) {
      if (!ref.current) {
        if (stateFromStoresArray.length > 0) {
          let found;
          if (null == fetchPurchasesError) {
            found = stateFromStoresArray.filter((item) => null == purchases.get(item));
          } else {
            found = [];
          }
          closure_0(found);
          tmp2.current = true;
        }
      }
    }
  };
  const items1 = [stateFromStoresArray, purchases, hasPreviouslyFetched, fetchPurchasesError];
  cResult[2] = fetchPurchasesError;
  cResult[3] = hasPreviouslyFetched;
  cResult[4] = purchases;
  cResult[5] = stateFromStoresArray;
  cResult[6] = fn2;
  cResult[7] = items1;
  tmp12 = items1;
  tmp11 = fn2;
}) : (() => {
  let closure_0;
  let fetchPurchasesError;
  let hasPreviouslyFetched;
  let purchases;
  let stateFromStoresArray;
  const tmp = purchases(hasPreviouslyFetched.useState(), 2);
  _require = tmp[1];
  const first = tmp[0];
  const items = [fetchPurchasesError];
  const obj = require("get initialized");
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => fetchPurchasesError.getGiftPromotionRewardSkuIds());
  const obj2 = require("useFetchCollectiblesCategoriesAndPurchases");
  const fetchPurchases = obj2.useFetchPurchases();
  purchases = fetchPurchases.purchases;
  hasPreviouslyFetched = fetchPurchases.hasPreviouslyFetched;
  fetchPurchasesError = fetchPurchases.fetchPurchasesError;
  const ref = hasPreviouslyFetched.useRef(false);
  const items1 = [stateFromStoresArray, purchases, hasPreviouslyFetched, fetchPurchasesError];
  const effect = hasPreviouslyFetched.useEffect(() => {
    if (hasPreviouslyFetched) {
      if (!ref.current) {
        if (stateFromStoresArray.length > 0) {
          let found;
          if (null == fetchPurchasesError) {
            found = stateFromStoresArray.filter((item) => null == purchases.get(item));
          } else {
            found = [];
          }
          closure_0(found);
          tmp2.current = true;
        }
      }
    }
  }, items1);
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2) => {
  const items = [, ];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  const includes = items.includes;
  if (id != null) {
    id = id.id;
  }
  let tmp3 = null != arg2;
  const hasItem = includes(id);
  if (tmp3) {
    tmp3 = arg2.length >= 1;
  }
  return arg1 && hasItem && tmp3;
}) : ((id, arg1, arg2) => {
  const items = [, ];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  const includes = items.includes;
  if (id != null) {
    id = id.id;
  }
  let tmp3 = null != arg2;
  const hasItem = includes(id);
  if (tmp3) {
    tmp3 = arg2.length >= 1;
  }
  return arg1 && hasItem && tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2) => {
  const items = [, ];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  const includes = items.includes;
  if (id != null) {
    id = id.id;
  }
  let tmp3 = null != arg2;
  const hasItem = includes(id);
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
}) : ((id, arg1, arg2) => {
  const items = [, ];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  const includes = items.includes;
  if (id != null) {
    id = id.id;
  }
  let tmp3 = null != arg2;
  const hasItem = includes(id);
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
});
function useIsPlanEligibleForGiftingPromotion(id) {
  const items = [, ];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  const includes = items.includes;
  if (id != null) {
    id = id.id;
  }
  return includes(id);
}
let result = size.fileFinishedImporting("modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx");

export const useFetchClaimableGiftingPromotionRewardSkuIds = tmp2;
export const getRewardAssetIdMap = function getRewardAssetIdMap(arr) {
  map = new Map();
  const item = arr.forEach((skuId) => map.set(skuId.skuId, skuId.assetId));
  return map;
};
export const useShouldShowSelectFreeSkuStep = tmp3;
export const useShouldAutoSelectGiftingPromotionReward = tmp4;
export { useIsPlanEligibleForGiftingPromotion };
export const createGradientStyle = function createGradientStyle(gradient, arg1) {
  if (null != gradient) {
    let joined;
    let obj = arg1;
    if (arg1 == null) {
      obj = {};
    }
    const reverse = obj.reverse;
    const colorStops = obj.colorStops;
    const defaultAngle = obj.defaultAngle;
    let num = 78.98;
    const tmp = undefined !== reverse && reverse;
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
      joined = mapped.join(", ");
    } else {
      joined = gradient.join(", ");
    }
    const _HermesInternal = HermesInternal;
    const obj2 = { background: "linear-gradient(" + result + "deg, " + joined + ")" };
    return obj2;
  }
};
export const createBackgroundStyle = function createBackgroundStyle(arg0) {
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    const obj = { backgroundImage: "url(" + arg0 + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" };
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
        const tmpResult = DismissibleContentUnsafeUtils;
        let isDismissed = tmpResult.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, id).isDismissed;
        if (isDismissed) {
          const tmpResult2 = DismissibleContentUnsafeUtils;
          isDismissed = !tmpResult2.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, id).isDismissed;
        }
        tmp5 = isDismissed;
      }
      return tmp5;
    }
  } else {
    return false;
  }
};