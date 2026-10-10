// discord_app/modules/collectibles/native/hooks/useOpenDeepLinkedProduct.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import CollectiblesProductUtils from "../../utils/CollectiblesProductUtils.tsx";
import openProductDetailsActionSheet from "../openProductDetailsActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CollectiblesShopStore from "../../CollectiblesShopStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useOpenDeepLinkedProduct.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useOpenDeepLinkedProduct(analyticsLocations) {
      const cResult = analyticsLocations(stateFromStores[3]).c(10);
      analyticsLocations = analyticsLocations.analyticsLocations;
      const shopAnalyticsContext = analyticsLocations.shopAnalyticsContext;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CollectiblesShopStore];
        const fn = function c() {
          return initialProductSkuId.initialProductSkuId;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = analyticsLocations(stateFromStores[3]);
      stateFromStores = undefined;
      if (analyticsLocations.enabled) {
        stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      }
      if (cResult[2] !== (null != stateFromStores)) {
        let obj2 = { needsCategory: false, seedCategoryStore: true, shouldFetchProduct: tmp8 };
        cResult[2] = tmp8;
        cResult[3] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      tmpResult = analyticsLocations(stateFromStores[4]);
      let str = stateFromStores;
      if (stateFromStores == null) {
        str = "";
      }
      const product = analyticsLocations(stateFromStores[5]).useCollectiblesShopProduct(str, tmp9).product;
      noop = product;
      if (cResult[4] === analyticsLocations) {
        if (cResult[5] === product) {
          if (cResult[6] === shopAnalyticsContext) {
            if (cResult[7] === stateFromStores) {
              let tmp10 = cResult[8];
              let tmp11 = cResult[9];
            }
            const effect = noop.useEffect(tmp10, tmp11);
          }
        }
      }
      const fn2 = function v() {
        if (null != stateFromStores) {
          if (null != product) {
            let num = 0;
            if (obj4.getIsVariantProduct(product)) {
              const _Math = Math;
              const variants = product.variants;
              num = Math.max(
                0,
                variants.findIndex((skuId) => skuId.skuId === stateFromStores),
              );
            }
            obj4 = CollectiblesProductUtils;
            ActionSheetActionCreatorsDefault.hideActionSheet();
            const obj2 = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
            const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj2);
            const tmp8Result = openProductDetailsActionSheet;
          }
        }
      };
      const items1 = [stateFromStores, product, analyticsLocations, shopAnalyticsContext];
      cResult[4] = analyticsLocations;
      cResult[5] = product;
      cResult[6] = shopAnalyticsContext;
      cResult[7] = stateFromStores;
      cResult[8] = fn2;
      cResult[9] = items1;
      tmp11 = items1;
      tmp10 = fn2;
      const tmpResult2 = analyticsLocations(stateFromStores[5]);
    }
  : function useOpenDeepLinkedProduct(analyticsLocations) {
      analyticsLocations = analyticsLocations.analyticsLocations;
      const shopAnalyticsContext = analyticsLocations.shopAnalyticsContext;
      noop = undefined;
      const items = [CollectiblesShopStore];
      let stateFromStores;
      if (analyticsLocations.enabled) {
        stateFromStores = obj.useStateFromStores(items, () => initialProductSkuId.initialProductSkuId);
      }
      obj = analyticsLocations(stateFromStores[4]);
      let str = stateFromStores;
      if (stateFromStores == null) {
        str = "";
      }
      const product = analyticsLocations(stateFromStores[5]).useCollectiblesShopProduct(str, {
        needsCategory: false,
        seedCategoryStore: true,
        shouldFetchProduct: null != stateFromStores,
      }).product;
      noop = product;
      const items1 = [stateFromStores, product, analyticsLocations, shopAnalyticsContext];
      const effect = noop.useEffect(() => {
        if (null != stateFromStores) {
          if (null != product) {
            let num = 0;
            if (obj4.getIsVariantProduct(product)) {
              const _Math = Math;
              const variants = product.variants;
              num = Math.max(
                0,
                variants.findIndex((skuId) => skuId.skuId === stateFromStores),
              );
            }
            obj4 = CollectiblesProductUtils;
            ActionSheetActionCreatorsDefault.hideActionSheet();
            const obj2 = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
            const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj2);
            const tmp8Result = openProductDetailsActionSheet;
          }
        }
      }, items1);
    };
