// discord_app/modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanSubLabelRenderer.tsx
import BuyNitroPlanPriceDetailsDefault from "../BuyNitroPlanPriceDetails.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const PRICE_PLACEHOLDER = fn(1373).PRICE_PLACEHOLDER;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanSubLabelRenderer.tsx",
);

export const useBuyNitroPlanSubLabelRenderer = function useBuyNitroPlanSubLabelRenderer() {
  return noop.useCallback((planSelection, premiumTier) => {
    ({ priceStringByProductId, trialTier, discounted } = planSelection);
    if (!tmp) {
      if (!tmp2) {
        value = priceStringByProductId.get(premiumTier.productId);
        if (value == null) {
          value = PRICE_PLACEHOLDER;
        }
      }
      return value;
    }
    value = jsx(BuyNitroPlanPriceDetailsDefault, { planSelection, item: premiumTier });
  }, []);
};
