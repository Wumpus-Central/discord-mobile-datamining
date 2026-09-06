// discord_app/modules/collectibles/native/openProductDetailsActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3 = "Shop Product Preview";
const result = size.fileFinishedImporting("modules/collectibles/native/openProductDetailsActionSheet.tsx");

export const PRODUCT_DETAILS_ACTION_SHEET_KEY = "Shop Product Preview";
export const openProductDetailsActionSheet = function openProductDetailsActionSheet(arg0, stack) {
  ({ product, initialVariantIndex } = arg0);
  if (initialVariantIndex === undefined) {
    initialVariantIndex = 0;
  }
  ({ analyticsLocations, shopAnalyticsContext } = arg0);
  let obj = CollectiblesProductUtils;
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
  CollectiblesActionCreators.productDetailsOpened(skuId);
  const tmpResult = CollectiblesActionCreators;
  obj = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8177, dependencyMap.paths), c3, obj, stack);
};
export const openProductDetailsActionSheetForSku = function openProductDetailsActionSheetForSku(skuId, stack) {
  skuId = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile } = skuId);
  let obj = CollectiblesActionCreators;
  obj.productDetailsOpened(skuId);
  obj = { skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile };
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8177, dependencyMap.paths), c3, obj, stack);
};
