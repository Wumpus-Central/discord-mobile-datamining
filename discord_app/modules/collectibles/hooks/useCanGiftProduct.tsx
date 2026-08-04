let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(9266) /* useCurrentUser */.useCurrentUser();
  const obj = require(9266) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(9269) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(9269) /* apexExperiment */;
  let result = require(6922) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(6922) /* getItemRecordsFromPurchases */;
  const result1 = require(6922) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(6922) /* getItemRecordsFromPurchases */;
  const result2 = require(6921) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(6921) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3931);
  let tmpResult = tmp(6922);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(3931).canUseShopDiscounts(currentUser));
  tmpResult = tmp(6922);
  const result3 = tmpResult.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = tmp8;
  }
  if (!result) {
    result = product.type === tmp(1901).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(6922).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(6922);
  }
  if (!result) {
    result = !tmp(3944).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(3944);
  }
  return !result;
};