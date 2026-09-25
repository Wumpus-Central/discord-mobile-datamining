// === Module 10497: useFetchCollectiblesProduct ===

// Module 10497 (useFetchCollectiblesProduct)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6956 */;
import _slicedToArray from "module_32" /* 32 */;
import SKUStore from "SKUStore" /* 5817 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6957 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
let SKUProductLines = fn(1074).SKUProductLines;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProduct.tsx");

export const useFetchCollectiblesProduct = function useFetchCollectiblesProduct(skuId, includeBundles) {
  _require = skuId;
  dependencyMap = includeBundles;
  let items = [state];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
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
  let obj = require("useStateFromStores");
  const items1 = [stateFromStores1];
  const tmp6 = _slicedToArray(require("useStateFromStores").useStateFromStoresArray(items1, () => {
    const items = [CollectiblesCategoryStore.getProduct(closure_0), CollectiblesCategoryStore.getProductFetch(closure_0)];
    return items;
  }), 2);
  const product = tmp6[0];
  state = tmp8;
  const tmpResult = require("useStateFromStores");
  const items2 = [stateFromStores1];
  stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () => CollectiblesCategoryStore.isProductFetchBackedOff(closure_0));
  let tmp10 = true === includeBundles;
  if (tmp10) {
    let type;
    if (product != null) {
      type = product.type;
    }
    tmp10 = type === tmp(1973).CollectiblesItemType.BUNDLE;
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
      const obj2 = { includeBundles };
      const collectiblesProduct = CollectiblesActionCreators.fetchCollectiblesProduct(closure_0, obj2);
    }
  }, items3);
  let obj2 = { product, isFetching: null };
  state = undefined;
  if (tmp6[1] != null) {
    state = tmp8.state;
  }
  obj2.isFetching = "fetching" === state;
  return obj2;
};