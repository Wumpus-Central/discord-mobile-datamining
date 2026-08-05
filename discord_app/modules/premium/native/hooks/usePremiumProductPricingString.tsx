// discord_app/modules/premium/native/hooks/usePremiumProductPricingString.tsx
import updateProduct from "updateProduct";
import { PRICE_PLACEHOLDER } from "GuildFeatures";

const require = arg1;
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, c3) {
  const planIdForPremiumType = _require("../../../../utils/PremiumUtils.tsx").getPlanIdForPremiumType(closure_0, c3);
  const obj = _require("../../../../utils/PremiumUtils.tsx");
  _require = _require("../ProductIds.android.tsx").getProductIdForGift(planIdForPremiumType);
  const obj2 = _require("../ProductIds.android.tsx");
  const items = [updateProduct];
  const stateFromStores = _require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => outer1_2.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};