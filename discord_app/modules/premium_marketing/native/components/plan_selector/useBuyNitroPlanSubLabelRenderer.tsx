// === Module 12841: useBuyNitroPlanSubLabelRenderer ===

// Module 12841 (useBuyNitroPlanSubLabelRenderer)
import noop from "noop" /* 19 */;
import { PRICE_PLACEHOLDER } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;

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