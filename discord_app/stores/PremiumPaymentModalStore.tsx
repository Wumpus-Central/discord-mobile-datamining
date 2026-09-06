// === Module 4800: handleSubscribeFailure ===

// Module 4800 (handleSubscribeFailure)
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4461 */;

require = arg1;
function handleSubscribeFailure(error) {
  error = error.error;
}
function handleClearError() {
  c2 = null;
}
let c2 = null;
let c3 = null;
let c4 = null;
let c5 = null;
let c6 = false;
const Store = initializeDefault.Store;
class PremiumPaymentModalStore extends Store {
}
const prototype = PremiumPaymentModalStore.prototype;
Object.defineProperty(prototype, "paymentError", {
  get: function paymentError() {
    return c2;
  },
  set: undefined
});
prototype["getGiftCode"] = function getGiftCode(arg0) {
  let tmp = null;
  if (arg0 === c4) {
    tmp = c3;
  }
  return tmp;
};
prototype["isGiftCodeDeliveryReady"] = function isGiftCodeDeliveryReady(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === c5;
  }
  if (tmp) {
    tmp = c6;
  }
  return tmp;
};
PremiumPaymentModalStore.displayName = "PremiumPaymentModalStore";
const premiumPaymentModalStore = new PremiumPaymentModalStore(dispatcherDefault, {
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_UPDATE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function handleSubscribeSuccess() {
    c2 = null;
  },
  PREMIUM_PAYMENT_UPDATE_SUCCESS: handleClearError,
  PREMIUM_PAYMENT_ERROR_CLEAR: handleClearError,
  BRAINTREE_TOKENIZE_PAYPAL_FAIL: function handlePayPalTokenizeFailure(message) {
    const billingError = new V6OrEarlierAPIError.BillingError(message.message);
  },
  BRAINTREE_TOKENIZE_VENMO_FAIL: function handleVenmoTokenizeFailure(message) {
    const billingError = new V6OrEarlierAPIError.BillingError(message.message);
  },
  SKU_PURCHASE_START: function handleSKUPurchaseStart(isGift) {
    let tmp = null;
    if (true === isGift.isGift) {
      let loadId = isGift.loadId;
      if (loadId == null) {
        loadId = null;
      }
      tmp = loadId;
    }
    loadId = tmp;
    c6 = false;
  },
  SKU_PURCHASE_SUCCESS: function handleSKUPurchaseSuccess(loadId) {
    ({ giftCode: c3, skuId: c4 } = loadId);
    let tmp = null != loadId.loadId;
    if (tmp) {
      tmp = loadId.loadId === c5;
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
      const skuId = isGift.skuId;
    }
  },
  GIFT_CODE_CREATE: function handleGiftCodeCreate(giftCode) {
    giftCode = giftCode.giftCode;
    if (0 === giftCode.uses) {
      if (giftCode.sku_id === c4) {
        const code = giftCode.code;
      }
    }
    return false;
  },
  USER_PAYMENT_BROWSER_CHECKOUT_DONE: function handleBrowserCheckoutDone(loadId) {
    if (loadId.loadId !== c5) {
      return false;
    } else {
      c6 = true;
    }
  }
});
const result = require("set").fileFinishedImporting("stores/PremiumPaymentModalStore.tsx");

export default premiumPaymentModalStore;