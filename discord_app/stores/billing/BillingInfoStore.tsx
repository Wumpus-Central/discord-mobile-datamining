// === Module 4041: handlePaymentSourceCreateEnd ===

// Module 4041 (handlePaymentSourceCreateEnd)
import obj132 from "obj132" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;

function handlePaymentSourceCreateEnd() {
  c6 = false;
}
function handlePaymentSourcesFetchEnd() {
  c0 = undefined;
}
function handleSubscriptionFetchEnd() {
  c9 = false;
}
function handleSubscriptionUpdateStart() {
  c10 = true;
}
function handleSubscriptionUpdateEnd() {
  c10 = false;
}
const FallbackCurrencyCountry = ME.FallbackCurrencyCountry;
let c6 = false;
let c7 = false;
let c8 = false;
let c9 = false;
let c10 = false;
let c11 = null;
let c12 = null;
let c13 = false;
let c14 = false;
const Store = initializeDefault.Store;
class BillingInfoStore extends Store {
}
const prototype = BillingInfoStore.prototype;
Object.defineProperty(prototype, "isBusy", {
  get: function isBusy() {
    let tmp = c6;
    if (!c6) {
      tmp = c7;
    }
    if (!tmp) {
      tmp = c10;
    }
    if (!tmp) {
      tmp = c8;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "isUpdatingPaymentSource", {
  get: function isUpdatingPaymentSource() {
    return c7;
  },
  set: undefined
});
Object.defineProperty(prototype, "isRemovingPaymentSource", {
  get: function isRemovingPaymentSource() {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "isSyncing", {
  get: function isSyncing() {
    return this.isPaymentSourceFetching || this.isSubscriptionFetching;
  },
  set: undefined
});
Object.defineProperty(prototype, "isSubscriptionFetching", {
  get: function isSubscriptionFetching() {
    return c9;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPaymentSourceFetching", {
  get: function isPaymentSourceFetching() {
    return null != closure_0;
  },
  set: undefined
});
Object.defineProperty(prototype, "editSourceError", {
  get: function editSourceError() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "removeSourceError", {
  get: function removeSourceError() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "ipCountryCodeLoaded", {
  get: function ipCountryCodeLoaded() {
    return undefined !== closure_1;
  },
  set: undefined
});
Object.defineProperty(prototype, "ipCountryCode", {
  get: function ipCountryCode() {
    return closure_1;
  },
  set: undefined
});
Object.defineProperty(prototype, "ipCountryCodeRequest", {
  get: function ipCountryCodeRequest() {
    return closure_2;
  },
  set: undefined
});
Object.defineProperty(prototype, "ipLocationLoaded", {
  get: function ipLocationLoaded() {
    return undefined !== closure_3;
  },
  set: undefined
});
Object.defineProperty(prototype, "ipLocation", {
  get: function ipLocation() {
    return closure_3;
  },
  set: undefined
});
Object.defineProperty(prototype, "ipLocationRequest", {
  get: function ipLocationRequest() {
    return closure_4;
  },
  set: undefined
});
Object.defineProperty(prototype, "ipLocationHasError", {
  get: function ipLocationHasError() {
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "ipCountryCodeWithFallback", {
  get: function ipCountryCodeWithFallback() {
    let tmp = closure_1;
    if (closure_1 == null) {
      tmp = FallbackCurrencyCountry;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "ipCountryCodeHasError", {
  get: function ipCountryCodeHasError() {
    return c13;
  },
  set: undefined
});
Object.defineProperty(prototype, "paymentSourcesFetchRequest", {
  get: function paymentSourcesFetchRequest() {
    return closure_0;
  },
  set: undefined
});
BillingInfoStore.displayName = "BillingInfoStore";
const billingInfoStore = new BillingInfoStore(dispatcherDefault, {
  BILLING_PAYMENT_SOURCE_CREATE_START: function handlePaymentSourceCreateStart() {
    c6 = true;
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceCreateEnd,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: handlePaymentSourceCreateEnd,
  STRIPE_TOKEN_FAILURE: handlePaymentSourceCreateEnd,
  BILLING_PAYMENT_SOURCE_REMOVE_START: function handlePaymentSourceRemoveStart() {
    c8 = true;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function handlePaymentSourceRemoveSuccess() {
    c8 = false;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function handlePaymentSourceRemoveFail(error) {
    c8 = false;
    error = error.error;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function handleClearRemoveError() {
    c12 = null;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_START: function handlePaymentSourceUpdateStart() {
    c7 = true;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function handlePaymentSourceUpdateSuccess() {
    c7 = false;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function handlePaymentSourceUpdateFail(error) {
    c7 = false;
    error = error.error;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function handleClearUpdateError() {
    c11 = null;
  },
  BILLING_PAYMENT_SOURCES_FETCH_START: function handlePaymentSourcesFetchStart(request) {
    request = request.request;
  },
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: handlePaymentSourcesFetchEnd,
  BILLING_PAYMENT_SOURCES_FETCH_FAIL: handlePaymentSourcesFetchEnd,
  BILLING_SUBSCRIPTION_FETCH_START: function handleSubscriptionFetchStart() {
    c9 = true;
  },
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: handleSubscriptionFetchEnd,
  BILLING_SUBSCRIPTION_FETCH_FAIL: handleSubscriptionFetchEnd,
  BILLING_SUBSCRIPTION_UPDATE_START: handleSubscriptionUpdateStart,
  BILLING_SUBSCRIPTION_CANCEL_START: handleSubscriptionUpdateStart,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: handleSubscriptionUpdateEnd,
  BILLING_SUBSCRIPTION_UPDATE_FAIL: handleSubscriptionUpdateEnd,
  BILLING_SUBSCRIPTION_CANCEL_FAIL: handleSubscriptionUpdateEnd,
  BILLING_SUBSCRIPTION_CANCEL_SUCCESS: handleSubscriptionUpdateEnd,
  BILLING_IP_COUNTRY_CODE_FETCH_START: function handleIpCountryCodeFetchStart(request) {
    request = request.request;
  },
  BILLING_SET_IP_COUNTRY_CODE: function handleSetIpCountryCode(countryCode) {
    countryCode = countryCode.countryCode;
  },
  BILLING_IP_COUNTRY_CODE_FAILURE: function handleIpCountryCodeFailure() {
    c1 = null;
    c13 = true;
  },
  BILLING_IP_LOCATION_FETCH_START: function handleIpLocationFetchStart(request) {
    request = request.request;
  },
  BILLING_SET_IP_LOCATION: function handleSetIpLocation(location) {
    location = location.location;
  },
  BILLING_IP_LOCATION_FAILURE: function handleIpLocationFailure() {
    c3 = null;
    c14 = true;
  },
  LOGOUT: function handleLogout() {
    c0 = undefined;
    c2 = undefined;
    c1 = undefined;
    c13 = false;
    c3 = undefined;
    c14 = false;
    c4 = undefined;
    c12 = null;
    c11 = null;
  },
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    countryCode = countryCode.countryCode;
  }
});
const result = obj132.fileFinishedImporting("stores/billing/BillingInfoStore.tsx");

export default billingInfoStore;