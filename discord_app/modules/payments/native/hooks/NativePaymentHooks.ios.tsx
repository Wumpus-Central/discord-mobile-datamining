// === Module 10805: hooks/NativePaymentHooks ===

// Module 10805 (hooks/NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import BillingUtils from "BillingUtils" /* 4233 */;
import ProductIds from "ProductIds" /* 7240 */;
import BillingActionCreatorsDefault from "BillingActionCreators" /* 7419 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10808 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GenericIAPStore from "GenericIAPStore" /* 7239 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import IAPStore from "IAPStore" /* 7237 */;

require = fn;
function useNativeIAPPayments() {
  const items = [GenericIAPStore, IAPStore];
  const tmp2 = nativePaymentsConnected(nativePaymentsConnected(storeFront[9]).useStateFromStoresArray(items, () => {
    const items = [GenericIAPStore.isGenericIapConnected(), GenericIAPStore.genericProductsLoaded(), GenericIAPStore.getStoreFront(), products.getProducts()];
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
  const effect = noop.useEffect(() => {
    if (!first) {
      products = BillingActionCreatorsDefault.loadProducts();
    }
  }, items1);
  require("useTimeout")(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      let obj = { tags: { alertPriority: "0" }, extra: null };
      let mapped;
      if (stateFromStores != null) {
        mapped = stateFromStores.map((identifier) => identifier.identifier);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj = { loadedProducts: mapped, connected, genericProductsLoaded, storeFront };
      obj.extra = obj;
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
  let nativePaymentsConnected;
  noop = undefined;
  let load_id;
  let callback;
  closure_129_4 = undefined;
  let obj = planId(applicationId[9]);
  const items = [load_id, IAPStore];
  const tmp3 = nativePaymentsConnected(obj.useStateFromStoresArray(items, () => {
    const items = [GenericIAPStore.isGenericIapConnected(), GenericIAPStore.genericProductsLoaded(), GenericIAPStore.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  nativePaymentsConnected = tmp3[0];
  closure_129_0 = nativePaymentsConnected;
  closure_129_1 = tmp5;
  closure_129_2 = tmp6;
  closure_129_3 = tmp3[3];
  if (nativePaymentsConnected) {
    nativePaymentsConnected = tmp5;
  }
  if (nativePaymentsConnected) {
    nativePaymentsConnected = null != tmp6;
  }
  closure_129_4 = nativePaymentsConnected;
  const items1 = [tmp3[1]];
  const effect = noop.useEffect(() => {
    if (!first) {
      products = BillingActionCreatorsDefault.loadProducts();
    }
  }, items1);
  skuId(applicationId[11])(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      let obj = { tags: { alertPriority: "0" }, extra: null };
      let mapped;
      if (stateFromStores != null) {
        mapped = stateFromStores.map((identifier) => identifier.identifier);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj = { loadedProducts: mapped, connected, genericProductsLoaded, storeFront };
      obj.extra = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
    }
  }, 5000);
  const items2 = [callback];
  const items3 = [planId];
  const stateFromStores = planId(applicationId[9]).useStateFromStores(items2, () => SubscriptionPlanStore.get(planId), items3);
  const tmp11 = skuId(applicationId[13])(stateFromStores, tmp3[2]);
  noop = tmp11;
  const tmp12 = skuId(applicationId[14])(() => planId(applicationId[15]).getNewAnalyticsLoadId());
  load_id = tmp12;
  const items4 = [tmp12, analyticsLocation, applicationId, planId, skuId];
  callback = noop.useCallback(() => {
    const obj = { load_id, payment_type: closure_2_10[constants.SUBSCRIPTION], subscription_plan_gateway_plan_id: ProductIds.ProductIds.GENERIC_SUBSCRIPTION, subscription_type: constants2.GUILD, is_gift: false, location: analyticsLocation, application_id: applicationId, subscription_plan_id: planId, sku_id: skuId };
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  }, items4);
  obj = { createSubscription: null, nativePaymentsConnected };
  const items5 = [tmp11, nativePaymentsConnected, callback];
  obj.createSubscription = noop.useCallback(analyticsLocation(function*() {
    v4(tmp30[18])(first, "cannot connect to IAP API");
    v4(tmp30[18])(null != closure_5, "plan not found");
    yield v4(tmp30[10]).restoreAndApplyPurchases();
    if (1 === tmp7) {
      c3 = 0;
      logger.error("error consuming pending purchases but we'll try to let user purchase");
      closure_128_7();
      const genericSubscription = tmp3(tmp30[10]).createGenericSubscription(closure_128_5);
      v4 = 2;
      c4 = 1;
      tmp3(tmp30[10]);
    } else if (2 === tmp7) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        let obj2 = { value, done: true };
        return obj2;
      } else {
        obj2 = tmp3(tmp30[19]);
        v4 = 4;
        c4 = 1;
        return { value: obj2.fetchSubscriptions(), done: false };
      }
    } else if (3 === tmp7) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      c4 = 3;
      return { value: "HermesInternal", done: null };
    }
    return value;
  }), items5);
  return obj;
}
function useCancelSubscription(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  let obj = require("initialize");
  const items = [closure_6, IAPStore];
  let tmp3 = stateFromStores(obj.useStateFromStoresArray(items, () => {
    const items = [GenericIAPStore.isGenericIapConnected(), GenericIAPStore.genericProductsLoaded(), GenericIAPStore.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  nativePaymentsConnected = tmp3[0];
  closure_129_0 = nativePaymentsConnected;
  closure_129_1 = tmp5;
  closure_129_2 = tmp6;
  closure_129_3 = tmp3[3];
  if (nativePaymentsConnected) {
    nativePaymentsConnected = tmp5;
  }
  if (nativePaymentsConnected) {
    nativePaymentsConnected = null != tmp6;
  }
  closure_129_4 = nativePaymentsConnected;
  const items1 = [tmp3[1]];
  const effect = memo.useEffect(() => {
    if (!first) {
      products = BillingActionCreatorsDefault.loadProducts();
    }
  }, items1);
  require("useTimeout")(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      let obj = { tags: { alertPriority: "0" }, extra: null };
      let mapped;
      if (stateFromStores != null) {
        mapped = stateFromStores.map((identifier) => identifier.identifier);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj = { loadedProducts: mapped, connected, genericProductsLoaded, storeFront };
      obj.extra = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
    }
  }, 5000);
  asyncGeneratorStep = tmp6;
  const items2 = [SubscriptionStore];
  const items3 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items2, () => SubscriptionStore.getSubscriptionById(closure_0), items3);
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
  const tmp12 = require("useCancelSubscriptionParams")(arg0);
  closure_6 = tmp12;
  obj = { cancelSubscription: null, nativePaymentsConnected };
  const items5 = [memo, tmp12, nativePaymentsConnected, arg1];
  obj.cancelSubscription = memo.useCallback(asyncGeneratorStep(async () => {
    closure_1(38)(memo, "Cannot update subscription");
    closure_1(38)(first, "Cannot connect to IAP API");
    closure_1(38)(null != closure_6, "Subscription not found");
    await tmp2(7419).cancelGenericSubscription(closure_6.requestIdentifier, closure_6.subscriptionId, closure_1);
    closure_128_0 = value;
    await tmp2(4884).fetchSubscriptions();
    return closure_128_0;
  }), items5);
  return obj;
}
function useResubscribeSubscription(connected) {
  _require = connected;
  let obj = require("initialize");
  let items = [GenericIAPStore, IAPStore];
  let tmp3 = memo(obj.useStateFromStoresArray(items, () => {
    const items = [GenericIAPStore.isGenericIapConnected(), GenericIAPStore.genericProductsLoaded(), GenericIAPStore.getStoreFront(), products.getProducts()];
    return items;
  }), 4);
  let nativePaymentsConnected = tmp3[0];
  closure_129_0 = nativePaymentsConnected;
  closure_129_1 = tmp5;
  closure_129_2 = tmp6;
  closure_129_3 = tmp3[3];
  if (nativePaymentsConnected) {
    nativePaymentsConnected = tmp5;
  }
  if (nativePaymentsConnected) {
    nativePaymentsConnected = null != tmp6;
  }
  closure_129_4 = nativePaymentsConnected;
  const items1 = [tmp3[1]];
  const effect = noop.useEffect(() => {
    if (!first) {
      products = BillingActionCreatorsDefault.loadProducts();
    }
  }, items1);
  nativePaymentsConnected(10755)(() => {
    let tmp = memo;
    if (!memo) {
      tmp = c15;
    }
    if (!tmp) {
      c15 = true;
      let obj = { tags: { alertPriority: "0" }, extra: null };
      let mapped;
      if (stateFromStores != null) {
        mapped = stateFromStores.map((identifier) => identifier.identifier);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj = { loadedProducts: mapped, connected, genericProductsLoaded, storeFront };
      obj.extra = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
    }
  }, 5000);
  dependencyMap = tmp6;
  const items2 = [SubscriptionStore];
  const items3 = [connected];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => SubscriptionStore.getSubscriptionById(closure_0), items3);
  const items4 = [tmp3[2], stateFromStores];
  memo = noop.useMemo(() => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = null != storeFront;
    }
    if (tmp3) {
      tmp3 = stateFromStores.currency === storeFront.currency;
    }
    return tmp3;
  }, items4);
  const tmp12 = nativePaymentsConnected(10811)(connected);
  noop = tmp12;
  obj = { resubscribeSubscription: null, nativePaymentsConnected };
  const items5 = [memo, nativePaymentsConnected, tmp12, stateFromStores];
  obj.resubscribeSubscription = noop.useCallback(stateFromStores(function*() {
    closure_1(38)(memo, "Cannot update subscription");
    closure_1(38)(first, "Cannot connect to IAP API");
    closure_1(38)(null != closure_5, "Subscription not found");
    closure_1(38)(null != stateFromStores, "Subscription not found");
    yield tmp2(7419).resubscribeGenericSubscription(closure_5, stateFromStores.isACOM);
    closure_128_0 = value;
    yield tmp2(4884).fetchSubscriptions();
    return closure_128_0;
  }), items5);
  return obj;
}
function useGoogleSkuIds() {
  return closure_14;
}
const Constants = fn(1074);
({ PurchaseTypeToAnalyticsPaymentType: c10, PurchaseTypes: closure_11, SubscriptionTypes: closure_12 } = Constants);
let closure_13 = new LoggerDefault("NativePaymentHooks.ios.tsx");
let closure_14 = { isFetchingGoogleSkus: false, fetchError: null };
let c15 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.ios.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription };
export { useNativeIAPPayments };
export { useCreateSubscription };
export { useCancelSubscription };
export { useResubscribeSubscription };
export { useGoogleSkuIds };