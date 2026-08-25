// discord_app/modules/premium/native/hooks/usePremiumProductPricingString.tsx
import closure_2 from "../../../../stores/native/IAPStore.android.tsx";
import { PRICE_PLACEHOLDER } from "../../PremiumConstants.tsx";
import { getPremiumPlanItem } from "../../../../utils/PremiumUtils.tsx";
import { SubscriptionPlans } from "../ProductIds.android.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, YEAR) {
  const planIdForPremiumType = require("../../../../utils/PremiumUtils.tsx").getPlanIdForPremiumType(closure_0, YEAR);
  const obj = getPremiumPlanItem;
  _require = require("../ProductIds.android.tsx").getProductIdForGift(planIdForPremiumType);
  const obj2 = SubscriptionPlans;
  const items = [closure_2];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_2.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};