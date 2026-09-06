// discord_app/modules/collectibles/hooks/useCanGiftProduct.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import BillingPlatformUtils from "../../device/BillingPlatformUtils.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import useCurrentUser from "useCurrentUser.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = useCurrentUser.useCurrentUser();
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
  const result1 = CollectiblesUtils.isFreeCollectiblesProduct(product);
  const result2 = CollectiblesProductUtils.isOrbsExclusiveProduct(product);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType =
    CollectiblesUtils.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
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
