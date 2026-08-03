import identity from "identity";

let closure_2 = identity.createWithEqualityFn(() => {
  const obj = { selectionStates: null };
  obj[0] = new Map();
  return obj;
}, require("isIterable").shallow);
const result = require("useDefaultVariantIndex").fileFinishedImporting("modules/collectibles/CollectiblesShopVariantsUIStore.tsx");

export const useSelectedVariantIndex = function useSelectedVariantIndex(product) {
  const _require = product;
  let defaultVariantIndex = _require(8848).useDefaultVariantIndex(product);
  let tmp2 = state((selectionStates) => {
    let tmp2 = null;
    if (null != product) {
      tmp2 = null;
      if (obj.getIsVariantProduct(tmp)) {
        selectionStates = selectionStates.selectionStates;
        const value = selectionStates.get(tmp.storeListingId);
        let selectedVariantIndex;
        if (value != null) {
          selectedVariantIndex = value.selectedVariantIndex;
        }
        tmp2 = selectedVariantIndex;
      }
      obj = product(outer1_1[3]);
    }
    return tmp2;
  });
  if (null != tmp2) {
    const _Math = Math;
    defaultVariantIndex = Math.max(0, tmp2);
  }
  return defaultVariantIndex;
};
export const setSelectedVariantIndex = function setSelectedVariantIndex(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  state.setState((selectionStates) => {
    selectionStates = selectionStates.selectionStates;
    const value = selectionStates.get(storeListingId.storeListingId);
    let selectedVariantIndex;
    if (value != null) {
      selectedVariantIndex = value.selectedVariantIndex;
    }
    let tmp5 = selectionStates;
    if (selectedVariantIndex !== closure_1) {
      let obj = { selectionStates: null };
      const _Map = Map;
      const map = new Map(selectionStates.selectionStates);
      obj = { selectedVariantIndex: null };
      obj[0] = tmp4;
      obj[0] = map.set(storeListingId.storeListingId, obj);
      tmp5 = obj;
    }
    return tmp5;
  });
};