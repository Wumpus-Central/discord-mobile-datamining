// === Module 6512: useBuyNitroExperiment ===

// Module 6512 (useBuyNitroExperiment)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { usePremiumPlanPurchasedStore as closure_5 } from "usePremiumPlanPurchasedStore";

const require = arg1;
const result = require("usePremiumPlanPurchasedStore").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroExperiment.tsx");

export const useBuyNitroExperiment = function useBuyNitroExperiment(isNitroHomeSurface) {
  let isConfirmedNonSubscriber;
  let userHasSubscription;
  isNitroHomeSurface = isNitroHomeSurface.isNitroHomeSurface;
  ({ userHasSubscription, isConfirmedNonSubscriber } = isNitroHomeSurface);
  let canRenderRedesignUpsellEarly = importDefault(5507)(() => callback(table[4]).getMobileNitroMarketingRedesignExperiment({ location: "PremiumMarketingPage" }));
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  let showRedesignUpsell = canRenderRedesignUpsellEarly;
  if (canRenderRedesignUpsellEarly) {
    showRedesignUpsell = !userHasSubscription;
  }
  if (showRedesignUpsell) {
    showRedesignUpsell = !isNitroHomeSurface;
  }
  if (!showRedesignUpsell) {
    let tmp6 = first;
    if (first) {
      tmp6 = tmp2;
    }
    showRedesignUpsell = tmp6;
  }
  if (first !== showRedesignUpsell) {
    tmp3[1](showRedesignUpsell);
  }
  if (canRenderRedesignUpsellEarly) {
    canRenderRedesignUpsellEarly = !isNitroHomeSurface;
  }
  if (canRenderRedesignUpsellEarly) {
    canRenderRedesignUpsellEarly = isConfirmedNonSubscriber;
  }
  return { canRenderRedesignUpsellEarly, showRedesignUpsell };
};