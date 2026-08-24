// discord_app/stores/native/IAPStore.android.tsx
import sum from "../../../discord_common/js/shared/Constants.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import _createGatewayCheckoutContext from "../../utils/BillingUtils.tsx";
import formatSingleCurrencyPrice from "../../utils/PriceUtils.tsx";
import GPlayConnectionState from "../../modules/gplay/native/Constants.tsx";
import set from "../../../_runtime/00002_set.js";

function updateProduct(currencyCode) {
  const formatted = currencyCode.currencyCode.toLowerCase();
  const result = currencyCode.price / 100;
  if ("BG" === c14) {
    if (formatted === CurrencyCodes.EUR) {
      let formatDualPriceForBGResult = formatSingleCurrencyPrice.formatDualPriceForBG(result, { convertToMajorUnits: false });
      const obj2 = formatSingleCurrencyPrice;
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
  let item = skus.forEach((identifier) => {
    const result = store.set(identifier.identifier, identifier);
  });
  const arr = Array.from(map.values());
  let found;
  if (arr != null) {
    found = arr.filter((arg0) => null != arg0);
  }
  let mapped = found;
  if (found != null) {
    const item1 = found.forEach((offerIds) => {
      offerIds = undefined;
      if (offerIds != null) {
        offerIds = offerIds.offerIds;
      }
      if (null != offerIds) {
        const item = offerIds.forEach((arg0) => set.add(arg0));
      }
    });
  }
  try {
    mapped = undefined;
    if (mapped != null) {
      mapped = mapped.map(updateProduct);
    }
    if (mapped != null) {
      const item2 = mapped.forEach((identifier) => {
        const result = store.set(identifier.identifier, identifier);
      });
    }
    if (GPlaySkusType.IN_APP === skusType) {
      c12 = false;
    } else if (tmp12.SUBSCRIPTION === skusType) {
      c13 = false;
    }
  } catch (tmp7) {
    let result = _createGatewayCheckoutContext.captureBillingException(tmp7);
    const obj = _createGatewayCheckoutContext;
  }
}
GPlayConnectionState = GPlayConnectionState.GPlayConnectionState;
const GPlaySkusType = GPlayConnectionState.GPlaySkusType;
const CurrencyCodes = sum.CurrencyCodes;
const DISCONNECTED = GPlayConnectionState.DISCONNECTED;
let c6 = null;
const map = new Map();
let set = new Set();
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
      obj.delete(productId);
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("Tried verifying product without initialization: " + productId);
      throw error;
    }
    obj = set1;
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
let result = set.fileFinishedImporting("stores/native/IAPStore.android.tsx");

export default iAPStore;