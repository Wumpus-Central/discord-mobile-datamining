// discord_app/modules/collectibles/native/hooks/useFeedBlockSkuIds.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import ShopHomeSortType from "../../../../../discord_common/js/shared/shared-constants/ShopHomeSortType.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConsentStore from "../../../../stores/ConsentStore.tsx";

const require = globalThis.__r;

require = fn;
const Consents = fn(1085).Consents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useFeedBlockSkuIds.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useFeedBlockSkuIds(sortedSkuIds) {
      const cResult = c.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConsentStore];
        class S {
          constructor() {
            return closure_1_3.hasConsented(closure_1_4.PERSONALIZATION);
          }
        }
        cResult[0] = items;
        cResult[1] = S;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, S);
      let sortedSkuIds1;
      if (sortedSkuIds != null) {
        sortedSkuIds1 = sortedSkuIds.sortedSkuIds;
      }
      if (cResult[2] !== sortedSkuIds1) {
        let items1;
        if (sortedSkuIds != null) {
          sortedSkuIds = sortedSkuIds.sortedSkuIds;
          if (sortedSkuIds != null) {
            items1 = sortedSkuIds[ShopHomeSortType.ShopHomeSortType.RECOMMENDED];
          }
        }
        if (items1 == null) {
          items1 = [];
        }
        class S {
          constructor() {
            return closure_1_3.hasConsented(closure_1_4.PERSONALIZATION);
          }
        }
        if (sortedSkuIds != null) {
          const sortedSkuIds2 = sortedSkuIds.sortedSkuIds;
        }
        cResult[2] = sortedSkuIds2;
        cResult[3] = items1;
        let arr2 = items1;
      } else {
        arr2 = cResult[3];
      }
      let sortedSkuIds5;
      if (sortedSkuIds != null) {
        sortedSkuIds5 = sortedSkuIds.sortedSkuIds;
      }
      if (cResult[4] !== sortedSkuIds5) {
        let items2;
        if (sortedSkuIds != null) {
          const sortedSkuIds3 = sortedSkuIds.sortedSkuIds;
          if (sortedSkuIds3 != null) {
            items2 = sortedSkuIds3[ShopHomeSortType.ShopHomeSortType.POPULAR];
          }
        }
        if (items2 == null) {
          items2 = [];
        }
        class S {
          constructor() {
            return closure_1_3.hasConsented(closure_1_4.PERSONALIZATION);
          }
        }
        if (sortedSkuIds != null) {
          const sortedSkuIds4 = sortedSkuIds.sortedSkuIds;
        }
        cResult[4] = sortedSkuIds4;
        cResult[5] = items2;
        let arr4 = items2;
      } else {
        arr4 = cResult[5];
      }
      let tmp10 = stateFromStores;
      if (stateFromStores) {
        tmp10 = arr2.length > 0;
      }
      if (tmp10) {
        arr4 = arr2;
      }
      if (cResult[6] !== arr4) {
        const substr = arr4.slice(0, 44);
        class S {
          constructor() {
            return closure_1_3.hasConsented(closure_1_4.PERSONALIZATION);
          }
        }
        cResult[6] = arr4;
        cResult[7] = substr;
        let tmp11 = substr;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp10) {
        if (cResult[9] === arr4) {
          if (cResult[10] === tmp11) {
            let tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj2 = { shownSkuIds: arr4, resolvedSkuIds: tmp11, isPersonalized: tmp10 };
      cResult[8] = tmp10;
      cResult[9] = arr4;
      cResult[10] = tmp11;
      cResult[11] = obj2;
      tmp13 = obj2;
      const tmpResult = initialize;
    }
  : function useFeedBlockSkuIds(sortedSkuIds) {
      _require = sortedSkuIds;
      let items = [ConsentStore];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        ConsentStore.hasConsented(constants.PERSONALIZATION),
      );
      sortedSkuIds = undefined;
      if (sortedSkuIds != null) {
        sortedSkuIds = sortedSkuIds.sortedSkuIds;
      }
      let items1 = [sortedSkuIds, stateFromStores];
      return noop.useMemo(() => {
        let items;
        if (sortedSkuIds != null) {
          sortedSkuIds = sortedSkuIds.sortedSkuIds;
          if (sortedSkuIds != null) {
            items = sortedSkuIds[ShopHomeSortType.ShopHomeSortType.RECOMMENDED];
          }
        }
        if (items == null) {
          items = [];
        }
        let items1;
        if (sortedSkuIds != null) {
          const sortedSkuIds2 = sortedSkuIds.sortedSkuIds;
          if (sortedSkuIds2 != null) {
            items1 = sortedSkuIds2[ShopHomeSortType.ShopHomeSortType.POPULAR];
          }
        }
        if (items1 == null) {
          items1 = [];
        }
        let tmp6 = stateFromStores;
        if (stateFromStores) {
          tmp6 = items.length > 0;
        }
        if (tmp6) {
          items1 = items;
        }
        return { shownSkuIds: items1, resolvedSkuIds: items1.slice(0, 44), isPersonalized: tmp6 };
      }, items1);
    };
export const MAX_FEED_PRODUCTS = 36;
