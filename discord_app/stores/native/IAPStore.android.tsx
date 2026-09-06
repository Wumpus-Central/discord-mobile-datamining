// discord_app/stores/native/IAPStore.android.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants2 from "../../../discord_common/js/shared/Constants.tsx";
import BillingUtils from "../../utils/BillingUtils.tsx";
import PriceUtils from "../../utils/PriceUtils.tsx";
import Constants from "../../modules/gplay/native/Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function updateProduct(currencyCode) {
  const formatted = currencyCode.currencyCode.toLowerCase();
  const result = currencyCode.price / 100;
  if ("BG" === countryCode) {
    if (formatted === CurrencyCodes.EUR) {
      let formatDualPriceForBGResult = PriceUtils.formatDualPriceForBG(result, { convertToMajorUnits: false });
    }
    let obj = {};
    const merged = Object.assign(currencyCode);
    obj.price = currencyCode.price;
    obj.currencyCode = formatted;
    obj.priceString = formatDualPriceForBGResult;
    return obj;
  }
  obj = PriceUtils;
  formatDualPriceForBGResult = obj.formatSingleCurrencyPrice(result, formatted, { convertToMajorUnits: false });
}
function skusLoaded(arg0) {
  ({ skus, skusType } = arg0);
  let item = skus.forEach((identifier) => {
    const result = map.set(identifier.identifier, identifier);
  });
  const arr = Array.from(map.values());
  let found;
  if (arr != null) {
    found = arr.filter((item) => null != item);
  }
  mapped = found;
  if (found != null) {
    const item1 = found.forEach((offerIds) => {
      offerIds = undefined;
      if (offerIds != null) {
        offerIds = offerIds.offerIds;
      }
      if (null != offerIds) {
        const item = offerIds.forEach((item) => set.add(item));
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
        const result = map.set(identifier.identifier, identifier);
      });
    }
    if (GPlaySkusType.IN_APP === skusType) {
      c12 = false;
    } else if (tmp12.SUBSCRIPTION === skusType) {
      c13 = false;
    }
  } catch (tmp7) {
    let result = BillingUtils.captureBillingException(tmp7);
  }
}
const GPlayConnectionState = Constants.GPlayConnectionState;
const GPlaySkusType = Constants.GPlaySkusType;
const CurrencyCodes = Constants2.CurrencyCodes;
let connectionState = GPlayConnectionState.DISCONNECTED;
let mapped = null;
const map = new Map();
const set = new Set();
const set1 = new Set();
let pendingDowngrade = null;
let isDowngrading = false;
let c12 = false;
let c13 = false;
let countryCode = null;
const Store = initializeDefault.Store;
class IAPStore extends Store {}
const prototype = IAPStore.prototype;
prototype["getProducts"] = function getProducts() {
  return mapped;
};
prototype["getOfferIds"] = function getOfferIds() {
  return set;
};
prototype["getProduct"] = function getProduct(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["isBusy"] = function isBusy() {
  return set1.size > 0 || isDowngrading;
};
prototype["isPurchasingProduct"] = function isPurchasingProduct(GENERIC_CONSUMABLE) {
  return set1.has(GENERIC_CONSUMABLE);
};
prototype["isReady"] = function isReady() {
  return connectionState === GPlayConnectionState.CONNECTED;
};
prototype["hasConnectionError"] = function hasConnectionError() {
  return connectionState === GPlayConnectionState.ERROR;
};
prototype["getPendingDowngrade"] = function getPendingDowngrade() {
  return pendingDowngrade;
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
  return countryCode;
};
IAPStore.displayName = "IAPStore";
const iAPStore = new IAPStore(DispatcherDefault, {
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
      const error = new Error("Tried verifying product without initialization: " + productId);
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
  },
});
let result = size.fileFinishedImporting("stores/native/IAPStore.android.tsx");

export default iAPStore;
