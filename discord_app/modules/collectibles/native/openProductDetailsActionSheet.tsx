// discord_app/modules/collectibles/native/openProductDetailsActionSheet.tsx
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
  let obj = require("../utils/CollectiblesProductUtils.tsx") /* getProductOrbPrice */;
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
  require("../CollectiblesActionCreators.tsx") /* openCollectiblesShop */.productDetailsOpened(skuId);
  const tmp2 = dependencyMap;
  const tmpResult = require("../CollectiblesActionCreators.tsx") /* openCollectiblesShop */;
  obj = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9353, tmp2.paths), c3, obj, stack);
};