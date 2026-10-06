// === Module 6931: IAPStore ===

// Module 6931 (IAPStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants2 from "Constants" /* 1096 */;
import BillingUtils from "BillingUtils" /* 4549 */;
import PriceUtils from "PriceUtils" /* 6750 */;
import Constants from "Constants" /* 6932 */;
import size from "module_2" /* 2 */;

let offerIds;

function updateProduct(currencyCode) {
  const str = currencyCode.currencyCode;
  const formatted = str.toLowerCase();
  const result = currencyCode.price / 100;
  if ("BG" === countryCode) {
    let formatDualPriceForBGResult;
    if (formatted === CurrencyCodes.EUR) {
      const obj2 = PriceUtils;
      formatDualPriceForBGResult = obj2.formatDualPriceForBG(result, { convertToMajorUnits: false });
    }
    const obj3 = { price: currencyCode.price, currencyCode: formatted, priceString: formatDualPriceForBGResult };
    const merged = Object.assign(currencyCode);
    return obj3;
  }
  const obj = PriceUtils;
  formatDualPriceForBGResult = obj.formatSingleCurrencyPrice(result, formatted, { convertToMajorUnits: false });
}
function skusLoaded(arg0) {
  let skus;
  let skusType;
  ({ skus, skusType } = arg0);
  let item = skus.forEach((identifier) => {
    const result = map.set(identifier.identifier, identifier);
  });
  const arr = Array.from(map.values());
  found = undefined;
  if (arr != null) {
    found = arr.filter((item) => null != item);
  }
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
    let mapped;
    const arr2 = found;
    if (found != null) {
      mapped = arr2.map(updateProduct);
    }
    found = mapped;
  } catch (tmp6) {
    const obj = BillingUtils;
    let result = obj.captureBillingException(tmp6);
  }
  const arr3 = found;
  if (found != null) {
    const item2 = arr3.forEach((identifier) => {
      const result = map.set(identifier.identifier, identifier);
    });
  }
  if (GPlaySkusType.IN_APP === skusType) {
    c12 = false;
  } else if (tmp11.SUBSCRIPTION === skusType) {
    c13 = false;
  }
}
const GPlayConnectionState = Constants.GPlayConnectionState;
const GPlaySkusType = Constants.GPlaySkusType;
const CurrencyCodes = Constants2.CurrencyCodes;
let DISCONNECTED = GPlayConnectionState.DISCONNECTED;
let found = null;
const map = new Map();
const set = new Set();
const set1 = new Set();
let pendingDowngrade = null;
let isDowngrading = false;
let c12 = false;
let c13 = false;
let countryCode = null;
const Store = get_initializedDefault.Store;
class IAPStore extends Store {
  getProducts() {
    return found;
  }
  getOfferIds() {
    return set;
  }
  getProduct(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  isBusy() {
    return set1.size > 0 || isDowngrading;
  }
  isInCheckout() {
    return false;
  }
  isPurchasingProduct(GENERIC_CONSUMABLE) {
    return set1.has(GENERIC_CONSUMABLE);
  }
  isReady() {
    return DISCONNECTED === GPlayConnectionState.CONNECTED;
  }
  hasConnectionError() {
    return DISCONNECTED === GPlayConnectionState.ERROR;
  }
  getPendingDowngrade() {
    return pendingDowngrade;
  }
  isFetchingGoogleSkus() {
    return c13 || c12;
  }
  isFetchingProducts() {
    return c13 || c12;
  }
  getUserCountry() {
    return countryCode;
  }
}
const prototype = IAPStore.prototype;
IAPStore.displayName = "IAPStore";
let obj = {
  GPLAY_UPDATE_CONNECTION_STATE: function updateConnectionState(connectionState) {
    DISCONNECTED = connectionState.connectionState;
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
      const self = this;
      const self2 = this;
      const error = new Error("Tried verifying product without initialization: " + productId);
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
};
const iAPStore = new IAPStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/native/IAPStore.android.tsx");

export default iAPStore;