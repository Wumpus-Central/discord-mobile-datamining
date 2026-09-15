// === Module 13298: useCanGiftProduct ===

// Module 13298 (useCanGiftProduct)
import CollectiblesItemType from "CollectiblesItemType" /* 1890 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4297 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4310 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7660 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7661 */;
import useCurrentUser from "useCurrentUser" /* 8298 */;
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
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = CollectiblesUtils.shouldHideGiftingForCurrency(currency);
    const tmpResult = CollectiblesUtils;
  }
  if (!result) {
    result = !BillingPlatformUtils.isCollectibleGiftingSupported();
    const tmpResult2 = BillingPlatformUtils;
  }
  return !result;
};