// === Module 10267: useFetchCollectiblesProduct ===

// Module 10267 (useFetchCollectiblesProduct)
import closure_2 from "_slicedToArray" /* 32 */;
import { useEffect } from "noop" /* 19 */;
import closure_4 from "addSku" /* 4429 */;
import closure_5 from "updateCategoriesAndProducts" /* 7148 */;
import { SKUProductLines } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProduct.tsx");

export const useFetchCollectiblesProduct = function useFetchCollectiblesProduct(skuId, arg1) {
  const _require = skuId;
  dependencyMap = arg1;
  let obj = _require(647);
  let items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let value = null;
    if (null != closure_0) {
      value = closure_4.get(tmp);
    }
    return value;
  });
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = stateFromStores.productLine !== SKUProductLines.COLLECTIBLES;
  }
  const callback = tmp4;
  let tmpResult = tmp(647);
  const items1 = [stateFromStores1];
  const tmp6 = callback(tmpResult.useStateFromStoresArray(items1, () => {
    const items = [stateFromStores1.getProduct(closure_0), stateFromStores1.getProductFetch(closure_0)];
    return items;
  }), 2);
  const first = tmp6[0];
  closure_4 = tmp8;
  tmpResult = tmp(647);
  const items2 = [stateFromStores1];
  stateFromStores1 = tmpResult.useStateFromStores(items2, () => stateFromStores1.isProductFetchBackedOff(closure_0));
  let tmp10 = true === arg1;
  if (tmp10) {
    let type;
    if (first != null) {
      type = first.type;
    }
    tmp10 = type === tmp(1950).CollectiblesItemType.BUNDLE;
  }
  if (tmp10) {
    tmp10 = 0 === first.items.length;
  }
  SKUProductLines = tmp10;
  const items3 = [skuId, first, tmp4, tmp6[1], arg1, tmp10, stateFromStores1];
  first(() => {
    let tmp2 = null == skuId;
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
      let state;
      if (closure_4 != null) {
        state = closure_4.state;
      }
      tmp2 = "fetching" === state;
    }
    if (!tmp2) {
      tmp2 = stateFromStores1;
    }
    if (!tmp2) {
      let obj = skuId(table[7]);
      obj = { includeBundles: null };
      obj[0] = table;
      const collectiblesProduct = obj.fetchCollectiblesProduct(skuId, obj);
    }
  }, items3);
  obj = { product: first, isFetching: null };
  let state;
  if (tmp6[1] != null) {
    state = tmp8.state;
  }
  obj[1] = "fetching" === state;
  return obj;
};