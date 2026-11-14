// discord_app/modules/premium/native/hooks/usePremiumProductPricingString.tsx
import PremiumConstants from "../../PremiumConstants.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import usePremiumPlanPriceDefault from "usePremiumPlanPrice.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const PRICE_PLACEHOLDER = PremiumConstants.PRICE_PLACEHOLDER;
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(premiumType, YEAR) {
  const tmp = usePremiumPlanPriceDefault;
  const tmpResult = tmp(PremiumUtils.getPlanIdForPremiumType(premiumType, YEAR), { isGift: true });
  let priceString;
  if (tmpResult != null) {
    priceString = tmpResult.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
}
