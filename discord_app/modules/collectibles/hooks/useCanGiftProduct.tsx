// discord_app/modules/collectibles/hooks/useCanGiftProduct.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import isPremiumGiftingSupported from "../../device/BillingPlatformUtils.tsx";
import getProductOrbPrice from "../utils/CollectiblesProductUtils.tsx";
import getItemRecordsFromPurchases from "../CollectiblesUtils.tsx";
import useCurrentUser from "useCurrentUser.tsx";

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