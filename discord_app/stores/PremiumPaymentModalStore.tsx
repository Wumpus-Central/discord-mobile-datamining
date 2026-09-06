// discord_app/stores/PremiumPaymentModalStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import V6OrEarlierAPIError from "../errors/index.tsx";

require = fn;
function handleSubscribeFailure(error) {
  error = error.error;
}
function handleClearError() {
  error = null;
}
let error = null;
let code = null;
let skuId = null;
let loadId = null;
let c6 = false;
const Store = initializeDefault.Store;
class PremiumPaymentModalStore extends Store {}
const prototype = PremiumPaymentModalStore.prototype;
Object.defineProperty(prototype, "paymentError", {
  get: function paymentError() {
    return error;
  },
  set: undefined,
});
prototype["getGiftCode"] = function getGiftCode(arg0) {
  let tmp = null;
  if (arg0 === skuId) {
    tmp = code;
  }
  return tmp;
};
prototype["isGiftCodeDeliveryReady"] = function isGiftCodeDeliveryReady(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === loadId;
  }
  if (tmp) {
    tmp = c6;
  }
  return tmp;
};
PremiumPaymentModalStore.displayName = "PremiumPaymentModalStore";
const premiumPaymentModalStore = new PremiumPaymentModalStore(DispatcherDefault, {
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_UPDATE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function handleSubscribeSuccess() {
    error = null;
  },
  PREMIUM_PAYMENT_UPDATE_SUCCESS: handleClearError,
  PREMIUM_PAYMENT_ERROR_CLEAR: handleClearError,
  BRAINTREE_TOKENIZE_PAYPAL_FAIL: function handlePayPalTokenizeFailure(message) {
    const billingError = new V6OrEarlierAPIError.BillingError(message.message);
    error = billingError;
  },
  BRAINTREE_TOKENIZE_VENMO_FAIL: function handleVenmoTokenizeFailure(message) {
    const billingError = new V6OrEarlierAPIError.BillingError(message.message);
    error = billingError;
  },
  SKU_PURCHASE_START: function handleSKUPurchaseStart(isGift) {
    let tmp = null;
    if (true === isGift.isGift) {
      loadId = isGift.loadId;
      if (loadId == null) {
        loadId = null;
      }
      tmp = loadId;
    }
    loadId = tmp;
    c6 = false;
  },
  SKU_PURCHASE_SUCCESS: function handleSKUPurchaseSuccess(loadId) {
    ({ giftCode: code, skuId } = loadId);
    let tmp = null != loadId.loadId;
    if (tmp) {
      tmp = loadId.loadId === loadId;
    }
    if (tmp) {
      c6 = true;
    }
  },
  SKU_PURCHASE_FAIL: function handleSKUPurchaseFail(error) {
    error = error.error;
  },
  SKU_PURCHASE_AWAIT_CONFIRMATION: function handleSKUPurchaseAwaitConfirmation(isGift) {
    if (isGift.isGift) {
      skuId = isGift.skuId;
    }
  },
  GIFT_CODE_CREATE: function handleGiftCodeCreate(giftCode) {
    giftCode = giftCode.giftCode;
    if (0 === giftCode.uses) {
      if (giftCode.sku_id === skuId) {
        code = giftCode.code;
      }
    }
    return false;
  },
  USER_PAYMENT_BROWSER_CHECKOUT_DONE: function handleBrowserCheckoutDone(loadId) {
    if (loadId.loadId !== loadId) {
      return false;
    } else {
      c6 = true;
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/PremiumPaymentModalStore.tsx");

export default premiumPaymentModalStore;
