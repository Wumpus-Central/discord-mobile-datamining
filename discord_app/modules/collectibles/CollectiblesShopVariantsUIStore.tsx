// discord_app/modules/collectibles/CollectiblesShopVariantsUIStore.tsx
import _mod4184 from "../../../_runtime/metro/04184__.js";
import CollectiblesProductUtils from "utils/CollectiblesProductUtils.tsx";
import identity from "../../../_runtime/metro/01244__.js";
import size from "../../../_runtime/metro/00002__.js";

const state = identity.createWithEqualityFn(() => {
  const obj = { selectionStates: new Map() };
  return obj;
}, _mod4184.shallow);
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
      let obj = { selectionStates: null };
      const _Map = Map;
      const map = new Map(selectionStates.selectionStates);
      obj = { selectedVariantIndex: tmp4 };
      obj.selectionStates = map.set(storeListingId.storeListingId, obj);
      tmp5 = obj;
    }
    return tmp5;
  });
};
