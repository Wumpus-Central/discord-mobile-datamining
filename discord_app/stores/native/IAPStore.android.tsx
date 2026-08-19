// === Module 5319: updateProduct ===

// Module 5319 (updateProduct)
import obj132 from "obj132" /* 2 */;
import sum from "sum" /* 505 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _createGatewayCheckoutContext from "_createGatewayCheckoutContext" /* 4054 */;
import formatSingleCurrencyPrice from "formatSingleCurrencyPrice" /* 5316 */;
import GPlayConnectionState from "GPlayConnectionState" /* 5320 */;

function updateProduct(currencyCode) {
  const formatted = currencyCode.currencyCode.toLowerCase();
  const result = currencyCode.price / 100;
  if ("BG" === c14) {
    if (formatted === CurrencyCodes.EUR) {
      let formatDualPriceForBGResult = formatSingleCurrencyPrice.formatDualPriceForBG(result, { convertToMajorUnits: false });
    }
    let obj = {};
    const merged = Object.assign(currencyCode);
    obj.price = currencyCode.price;
    obj.currencyCode = formatted;
    obj.priceString = formatDualPriceForBGResult;
    return obj;
  }
  obj = formatSingleCurrencyPrice;
  formatDualPriceForBGResult = obj.formatSingleCurrencyPrice(result, formatted, { convertToMajorUnits: false });
}
function skusLoaded(arg0) {
  ({ skus, skusType } = arg0);
  let item = skus.forEach((item, index) => {
    const result = store.set(item.identifier, item);
  });
  const arr = Array.from(map.values());
  let found;
  if (arr != null) {
    found = arr.filter((item, index) => null != item);
  }
  let mapped = found;
  if (found != null) {
    const item1 = found.forEach((item, index) => {
      let offerIds;
      if (item != null) {
        offerIds = item.offerIds;
      }
      if (null != offerIds) {
        item = offerIds.forEach((item, index) => set.add(item));
      }
    });
  }
  try {
    mapped = undefined;
    if (mapped != null) {
      mapped = arr2.map(updateProduct);
    }
    if (mapped != null) {
      const item2 = arr3.forEach((item, index) => {
        const result = store.set(item.identifier, item);
      });
    }
    if (GPlaySkusType.IN_APP === skusType) {
      c12 = false;
    } else if (tmp12.SUBSCRIPTION === skusType) {
      c13 = false;
    }
    arr2 = mapped;
    arr3 = mapped;
  } catch (tmp7) {
    let result = _createGatewayCheckoutContext.captureBillingException(tmp7);
  }
}
GPlayConnectionState = GPlayConnectionState.GPlayConnectionState;
const GPlaySkusType = GPlayConnectionState.GPlaySkusType;
const CurrencyCodes = sum.CurrencyCodes;
const DISCONNECTED = GPlayConnectionState.DISCONNECTED;
let c6 = null;
const map = new Map();
const set = new Set();
const set1 = new Set();
let c10 = null;
let c11 = false;
let c12 = false;
let c13 = false;
let c14 = null;
const Store = initializeDefault.Store;
class IAPStore extends Store {
}
const prototype = IAPStore.prototype;
prototype["getProducts"] = function getProducts() {
  return c6;
};
prototype["getOfferIds"] = function getOfferIds() {
  return set;
};
prototype["getProduct"] = function getProduct(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["isBusy"] = function isBusy() {
  return set1.size > 0 || c11;
};
prototype["isPurchasingProduct"] = function isPurchasingProduct(GENERIC_CONSUMABLE) {
  return set1.has(GENERIC_CONSUMABLE);
};
prototype["isReady"] = function isReady() {
  return DISCONNECTED === GPlayConnectionState.CONNECTED;
};
prototype["hasConnectionError"] = function hasConnectionError() {
  return DISCONNECTED === GPlayConnectionState.ERROR;
};
prototype["getPendingDowngrade"] = function getPendingDowngrade() {
  return c10;
};
prototype["isFetchingGoogleSkus"] = function isFetchingGoogleSkus() {
  let tmp = c13;
  if (!c13) {
    tmp = c12;
  }
  return tmp;
};
prototype["isFetchingProducts"] = function isFetchingProducts() {
  let tmp = c13;
  if (!c13) {
    tmp = c12;
  }
  return tmp;
};
prototype["getUserCountry"] = function getUserCountry() {
  return c14;
};
IAPStore.displayName = "IAPStore";
const iAPStore = new IAPStore(dispatcherDefault, {
  GPLAY_UPDATE_CONNECTION_STATE: function updateConnectionState(connectionState) {
    connectionState = connectionState.connectionState;
  },
  GPLAY_FETCH_SUBSCRIPTION_SKUS_START: function handleFetchSubscriptionSkusStart() {
    c13 = true;
  },
  GPLAY_SUBSCRIPTION_SKUS_LOADED: skusLoaded,
  GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: function handleFetchSubscriptionSkusFailed() {
    c13 = false;
  },
  GPLAY_FETCH_IN_APP_SKUS_START: function handleFetchInAppSkusStart() {
    c12 = true;
  },
  GPLAY_IN_APP_SKUS_LOADED: skusLoaded,
  GPLAY_FETCH_IN_APP_SKUS_FAILED: function handleFetchInAppSkusFailed() {
    c12 = false;
  },
  GPLAY_VERIFICATION_START: function handleVerificationStart(productId) {
    set1.add(productId.productId);
  },
  GPLAY_VERIFICATION_END: function handleVerificationEnd(productId) {
    productId = productId.productId;
    if (set1.has(productId)) {
      set1.delete(productId);
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("Tried verifying product without initialization: " + productId);
      throw error;
    }
  },
  GPLAY_UPDATE_PENDING_DOWNGRADE: function handleUpdatePendingDowngrade(pendingDowngrade) {
    pendingDowngrade = pendingDowngrade.pendingDowngrade;
  },
  GPLAY_UPDATE_IS_DOWNGRADING: function handleUpdateIsDowngrading(isDowngrading) {
    isDowngrading = isDowngrading.isDowngrading;
  },
  GPLAY_SET_USER_COUNTRY: function handleSetUserCountry(countryCode) {
    countryCode = countryCode.countryCode;
  }
});
let result = obj132.fileFinishedImporting("stores/native/IAPStore.android.tsx");

export default iAPStore;