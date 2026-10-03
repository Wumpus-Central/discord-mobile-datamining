// === Module 12995: useCanGiftProduct ===

// Module 12995 (useCanGiftProduct)
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4541 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7065 */;
import useCurrentUser from "useCurrentUser" /* 7849 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  const currentUser = useCurrentUser.useCurrentUser();
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(type);
  const result1 = CollectiblesUtils.isFreeCollectiblesProduct(type);
  const result2 = CollectiblesProductUtils.isOrbsExclusiveProduct(type);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = CollectiblesUtils.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const result3 = CollectiblesUtils.extractPriceByPurchaseTypes(type, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = type.type === CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
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
}) : ((type) => {
  const currentUser = useCurrentUser.useCurrentUser();
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(type);
  const result1 = CollectiblesUtils.isFreeCollectiblesProduct(type);
  const result2 = CollectiblesProductUtils.isOrbsExclusiveProduct(type);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = CollectiblesUtils.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const result3 = CollectiblesUtils.extractPriceByPurchaseTypes(type, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = type.type === CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
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
});