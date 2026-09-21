// === Module 9109: CollectiblesShopVariantsUIStore ===

// Module 9109 (CollectiblesShopVariantsUIStore)
import _mod4379 from "module_4379" /* 4379 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7795 */;
import identity from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const state = identity.createWithEqualityFn(() => {
  const obj = { selectionStates: new Map() };
  return obj;
}, _mod4379.shallow);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopVariantsUIStore.tsx");

export const useSelectedVariantIndex = function useSelectedVariantIndex(product) {
  _require = product;
  let defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(product);
  let tmp2 = state((selectionStates) => {
    let tmp2 = null;
    if (null != product) {
      tmp2 = null;
      if (obj.getIsVariantProduct(product)) {
        selectionStates = selectionStates.selectionStates;
        value = selectionStates.get(product.storeListingId);
        let selectedVariantIndex;
        if (value != null) {
          selectedVariantIndex = value.selectedVariantIndex;
        }
        tmp2 = selectedVariantIndex;
      }
      obj = CollectiblesProductUtils;
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
  const storeListingId = arg0;
  closure_1 = arg1;
  state.setState((selectionStates) => {
    selectionStates = selectionStates.selectionStates;
    value = selectionStates.get(storeListingId.storeListingId);
    let selectedVariantIndex;
    if (value != null) {
      selectedVariantIndex = value.selectedVariantIndex;
    }
    let tmp5 = selectionStates;
    if (selectedVariantIndex !== closure_1) {
      const obj = { selectionStates: null };
      const _Map = Map;
      const map = new Map(selectionStates.selectionStates);
      const obj2 = { selectedVariantIndex: tmp4 };
      obj.selectionStates = map.set(storeListingId.storeListingId, obj2);
      tmp5 = obj;
    }
    return tmp5;
  });
};