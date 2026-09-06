// discord_app/modules/premium/PremiumSubscriptionOfferUtil.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import Server from "../../flow/Server.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import usePremiumTrialOffer from "hooks/usePremiumTrialOffer.android.tsx";
import PremiumSubscriptionTrialUtil from "PremiumSubscriptionTrialUtil.tsx";
import usePremiumDiscountOffer from "hooks/usePremiumDiscountOffer.android.tsx";
import useDiscountOfferDefault from "hooks/useDiscountOffer.tsx";
import UserOfferActionCreators from "UserOfferActionCreators.tsx";
import ReverseTrialUtils from "ReverseTrialUtils.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../stores/billing/SubscriptionStore.tsx";

require = fn;
const PremiumConstants = fn(1373);
({
  PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID: metroRequire,
  PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID: closure_7,
  PREMIUM_TIER_2_ANNUAL_V2_20_PERCENT_DISCOUNT_ID: closure_8,
  PREMIUM_TIER_2_ANNUAL_V2_30_PERCENT_DISCOUNT_ID: closure_9,
  PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: c10,
  PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_11,
  PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: closure_12,
  PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: map1,
  PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: closure_14,
  PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: closure_15,
  PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_16,
  PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_17,
  PREMIUM_GROUP_30_PERCENT_3_MONTH_DISCOUNT_ID: closure_18,
} = PremiumConstants);
function useHasDiscountApplied() {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
  let prop;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      prop = metadata.active_discount_expires_at;
    }
  }
  let tmp4 = null != prop;
  if (tmp4) {
    const _Date = Date;
    tmp4 = _modDef4153(Date.now()) <= _modDef4153(prop);
    const tmp6Result = _modDef4153(Date.now());
  }
  return tmp4;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionOfferUtil.tsx");

export const useIsInPremiumOfferExperience = function useIsInPremiumOfferExperience() {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const hasActiveTrial = PremiumSubscriptionTrialUtil.useHasActiveTrial();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  usePremiumDiscountOffer;
  if (typeof useHasDiscountApplied === "function") {
    const items = [SubscriptionStore];
    const stateFromStores = initialize.useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
    let prop;
    if (stateFromStores != null) {
      const metadata = stateFromStores.metadata;
      if (metadata != null) {
        prop = metadata.active_discount_expires_at;
      }
    }
    let tmp12 = null != prop;
    if (tmp12) {
      const _Date = Date;
      tmp12 = _modDef4153(Date.now()) <= _modDef4153(prop);
      const tmp14Result = _modDef4153(Date.now());
    }
    return null != premiumTrialOffer || hasActiveTrial || null != premiumDiscountOffer || null != tmp7 || tmp12;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useHasDiscountApplied };
export const useActiveDiscountInfo = function useActiveDiscountInfo() {
  let obj = initialize;
  const items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let discountId;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      discountId = metadata.active_discount_id;
    }
  }
  if (closure_1_10 !== discountId) {
    if (closure_1_12 !== discountId) {
      if (closure_1_11 !== discountId) {
        if (closure_1_14 !== discountId) {
          if (__initData !== discountId) {
            if (map1 === discountId) {
              obj = { duration: 1, percentage: 40, discountId };
              return obj;
            } else if (timestampProducer === discountId) {
              obj = { duration: 1, percentage: 20, discountId };
              return obj;
            } else if (React5 === discountId) {
              const obj1 = { duration: 1, percentage: 25, discountId };
              return obj1;
            } else if (React6 === discountId) {
              const obj2 = { duration: 12, percentage: 20, discountId };
              return obj2;
            } else if (React7 === discountId) {
              const obj3 = { duration: 12, percentage: 30, discountId };
              return obj3;
            } else if (value2 === discountId) {
              const obj4 = { duration: 1, percentage: 40, discountId };
              return obj4;
            } else if (collapsedCategories === discountId) {
              const obj5 = { duration: 3, percentage: 30, discountId };
              return obj5;
            } else if (closure_1_17 === discountId) {
              const obj6 = { duration: 1, percentage: 30, discountId };
              return obj6;
            }
          }
        }
      }
      const obj7 = { duration: 3, percentage: 30, discountId };
      return obj7;
    }
  }
  return { duration: 1, percentage: 30, discountId };
};
export const useFetchChurnUserDiscountOffer = function useFetchChurnUserDiscountOffer(arg0) {
  let tmp2 = useDiscountOfferDefault(closure_1_10);
  const tmp3 = useDiscountOfferDefault(closure_1_11);
  [tmp5, require] = _slicedToArray(noop.useState(false), 2);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  [tmp7, tmp8] = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp8;
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  [tmp10, dependencyMap] = _slicedToArray(noop.useState(null), 2);
  if (tmp2 == null) {
    tmp2 = tmp3;
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  if (null != tmp2) {
    let obj = { churnUserDiscountOffer: tmp2, isFetchingChurnDiscountOffer: false };
    return obj;
  } else if (arg0) {
    obj = { churnUserDiscountOffer: tmp10, isFetchingChurnDiscountOffer: tmp7 };
    return obj;
  } else {
    let tmp11 = tmp7;
    if (!tmp7) {
      tmp11 = tmp5;
    }
    if (!tmp11) {
      tmp8(true);
      obj = UserOfferActionCreators;
      const churnDiscountOffer = obj.fetchChurnDiscountOffer();
      churnDiscountOffer
        .then((result) => {
          dependencyMap(result);
          require(true);
          tmp8(false);
        })
        .catch(() => {
          require(true);
          tmp8(false);
        });
      const nextPromise = churnDiscountOffer.then((result) => {
        dependencyMap(result);
        require(true);
        tmp8(false);
      });
    }
    const obj1 = { churnUserDiscountOffer: tmp10, isFetchingChurnDiscountOffer: tmp7 };
    return obj1;
  }
  const tmp9 = _slicedToArray(noop.useState(null), 2);
};
export const useShouldFetchChurnOffer = function useShouldFetchChurnOffer() {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
  if (typeof useHasDiscountApplied === "function") {
    const items1 = [SubscriptionStore];
    const stateFromStores1 = initialize.useStateFromStores(items1, () =>
      SubscriptionStore.getPremiumTypeSubscription(),
    );
    let prop;
    if (stateFromStores1 != null) {
      const metadata = stateFromStores1.metadata;
      if (metadata != null) {
        prop = metadata.active_discount_expires_at;
      }
    }
    let tmp8 = null != prop;
    if (tmp8) {
      const _Date = Date;
      tmp8 = _modDef4153(Date.now()) <= _modDef4153(prop);
      const tmp10Result = _modDef4153(Date.now());
    }
    let tmp13 = null !== stateFromStores && stateFromStores.hasPremiumNitroMonthly && !tmp8;
    if (tmp13) {
      let hasActiveTrial;
      if (stateFromStores != null) {
        hasActiveTrial = stateFromStores.hasActiveTrial;
      }
      tmp13 = !hasActiveTrial;
    }
    return tmp13;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const renewalInvoiceChurnDiscountInfo = function renewalInvoiceChurnDiscountInfo(arg0) {
  const iter = arg0.invoiceItems[Symbol.iterator]();
  while (iter !== undefined) {
    let discounts = iter.next().discounts;
    let found = discounts.find((type) => type.type === Server.InvoiceDiscountTypes.SUBSCRIPTION_PLAN);
    let tmp2 = found;
    if (null != found) {
      let discount_id = tmp2.discount_id;
      if (closure_1_10 === discount_id) {
        let obj = { duration: 1, percentage: null, discountId: null };
        ({ percentage_amount: obj2.percentage, discount_id: obj2.discountId } = found);
        iter.return();
        return obj;
      } else if (closure_1_11 === discount_id) {
        obj = { duration: 3, percentage: null, discountId: null };
        ({ percentage_amount: obj.percentage, discount_id: obj.discountId } = tmp2);
        iter.return();
        return obj;
      }
    }
    continue;
  }
  return null;
};
export const useIsNUXEligible = function useIsNUXEligible() {
  return ReverseTrialUtils.useIsInReverseTrial();
};
