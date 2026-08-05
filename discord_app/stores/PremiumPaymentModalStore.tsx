// discord_app/stores/PremiumPaymentModalStore.tsx
import { Store } from "initialize";

const require = arg1;
function handleSubscribeFailure(error) {
  error = error.error;
}
function handleClearError() {
  let c2 = null;
}
let c2 = null;
let c3 = null;
let c4 = null;
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
PremiumPaymentModalStore.displayName = "PremiumPaymentModalStore";
const premiumPaymentModalStore = new PremiumPaymentModalStore(require("dispatcher"), {
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_UPDATE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function handleSubscribeSuccess() {
    let c2 = null;
  },
  PREMIUM_PAYMENT_UPDATE_SUCCESS: handleClearError,
  PREMIUM_PAYMENT_ERROR_CLEAR: handleClearError,
  BRAINTREE_TOKENIZE_PAYPAL_FAIL: function handlePayPalTokenizeFailure(message) {
    const billingError = new require("../errors/index.tsx") /* V6OrEarlierAPIError */.BillingError(message.message);
  },
  BRAINTREE_TOKENIZE_VENMO_FAIL: function handleVenmoTokenizeFailure(message) {
    const billingError = new require("../errors/index.tsx") /* V6OrEarlierAPIError */.BillingError(message.message);
  },
  SKU_PURCHASE_SUCCESS: function handleSKUPurchaseSuccess(arg0) {
    let c3;
    let c4;
    ({ giftCode: c3, skuId: c4 } = arg0);
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
  }
});
const result = require("dispatcher").fileFinishedImporting("stores/PremiumPaymentModalStore.tsx");

export default premiumPaymentModalStore;