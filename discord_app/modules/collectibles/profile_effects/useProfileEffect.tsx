// discord_app/modules/collectibles/profile_effects/useProfileEffect.tsx
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

const require = globalThis.__r;

require = fn;
const isProfileEffectRecord = fn(7269).isProfileEffectRecord;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useProfileEffect(arg0) {
      _require = arg0;
      const cResult = require("c").c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CollectiblesCategoryStore, CollectiblesPurchaseStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          if (null != closure_0) {
            const product = CollectiblesCategoryStore.getProduct(closure_0);
            let first;
            if (product != null) {
              first = product.items[0];
            }
            if (isProfileEffectRecord(first)) {
              return product.items[0];
            } else {
              const purchase = CollectiblesPurchaseStore.getPurchase(closure_0);
              let first1;
              if (purchase != null) {
                first1 = purchase.items[0];
              }
              let first2;
              if (isProfileEffectRecord(first1)) {
                first2 = purchase.items[0];
              }
              return first2;
            }
          }
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      dependencyMap = tmp9;
      if (cResult[3] === (null != arg0 && null == stateFromStores)) {
        if (cResult[4] === arg0) {
          let tmp10 = cResult[5];
          let tmp11 = cResult[6];
        }
        const effect = noop.useEffect(tmp10, tmp11);
        return stateFromStores;
      }
      const fn2 = function v() {
        if (closure_1) {
          const result = CollectiblesActionCreators.maybeFetchCollectiblesProduct(closure_0);
        }
      };
      const items1 = [null != arg0 && null == stateFromStores, arg0];
      cResult[3] = null != arg0 && null == stateFromStores;
      cResult[4] = arg0;
      cResult[5] = fn2;
      cResult[6] = items1;
      tmp11 = items1;
      tmp10 = fn2;
      const tmpResult = require("initialize");
    }
  : function useProfileEffect(arg0) {
      _require = arg0;
      const items = [CollectiblesCategoryStore, CollectiblesPurchaseStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        if (null != closure_0) {
          const product = CollectiblesCategoryStore.getProduct(closure_0);
          let first;
          if (product != null) {
            first = product.items[0];
          }
          if (isProfileEffectRecord(first)) {
            return product.items[0];
          } else {
            const purchase = CollectiblesPurchaseStore.getPurchase(closure_0);
            let first1;
            if (purchase != null) {
              first1 = purchase.items[0];
            }
            let first2;
            if (isProfileEffectRecord(first1)) {
              first2 = purchase.items[0];
            }
            return first2;
          }
        }
      });
      dependencyMap = tmp2;
      const items1 = [null != arg0 && null == stateFromStores, arg0];
      const effect = noop.useEffect(() => {
        if (closure_1) {
          const result = CollectiblesActionCreators.maybeFetchCollectiblesProduct(closure_0);
        }
      }, items1);
      return stateFromStores;
    };
