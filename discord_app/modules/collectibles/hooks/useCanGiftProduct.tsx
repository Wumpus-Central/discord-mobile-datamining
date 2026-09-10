// === Module 13236: useCanGiftProduct ===

// Module 13236 (useCanGiftProduct)
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4262 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4275 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7605 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7606 */;
import useCurrentUser from "useCurrentUser" /* 8241 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = useCurrentUser.useCurrentUser();
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
  const result1 = CollectiblesUtils.isFreeCollectiblesProduct(product);
  const result2 = CollectiblesProductUtils.isOrbsExclusiveProduct(product);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = CollectiblesUtils.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const result3 = CollectiblesUtils.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
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
    let tmpResult = CollectiblesUtils;
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmpResult.shouldHideGiftingForCurrency(currency);
  }
  if (!result) {
    tmpResult = BillingPlatformUtils;
    result = !tmpResult.isCollectibleGiftingSupported();
  }
  return !result;
};