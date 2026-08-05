// discord_app/modules/payments/native/hooks/NativePaymentHooks.ios.tsx
import reset from "reset";
import _slicedToArray from "_slicedToArray";
import _deletePaymentSource from "_deletePaymentSource";
import isGenericIapConnected from "isGenericIapConnected";
import addSubscriptionPlan from "addSubscriptionPlan";
import closure_8 from "reset";
import updateProduct from "updateProduct";
import ME from "ME";

let c10;
let closure_12;
let unpackModuleId;
const require = arg1;
function useNativeIAPPayments() {
  const items = [isGenericIapConnected, updateProduct];
  const tmp2 = nativePaymentsConnected(nativePaymentsConnected(storeFront[9]).useStateFromStoresArray(items, () => {
    const items = [isGenericIapConnected.isGenericIapConnected(), isGenericIapConnected.genericProductsLoaded(), isGenericIapConnected.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  nativePaymentsConnected = tmp2[0];
  const importDefault = tmp4;
  storeFront = tmp2[2];
  let reset = tmp2[3];
  if (nativePaymentsConnected) {
    nativePaymentsConnected = tmp4;
  }
  if (nativePaymentsConnected) {
    nativePaymentsConnected = null != storeFront;
  }
  const items1 = [tmp2[1]];
  const effect = React.useEffect(() => {
    if (!first) {
      const products = first(tmp6[10]).loadProducts();
      const obj = first(tmp6[10]);
    }
  }, items1);
  importDefault(storeFront[11])(() => {
    let tmp = memo;
    if (!memo) {
      tmp = outer1_15;
    }
    if (!tmp) {
      outer1_15 = true;
      let obj = first(tmp6[12]);
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
      obj[3] = first;
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
  let importDefault = skuId;
  const applicationId = planId.applicationId;
  let dependencyMap = applicationId;
  const analyticsLocation = planId.analyticsLocation;
  let callback = analyticsLocation;
  first = undefined;
  let React;
  let c6;
  callback = undefined;
  first = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  callback = undefined;
  first = undefined;
  let obj = first(589);
  const items = [c6, updateProduct];
  const tmp3 = first(obj.useStateFromStoresArray(items, () => {
    const items = [isGenericIapConnected.isGenericIapConnected(), isGenericIapConnected.genericProductsLoaded(), isGenericIapConnected.getStoreFront(), products.getProducts()];
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
      const products = first(tmp6[10]).loadProducts();
      const obj = first(tmp6[10]);
    }
  }, items1);
  require("../../../../hooks/useTimeout.tsx")(() => {
    let tmp = memo;
    if (!memo) {
      tmp = outer1_15;
    }
    if (!tmp) {
      outer1_15 = true;
      let obj = first(tmp6[12]);
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
      obj[3] = first;
      obj[1] = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
      arr = stateFromStores;
    }
  }, 5000);
  const items2 = [callback];
  const items3 = [planId];
  const stateFromStores = first(589).useStateFromStores(items2, () => callback.get(first), items3);
  const tmp11 = require("../../../billing/native/subscription/useCreateSubscriptionParams.tsx")(stateFromStores, tmp3[2]);
  React = tmp11;
  const tmp12 = require("../../../../hooks/useInitialValue.tsx")(() => first(_undefined[15]).getNewAnalyticsLoadId());
  c6 = tmp12;
  const items4 = [tmp12, analyticsLocation, applicationId, planId, skuId];
  callback = React.useCallback(() => {
    let obj = first(_undefined[16]);
    obj = { load_id: c6, payment_type: outer1_10[outer1_11.SUBSCRIPTION], subscription_plan_gateway_plan_id: first(_undefined[17]).ProductIds.GENERIC_SUBSCRIPTION, subscription_type: outer1_12.GUILD, is_gift: false, location: reset, application_id: _undefined, subscription_plan_id: first, sku_id: c1 };
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  }, items4);
  obj = {
    createSubscription: React.useCallback(callback(function*() {
      let closure_0 = tmp3;
      v0(outer1_2[18])(c4, "cannot connect to IAP API");
      v0(outer1_2[18])(null != outer1_5, "plan not found");
      let c3 = 1;
      yield v0(outer1_2[10]).restoreAndApplyPurchases();
      if (1 === tmp7) {
        c3 = 0;
        outer1_13.error("error consuming pending purchases but we'll try to let user purchase");
        outer1_7();
        const genericSubscription = outer1_0(outer1_2[10]).createGenericSubscription(outer1_5);
        v0 = 2;
        c4 = 1;
        const obj6 = outer1_0(outer1_2[10]);
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
          obj2 = outer1_0(outer1_2[19]);
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
  let importDefault = arg1;
  let obj = first(first[9]);
  const items = [isGenericIapConnected, updateProduct];
  let tmp3 = stateFromStores(obj.useStateFromStoresArray(items, () => {
    const items = [isGenericIapConnected.isGenericIapConnected(), isGenericIapConnected.genericProductsLoaded(), isGenericIapConnected.getStoreFront(), products.getProducts()];
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
      const products = first(tmp6[10]).loadProducts();
      const obj = first(tmp6[10]);
    }
  }, items1);
  importDefault(first[11])(() => {
    let tmp = memo;
    if (!memo) {
      tmp = outer1_15;
    }
    if (!tmp) {
      outer1_15 = true;
      let obj = first(tmp6[12]);
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
      obj[3] = first;
      obj[1] = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
      arr = stateFromStores;
    }
  }, 5000);
  callback = tmp6;
  const items2 = [closure_8];
  const items3 = [arg0];
  stateFromStores = first(first[9]).useStateFromStores(items2, () => outer1_8.getSubscriptionById(first), items3);
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
  isGenericIapConnected = tmp12;
  obj = {
    cancelSubscription: memo.useCallback(callback(function*() {
      let closure_0 = tmp2;
      outer1_1(38)(outer1_5, "Cannot update subscription");
      outer1_1(38)(dependencyMap, "Cannot connect to IAP API");
      outer1_1(38)(null != outer1_6, "Subscription not found");
      closure_0 = yield outer1_0(6792).cancelGenericSubscription(outer1_6.requestIdentifier, outer1_6.subscriptionId, outer1_1);
      const obj2 = outer1_0(4604);
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
  let items = [isGenericIapConnected, updateProduct];
  let tmp3 = memo(obj.useStateFromStoresArray(items, () => {
    const items = [isGenericIapConnected.isGenericIapConnected(), isGenericIapConnected.genericProductsLoaded(), isGenericIapConnected.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  first = tmp3[0];
  first = tmp5;
  let dependencyMap = tmp6;
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
      const products = first(tmp6[10]).loadProducts();
      const obj = first(tmp6[10]);
    }
  }, items1);
  first(7336)(() => {
    let tmp = memo;
    if (!memo) {
      tmp = outer1_15;
    }
    if (!tmp) {
      outer1_15 = true;
      let obj = first(tmp6[12]);
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
      obj[3] = first;
      obj[1] = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
      arr = stateFromStores;
    }
  }, 5000);
  dependencyMap = tmp6;
  const items2 = [closure_8];
  const items3 = [arg0];
  stateFromStores = first(589).useStateFromStores(items2, () => outer1_8.getSubscriptionById(first), items3);
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
  const tmp12 = first(7340)(arg0);
  React = tmp12;
  obj = {
    resubscribeSubscription: React.useCallback(stateFromStores(function*() {
      let closure_0 = tmp2;
      outer1_1(38)(outer1_4, "Cannot update subscription");
      outer1_1(38)(outer1_1, "Cannot connect to IAP API");
      outer1_1(38)(null != outer1_5, "Subscription not found");
      outer1_1(38)(null != isACOM, "Subscription not found");
      closure_0 = yield outer1_0(6792).resubscribeGenericSubscription(outer1_5, isACOM.isACOM);
      const obj2 = outer1_0(4604);
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
let closure_14 = { isFetchingGoogleSkus: false, fetchError: null };
let c15 = false;
let tmp3 = new require("isGenericIapConnected")("NativePaymentHooks.ios.tsx");
let result = require("noop").fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.ios.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription };
export { useNativeIAPPayments };
export { useCreateSubscription };
export { useCancelSubscription };
export { useResubscribeSubscription };
export { useGoogleSkuIds };