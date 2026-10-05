// === Module 6760: SubscriptionPlanActionCreators ===

// Module 6760 (SubscriptionPlanActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5404 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import BillingInfoStore from "BillingInfoStore" /* 4530 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import size from "module_2" /* 2 */;

let closure_6, closure_7, closure_8;

let metroImportDefault;
let metroRequire;
function fetchSubscriptionPlansForSKU() {
  return obj(...arguments);
}
let obj = function _fetchSubscriptionPlansForSKU() {
  let ipCountryCodeLoaded;
  obj = _asyncToGenerator(async (skuId, country_code, payment_source_id, include_unpublished, revenue_surface, payment_gateway) => {
    let c10 = 0;
    let c11 = 0;
    let c9 = 0;
    return (async function(arg0, value, arg2, arg3, arg4, arg5) {
      let obj7;
      let obj9;
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let obj5;
          c11 = 2;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              return { value, done: true };
            } else {
              closure_7 = tmp;
              closure_6 = tmp4;
              payment_source_id = undefined;
              include_unpublished = undefined;
              const obj4 = { type: "SUBSCRIPTION_PLANS_FETCH", skuId };
              const obj14 = DispatcherDefault;
              obj14.dispatch(obj4);
              c9 = 1;
              obj5 = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(skuId), oldFormErrors: true, rejectWithError: true, retries: 10, query: obj7 };
              obj7 = {};
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
              if (!ipCountryCodeLoaded.ipCountryCodeLoaded) {
                c10 = 2;
                c11 = 1;
                const obj10 = { value: obj9.fetchIpCountryCode(), done: false };
                obj9 = actions_BillingActionCreators;
                return obj10;
              }
            }
          } else if (1 === c10) {
            c9 = 0;
            revenue_surface = closure_8;
            const obj11 = { type: "SUBSCRIPTION_PLANS_FETCH_FAILURE", skuId };
            const obj6 = closure_135_1(closure_135_2[4]);
            obj6.dispatch(obj11);
            const obj8 = closure_135_0(closure_135_2[7]);
            const result = obj8.captureBillingException(revenue_surface);
            const self = this;
            const self2 = this;
            include_unpublished = new closure_135_1(closure_135_2[8])(revenue_surface);
            const _HermesInternal = HermesInternal;
            const tmp28 = new closure_135_1(closure_135_2[8])(revenue_surface);
            include_unpublished.message = "Failed to fetch subscription plans for SKU " + skuId;
            throw include_unpublished;
          } else if (2 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 0;
              c11 = 3;
              return { value, done: true };
            }
          } else if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 0;
            c11 = 3;
            return { value, done: true };
          } else {
            payment_source_id = value;
            const obj15 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId, subscriptionPlans: payment_source_id.body };
            obj = closure_135_1(closure_135_2[4]);
            obj.dispatch(obj15);
            c9 = 0;
            c11 = 3;
            return { value: payment_source_id.body, done: true };
          }
          const HTTP = closure_135_0(closure_135_2[6]).HTTP;
          c10 = 3;
          c11 = 1;
          const obj17 = { value: HTTP.get(obj5), done: false };
          return obj17;
        } catch (tmp41) {
          closure_8 = tmp41;
          if (0 === c9) {
            c11 = 3;
            throw tmp41;
          } else {
            c10 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
({ ACTIVE_PREMIUM_SKUS: metroRequire, PremiumSubscriptionSKUs: metroImportDefault } = PremiumConstants);
let result = size.fileFinishedImporting("actions/SubscriptionPlanActionCreators.tsx");

export { fetchSubscriptionPlansForSKU };
export const fetchSubscriptionPlansBySKUs = function fetchSubscriptionPlansBySKUs(skuIDs, country, APPLE_ADVANCED_COMMERCE) {
  let closure_0 = country;
  let closure_1 = APPLE_ADVANCED_COMMERCE;
  const found = skuIDs.filter((item) => item !== constants.NONE);
  return all(found.map((item) => fetchSubscriptionPlansForSKU(item, country, undefined, undefined, undefined, APPLE_ADVANCED_COMMERCE)));
};
export const fetchPremiumSubscriptionPlans = function fetchPremiumSubscriptionPlans(country2, arg1, arg2, APPLE_ADVANCED_COMMERCE) {
  let closure_0 = country2;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = APPLE_ADVANCED_COMMERCE;
  const found = closure_6.filter((item) => item !== constants.NONE);
  return all(found.map((item) => fetchSubscriptionPlansForSKU(item, country2, closure_1, undefined, closure_2, APPLE_ADVANCED_COMMERCE)));
};
export const resetSubscriptionPlanData = function resetSubscriptionPlanData() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "SUBSCRIPTION_PLANS_RESET" });
};