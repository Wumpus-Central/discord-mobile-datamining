// === Module 12010: useFetchCollectiblesProducts ===

// Module 12010 (useFetchCollectiblesProducts)
import _slicedToArray from "_slicedToArray" /* 32 */;
import { useEffect } from "noop" /* 19 */;
import addSku from "addSku" /* 4521 */;
import updateCategoriesAndProducts from "updateCategoriesAndProducts" /* 5301 */;
import { SKUProductLines } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProducts.tsx");

export const useFetchCollectiblesProducts = function useFetchCollectiblesProducts(gameProfileShopCollection) {
  const _require = gameProfileShopCollection;
  dependencyMap = arg1;
  const items = [stateFromStoresArray2];
  const stateFromStoresArray = _require(647).useStateFromStoresArray(items, () => gameProfileShopCollection.map((item, index) => closure_4.get(item)));
  let obj = _require(647);
  const items1 = [stateFromStoresArray3];
  const stateFromStoresArray1 = _require(647).useStateFromStoresArray(items1, () => gameProfileShopCollection.map((item, index) => product.getProduct(item)));
  const obj2 = _require(647);
  const items2 = [stateFromStoresArray3];
  stateFromStoresArray2 = _require(647).useStateFromStoresArray(items2, () => gameProfileShopCollection.map((item, index) => productFetch.getProductFetch(item)));
  const obj4 = _require(647);
  const items3 = [stateFromStoresArray3];
  stateFromStoresArray3 = _require(647).useStateFromStoresArray(items3, () => gameProfileShopCollection.map((item, index) => productFetchBackedOff.isProductFetchBackedOff(item)));
  const items4 = [gameProfileShopCollection, stateFromStoresArray, stateFromStoresArray2, stateFromStoresArray1, arg1, stateFromStoresArray3];
  stateFromStoresArray1(() => {
    const entries = gameProfileShopCollection.entries();
    while (tmp2 !== undefined) {
      let tmp5 = stateFromStoresArray(tmp3, 2);
      [tmp6, tmp8] = tmp5;
      let tmp10 = stateFromStoresArray[tmp6];
      let tmp12 = stateFromStoresArray1[tmp6];
      let tmp14 = stateFromStoresArray2[tmp6];
      let tmp16 = true === dependencyMap;
      if (tmp16) {
        let type;
        if (tmp12 != null) {
          type = tmp12.type;
        }
        tmp16 = type === gameProfileShopCollection(1949).CollectiblesItemType.BUNDLE;
      }
      if (tmp16) {
        tmp16 = 0 === tmp12.items.length;
      }
      let tmp24 = null != tmp12;
      if (tmp24) {
        tmp24 = !tmp22;
      }
      if (!tmp24) {
        let tmp27 = null != tmp10;
        if (tmp27) {
          tmp27 = tmp10.productLine !== SKUProductLines.COLLECTIBLES;
        }
        tmp24 = tmp27;
      }
      if (!tmp24) {
        let state;
        if (tmp14 != null) {
          state = tmp14.state;
        }
        tmp24 = "fetching" === state;
      }
      if (!tmp24) {
        tmp24 = stateFromStoresArray3[tmp6];
      }
      if (!tmp24) {
        gameProfileShopCollection(5300);
        let obj = { includeBundles: null };
        obj[0] = dependencyMap;
        let collectiblesProduct = obj.fetchCollectiblesProduct(tmp8, obj);
      }
      continue;
    }
    tmp2 = entries[Symbol.iterator]();
  }, items4);
  return stateFromStoresArray1.some((item, index) => {
    let state;
    if (stateFromStoresArray2[index] != null) {
      state = tmp2.state;
    }
    let tmp4 = "fetching" === state;
    if (!tmp4) {
      let tmp6 = null == item;
      if (tmp6) {
        let state1;
        if (stateFromStoresArray2[index] != null) {
          state1 = tmp7.state;
        }
        tmp6 = "error" !== state1;
      }
      tmp4 = tmp6;
    }
    return tmp4;
  });
};