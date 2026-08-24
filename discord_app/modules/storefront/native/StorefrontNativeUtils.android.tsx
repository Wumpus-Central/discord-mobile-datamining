// discord_app/modules/storefront/native/StorefrontNativeUtils.android.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/storefront/native/StorefrontNativeUtils.android.tsx");

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
      const inAppSkus = _null(closure_1_2[1]).loadInAppSkus(items);
      const obj = _null(closure_1_2[1]);
    }
  }, items);
  const items1 = [stateFromStores(5324)];
  const items2 = [tmp2];
  stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => {
    let product = null;
    if (null != c0) {
      product = stateFromStores(closure_1_2[3]).getProduct(tmp);
      const obj = stateFromStores(closure_1_2[3]);
    }
    return product;
  }, items2);
  const items3 = [stateFromStores];
  return React.useMemo(() => {
    let priceString;
    if (stateFromStores != null) {
      priceString = tmp.priceString;
    }
    if (null != priceString) {
      let obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
      ({ priceString: obj2[0], priceString: obj2[3] } = tmp);
    } else {
      obj = { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
    }
    return obj;
  }, items3);
};