// discord_app/modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import collectibles_CollectiblesUtils from "../CollectiblesUtils.tsx";
import useMobilePurchaseSKUDefault from "../../../billing/native/hooks/useMobilePurchaseSKU.android.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
let closure_3 = ["product"];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (product) => {
      const cResult = c.c(12);
      if (cResult[0] !== product) {
        product = product.product;
        const tmp8 = _objectWithoutProperties(product, closure_3);
        cResult[0] = product;
        cResult[1] = product;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = product;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function f() {
          return currentUser.getCurrentUser();
        };
        cResult[3] = items;
        cResult[4] = fn;
        let tmp10 = fn;
        let tmp9 = items;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const stateFromStores = initialize.useStateFromStores(tmp9, tmp10);
      if (cResult[5] === tmp4) {
        if (cResult[6] === stateFromStores) {
          let tmp13 = cResult[7];
        }
        if (cResult[8] === tmp13) {
          if (cResult[9] === tmp4.skuId) {
            if (cResult[10] === tmp5) {
              let tmp15 = cResult[11];
            }
            return useMobilePurchaseSKUDefault(tmp15);
          }
        }
        const obj2 = {};
        const merged = Object.assign(tmp5);
        obj2.skuId = tmp4.skuId;
        obj2.platformSkuId = tmp13;
        obj2.isFreeForStaffSelfPurchase = true;
        cResult[8] = tmp13;
        cResult[9] = tmp4.skuId;
        cResult[10] = tmp5;
        cResult[11] = obj2;
        tmp15 = obj2;
      }
      const tmpResult = initialize;
      const collectibleGoogleSkuId = collectibles_CollectiblesUtils.getCollectibleGoogleSkuId(tmp4, stateFromStores);
      cResult[5] = tmp4;
      cResult[6] = stateFromStores;
      cResult[7] = collectibleGoogleSkuId;
      tmp13 = collectibleGoogleSkuId;
      const tmpResult2 = collectibles_CollectiblesUtils;
    }
  : (product) => {
      product = product.product;
      const merged = Object.assign(product, Object.assign({ product: 0 }));
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      const collectibleGoogleSkuId = collectibles_CollectiblesUtils.getCollectibleGoogleSkuId(product, stateFromStores);
      const obj3 = {};
      const merged1 = Object.assign(merged);
      obj3.skuId = product.skuId;
      obj3.platformSkuId = collectibleGoogleSkuId;
      obj3.isFreeForStaffSelfPurchase = true;
      return useMobilePurchaseSKUDefault(obj3);
    };
