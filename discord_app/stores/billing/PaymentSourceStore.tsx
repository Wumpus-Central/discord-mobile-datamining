// === Module 4531: PaymentSourceStore ===

// Module 4531 (PaymentSourceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PaymentSourceRecord from "PaymentSourceRecord" /* 4532 */;
import size from "module_2" /* 2 */;

let closure_1;

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
let c2 = null;
let c3 = false;
let c4 = false;
const Store = get_initializedDefault.Store;
class PaymentSourceStore extends Store {
  getDefaultBillingCountryCode() {
    const defaultPaymentSource = this.defaultPaymentSource;
    let paymentMethodCountry = null;
    if (null != defaultPaymentSource) {
      paymentMethodCountry = defaultPaymentSource.paymentMethodCountry;
    }
    return paymentMethodCountry;
  }
  getPaymentSource(paymentSourceId) {
    return closure_1[paymentSourceId];
  }
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
      tmp = closure_1[c2];
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
Object.defineProperty(prototype, "paymentSourceFetchError", {
  get: function paymentSourceFetchError() {
    return c4;
  },
  set: undefined
});
PaymentSourceStore.displayName = "PaymentSourceStore";
let obj = {
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
    const tmp5 = null == id && paymentSources.length > 0;
    if (tmp5) {
      id = paymentSources[0].id;
    }
    c3 = true;
    c4 = false;
  },
  BILLING_PAYMENT_SOURCES_FETCH_FAIL: function handlePaymentSourceFetchFail() {
    c4 = true;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function handlePaymentSourceRemove(id) {
    id = id.id;
    const obj = {};
    const merged = Object.assign(closure_1);
    closure_1 = obj;
    delete obj[id];
    if (c2 === id) {
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
    c4 = false;
  }
};
const paymentSourceStore = new PaymentSourceStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/billing/PaymentSourceStore.tsx");

export default paymentSourceStore;