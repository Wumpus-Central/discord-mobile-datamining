// discord_app/modules/collectibles/hooks/useCanGiftProduct.tsx
import { CollectiblesItemType } from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import { getPremiumPlanItem } from "../../../utils/PremiumUtils.tsx";
import { getItemRecordsFromPurchases } from "../CollectiblesUtils.tsx";
import { apexExperiment } from "../experiments/CollectiblesProfileFrameGiftingExperiment.tsx";
import { getProductOrbPrice } from "../utils/CollectiblesProductUtils.tsx";
import { useCurrentUser } from "useCurrentUser.tsx";
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = useCurrentUser.useCurrentUser();
  const obj = useCurrentUser;
  const isProfileFrameGiftingEnabled = apexExperiment.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = apexExperiment;
  let result = getItemRecordsFromPurchases.isPremiumCollectiblesProduct(product);
  const obj3 = getItemRecordsFromPurchases;
  const result1 = getItemRecordsFromPurchases.isFreeCollectiblesProduct(product);
  const obj4 = getItemRecordsFromPurchases;
  const result2 = getProductOrbPrice.isOrbsExclusiveProduct(product);
  const obj5 = getProductOrbPrice;
  const tmp8 = product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = getPremiumPlanItem;
  let tmpResult = tmp(7016);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(getPremiumPlanItem.canUseShopDiscounts(currentUser));
  tmpResult = tmp(7016);
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
    result = product.type === tmp(1949).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(7016).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(7016);
  }
  if (!result) {
    result = !tmp(3979).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(3979);
  }
  return !result;
};