// === Module 10501: useNativeIAPPayments ===

// Module 10501 (useNativeIAPPayments)
import timestampDefault from "timestamp" /* 3 */;
import useInitialValueDefault from "useInitialValue" /* 5893 */;
import useTimeoutDefault from "useTimeout" /* 10451 */;
import useCreateSubscriptionParamsDefault from "useCreateSubscriptionParams" /* 10502 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "isGenericIapConnected" /* 6038 */;
import closure_7 from "addSubscriptionPlan" /* 4112 */;
import closure_8 from "reset" /* 4113 */;
import closure_9 from "updateProduct" /* 6036 */;
import ME from "ME" /* 676 */;

const require = arg1;
function useNativeIAPPayments() {
  const items = [closure_6, closure_9];
  const tmp2 = nativePaymentsConnected(nativePaymentsConnected(storeFront[9]).useStateFromStoresArray(items, () => {
    const items = [closure_6.isGenericIapConnected(), closure_6.genericProductsLoaded(), closure_6.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  nativePaymentsConnected = tmp2[0];
  importDefault = tmp4;
  storeFront = tmp2[2];
  closure_3 = tmp2[3];
  if (nativePaymentsConnected) {
    nativePaymentsConnected = tmp4;
  }
  if (nativePaymentsConnected) {
    nativePaymentsConnected = null != storeFront;
  }
  const items1 = [tmp2[1]];
  const effect = React.useEffect(() => {
    if (!first) {
      const products = first(7098).loadProducts();
      const obj = first(7098);
    }
  }, items1);
  importDefault(storeFront[11])(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      let obj = first(4122);
      obj = { tags: null, extra: null };
      obj[0] = { alertPriority: "0" };
      let mapped;
      if (stateFromStores != null) {
        mapped = arr.map((identifier) => identifier.identifier);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj = { loadedProducts: null, connected: null, genericProductsLoaded: null, storeFront: null };
      obj[0] = mapped;
      obj[1] = first;
      obj[2] = first;
      obj[3] = dependencyMap;
      obj[1] = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
      arr = stateFromStores;
    }
  }, 5000);
  return { nativePaymentsConnected, storeFront };
}
function useCreateSubscription(planId) {
  planId = planId.planId;
  let first = planId;
  const skuId = planId.skuId;
  importDefault = skuId;
  const applicationId = planId.applicationId;
  dependencyMap = applicationId;
  const analyticsLocation = planId.analyticsLocation;
  let callback = analyticsLocation;
  first = undefined;
  let React;
  closure_6 = undefined;
  callback = undefined;
  first = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  callback = undefined;
  first = undefined;
  let obj = first(589);
  const items = [closure_6, closure_9];
  const tmp3 = first(obj.useStateFromStoresArray(items, () => {
    const items = [closure_6.isGenericIapConnected(), closure_6.genericProductsLoaded(), closure_6.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  first = tmp3[0];
  importDefault = tmp5;
  dependencyMap = tmp6;
  callback = tmp3[3];
  if (first) {
    first = tmp5;
  }
  if (first) {
    first = null != tmp6;
  }
  const items1 = [tmp3[1]];
  const effect = React.useEffect(() => {
    if (!first) {
      const products = first(7098).loadProducts();
      const obj = first(7098);
    }
  }, items1);
  useTimeoutDefault(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      let obj = first(4122);
      obj = { tags: null, extra: null };
      obj[0] = { alertPriority: "0" };
      let mapped;
      if (stateFromStores != null) {
        mapped = arr.map((identifier) => identifier.identifier);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj = { loadedProducts: null, connected: null, genericProductsLoaded: null, storeFront: null };
      obj[0] = mapped;
      obj[1] = first;
      obj[2] = first;
      obj[3] = dependencyMap;
      obj[1] = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
      arr = stateFromStores;
    }
  }, 5000);
  const items2 = [callback];
  const items3 = [planId];
  const stateFromStores = first(589).useStateFromStores(items2, () => callback.get(first), items3);
  const tmp11 = useCreateSubscriptionParamsDefault(stateFromStores, tmp3[2]);
  React = tmp11;
  const tmp12 = useInitialValueDefault(() => first(698).getNewAnalyticsLoadId());
  closure_6 = tmp12;
  const items4 = [tmp12, analyticsLocation, applicationId, planId, skuId];
  callback = React.useCallback(() => {
    let obj = first(10405);
    obj = { load_id: closure_6, payment_type: closure_1_10[closure_1_11.SUBSCRIPTION], subscription_plan_gateway_plan_id: first(6039).ProductIds.GENERIC_SUBSCRIPTION, subscription_type: closure_1_12.GUILD, is_gift: false, location: closure_3, application_id: dependencyMap, subscription_plan_id: first, sku_id: closure_1 };
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  }, items4);
  obj = {
    createSubscription: React.useCallback(callback(function*() {
      closure_0 = tmp3;
      v0(closure_1_2[18])(c4, "cannot connect to IAP API");
      v0(closure_1_2[18])(null != closure_1_5, "plan not found");
      c3 = 1;
      yield v0(closure_1_2[10]).restoreAndApplyPurchases();
      if (1 === tmp7) {
        c3 = 0;
        closure_1_13.error("error consuming pending purchases but we'll try to let user purchase");
        closure_1_7();
        const genericSubscription = closure_1_0(closure_1_2[10]).createGenericSubscription(closure_1_5);
        v0 = 2;
        c4 = 1;
        const obj6 = closure_1_0(closure_1_2[10]);
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          obj2 = closure_1_0(closure_1_2[19]);
          v0 = 4;
          c4 = 1;
          const obj3 = { value: null, done: false };
          obj3[0] = obj2.fetchSubscriptions();
          return obj3;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
      c3 = 0;
      return arg1;
    }), items5),
    nativePaymentsConnected: first
  };
  items5 = [tmp11, first, callback];
  return obj;
}
function useCancelSubscription(arg0, arg1) {
  let first = arg0;
  importDefault = arg1;
  let obj = first(first[9]);
  const items = [closure_6, closure_9];
  let tmp3 = stateFromStores(obj.useStateFromStoresArray(items, () => {
    const items = [closure_6.isGenericIapConnected(), closure_6.genericProductsLoaded(), closure_6.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  first = tmp3[0];
  importDefault = tmp5;
  first = tmp6;
  let callback = tmp3[3];
  if (first) {
    first = tmp5;
  }
  if (first) {
    first = null != tmp6;
  }
  stateFromStores = first;
  const items1 = [tmp3[1]];
  const effect = memo.useEffect(() => {
    if (!first) {
      const products = first(7098).loadProducts();
      const obj = first(7098);
    }
  }, items1);
  importDefault(first[11])(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      let obj = first(4122);
      obj = { tags: null, extra: null };
      obj[0] = { alertPriority: "0" };
      let mapped;
      if (stateFromStores != null) {
        mapped = arr.map((identifier) => identifier.identifier);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj = { loadedProducts: null, connected: null, genericProductsLoaded: null, storeFront: null };
      obj[0] = mapped;
      obj[1] = first;
      obj[2] = first;
      obj[3] = dependencyMap;
      obj[1] = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
      arr = stateFromStores;
    }
  }, 5000);
  callback = tmp6;
  const items2 = [closure_8];
  const items3 = [arg0];
  stateFromStores = first(first[9]).useStateFromStores(items2, () => closure_1_8.getSubscriptionById(first), items3);
  const items4 = [tmp3[2], stateFromStores];
  memo = memo.useMemo(() => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = null != tmp2;
    }
    if (tmp3) {
      tmp3 = stateFromStores.currency === tmp2.currency;
    }
    return tmp3;
  }, items4);
  const tmp12 = importDefault(first[20])(arg0);
  closure_6 = tmp12;
  obj = {
    cancelSubscription: memo.useCallback(callback(function*() {
      closure_0 = tmp2;
      closure_1_1(38)(closure_1_5, "Cannot update subscription");
      closure_1_1(38)(dependencyMap, "Cannot connect to IAP API");
      closure_1_1(38)(null != closure_1_6, "Subscription not found");
      closure_0 = yield closure_1_0(7098).cancelGenericSubscription(closure_1_6.requestIdentifier, closure_1_6.subscriptionId, closure_1_1);
      const obj2 = closure_1_0(4790);
      yield obj2.fetchSubscriptions();
      return closure_0;
    }), items5),
    nativePaymentsConnected: first
  };
  items5 = [memo, tmp12, first, arg1];
  return obj;
}
function useResubscribeSubscription(arg0) {
  let first = arg0;
  let obj = first(589);
  let items = [closure_6, closure_9];
  let tmp3 = memo(obj.useStateFromStoresArray(items, () => {
    const items = [closure_6.isGenericIapConnected(), closure_6.genericProductsLoaded(), closure_6.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  first = tmp3[0];
  first = tmp5;
  dependencyMap = tmp6;
  let stateFromStores = tmp3[3];
  if (first) {
    first = tmp5;
  }
  if (first) {
    first = null != tmp6;
  }
  memo = first;
  const items1 = [tmp3[1]];
  const effect = React.useEffect(() => {
    if (!first) {
      const products = first(7098).loadProducts();
      const obj = first(7098);
    }
  }, items1);
  first(10451)(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      let obj = first(4122);
      obj = { tags: null, extra: null };
      obj[0] = { alertPriority: "0" };
      let mapped;
      if (stateFromStores != null) {
        mapped = arr.map((identifier) => identifier.identifier);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj = { loadedProducts: null, connected: null, genericProductsLoaded: null, storeFront: null };
      obj[0] = mapped;
      obj[1] = first;
      obj[2] = first;
      obj[3] = dependencyMap;
      obj[1] = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
      arr = stateFromStores;
    }
  }, 5000);
  dependencyMap = tmp6;
  const items2 = [closure_8];
  const items3 = [arg0];
  stateFromStores = first(589).useStateFromStores(items2, () => closure_1_8.getSubscriptionById(first), items3);
  const items4 = [tmp3[2], stateFromStores];
  memo = React.useMemo(() => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = null != tmp2;
    }
    if (tmp3) {
      tmp3 = stateFromStores.currency === tmp2.currency;
    }
    return tmp3;
  }, items4);
  const tmp12 = first(10505)(arg0);
  React = tmp12;
  obj = {
    resubscribeSubscription: React.useCallback(stateFromStores(function*() {
      closure_0 = tmp2;
      closure_1_1(38)(closure_1_4, "Cannot update subscription");
      closure_1_1(38)(closure_1_1, "Cannot connect to IAP API");
      closure_1_1(38)(null != closure_1_5, "Subscription not found");
      closure_1_1(38)(null != isACOM, "Subscription not found");
      closure_0 = yield closure_1_0(7098).resubscribeGenericSubscription(closure_1_5, isACOM.isACOM);
      const obj2 = closure_1_0(4790);
      yield obj2.fetchSubscriptions();
      return closure_0;
    }), items5),
    nativePaymentsConnected: first
  };
  items5 = [memo, first, tmp12, stateFromStores];
  return obj;
}
function useGoogleSkuIds() {
  return closure_14;
}
({ PurchaseTypeToAnalyticsPaymentType: c10, PurchaseTypes: unpackModuleId, SubscriptionTypes: closure_12 } = ME);
let closure_13 = new timestampDefault("NativePaymentHooks.ios.tsx");
let closure_14 = { isFetchingGoogleSkus: false, fetchError: null };
let c15 = false;
let tmp3 = new timestampDefault("NativePaymentHooks.ios.tsx");
let result = require("set").fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.ios.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription };
export { useNativeIAPPayments };
export { useCreateSubscription };
export { useCancelSubscription };
export { useResubscribeSubscription };
export { useGoogleSkuIds };