// === Module 6050: fetchSubscriptionPlansForSKU ===

// Module 6050 (fetchSubscriptionPlansForSKU)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "handlePaymentSourceCreateEnd" /* 4109 */;
import { Endpoints } from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

const require = arg1;
function fetchSubscriptionPlansForSKU(id, closure_1, arg2, soft_deleted) {
  const self = this;
  const apply = _fetchSubscriptionPlansForSKU.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSubscriptionPlansForSKU() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4, arg5) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    closure_5 = arg5;
    c10 = 0;
    c11 = 0;
    c9 = 0;
    return (function*(arg0, arg1, arg2, arg3, arg4, arg5) {
      if (c11 === 2) {
        c11 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c11 = 2;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c11 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_7 = tmp3;
              closure_6 = tmp7;
              let obj2;
              closure_2 = undefined;
              closure_3 = undefined;
              obj1 = { type: "SUBSCRIPTION_PLANS_FETCH", skuId: null };
              obj1[1] = callback;
              callback2(closure_2[4]).dispatch(obj1);
              c9 = 1;
              obj2 = { url: null, oldFormErrors: true, rejectWithError: true, retries: 10 };
              obj2[0] = closure_5.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(callback);
              const obj3 = {};
              if (null != obj2) {
                obj3.country_code = tmp57;
              }
              if (null != closure_2) {
                obj3.payment_source_id = tmp58;
              }
              if (null != closure_3) {
                obj3.include_unpublished = tmp59;
              }
              if (null != ipCountryCodeLoaded) {
                obj3.revenue_surface = tmp60;
              }
              if (null != closure_5) {
                obj3.payment_gateway = tmp61;
              }
              obj2.query = obj3;
              if (!ipCountryCodeLoaded.ipCountryCodeLoaded) {
                let obj8 = callback(closure_2[5]);
                c10 = 2;
                c11 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = obj8.fetchIpCountryCode();
                return obj4;
              }
              const obj14 = callback2(closure_2[4]);
              tmp57 = obj2;
            }
          } else if (1 === tmp7) {
            c9 = 0;
            ipCountryCodeLoaded = closure_8;
            let obj5 = obj2(closure_2[4]);
            obj5 = { type: "SUBSCRIPTION_PLANS_FETCH_FAILURE", skuId: null };
            obj5[1] = callback;
            obj5.dispatch(obj5);
            let obj7 = callback(closure_2[7]);
            const result = obj7.captureBillingException(ipCountryCodeLoaded);
            const tmp33 = new obj2(closure_2[8])(ipCountryCodeLoaded);
            closure_3 = tmp33;
            const _HermesInternal = HermesInternal;
            closure_3.message = "Failed to fetch subscription plans for SKU " + callback;
            throw closure_3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c11 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 0;
              c11 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            }
          } else if (arg0 === 1) {
            c11 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c9 = 0;
            c11 = 3;
            obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            closure_2 = arg1;
            obj = obj2(closure_2[4]);
            obj8 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: null, subscriptionPlans: null };
            obj8[1] = callback;
            obj8[2] = closure_2.body;
            obj.dispatch(obj8);
            c9 = 0;
            c11 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = closure_2.body;
            return obj9;
          }
          const HTTP = callback(closure_2[6]).HTTP;
          c10 = 3;
          c11 = 1;
          const obj10 = { value: null, done: false };
          obj10[0] = HTTP.get(obj2);
          return obj10;
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
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ACTIVE_PREMIUM_SKUS: closure_6, PremiumSubscriptionSKUs: error } = GuildFeatures);
let result = require("set").fileFinishedImporting("actions/SubscriptionPlanActionCreators.tsx");

export { fetchSubscriptionPlansForSKU };
export const fetchSubscriptionPlansBySKUs = function fetchSubscriptionPlansBySKUs(fetchedSKUIDs, country, APPLE_ADVANCED_COMMERCE) {
  closure_0 = country;
  closure_1 = APPLE_ADVANCED_COMMERCE;
  const found = fetchedSKUIDs.filter((arg0) => arg0 !== constants.NONE);
  return Promise.all(found.map((arg0) => closure_1_8(arg0, closure_0, undefined, undefined, undefined, closure_1)));
};
export const fetchPremiumSubscriptionPlans = function fetchPremiumSubscriptionPlans(country, arg1, arg2, APPLE_ADVANCED_COMMERCE) {
  closure_0 = country;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = APPLE_ADVANCED_COMMERCE;
  const found = closure_6.filter((arg0) => arg0 !== constants.NONE);
  return Promise.all(found.map((arg0) => closure_1_8(arg0, closure_0, closure_1, undefined, closure_2, closure_3)));
};
export const resetSubscriptionPlanData = function resetSubscriptionPlanData() {
  dispatcherDefault.dispatch({ type: "SUBSCRIPTION_PLANS_RESET" });
};