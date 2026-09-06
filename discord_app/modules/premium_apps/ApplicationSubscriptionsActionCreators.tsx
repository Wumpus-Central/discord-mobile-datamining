// === Module 14495: transformSubscriptionListingToSku ===

// Module 14495 (transformSubscriptionListingToSku)
import dispatcherDefault from "dispatcher" /* 573 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import ME from "ME" /* 1074 */;

function transformSubscriptionListingToSku(id) {
  return { id: id.id, type: constants2.SUBSCRIPTION, application_id: id.application_id, product_line: constants.APPLICATION, name: id.name, summary: "", description: id.description, flags: id.sku_flags, manifests: [], available_regions: [], legal_notice: "", deleted: id.soft_deleted, price_tier: 0, show_age_gate: false, restricted: false };
}
function transformSubscriptionListingToStoreListing(id) {
  obj = { id: id.id, sku: obj, summary: id.description, description: id.description, benefits: null, thumbnail: null, published: null };
  obj = { id: id.id, type: constants2.SUBSCRIPTION, application_id: id.application_id, product_line: constants.APPLICATION, name: id.name, summary: "", description: id.description, flags: id.sku_flags, manifests: [], available_regions: [], legal_notice: "", deleted: id.soft_deleted, price_tier: 0, show_age_gate: false, restricted: false };
  let prop = id.store_listing_benefits;
  if (prop == null) {
    prop = [];
  }
  obj[4] = prop;
  ({ image_asset: obj[5], published: obj[6] } = id);
  return obj;
}
function dispatchCompat(arr) {
  let obj = dispatcherDefault;
  obj = { type: "SKUS_FETCH_SUCCESS", skus: arr.map(transformSubscriptionListingToSku) };
  obj.dispatch(obj);
  obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: arr.map(transformSubscriptionListingToStoreListing) };
  dispatcherDefault.dispatch(obj);
  const iter = arr[Symbol.iterator]();
  const obj3 = dispatcherDefault;
  while (iter !== undefined) {
    let tmp4 = importDefault;
    let tmp5 = dependencyMap;
    let obj5 = dispatcherDefault;
    obj1 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: null, subscriptionPlans: null };
    ({ id: obj6[1], subscription_plans: obj6[2] } = nextResult);
    let dispatchResult2 = obj5.dispatch(obj1);
    continue;
  }
}
function _fetchAllSubscriptionListingsDataForApplication() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1) {
      closure_4 = tmp3;
      obj1 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId: null, groupListingId: null };
      obj1[1] = callback;
      obj1[2] = lib;
      callback(closure_1_2[2]).dispatch(obj1);
      c6 = 1;
      const obj10 = callback(closure_1_2[2]);
      yield lib(closure_1_2[3]).getApplicationSubscriptionGroupListingsForApplication(callback, lib);
      c6 = 0;
      const obj2 = callback(573);
      const obj3 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", applicationId: null };
      obj3[1] = callback;
      obj2.dispatch(obj3);
      lib = yield "HermesInternal";
      const obj5 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS", applicationId: null, groupListing: null };
      obj5[1] = callback;
      obj5[2] = lib;
      callback(573).dispatch(obj5);
      const subscription_listings = lib.subscription_listings;
      dependencyMap = subscription_listings;
      if (subscription_listings == null) {
        dependencyMap = [];
      }
      c8(dependencyMap);
      c6 = 0;
      return lib;
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
function _fetchEntitlementsForGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      dependencyMap = tmp3;
      obj1 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId: null };
      obj1[1] = callback;
      callback(closure_1_2[2]).dispatch(obj1);
      c4 = 1;
      const obj9 = callback(closure_1_2[2]);
      yield closure_1_1(closure_1_2[3]).getEntitlementsForGuild(callback);
      if (1 === tmp7) {
        c4 = 0;
        let obj3 = callback(573);
        obj3 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId: null };
        obj3[1] = callback;
        obj3.dispatch(obj3);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_1 = arg1;
        const obj = callback(573);
        const obj4 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS", guildId: null, entitlements: null };
        obj4[1] = callback;
        obj4[2] = closure_1;
        obj.dispatch(obj4);
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchSubscriptionListingForPlan() {
  const self = this;
  const apply = _fetchSubscriptionListingForPlan.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSubscriptionListingForPlan() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
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
          v0 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let status = tmp3;
              closure_3 = tmp7;
              let num13;
              if (num13 === undefined) {
                num13 = 0;
              }
              obj = undefined;
              closure_3 = undefined;
              c7 = 1;
              v0 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: null };
              obj2[1] = callback;
              callback(obj[2]).dispatch(obj2);
              c6 = 1;
              const obj12 = callback(obj[2]);
              c7 = 3;
              v0 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = num13(obj[3]).getSubscriptionGroupForSubscriptionPlan(callback);
              return obj3;
            }
          } else if (2 === tmp7) {
            c6 = 0;
            status = closure_5;
            if ("status" in status) {
              if (429 === status.status) {
                if (num13 < 10) {
                  const sum = num13 + 1;
                  num13 = sum;
                  c7 = 5;
                  v0 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = callback2(callback, sum);
                  return obj4;
                }
              }
            }
            throw status;
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              v0 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              obj = arg1;
              const obj6 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: null };
              obj6[1] = obj;
              callback(obj[2]).dispatch(obj6);
              const subscription_listings = obj.subscription_listings;
              obj = subscription_listings;
              if (subscription_listings == null) {
                obj = [];
              }
              closure_3 = obj;
              c7 = 4;
              v0 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = Promise.all(closure_3.map((id) => {
                if (id.subscription_plans[0].id === closure_0) {
                  const obj = num13(table[4]);
                  return obj.fetchSubscriptionPlansForSKU(id.id, undefined, undefined, true);
                }
              }));
              return obj7;
            }
          } else {
            if (4 === tmp7) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 0;
                v0 = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
              } else {
                v0(closure_3);
                c6 = 0;
              }
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp33) {
          closure_5 = tmp33;
          if (tmp4 === c6) {
            v0 = tmp2;
            throw tmp33;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ SKUProductLines: c4, SKUTypes: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx");

export const fetchAllSubscriptionListingsDataForApplication = function fetchAllSubscriptionListingsDataForApplication(closure_0, id) {
  const self = this;
  const apply = _fetchAllSubscriptionListingsDataForApplication.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchEntitlementsForGuild = function fetchEntitlementsForGuild() {
  const self = this;
  const apply = _fetchEntitlementsForGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissApplicationSubscriptionExpirationNotice = function dismissApplicationSubscriptionExpirationNotice(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId };
  obj.dispatch(obj);
};
export { fetchSubscriptionListingForPlan };