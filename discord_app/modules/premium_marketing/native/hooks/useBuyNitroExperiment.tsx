// discord_app/modules/premium_marketing/native/hooks/useBuyNitroExperiment.tsx
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import BuyNitroMarketingExperiment from "../BuyNitroMarketingExperiment.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_5 = fn(7421).usePremiumPlanPurchasedStore;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroExperiment.tsx");

export const useBuyNitroExperiment = function useBuyNitroExperiment(isNitroHomeSurface) {
  isNitroHomeSurface = isNitroHomeSurface.isNitroHomeSurface;
  ({ userHasSubscription, isConfirmedNonSubscriber } = isNitroHomeSurface);
  let canRenderRedesignUpsellEarly = useInitialValueDefault(() =>
    BuyNitroMarketingExperiment.getMobileNitroMarketingRedesignExperiment({ location: "PremiumMarketingPage" }),
  );
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
