import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getPremiumPlanItem } from "../../../../utils/PremiumUtils.tsx";
import { SubscriptionPlans } from "../ProductIds.android.tsx";
// discord_app/modules/premium/native/hooks/usePremiumProductPricingString.tsx
import updateProduct from "updateProduct";
import { PRICE_PLACEHOLDER } from "GuildFeatures";

const require = arg1;
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, c3) {
  const planIdForPremiumType = _getPremiumPlanItem.getPlanIdForPremiumType(closure_0, c3);
  const obj = _getPremiumPlanItem;
  _require = _SubscriptionPlans.getProductIdForGift(planIdForPremiumType);
  const obj2 = _SubscriptionPlans;
  const items = [updateProduct];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_2.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};