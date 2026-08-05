// discord_app/stores/billing/SubscriptionPlanStore.tsx
import createFromServer from "createFromServer";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import { Store } from "initialize";
import set from "GuildFeatures";

let SubscriptionIntervalTypes;
let SubscriptionPlanInfo;
let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
function addSubscriptionPlan(fromServer) {
  const skuId = fromServer.skuId;
  closure_10[fromServer.id] = fromServer;
  if (null != fromServer.prices[constants.DEFAULT]) {
    const _Set4 = Set;
    const _Object = Object;
    const set = new Set(Object.keys(tmp.paymentSourcePrices));
    closure_14[fromServer.id] = set;
    let set1 = dependencyMap2[fromServer.skuId];
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
    const tmp28 = dependencyMap2;
  }
  if (null != dependencyMap[skuId]) {
    obj.add(fromServer.id);
  } else {
    const _Set3 = Set;
    const items1 = [fromServer.id];
    const set3 = new Set(items1);
    tmp14[skuId] = set3;
  }
}
function addSubscriptionPlanFromServer(subscription_plan) {
  addSubscriptionPlan(createFromServer.createFromServer(subscription_plan));
}
function reset() {
  require("../../utils/FunctionUtils.tsx") /* areArraysShallowlyEqual */.clearObject(closure_10);
  const obj = require("../../utils/FunctionUtils.tsx") /* areArraysShallowlyEqual */;
  require("../../utils/FunctionUtils.tsx") /* areArraysShallowlyEqual */.clearObject(closure_11);
  set.clear();
  set1.clear();
  const obj2 = require("../../utils/FunctionUtils.tsx") /* areArraysShallowlyEqual */;
  require("../../utils/FunctionUtils.tsx") /* areArraysShallowlyEqual */.clearObject(closure_14);
  const obj3 = require("../../utils/FunctionUtils.tsx") /* areArraysShallowlyEqual */;
  require("../../utils/FunctionUtils.tsx") /* areArraysShallowlyEqual */.clearObject(closure_15);
  const items = [SubscriptionPlanInfo[SubscriptionPlans.NONE_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_YEAR], SubscriptionPlanInfo[SubscriptionPlans.NONE_3_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_6_MONTH]];
  const item = items.forEach((id) => {
    callback(createFromServer.createFromServer({ id: id.id, name: id.name, interval: id.interval, interval_count: id.intervalCount, tax_inclusive: true, sku_id: id.skuId, currency: constants.USD, price: 0, price_tier: 0 }));
  });
}
({ CurrencyCodes: c4, PriceSetAssignmentPurchaseTypes: c5 } = ME);
({ SubscriptionIntervalTypes, SubscriptionPlanInfo } = GuildFeatures);
const SubscriptionPlans = GuildFeatures.SubscriptionPlans;
({ PremiumSubscriptionSKUs: metroImportAll, ACTIVE_PREMIUM_SKUS: c9 } = GuildFeatures);
let closure_10 = {};
let closure_11 = {};
let set = new Set();
let set1 = new Set();
let closure_14 = {};
let closure_15 = {};
let items = [SubscriptionPlanInfo[SubscriptionPlans.NONE_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_YEAR], SubscriptionPlanInfo[SubscriptionPlans.NONE_3_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_6_MONTH]];
let item = items.forEach((id) => {
  callback(createFromServer.createFromServer({ id: id.id, name: id.name, interval: id.interval, interval_count: id.intervalCount, tax_inclusive: true, sku_id: id.skuId, currency: constants.USD, price: 0, price_tier: 0 }));
});
let items1 = [, , ];
({ DAY: arr2[0], MONTH: arr2[1], YEAR: arr2[2] } = SubscriptionIntervalTypes);
class SubscriptionPlanStore extends Store {
}
const prototype = SubscriptionPlanStore.prototype;
prototype["getPlanIdsForSkus"] = function getPlanIdsForSkus(items) {
  items = [];
  while (tmp !== undefined) {
    let tmp3 = dependencyMap;
    let set = dependencyMap[tmp2];
    if (set == null) {
      let _Set = Set;
      let tmp5 = new.target;
      let tmp6 = new.target;
      set = new Set();
    }
    let arr = Array.from(set);
    let sorted = arr.sort((arg0, arg1) => {
      const index = closure_18.indexOf(tmp.interval);
      return index - closure_18.indexOf(dependencyMap[arg1].interval) || dependencyMap[arg0].intervalCount - dependencyMap[arg1].intervalCount;
    });
    let push = items.push;
    let items1 = [];
    let tmp8 = items1;
    let tmp9 = arr;
    let num = 0;
    let arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
    let tmp11 = push;
    let tmp12 = items1;
    let tmp13 = items;
    let applyResult = HermesBuiltin.apply(items1, items);
    continue;
  }
  return items;
};
prototype["getFetchedSKUIDs"] = function getFetchedSKUIDs() {
  return require("../../utils/SnowflakeUtils.tsx").keys(closure_11);
};
prototype["getForSKU"] = function getForSKU(arg0) {
  let items = dependencyMap[arg0];
  if (items == null) {
    items = [];
  }
  return Array.from(items).map((arg0) => table[arg0]);
};
prototype["getForSkuAndInterval"] = function getForSkuAndInterval(GUILD, interval, intervalCount) {
  let closure_0 = interval;
  let num = intervalCount;
  if (intervalCount === undefined) {
    num = 1;
  }
  const forSKU = this.getForSKU(GUILD);
  return forSKU.find((id) => {
    let tmp = id.id !== outer1_7.PREMIUM_GROUP_MONTH;
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
  return table[arg0];
};
prototype["isFetchingForSKU"] = function isFetchingForSKU(arg0) {
  return set.has(arg0);
};
prototype["isFetchingForSKUs"] = function isFetchingForSKUs(skuIDs) {
  const self = this;
  return skuIDs.some((arg0) => self.isFetchingForSKU(arg0));
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
  return items.every((TIER_2) => self.isLoadedForSKU(TIER_2));
};
prototype["isFetchingForPremiumSKUs"] = function isFetchingForPremiumSKUs() {
  const self = this;
  return closure_9.some((arg0) => self.isFetchingForSKU(arg0));
};
prototype["isLoadedForPremiumSKUs"] = function isLoadedForPremiumSKUs() {
  const self = this;
  return closure_9.every((TIER_2) => self.isLoadedForSKU(TIER_2));
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
  const set = new Set();
  const values = Object.values(closure_14);
  const item = values.forEach((arr) => arr.forEach((arg0) => set.add(arg0)));
  return set;
};
prototype["hasPaymentSourceForSKUId"] = function hasPaymentSourceForSKUId(closure_0, arg1) {
  let tmp = constants2.NONE === arg1;
  if (!tmp) {
    let hasItem = null != dependencyMap2[arg1];
    if (hasItem) {
      hasItem = tmp2[arg1].has(closure_0);
      const obj = tmp2[arg1];
    }
    tmp = hasItem;
  }
  return tmp;
};
prototype["hasPaymentSourceForSKUIds"] = function hasPaymentSourceForSKUIds(defaultPaymentSourceId, arr) {
  const self = this;
  let closure_0 = defaultPaymentSourceId;
  return arr.every((arg0) => self.hasPaymentSourceForSKUId(closure_0, arg0));
};
SubscriptionPlanStore.displayName = "SubscriptionPlanStore";
const subscriptionPlanStore = new SubscriptionPlanStore(require("dispatcher"), {
  SUBSCRIPTION_PLANS_FETCH: function handleSubscriptionPlansFetch(skuId) {
    set.add(skuId.skuId);
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: function handleSubscriptionPlansFetchSuccess(arg0) {
    let skuId;
    let subscriptionPlans;
    ({ skuId, subscriptionPlans } = arg0);
    const set = new Set();
    closure_11[skuId] = set;
    const set1 = new Set();
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
      addSubscriptionPlan(createFromServer.createFromServer(giftCode.subscription_plan));
    }
  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function handleEntitlementGiftsFetchSuccess(arg0) {
    const iter = arg0.entitlements[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.subscription_plan) {
        let tmp3 = addSubscriptionPlanFromServer;
        let tmp4 = nextResult;
        let tmp5 = addSubscriptionPlanFromServer(tmp2.subscription_plan);
      }
      continue;
    }
  },
  LOGOUT: reset
});
const result = set.fileFinishedImporting("stores/billing/SubscriptionPlanStore.tsx");

export default subscriptionPlanStore;
export const subscriptionPlansFetchingForSKU = set;