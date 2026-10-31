// === Module 17827: useOpenDeepLinkedProduct ===

// Module 17827 (useOpenDeepLinkedProduct)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7731 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8747 */;
import noop from "module_19" /* 19 */;
import CollectiblesShopStore from "CollectiblesShopStore" /* 7759 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useOpenDeepLinkedProduct.tsx");

export default function useOpenDeepLinkedProduct(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const shopAnalyticsContext = analyticsLocations.shopAnalyticsContext;
  noop = undefined;
  const items = [CollectiblesShopStore];
  let stateFromStores;
  if (analyticsLocations.enabled) {
    stateFromStores = obj.useStateFromStores(items, () => initialProductSkuId.initialProductSkuId);
  }
  obj = analyticsLocations(stateFromStores[2]);
  let str = stateFromStores;
  if (stateFromStores == null) {
    str = "";
  }
  const product = analyticsLocations(stateFromStores[3]).useCollectiblesShopProduct(str, { needsCategory: false, seedCategoryStore: true, shouldFetchProduct: null != stateFromStores }).product;
  noop = product;
  const items1 = [stateFromStores, product, analyticsLocations, shopAnalyticsContext];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      if (null != product) {
        let num = 0;
        if (obj4.getIsVariantProduct(product)) {
          const _Math = Math;
          const variants = product.variants;
          num = Math.max(0, variants.findIndex((skuId) => skuId.skuId === stateFromStores));
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