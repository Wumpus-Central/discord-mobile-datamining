// discord_app/modules/storefront/native/StorefrontNativeUtils.android.tsx
import IAPStoreDefault from "../../../stores/native/IAPStore.android.tsx";
import GPlayActionCreators from "../../../actions/native/GPlayActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/native/StorefrontNativeUtils.android.tsx");

export const useFormattedSKUPrice = function useFormattedSKUPrice(sku) {
  sku = sku.sku;
  _require = undefined;
  let stateFromStores;
  let tmp2;
  if (sku != null) {
    const googleSkuIds = sku.googleSkuIds;
    if (googleSkuIds != null) {
      tmp2 = googleSkuIds[tmp];
    }
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  _require = tmp2;
  let items = [tmp2];
  const effect = noop.useEffect(() => {
    if (null != c0) {
      const items = [tmp];
      const inAppSkus = GPlayActionCreators.loadInAppSkus(items);
    }
  }, items);
  const items1 = [stateFromStores(7237)];
  const items2 = [tmp2];
  stateFromStores = require("initialize").useStateFromStores(
    items1,
    () => {
      let product = null;
      if (null != c0) {
        product = IAPStoreDefault.getProduct(tmp);
      }
      return product;
    },
    items2,
  );
  const items3 = [stateFromStores];
  return noop.useMemo(() => {
    let priceString;
    if (stateFromStores != null) {
      priceString = stateFromStores.priceString;
    }
    if (null != priceString) {
      let obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
      ({ priceString: obj2.normalPrice, priceString: obj2.userPrice } = stateFromStores);
    } else {
      obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    }
    return obj;
  }, items3);
};
