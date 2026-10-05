// discord_app/modules/game_profile/hooks/useGameProfileShopCollection.tsx
import react2 from "../../../../_runtime/00576_react.js";
import GameProfileHttpUtils from "../GameProfileHttpUtils.tsx";
import useCollectiblesShopProducts from "../../collectibles/hooks/useCollectiblesShopProducts.tsx";
import react from "../../../../_runtime/00019_react.js";
import GameProfileStore from "../GameProfileStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c2;
let c3;
({ useEffect: c2, useMemo: c3 } = react);
let closure_5 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let hasFetched;
      let isFetching;
      let skuIds;
      let tmp6;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(11);
      const tmp = _require;
      const tmp2 = hasFetched;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameProfileStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          let result1;
          let shopCollectionSkuIds;
          const result = null != closure_0 && GameProfileStore.hasShopCollectionBeenFetched(closure_0);
          const obj = { hasFetched: result, isFetching: result1, skuIds: shopCollectionSkuIds };
          result1 = null != closure_0 && GameProfileStore.isShopCollectionFetching(closure_0);
          shopCollectionSkuIds = undefined;
          if (null != closure_0) {
            shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(closure_0);
          }
          return obj;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(tmp2[4]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6);
      hasFetched = stateFromStoresObject.hasFetched;
      ({ isFetching, skuIds } = stateFromStoresObject);
      if (cResult[3] === arg0) {
        let tmp8;
        let tmp9;
        if (cResult[4] === hasFetched) {
          tmp8 = cResult[5];
          tmp9 = cResult[6];
        }
        closure_2(tmp8, tmp9);
        if (skuIds == null) {
          skuIds = closure_5;
        }
        if (cResult[7] === hasFetched) {
          if (cResult[8] === isFetching) {
            let tmp13;
            if (cResult[9] === skuIds) {
              tmp13 = cResult[10];
            }
            return tmp13;
          }
        }
        const obj2 = { skuIds, hasFetched, isFetching };
        cResult[7] = hasFetched;
        cResult[8] = isFetching;
        cResult[9] = skuIds;
        cResult[10] = obj2;
        tmp13 = obj2;
      }
      const fn2 = function u() {
        const result = null == closure_0 || hasFetched || GameProfileStore.isShopCollectionFetching(closure_0);
        if (!result) {
          const obj = GameProfileHttpUtils;
          const shopCollection = obj.getShopCollection(closure_0);
        }
      };
      const items1 = [arg0, hasFetched];
      cResult[3] = arg0;
      cResult[4] = hasFetched;
      cResult[5] = fn2;
      cResult[6] = items1;
      tmp9 = items1;
      tmp8 = fn2;
    }
  : (arg0) => {
      let closure_0;
      let hasFetched;
      _require = arg0;
      let obj = require("get initialized");
      const items = [GameProfileStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        let result1;
        let shopCollectionSkuIds;
        const result = null != closure_0 && GameProfileStore.hasShopCollectionBeenFetched(closure_0);
        const obj = { hasFetched: result, isFetching: result1, skuIds: shopCollectionSkuIds };
        result1 = null != closure_0 && GameProfileStore.isShopCollectionFetching(closure_0);
        shopCollectionSkuIds = undefined;
        if (null != closure_0) {
          shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(closure_0);
        }
        return obj;
      });
      hasFetched = stateFromStoresObject.hasFetched;
      let skuIds = stateFromStoresObject.skuIds;
      const items1 = [arg0, hasFetched];
      const isFetching = stateFromStoresObject.isFetching;
      closure_2(() => {
        const result = null == closure_0 || hasFetched || GameProfileStore.isShopCollectionFetching(closure_0);
        if (!result) {
          const obj = GameProfileHttpUtils;
          const shopCollection = obj.getShopCollection(closure_0);
        }
      }, items1);
      if (skuIds == null) {
        skuIds = closure_5;
      }
      return { skuIds, hasFetched, isFetching };
    };
let closure_6 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let hasFetched;
      let skuIds;
      const obj = react2;
      const cResult = obj.c(15);
      const tmp4 = closure_6(arg0);
      ({ skuIds, hasFetched } = tmp4);
      const isFetching = tmp4.isFetching;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { flattenVariants: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmpResult = useCollectiblesShopProducts;
      const collectiblesShopProducts = tmpResult.useCollectiblesShopProducts(skuIds, first);
      if (cResult[1] === collectiblesShopProducts) {
        let tmp7;
        let tmp12;
        if (cResult[2] === skuIds) {
          tmp7 = cResult[3];
        }
        if (cResult[7] === collectiblesShopProducts) {
          let tmp11;
          if (cResult[8] === skuIds) {
            tmp11 = cResult[9];
          }
          let tmp15 = null != arg0;
          if (tmp15) {
            let tmp16 = !hasFetched;
            if (hasFetched) {
              tmp16 = isFetching;
            }
            if (!tmp16) {
              tmp16 = skuIds.length > 0 && tmp11;
            }
            tmp15 = tmp16;
          }
          if (cResult[12] === tmp7) {
            let tmp18;
            if (cResult[13] === tmp15) {
              tmp18 = cResult[14];
            }
            return tmp18;
          }
          const obj3 = { products: tmp7, isLoading: tmp15 };
          cResult[12] = tmp7;
          cResult[13] = tmp15;
          cResult[14] = obj3;
          tmp18 = obj3;
        }
        if (cResult[10] !== collectiblesShopProducts) {
          const fn = function v(arg0) {
            let state;
            if (collectiblesShopProducts[arg0] != null) {
              state = tmp.state;
            }
            return "loading" === state;
          };
          cResult[10] = collectiblesShopProducts;
          cResult[11] = fn;
          tmp12 = fn;
        } else {
          tmp12 = cResult[11];
        }
        const someResult = skuIds.some(tmp12);
        cResult[7] = collectiblesShopProducts;
        cResult[8] = skuIds;
        cResult[9] = someResult;
        tmp11 = someResult;
      }
      if (cResult[4] !== collectiblesShopProducts) {
        class S {
          constructor(arg0) {
            let product;
            if (collectiblesShopProducts[arg0] != null) {
              product = tmp.product;
            }
            return product;
          }
        }
        cResult[4] = collectiblesShopProducts;
        cResult[5] = S;
      } else {
        class S {
          constructor(arg0) {
            let product;
            if (collectiblesShopProducts[arg0] != null) {
              product = tmp.product;
            }
            return product;
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
        cResult[6] = F;
      } else {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
      }
      const mapped = skuIds.map(S);
      const found = mapped.filter(F);
      cResult[1] = collectiblesShopProducts;
      cResult[2] = skuIds;
      cResult[3] = found;
      tmp7 = found;
    }
  : (arg0) => {
      let tmp5;
      const tmp = closure_6(arg0);
      const skuIds = tmp.skuIds;
      const hasFetched = tmp.hasFetched;
      const isFetching = tmp.isFetching;
      const obj = useCollectiblesShopProducts;
      const collectiblesShopProducts = obj.useCollectiblesShopProducts(skuIds, { flattenVariants: true });
      const items = [skuIds, collectiblesShopProducts];
      const obj2 = {
        products: _false(() => {
          const mapped = skuIds.map((item) => {
            let product;
            if (collectiblesShopProducts[item] != null) {
              product = tmp.product;
            }
            return product;
          });
          return mapped.filter((item) => null != item);
        }, items),
        isLoading: tmp5,
      };
      tmp5 = null != arg0;
      if (tmp5) {
        let tmp6 = !hasFetched;
        if (hasFetched) {
          tmp6 = isFetching;
        }
        if (!tmp6) {
          tmp6 = skuIds.length > 0 && tmp4;
        }
        tmp5 = tmp6;
      }
      return obj2;
    };
let fn = (arg0) => closure_6(arg0).skuIds;
let result1 = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollectionState = tmp3;
export const useGameProfileShopCollection = fn;
export const useGameProfileShopCollectionProducts = tmp5;
