// discord_app/modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx
import useMaybeFetchCollectiblesCategoriesDefault from "useMaybeFetchCollectiblesCategories.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export const useFetchCollectiblesProductCategory = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchCollectiblesProductCategory(arg0) {
      _require = arg0;
      const cResult = require("c").c(6);
      useMaybeFetchCollectiblesCategoriesDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [CollectiblesCategoryStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const items = [
            CollectiblesCategoryStore.isFetchingCategories,
            CollectiblesCategoryStore.getCategoryForProduct(closure_0),
          ];
          return items;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = require("c");
      const tmpResult = require("useStateFromStores");
      [tmp9, tmp10] = require("useStateFromStores").useStateFromStoresArray(first, tmp7);
      if (cResult[3] === tmp10) {
        if (cResult[4] === tmp9) {
          let tmp11 = cResult[5];
        }
        return tmp11;
      }
      const obj2 = { isFetching: tmp9, category: tmp10 };
      cResult[3] = tmp10;
      cResult[4] = tmp9;
      cResult[5] = obj2;
      tmp11 = obj2;
      const tmp8 = _slicedToArray(require("useStateFromStores").useStateFromStoresArray(first, tmp7), 2);
    }
  : function useFetchCollectiblesProductCategory(arg0) {
      _require = arg0;
      useMaybeFetchCollectiblesCategoriesDefault();
      let items = [CollectiblesCategoryStore];
      const tmp2 = _slicedToArray(
        require("useStateFromStores").useStateFromStoresArray(items, () => {
          const items = [
            CollectiblesCategoryStore.isFetchingCategories,
            CollectiblesCategoryStore.getCategoryForProduct(closure_0),
          ];
          return items;
        }),
        2,
      );
      return { isFetching: tmp2[0], category: tmp2[1] };
    };
