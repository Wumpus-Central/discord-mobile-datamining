// === Module 12763: PRODUCT_DETAILS_ACTION_SHEET_KEY ===

// Module 12763 (PRODUCT_DETAILS_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import openCollectiblesShop from "openCollectiblesShop" /* 7296 */;
import getProductOrbPrice from "getProductOrbPrice" /* 7308 */;

let c3 = "Shop Product Preview";
const result = set.fileFinishedImporting("modules/collectibles/native/openProductDetailsActionSheet.tsx");

export const PRODUCT_DETAILS_ACTION_SHEET_KEY = "Shop Product Preview";
export const openProductDetailsActionSheet = function openProductDetailsActionSheet(arg0, stack) {
  ({ product, initialVariantIndex } = arg0);
  if (initialVariantIndex === undefined) {
    initialVariantIndex = 0;
  }
  ({ analyticsLocations, shopAnalyticsContext } = arg0);
  let obj = getProductOrbPrice;
  const isVariantProduct = obj.getIsVariantProduct(product);
  let num = 0;
  if (isVariantProduct) {
    num = 0;
    if (initialVariantIndex < product.variants.length) {
      num = initialVariantIndex;
    }
  }
  if (isVariantProduct) {
    let skuId = product.variants[num].skuId;
  } else {
    skuId = product.skuId;
  }
  openCollectiblesShop.productDetailsOpened(skuId);
  const tmp2 = dependencyMap;
  const tmpResult = openCollectiblesShop;
  obj = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(12764, tmp2.paths), c3, obj, stack);
};
export const openProductDetailsActionSheetForSku = function openProductDetailsActionSheetForSku(skuId, stack) {
  skuId = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, shopAnalyticsContext } = skuId);
  let obj = openCollectiblesShop;
  obj.productDetailsOpened(skuId);
  obj = { skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(12764, dependencyMap.paths), c3, obj, stack);
};