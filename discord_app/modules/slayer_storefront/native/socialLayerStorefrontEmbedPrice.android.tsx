// === Module 11750: socialLayerStorefrontEmbedPrice ===

// Module 11750 (socialLayerStorefrontEmbedPrice)
import IAPStoreDefault from "IAPStore" /* 7737 */;
import GPlayActionCreators from "GPlayActionCreators" /* 10090 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SKUStore from "SKUStore" /* 7031 */;

const require = globalThis.__r;

require = fn;
const constants = fn(1072).PriceSetAssignmentPurchaseTypes;
let items = [SKUStore, IAPStoreDefault];
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/socialLayerStorefrontEmbedPrice.android.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRICE_STORES = items;
export function getSocialLayerStorefrontEmbedPrice(value) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = constants.DEFAULT;
  }
  const googleSkuIds = value.googleSkuIds;
  let tmp2;
  if (googleSkuIds != null) {
    tmp2 = googleSkuIds[DEFAULT];
  }
  let tmp3;
  if (null != tmp2) {
    const product = IAPStoreDefault.getProduct(tmp2);
    let priceString;
    if (product != null) {
      priceString = product.priceString;
    }
    tmp3 = priceString;
  }
  return tmp3;
}
export function useFetchSocialLayerStorefrontEmbedPrices(singleSkuIds) {
  _require = singleSkuIds;
  items = [SKUStore];
  let items1 = [singleSkuIds];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    items = [
      ...new Set(singleSkuIds.flatMap((item) => {
        value = closure_1_5.get(item);
        let tmp2;
        if (value != null) {
          const googleSkuIds = value.googleSkuIds;
          if (googleSkuIds != null) {
            tmp2 = googleSkuIds[constants.DEFAULT];
          }
        }
        if (null != tmp2) {
          items = [tmp2];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }))
    ];
    return items;
  }, items1);
  let obj = require("initialize");
  const items2 = [stateFromStoresArray(stateFromStores[4]), AuthenticationStore];
  stateFromStores = require("initialize").useStateFromStores(items2, () => {
    if (obj.isGooglePlayBillingSupported()) {
      let isReadyResult = stateFromStoresArray(stateFromStores[4]).isReady();
      const obj2 = stateFromStoresArray(stateFromStores[4]);
    } else {
      isReadyResult = authenticated.isAuthenticated();
    }
    return isReadyResult;
  });
  const items3 = [stateFromStoresArray, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = stateFromStoresArray.length > 0;
    }
    if (tmp) {
      const inAppSkus = GPlayActionCreators.loadInAppSkus(stateFromStoresArray);
    }
  }, items3);
}