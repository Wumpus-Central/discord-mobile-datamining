// === Module 9231: useSelectedVariantIndex ===

// Module 9231 (useSelectedVariantIndex)
import obj132 from "obj132" /* 2 */;
import isIterable from "isIterable" /* 4006 */;
import identity from "identity" /* 700 */;

let closure_2 = identity.createWithEqualityFn(() => {
  const obj = { selectionStates: new Map() };
  return obj;
}, isIterable.shallow);
const result = obj132.fileFinishedImporting("modules/collectibles/CollectiblesShopVariantsUIStore.tsx");

export const useSelectedVariantIndex = function useSelectedVariantIndex(product) {
  const _require = product;
  let defaultVariantIndex = _require(9173).useDefaultVariantIndex(product);
  let tmp2 = state((selectionStates) => {
    let tmp2 = null;
    if (null != product) {
      tmp2 = null;
      if (obj.getIsVariantProduct(product)) {
        selectionStates = selectionStates.selectionStates;
        const value = selectionStates.get(product.storeListingId);
        let selectedVariantIndex;
        if (value != null) {
          selectedVariantIndex = value.selectedVariantIndex;
        }
        tmp2 = selectedVariantIndex;
      }
      obj = product(dependencyMap[3]);
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
  closure_0 = arg0;
  closure_1 = arg1;
  state.setState((selectionStates) => {
    selectionStates = selectionStates.selectionStates;
    const value = selectionStates.get(storeListingId.storeListingId);
    let selectedVariantIndex;
    if (value != null) {
      selectedVariantIndex = value.selectedVariantIndex;
    }
    let tmp5 = selectionStates;
    if (selectedVariantIndex !== closure_1) {
      const _Map = Map;
      const map = new Map(selectionStates.selectionStates);
      const obj = { selectedVariantIndex: null };
      obj[0] = tmp4;
      obj[0] = map.set(storeListingId.storeListingId, obj);
      tmp5 = obj;
    }
    return tmp5;
  });
};