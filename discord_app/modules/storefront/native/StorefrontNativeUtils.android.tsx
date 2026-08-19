// === Module 10355: useFormattedSKUPrice ===

// Module 10355 (useFormattedSKUPrice)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/storefront/native/StorefrontNativeUtils.android.tsx");

export const useFormattedSKUPrice = function useFormattedSKUPrice(sku) {
  sku = sku.sku;
  let _require;
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
  const effect = React.useEffect(() => {
    if (null != _null) {
      const items = [tmp];
      const inAppSkus = _null(dependencyMap[1]).loadInAppSkus(items);
      const obj = _null(dependencyMap[1]);
    }
  }, items);
  const items1 = [stateFromStores(5319)];
  const items2 = [tmp2];
  stateFromStores = _require(589).useStateFromStores(items1, () => {
    let product = null;
    if (null != c0) {
      product = stateFromStores(dependencyMap[3]).getProduct(tmp);
      const obj = stateFromStores(dependencyMap[3]);
    }
    return product;
  }, items2);
  const items3 = [stateFromStores];
  return React.useMemo(() => {
    let priceString;
    if (stateFromStores != null) {
      priceString = stateFromStores.priceString;
    }
    if (null != priceString) {
      let obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
      ({ priceString: obj2[0], priceString: obj2[3] } = stateFromStores);
    } else {
      obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    }
    return obj;
  }, items3);
};