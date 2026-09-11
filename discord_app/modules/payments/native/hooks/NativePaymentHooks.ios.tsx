// === Module 10894: hooks/NativePaymentHooks ===

// Module 10894 (hooks/NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import initialize from "initialize" /* 504 */;
import BillingUtils from "BillingUtils" /* 4279 */;
import ProductIds from "ProductIds" /* 7313 */;
import BillingActionCreatorsDefault from "BillingActionCreators" /* 7492 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10897 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GenericIAPStore from "GenericIAPStore" /* 7312 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4269 */;
import SubscriptionStore from "SubscriptionStore" /* 4270 */;
import IAPStore from "IAPStore" /* 7310 */;

require = fn;
function useNativeIAPPayments() {
  let items = [GenericIAPStore, IAPStore];
  const tmp2 = nativePaymentsConnected(genericProductsLoaded(504).useStateFromStoresArray(items, () => {
    const items = [GenericIAPStore.genericProductsLoaded(), GenericIAPStore.getStoreFront(), products.getProducts()];
    return items;
  }), 3);
  genericProductsLoaded = tmp2[0];
  const storeFront = tmp2[1];
  dependencyMap = tmp2[2];
  let obj = genericProductsLoaded(504);
  const items1 = [GenericIAPStore];
  const canMakePayments = genericProductsLoaded(504).useStateFromStores(items1, () => GenericIAPStore.canMakePurchase());
  const effect = noop.useEffect(() => {
    const result = storeFront(closure_2[10]).canStorekitMakePayments();
  }, []);
  const items2 = [genericProductsLoaded];
  const effect1 = noop.useEffect(() => {
    if (!first) {
      products = BillingActionCreatorsDefault.loadProducts();
    }
  }, items2);
  nativePaymentsConnected = canMakePayments;
  if (canMakePayments) {
    nativePaymentsConnected = genericProductsLoaded;
  }
  if (nativePaymentsConnected) {
    nativePaymentsConnected = null != storeFront;
  }
  storeFront(10844)(() => {
    let tmp = nativePaymentsConnected;
    if (!nativePaymentsConnected) {
      tmp = c15;
    }
    if (!tmp) {
      tmp = false === canMakePayments;
    }
    if (!tmp) {
      c15 = true;
      let obj = { tags: { alertPriority: "0" }, extra: null };
      let mapped;
      if (closure_2 != null) {
        mapped = closure_2.map((identifier) => identifier.identifier);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj = { loadedProducts: mapped, genericProductsLoaded, storeFront };
      obj.extra = obj;
      const result = obj.captureBillingMessage("useNativeIAPPayments failed to load required context", obj);
    }
  }, 5000);
  return { nativePaymentsConnected, storeFront, canMakePayments };
}
function useCreateSubscription(planId) {
  planId = planId.planId;
  const skuId = planId.skuId;
  const applicationId = planId.applicationId;
  const analyticsLocation = planId.analyticsLocation;
  let callback;
  const tmp = useNativeIAPPayments();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  let obj = planId(applicationId[9]);
  const items = [callback];
  const items1 = [planId];
  const stateFromStores = obj.useStateFromStores(items, () => SubscriptionPlanStore.get(planId), items1);
  const tmp3 = skuId(applicationId[13])(stateFromStores, tmp.storeFront);
  noop = tmp3;
  const tmp4 = skuId(applicationId[14])(() => planId(applicationId[15]).getNewAnalyticsLoadId());
  const load_id = tmp4;
  const items2 = [tmp4, analyticsLocation, applicationId, planId, skuId];
  callback = noop.useCallback(() => {
    const obj = { load_id, payment_type: closure_2_10[constants.SUBSCRIPTION], subscription_plan_gateway_plan_id: ProductIds.ProductIds.GENERIC_SUBSCRIPTION, subscription_type: constants2.GUILD, is_gift: false, location: analyticsLocation, application_id: applicationId, subscription_plan_id: planId, sku_id: skuId };
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  }, items2);
  obj = { createSubscription: null, nativePaymentsConnected };
  const items3 = [tmp3, nativePaymentsConnected, callback];
  obj.createSubscription = noop.useCallback(analyticsLocation(function*() {
    v4(tmp30[18])(nativePaymentsConnected, "cannot connect to IAP API");
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
  }), items3);
  return obj;
}
function useCancelSubscription(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const tmp = useNativeIAPPayments();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  const storeFront = tmp.storeFront;
  let obj = require("initialize");
  const items = [SubscriptionStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => SubscriptionStore.getSubscriptionById(closure_0), items1);
  const items2 = [storeFront, stateFromStores];
  memo = memo.useMemo(() => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = null != storeFront;
    }
    if (tmp3) {
      tmp3 = stateFromStores.currency === storeFront.currency;
    }
    return tmp3;
  }, items2);
  const tmp4 = require("useCancelSubscriptionParams")(arg0);
  closure_6 = tmp4;
  obj = { cancelSubscription: null, nativePaymentsConnected };
  const items3 = [memo, tmp4, nativePaymentsConnected, arg1];
  obj.cancelSubscription = memo.useCallback(storeFront(function*() {
    closure_1(38)(memo, "Cannot update subscription");
    closure_1(38)(nativePaymentsConnected, "Cannot connect to IAP API");
    closure_1(38)(null != closure_6, "Subscription not found");
    yield tmp2(7492).cancelGenericSubscription(closure_6.requestIdentifier, closure_6.subscriptionId, closure_1);
    closure_128_0 = value;
    yield tmp2(4930).fetchSubscriptions();
    return closure_128_0;
  }), items3);
  return obj;
}
function useResubscribeSubscription(arg0) {
  _require = arg0;
  const tmp = useNativeIAPPayments();
  const nativePaymentsConnected = tmp.nativePaymentsConnected;
  const storeFront = tmp.storeFront;
  let obj = require("initialize");
  const items = [SubscriptionStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => SubscriptionStore.getSubscriptionById(closure_0), items1);
  const items2 = [storeFront, stateFromStores];
  const memo = noop.useMemo(() => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = null != storeFront;
    }
    if (tmp3) {
      tmp3 = stateFromStores.currency === storeFront.currency;
    }
    return tmp3;
  }, items2);
  const tmp4 = nativePaymentsConnected(storeFront[21])(arg0);
  noop = tmp4;
  obj = { resubscribeSubscription: null, nativePaymentsConnected };
  const items3 = [memo, nativePaymentsConnected, tmp4, stateFromStores];
  obj.resubscribeSubscription = noop.useCallback(stateFromStores(function*() {
    nativePaymentsConnected(38)(memo, "Cannot update subscription");
    nativePaymentsConnected(38)(nativePaymentsConnected, "Cannot connect to IAP API");
    nativePaymentsConnected(38)(null != closure_5, "Subscription not found");
    nativePaymentsConnected(38)(null != stateFromStores, "Subscription not found");
    yield tmp2(7492).resubscribeGenericSubscription(closure_5, stateFromStores.isACOM);
    closure_128_0 = value;
    yield tmp2(4930).fetchSubscriptions();
    return closure_128_0;
  }), items3);
  return obj;
}
function useGoogleSkuIds() {
  return closure_14;
}
function useMobileStoreFront() {
  const items = [GenericIAPStore];
  return initialize.useStateFromStores(items, () => storeFront.getStoreFront());
}
const Constants = fn(1074);
({ PurchaseTypeToAnalyticsPaymentType: c10, PurchaseTypes: closure_11, SubscriptionTypes: closure_12 } = Constants);
let closure_13 = new LoggerDefault("NativePaymentHooks.ios.tsx");
let closure_14 = { isFetchingGoogleSkus: false, fetchError: null };
let c15 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.ios.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription, useMobileStoreFront };
export { useNativeIAPPayments };
export { useCreateSubscription };
export { useCancelSubscription };
export { useResubscribeSubscription };
export { useGoogleSkuIds };
export { useMobileStoreFront };