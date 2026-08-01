// === Module 11927: useCanGiftProduct ===

// Module 11927 (useCanGiftProduct)
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(8674) /* useCurrentUser */.useCurrentUser();
  const obj = require(8674) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(8676) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(8676) /* apexExperiment */;
  let result = require(5815) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(5815) /* getItemRecordsFromPurchases */;
  const result1 = require(5815) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(5815) /* getItemRecordsFromPurchases */;
  const result2 = require(5814) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(5814) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3839);
  let tmpResult = tmp(5815);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(3839).canUseShopDiscounts(currentUser));
  tmpResult = tmp(5815);
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
    result = tmp(5815).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(5815);
  }
  if (!result) {
    result = !tmp(3852).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(3852);
  }
  return !result;
};