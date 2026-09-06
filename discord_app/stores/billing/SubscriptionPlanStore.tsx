// === Module 4223: SubscriptionPlanStore ===

// Module 4223 (SubscriptionPlanStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import FunctionUtils from "FunctionUtils" /* 1933 */;
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 4219 */;

require = fn;
function addSubscriptionPlan(fromServer) {
  const skuId = fromServer.skuId;
  closure_10[fromServer.id] = fromServer;
  if (null != fromServer.prices[constants.DEFAULT]) {
    const _Set4 = Set;
    const _Object = Object;
    set = new Set(Object.keys(tmp.paymentSourcePrices));
    closure_14[fromServer.id] = set;
    set1 = dependencyMap2[fromServer.skuId];
    if (set1 == null) {
      const _Set = Set;
      set1 = new Set();
    }
    const _Set2 = Set;
    const items = [];
    const _Array = Array;
    let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(set1), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(Array.from(set), arraySpreadResult);
    const set2 = new Set(items);
    dependencyMap2[fromServer.skuId] = set2;
  }
  if (null != dependencyMap[skuId]) {
    obj.add(fromServer.id);
  } else {
    const _Set3 = Set;
    items1 = [fromServer.id];
    const set3 = new Set(items1);
    tmp14[skuId] = set3;
  }
}
function addSubscriptionPlanFromServer(subscription_plan) {
  addSubscriptionPlan(SubscriptionPlanRecord.createFromServer(subscription_plan));
}
function reset() {
  FunctionUtils.clearObject(closure_10);
  FunctionUtils.clearObject(closure_11);
  set.clear();
  set1.clear();
  FunctionUtils.clearObject(closure_14);
  FunctionUtils.clearObject(closure_15);
  const items = [SubscriptionPlanInfo[SubscriptionPlans.NONE_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_YEAR], SubscriptionPlanInfo[SubscriptionPlans.NONE_3_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_6_MONTH]];
  const item = items.forEach((id) => {
    addSubscriptionPlan(SubscriptionPlanRecord.createFromServer({ id: id.id, name: id.name, interval: id.interval, interval_count: id.intervalCount, tax_inclusive: true, sku_id: id.skuId, currency: constants.USD, price: 0, price_tier: 0 }));
  });
}
const Constants = fn(1074);
({ CurrencyCodes: closure_4, PriceSetAssignmentPurchaseTypes: hasOwnProperty } = Constants);
const PremiumConstants = fn(1373);
({ SubscriptionIntervalTypes, SubscriptionPlanInfo } = PremiumConstants);
const SubscriptionPlans = PremiumConstants.SubscriptionPlans;
({ PremiumSubscriptionSKUs: closure_8, ACTIVE_PREMIUM_SKUS: closure_9 } = PremiumConstants);
let closure_10 = {};
const dependencyMap = {};
let set = new Set();
let set1 = new Set();
let closure_14 = {};
const dependencyMap2 = {};
let items = [SubscriptionPlanInfo[SubscriptionPlans.NONE_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_YEAR], SubscriptionPlanInfo[SubscriptionPlans.NONE_3_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_6_MONTH]];
let item = items.forEach((id) => {
  addSubscriptionPlan(SubscriptionPlanRecord.createFromServer({ id: id.id, name: id.name, interval: id.interval, interval_count: id.intervalCount, tax_inclusive: true, sku_id: id.skuId, currency: constants.USD, price: 0, price_tier: 0 }));
});
let items1 = [, , ];
({ DAY: arr2[0], MONTH: arr2[1], YEAR: arr2[2] } = SubscriptionIntervalTypes);
const Store = initializeDefault.Store;
class SubscriptionPlanStore extends Store {
}
const prototype = SubscriptionPlanStore.prototype;
prototype["getPlanIdsForSkus"] = function getPlanIdsForSkus(items) {
  items = [];
  while (tmp !== undefined) {
    set = dependencyMap[tmp2];
    if (set == null) {
      let _Set = Set;
      let tmp5 = new.target;
      let tmp6 = new.target;
      set = new Set();
    }
    let arr = Array.from(set);
    let sorted = arr.sort((arg0, arg1) => {
      const index = items1.indexOf(tmp.interval);
      return index - items1.indexOf(dependencyMap[arg1].interval) || dependencyMap[arg0].intervalCount - dependencyMap[arg1].intervalCount;
    });
    let push = items.push;
    items1 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
    let applyResult = HermesBuiltin.apply(items1, items);
    continue;
  }
  return items;
};
prototype["getFetchedSKUIDs"] = function getFetchedSKUIDs() {
  return SnowflakeUtilsDefault.keys(closure_11);
};
prototype["getForSKU"] = function getForSKU(arg0) {
  let items = dependencyMap[arg0];
  if (items == null) {
    items = [];
  }
  return Array.from(items).map((item) => closure_1_10[item]);
};
prototype["getForSkuAndInterval"] = function getForSkuAndInterval(GUILD, interval) {
  closure_0 = interval;
  const forSKU = this.getForSKU(GUILD);
  return forSKU.find((id) => {
    let tmp = id.id !== SubscriptionPlans.PREMIUM_GROUP_MONTH;
    if (tmp) {
      tmp = id.interval === closure_0;
    }
    if (tmp) {
      tmp = id.intervalCount === num;
    }
    return tmp;
  });
};
prototype["get"] = function get(arg0) {
  return closure_10[arg0];
};
prototype["isFetchingForSKU"] = function isFetchingForSKU(arg0) {
  return set.has(arg0);
};
prototype["isFetchingForSKUs"] = function isFetchingForSKUs(skuIDs) {
  const self = this;
  return skuIDs.some((item) => self.isFetchingForSKU(item));
};
prototype["isLoadedForSKU"] = function isLoadedForSKU(TIER_2) {
  let hasItem = set1.has(TIER_2);
  if (!hasItem) {
    hasItem = set.has(TIER_2);
    let tmp4 = !hasItem;
    if (!hasItem) {
      tmp4 = null != dependencyMap[TIER_2];
    }
    hasItem = tmp4;
  }
  return hasItem;
};
prototype["isLoadedForSKUs"] = function isLoadedForSKUs(items) {
  const self = this;
  return items.every((item) => self.isLoadedForSKU(item));
};
prototype["isFetchingForPremiumSKUs"] = function isFetchingForPremiumSKUs() {
  const self = this;
  return React7.some((item) => self.isFetchingForSKU(item));
};
prototype["isLoadedForPremiumSKUs"] = function isLoadedForPremiumSKUs() {
  const self = this;
  return React7.every((item) => self.isLoadedForSKU(item));
};
prototype["ignoreSKUFetch"] = function ignoreSKUFetch(arg0) {
  set1.add(arg0);
};
prototype["getPaymentSourcesForPlanId"] = function getPaymentSourcesForPlanId(key10009) {
  let tmp2 = null;
  if (closure_14.hasOwnProperty(key10009)) {
    tmp2 = closure_14[key10009];
  }
  return tmp2;
};
prototype["getPaymentSourceIds"] = function getPaymentSourceIds() {
  set = new Set();
  const values = Object.values(closure_14);
  const item = values.forEach((arr) => arr.forEach((item) => set.add(item)));
  return set;
};
prototype["hasPaymentSourceForSKUId"] = function hasPaymentSourceForSKUId(arg0, item) {
  let tmp = constants2.NONE === item;
  if (!tmp) {
    let hasItem = null != dependencyMap2[item];
    if (hasItem) {
      hasItem = tmp2[item].has(arg0);
    }
    tmp = hasItem;
  }
  return tmp;
};
prototype["hasPaymentSourceForSKUIds"] = function hasPaymentSourceForSKUIds(defaultPaymentSourceId, items) {
  const self = this;
  closure_0 = defaultPaymentSourceId;
  return items.every((item) => self.hasPaymentSourceForSKUId(closure_0, item));
};
SubscriptionPlanStore.displayName = "SubscriptionPlanStore";
const subscriptionPlanStore = new SubscriptionPlanStore(DispatcherDefault, {
  SUBSCRIPTION_PLANS_FETCH: function handleSubscriptionPlansFetch(skuId) {
    set.add(skuId.skuId);
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: function handleSubscriptionPlansFetchSuccess(arg0) {
    ({ skuId, subscriptionPlans } = arg0);
    set = new Set();
    closure_11[skuId] = set;
    set1 = new Set();
    closure_15[skuId] = set1;
    const item = subscriptionPlans.forEach(addSubscriptionPlanFromServer);
    set.delete(skuId);
    set1.delete(skuId);
  },
  SUBSCRIPTION_PLANS_FETCH_FAILURE: function handleSubscriptionPlansFetchFailure(skuId) {
    skuId = skuId.skuId;
    set.delete(skuId);
    set1.delete(skuId);
  },
  SUBSCRIPTION_PLANS_RESET: reset,
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    if (null != giftCode.subscription_plan) {
      addSubscriptionPlan(SubscriptionPlanRecord.createFromServer(giftCode.subscription_plan));
    }
  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function handleEntitlementGiftsFetchSuccess(arg0) {
    const iter = arg0.entitlements[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.subscription_plan) {
        let tmp5 = addSubscriptionPlanFromServer(tmp2.subscription_plan);
      }
      continue;
    }
  },
  LOGOUT: reset
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/billing/SubscriptionPlanStore.tsx");

export default subscriptionPlanStore;
export const subscriptionPlansFetchingForSKU = set;