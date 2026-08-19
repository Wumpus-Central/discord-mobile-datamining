// discord_app/modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanSubLabelRenderer.tsx
import noop from "../../../../../../_runtime/00019_noop.js";
import { PRICE_PLACEHOLDER } from "../../../../premium/PremiumConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const result = require("obj132").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanSubLabelRenderer.tsx");

export const useBuyNitroPlanSubLabelRenderer = function useBuyNitroPlanSubLabelRenderer() {
  return React.useCallback((planSelection, item) => {
    ({ priceStringByProductId, trialTier, discounted } = planSelection);
    if (!tmp) {
      if (!tmp2) {
        let value = priceStringByProductId.get(item.productId);
        if (value == null) {
          value = closure_3;
        }
      }
      return value;
    }
    value = callback2(callback(table[3]), { planSelection, item });
  }, []);
};