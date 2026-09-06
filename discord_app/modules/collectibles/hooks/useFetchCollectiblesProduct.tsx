// === Module 11042: useFetchCollectiblesProduct ===

// Module 11042 (useFetchCollectiblesProduct)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import _slicedToArray from "module_32" /* 32 */;
import SKUStore from "SKUStore" /* 5510 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;

require = fn;
const useEffect = fn(19).useEffect;
let SKUProductLines = fn(1074).SKUProductLines;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProduct.tsx");

export const useFetchCollectiblesProduct = function useFetchCollectiblesProduct(skuId, includeBundles) {
  _require = skuId;
  dependencyMap = includeBundles;
  let obj = require("useStateFromStores");
  let items = [state];
  const stateFromStores = obj.useStateFromStores(items, () => {
    value = null;
    if (null != closure_0) {
      value = SKUStore.get(tmp);
    }
    return value;
  });
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = stateFromStores.productLine !== SKUProductLines.COLLECTIBLES;
  }
  _slicedToArray = tmp4;
  let tmpResult = tmp(563);
  const items1 = [stateFromStores1];
  const tmp6 = _slicedToArray(tmpResult.useStateFromStoresArray(items1, () => {
    const items = [CollectiblesCategoryStore.getProduct(closure_0), CollectiblesCategoryStore.getProductFetch(closure_0)];
    return items;
  }), 2);
  const product = tmp6[0];
  state = tmp8;
  tmpResult = tmp(563);
  const items2 = [stateFromStores1];
  stateFromStores1 = tmpResult.useStateFromStores(items2, () => CollectiblesCategoryStore.isProductFetchBackedOff(closure_0));
  let tmp10 = true === includeBundles;
  if (tmp10) {
    let type;
    if (product != null) {
      type = product.type;
    }
    tmp10 = type === tmp(1889).CollectiblesItemType.BUNDLE;
  }
  if (tmp10) {
    tmp10 = 0 === product.items.length;
  }
  SKUProductLines = tmp10;
  const items3 = [skuId, product, tmp4, tmp6[1], includeBundles, tmp10, stateFromStores1];
  product(() => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      let tmp4 = null != first;
      if (tmp4) {
        tmp4 = !closure_6;
      }
      tmp2 = tmp4;
    }
    if (!tmp2) {
      tmp2 = closure_2;
    }
    if (!tmp2) {
      state = undefined;
      if (state != null) {
        state = state.state;
      }
      tmp2 = "fetching" === state;
    }
    if (!tmp2) {
      tmp2 = stateFromStores1;
    }
    if (!tmp2) {
      const obj = { includeBundles };
      const collectiblesProduct = obj.fetchCollectiblesProduct(closure_0, obj);
    }
  }, items3);
  obj = { product, isFetching: null };
  state = undefined;
  if (tmp6[1] != null) {
    state = tmp8.state;
  }
  obj.isFetching = "fetching" === state;
  return obj;
};