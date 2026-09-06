// discord_app/stores/billing/BraintreeStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Constants from "../../Constants.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
        const error = new Error("popupBridgeState is unset");
        throw error;
      } else {
        const aPIBaseURL = HTTPUtils.getAPIBaseURL();
        return aPIBaseURL + React4.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(constants.BRAINTREE, state);
      }
    },
    open(arg0) {
      global = arg0;
      window.open(arg0);
      braintreeStore.emitChange();
    },
  };
  window.popupBridge = obj;
}
const Store = initializeDefault.Store;
class BraintreeStore extends Store {}
const prototype = BraintreeStore.prototype;
prototype["getClient"] = function getClient() {
  return client;
};
prototype["getPayPalClient"] = function getPayPalClient() {
  return c8;
};
prototype["getVenmoClient"] = function getVenmoClient() {
  return c9;
};
prototype["getLastURL"] = function getLastURL() {
  return global;
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
    if (paymentSourceType.paymentSourceType === constants2.PAYPAL) {
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
  },
};
const braintreeStore = new BraintreeStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/billing/BraintreeStore.tsx");

export default braintreeStore;
