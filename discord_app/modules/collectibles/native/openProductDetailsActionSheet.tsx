// discord_app/modules/collectibles/native/openProductDetailsActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openCollectiblesShop from "../CollectiblesActionCreators.tsx";
import getProductOrbPrice from "../utils/CollectiblesProductUtils.tsx";

let c3 = "Shop Product Preview";
const result = obj132.fileFinishedImporting("modules/collectibles/native/openProductDetailsActionSheet.tsx");

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
  const tmpResult = openCollectiblesShop;
  obj = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9265, dependencyMap.paths), c3, obj, stack);
};
export const openProductDetailsActionSheetForSku = function openProductDetailsActionSheetForSku(skuId, stack) {
  skuId = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, shopAnalyticsContext } = skuId);
  let obj = openCollectiblesShop;
  obj.productDetailsOpened(skuId);
  obj = { skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9265, dependencyMap.paths), c3, obj, stack);
};