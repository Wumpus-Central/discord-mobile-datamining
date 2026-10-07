// discord_app/modules/game_profile/hooks/useGameProfileShopCollection.tsx
import c from "../../../../_runtime/00576_c.js";
import GameProfileHttpUtils from "../GameProfileHttpUtils.tsx";
import useCollectiblesShopProducts from "../../collectibles/hooks/useCollectiblesShopProducts.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameProfileStore from "../GameProfileStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

({ useEffect: c2, useMemo: c3 } = noop);
let closure_5 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const _require = arg0;
      const cResult = require("c").c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameProfileStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          let result = null != closure_0;
          if (result) {
            result = GameProfileStore.hasShopCollectionBeenFetched(closure_0);
          }
          const obj = { hasFetched: result, isFetching: null, skuIds: null };
          let result1 = null != closure_0;
          if (result1) {
            result1 = GameProfileStore.isShopCollectionFetching(closure_0);
          }
          obj.isFetching = result1;
          let shopCollectionSkuIds;
          if (null != closure_0) {
            shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(closure_0);
          }
          obj.skuIds = shopCollectionSkuIds;
          return obj;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp6);
      hasFetched = stateFromStoresObject.hasFetched;
      ({ isFetching, skuIds } = stateFromStoresObject);
      if (cResult[3] === arg0) {
        if (cResult[4] === hasFetched) {
          let tmp8 = cResult[5];
          let tmp9 = cResult[6];
        }
        closure_2(tmp8, tmp9);
        if (skuIds == null) {
          skuIds = closure_5;
        }
        if (cResult[7] === hasFetched) {
          if (cResult[8] === isFetching) {
            if (cResult[9] === skuIds) {
              let tmp13 = cResult[10];
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
        let result = null == closure_0 || hasFetched;
        if (!result) {
          result = GameProfileStore.isShopCollectionFetching(closure_0);
        }
        if (!result) {
          const shopCollection = GameProfileHttpUtils.getShopCollection(closure_0);
        }
      };
      const items1 = [arg0, hasFetched];
      cResult[3] = arg0;
      cResult[4] = hasFetched;
      cResult[5] = fn2;
      cResult[6] = items1;
      tmp9 = items1;
      tmp8 = fn2;
      const tmpResult = require("initialize");
    }
  : (arg0) => {
      const _require = arg0;
      const items = [GameProfileStore];
      const isFetching = require("initialize").useStateFromStoresObject(items, () => {
        let result = null != closure_0;
        if (result) {
          result = GameProfileStore.hasShopCollectionBeenFetched(closure_0);
        }
        const obj = { hasFetched: result, isFetching: null, skuIds: null };
        let result1 = null != closure_0;
        if (result1) {
          result1 = GameProfileStore.isShopCollectionFetching(closure_0);
        }
        obj.isFetching = result1;
        let shopCollectionSkuIds;
        if (null != closure_0) {
          shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(closure_0);
        }
        obj.skuIds = shopCollectionSkuIds;
        return obj;
      });
      hasFetched = isFetching.hasFetched;
      let skuIds = isFetching.skuIds;
      const items1 = [arg0, hasFetched];
      closure_2(() => {
        let result = null == closure_0 || hasFetched;
        if (!result) {
          result = GameProfileStore.isShopCollectionFetching(closure_0);
        }
        if (!result) {
          const shopCollection = GameProfileHttpUtils.getShopCollection(closure_0);
        }
      }, items1);
      if (skuIds == null) {
        skuIds = closure_5;
      }
      return { skuIds, hasFetched, isFetching: isFetching.isFetching };
    };
let closure_6 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
let fn = (arg0) => closure_6(arg0).skuIds;
let result1 = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollectionState = tmp3;
export const useGameProfileShopCollection = fn;
export const useGameProfileShopCollectionProducts = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(15);
      const tmp4 = closure_6(arg0);
      ({ skuIds, hasFetched } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { flattenVariants: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const collectiblesShopProducts = useCollectiblesShopProducts.useCollectiblesShopProducts(skuIds, first);
      if (cResult[1] === collectiblesShopProducts) {
        if (cResult[2] === skuIds) {
          if (cResult[7] === collectiblesShopProducts) {
            if (cResult[8] === skuIds) {
              let tmp15 = null != arg0;
              if (tmp15) {
                let isFetching = !hasFetched;
                if (hasFetched) {
                  isFetching = tmp4.isFetching;
                }
                if (!isFetching) {
                  isFetching = skuIds.length > 0 && tmp10;
                  const tmp16 = skuIds.length > 0 && tmp10;
                }
                tmp15 = isFetching;
              }
              if (cResult[12] === tmp7) {
                if (cResult[13] === tmp15) {
                  let tmp17 = cResult[14];
                }
                return tmp17;
              }
              const obj3 = { products: tmp7, isLoading: tmp15 };
              cResult[12] = tmp7;
              cResult[13] = tmp15;
              cResult[14] = obj3;
              tmp17 = obj3;
            }
          }
          if (cResult[10] !== collectiblesShopProducts) {
            const fn = function v(arg0) {
              state = undefined;
              if (collectiblesShopProducts[arg0] != null) {
                state = tmp.state;
              }
              return "loading" === state;
            };
            cResult[10] = collectiblesShopProducts;
            cResult[11] = fn;
            let tmp11 = fn;
          } else {
            tmp11 = cResult[11];
          }
          const someResult = skuIds.some(tmp11);
          cResult[7] = collectiblesShopProducts;
          cResult[8] = skuIds;
          cResult[9] = someResult;
        }
      }
      if (cResult[4] !== collectiblesShopProducts) {
        class S {
          constructor(arg0) {
            tmp = closure_0[arg0];
            product = undefined;
            if (tmp != null) {
              product = tmp.product;
            }
            return product;
          }
        }
        cResult[4] = collectiblesShopProducts;
        cResult[5] = S;
        let mapped = S;
      } else {
        class S {
          constructor(arg0) {
            tmp = closure_0[arg0];
            product = undefined;
            if (tmp != null) {
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
      mapped = skuIds.map(mapped);
      const found = mapped.filter(F);
      cResult[1] = collectiblesShopProducts;
      cResult[2] = skuIds;
      cResult[3] = found;
      const tmpResult = useCollectiblesShopProducts;
    }
  : (arg0) => {
      const tmp = closure_6(arg0);
      const skuIds = tmp.skuIds;
      const hasFetched = tmp.hasFetched;
      const collectiblesShopProducts = useCollectiblesShopProducts.useCollectiblesShopProducts(skuIds, {
        flattenVariants: true,
      });
      const items = [skuIds, collectiblesShopProducts];
      const obj2 = {
        products: React3(() => {
          const mapped = skuIds.map((item) => {
            let product;
            if (collectiblesShopProducts[item] != null) {
              product = tmp.product;
            }
            return product;
          });
          return mapped.filter((item) => null != item);
        }, items),
        isLoading: null,
      };
      let tmp5 = null != arg0;
      if (tmp5) {
        let isFetching = !hasFetched;
        if (hasFetched) {
          isFetching = tmp.isFetching;
        }
        if (!isFetching) {
          isFetching = skuIds.length > 0 && tmp4;
          const tmp6 = skuIds.length > 0 && tmp4;
        }
        tmp5 = isFetching;
      }
      obj2.isLoading = tmp5;
      return obj2;
    };
