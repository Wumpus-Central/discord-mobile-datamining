// discord_app/modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx
import _mod19 from "../../../../../_runtime/metro/00019__.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import collectibles_CollectiblesUtils from "../CollectiblesUtils.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting(
  "modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (cResult) => {
      cResult = c.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === cResult) {
        if (cResult[3] === stateFromStores) {
          let tmp8 = cResult[4];
        }
        if (null != tmp8) {
          if (cResult[5] !== tmp8) {
            const obj2 = { line_items: null };
            const obj3 = { external_product_id: tmp8 };
            const items1 = [obj3];
            obj2.line_items = items1;
            cResult[5] = tmp8;
            cResult[6] = obj2;
          }
        }
      }
      const tmpResult = initialize;
      const collectibleGoogleSkuId = collectibles_CollectiblesUtils.getCollectibleGoogleSkuId(cResult, stateFromStores);
      cResult[2] = cResult;
      cResult[3] = stateFromStores;
      cResult[4] = collectibleGoogleSkuId;
      tmp8 = collectibleGoogleSkuId;
      const tmpResult2 = collectibles_CollectiblesUtils;
    }
  : (arg0) => {
      _require = arg0;
      let items = [UserStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [stateFromStores, arg0];
      return useMemo(() => {
        const collectibleGoogleSkuId = collectibles_CollectiblesUtils.getCollectibleGoogleSkuId(
          closure_0,
          stateFromStores,
        );
        if (null != collectibleGoogleSkuId) {
          const obj2 = { line_items: null };
          const obj3 = { external_product_id: collectibleGoogleSkuId };
          const items = [obj3];
          obj2.line_items = items;
          return obj2;
        }
      }, items1);
    };
