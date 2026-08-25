// === Module 12370: useCanGiftProduct ===

// Module 12370 (useCanGiftProduct)
import set from "set" /* 2 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4043 */;
import getProductOrbPrice from "getProductOrbPrice" /* 7159 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 7160 */;
import useCurrentUser from "useCurrentUser" /* 9496 */;

let result = set.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = useCurrentUser.useCurrentUser();
  const obj = useCurrentUser;
  let result = getItemRecordsFromPurchases.isPremiumCollectiblesProduct(product);
  const obj2 = getItemRecordsFromPurchases;
  const result1 = getItemRecordsFromPurchases.isFreeCollectiblesProduct(product);
  const obj3 = getItemRecordsFromPurchases;
  const result2 = getProductOrbPrice.isOrbsExclusiveProduct(product);
  const obj4 = getProductOrbPrice;
  const obj5 = getPremiumPlanItemDefault;
  const canUseShopDiscountsResult = getPremiumPlanItemDefault.canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = getItemRecordsFromPurchases.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const obj6 = getItemRecordsFromPurchases;
  const result3 = getItemRecordsFromPurchases.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = product.type === tmp(1950).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let tmpResult = tmp(7160);
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmpResult.shouldHideGiftingForCurrency(currency);
  }
  if (!result) {
    tmpResult = tmp(4056);
    result = !tmpResult.isCollectibleGiftingSupported();
  }
  return !result;
};