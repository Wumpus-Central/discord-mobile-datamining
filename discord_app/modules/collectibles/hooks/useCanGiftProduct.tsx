// === Module 11996: useCanGiftProduct ===

// Module 11996 (useCanGiftProduct)
import obj132 from "obj132" /* 2 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import isPremiumGiftingSupported from "isPremiumGiftingSupported" /* 4052 */;
import getProductOrbPrice from "getProductOrbPrice" /* 5312 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 5313 */;
import useCurrentUser from "useCurrentUser" /* 9176 */;

let result = obj132.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = useCurrentUser.useCurrentUser();
  let result = getItemRecordsFromPurchases.isPremiumCollectiblesProduct(product);
  const result1 = getItemRecordsFromPurchases.isFreeCollectiblesProduct(product);
  const result2 = getProductOrbPrice.isOrbsExclusiveProduct(product);
  const canUseShopDiscountsResult = getPremiumPlanItemDefault.canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = getItemRecordsFromPurchases.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const result3 = getItemRecordsFromPurchases.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = product.type === CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let tmpResult = getItemRecordsFromPurchases;
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmpResult.shouldHideGiftingForCurrency(currency);
  }
  if (!result) {
    tmpResult = isPremiumGiftingSupported;
    result = !tmpResult.isCollectibleGiftingSupported();
  }
  return !result;
};