// === Module 4539: SubscriptionPlanStore ===

// Module 4539 (SubscriptionPlanStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import FunctionUtils from "FunctionUtils" /* 2026 */;
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 4535 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import size from "module_2" /* 2 */;

let set2, set3;

let SubscriptionIntervalTypes;
let SubscriptionPlanInfo;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
const f88770 = (id) => {
  const obj = { id: id.id, name: id.name, interval: id.interval, interval_count: id.intervalCount, tax_inclusive: true, sku_id: id.skuId, currency: constants.USD, price: 0, price_tier: 0 };
  addSubscriptionPlan(SubscriptionPlanRecord.createFromServer(obj));
};
function addSubscriptionPlan(fromServer) {
  const skuId = fromServer.skuId;
  closure_10[fromServer.id] = fromServer;
  if (null != fromServer.prices[hasOwnProperty.DEFAULT]) {
    const _Set4 = Set;
    const _Object = Object;
    const self7 = this;
    let self2 = this;
    set = new Set(Object.keys(fromServer.prices[hasOwnProperty.DEFAULT].paymentSourcePrices));
    closure_14[fromServer.id] = set;
    set1 = closure_15[fromServer.skuId];
    const _Array2 = Array;
    if (set1 == null) {
      const _Set = Set;
      const self = this;
      self2 = this;
      set1 = new Set();
    }
    const _Set2 = Set;
    const items = [];
    const skuId2 = fromServer.skuId;
    const _Array = Array;
    const arraySpreadResult = HermesBuiltin.arraySpread(items, from(set1), 0);
    HermesBuiltin.arraySpread(items, Array.from(set), arraySpreadResult);
    const self3 = this;
    const self4 = this;
    closure_15[skuId2] = new Set(items);
    set2 = new Set(items);
  }
  if (null != closure_11[skuId]) {
    closure_11[skuId].add(fromServer.id);
  } else {
    const _Set3 = Set;
    items1 = [fromServer.id];
    const self5 = this;
    const self6 = this;
    tmp10[skuId] = new Set(items1);
    set3 = new Set(items1);
  }
}
function addSubscriptionPlanFromServer(subscription_plan) {
  addSubscriptionPlan(SubscriptionPlanRecord.createFromServer(subscription_plan));
}
function reset() {
  let obj = FunctionUtils;
  obj.clearObject(closure_10);
  const obj2 = FunctionUtils;
  obj2.clearObject(closure_11);
  set.clear();
  set1.clear();
  const obj3 = FunctionUtils;
  obj3.clearObject(closure_14);
  const obj4 = FunctionUtils;
  obj4.clearObject(closure_15);
  const items = [SubscriptionPlanInfo[SubscriptionPlans.NONE_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_YEAR], SubscriptionPlanInfo[SubscriptionPlans.NONE_3_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_6_MONTH]];
  const item = items.forEach(f88770);
}
({ CurrencyCodes: closure_4, PriceSetAssignmentPurchaseTypes: hasOwnProperty } = Constants);
({ SubscriptionIntervalTypes, SubscriptionPlanInfo } = PremiumConstants);
const SubscriptionPlans = PremiumConstants.SubscriptionPlans;
({ PremiumSubscriptionSKUs: metroImportAll, ACTIVE_PREMIUM_SKUS: c9 } = PremiumConstants);
const authStore = {};
const unpackModuleId = {};
let set = new Set();
let set1 = new Set();
const authStore2 = {};
let closure_15 = {};
let items = [SubscriptionPlanInfo[SubscriptionPlans.NONE_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_YEAR], SubscriptionPlanInfo[SubscriptionPlans.NONE_3_MONTH], SubscriptionPlanInfo[SubscriptionPlans.NONE_6_MONTH]];
let item = items.forEach(f88770);
let items1 = [, , ];
({ DAY: arr2[0], MONTH: arr2[1], YEAR: arr2[2] } = SubscriptionIntervalTypes);
const Store = get_initializedDefault.Store;
class SubscriptionPlanStore extends Store {
  getPlanIdsForSkus(items) {
    items = [];
    const tmp = items[Symbol.iterator]();
    while (tmp !== undefined) {
      set = closure_11[tmp2];
      let _Array = Array;
      if (set == null) {
        let _Set = Set;
        let self = this;
        let self2 = this;
        set = new Set();
      }
      let fromResult = from(set);
      let sorted = fromResult.sort((arg0, arg1) => {
        const index = items1.indexOf(tmp.interval);
        const tmp4 = index - items1.indexOf(closure_1_10[arg1].interval) || closure_1_10[arg0].intervalCount - closure_1_10[arg1].intervalCount;
        return tmp4;
      });
      let push = items.push;
      items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items1, fromResult, 0);
      let applyResult = HermesBuiltin.apply(push, items1, items);
      continue;
    }
    return items;
  }
  getFetchedSKUIDs() {
    const obj = SnowflakeUtilsDefault;
    return obj.keys(closure_11);
  }
  getForSKU(arg0) {
    let items = closure_11[arg0];
    const _Array = Array;
    if (items == null) {
      items = [];
    }
    const fromResult = from(items);
    return fromResult.map((item) => closure_1_10[item]);
  }
  getForSkuAndInterval(GUILD, interval) {
    let closure_0 = interval;
    let num = intervalCount;
    if (intervalCount === undefined) {
      num = 1;
    }
    const forSKU = this.getForSKU(GUILD);
    return forSKU.find((id) => id.id !== SubscriptionPlans.PREMIUM_GROUP_MONTH && id.interval === interval && id.intervalCount === num);
  }
  get(arg0) {
    return closure_10[arg0];
  }
  isFetchingForSKU(arg0) {
    return set.has(arg0);
  }
  isFetchingForSKUs(skuIDs) {
    const self = this;
    return skuIDs.some((item) => self.isFetchingForSKU(item));
  }
  isLoadedForSKU(TIER_2) {
    let hasItem1 = set1.has(TIER_2);
    if (!hasItem1) {
      const hasItem = set.has(TIER_2);
      hasItem1 = !hasItem && null != closure_11[TIER_2];
      const tmp4 = !hasItem && null != closure_11[TIER_2];
    }
    return hasItem1;
  }
  isLoadedForSKUs(items) {
    const self = this;
    return items.every((item) => self.isLoadedForSKU(item));
  }
  isFetchingForPremiumSKUs() {
    const self = this;
    return React4.some((item) => self.isFetchingForSKU(item));
  }
  isLoadedForPremiumSKUs() {
    const self = this;
    return React4.every((item) => self.isLoadedForSKU(item));
  }
  ignoreSKUFetch(arg0) {
    set1.add(arg0);
  }
  getPaymentSourcesForPlanId(keys) {
    let tmp2 = null;
    if (closure_14.hasOwnProperty(keys)) {
      tmp2 = closure_14[keys];
    }
    return tmp2;
  }
  getPaymentSourceIds() {
    set = new Set();
    const values = Object.values(closure_14);
    const item = values.forEach((arr) => arr.forEach((item) => set.add(item)));
    return set;
  }
  hasPaymentSourceForSKUId(defaultPaymentSourceId, item) {
    let tmp = metroImportAll.NONE === item;
    if (!tmp) {
      let hasItem = null != closure_15[item];
      if (hasItem) {
        const obj = tmp2[item];
        hasItem = obj.has(defaultPaymentSourceId);
      }
      tmp = hasItem;
    }
    return tmp;
  }
  hasPaymentSourceForSKUIds(defaultPaymentSourceId, items) {
    const self = this;
    let closure_0 = defaultPaymentSourceId;
    return items.every((item) => self.hasPaymentSourceForSKUId(defaultPaymentSourceId, item));
  }
}
const prototype = SubscriptionPlanStore.prototype;
SubscriptionPlanStore.displayName = "SubscriptionPlanStore";
let obj = {
  SUBSCRIPTION_PLANS_FETCH: function handleSubscriptionPlansFetch(skuId) {
    set.add(skuId.skuId);
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: function handleSubscriptionPlansFetchSuccess(arg0) {
    let skuId;
    let subscriptionPlans;
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
};
const subscriptionPlanStore = new SubscriptionPlanStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/billing/SubscriptionPlanStore.tsx");

export default subscriptionPlanStore;
export const subscriptionPlansFetchingForSKU = set;