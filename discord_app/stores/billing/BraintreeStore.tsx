// === Module 4545: BraintreeStore ===

// Module 4545 (BraintreeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let state;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ Endpoints: closure_4, PaymentGateways: hasOwnProperty, PaymentSourceTypes: metroRequire } = Constants);
let client = null;
let c8 = null;
let c9 = null;
if (PlatformUtils.isDesktop()) {
  let _window = window;
  let obj = {
    getReturnUrlPrefix() {
        if (null == state) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("popupBridgeState is unset");
          throw error;
        } else {
          const obj = HTTPUtils;
          const aPIBaseURL = obj.getAPIBaseURL();
          return aPIBaseURL + React3.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(hasOwnProperty.BRAINTREE, state);
        }
      },
    open(arg0) {
        let closure_1_3 = arg0;
        window.open(arg0);
        braintreeStore.emitChange();
      }
  };
  window.popupBridge = obj;
}
const Store = get_initializedDefault.Store;
class BraintreeStore extends Store {
  getClient() {
    return client;
  }
  getPayPalClient() {
    return c8;
  }
  getVenmoClient() {
    return c9;
  }
  getLastURL() {
    return _false;
  }
}
const prototype = BraintreeStore.prototype;
BraintreeStore.displayName = "BraintreeStore";
const obj2 = {
  BRAINTREE_CREATE_CLIENT_SUCCESS: function handleBraintreeCreateClientSuccess(client) {
    client = client.client;
  },
  BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function handleBraintreeCreatePayPalClientSuccess(paypalClient) {
    paypalClient = paypalClient.paypalClient;
  },
  BILLING_POPUP_BRIDGE_CALLBACK: function handleBillingPopupBridgeCallback(paymentSourceType) {
    if (paymentSourceType.paymentSourceType === metroRequire.PAYPAL) {
      if (tmp === state) {
        const _window = window;
        if (typeof onComplete === "function") {
          const obj = { path: tmp2, queryItems: tmp3 };
          onComplete(null, obj);
        }
      }
    }
  },
  BILLING_POPUP_BRIDGE_STATE_UPDATE: function handleBillingPopupBridgeStateUpdate(paymentSourceType) {
    if (paymentSourceType.paymentSourceType === metroRequire.PAYPAL) {
      state = paymentSourceType.state;
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
const braintreeStore = new BraintreeStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/billing/BraintreeStore.tsx");

export default braintreeStore;