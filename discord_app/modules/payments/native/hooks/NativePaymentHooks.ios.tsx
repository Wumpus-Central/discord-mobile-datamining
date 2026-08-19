// discord_app/modules/payments/native/hooks/NativePaymentHooks.ios.tsx
import timestampDefault from "../../../debug/Logger.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import useTimeoutDefault from "../../../../hooks/useTimeout.tsx";
import useCreateSubscriptionParamsDefault from "../../../billing/native/subscription/useCreateSubscriptionParams.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import isGenericIapConnected from "../../../billing/native/GenericIAPStore.tsx";
import addSubscriptionPlan from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import reset from "../../../../stores/billing/SubscriptionStore.tsx";
import updateProduct from "../../../../stores/native/IAPStore.android.tsx";
import ME from "../../../../Constants.tsx";

const require = fn;
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
      const products = first(7390).loadProducts();
      const obj = first(7390);
    }
  }, items1);
  importDefault(storeFront[11])(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      first(4054);
      let obj = { tags: null, extra: null };
      obj[0] = { alertPriority: "0" };
      let mapped;
      if (stateFromStores != null) {
        mapped = stateFromStores.map((item, index) => item.identifier);
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
    }
  }, 5000);
  return { nativePaymentsConnected, storeFront };
}
function useCreateSubscription(planId) {
  planId = planId.planId;
  const skuId = planId.skuId;
  const applicationId = planId.applicationId;
  const analyticsLocation = planId.analyticsLocation;
  let React;
  closure_6 = undefined;
  let first;
  let obj = first(589);
  const items = [closure_6, closure_9];
  const tmp3 = first(obj.useStateFromStoresArray(items, () => {
    const items = [closure_6.isGenericIapConnected(), closure_6.genericProductsLoaded(), closure_6.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  first = tmp3[0];
  importDefault = tmp5;
  dependencyMap = tmp6;
  let callback = tmp3[3];
  if (first) {
    first = tmp5;
  }
  if (first) {
    first = null != tmp6;
  }
  const items1 = [tmp3[1]];
  const effect = React.useEffect(() => {
    if (!first) {
      const products = first(7390).loadProducts();
      const obj = first(7390);
    }
  }, items1);
  useTimeoutDefault(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      first(4054);
      let obj = { tags: null, extra: null };
      obj[0] = { alertPriority: "0" };
      let mapped;
      if (stateFromStores != null) {
        mapped = stateFromStores.map((item, index) => item.identifier);
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
    first(7659);
    const obj = { load_id: closure_6, payment_type: closure_1_10[closure_1_11.SUBSCRIPTION], subscription_plan_gateway_plan_id: first(5322).ProductIds.GENERIC_SUBSCRIPTION, subscription_type: closure_1_12.GUILD, is_gift: false, location: closure_3, application_id: dependencyMap, subscription_plan_id: first, sku_id: closure_1 };
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
        callback();
        const genericSubscription = first(closure_1_2[10]).createGenericSubscription(closure_1_5);
        v0 = 2;
        c4 = 1;
        const obj6 = first(closure_1_2[10]);
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
          obj2 = first(closure_1_2[19]);
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
  let obj = first(first[9]);
  const items = [closure_6, closure_9];
  let tmp3 = stateFromStores(obj.useStateFromStoresArray(items, () => {
    const items = [closure_6.isGenericIapConnected(), closure_6.genericProductsLoaded(), closure_6.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  importDefault = tmp5;
  first = tmp6;
  let callback = tmp3[3];
  if (first) {
    first = tmp5;
  }
  if (first) {
    first = null != tmp6;
  }
  const items1 = [tmp3[1]];
  const effect = memo.useEffect(() => {
    if (!first) {
      const products = first(7390).loadProducts();
      const obj = first(7390);
    }
  }, items1);
  importDefault(first[11])(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      first(4054);
      let obj = { tags: null, extra: null };
      obj[0] = { alertPriority: "0" };
      let mapped;
      if (stateFromStores != null) {
        mapped = stateFromStores.map((item, index) => item.identifier);
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
      tmp3 = null != currency;
    }
    if (tmp3) {
      tmp3 = stateFromStores.currency === currency.currency;
    }
    return tmp3;
  }, items4);
  const tmp12 = importDefault(first[20])(arg0);
  closure_6 = tmp12;
  obj = {
    cancelSubscription: memo.useCallback(callback(function*() {
      closure_1_1(38)(memo, "Cannot update subscription");
      closure_1_1(38)(dependencyMap, "Cannot connect to IAP API");
      closure_1_1(38)(null != closure_1_6, "Subscription not found");
      closure_0 = yield first(7390).cancelGenericSubscription(closure_1_6.requestIdentifier, closure_1_6.subscriptionId, closure_1_1);
      const obj2 = first(4466);
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
  first = tmp5;
  dependencyMap = tmp6;
  let stateFromStores = tmp3[3];
  if (first) {
    first = tmp5;
  }
  if (first) {
    first = null != tmp6;
  }
  const items1 = [tmp3[1]];
  const effect = React.useEffect(() => {
    if (!first) {
      const products = first(7390).loadProducts();
      const obj = first(7390);
    }
  }, items1);
  first(7699)(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      first(4054);
      let obj = { tags: null, extra: null };
      obj[0] = { alertPriority: "0" };
      let mapped;
      if (stateFromStores != null) {
        mapped = stateFromStores.map((item, index) => item.identifier);
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
      tmp3 = null != currency;
    }
    if (tmp3) {
      tmp3 = stateFromStores.currency === currency.currency;
    }
    return tmp3;
  }, items4);
  const tmp12 = first(7703)(arg0);
  React = tmp12;
  obj = {
    resubscribeSubscription: React.useCallback(stateFromStores(function*() {
      closure_1_1(38)(memo, "Cannot update subscription");
      closure_1_1(38)(closure_1_1, "Cannot connect to IAP API");
      closure_1_1(38)(null != closure_1_5, "Subscription not found");
      closure_1_1(38)(null != isACOM, "Subscription not found");
      closure_0 = yield closure_1_0(7390).resubscribeGenericSubscription(closure_1_5, isACOM.isACOM);
      const obj2 = closure_1_0(4466);
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
let result = require("obj132").fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.ios.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription };
export { useNativeIAPPayments };
export { useCreateSubscription };
export { useCancelSubscription };
export { useResubscribeSubscription };
export { useGoogleSkuIds };