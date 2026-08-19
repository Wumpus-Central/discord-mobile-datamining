// discord_app/modules/collectibles/hooks/useFetchCollectiblesProducts.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import { useEffect } from "../../../../_runtime/00019_noop.js";
import addSku from "../../../stores/game_store/SKUStore.tsx";
import updateCategoriesAndProducts from "../CollectiblesCategoryStore.tsx";
import { SKUProductLines } from "../../../Constants.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProducts.tsx");

export const useFetchCollectiblesProducts = function useFetchCollectiblesProducts(gameProfileShopCollection) {
  const _require = gameProfileShopCollection;
  dependencyMap = arg1;
  const items = [stateFromStoresArray2];
  const stateFromStoresArray = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresArray(items, () => gameProfileShopCollection.map((item, index) => closure_4.get(item)));
  let obj = defaultAreStatesEqual;
  const items1 = [stateFromStoresArray3];
  const stateFromStoresArray1 = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresArray(items1, () => gameProfileShopCollection.map((item, index) => product.getProduct(item)));
  const obj2 = defaultAreStatesEqual;
  const items2 = [stateFromStoresArray3];
  stateFromStoresArray2 = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresArray(items2, () => gameProfileShopCollection.map((item, index) => productFetch.getProductFetch(item)));
  const obj4 = defaultAreStatesEqual;
  const items3 = [stateFromStoresArray3];
  stateFromStoresArray3 = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresArray(items3, () => gameProfileShopCollection.map((item, index) => productFetchBackedOff.isProductFetchBackedOff(item)));
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