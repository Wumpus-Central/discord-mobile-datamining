// discord_app/modules/collectibles/hooks/useCanGiftProduct.tsx
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require("useCurrentUser.tsx") /* useCurrentUser */.useCurrentUser();
  const obj = require("useCurrentUser.tsx") /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require("../experiments/CollectiblesProfileFrameGiftingExperiment.tsx") /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require("../experiments/CollectiblesProfileFrameGiftingExperiment.tsx") /* apexExperiment */;
  let result = require("../CollectiblesUtils.tsx") /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require("../CollectiblesUtils.tsx") /* getItemRecordsFromPurchases */;
  const result1 = require("../CollectiblesUtils.tsx") /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require("../CollectiblesUtils.tsx") /* getItemRecordsFromPurchases */;
  const result2 = require("../utils/CollectiblesProductUtils.tsx") /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require("../utils/CollectiblesProductUtils.tsx") /* getProductOrbPrice */;
  const tmp8 = product.type === require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx") /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = require("../../../utils/PremiumUtils.tsx");
  let tmpResult = tmp(6922);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(require("../../../utils/PremiumUtils.tsx").canUseShopDiscounts(currentUser));
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