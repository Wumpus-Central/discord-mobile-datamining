// === Module 8873: useFetchCollectiblesProducts ===

// Module 8873 (useFetchCollectiblesProducts)
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import _slicedToArray from "module_32" /* 32 */;
import SKUStore from "SKUStore" /* 5510 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;

require = fn;
const useEffect = fn(19).useEffect;
const SKUProductLines = fn(1074).SKUProductLines;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProducts.tsx");

export const useFetchCollectiblesProducts = function useFetchCollectiblesProducts(gameProfileShopCollection, includeBundles) {
  _require = gameProfileShopCollection;
  dependencyMap = includeBundles;
  const items = [stateFromStoresArray2];
  const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(items, () => gameProfileShopCollection.map((item) => stateFromStoresArray2.get(item)));
  let obj = require("useStateFromStores");
  const items1 = [stateFromStoresArray3];
  const stateFromStoresArray1 = require("useStateFromStores").useStateFromStoresArray(items1, () => gameProfileShopCollection.map((item) => product.getProduct(item)));
  const obj2 = require("useStateFromStores");
  const items2 = [stateFromStoresArray3];
  stateFromStoresArray2 = require("useStateFromStores").useStateFromStoresArray(items2, () => gameProfileShopCollection.map((item) => productFetch.getProductFetch(item)));
  const obj4 = require("useStateFromStores");
  const items3 = [stateFromStoresArray3];
  stateFromStoresArray3 = require("useStateFromStores").useStateFromStoresArray(items3, () => gameProfileShopCollection.map((item) => productFetchBackedOff.isProductFetchBackedOff(item)));
  const items4 = [gameProfileShopCollection, stateFromStoresArray, stateFromStoresArray2, stateFromStoresArray1, includeBundles, stateFromStoresArray3];
  stateFromStoresArray1(() => {
    const entries = gameProfileShopCollection.entries();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp8] = tmp5;
      let tmp10 = stateFromStoresArray[tmp6];
      let tmp12 = stateFromStoresArray1[tmp6];
      let tmp14 = stateFromStoresArray2[tmp6];
      let tmp16 = true === includeBundles;
      if (tmp16) {
        let type;
        if (tmp12 != null) {
          type = tmp12.type;
        }
        tmp16 = type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
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
        let obj = { includeBundles };
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