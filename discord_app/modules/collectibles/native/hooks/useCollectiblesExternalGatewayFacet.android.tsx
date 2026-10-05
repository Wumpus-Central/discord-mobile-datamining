// discord_app/modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx
import react from "../../../../../_runtime/00019_react.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import collectibles_CollectiblesUtils from "../CollectiblesUtils.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, cResult;

const useMemo = react.useMemo;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (cResult) => {
      let currentUser;
      let items1;
      let tmp4;
      let tmp5;
      const obj = react2;
      cResult = obj.c(7);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === cResult) {
        let tmp8;
        if (cResult[3] === stateFromStores) {
          tmp8 = cResult[4];
        }
        let tmp11;
        if (null != tmp8) {
          let tmp12;
          if (cResult[5] !== tmp8) {
            const obj2 = { line_items: items1 };
            items1 = [{ external_product_id: tmp8 }];
            const obj3 = { external_product_id: tmp8 };
            cResult[5] = tmp8;
            cResult[6] = obj2;
            tmp12 = obj2;
          } else {
            tmp12 = cResult[6];
          }
          tmp11 = tmp12;
        }
        return tmp11;
      }
      const tmpResult2 = collectibles_CollectiblesUtils;
      const collectibleGoogleSkuId = tmpResult2.getCollectibleGoogleSkuId(cResult, stateFromStores);
      cResult[2] = cResult;
      cResult[3] = stateFromStores;
      cResult[4] = collectibleGoogleSkuId;
      tmp8 = collectibleGoogleSkuId;
    }
  : (arg0) => {
      let closure_0;
      let currentUser;
      let stateFromStores;
      _require = arg0;
      let obj = require("get initialized");
      let items = [UserStore];
      stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [stateFromStores, arg0];
      return useMemo(() => {
        let items;
        const obj = collectibles_CollectiblesUtils;
        const collectibleGoogleSkuId = obj.getCollectibleGoogleSkuId(closure_0, stateFromStores);
        if (null != collectibleGoogleSkuId) {
          const obj2 = { line_items: items };
          items = [{ external_product_id: collectibleGoogleSkuId }];
          return obj2;
        }
      }, items1);
    };
const result = size.fileFinishedImporting(
  "modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx",
);

export default tmp2;
