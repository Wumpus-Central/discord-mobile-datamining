// discord_app/stores/billing/PaymentSourceStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import PaymentSourceRecord from "../../records/PaymentSourceRecord.tsx";

function handlePaymentSourceUpdate(paymentSource) {
  paymentSource = paymentSource.paymentSource;
  const obj = {};
  const merged = Object.assign(closure_1);
  obj[paymentSource.id] = paymentSource;
  closure_1 = obj;
  let isDefault = paymentSource.isDefault;
  if (!isDefault) {
    const _Object = Object;
    isDefault = 1 === Object.keys(closure_1).length;
  }
  if (isDefault) {
    const id = paymentSource.id;
  }
}
const dependencyMap = {};
let c2 = null;
let c3 = false;
const Store = initializeDefault.Store;
class PaymentSourceStore extends Store {}
const prototype = PaymentSourceStore.prototype;
Object.defineProperty(prototype, "paymentSources", {
  get: function paymentSources() {
    return closure_1;
  },
  set: undefined,
});
Object.defineProperty(prototype, "paymentSourceIds", {
  get: function paymentSourceIds() {
    return Object.keys(closure_1);
  },
  set: undefined,
});
Object.defineProperty(prototype, "defaultPaymentSourceId", {
  get: function defaultPaymentSourceId() {
    return c2;
  },
  set: undefined,
});
Object.defineProperty(prototype, "defaultPaymentSource", {
  get: function defaultPaymentSource() {
    let tmp = null;
    if (null != c2) {
      tmp = dependencyMap[c2];
    }
    return tmp;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasFetchedPaymentSources", {
  get: function hasFetchedPaymentSources() {
    return c3;
  },
  set: undefined,
});
prototype["getDefaultBillingCountryCode"] = function getDefaultBillingCountryCode() {
  const defaultPaymentSource = this.defaultPaymentSource;
  let paymentMethodCountry = null;
  if (null != defaultPaymentSource) {
    paymentMethodCountry = defaultPaymentSource.paymentMethodCountry;
  }
  return paymentMethodCountry;
};
prototype["getPaymentSource"] = function getPaymentSource(paymentSourceId) {
  return dependencyMap[paymentSourceId];
};
PaymentSourceStore.displayName = "PaymentSourceStore";
const paymentSourceStore = new PaymentSourceStore(DispatcherDefault, {
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceUpdate,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: handlePaymentSourceUpdate,
  BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: handlePaymentSourceUpdate,
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: function handlePaymentSourceFetch(paymentSources) {
    paymentSources = paymentSources.paymentSources;
    closure_1 = {};
    let id = null;
    for (const item10009 of paymentSources) {
      closure_1[item10009.id] = PaymentSourceRecord.createFromServer(item10009);
      if (item10009.default) {
        id = item10009.id;
      }
      continue;
    }
    let tmp5 = null == id;
    if (tmp5) {
      tmp5 = paymentSources.length > 0;
    }
    if (tmp5) {
      id = paymentSources[0].id;
    }
    c3 = true;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function handlePaymentSourceRemove(id) {
    const merged = Object.assign(closure_1);
    closure_1 = {};
    delete tmp[tmp2];
    if (c2 === id.id) {
      const _Object = Object;
      const keys = Object.keys(closure_1);
      let first = null;
      if (0 !== keys.length) {
        first = keys[0];
      }
      c2 = first;
    }
  },
  LOGOUT: function handleLogout() {
    closure_1 = {};
    c2 = null;
    c3 = false;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/billing/PaymentSourceStore.tsx");

export default paymentSourceStore;
