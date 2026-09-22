// discord_app/modules/collectibles/native/openProductDetailsActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
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
  const isVariantProduct = CollectiblesProductUtils.getIsVariantProduct(product);
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
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(8450, dependencyMap.paths),
    c3,
    { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext },
    stack,
  );
  const obj2 = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
};
export const openProductDetailsActionSheetForSku = function openProductDetailsActionSheetForSku(skuId, stack) {
  skuId = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile } = skuId);
  CollectiblesActionCreators.productDetailsOpened(skuId);
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(8450, dependencyMap.paths),
    c3,
    { skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile },
    stack,
  );
};
