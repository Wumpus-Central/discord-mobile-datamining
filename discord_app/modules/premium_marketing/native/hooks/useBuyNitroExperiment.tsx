// === Module 13307: useBuyNitroExperiment ===

// Module 13307 (useBuyNitroExperiment)
import useInitialValueDefault from "useInitialValue" /* 5598 */;
import BuyNitroMarketingExperiment from "BuyNitroMarketingExperiment" /* 13308 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_5 = fn(7421).usePremiumPlanPurchasedStore;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroExperiment.tsx");

export const useBuyNitroExperiment = function useBuyNitroExperiment(isNitroHomeSurface) {
  isNitroHomeSurface = isNitroHomeSurface.isNitroHomeSurface;
  ({ userHasSubscription, isConfirmedNonSubscriber } = isNitroHomeSurface);
  let canRenderRedesignUpsellEarly = useInitialValueDefault(() => BuyNitroMarketingExperiment.getMobileNitroMarketingRedesignExperiment({ location: "PremiumMarketingPage" }));
  const tmp3 = _slicedToArray(noop.useState(false), 2);
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