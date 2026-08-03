let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(8851) /* useCurrentUser */.useCurrentUser();
  const obj = require(8851) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(8853) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(8853) /* apexExperiment */;
  let result = require(6910) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(6910) /* getItemRecordsFromPurchases */;
  const result1 = require(6910) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(6910) /* getItemRecordsFromPurchases */;
  const result2 = require(6909) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(6909) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3901);
  let tmpResult = tmp(6910);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(3901).canUseShopDiscounts(currentUser));
  tmpResult = tmp(6910);
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
    result = tmp(6910).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(6910);
  }
  if (!result) {
    result = !tmp(3914).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(3914);
  }
  return !result;
};