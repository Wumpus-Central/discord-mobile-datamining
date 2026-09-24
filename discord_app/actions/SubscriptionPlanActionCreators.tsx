// === Module 7587: SubscriptionPlanActionCreators ===

// Module 7587 (SubscriptionPlanActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5166 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import BillingInfoStore from "BillingInfoStore" /* 4485 */;

require = fn;
function fetchSubscriptionPlansForSKU() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _fetchSubscriptionPlansForSKU() {
  c10 = 0;
  c11 = 0;
  c9 = 0;
  return (async (arg0, value, arg2, arg3, arg4, arg5) => {
    if (c11 === 2) {
      c11 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c11 = 2;
        if (0 === c10) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_7 = tmp3;
            closure_6 = tmp7;
            closure_134_0 = skuId;
            closure_134_1 = undefined;
            closure_134_2 = undefined;
            closure_134_3 = undefined;
            const obj4 = { type: "SUBSCRIPTION_PLANS_FETCH", skuId };
            DispatcherDefault.dispatch(obj4);
            c9 = 1;
            const obj5 = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(skuId), oldFormErrors: true, rejectWithError: true, retries: 10 };
            closure_134_1 = obj5;
            const obj7 = {};
            if (null != country_code) {
              obj7.country_code = country_code;
            }
            if (null != payment_source_id) {
              obj7.payment_source_id = payment_source_id;
            }
            if (null != include_unpublished) {
              obj7.include_unpublished = include_unpublished;
            }
            if (null != revenue_surface) {
              obj7.revenue_surface = revenue_surface;
            }
            if (null != payment_gateway) {
              obj7.payment_gateway = payment_gateway;
            }
            obj5.query = obj7;
            if (!ipCountryCodeLoaded.ipCountryCodeLoaded) {
              c10 = 2;
              c11 = 1;
              const obj10 = { value: actions_BillingActionCreators.fetchIpCountryCode(), done: false };
              return obj10;
            }
          }
        } else if (1 === tmp7) {
          c9 = 0;
          closure_134_4 = closure_8;
          const obj11 = { type: "SUBSCRIPTION_PLANS_FETCH_FAILURE", skuId: closure_134_0 };
          closure_135_1(closure_135_2[4]).dispatch(obj11);
          const obj6 = closure_135_1(closure_135_2[4]);
          const result = closure_135_0(closure_135_2[7]).captureBillingException(closure_134_4);
          const tmp33 = new closure_135_1(closure_135_2[8])(closure_134_4);
          closure_134_3 = tmp33;
          const _HermesInternal = HermesInternal;
          closure_134_3.message = "Failed to fetch subscription plans for SKU " + closure_134_0;
          throw closure_134_3;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 0;
            c11 = 3;
            const obj12 = { value, done: true };
            return obj12;
          }
        } else if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 0;
          c11 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_134_2 = value;
          const obj15 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: closure_134_0, subscriptionPlans: closure_134_2.body };
          closure_135_1(closure_135_2[4]).dispatch(obj15);
          c9 = 0;
          c11 = 3;
          const obj16 = { value: closure_134_2.body, done: true };
          return obj16;
        }
        const HTTP = closure_135_0(closure_135_2[6]).HTTP;
        c10 = 3;
        c11 = 1;
        const obj17 = { value: HTTP.get(closure_134_1), done: false };
        return obj17;
      } catch (tmp46) {
        closure_8 = tmp46;
        if (tmp4 === c9) {
          c11 = tmp2;
          throw tmp46;
        } else {
          c10 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1074).Endpoints;
const PremiumConstants = fn(1374);
({ ACTIVE_PREMIUM_SKUS: metroRequire, PremiumSubscriptionSKUs: closure_7 } = PremiumConstants);
const size = fn(2);
let result = size.fileFinishedImporting("actions/SubscriptionPlanActionCreators.tsx");

export { fetchSubscriptionPlansForSKU };
export const fetchSubscriptionPlansBySKUs = function fetchSubscriptionPlansBySKUs(fetchedSKUIDs, country, APPLE_ADVANCED_COMMERCE) {
  closure_0 = country;
  closure_1 = APPLE_ADVANCED_COMMERCE;
  const found = fetchedSKUIDs.filter((item) => item !== constants.NONE);
  return Promise.all(found.map((item) => fetchSubscriptionPlansForSKU(item, closure_0, undefined, undefined, undefined, closure_1)));
};
export const fetchPremiumSubscriptionPlans = function fetchPremiumSubscriptionPlans(country, arg1, arg2, APPLE_ADVANCED_COMMERCE) {
  closure_0 = country;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = APPLE_ADVANCED_COMMERCE;
  const found = closure_6.filter((item) => item !== constants.NONE);
  return Promise.all(found.map((item) => fetchSubscriptionPlansForSKU(item, closure_0, closure_1, undefined, closure_2, closure_3)));
};
export const resetSubscriptionPlanData = function resetSubscriptionPlanData() {
  DispatcherDefault.dispatch({ type: "SUBSCRIPTION_PLANS_RESET" });
};