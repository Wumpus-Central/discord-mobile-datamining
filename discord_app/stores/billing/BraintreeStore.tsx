// === Module 4060: getClient ===

// Module 4060 (getClient)
import sendRequest from "sendRequest" /* 530 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ME from "ME" /* 676 */;
import set from "set" /* 500 */;

({ Endpoints: c4, PaymentGateways: c5, PaymentSourceTypes: closure_6 } = ME);
let c7 = null;
let c8 = null;
let c9 = null;
if (set.isDesktop()) {
  let _window = window;
  let obj = { getReturnUrlPrefix: null, open: null };
  obj[0] = function getReturnUrlPrefix() {
    if (null == closure_2) {
      const _Error = Error;
      error = new Error("popupBridgeState is unset");
      throw error;
    } else {
      const aPIBaseURL = sendRequest.getAPIBaseURL();
      return aPIBaseURL + closure_4.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(constants.BRAINTREE, closure_2);
    }
  };
  obj[1] = function open(arg0) {
    closure_3 = arg0;
    window.open(arg0);
    braintreeStore.emitChange();
  };
  window.popupBridge = obj;
}
const Store = initializeDefault.Store;
class BraintreeStore extends Store {
}
const prototype = BraintreeStore.prototype;
prototype["getClient"] = function getClient() {
  return c7;
};
prototype["getPayPalClient"] = function getPayPalClient() {
  return c8;
};
prototype["getVenmoClient"] = function getVenmoClient() {
  return c9;
};
prototype["getLastURL"] = function getLastURL() {
  return closure_3;
};
BraintreeStore.displayName = "BraintreeStore";
obj = {
  BRAINTREE_CREATE_CLIENT_SUCCESS: function handleBraintreeCreateClientSuccess(client) {
    client = client.client;
  },
  BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function handleBraintreeCreatePayPalClientSuccess(paypalClient) {
    paypalClient = paypalClient.paypalClient;
  },
  BILLING_POPUP_BRIDGE_CALLBACK: function handleBillingPopupBridgeCallback(paymentSourceType) {
    if (paymentSourceType.paymentSourceType === constants2.PAYPAL) {
      if (tmp === closure_2) {
        const _window = window;
        if (typeof onComplete === "function") {
          const obj = { path: null, queryItems: null };
          obj[0] = tmp2;
          obj[1] = tmp3;
          onComplete(null, obj);
        }
      }
    }
  },
  BILLING_POPUP_BRIDGE_STATE_UPDATE: function handleBillingPopupBridgeStateUpdate(paymentSourceType) {
    if (paymentSourceType.paymentSourceType === constants2.PAYPAL) {
      const state = paymentSourceType.state;
    }
  },
  BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function handleBraintreeTeardownPayPalClient() {
    c8 = null;
  },
  BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function handleBraintreeCreateVenmoClientSuccess(venmoClient) {
    venmoClient = venmoClient.venmoClient;
  },
  BRAINTREE_TEARDOWN_VENMO_CLIENT: function handleBraintreeTeardownVenmoClient() {
    c9 = null;
  }
};
const braintreeStore = new BraintreeStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("stores/billing/BraintreeStore.tsx");

export default braintreeStore;