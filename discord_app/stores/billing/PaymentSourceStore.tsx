// discord_app/stores/billing/PaymentSourceStore.tsx
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "createFromServer" /* 4043 */;

function handlePaymentSourceUpdate(paymentSource) {
  paymentSource = paymentSource.paymentSource;
  const obj = {};
  const merged = Object.assign(obj);
  obj[paymentSource.id] = paymentSource;
  let isDefault = paymentSource.isDefault;
  if (!isDefault) {
    const _Object = Object;
    isDefault = 1 === Object.keys(obj).length;
  }
  if (isDefault) {
    const id = paymentSource.id;
  }
}
let closure_1 = {};
let c2 = null;
let c3 = false;
const Store = initializeDefault.Store;
class PaymentSourceStore extends Store {
}
const prototype = PaymentSourceStore.prototype;
Object.defineProperty(prototype, "paymentSources", {
  get: function paymentSources() {
    return closure_1;
  },
  set: undefined
});
Object.defineProperty(prototype, "paymentSourceIds", {
  get: function paymentSourceIds() {
    return Object.keys(closure_1);
  },
  set: undefined
});
Object.defineProperty(prototype, "defaultPaymentSourceId", {
  get: function defaultPaymentSourceId() {
    return c2;
  },
  set: undefined
});
Object.defineProperty(prototype, "defaultPaymentSource", {
  get: function defaultPaymentSource() {
    let tmp = null;
    if (null != c2) {
      tmp = dependencyMap[c2];
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchedPaymentSources", {
  get: function hasFetchedPaymentSources() {
    return c3;
  },
  set: undefined
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
const paymentSourceStore = new PaymentSourceStore(dispatcherDefault, {
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceUpdate,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: handlePaymentSourceUpdate,
  BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: handlePaymentSourceUpdate,
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: function handlePaymentSourceFetch(paymentSources) {
    paymentSources = paymentSources.paymentSources;
    closure_1 = {};
    let id = null;
    for (const item10009 of paymentSources) {
      let tmp2 = closure_1;
      let tmp3 = closure_0;
      let tmp = item10009;
      closure_1[item10009.id] = closure_0.createFromServer(item10009);
      if (item10009.default) {
        let tmp4 = item10009;
        id = tmp.id;
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
    const obj = {};
    const merged = Object.assign(obj);
    delete tmp[tmp2];
    if (first === id.id) {
      const _Object = Object;
      const keys = Object.keys(obj);
      first = null;
      if (0 !== keys.length) {
        first = keys[0];
      }
    }
  },
  LOGOUT: function handleLogout() {
    closure_1 = {};
    c2 = null;
    c3 = false;
  }
});
const result = require("set").fileFinishedImporting("stores/billing/PaymentSourceStore.tsx");

export default paymentSourceStore;