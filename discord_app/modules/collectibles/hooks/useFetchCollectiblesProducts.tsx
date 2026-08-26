// === Module 12456: useFetchCollectiblesProducts ===

// Module 12456 (useFetchCollectiblesProducts)
import closure_2 from "_slicedToArray" /* 32 */;
import { useEffect } from "noop" /* 19 */;
import closure_4 from "addSku" /* 4493 */;
import closure_5 from "updateCategoriesAndProducts" /* 7214 */;
import { SKUProductLines } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProducts.tsx");

export const useFetchCollectiblesProducts = function useFetchCollectiblesProducts(first) {
  const _require = first;
  dependencyMap = arg1;
  const items = [stateFromStoresArray2];
  const stateFromStoresArray = _require(647).useStateFromStoresArray(items, () => lib.map((arg0) => closure_4.get(arg0)));
  let obj = _require(647);
  const items1 = [stateFromStoresArray3];
  const stateFromStoresArray1 = _require(647).useStateFromStoresArray(items1, () => lib.map((arg0) => product.getProduct(arg0)));
  const obj2 = _require(647);
  const items2 = [stateFromStoresArray3];
  stateFromStoresArray2 = _require(647).useStateFromStoresArray(items2, () => lib.map((closure_0) => productFetch.getProductFetch(closure_0)));
  const obj4 = _require(647);
  const items3 = [stateFromStoresArray3];
  stateFromStoresArray3 = _require(647).useStateFromStoresArray(items3, () => lib.map((closure_0) => productFetchBackedOff.isProductFetchBackedOff(closure_0)));
  const items4 = [first, stateFromStoresArray, stateFromStoresArray2, stateFromStoresArray1, arg1, stateFromStoresArray3];
  stateFromStoresArray1(() => {
    const entries = lib.entries();
    while (tmp2 !== undefined) {
      let tmp4 = stateFromStoresArray;
      let tmp5 = stateFromStoresArray(tmp3, 2);
      [tmp6, tmp8] = tmp5;
      let tmp9 = stateFromStoresArray;
      let tmp10 = stateFromStoresArray[tmp6];
      let tmp11 = stateFromStoresArray1;
      let tmp12 = stateFromStoresArray1[tmp6];
      let tmp13 = stateFromStoresArray2;
      let tmp14 = stateFromStoresArray2[tmp6];
      let tmp16 = true === dependencyMap;
      let tmp7 = tmp6;
      let tmp15 = dependencyMap;
      if (tmp16) {
        let tmp17 = tmp12;
        let type;
        if (tmp12 != null) {
          type = tmp12.type;
        }
        let tmp19 = lib;
        let tmp20 = dependencyMap;
        tmp16 = type === lib(1950).CollectiblesItemType.BUNDLE;
      }
      if (tmp16) {
        let tmp21 = tmp12;
        tmp16 = 0 === tmp12.items.length;
      }
      let tmp23 = tmp12;
      let tmp24 = null != tmp12;
      if (tmp24) {
        let tmp25 = tmp16;
        tmp24 = !tmp22;
      }
      if (!tmp24) {
        let tmp26 = tmp10;
        let tmp27 = null != tmp10;
        if (tmp27) {
          let tmp28 = tmp10;
          let tmp29 = closure_1_6;
          tmp27 = tmp10.productLine !== closure_1_6.COLLECTIBLES;
        }
        tmp24 = tmp27;
      }
      if (!tmp24) {
        let tmp30 = tmp14;
        let state;
        if (tmp14 != null) {
          state = tmp14.state;
        }
        tmp24 = "fetching" === state;
      }
      if (!tmp24) {
        let tmp32 = stateFromStoresArray3;
        let tmp33 = tmp6;
        tmp24 = stateFromStoresArray3[tmp7];
      }
      if (!tmp24) {
        let tmp34 = lib;
        let tmp35 = dependencyMap;
        let obj = lib(7213);
        let tmp36 = tmp8;
        obj = { includeBundles: null };
        obj[0] = tmp15;
        let collectiblesProduct = obj.fetchCollectiblesProduct(tmp8, obj);
      }
      continue;
    }
  }, items4);
  return stateFromStoresArray1.some((arg0, arg1) => {
    let state;
    if (stateFromStoresArray2[arg1] != null) {
      state = tmp2.state;
    }
    let tmp4 = "fetching" === state;
    if (!tmp4) {
      let tmp6 = null == arg0;
      if (tmp6) {
        let state1;
        if (stateFromStoresArray2[arg1] != null) {
          state1 = tmp7.state;
        }
        tmp6 = "error" !== state1;
      }
      tmp4 = tmp6;
    }
    return tmp4;
  });
};