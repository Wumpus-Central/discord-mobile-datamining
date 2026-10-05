// discord_app/modules/collectibles/hooks/useCollectiblesData.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp10;
      let tmp12;
      let tmp6;
      let tmp8;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [CollectiblesCategoryStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const items = [
            CollectiblesCategoryStore.getCategoryForProduct(closure_0),
            CollectiblesCategoryStore.getProduct(closure_0),
          ];
          return items;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("useStateFromStores");
      [tmp8, tmp9] = tmpResult.useStateFromStoresArray(first, tmp6);
      _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp6), 2);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [CollectiblesPurchaseStore];
        cResult[3] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function y() {
          return CollectiblesPurchaseStore.getPurchase(closure_0);
        };
        cResult[4] = arg0;
        cResult[5] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      const tmpResult2 = require("useStateFromStores");
      const stateFromStores = tmpResult2.useStateFromStores(tmp10, tmp12);
      if (cResult[6] === tmp8) {
        if (cResult[7] === tmp9) {
          let tmp14;
          if (cResult[8] === stateFromStores) {
            tmp14 = cResult[9];
          }
          return tmp14;
        }
      }
      const obj2 = { category: tmp8, product: tmp9, purchase: stateFromStores };
      cResult[6] = tmp8;
      cResult[7] = tmp9;
      cResult[8] = stateFromStores;
      cResult[9] = obj2;
      tmp14 = obj2;
    }
  : (arg0) => {
      let closure_0;
      let items1;
      let obj3;
      _require = arg0;
      let items = [CollectiblesCategoryStore];
      const obj = require("useStateFromStores");
      const tmp = _slicedToArray(
        obj.useStateFromStoresArray(items, () => {
          const items = [
            CollectiblesCategoryStore.getCategoryForProduct(closure_0),
            CollectiblesCategoryStore.getProduct(closure_0),
          ];
          return items;
        }),
        2,
      );
      const obj2 = {
        category: tmp[0],
        product: tmp[1],
        purchase: obj3.useStateFromStores(items1, () => CollectiblesPurchaseStore.getPurchase(closure_0)),
      };
      items1 = [CollectiblesPurchaseStore];
      obj3 = require("useStateFromStores");
      return obj2;
    };
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default tmp2;
