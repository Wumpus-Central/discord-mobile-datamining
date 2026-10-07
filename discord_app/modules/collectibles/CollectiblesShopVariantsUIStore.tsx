// discord_app/modules/collectibles/CollectiblesShopVariantsUIStore.tsx
import _mod4498 from "../../../_runtime/metro/04498__.js";
import CollectiblesProductUtils from "utils/CollectiblesProductUtils.tsx";
import identity from "../../../_runtime/metro/01254__.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const state = identity.createWithEqualityFn(() => {
  const obj = { selectionStates: new Map() };
  return obj;
}, _mod4498.shallow);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopVariantsUIStore.tsx");

export const useSelectedVariantIndex = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(2);
      let obj = require("c");
      let defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(arg0);
      if (cResult[0] !== arg0) {
        const fn = function s(selectionStates) {
          let tmp2 = null;
          if (null != storeListingId) {
            tmp2 = null;
            if (obj.getIsVariantProduct(storeListingId)) {
              selectionStates = selectionStates.selectionStates;
              value = selectionStates.get(storeListingId.storeListingId);
              let selectedVariantIndex;
              if (value != null) {
                selectedVariantIndex = value.selectedVariantIndex;
              }
              tmp2 = selectedVariantIndex;
            }
            obj = CollectiblesProductUtils;
          }
          return tmp2;
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      const tmp4 = state(tmp3);
      if (null != tmp4) {
        const _Math = Math;
        defaultVariantIndex = Math.max(0, tmp4);
      }
      return defaultVariantIndex;
    }
  : (arg0) => {
      _require = arg0;
      let defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(arg0);
      let tmp2 = state((selectionStates) => {
        let tmp2 = null;
        if (null != storeListingId) {
          tmp2 = null;
          if (obj.getIsVariantProduct(storeListingId)) {
            selectionStates = selectionStates.selectionStates;
            value = selectionStates.get(storeListingId.storeListingId);
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
