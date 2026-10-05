// === Module 5311: PremiumPaymentModalStore ===

// Module 5311 (PremiumPaymentModalStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5312 */;
import size from "module_2" /* 2 */;

function handleSubscribeFailure(error) {
  billingError = error.error;
}
function handleClearError() {
  billingError = null;
}
let billingError = null;
let code = null;
let skuId = null;
let loadId = null;
let c6 = false;
const Store = get_initializedDefault.Store;
class PremiumPaymentModalStore extends Store {
  getGiftCode(arg0) {
    let tmp = null;
    if (arg0 === skuId) {
      tmp = code;
    }
    return tmp;
  }
  isGiftCodeDeliveryReady(arg0) {
    return null != arg0 && arg0 === loadId && c6;
  }
}
Object.defineProperty(PremiumPaymentModalStore.prototype, "paymentError", {
  get: function paymentError() {
    return billingError;
  },
  set: undefined
});
PremiumPaymentModalStore.displayName = "PremiumPaymentModalStore";
const obj = {
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_UPDATE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function handleSubscribeSuccess() {
    billingError = null;
  },
  PREMIUM_PAYMENT_UPDATE_SUCCESS: handleClearError,
  PREMIUM_PAYMENT_ERROR_CLEAR: handleClearError,
  BRAINTREE_TOKENIZE_PAYPAL_FAIL: function handlePayPalTokenizeFailure(message) {
    billingError = new V6OrEarlierAPIError.BillingError(message.message);
  },
  BRAINTREE_TOKENIZE_VENMO_FAIL: function handleVenmoTokenizeFailure(message) {
    billingError = new V6OrEarlierAPIError.BillingError(message.message);
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
    const tmp = null != loadId.loadId && loadId.loadId === loadId;
    if (tmp) {
      c6 = true;
    }
  },
  SKU_PURCHASE_FAIL: function handleSKUPurchaseFail(error) {
    billingError = error.error;
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
  }
};
const premiumPaymentModalStore = new PremiumPaymentModalStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/PremiumPaymentModalStore.tsx");

export default premiumPaymentModalStore;