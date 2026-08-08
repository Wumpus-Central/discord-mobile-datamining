// discord_app/modules/collectibles/native/openProductDetailsActionSheet.tsx
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { openCollectiblesShop } from "../CollectiblesActionCreators.tsx";
import { getProductOrbPrice } from "../utils/CollectiblesProductUtils.tsx";
let c3 = "Shop Product Preview";
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/collectibles/native/openProductDetailsActionSheet.tsx");

export const PRODUCT_DETAILS_ACTION_SHEET_KEY = "Shop Product Preview";
export const openProductDetailsActionSheet = function openProductDetailsActionSheet(arg0, stack) {
  let analyticsLocations;
  let initialVariantIndex;
  let product;
  let shopAnalyticsContext;
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
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(9435, tmp2.paths), c3, obj, stack);
};