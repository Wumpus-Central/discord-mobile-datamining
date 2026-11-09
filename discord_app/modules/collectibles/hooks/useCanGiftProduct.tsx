// === Module 15337: useCanGiftProduct ===

// Module 15337 (useCanGiftProduct)
import CollectiblesItemType from "CollectiblesItemType" /* 2111 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2183 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7807 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7808 */;
import useCurrentUser from "useCurrentUser" /* 8820 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export function useCanGiftProduct(product) {
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
}