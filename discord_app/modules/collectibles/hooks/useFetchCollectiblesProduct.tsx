// discord_app/modules/collectibles/hooks/useFetchCollectiblesProduct.tsx
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
let SKUProductLines = fn(1085).SKUProductLines;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProduct.tsx");

export const useFetchCollectiblesProduct = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchCollectiblesProduct(arg0, includeBundles) {
      _require = arg0;
      dependencyMap = includeBundles;
      const cResult = require("c").c(28);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [SKUStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function f() {
          value = null;
          if (null != closure_0) {
            value = SKUStore.get(tmp);
          }
          return value;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
      let tmp8 = null != stateFromStores;
      if (tmp8) {
        tmp8 = stateFromStores.productLine !== SKUProductLines.COLLECTIBLES;
      }
      _slicedToArray = tmp8;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [stateFromStores1];
        cResult[3] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function b() {
          const items = [
            CollectiblesCategoryStore.getProduct(closure_0),
            CollectiblesCategoryStore.getProductFetch(closure_0),
          ];
          return items;
        };
        cResult[4] = arg0;
        cResult[5] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      const tmpResult = require("useStateFromStores");
      const tmp13 = _slicedToArray(require("useStateFromStores").useStateFromStoresArray(tmp10, tmp12), 2);
      const first1 = tmp13[0];
      SKUStore = tmp15;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [stateFromStores1];
        cResult[6] = items2;
        let tmp16 = items2;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] !== arg0) {
        class L {
          constructor() {
            return closure_5.isProductFetchBackedOff(closure_0);
          }
        }
        cResult[7] = arg0;
        cResult[8] = L;
      } else {
        class L {
          constructor() {
            return closure_5.isProductFetchBackedOff(closure_0);
          }
        }
      }
      const tmpResult3 = require("useStateFromStores");
      stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp16, L);
      let tmp20 = true === includeBundles;
      if (tmp20) {
        class L {
          constructor() {
            return closure_5.isProductFetchBackedOff(closure_0);
          }
        }
        if (first1 != null) {
          class L {
            constructor() {
              return closure_5.isProductFetchBackedOff(closure_0);
            }
          }
        }
        tmp20 = tmp21 === tmp(1992).CollectiblesItemType.BUNDLE;
      }
      if (tmp20) {
        class L {
          constructor() {
            return closure_5.isProductFetchBackedOff(closure_0);
          }
        }
        tmp20 = 0 === first1.items.length;
      }
      SKUProductLines = tmp20;
      if (tmp13[1] != null) {
        class L {
          constructor() {
            return closure_5.isProductFetchBackedOff(closure_0);
          }
        }
      }
      if (cResult[9] === undefined) {
        class L {
          constructor() {
            return closure_5.isProductFetchBackedOff(closure_0);
          }
        }
      }
      if (tmp13[1] != null) {
        class L {
          constructor() {
            return closure_5.isProductFetchBackedOff(closure_0);
          }
        }
      }
      class E {
        constructor() {
          tmp2 = null == closure_0;
          tmp = closure_0;
          if (!tmp2) {
            tmp3 = closure_3;
            tmp4 = null != closure_3;
            if (tmp4) {
              tmp5 = closure_6;
              tmp4 = !closure_6;
            }
            tmp2 = tmp4;
          }
          if (!tmp2) {
            tmp2 = closure_2;
          }
          if (!tmp2) {
            state = undefined;
            if (closure_4 != null) {
              state = closure_4.state;
            }
            str = "fetching";
            tmp2 = "fetching" === state;
          }
          if (!tmp2) {
            tmp2 = closure_5;
          }
          if (!tmp2) {
            tmp7 = closure_0;
            tmp8 = closure_1;
            obj = closure_0(closure_1[9]);
            obj1 = { includeBundles: null };
            tmp9 = closure_1;
            obj1.includeBundles = closure_1;
            collectiblesProduct = obj.fetchCollectiblesProduct(tmp, obj1);
          }
          return;
        }
      }
      cResult[9] = undefined;
      cResult[10] = includeBundles;
      cResult[11] = stateFromStores1;
      cResult[12] = tmp8;
      cResult[13] = tmp20;
      cResult[14] = first1;
      cResult[15] = arg0;
      cResult[16] = E;
      const tmpResult4 = require("useStateFromStores");
    }
  : function useFetchCollectiblesProduct(arg0, includeBundles) {
      _require = arg0;
      dependencyMap = includeBundles;
      let items = [state];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
        value = null;
        if (null != closure_0) {
          value = SKUStore.get(tmp);
        }
        return value;
      });
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        tmp4 = stateFromStores.productLine !== SKUProductLines.COLLECTIBLES;
      }
      _slicedToArray = tmp4;
      let obj = require("useStateFromStores");
      const items1 = [stateFromStores1];
      const tmp6 = _slicedToArray(
        require("useStateFromStores").useStateFromStoresArray(items1, () => {
          const items = [
            CollectiblesCategoryStore.getProduct(closure_0),
            CollectiblesCategoryStore.getProductFetch(closure_0),
          ];
          return items;
        }),
        2,
      );
      const product = tmp6[0];
      state = tmp8;
      const tmpResult = require("useStateFromStores");
      const items2 = [stateFromStores1];
      stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () =>
        CollectiblesCategoryStore.isProductFetchBackedOff(closure_0),
      );
      let tmp10 = true === includeBundles;
      if (tmp10) {
        let type;
        if (product != null) {
          type = product.type;
        }
        tmp10 = type === tmp(1992).CollectiblesItemType.BUNDLE;
      }
      if (tmp10) {
        tmp10 = 0 === product.items.length;
      }
      SKUProductLines = tmp10;
      const items3 = [arg0, product, tmp4, tmp6[1], includeBundles, tmp10, stateFromStores1];
      product(() => {
        let tmp2 = null == closure_0;
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
          state = undefined;
          if (state != null) {
            state = state.state;
          }
          tmp2 = "fetching" === state;
        }
        if (!tmp2) {
          tmp2 = stateFromStores1;
        }
        if (!tmp2) {
          const obj2 = { includeBundles };
          const collectiblesProduct = CollectiblesActionCreators.fetchCollectiblesProduct(closure_0, obj2);
        }
      }, items3);
      let obj2 = { product, isFetching: null };
      state = undefined;
      if (tmp6[1] != null) {
        state = tmp8.state;
      }
      obj2.isFetching = "fetching" === state;
      return obj2;
    };
